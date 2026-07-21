"use client";

import { motion } from "framer-motion";
import { Section, Container, Stack } from "@/components/layout";
import { Heading, Text } from "@/components/typography";
import { Breadcrumb } from "@/components/navigation";
import { HeroBackground } from "@/features/hero";
import { useAnimationVariants } from "@/hooks/useAnimation";
import { heroContainer, heroItem } from "@/animations/hero";

export function BlogHero() {
  const variants = useAnimationVariants({ heroContainer, heroItem });

  return (
    <Section id="blog-hero" className="relative overflow-hidden pt-8 md:pt-16">
      <HeroBackground />
      <Container className="relative max-w-2xl text-center">
        <motion.div initial="hidden" animate="visible" variants={variants.heroContainer}>
          <Stack gap="md" align="center">
            <motion.div variants={variants.heroItem}>
              <Breadcrumb items={[{ label: "Blog" }]} />
            </motion.div>

            <motion.div variants={variants.heroItem} className="glass-panel inline-flex px-4 py-1.5 w-fit">
              <span className="text-xs text-mist-muted">Writing about frontend development</span>
            </motion.div>

            <motion.div variants={variants.heroItem}>
              <Heading level={1} size="2xl">
                The Blog
              </Heading>
              <Text size="lg" className="mt-4">
                Notes on frontend development, learning, and building with modern web tools.
              </Text>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>
    </Section>
  );
}
