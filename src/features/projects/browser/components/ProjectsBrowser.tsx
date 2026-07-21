"use client";

import { Section, Container } from "@/components/layout";
import { Heading, Text, Caption } from "@/components/typography";
import { useProjectFilters } from "@/hooks/useProjectFilters";
import { ProjectsToolbar } from "@/features/projects/toolbar";
import { ProjectsGrid } from "@/features/projects/grid";
import type { Project } from "@/types";

export interface ProjectsBrowserProps {
  projects: Project[];
  categories: string[];
  technologies: string[];
}

/** Owns filter state and wires the Toolbar and Grid together. */
export function ProjectsBrowser({ projects, categories, technologies }: ProjectsBrowserProps) {
  const filters = useProjectFilters(projects);

  return (
    <Section id="all-projects" className="border-t border-line">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <Caption eyebrow>All Projects</Caption>
          <Heading level={2} size="lg" className="mt-3">
            Browse the full archive.
          </Heading>
          <Text size="lg" className="mt-3">
            Search, filter by category or technology, and sort however's useful.
          </Text>
        </div>

        <div className="mt-10">
          <ProjectsToolbar
            filters={filters}
            categories={categories}
            technologies={technologies}
            resultCount={filters.filtered.length}
          />
          <div className="mt-8">
            <ProjectsGrid projects={filters.filtered} onResetFilters={filters.resetFilters} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
