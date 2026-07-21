import { cn } from "@/lib/cn";

export interface ProjectTagsProps {
  tags: string[];
  className?: string;
}

export function ProjectTags({ tags, className }: ProjectTagsProps) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="text-xs font-mono text-mist-muted bg-white/5 border border-line rounded-full px-2.5 py-1"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
