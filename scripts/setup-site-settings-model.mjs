/**
 * Builder.io Site Settings Model Setup Script
 *
 * Ensures a `site-settings` model exists and includes fields used by
 * the global navbar/settings flow.
 *
 * Prerequisites:
 *   - BUILDER_PRIVATE_KEY set in .env (Space Settings → API Keys → Private Key)
 *
 * Usage:
 *   node --env-file=.env scripts/setup-site-settings-model.mjs
 */

const PRIVATE_KEY = process.env.BUILDER_PRIVATE_KEY;
const ADMIN_URL = "https://cdn.builder.io/api/v2/admin";

if (!PRIVATE_KEY) {
  console.error(
    "❌  BUILDER_PRIVATE_KEY is not set.\n" +
      "    Add it to your .env file:\n" +
      "    BUILDER_PRIVATE_KEY=your_private_key_here\n" +
      "    (Space Settings → API Keys → Private Key)"
  );
  process.exit(1);
}

async function gql(query, variables = {}) {
  const res = await fetch(ADMIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${PRIVATE_KEY}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${JSON.stringify(json)}`);
  }
  if (json.errors?.length) {
    throw new Error(`GraphQL errors: ${JSON.stringify(json.errors, null, 2)}`);
  }

  return json.data;
}

const NAV_THIRD_LEVEL_SUB_FIELDS = [
  { name: "label", type: "text", defaultValue: "Nested item" },
  { name: "href", type: "text", defaultValue: "#" },
  { name: "noFollow", type: "boolean", defaultValue: false },
  { name: "openInNewTab", type: "boolean", defaultValue: false },
];

const NAV_SECOND_LEVEL_SUB_FIELDS = [
  { name: "label", type: "text", defaultValue: "Sub item" },
  { name: "href", type: "text", defaultValue: "#" },
  { name: "linkDescription", type: "text" },
  { name: "shortLabel", type: "text" },
  {
    name: "children",
    type: "list",
    helperText: "Third-level menu items.",
    subFields: NAV_THIRD_LEVEL_SUB_FIELDS,
  },
];

const SITE_SETTINGS_FIELDS = [
  {
    name: "headerMenu",
    type: "list",
    helperText: "Global header navigation items (supports up to 3 levels).",
    subFields: [
      { name: "label", type: "text", defaultValue: "Nav item" },
      { name: "href", type: "text", defaultValue: "#" },
      { name: "noFollow", type: "boolean", defaultValue: false },
      { name: "openInNewTab", type: "boolean", defaultValue: false },
      { name: "linkDescription", type: "text" },
      { name: "shortLabel", type: "text" },
      {
        name: "children",
        type: "list",
        helperText: "Second-level menu items.",
        subFields: NAV_SECOND_LEVEL_SUB_FIELDS,
      },
    ],
  },
  {
    name: "signInText",
    type: "text",
    defaultValue: "Sign In",
    helperText: "Header sign-in label.",
  },
  {
    name: "signInHref",
    type: "text",
    defaultValue: "https://app.teamsense.com/sign-in",
    helperText: "Header sign-in URL.",
  },
  {
    name: "ctaText",
    type: "text",
    defaultValue: "Book a Demo",
    helperText: "Primary header CTA label.",
  },
  {
    name: "ctaHref",
    type: "text",
    defaultValue: "/demo",
    helperText: "Primary header CTA URL.",
  },
];

function mergeFields(existingFields, requiredFields) {
  const byName = new Map(existingFields.map((field) => [field.name, field]));

  for (const requiredField of requiredFields) {
    byName.set(requiredField.name, {
      ...byName.get(requiredField.name),
      ...requiredField,
    });
  }

  return Array.from(byName.values());
}

async function tryCreateModel(name, fields) {
  const payload = {
    name,
    kind: "data",
    publicReadable: true,
    fields,
  };

  const payloadWithData = {
    name,
    kind: "data",
    data: {
      publicReadable: true,
      fields,
    },
  };

  const attempts = [
    {
      query: `
        mutation AddModel($body: JSONObject!) {
          addModel(body: $body) {
            id
            name
            kind
            fields
          }
        }
      `,
      variables: { body: payload },
      pick: (data) => data.addModel,
    },
    {
      query: `
        mutation AddModel($body: JSONObject!) {
          addModel(body: $body) {
            id
            name
            kind
            fields
          }
        }
      `,
      variables: { body: payloadWithData },
      pick: (data) => data.addModel,
    },
    {
      query: `
        mutation AddModel($input: JSONObject!) {
          addModel(input: $input) {
            id
            name
            kind
            fields
          }
        }
      `,
      variables: { input: payload },
      pick: (data) => data.addModel,
    },
    {
      query: `
        mutation AddModel($input: JSONObject!) {
          addModel(input: $input) {
            id
            name
            kind
            fields
          }
        }
      `,
      variables: { input: payloadWithData },
      pick: (data) => data.addModel,
    },
    {
      query: `
        mutation CreateModel($body: JSONObject!) {
          createModel(body: $body) {
            id
            name
            kind
            fields
          }
        }
      `,
      variables: { body: payload },
      pick: (data) => data.createModel,
    },
    {
      query: `
        mutation CreateModel($input: JSONObject!) {
          createModel(input: $input) {
            id
            name
            kind
            fields
          }
        }
      `,
      variables: { input: payload },
      pick: (data) => data.createModel,
    },
  ];

  let lastError = null;

  for (const attempt of attempts) {
    try {
      const data = await gql(attempt.query, attempt.variables);
      const model = attempt.pick(data);
      if (model?.id) {
        return model;
      }
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error("Unknown error creating model");
}

async function main() {
  console.log("🔍  Fetching models from Builder...\n");

  const { models } = await gql(`
    query {
      models {
        id
        name
        kind
        fields
      }
    }
  `);

  let siteSettingsModel = models.find((model) => model.name === "site-settings");

  if (!siteSettingsModel) {
    console.log('➕  Model "site-settings" not found. Attempting to create it...\n');

    try {
      siteSettingsModel = await tryCreateModel("site-settings", SITE_SETTINGS_FIELDS);
      console.log(`✅  Created model: "${siteSettingsModel.name}" (id: ${siteSettingsModel.id})`);
    } catch (error) {
      console.error(
        "❌  Could not auto-create model \"site-settings\" via Admin API.\n" +
          "    Please create a Data model named \"site-settings\" in Builder UI and re-run this script.\n"
      );
      throw error;
    }
  } else {
    console.log(`✅  Found model: "${siteSettingsModel.name}" (id: ${siteSettingsModel.id})`);
  }

  const existingFields = Array.isArray(siteSettingsModel.fields)
    ? siteSettingsModel.fields
    : [];

  const updatedFields = mergeFields(existingFields, SITE_SETTINGS_FIELDS);

  if (JSON.stringify(existingFields) === JSON.stringify(updatedFields)) {
    console.log("✅  site-settings already has the expected fields. Nothing to update.");
    return;
  }

  const result = await gql(
    `
      mutation UpdateModel($id: String!, $data: JSONObject!) {
        updateModel(body: { id: $id, data: $data }) {
          id
          name
          fields
        }
      }
    `,
    {
      id: siteSettingsModel.id,
      data: { fields: updatedFields },
    }
  );

  console.log("🎉  site-settings model updated successfully!");
  console.log(
    `    Fields now present (${result.updateModel.fields.length}): ${result.updateModel.fields
      .map((field) => field.name)
      .join(", ")}`
  );
  console.log(
    "\n📌  Next steps:\n" +
      "    1. In Builder → Content, create or open a `site-settings` entry.\n" +
      "    2. Fill `headerMenu`, `signIn*`, and `cta*` values.\n" +
      "    3. Publish the entry to drive navbar content globally."
  );
}

main().catch((error) => {
  console.error("\n❌  Fatal error:", error.message);
  process.exit(1);
});
