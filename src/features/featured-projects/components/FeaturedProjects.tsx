"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section, Container, Grid } from "@/components/layout";
import { Heading, Text, Caption } from "@/components/typography";
import { ProjectCard } from "@/components/cards";
import { BUTTON_BASE, BUTTON_VARIANTS, BUTTON_SIZES } from "@/components/buttons/Button/Button.styles";
import { cn } from "@/lib/cn";
import { useAnimationVariants } from "@/hooks/useAnimation";
import { cardGrid, cardItem } from "@/animations/cards";
import { PROJECTS } from "@/data/projects";
import { ROUTES } from "@/constants";

const FEATURED = PROJECTS.filter((project) => project.featured);

export function FeaturedProjects() {
  const variants = useAnimationVariants({ cardGrid, cardItem });

  if (FEATURED.length === 0) return null;

  return (
    <Section id="projects" className="border-t border-line" glow>
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Caption eyebrow>Selected work</Caption>
            <Heading level={2} size="lg" className="mt-3">
              Featured projects.
            </Heading>
            <Text size="lg" className="mt-3 max-w-lg">
              A few things I've built.
            </Text>
          </div>
          <Link
            href={ROUTES.projects}
            className={cn(BUTTON_BASE, BUTTON_VARIANTS.ghost, BUTTON_SIZES.md, "shrink-0")}
          >
            View all projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={variants.cardGrid}>
          <Grid cols={3} gap="lg" className="mt-12">
            {FEATURED.map((project) => (
              <motion.div key={project.slug} variants={variants.cardItem} className="h-full">
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Section>
  );
}
