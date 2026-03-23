import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const root = resolve(".");

// ── 1. color-- tokens from app/globals.css ─────────────────────────────────

const globalsCss = readFileSync(resolve(root, "app/globals.css"), "utf8");

function extractCssCustomProps(css) {
  const result = {};
  // Match --token-name: value; inside :root blocks and @theme blocks
  const propRe = /(--[\w-]+)\s*:\s*([^;]+);/g;
  let m;
  while ((m = propRe.exec(css)) !== null) {
    const name = m[1].trim();
    const value = m[2].trim();
    // Skip dark-mode overrides (we want the default / light value)
    if (name in result) continue;
    result[name] = value;
  }
  return result;
}

const allCssProps = extractCssCustomProps(globalsCss);

// Split into color-- and typography-- groups based on name prefix
const colorTokens = {};
const typographyTokens = {};

for (const [k, v] of Object.entries(allCssProps)) {
  if (k.startsWith("--color-") || k === "--background" || k === "--foreground") {
    colorTokens[k] = v;
  } else if (k.startsWith("--font-")) {
    typographyTokens[k] = v;
  }
}

// ── 2. typography-- font variables from app/layout.tsx ────────────────────

const layoutTsx = readFileSync(resolve(root, "app/layout.tsx"), "utf8");

// Extract Next.js font CSS variable names: variable: "--font-xxx"
const fontVarRe = /variable:\s*["'](--[\w-]+)["']/g;
let fm;
while ((fm = fontVarRe.exec(layoutTsx)) !== null) {
  const varName = fm[1];
  if (!(varName in typographyTokens)) {
    // These are injected by Next.js at runtime; value is a generated class
    typographyTokens[varName] = "(runtime — injected by next/font)";
  }
}

// ── 3. brand-color-- tokens — recurring hex values across components ───────

// Colors collected by reading Navbar.tsx, Footer.tsx, Hero.module.css
const brandColors = {
  "--brand-color-teal-darkest": "#0E3F3A",
  "--brand-color-teal-dark":    "#145851",
  "--brand-color-teal-medium":  "#1C7E74",
  "--brand-color-teal-light":   "#DFEDEC",
  "--brand-color-teal-pale":    "#BFDBD8",
  "--brand-color-teal-faint":   "#EFF6F5",
  "--brand-color-gold":         "#F6B725",
  "--brand-color-footer-bg":    "#202020",
  "--brand-color-sale-red":     "#F35959",
  "--brand-color-message-blue": "#0078FF",
};

// ── 4. Assemble output ─────────────────────────────────────────────────────

const output = {
  tokenGroups: [
    {
      name: "brand-color--",
      tokens: Object.keys(brandColors),
      tokenValues: brandColors,
      relevantFiles: [
        "components/Navbar.tsx",
        "components/Footer.tsx",
        "components/Hero.module.css",
      ],
    },
    {
      name: "color--",
      tokens: Object.keys(colorTokens),
      tokenValues: colorTokens,
      relevantFiles: ["app/globals.css"],
    },
    {
      name: "typography--",
      tokens: Object.keys(typographyTokens),
      tokenValues: typographyTokens,
      relevantFiles: ["app/globals.css", "app/layout.tsx"],
    },
  ],
};

writeFileSync(
  resolve(root, ".token_discovery_staging/tokens.json"),
  JSON.stringify(output, null, 2)
);

console.log("tokens.json written successfully.");
console.log(JSON.stringify(output, null, 2));
