import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  BUTTON_BASE,
  BUTTON_VARIANTS,
  BUTTON_SIZES,
} from "@/components/buttons/Button/Button.styles";
import { cn } from "@/lib/cn";
import { ROUTES } from "@/constants";
import type { Variants } from "framer-motion";

export interface HeroActionsProps {
  itemVariants: Variants;
}

export function HeroActions({ itemVariants }: HeroActionsProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-wrap items-center gap-4"
    >
      <Link
        href={ROUTES.hireMe}
        className={cn(
          BUTTON_BASE,
          BUTTON_VARIANTS.primary,
          BUTTON_SIZES.lg
        )}
      >
        Hire Me
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>

      <Link
        href={ROUTES.projects}
        className={cn(
          BUTTON_BASE,
          BUTTON_VARIANTS.secondary,
          BUTTON_SIZES.lg
        )}
      >
        View Projects
      </Link>
    </motion.div>
  );
}