export type ProjectStatus = "completed" | "in-progress" | "archived";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  coverImage: string;
  tags: string[];
  category: string;
  status: ProjectStatus;
  liveUrl?: string;
  repoUrl?: string;
  caseStudyUrl?: string;
  featured: boolean;
  year: number;
  gallery?: string[];
  problem?: string;
  solution?: string;
  architecture?: string;
  features?: string[];
  challenges?: string[];
  results?: string[];
  lessonsLearned?: string[];
  timeline?: string;
}
