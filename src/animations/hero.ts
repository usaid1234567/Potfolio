import type { Variants } from "framer-motion";

export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const heroOrb: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

export const heroFloat: Variants = {
  hidden: { opacity: 0, y: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: [0, -14, 0],
    transition: {
      opacity: { duration: 0.6, delay },
      y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay },
    },
  }),
};
