"use client";

import { motion } from "framer-motion";
import { Section, Container, Grid } from "@/components/layout";
import { Heading, Text, Caption } from "@/components/typography";
import { ExperienceCard } from "@/components/portfolio";
import { useAnimationVariants } from "@/hooks/useAnimation";
import { cardGrid, cardItem } from "@/animations/cards";
import { EXPERIENCE } from "@/data/experience";

export function AboutExperience() {
  const variants = useAnimationVariants({ cardGrid, cardItem });

  return (
    <Section id="experience" className="border-t border-line">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <Caption eyebrow>Experience</Caption>
          <Heading level={2} size="lg" className="mt-3">
            Roles, responsibilities, results.
          </Heading>
          <Text size="lg" className="mt-3">
            Every stop, with the technologies and outcomes attached.
          </Text>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={variants.cardGrid}>
          <Grid cols={2} gap="md" className="mt-12">
            {EXPERIENCE.map((entry) => (
              <motion.div key={entry.id} variants={variants.cardItem}>
                <ExperienceCard entry={entry} />
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Section>
  );
}
