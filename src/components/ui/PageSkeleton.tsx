import { cn } from "@/lib/cn";

interface PageSkeletonProps {
  title: string;
  description: string;
  className?: string;
}

/**
 * Temporary placeholder used by routes that are scaffolded but not
 * yet implemented. Replaced feature-by-feature in later phases.
 */
export function PageSkeleton({ title, description, className }: PageSkeletonProps) {
  return (
    <main className={cn("section container-shell min-h-[60vh]", className)}>
      <p className="text-eyebrow">Coming soon</p>
      <h1 className="text-display text-4xl md:text-5xl mt-4">{title}</h1>
      <p className="text-body mt-4 max-w-xl">{description}</p>
    </main>
  );
}
