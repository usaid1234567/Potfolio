import type { Variants } from "framer-motion";

export const navbarSlide: Variants = {
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const mobileMenu: Variants = {
  closed: { opacity: 0, height: 0 },
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
};
