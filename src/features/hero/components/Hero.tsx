"use client";

import { motion } from "framer-motion";
import { Section, Container, Grid, Stack } from "@/components/layout";
import { Heading, Text, GradientText } from "@/components/typography";
import { useAnimationVariants } from "@/hooks/useAnimation";
import { heroContainer, heroItem } from "@/animations/hero";
import { SITE_CONFIG } from "@/constants";
import { HeroBackground } from "./HeroBackground";
import { HeroBadge } from "./HeroBadge";
import { HeroActions } from "./HeroActions";
import { HeroSocials } from "./HeroSocials";
import { HeroTechChips } from "./HeroTechChips";
import { HeroStats } from "./HeroStats";
import { HeroVisual } from "./HeroVisual";
import { HeroScrollIndicator } from "./HeroScrollIndicator";

export function Hero() {
  const variants = useAnimationVariants({ heroContainer, heroItem });

  return (
    <Section id="home" className="relative overflow-hidden pt-8 md:pt-16">
      <HeroBackground />

      <Container className="relative">
        <Grid cols={2} gap="lg" className="items-center">
          <motion.div initial="hidden" animate="visible" variants={variants.heroContainer}>
            <Stack gap="lg">
              <HeroBadge itemVariants={variants.heroItem} />

              <motion.div variants={variants.heroItem}>
                <Heading level={1} size="2xl">
                  {SITE_CONFIG.name.split(" ")[0]}{" "}
                  <GradientText as="span">{SITE_CONFIG.name.split(" ")[1]}</GradientText>
                </Heading>
                <Text size="lg" className="mt-4 max-w-lg">
                  {SITE_CONFIG.description}
                </Text>
              </motion.div>

              <HeroActions itemVariants={variants.heroItem} />
              <HeroSocials itemVariants={variants.heroItem} />
              <HeroTechChips itemVariants={variants.heroItem} />
              <HeroStats itemVariants={variants.heroItem} />
            </Stack>
          </motion.div>

          <HeroVisual />
        </Grid>
      </Container>

      <HeroScrollIndicator />
    </Section>
  );
}
