import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/constants";
import { SiteNavbar } from "@/features/navigation";
import { Footer } from "@/features/footer";
import { AboutHero } from "@/features/about/hero";
import { PersonalStory } from "@/features/about/story";
import { JourneyTimeline } from "@/features/about/journey";
import { AboutExperience } from "@/features/about/experience";
import { AboutEducation } from "@/features/about/education";
import { AboutSkills } from "@/features/about/skills";
import { AboutCertifications } from "@/features/about/certifications";
import { CoreValues } from "@/features/about/values";
import { TechStack } from "@/features/about/tech-stack";
import { CTA } from "@/features/cta";

export const metadata: Metadata = buildMetadata({
  title: "About — M. USAID",
  description: "Web Developer at Symmetry Group — my journey, skills, and the values behind the work.",
  path: ROUTES.about,
});

export default function AboutPage() {
  return (
    <>
      <SiteNavbar />
      <main>
        <AboutHero />
        <PersonalStory />
        <JourneyTimeline />
        <AboutExperience />
        <AboutEducation />
        <AboutSkills />
        <AboutCertifications />
        <CoreValues />
        <TechStack />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
