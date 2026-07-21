import { Heading, Text } from "@/components/typography";

export interface ProjectProseSectionProps {
  title: string;
  content: string;
}

/** Reused for Overview, Problem, Solution, Architecture, and Timeline — all title + paragraph. */
export function ProjectProseSection({ title, content }: ProjectProseSectionProps) {
  return (
    <div>
      <Heading level={3} size="sm">
        {title}
      </Heading>
      <Text size="lg" className="mt-3">
        {content}
      </Text>
    </div>
  );
}
