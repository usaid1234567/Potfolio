import { resolveLucideIcon } from "@/utils/resolveLucideIcon";
import type { Skill } from "@/types";

export interface TechBadgeProps {
  skill: Skill;
}

/** Compact interactive chip — distinct from SkillBadge's proficiency-bar treatment. */
export function TechBadge({ skill }: TechBadgeProps) {
  const Icon = resolveLucideIcon(skill.icon);

  return (
    <span className="inline-flex items-center gap-2 text-sm text-mist-muted bg-white/5 border border-line rounded-full px-3.5 py-2 transition-colors hover:border-violet/50 hover:text-mist hover:bg-violet/5">
      <Icon className="h-4 w-4 text-violet-soft" aria-hidden="true" />
      {skill.name}
    </span>
  );
}
