import { Section, Container, Stack, Divider } from "@/components/layout";
import { Heading } from "@/components/typography";
import { ProjectTags } from "@/components/portfolio";
import { ProjectProseSection } from "./ProjectProseSection";
import { ProjectListSection } from "./ProjectListSection";
import { ProjectGallery } from "./ProjectGallery";
import type { Project } from "@/types";

export interface ProjectDetailBodyProps {
  project: Project;
}

export function ProjectDetailBody({ project }: ProjectDetailBodyProps) {
  return (
    <Section id="case-study" className="border-t border-line">
      <Container className="max-w-2xl">
        <Stack gap="lg">
          {project.gallery && project.gallery.length > 0 && (
            <ProjectGallery title="Gallery" images={project.gallery} variant="showcase" />
          )}

          <ProjectProseSection title="Overview" content={project.description} />
          {project.problem && <ProjectProseSection title="Problem" content={project.problem} />}
          {project.solution && <ProjectProseSection title="Solution" content={project.solution} />}
          {project.architecture && <ProjectProseSection title="Architecture" content={project.architecture} />}

          <div>
            <Heading level={3} size="sm">
              Technologies
            </Heading>
            <ProjectTags tags={project.tags} className="mt-3" />
          </div>

          {project.features && project.features.length > 0 && <ProjectListSection title="Features" items={project.features} />}
          {project.challenges && project.challenges.length > 0 && <ProjectListSection title="Challenges" items={project.challenges} />}
          {project.results && project.results.length > 0 && <ProjectListSection title="Results" items={project.results} />}
          {project.lessonsLearned && project.lessonsLearned.length > 0 && (
            <ProjectListSection title="Lessons Learned" items={project.lessonsLearned} />
          )}
          {project.timeline && <ProjectProseSection title="Timeline" content={project.timeline} />}

          {project.gallery && project.gallery.length > 0 && (
            <>
              <Divider />
              <ProjectGallery title="Screenshots" images={project.gallery} variant="grid" />
            </>
          )}
        </Stack>
      </Container>
    </Section>
  );
}
