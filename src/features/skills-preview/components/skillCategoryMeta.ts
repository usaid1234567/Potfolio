import { Code2, GitBranch, Puzzle, Sparkles } from "lucide-react";
import type { Skill } from "@/types";
import type { LucideIcon } from "lucide-react";

export const CATEGORY_LABEL: Record<Skill["category"], string> = {
  frontend: "Frontend",
  tools: "Tools",
  programming: "Programming",
  ai: "AI Productivity",
};

export const CATEGORY_ICON: Record<Skill["category"], LucideIcon> = {
  frontend: Code2,
  tools: GitBranch,
  programming: Puzzle,
  ai: Sparkles,
};

export const CATEGORY_ORDER: Skill["category"][] = ["frontend", "tools", "programming", "ai"];
