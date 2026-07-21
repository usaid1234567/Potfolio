"use client";

import { motion } from "framer-motion";
import { Section, Container, Grid } from "@/components/layout";
import { Heading, Text, Caption } from "@/components/typography";
import { FeatureCard } from "@/components/cards";
import { resolveLucideIcon } from "@/utils/resolveLucideIcon";
import { useAnimationVariants } from "@/hooks/useAnimation";
import { cardGrid, cardItem } from "@/animations/cards";
import { STORY_POINTS } from "@/data/story";

export function PersonalStory() {
  const variants = useAnimationVariants({ cardGrid, cardItem });

  return (
    <Section id="story" className="border-t border-line">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <Caption eyebrow>Personal Story</Caption>
          <Heading level={2} size="lg" className="mt-3">
            Who I am, and why I build.
          </Heading>
          <Text size="lg" className="mt-3">
            The short version of my journey into web development.
          </Text>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={variants.cardGrid}>
          <Grid cols={3} gap="md" className="mt-12">
            {STORY_POINTS.map((point) => (
              <motion.div key={point.id} variants={variants.cardItem}>
                <FeatureCard
                  icon={<IconFor name={point.icon} />}
                  title={point.title}
                  description={point.description}
                />
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Section>
  );
}

function IconFor({ name }: { name: string }) {
  const Icon = resolveLucideIcon(name);
  return <Icon className="h-6 w-6" aria-hidden="true" />;
}
