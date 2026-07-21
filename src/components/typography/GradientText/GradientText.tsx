import { cn } from "@/lib/cn";
import type { ElementType, ReactNode } from "react";

export interface GradientTextProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

export function GradientText({ as: Tag = "span", className, children }: GradientTextProps) {
  return <Tag className={cn("text-gradient", className)}>{children}</Tag>;
}
