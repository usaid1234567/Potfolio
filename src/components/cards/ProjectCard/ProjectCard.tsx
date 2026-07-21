import Link from "next/link";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import { GlassCard } from "../GlassCard/GlassCard";
import { ProjectTags } from "@/components/portfolio/ProjectTags/ProjectTags";
import { ProjectActionLinks } from "@/components/portfolio/ProjectActionLinks/ProjectActionLinks";
import { ROUTES } from "@/constants";
import { cn } from "@/lib/cn";
import type { Project } from "@/types";
import { STATUS_LABEL } from "./projectStatusMeta";

export interface ProjectCardProps {
  project: Project;
  /** Shows category, status, and a featured badge. Off by default so existing usages (Home) are unaffected. */
  showMeta?: boolean;
}

export function ProjectCard({ project, showMeta = false }: ProjectCardProps) {
  return (
    <GlassCard className="p-0 overflow-hidden group flex flex-col">
      <Link href={ROUTES.projectDetails(project.slug)} className="block">
        <div className="relative aspect-[16/10] bg-base-surface flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-signature opacity-20 transition-transform duration-500 group-hover:scale-105"
            aria-hidden="true"
          />
          <ImageIcon className="h-8 w-8 text-mist-faint relative" aria-hidden="true" />
          <span className="visually-hidden">{project.title} cover image placeholder</span>
          {showMeta && project.featured && (
            <span className="absolute top-3 right-3 text-xs font-mono bg-gradient-signature text-onbrand rounded-full px-2.5 py-1">
              Featured
            </span>
          )}
        </div>
        <div className="p-6 pb-4">
          {showMeta && (
            <div className="flex items-center gap-2 text-xs text-mist-faint font-mono mb-2">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span className={cn(project.status === "completed" && "text-emerald-400", project.status === "in-progress" && "text-amber-400")}>
                {STATUS_LABEL[project.status]}
              </span>
            </div>
          )}
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-display text-lg text-mist">{project.title}</h3>
            <ArrowUpRight className="h-5 w-5 text-mist-faint transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-violet-soft shrink-0" />
          </div>
          <p className="text-body text-sm mt-2">{project.summary}</p>
          <ProjectTags tags={project.tags} className="mt-4" />
        </div>
      </Link>

      <ProjectActionLinks project={project} className="px-6 pb-6 mt-auto" />
    </GlassCard>
  );
}
