import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center text-center gap-3 py-16", className)}>
      {icon && <div className="text-mist-faint">{icon}</div>}
      <p className="text-display text-lg text-mist">{title}</p>
      {description && <p className="text-body max-w-sm">{description}</p>}
      {action}
    </div>
  );
}
