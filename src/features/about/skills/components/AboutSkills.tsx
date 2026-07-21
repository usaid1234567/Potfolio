import { SkillsPreview } from "@/features/skills-preview";

/** Thin wrapper reusing SkillsPreview with About-specific copy — no duplicated grouping logic. */
export function AboutSkills() {
  return (
    <SkillsPreview
      eyebrow="Skills Breakdown"
      title="Every tool, categorized."
      description="Frontend, tools, programming fundamentals, and AI-assisted workflow."
    />
  );
}
