import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export interface TimelineItemProps {
  date: string;
  title: string;
  description?: string;
  isLast?: boolean;
  children?: ReactNode;
}

export function TimelineItem({ date, title, description, isLast, children }: TimelineItemProps) {
  return (
    <div className="relative pl-8">
      <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-gradient-signature" />
      {!isLast && <span className={cn("absolute left-[4.5px] top-4 bottom-[-1.5rem] w-px bg-line")} />}
      <p className="text-eyebrow">{date}</p>
      <h3 className="text-display text-base text-mist mt-1">{title}</h3>
      {description && <p className="text-body text-sm mt-1">{description}</p>}
      {children}
    </div>
  );
}
