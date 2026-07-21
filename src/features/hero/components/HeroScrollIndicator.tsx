import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function HeroScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-mist-faint"
    >
      <span className="text-eyebrow">Scroll</span>
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
        <ChevronDown className="h-4 w-4" aria-hidden="true" />
      </motion.div>
    </motion.div>
  );
}
