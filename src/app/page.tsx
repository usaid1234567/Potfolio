import { SiteNavbar } from "@/features/navigation";
import { Hero } from "@/features/hero";
import { AboutPreview } from "@/features/about-preview";
import { ServicesPreview } from "@/features/services-preview";
import { FeaturedProjects } from "@/features/featured-projects";
import { SkillsPreview } from "@/features/skills-preview";
import { ExperiencePreview } from "@/features/experience-preview";
import { CTA } from "@/features/cta";
import { Footer } from "@/features/footer";

export default function HomePage() {
  return (
    <>
      <SiteNavbar />
      <main>
        <Hero />
        <AboutPreview />
        <ServicesPreview />
        <FeaturedProjects />
        <SkillsPreview />
        <ExperiencePreview />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
