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
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Navbar")),
  {
    name: "Navbar",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Footer")),
  {
    name: "Footer",
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/SocialProof")),
  {
    name: "SocialProof",
    description: "Client testimonials banner — logos and quotes from Kenco and Hello Fresh.",
  }
);
