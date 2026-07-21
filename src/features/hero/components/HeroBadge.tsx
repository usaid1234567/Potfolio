import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export interface HeroBadgeProps {
  itemVariants: Variants;
}

export function HeroBadge({ itemVariants }: HeroBadgeProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="glass-panel inline-flex items-center gap-2 px-4 py-1.5 w-fit"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-pulse-glow" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      <span className="text-xs text-mist-muted">Available for Hire</span>
    </motion.div>
  );
}
