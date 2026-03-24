import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

Builder.registerComponent(
  dynamic(() => import("./components/Counter")),
  {
    name: "Counter",
    inputs: [
      {
        name: "initialCount",
        type: "number",
        defaultValue: 0,
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Hero")),
  {
    name: "Hero",
    description: "TeamSense homepage hero — headline, CTA buttons, and product illustration.",
    inputs: [
      {
        name: "headlineHtml",
        type: "richText",
        defaultValue:
          '<h1>Automated, <span style="color:#F6B725;">Text-First Absence</span> Reporting at Your Fingertips</h1><p>TeamSense meets employees where they are, in their native language, with no training required. Employees call off via text, and the system takes care of the rest.</p>',
        helperText: "Hero headline and subtitle. Typography styles are applied automatically via CSS.",
      },
      { name: "ctaDemoText", type: "text", defaultValue: "Book a Demo" },
      { name: "ctaDemoHref", type: "text", defaultValue: "#" },
      { name: "ctaTourText", type: "text", defaultValue: "Take a Tour" },
      { name: "ctaTourHref", type: "text", defaultValue: "#" },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Navbar")),
  {
    name: "Navbar",
    description: "Sticky top navigation bar with logo, nav links, and CTA buttons.",
    inputs: [
      {
        name: "logoUrl",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"],
        defaultValue:
          "https://api.builder.io/api/v1/image/assets/TEMP/a3ff7de3889e43a68ed3513edf11d104943f4cb2?width=359",
        helperText: "Brand logo image.",
      },
      {
        name: "logoAlt",
        type: "text",
        defaultValue: "TeamSense",
        helperText: "Alt text for the logo.",
      },
      {
        name: "logoHref",
        type: "text",
        defaultValue: "/",
        helperText: "URL the logo links to.",
      },
      {
        name: "navLinks",
        type: "list",
        defaultValue: [
          { label: "Product", href: "#", hasDropdown: true },
          { label: "Why TeamSense", href: "#", hasDropdown: true },
          { label: "Resources", href: "#", hasDropdown: true },
          { label: "Pricing", href: "#", hasDropdown: false },
        ],
        subFields: [
          {
            name: "label",
            type: "text",
            defaultValue: "Nav item",
            helperText: "Link display text.",
          },
          {
            name: "href",
            type: "text",
            defaultValue: "#",
            helperText: "Link URL.",
          },
          {
            name: "hasDropdown",
            type: "boolean",
            defaultValue: false,
            helperText: "Show a dropdown caret icon next to this link.",
          },
        ],
        helperText: "Navigation links shown in the top bar.",
      },
      {
        name: "signInText",
        type: "text",
        defaultValue: "Sign in",
        helperText: "Label for the sign-in link.",
      },
      {
        name: "signInHref",
        type: "text",
        defaultValue: "#",
        helperText: "URL for the sign-in link.",
      },
      {
        name: "ctaText",
        type: "text",
        defaultValue: "Book a Demo",
        helperText: "Label for the primary CTA button.",
      },
      {
        name: "ctaHref",
        type: "text",
        defaultValue: "#",
        helperText: "URL for the primary CTA button.",
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Footer")),
  {
    name: "Footer",
    description: "Site footer with brand logo, social links, search bar, and navigation columns.",
    inputs: [
      {
        name: "facebookHref",
        type: "text",
        defaultValue: "#",
        helperText: "Facebook profile URL.",
      },
      {
        name: "linkedinHref",
        type: "text",
        defaultValue: "#",
        helperText: "LinkedIn profile URL.",
      },
      {
        name: "youtubeHref",
        type: "text",
        defaultValue: "#",
        helperText: "YouTube channel URL.",
      },
      {
        name: "columns",
        type: "list",
        defaultValue: [
          {
            heading: "Product",
            links: [
              { label: "Overview", href: "#" },
              { label: "Attendance", href: "#" },
              { label: "Communication", href: "#" },
              { label: "Mobile Forms", href: "#" },
              { label: "Integrations", href: "#" },
            ],
          },
          {
            heading: "Resources",
            links: [
              { label: "Pricing", href: "#" },
              { label: "Blog", href: "#" },
              { label: "eBooks and Templates", href: "#" },
              { label: "Webinar", href: "#" },
              { label: "ROI Calculator", href: "#" },
            ],
          },
          {
            heading: "Company",
            links: [
              { label: "About TeamSense", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Diversity & Inclusion", href: "#" },
              { label: "News & Press", href: "#" },
              { label: "Contact", href: "#" },
            ],
          },
          {
            heading: "Safety",
            links: [
              { label: "Security", href: "#" },
              { label: "Website Privacy", href: "#" },
              { label: "App Privacy", href: "#" },
              { label: "App Terms of Service", href: "#" },
              { label: "Subprocessors", href: "#" },
            ],
          },
        ],
        subFields: [
          {
            name: "heading",
            type: "text",
            defaultValue: "Column heading",
            helperText: "Footer column title.",
          },
          {
            name: "links",
            type: "list",
            subFields: [
              {
                name: "label",
                type: "text",
                defaultValue: "Link label",
                helperText: "Link display text.",
              },
              {
                name: "href",
                type: "text",
                defaultValue: "#",
                helperText: "Link URL.",
              },
            ],
            helperText: "Links within this column.",
          },
        ],
        helperText: "Footer navigation columns (heading + links).",
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/SocialProof")),
  {
    name: "SocialProof",
    description: "Client testimonials banner — logos and quotes from Kenco and Hello Fresh.",
    inputs: [
      {
        name: "heading",
        type: "string",
        defaultValue: "Proudly serving leading manufacturing and logistics companies",
        helperText: "Section heading above the testimonial cards.",
      },
      {
        name: "testimonials",
        type: "list",
        defaultValue: [
          {
            logo: "https://api.builder.io/api/v1/image/assets/TEMP/58a7f17a0a8515fbbe99b7d53632a83bf748fada?width=250",
            logoAlt: "Kenco",
            quote: "Reduced absenteeism by 39% within three months",
          },
          {
            logo: "https://api.builder.io/api/v1/image/assets/TEMP/d2585c660b4f5c9b22b109691bdfc425bc99b639?width=258",
            logoAlt: "Hello Fresh",
            quote: "Saves $2.6M a year by reducing overtime expenses and no-call and no-shows",
          },
        ],
        subFields: [
          {
            name: "logo",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"],
            helperText: "Company logo image.",
          },
          {
            name: "logoAlt",
            type: "string",
            defaultValue: "Company name",
            helperText: "Alt text for the company logo.",
          },
          {
            name: "quote",
            type: "longText",
            defaultValue: "Customer quote goes here.",
            helperText: "The testimonial quote text.",
          },
        ],
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/AttendanceFeatures")),
  {
    name: "AttendanceFeatures",
    description:
      "Tabbed feature section — 'Attendance is just the beginning' with diagram and interactive tabs.",
    inputs: [
      {
        name: "heading",
        type: "string",
        defaultValue: "Attendance is just the beginning",
        helperText: "Section heading.",
      },
      {
        name: "subheading",
        type: "longText",
        defaultValue: "One habit builds trust. What follows powers the entire shift.",
        helperText: "Subtitle beneath the section heading.",
      },
      {
        name: "tabs",
        type: "list",
        defaultValue: [
          "Absence Reporting",
          "Attendance Tracking",
          "Team Messaging",
          "Alerts & Notifications",
          "HRIS Integration",
        ],
        helperText: "List of tab labels shown above the diagram.",
      },
      {
        name: "diagramUrl",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"],
        defaultValue:
          "https://api.builder.io/api/v1/image/assets/TEMP/7b2be460f77ddfe42d630981bd909e4b2f6ff33c?width=1434",
        helperText: "Feature diagram image shown in the content area.",
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/TrackAbsences")),
  {
    name: "TrackAbsences",
    description:
      "Accordion feature section — 'A simple way to track absences' with expandable items and product screenshot.",
    inputs: [
      {
        name: "heading",
        type: "string",
        defaultValue: "A simple way to track absences",
        helperText: "Section heading displayed above the accordion.",
      },
      {
        name: "screenshotUrl",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"],
        defaultValue:
          "https://api.builder.io/api/v1/image/assets/TEMP/c3be0c9a53aa2e731301928f4cbf5f3db4b55972?width=1000",
        helperText: "Product screenshot shown on the right side of the section.",
      },
      {
        name: "screenshotAlt",
        type: "string",
        defaultValue: "TeamSense absence reporting interface",
        helperText: "Alt text for the screenshot image.",
      },
      {
        name: "features",
        type: "list",
        defaultValue: [
          {
            title: "Skip the voicemails",
            description:
              "No more lengthy messages or missed details. Employees can text their absence in just a few taps, selecting a reason for quick, accurate documentation. Absences sync instantly with your HRIS, making time tracking effortless.",
            ctaText: "Learn more",
            ctaHref: "#",
          },
          {
            title: "Multilingual team messaging",
            description:
              "Communicate with your entire workforce in their preferred language. TeamSense automatically translates messages, ensuring every employee understands and can respond without barriers.",
            ctaText: "Learn more",
            ctaHref: "#",
          },
          {
            title: "Transparency driving accountability",
            description:
              "Give managers real-time visibility into attendance patterns. Clear records and automated documentation create a culture of accountability across every shift and department.",
            ctaText: "Learn more",
            ctaHref: "#",
          },
          {
            title: "Real-time absence alerts",
            description:
              "Supervisors are instantly notified the moment an employee calls off, with all the context they need to act fast — no chasing down voicemails or waiting for HR to relay the message.",
            ctaText: "Learn more",
            ctaHref: "#",
          },
        ],
        subFields: [
          {
            name: "title",
            type: "string",
            defaultValue: "Feature title",
            helperText: "Accordion item heading.",
          },
          {
            name: "description",
            type: "longText",
            defaultValue: "Feature description goes here.",
            helperText: "Body text shown when this item is expanded.",
          },
          {
            name: "ctaText",
            type: "string",
            defaultValue: "Learn more",
            helperText: "Button label.",
          },
          {
            name: "ctaHref",
            type: "string",
            defaultValue: "#",
            helperText: "URL the button links to.",
          },
        ],
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/RolesSection")),
  {
    name: "RolesSection",
    description:
      "Role-based feature cards section — 'Designed for every role' with Manufacturing, HR, and Operations cards.",
    inputs: [
      {
        name: "heading",
        type: "string",
        defaultValue: "Designed for every role",
        helperText: "Section heading.",
      },
      {
        name: "subheading",
        type: "longText",
        defaultValue:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        helperText: "Subtitle beneath the section heading.",
      },
      {
        name: "roles",
        type: "list",
        defaultValue: [
          {
            title: "Manufacturing",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imageUrl: "",
            imageAlt: "Graphic representing manufacturing",
            accentColor: "#EFF6F5",
          },
          {
            title: "Human Resources",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imageUrl: "",
            imageAlt: "Graphic representing hr",
            accentColor: "#FEF8E9",
          },
          {
            title: "Operations",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            imageUrl: "",
            imageAlt: "Graphic representing ops",
            accentColor: "#FDE3D3",
          },
        ],
        subFields: [
          {
            name: "title",
            type: "string",
            defaultValue: "Role title",
            helperText: "Card heading (e.g. Manufacturing, Human Resources).",
          },
          {
            name: "description",
            type: "longText",
            defaultValue: "Role description goes here.",
            helperText: "Body text describing this role's use case.",
          },
          {
            name: "imageUrl",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png", "webp", "svg"],
            helperText: "Optional illustration or graphic for this role.",
          },
          {
            name: "imageAlt",
            type: "string",
            defaultValue: "Role graphic",
            helperText: "Alt text for the role image.",
          },
          {
            name: "accentColor",
            type: "color",
            defaultValue: "#EFF6F5",
            helperText: "Background color of the card.",
          },
        ],
      },
    ],
  }
);

// Register brand design tokens and typography so they are available in the Builder.io visual editor
Builder.register("editor.settings", {
  designTokens: {
    fontFamily: [
      { name: "Urbanist", value: "Urbanist, sans-serif" },
    ],
    fontSize: [
      { name: "H1 — 48px", value: "48px" },
      { name: "H2 — 32px", value: "32px" },
      { name: "H3 — 24px", value: "24px" },
      { name: "H4 — 20px", value: "20px" },
      { name: "H5 — 16px", value: "16px" },
      { name: "Body — 18px", value: "18px" },
      { name: "Small — 14px", value: "14px" },
    ],
    colors: [
      { name: "White", value: "#FFFFFF" },
      { name: "Brand Teal 10", value: "#0A2C29" },
      { name: "Brand Teal 20", value: "#0E3F3A" },
      { name: "Brand Teal Dark", value: "#145851" },
      { name: "Brand Teal 40", value: "#1C7E74" },
      { name: "Brand Teal Light", value: "#DFEDEC" },
      { name: "Brand Teal Faint", value: "#EFF6F5" },
      { name: "Brand Teal Pale", value: "#BFDBD8" },
      { name: "Brand Gold 50", value: "#F6B725" },
      { name: "Brand Gold 90", value: "#FEF8E9" },
      { name: "Brand Gray 30", value: "#595F5E" },
      { name: "Brand Gray 50", value: "#949E9C" },
      { name: "Brand Gray Border", value: "#BFC5C4" },
      { name: "Brand Footer BG", value: "#202020" },
    ],
  },
});
