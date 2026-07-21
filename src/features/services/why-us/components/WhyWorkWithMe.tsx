"use client";

import { motion } from "framer-motion";
import { Section, Container, Grid } from "@/components/layout";
import { Heading, Text, Caption } from "@/components/typography";
import { FeatureCard } from "@/components/cards";
import { resolveLucideIcon } from "@/utils/resolveLucideIcon";
import { useAnimationVariants } from "@/hooks/useAnimation";
import { cardGrid, cardItem } from "@/animations/cards";
import { WHY_WORK_WITH_ME } from "@/data/whyWorkWithMe";

export function WhyWorkWithMe() {
  const variants = useAnimationVariants({ cardGrid, cardItem });

  return (
    <Section id="why-me" className="border-t border-line">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <Caption eyebrow>Why Work With Me</Caption>
          <Heading level={2} size="lg" className="mt-3">
            What you can count on.
          </Heading>
          <Text size="lg" className="mt-3">
            The standards every engagement gets held to, regardless of scope.
          </Text>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={variants.cardGrid}>
          <Grid cols={3} gap="md" className="mt-12">
            {WHY_WORK_WITH_ME.map((value) => {
              const Icon = resolveLucideIcon(value.icon);
              return (
                <motion.div key={value.id} variants={variants.cardItem} className="h-full">
                  <FeatureCard icon={<Icon className="h-6 w-6" aria-hidden="true" />} title={value.title} description={value.description} />
                </motion.div>
              );
            })}
          </Grid>
        </motion.div>
      </Container>
    </Section>
  );
}
