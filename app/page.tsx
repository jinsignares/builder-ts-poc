import {
  Navbar,
  Hero,
  SocialProof,
  AttendanceFeatures,
  TrackAbsences,
  Footer,
} from "@/components";

export default function Home() {
  return (
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
  );
}
