export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string | "Present";
  summary: string;
  highlights: string[];
  technologies?: string[];
}
