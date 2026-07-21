import type { Variants } from "framer-motion";

export const loaderFade: Variants = {
  visible: { opacity: 1 },
  hidden: {
    opacity: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};
