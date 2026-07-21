"use client";

import { motion } from "framer-motion";
import { Section, Container, Stack } from "@/components/layout";
import { Heading, Text } from "@/components/typography";
import { Breadcrumb } from "@/components/navigation";
import { HeroBackground } from "@/features/hero";
import { useAnimationVariants } from "@/hooks/useAnimation";
import { heroContainer, heroItem } from "@/animations/hero";

export function CertificatesHero() {
  const variants = useAnimationVariants({ heroContainer, heroItem });

  return (
    <Section id="certificates-hero" className="relative overflow-hidden pt-8 md:pt-16">
      <HeroBackground />
      <Container className="relative max-w-2xl text-center">
        <motion.div initial="hidden" animate="visible" variants={variants.heroContainer}>
          <Stack gap="md" align="center">
            <motion.div variants={variants.heroItem}>
              <Breadcrumb items={[{ label: "Certificates" }]} />
            </motion.div>

            <motion.div variants={variants.heroItem}>
              <Heading level={1} size="2xl">
                Certificates
              </Heading>
              <Text size="lg" className="mt-4">
                Verified credentials will be listed here as they're earned.
              </Text>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>
    </Section>
  );
}
