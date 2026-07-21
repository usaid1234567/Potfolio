"use client";

import { motion } from "framer-motion";
import { Section, Container, Grid } from "@/components/layout";
import { Heading, Text, Caption } from "@/components/typography";
import { ProjectCard } from "@/components/cards";
import { useAnimationVariants } from "@/hooks/useAnimation";
import { cardGrid, cardItem } from "@/animations/cards";
import type { Project } from "@/types";

export interface FlagshipProjectsProps {
  projects: Project[];
}

/** Larger, two-column showcase for flagship (featured) work — distinct from the compact archive grid below. */
export function FlagshipProjects({ projects }: FlagshipProjectsProps) {
  const variants = useAnimationVariants({ cardGrid, cardItem });

  return (
    <Section id="flagship" className="border-t border-line" glow>
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <Caption eyebrow>Flagship Work</Caption>
          <Heading level={2} size="lg" className="mt-3">
            Selected work.
          </Heading>
          <Text size="lg" className="mt-3">
            The projects I'm most proud of.
          </Text>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={variants.cardGrid}>
          <Grid cols={2} gap="lg" className="mt-12">
            {projects.map((project) => (
              <motion.div key={project.slug} variants={variants.cardItem} className="h-full">
                <ProjectCard project={project} showMeta />
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Section>
  );
}
