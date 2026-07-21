import { cn } from "@/lib/cn";
import { resolveLucideIcon } from "@/utils/resolveLucideIcon";
import type { Skill } from "@/types";

export interface SkillBadgeProps {
  skill: Skill;
  className?: string;
}

/** Plain skill chip — no proficiency percentage, since self-rated numbers aren't meaningful. */
export function SkillBadge({ skill, className }: SkillBadgeProps) {
  const Icon = resolveLucideIcon(skill.icon);

  return (
    <div className={cn("glass-panel px-4 py-3 flex items-center gap-2.5", className)}>
      <Icon className="h-4 w-4 text-violet-soft shrink-0" aria-hidden="true" />
      <span className="text-sm text-mist">{skill.name}</span>
    </div>
  );
}
