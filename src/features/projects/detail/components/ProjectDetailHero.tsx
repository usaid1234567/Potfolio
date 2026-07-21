import { Section, Container, Stack } from "@/components/layout";
import { Heading, Text } from "@/components/typography";
import { Breadcrumb } from "@/components/navigation";
import { ProjectTags, ProjectActionLinks } from "@/components/portfolio";
import { HeroBackground } from "@/features/hero";
import { STATUS_LABEL } from "@/components/cards/ProjectCard/projectStatusMeta";
import { ROUTES } from "@/constants";
import type { Project } from "@/types";

export interface ProjectDetailHeroProps {
  project: Project;
}

export function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
  return (
    <Section id="project-hero" className="relative overflow-hidden pt-8 md:pt-16">
      <HeroBackground />
      <Container className="relative max-w-2xl text-center">
        <Stack gap="md" align="center">
          <Breadcrumb items={[{ label: "Projects", href: ROUTES.projects }, { label: project.title }]} />

          <div className="flex items-center gap-2 text-xs text-mist-faint font-mono">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{STATUS_LABEL[project.status]}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          <div>
            <Heading level={1} size="xl">
              {project.title}
            </Heading>
            <Text size="lg" className="mt-4">
              {project.summary}
            </Text>
          </div>

          <ProjectTags tags={project.tags} className="justify-center" />
          <ProjectActionLinks project={project} size="md" className="justify-center" />
        </Stack>
      </Container>
    </Section>
  );
}
