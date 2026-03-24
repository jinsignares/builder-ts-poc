import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";
import {
  Navbar,
  Hero,
  SocialProof,
  AttendanceFeatures,
  TrackAbsences,
  Footer,
} from "@/components";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export const dynamic = "force-dynamic";

export default async function Home() {
  const content = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/",
      },
    })
    .toPromise();

  return (
    <RenderBuilderContent
      content={content}
      model="page"
      fallback={
        <div className="flex min-h-screen flex-col bg-zinc-50 font-sans">
          <Navbar />
          <main>
            <Hero />
            <SocialProof />
            <AttendanceFeatures />
            <TrackAbsences />
          </main>
          <Footer />
        </div>
      }
    />
  );
}
