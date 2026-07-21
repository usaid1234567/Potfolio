"use client";

import { motion } from "framer-motion";
import { Section, Container, Stack } from "@/components/layout";
import { Heading, Text } from "@/components/typography";
import { Breadcrumb } from "@/components/navigation";
import { HeroBackground } from "@/features/hero";
import { useAnimationVariants } from "@/hooks/useAnimation";
import { heroContainer, heroItem } from "@/animations/hero";

export function AboutHero() {
  const variants = useAnimationVariants({ heroContainer, heroItem });

  return (
    <Section id="about-hero" className="relative overflow-hidden pt-8 md:pt-16">
      <HeroBackground />

      <Container className="relative max-w-2xl text-center">
        <motion.div initial="hidden" animate="visible" variants={variants.heroContainer}>
          <Stack gap="md" align="center">
            <motion.div variants={variants.heroItem}>
              <Breadcrumb items={[{ label: "About" }]} />
            </motion.div>

            <motion.div variants={variants.heroItem} className="glass-panel inline-flex px-4 py-1.5 w-fit">
              <span className="text-xs text-mist-muted">The person behind the code</span>
            </motion.div>

            <motion.div variants={variants.heroItem}>
              <Heading level={1} size="2xl">
                About Me
              </Heading>
              <Text size="lg" className="mt-4">
                A web developer building responsive websites and interfaces — currently
                working at Symmetry Group, based in Pakistan.
              </Text>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>
    </Section>
  );
}
