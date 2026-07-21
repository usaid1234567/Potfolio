import { Caption } from "@/components/typography";
import { CATEGORY_LABEL, CATEGORY_ICON } from "@/features/skills-preview";
import type { Skill } from "@/types";
import { TechBadge } from "./TechBadge";

export interface TechStackGroupProps {
  category: Skill["category"];
  skills: Skill[];
}

export function TechStackGroup({ category, skills }: TechStackGroupProps) {
  const Icon = CATEGORY_ICON[category];

  return (
    <div>
      <div className="flex items-center gap-2.5 mb-4">
        <Icon className="h-4 w-4 text-violet-soft" aria-hidden="true" />
        <Caption eyebrow>{CATEGORY_LABEL[category]}</Caption>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill) => (
          <TechBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}
