import { motion } from "framer-motion";
import { StatsCard } from "@/components/cards";
import { STATS } from "@/data/stats";
import type { Variants } from "framer-motion";

export interface HeroStatsProps {
  itemVariants: Variants;
}

export function HeroStats({ itemVariants }: HeroStatsProps) {
  return (
    <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
      {STATS.map((stat) => (
        <StatsCard key={stat.id} value={stat.value} label={stat.label} />
      ))}
    </motion.div>
  );
}
