import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, Container, Stack } from "@/components/layout";
import { Heading, Text, Caption } from "@/components/typography";
import { TimelineItem } from "@/components/portfolio";
import { BUTTON_BASE, BUTTON_VARIANTS, BUTTON_SIZES } from "@/components/buttons/Button/Button.styles";
import { cn } from "@/lib/cn";
import { EXPERIENCE } from "@/data/experience";
import { ROUTES } from "@/constants";

const RECENT_EXPERIENCE = EXPERIENCE.slice(0, 4);

export function ExperiencePreview() {
  return (
    <Section id="experience" className="border-t border-line">
      <Container className="max-w-3xl">
        <div className="text-center">
          <Caption eyebrow>Experience</Caption>
          <Heading level={2} size="lg" className="mt-3">
            Where the work happened.
          </Heading>
          <Text size="lg" className="mt-3">
            The roles that shaped how I build, most recent first.
          </Text>
        </div>

        <Stack gap="lg" className="mt-12">
          {RECENT_EXPERIENCE.map((entry, index) => (
            <TimelineItem
              key={entry.id}
              date={`${entry.startDate} — ${entry.endDate}`}
              title={`${entry.role} · ${entry.company}`}
              description={entry.summary}
              isLast={index === RECENT_EXPERIENCE.length - 1}
            >
              <ul className="mt-3 space-y-1.5">
                {entry.highlights.map((highlight) => (
                  <li key={highlight} className="text-sm text-mist-muted flex gap-2">
                    <span className="text-violet-soft" aria-hidden="true">—</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </TimelineItem>
          ))}
        </Stack>

        <div className="flex justify-center mt-10">
          <Link
            href={ROUTES.experience}
            className={cn(BUTTON_BASE, BUTTON_VARIANTS.outline, BUTTON_SIZES.md)}
          >
            View full experience <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
