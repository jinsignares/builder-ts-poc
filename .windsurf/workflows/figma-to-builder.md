---
description: Complete guide from Figma design to Builder.io component
---

# Figma to Builder.io Component Workflow

This guide walks you through the complete process of converting a Figma design into a custom component that appears in your Builder.io dashboard.

## Prerequisites

- Figma design file with your component
- Next.js project with Builder.io installed
- Builder.io account with API key set in `.env`

## Step 1: Export Design from Figma

1. **Open your Figma file** and select the component/frame you want to export
2. **Use Builder.io Figma Plugin** (recommended):
   - Install "Builder.io" plugin in Figma
   - Select your design
   - Click Plugins → Builder.io → "Generate Code"
   - Choose "React" as framework
   - Copy the generated code
3. **Alternative - Manual Export**:
   - Right-click the frame → Copy as → Copy as SVG (for icons)
   - Export images as PNG/WebP for photos
   - Note down colors, fonts, spacing from the design

## Step 2: Create the Component File

1. **Create a new component file** in your `components/` directory:
   ```bash
   touch components/YourComponent.tsx
   ```

2. **Write the component using Tailwind CSS** (not styled-jsx):
   ```tsx
   "use client"; // Add if component has interactivity
   
   export default function YourComponent() {
     return (
       <div className="bg-[#202020] w-full p-6">
         {/* Your component JSX with Tailwind classes */}
       </div>
     );
   }
   ```

3. **Important styling rules for Builder.io compatibility**:
   - ✅ Use Tailwind CSS classes
   - ✅ Use inline `style` prop for custom fonts
   - ❌ Avoid `<style jsx>` blocks (won't work in Builder.io)
   - ❌ Avoid CSS modules (limited support)

## Step 3: Register Component with Builder.io

1. **Open `builder-registry.ts`** in your project root

2. **Add your component registration**:
   ```typescript
   import { Builder } from "@builder.io/react";
   import dynamic from "next/dynamic";
   
   Builder.registerComponent(
     dynamic(() => import("./components/YourComponent")),
     {
       name: "YourComponent",
       inputs: [
         {
           name: "title",
           type: "string",
           defaultValue: "Default Title",
         },
         {
           name: "backgroundColor",
           type: "color",
           defaultValue: "#202020",
         },
       ],
     }
   );
   ```

3. **Component input types** you can use:
   - `string` - Text input
   - `number` - Number input
   - `boolean` - Toggle switch
   - `color` - Color picker
   - `file` - Image upload
   - `richText` - Rich text editor
   - `list` - Array of items
   - `object` - Nested object

## Step 4: Test Component Locally

1. **Start your dev server**:
   ```bash
   npm run dev
   ```

2. **Verify it runs** at `http://localhost:3000`

3. **Check for errors** in the terminal and browser console

## Step 5: Index Components (Optional but Recommended)

1. **Run the Builder.io indexing tool**:
   ```bash
   npx "@builder.io/dev-tools@latest" index-repo
   ```

2. **Follow the prompts**:
   - Design system scope: Organization
   - Design system name: your_project_name

3. **Create `builder.config.json`** in project root:
   ```json
   {
     "designSystems": ["your_project_name"]
   }
   ```

4. This enables AI-powered code generation and better component discovery

## Step 6: Configure Builder.io Dashboard

1. **Go to Builder.io dashboard** → Your space

2. **Set preview URL**:
   - Navigate to Models → Page
   - Set Preview URL to: `http://localhost:3000`
   - Or for specific pages: `http://localhost:3000/[page-url]`

3. **Ensure your dev server is running** on port 3000

## Step 7: Use Component in Builder.io

1. **Open Builder.io visual editor**

2. **Create or edit a page**

3. **Look for "Custom Components"** panel on the left sidebar

4. **Drag your component** onto the canvas

5. **Configure inputs** in the right panel (if you defined any)

6. **Preview and publish** your page

## Troubleshooting

### Component not appearing in Builder.io

- ✅ Verify dev server is running on correct port
- ✅ Check `builder-registry.ts` has no syntax errors
- ✅ Refresh Builder.io dashboard (hard refresh: Cmd+Shift+R)
- ✅ Check browser console for errors

### Component renders incorrectly

- ✅ Convert styled-jsx to Tailwind CSS
- ✅ Avoid CSS-in-JS libraries
- ✅ Use inline styles for custom fonts
- ✅ Test component in isolation first

### Preview not loading

- ✅ Verify preview URL matches your dev server
- ✅ Check CORS settings (Builder.io dev tools handle this)
- ✅ Ensure `NEXT_PUBLIC_BUILDER_API_KEY` is set in `.env`

## Best Practices

1. **Component Design**:
   - Keep components focused and reusable
   - Use props/inputs for customization
   - Make components responsive with Tailwind breakpoints

2. **Naming**:
   - Use PascalCase for component names
   - Be descriptive: `ProductCard` not `Card`

3. **Inputs**:
   - Provide sensible defaults
   - Add helpful descriptions
   - Group related inputs

4. **Testing**:
   - Test component standalone first
   - Test in Builder.io preview
   - Test on mobile and desktop

## Example: Complete Component

```tsx
"use client";

interface HeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  backgroundColor?: string;
}

export default function Hero({
  title = "Welcome",
  subtitle = "Get started today",
  buttonText = "Learn More",
  backgroundColor = "#202020",
}: HeroProps) {
  return (
    <section 
      className="w-full py-20 px-6"
      style={{ backgroundColor }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          {subtitle}
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
          {buttonText}
        </button>
      </div>
    </section>
  );
}
```

**Registration**:
```typescript
Builder.registerComponent(
  dynamic(() => import("./components/Hero")),
  {
    name: "Hero",
    inputs: [
      { name: "title", type: "string", defaultValue: "Welcome" },
      { name: "subtitle", type: "string", defaultValue: "Get started today" },
      { name: "buttonText", type: "string", defaultValue: "Learn More" },
      { name: "backgroundColor", type: "color", defaultValue: "#202020" },
    ],
  }
);
```

## Resources

- [Builder.io Docs](https://www.builder.io/c/docs)
- [Component Registration](https://www.builder.io/c/docs/custom-components-intro)
- [Figma Plugin](https://www.builder.io/c/docs/import-from-figma)
- [Tailwind CSS](https://tailwindcss.com/docs)
