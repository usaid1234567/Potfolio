import { GlassCard } from "@/components/cards";
import { SkillBadge } from "@/components/portfolio";
import { Heading } from "@/components/typography";
import type { Skill } from "@/types";
import { CATEGORY_LABEL, CATEGORY_ICON } from "./skillCategoryMeta";

export interface SkillCategoryGroupProps {
  category: Skill["category"];
  skills: Skill[];
}

export function SkillCategoryGroup({ category, skills }: SkillCategoryGroupProps) {
  const Icon = CATEGORY_ICON[category];

  return (
    <GlassCard hoverable={false} className="space-y-4">
      <div className="flex items-center gap-2.5">
        <Icon className="h-4 w-4 text-violet-soft" aria-hidden="true" />
        <Heading level={3} size="sm">
          {CATEGORY_LABEL[category]}
        </Heading>
      </div>
      <div className="space-y-3">
        {skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </GlassCard>
  );
}
