import type { ProjectStatus } from "@/types";

export const STATUS_LABEL: Record<ProjectStatus, string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  archived: "Archived",
};
