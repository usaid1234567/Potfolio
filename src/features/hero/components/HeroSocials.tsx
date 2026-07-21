import { motion } from "framer-motion";
import { SocialButton } from "@/components/portfolio";
import { SOCIALS } from "@/data/socials";
import type { Variants } from "framer-motion";

export interface HeroSocialsProps {
  itemVariants: Variants;
}

export function HeroSocials({ itemVariants }: HeroSocialsProps) {
  return (
    <motion.div variants={itemVariants} className="flex items-center gap-3">
      {SOCIALS.map((social) => (
        <SocialButton key={social.platform} social={social} />
      ))}
    </motion.div>
  );
}
