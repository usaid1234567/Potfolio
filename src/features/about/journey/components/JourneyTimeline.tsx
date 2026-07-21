"use client";

import { motion } from "framer-motion";
import { Section, Container, Stack } from "@/components/layout";
import { Heading, Text, Caption } from "@/components/typography";
import { TimelineItem } from "@/components/portfolio";
import { useAnimationVariants } from "@/hooks/useAnimation";
import { cardItem } from "@/animations/cards";
import { MILESTONES } from "@/data/milestones";
import { CATEGORY_LABEL } from "./categoryMeta";

export function JourneyTimeline() {
  const variants = useAnimationVariants({ cardItem });

  return (
    <Section id="journey" className="border-t border-line">
      <Container className="max-w-3xl">
        <div className="text-center">
          <Caption eyebrow>Journey</Caption>
          <Heading level={2} size="lg" className="mt-3">
            The path so far.
          </Heading>
          <Text size="lg" className="mt-3">
            Learning milestones, career moves, and the projects that mattered most.
          </Text>
        </div>

        <Stack gap="lg" className="mt-12">
          {MILESTONES.map((milestone, index) => (
            <motion.div
              key={milestone.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={variants.cardItem}
            >
              <TimelineItem
                date={milestone.year}
                title={milestone.title}
                description={milestone.description}
                isLast={index === MILESTONES.length - 1}
              >
                <Caption eyebrow className="mt-2 inline-block">
                  {CATEGORY_LABEL[milestone.category]}
                </Caption>
              </TimelineItem>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Section>
  );
}
