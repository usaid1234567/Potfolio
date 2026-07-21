import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/constants";
import { SiteNavbar } from "@/features/navigation";
import { Footer } from "@/features/footer";
import { ProjectDetailHero, ProjectDetailBody, RelatedProjects, ProjectPrevNext } from "@/features/projects/detail";
import { CTA } from "@/features/cta";
import { getAllProjects, getProjectBySlug, getRelatedProjects, getAdjacentProjects } from "@/services/project.service";

interface ProjectDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const projects = await getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return buildMetadata({ title: "Project — M. USAID", path: ROUTES.projects });

  return buildMetadata({
    title: `${project.title} — M. USAID`,
    description: project.summary,
    path: ROUTES.projectDetails(project.slug),
  });
}

export default async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project.slug);
  const { previous, next } = getAdjacentProjects(project.slug);

  return (
    <>
      <SiteNavbar />
      <main>
        <ProjectDetailHero project={project} />
        <ProjectDetailBody project={project} />
        <ProjectPrevNext previous={previous} next={next} />
        <RelatedProjects projects={related} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
