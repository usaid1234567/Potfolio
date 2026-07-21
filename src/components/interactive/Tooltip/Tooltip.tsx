import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./Tooltip.module.css";

export interface TooltipProps {
  label: string;
  children: ReactNode;
}

export function Tooltip({ label, children }: TooltipProps) {
  return (
    <span className={styles.wrapper}>
      {children}
      <span role="tooltip" className={cn(styles.bubble, "glass-panel px-3 py-1.5 text-xs text-mist")}>
        {label}
      </span>
    </span>
  );
}
