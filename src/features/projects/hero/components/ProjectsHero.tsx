"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section, Container, Stack } from "@/components/layout";
import { Heading, Text } from "@/components/typography";
import { Breadcrumb } from "@/components/navigation";
import { HeroBackground } from "@/features/hero";
import { BUTTON_BASE, BUTTON_VARIANTS, BUTTON_SIZES } from "@/components/buttons/Button/Button.styles";
import { cn } from "@/lib/cn";
import { useAnimationVariants } from "@/hooks/useAnimation";
import { heroContainer, heroItem } from "@/animations/hero";
import { ROUTES } from "@/constants";

export function ProjectsHero() {
  const variants = useAnimationVariants({ heroContainer, heroItem });

  return (
    <Section id="projects-hero" className="relative overflow-hidden pt-8 md:pt-16">
      <HeroBackground />

      <Container className="relative max-w-2xl text-center">
        <motion.div initial="hidden" animate="visible" variants={variants.heroContainer}>
          <Stack gap="md" align="center">
            <motion.div variants={variants.heroItem}>
              <Breadcrumb items={[{ label: "Projects" }]} />
            </motion.div>

            <motion.div variants={variants.heroItem} className="glass-panel inline-flex px-4 py-1.5 w-fit">
              <span className="text-xs text-mist-muted">Selected work</span>
            </motion.div>

            <motion.div variants={variants.heroItem}>
              <Heading level={1} size="2xl">
                Projects
              </Heading>
              <Text size="lg" className="mt-4">
                A growing collection of web development work, built with React and
                Next.js.
              </Text>
            </motion.div>

            <motion.div variants={variants.heroItem}>
              <Link href={ROUTES.hireMe} className={cn(BUTTON_BASE, BUTTON_VARIANTS.primary, BUTTON_SIZES.lg)}>
                Start a project <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>
    </Section>
  );
}
