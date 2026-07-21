export type MilestoneCategory = "learning" | "career" | "achievement" | "project";

export interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
  category: MilestoneCategory;
}
