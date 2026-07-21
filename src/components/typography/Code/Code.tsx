import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export interface CodeProps {
  block?: boolean;
  className?: string;
  children: ReactNode;
}

export function Code({ block, className, children }: CodeProps) {
  if (block) {
    return (
      <pre className={cn("glass-panel font-mono text-sm text-mist p-4 overflow-x-auto", className)}>
        <code>{children}</code>
      </pre>
    );
  }

  return (
    <code className={cn("font-mono text-sm bg-base-surface border border-line rounded-sm px-1.5 py-0.5", className)}>
      {children}
    </code>
  );
}
