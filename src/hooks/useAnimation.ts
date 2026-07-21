"use client";

import { useReducedMotion } from "framer-motion";

/**
 * Wraps Framer Motion variants and disables motion entirely
 * when the user prefers reduced motion.
 */
export function useAnimationVariants<T extends Record<string, unknown>>(variants: T): T {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return Object.fromEntries(Object.keys(variants).map((key) => [key, {}])) as T;
  }

  return variants;
}
