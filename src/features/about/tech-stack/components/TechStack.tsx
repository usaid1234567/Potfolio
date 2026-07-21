"use client";

import { motion } from "framer-motion";
import { Section, Container, Stack } from "@/components/layout";
import { Heading, Text, Caption } from "@/components/typography";
import { useAnimationVariants } from "@/hooks/useAnimation";
import { cardGrid, cardItem } from "@/animations/cards";
import { SKILLS } from "@/data/skills";
import { CATEGORY_ORDER } from "@/features/skills-preview";
import { TechStackGroup } from "./TechStackGroup";

export interface TechStackProps {
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function TechStack({
  eyebrow = "Tech Stack",
  title = "The tools in daily rotation.",
  description = "Everything above, at a glance — grouped the same way I group it in my head.",
}: TechStackProps) {
  const variants = useAnimationVariants({ cardGrid, cardItem });

  return (
    <Section id="tech-stack" className="border-t border-line">
      <Container className="max-w-3xl">
        <div className="text-center">
          <Caption eyebrow>{eyebrow}</Caption>
          <Heading level={2} size="lg" className="mt-3">
            {title}
          </Heading>
          <Text size="lg" className="mt-3">
            {description}
          </Text>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={variants.cardGrid}>
          <Stack gap="lg" className="mt-12">
            {CATEGORY_ORDER.map((category) => {
              const skills = SKILLS.filter((skill) => skill.category === category);
              if (skills.length === 0) return null;
              return (
                <motion.div key={category} variants={variants.cardItem}>
                  <TechStackGroup category={category} skills={skills} />
                </motion.div>
              );
            })}
          </Stack>
        </motion.div>
      </Container>
    </Section>
  );
}
