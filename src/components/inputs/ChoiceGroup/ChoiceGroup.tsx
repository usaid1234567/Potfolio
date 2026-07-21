import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export interface ChoiceOption {
  label: string;
  value: string;
  icon?: ReactNode;
  disabled?: boolean;
}

export interface ChoiceGroupProps {
  options: ChoiceOption[];
  value: string | null;
  onChange: (value: string) => void;
  label: string;
  className?: string;
}

/** Controlled single-select pill group — used wherever a native <select> would feel
 * too heavy (days, time slots, durations, platforms). */
export function ChoiceGroup({ options, value, onChange, label, className }: ChoiceGroupProps) {
  return (
    <div role="radiogroup" aria-label={label} className={cn("flex flex-wrap gap-2", className)}>
      {options.map((option) => {
        const isSelected = option.value === value;
        return (
          <motion.button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={isSelected}
            disabled={option.disabled}
            onClick={() => onChange(option.value)}
            whileHover={option.disabled ? undefined : { scale: 1.04 }}
            whileTap={option.disabled ? undefined : { scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className={cn(
              "inline-flex items-center gap-2 text-sm rounded-full px-4 py-2 border transition-colors",
              isSelected
                ? "bg-gradient-signature text-onbrand border-transparent"
                : "border-line text-mist-muted hover:text-mist hover:border-violet/40",
              option.disabled && "opacity-40 pointer-events-none"
            )}
          >
            {option.icon}
            {option.label}
          </motion.button>
        );
      })}
    </div>
  );
}
