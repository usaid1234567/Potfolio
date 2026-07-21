"use client";

import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { Grid } from "@/components/layout";
import { ProjectCard } from "@/components/cards";
import { EmptyState } from "@/components/feedback";
import { BUTTON_BASE, BUTTON_VARIANTS, BUTTON_SIZES } from "@/components/buttons/Button/Button.styles";
import { cn } from "@/lib/cn";
import { useAnimationVariants } from "@/hooks/useAnimation";
import { cardGrid, cardItem } from "@/animations/cards";
import type { Project } from "@/types";

export interface ProjectsGridProps {
  projects: Project[];
  onResetFilters: () => void;
}

export function ProjectsGrid({ projects, onResetFilters }: ProjectsGridProps) {
  const variants = useAnimationVariants({ cardGrid, cardItem });

  if (projects.length === 0) {
    return (
      <EmptyState
        title="No projects match those filters"
        description="Try a different search term or clear the filters to see everything."
        action={
          <button onClick={onResetFilters} className={cn(BUTTON_BASE, BUTTON_VARIANTS.outline, BUTTON_SIZES.md)}>
            <RotateCcw className="h-4 w-4" aria-hidden="true" /> Clear filters
          </button>
        }
      />
    );
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={variants.cardGrid}>
      <Grid cols={3} gap="md">
        {projects.map((project) => (
          <motion.div key={project.slug} variants={variants.cardItem} className="h-full">
            <ProjectCard project={project} showMeta />
          </motion.div>
        ))}
      </Grid>
    </motion.div>
  );
}
