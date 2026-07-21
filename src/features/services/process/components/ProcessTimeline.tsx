"use client";

import { motion } from "framer-motion";
import { Section, Container, Stack } from "@/components/layout";
import { Heading, Text, Caption } from "@/components/typography";
import { TimelineItem } from "@/components/portfolio";
import { useAnimationVariants } from "@/hooks/useAnimation";
import { cardItem } from "@/animations/cards";
import { PROCESS_STEPS } from "@/data/processSteps";

export function ProcessTimeline() {
  const variants = useAnimationVariants({ cardItem });

  return (
    <Section id="process" className="border-t border-line">
      <Container className="max-w-3xl">
        <div className="text-center">
          <Caption eyebrow>My Process</Caption>
          <Heading level={2} size="lg" className="mt-3">
            How a project actually runs.
          </Heading>
          <Text size="lg" className="mt-3">
            Seven stages, from first conversation to post-launch support.
          </Text>
        </div>

        <Stack gap="lg" className="mt-12">
          {PROCESS_STEPS.map((stepItem, index) => (
            <motion.div
              key={stepItem.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={variants.cardItem}
            >
              <TimelineItem
                date={`Step ${stepItem.step}`}
                title={stepItem.title}
                description={stepItem.description}
                isLast={index === PROCESS_STEPS.length - 1}
              />
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Section>
  );
}
