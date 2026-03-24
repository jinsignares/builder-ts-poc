import type { Metadata } from "next";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
import {
  Navbar,
  Hero,
  SocialProof,
  AttendanceFeatures,
  TrackAbsences,
  Footer,
} from "../../components";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{
    page?: string[];
  }>;
}

function getUrlPath(page?: string[]): string {
  return "/" + (page?.join("/") ?? "");
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { page } = await props.params;
  const urlPath = getUrlPath(page);

  const content = await builder
    .get("page", { userAttributes: { urlPath } })
    .toPromise();

  const data = content?.data ?? {};

  return {
    title: data.seoTitle || undefined,
    description: data.seoDescription || undefined,
    openGraph: data.ogImage
      ? { images: [{ url: data.ogImage }] }
      : undefined,
  };
}

export default async function Page(props: PageProps) {
  const { page } = await props.params;
  const urlPath = getUrlPath(page);

  const content = await builder
    .get("page", { userAttributes: { urlPath } })
    .toPromise();

  return (
    <RenderBuilderContent
      content={content}
      model="page"
      fallback={
        urlPath === "/" ? (
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
        ) : undefined
      }
    />
  );
}
