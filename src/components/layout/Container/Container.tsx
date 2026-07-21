import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export function Container({ className, children }: ContainerProps) {
  return <div className={cn("container-shell", className)}>{children}</div>;
}
