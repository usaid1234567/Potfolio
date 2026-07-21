import { Section, Container, Grid } from "@/components/layout";
import { Heading, Text, Caption } from "@/components/typography";
import { ProjectCard } from "@/components/cards";
import type { Project } from "@/types";

export interface RelatedProjectsProps {
  projects: Project[];
}

export function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <Section id="related-projects" className="border-t border-line">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <Caption eyebrow>Related Work</Caption>
          <Heading level={2} size="lg" className="mt-3">
            More projects like this.
          </Heading>
          <Text size="lg" className="mt-3">
            Similar category or overlapping technology.
          </Text>
        </div>

        <Grid cols={3} gap="md" className="mt-12">
          {projects.map((project) => (
            <div key={project.slug} className="h-full">
              <ProjectCard project={project} showMeta />
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
