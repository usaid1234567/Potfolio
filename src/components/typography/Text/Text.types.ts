import type { ElementType, ReactNode } from "react";

export interface TextProps {
  as?: ElementType;
  size?: "xs" | "sm" | "base" | "lg";
  tone?: "default" | "muted" | "faint";
  className?: string;
  children: ReactNode;
}
