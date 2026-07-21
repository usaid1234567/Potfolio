import { Section, Container, Grid } from "@/components/layout";
import { Heading, Text, Caption } from "@/components/typography";
import { SKILLS } from "@/data/skills";
import { CATEGORY_ORDER } from "./skillCategoryMeta";
import { SkillCategoryGroup } from "./SkillCategoryGroup";

export interface SkillsPreviewProps {
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function SkillsPreview({
  eyebrow = "Skills",
  title = "The stack, end to end.",
  description = "Grouped by where each tool actually earns its place in a project.",
}: SkillsPreviewProps) {
  return (
    <Section id="skills" className="border-t border-line">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <Caption eyebrow>{eyebrow}</Caption>
          <Heading level={2} size="lg" className="mt-3">
            {title}
          </Heading>
          <Text size="lg" className="mt-3">
            {description}
          </Text>
        </div>

        <Grid cols={3} gap="md" className="mt-12">
          {CATEGORY_ORDER.map((category) => {
            const skills = SKILLS.filter((skill) => skill.category === category);
            if (skills.length === 0) return null;
            return <SkillCategoryGroup key={category} category={category} skills={skills} />;
          })}
        </Grid>
      </Container>
    </Section>
  );
}
