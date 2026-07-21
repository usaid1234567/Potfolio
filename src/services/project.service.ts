import { PROJECTS } from "@/data/projects";
import { STATS } from "@/data/stats";
import type { Project } from "@/types";

export async function getAllProjects(): Promise<Project[]> {
  return PROJECTS;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return PROJECTS.filter((project) => project.featured);
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getProjectCategories(): string[] {
  return Array.from(new Set(PROJECTS.map((project) => project.category))).sort();
}

export function getProjectTechnologies(): string[] {
  return Array.from(new Set(PROJECTS.flatMap((project) => project.tags))).sort();
}

export function getRelatedProjects(slug: string, limit = 3): Project[] {
  const current = PROJECTS.find((project) => project.slug === slug);
  if (!current) return [];

  return PROJECTS.filter((project) => project.slug !== slug)
    .map((project) => ({
      project,
      score:
        (project.category === current.category ? 2 : 0) +
        project.tags.filter((tag) => current.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.project);
}

export function getAdjacentProjects(
  slug: string
): { previous: Project | null; next: Project | null } {
  const index = PROJECTS.findIndex((project) => project.slug === slug);

  if (index === -1) {
    return {
      previous: null,
      next: null,
    };
  }

  return {
    previous: PROJECTS[index - 1] ?? null,
    next: PROJECTS[index + 1] ?? null,
  };
}

export interface ProjectStats {
  totalProjects: string;
  technologiesUsed: string;
  yearsBuilding: string;
}

export function getProjectStats(): ProjectStats {
  const yearsBuilding = STATS.find((stat) => stat.id === "years")?.value ?? "—";

  return {
    totalProjects: String(PROJECTS.length),
    technologiesUsed: String(getProjectTechnologies().length),
    yearsBuilding,
  };
}