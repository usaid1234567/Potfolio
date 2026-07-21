"use client";

import { motion } from "framer-motion";
import { Section, Container, Stack } from "@/components/layout";
import { Heading, Text } from "@/components/typography";
import { Breadcrumb } from "@/components/navigation";
import { HeroBackground } from "@/features/hero";
import { useAnimationVariants } from "@/hooks/useAnimation";
import { heroContainer, heroItem } from "@/animations/hero";

export function ExperienceHero() {
  const variants = useAnimationVariants({ heroContainer, heroItem });

  return (
    <Section id="experience-hero" className="relative overflow-hidden pt-8 md:pt-16">
      <HeroBackground />
      <Container className="relative max-w-2xl text-center">
        <motion.div initial="hidden" animate="visible" variants={variants.heroContainer}>
          <Stack gap="md" align="center">
            <motion.div variants={variants.heroItem}>
              <Breadcrumb items={[{ label: "Experience" }]} />
            </motion.div>

            <motion.div variants={variants.heroItem} className="glass-panel inline-flex px-4 py-1.5 w-fit">
              <span className="text-xs text-mist-muted">1 year and counting</span>
            </motion.div>

            <motion.div variants={variants.heroItem}>
              <Heading level={1} size="2xl">
                Experience
              </Heading>
              <Text size="lg" className="mt-4">
                From first learning web development to working as a Web Developer at
                Symmetry Group.
              </Text>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>
    </Section>
  );
}
