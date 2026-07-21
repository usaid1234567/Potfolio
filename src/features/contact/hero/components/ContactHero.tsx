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

export function ContactHero() {
  const variants = useAnimationVariants({ heroContainer, heroItem });

  return (
    <Section id="contact-hero" className="relative overflow-hidden pt-8 md:pt-16">
      <HeroBackground />
      <Container className="relative max-w-2xl text-center">
        <motion.div initial="hidden" animate="visible" variants={variants.heroContainer}>
          <Stack gap="md" align="center">
            <motion.div variants={variants.heroItem}>
              <Breadcrumb items={[{ label: "Contact" }]} />
            </motion.div>

            <motion.div variants={variants.heroItem} className="glass-panel inline-flex px-4 py-1.5 w-fit">
              <span className="text-xs text-mist-muted">Usually replies within a day</span>
            </motion.div>

            <motion.div variants={variants.heroItem}>
              <Heading level={1} size="2xl">
                Get in touch
              </Heading>
              <Text size="lg" className="mt-4">
                Questions, feedback, or a project that doesn&apos;t fit the standard booking
                flow — this is the place for it.
              </Text>
            </motion.div>

            <motion.div variants={variants.heroItem}>
              <button onClick={() => scrollToId("contact-form")} className={cn(BUTTON_BASE, BUTTON_VARIANTS.primary, BUTTON_SIZES.lg)}>
                Send a message <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </button>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>
    </Section>
  );
}
