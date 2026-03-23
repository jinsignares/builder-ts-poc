import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

// ── helpers ────────────────────────────────────────────────────────────────

/** Extract CSS custom properties from a specific block of CSS text. */
function extractCSSVars(src) {
  const result = {};
  const re = /(-{2}[\w-]+)\s*:\s*([^;]+);/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    result[m[1].trim()] = m[2].trim();
  }
  return result;
}

/**
 * Extract the raw text of a :root { … } block that is NOT inside a media
 * query, so we get light-mode defaults only.
 */
function extractRootBlock(src) {
  // Strip @media blocks first so their :root overrides don't interfere.
  const withoutMedia = src.replace(/@media[^{]*\{[\s\S]*?\}\s*\}/g, "");
  const match = withoutMedia.match(/:root\s*\{([^}]*)\}/);
  return match ? match[1] : "";
}

/**
 * Extract the raw text of an @theme inline { … } block.
 */
function extractThemeBlock(src) {
  const match = src.match(/@theme\s+inline\s*\{([^}]*)\}/);
  return match ? match[1] : "";
}

// ── read source files ──────────────────────────────────────────────────────

const globalsCss = readFileSync(resolve("app/globals.css"), "utf8");

const rootVars  = extractCSSVars(extractRootBlock(globalsCss));
const themeVars = extractCSSVars(extractThemeBlock(globalsCss));

// ── colour tokens ──────────────────────────────────────────────────────────

const colorTokenNames = [
  "--background",
  "--foreground",
  "--color-background",
  "--color-foreground",
];

const colorValues = {};
colorTokenNames.forEach((t) => {
  if (rootVars[t])  colorValues[t] = rootVars[t];
  if (themeVars[t]) colorValues[t] = themeVars[t];
});

// ── font / typography tokens ───────────────────────────────────────────────

const fontTokenNames = [
  "--font-sans",
  "--font-mono",
  "--font-geist-sans",
  "--font-geist-mono",
];

const fontValues = {};
fontTokenNames.forEach((t) => {
  const val = themeVars[t] ?? rootVars[t];
  fontValues[t] = val ?? "(next/font runtime value)";
});

// ── brand colours – hard-coded in component styles ─────────────────────────
// Not CSS custom properties yet, but consistently reused values in
// components/Navbar.tsx and components/Footer.tsx.

const brandColorTokens = {
  "--brand-bg-dark":     "#202020",
  "--brand-color-white": "#ffffff",
  "--brand-color-black": "#000000",
  "--brand-color-sale":  "#F35959",
  "--brand-color-muted": "#B5B5B5",
};

// ── assemble output ────────────────────────────────────────────────────────

const output = {
  tokenGroups: [
    {
      name: "color",
      tokens: colorTokenNames,
      tokenValues: colorValues,
      relevantFiles: ["app/globals.css"],
    },
    {
      name: "typography",
      tokens: fontTokenNames,
      tokenValues: fontValues,
      relevantFiles: ["app/globals.css", "app/layout.tsx"],
    },
    {
      name: "brand-color",
      tokens: Object.keys(brandColorTokens),
      tokenValues: brandColorTokens,
      relevantFiles: ["components/Navbar.tsx", "components/Footer.tsx"],
    },
  ],
};

writeFileSync(
  resolve(".token_discovery_staging/tokens.json"),
  JSON.stringify(output, null, 2)
);

console.log("tokens.json written successfully.");
console.log(JSON.stringify(output, null, 2));
