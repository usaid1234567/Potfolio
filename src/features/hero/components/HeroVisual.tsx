"use client";

import { motion } from "framer-motion";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import { TECH_STACK } from "@/data/techStack";
import { heroOrb } from "@/animations/hero";
import { SITE_CONFIG } from "@/constants";
import { HeroFloatingIcon } from "./HeroFloatingIcon";

const FLOATING_POSITIONS = [
  "-top-4 -left-6",
  "top-8 -right-8",
  "-bottom-6 left-2",
  "bottom-10 -right-4",
];

export function HeroVisual() {
  const { containerRef, offset } = useMouseParallax(14);
  const floatingTech = TECH_STACK.slice(0, FLOATING_POSITIONS.length);

  return (
    <div ref={containerRef} className="relative aspect-square max-w-sm mx-auto w-full">
      <motion.div
        style={{ x: offset.x, y: offset.y }}
        variants={heroOrb}
        initial="hidden"
        animate="visible"
        className="absolute inset-6 rounded-full bg-gradient-signature opacity-25 blur-3xl"
        aria-hidden="true"
      />

      <motion.div
        variants={heroOrb}
        initial="hidden"
        animate="visible"
        className="glass-panel relative h-full w-full rounded-full overflow-hidden"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={SITE_CONFIG.profileImage}
          alt={SITE_CONFIG.name}
          className="h-full w-full object-cover"
        />
      </motion.div>

      {floatingTech.map((tech, index) => (
        <HeroFloatingIcon
          key={tech.id}
          icon={tech.icon}
          label={tech.name}
      className={FLOATING_POSITIONS[index]!}
          delay={index * 0.3}
        />
      ))}
    </div>
  );
}
