import type { ElementType, ReactNode } from "react";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps {
  /** Semantic heading level, also drives default size unless `size` is set */
  level?: HeadingLevel;
  /** Visual size, independent from semantic level */
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  as?: ElementType;
  id?: string;
  className?: string;
  children: ReactNode;
}
