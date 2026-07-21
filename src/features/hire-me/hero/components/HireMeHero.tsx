"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Section, Container, Stack } from "@/components/layout";
import { Heading, Text } from "@/components/typography";
import { Breadcrumb } from "@/components/navigation";
import { HeroBackground } from "@/features/hero";
import { BUTTON_BASE, BUTTON_VARIANTS, BUTTON_SIZES } from "@/components/buttons/Button/Button.styles";
import { cn } from "@/lib/cn";
import { scrollToId } from "@/utils/scrollTo";
import { useAnimationVariants } from "@/hooks/useAnimation";
import { heroContainer, heroItem } from "@/animations/hero";

export function HireMeHero() {
  const variants = useAnimationVariants({ heroContainer, heroItem });

  return (
    <Section id="hire-me-hero" className="relative overflow-hidden pt-8 md:pt-16">
      <HeroBackground />
      <Container className="relative max-w-2xl text-center">
        <motion.div initial="hidden" animate="visible" variants={variants.heroContainer}>
          <Stack gap="md" align="center">
            <motion.div variants={variants.heroItem}>
              <Breadcrumb items={[{ label: "Hire Me" }]} />
            </motion.div>

            <motion.div variants={variants.heroItem} className="glass-panel inline-flex px-4 py-1.5 w-fit">
              <span className="text-xs text-mist-muted">Booking a consultation, not a form</span>
            </motion.div>

            <motion.div variants={variants.heroItem}>
              <Heading level={1} size="2xl">
                Let&apos;s talk about your project
              </Heading>
              <Text size="lg" className="mt-4">
                Pick a time, tell me what you&apos;re building, and I&apos;ll come prepared —
                no sales call, just an engineer ready to talk specifics.
              </Text>
            </motion.div>

            <motion.div variants={variants.heroItem}>
              <button onClick={() => scrollToId("booking-wizard")} className={cn(BUTTON_BASE, BUTTON_VARIANTS.primary, BUTTON_SIZES.lg)}>
                Book a time <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </button>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>
    </Section>
  );
}
