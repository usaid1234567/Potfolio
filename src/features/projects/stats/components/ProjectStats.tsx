"use client";

import { motion } from "framer-motion";
import { Section, Container, Grid } from "@/components/layout";
import { StatsCard } from "@/components/cards";
import { useAnimationVariants } from "@/hooks/useAnimation";
import { cardGrid, cardItem } from "@/animations/cards";
import type { ProjectStats as ProjectStatsData } from "@/services/project.service";

export interface ProjectStatsProps {
  stats: ProjectStatsData;
}

export function ProjectStats({ stats }: ProjectStatsProps) {
  const variants = useAnimationVariants({ cardGrid, cardItem });
  const items = [
    { id: "total", value: stats.totalProjects, label: "Total Projects" },
    { id: "tech", value: stats.technologiesUsed, label: "Technologies Used" },
    { id: "years", value: stats.yearsBuilding, label: "Years Building" },
  ];

  return (
    <Section id="project-stats" className="border-t border-line">
      <Container>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={variants.cardGrid}>
          <Grid cols={3} gap="md">
            {items.map((item) => (
              <motion.div key={item.id} variants={variants.cardItem} className="h-full">
                <StatsCard value={item.value} label={item.label} />
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Section>
  );
}
