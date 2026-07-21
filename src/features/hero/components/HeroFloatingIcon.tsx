import { motion } from "framer-motion";
import { heroFloat } from "@/animations/hero";
import { resolveLucideIcon } from "@/utils/resolveLucideIcon";

export interface HeroFloatingIconProps {
  icon: string;
  label: string;
  className: string;
  delay?: number;
}

export function HeroFloatingIcon({ icon, label, className, delay = 0 }: HeroFloatingIconProps) {
  const Icon = resolveLucideIcon(icon);

  return (
    <motion.div
      custom={delay}
      variants={heroFloat}
      initial="hidden"
      animate="visible"
      className={`glass-panel absolute h-12 w-12 flex items-center justify-center ${className}`}
      aria-label={label}
      role="img"
    >
      <Icon className="h-5 w-5 text-violet-soft" aria-hidden="true" />
    </motion.div>
  );
}
