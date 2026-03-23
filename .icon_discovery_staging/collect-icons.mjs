import { readdirSync, writeFileSync } from "fs";
import { join } from "path";

// Collect all SVG filenames from public/ (the only icon source in this project)
const publicDir = join(process.cwd(), "public");
const svgFiles = readdirSync(publicDir).filter((f) => f.endsWith(".svg"));
const icons = svgFiles.map((f) => f.replace(/\.svg$/, ""));

const usage = `
# Icon Usage

This project does not have a dedicated icon library installed. The available icons
are SVG files located in the \`/public\` directory.

## Available Icons

| Icon Name | File |
|-----------|------|
${icons.map((name) => `| \`${name}\` | \`/public/${name}.svg\` |`).join("\n")}

## Usage in Next.js (via \`next/image\`)

\`\`\`tsx
import Image from "next/image";

// Basic usage
<Image src="/globe.svg" alt="Globe" width={24} height={24} />
<Image src="/file.svg" alt="File" width={24} height={24} />
<Image src="/window.svg" alt="Window" width={24} height={24} />
<Image src="/next.svg" alt="Next.js Logo" width={100} height={24} />
<Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} />
\`\`\`

## Usage as Inline \`<img>\` Tag

\`\`\`tsx
<img src="/globe.svg" alt="Globe" width={24} height={24} />
\`\`\`

## Notes

- **No variants** (outline, round, sharp, two-tone) are available — these are static SVG files.
- The \`next\` and \`vercel\` icons are brand/logo icons; \`file\`, \`globe\`, and \`window\` are generic glyphs.
- To add a full icon library, consider installing one such as:
  - [Lucide React](https://lucide.dev) — \`npm install lucide-react\`
  - [Heroicons](https://heroicons.com) — \`npm install @heroicons/react\`
  - [Phosphor Icons](https://phosphoricons.com) — \`npm install @phosphor-icons/react\`
`.trim();

const output = { icons, usage };
writeFileSync(
  join(process.cwd(), ".icon_discovery_staging", "icons.json"),
  JSON.stringify(output, null, 2)
);

console.log("icons.json written with", icons.length, "icons:", icons);
