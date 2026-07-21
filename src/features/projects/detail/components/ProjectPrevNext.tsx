import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout";
import { Caption } from "@/components/typography";
import { ROUTES } from "@/constants";
import type { Project } from "@/types";

export interface ProjectPrevNextProps {
  previous: Project | null;
  next: Project | null;
}

export function ProjectPrevNext({ previous, next }: ProjectPrevNextProps) {
  if (!previous && !next) return null;

  return (
    <Container className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {previous ? (
          <Link href={ROUTES.projectDetails(previous.slug)} className="glass-panel p-5 flex items-center gap-3 hover:border-violet/40 transition-colors">
            <ArrowLeft className="h-4 w-4 text-mist-faint shrink-0" aria-hidden="true" />
            <div>
              <Caption>Previous</Caption>
              <p className="text-sm text-mist mt-1">{previous.title}</p>
            </div>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link href={ROUTES.projectDetails(next.slug)} className="glass-panel p-5 flex items-center justify-end gap-3 text-right hover:border-violet/40 transition-colors">
            <div>
              <Caption>Next</Caption>
              <p className="text-sm text-mist mt-1">{next.title}</p>
            </div>
            <ArrowRight className="h-4 w-4 text-mist-faint shrink-0" aria-hidden="true" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </Container>
  );
}
