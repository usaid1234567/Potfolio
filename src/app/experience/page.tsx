import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/constants";
import { SiteNavbar } from "@/features/navigation";
import { Footer } from "@/features/footer";
import { ExperienceHero } from "@/features/experience-page/hero";
import { JourneyTimeline } from "@/features/about/journey";
import { AboutExperience } from "@/features/about/experience";
import { CTA } from "@/features/cta";

export const metadata: Metadata = buildMetadata({
  title: "Experience — M. USAID",
  description: "My career timeline and current role as a Web Developer at Symmetry Group.",
  path: ROUTES.experience,
});

export default function ExperiencePage() {
  return (
    <>
      <SiteNavbar />
      <main>
        <ExperienceHero />
        <JourneyTimeline />
        <AboutExperience />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
