import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/constants";
import { SiteNavbar } from "@/features/navigation";
import { Footer } from "@/features/footer";
import { Section, Container } from "@/components/layout";
import { EmptyState } from "@/components/feedback";
import { ProjectsHero } from "@/features/projects/hero";
import { ProjectStats } from "@/features/projects/stats";
import { FlagshipProjects } from "@/features/projects/flagship";
import { ProjectsBrowser } from "@/features/projects/browser";
import { CTA } from "@/features/cta";
import {
  getAllProjects,
  getFeaturedProjects,
  getProjectCategories,
  getProjectTechnologies,
  getProjectStats,
} from "@/services/project.service";

export const metadata: Metadata = buildMetadata({
  title: "Projects — M. USAID",
  description: "Web development projects — browse by category and technology.",
  path: ROUTES.projects,
});

export default async function ProjectsPage() {
  const [allProjects, featuredProjects] = await Promise.all([getAllProjects(), getFeaturedProjects()]);
  const categories = getProjectCategories();
  const technologies = getProjectTechnologies();
  const stats = getProjectStats();

  if (allProjects.length === 0) {
    return (
      <>
        <SiteNavbar />
        <main>
          <ProjectsHero />
          <Section id="projects-empty" className="border-t border-line">
            <Container className="max-w-xl">
              <EmptyState
                title="Projects coming soon"
                description="This section is being built out as real, shipped work becomes available."
              />
            </Container>
          </Section>
          <CTA />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SiteNavbar />
      <main>
        <ProjectsHero />
        <ProjectStats stats={stats} />
        {featuredProjects.length > 0 && <FlagshipProjects projects={featuredProjects} />}
        <ProjectsBrowser projects={allProjects} categories={categories} technologies={technologies} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
