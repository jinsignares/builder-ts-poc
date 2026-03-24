/**
 * Builder.io Model Setup Script
 *
 * Adds custom fields to the existing `page` model via the Builder Admin GraphQL API.
 * These fields support SEO metadata and blog post content across all page entries.
 *
 * Prerequisites:
 *   - BUILDER_PRIVATE_KEY set in .env (Space Settings → API Keys → Private Key)
 *
 * Usage:
 *   node --env-file=.env scripts/setup-builder-models.mjs
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

const FIELDS_TO_ADD = [
  {
    name: "pageType",
    type: "text",
    defaultValue: "page",
    helperText: 'Content type: "page" for landing pages, "blog-post" for blog entries.',
    required: false,
  },
  {
    name: "seoTitle",
    type: "text",
    helperText: "SEO <title> tag (overrides the default page title).",
    required: false,
  },
  {
    name: "seoDescription",
    type: "longText",
    helperText: "SEO meta description (used for search results and OG tags).",
    required: false,
  },
  {
    name: "ogImage",
    type: "file",
    allowedFileTypes: ["jpeg", "jpg", "png", "webp"],
    helperText: "Open Graph / social share image.",
    required: false,
  },
  {
    name: "postExcerpt",
    type: "longText",
    helperText: "Short summary shown on the blog listing page (blog posts only).",
    required: false,
  },
  {
    name: "postAuthor",
    type: "text",
    helperText: "Author display name (blog posts only).",
    required: false,
  },
  {
    name: "publishedAt",
    type: "date",
    helperText: "Publication date (blog posts only).",
    required: false,
  },
  {
    name: "coverImage",
    type: "file",
    allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"],
    helperText: "Hero / cover image (blog posts only).",
    required: false,
  },
  {
    name: "tags",
    type: "list",
    subFields: [{ name: "tag", type: "text" }],
    helperText: "Content tags (blog posts only).",
    required: false,
  },
];

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

  const pageModel = models.find((m) => m.name === "page");

  if (!pageModel) {
    console.error(
      '❌  Could not find a model named "page" in your Builder space.\n' +
        "    Make sure your Private Key belongs to the correct space."
    );
    process.exit(1);
  }

  console.log(`✅  Found model: "${pageModel.name}" (id: ${pageModel.id})`);
  console.log(
    `    Existing fields: ${pageModel.fields.map((f) => f.name).join(", ") || "(none)"}\n`
  );

  const existingNames = new Set(pageModel.fields.map((f) => f.name));
  const fieldsToAdd = FIELDS_TO_ADD.filter((f) => !existingNames.has(f.name));

  if (fieldsToAdd.length === 0) {
    console.log("✅  All custom fields already exist. Nothing to add.");
    return;
  }

  console.log(
    `➕  Adding ${fieldsToAdd.length} new field(s): ${fieldsToAdd.map((f) => f.name).join(", ")}\n`
  );

  const updatedFields = [...pageModel.fields, ...fieldsToAdd];

  const result = await gql(`
    mutation UpdateModel($id: String!, $data: JSONObject!) {
      updateModel(body: { id: $id, data: $data }) {
        id
        name
        fields
      }
    }
  `, {
    id: pageModel.id,
    data: { fields: updatedFields },
  });

  const finalFields = result.updateModel.fields.map((f) => f.name);

  console.log("🎉  Model updated successfully!");
  console.log(`    All fields (${finalFields.length}): ${finalFields.join(", ")}`);
  console.log(
    "\n📌  Next steps:\n" +
      "    1. In Builder → Content → Page, open any entry.\n" +
      '    2. Click the "Data" tab — you\'ll see the new fields.\n' +
      "    3. Fill in SEO fields and publish.\n" +
      "    4. For blog posts, set pageType = blog-post and fill the post fields."
  );
}

main().catch((err) => {
  console.error("❌  Fatal error:", err.message);
  process.exit(1);
});
