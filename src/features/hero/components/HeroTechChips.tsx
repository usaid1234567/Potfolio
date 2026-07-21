import { motion } from "framer-motion";
import { ProjectTags } from "@/components/portfolio";
import { Caption } from "@/components/typography";
import { TECH_STACK } from "@/data/techStack";
import type { Variants } from "framer-motion";

export interface HeroTechChipsProps {
  itemVariants: Variants;
}

export function HeroTechChips({ itemVariants }: HeroTechChipsProps) {
  return (
    <motion.div variants={itemVariants}>
      <Caption eyebrow>Core stack</Caption>
      <ProjectTags tags={TECH_STACK.map((tech) => tech.name)} className="mt-2" />
    </motion.div>
  );
}
