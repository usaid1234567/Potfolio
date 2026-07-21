import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { BUTTON_BASE, BUTTON_VARIANTS, BUTTON_SIZES } from "@/components/buttons/Button/Button.styles";
import { cn } from "@/lib/cn";
import type { Project } from "@/types";
import type { ButtonSize } from "@/components/buttons/Button/Button.types";

export interface ProjectActionLinksProps {
  project: Project;
  size?: ButtonSize;
  className?: string;
}

/** Live Demo / GitHub / Case Study links — shared by ProjectCard and the project detail page. */
export function ProjectActionLinks({ project, size = "sm", className }: ProjectActionLinksProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer noopener"
          className={cn(BUTTON_BASE, BUTTON_VARIANTS.secondary, BUTTON_SIZES[size])}
        >
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /> Live Demo
        </a>
      )}
      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer noopener"
          className={cn(BUTTON_BASE, BUTTON_VARIANTS.ghost, BUTTON_SIZES[size])}
        >
          <Github className="h-3.5 w-3.5" aria-hidden="true" /> GitHub
        </a>
      )}
      {project.caseStudyUrl && (
        <Link href={project.caseStudyUrl} className={cn(BUTTON_BASE, BUTTON_VARIANTS.outline, BUTTON_SIZES[size])}>
          Case Study
        </Link>
      )}
    </div>
  );
}
