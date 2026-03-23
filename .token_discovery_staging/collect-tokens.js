const fs = require("fs");
const path = require("path");

const output = {
  tokenGroups: [
    {
      name: "color-",
      tokens: [
        "--background",
        "--foreground",
        "--color-background",
        "--color-foreground",
      ],
      tokenValues: {
        "--background": "#ffffff",
        "--foreground": "#171717",
        "--color-background": "var(--background)",
        "--color-foreground": "var(--foreground)",
      },
      relevantFiles: ["app/globals.css"],
    },
    {
      name: "typography-",
      tokens: [
        "--font-sans",
        "--font-mono",
        "--font-geist-sans",
        "--font-geist-mono",
      ],
      tokenValues: {
        "--font-sans": "var(--font-geist-sans)",
        "--font-mono": "var(--font-geist-mono)",
        "--font-geist-sans": "Geist (Next.js font variable)",
        "--font-geist-mono": "Geist Mono (Next.js font variable)",
      },
      relevantFiles: ["app/globals.css", "app/layout.tsx"],
    },
    {
      name: "brand-color-",
      tokens: [
        "brand-color-dark",
        "brand-color-sale",
        "brand-color-muted",
        "brand-color-white",
      ],
      tokenValues: {
        "brand-color-dark": "#202020",
        "brand-color-sale": "#F35959",
        "brand-color-muted": "#B5B5B5",
        "brand-color-white": "#ffffff",
      },
      relevantFiles: ["components/Navbar.tsx", "components/Footer.tsx"],
    },
  ],
};

const outPath = path.join(__dirname, "tokens.json");
fs.writeFileSync(outPath, JSON.stringify(output, null, 2));
console.log("tokens.json written to", outPath);
