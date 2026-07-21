import { Heading } from "@/components/typography";

export interface ProjectListSectionProps {
  title: string;
  items: string[];
}

/** Reused for Features, Challenges, Results, and Lessons Learned — all title + bullet list. */
export function ProjectListSection({ title, items }: ProjectListSectionProps) {
  return (
    <div>
      <Heading level={3} size="sm">
        {title}
      </Heading>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="text-body text-lg flex gap-2.5">
            <span className="text-violet-soft" aria-hidden="true">—</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
