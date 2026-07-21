"use client";

import { motion } from "framer-motion";
import { Section, Container, Stack } from "@/components/layout";
import { Heading, Text, Caption } from "@/components/typography";
import { EducationCard } from "@/components/portfolio";
import { useAnimationVariants } from "@/hooks/useAnimation";
import { cardGrid, cardItem } from "@/animations/cards";
import { EDUCATION } from "@/data/education";

export function AboutEducation() {
  const variants = useAnimationVariants({ cardGrid, cardItem });

  return (
    <Section id="education" className="border-t border-line">
      <Container className="max-w-3xl">
        <div className="text-center">
          <Caption eyebrow>Education</Caption>
          <Heading level={2} size="lg" className="mt-3">
            Where it started.
          </Heading>
          <Text size="lg" className="mt-3">
            Formal and self-directed learning that laid the foundation.
          </Text>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={variants.cardGrid}>
          <Stack gap="md" className="mt-12">
            {EDUCATION.map((entry) => (
              <motion.div key={entry.id} variants={variants.cardItem}>
                <EducationCard education={entry} />
              </motion.div>
            ))}
          </Stack>
        </motion.div>
      </Container>
    </Section>
  );
}
