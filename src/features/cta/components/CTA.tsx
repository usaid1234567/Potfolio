import Link from "next/link";
import { ArrowRight, CalendarClock, FolderKanban } from "lucide-react";
import { Section, Container } from "@/components/layout";
import { Heading, Text } from "@/components/typography";
import { BUTTON_BASE, BUTTON_VARIANTS, BUTTON_SIZES } from "@/components/buttons/Button/Button.styles";
import { cn } from "@/lib/cn";
import { ROUTES } from "@/constants";

export function CTA() {
  return (
    <Section id="hire" glow className="border-t border-line">
      <Container className="max-w-2xl text-center">
        <Heading level={2} size="xl">
          Let&apos;s build something that lasts.
        </Heading>
        <Text size="lg" className="mt-4">
          Available for freelance and full-time web development opportunities.
        </Text>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <Link href={ROUTES.hireMe} className={cn(BUTTON_BASE, BUTTON_VARIANTS.primary, BUTTON_SIZES.lg)}>
            Hire Me <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link href={ROUTES.contact} className={cn(BUTTON_BASE, BUTTON_VARIANTS.secondary, BUTTON_SIZES.lg)}>
            <CalendarClock className="h-4 w-4" aria-hidden="true" /> Schedule a Meeting
          </Link>
          <Link href={ROUTES.projects} className={cn(BUTTON_BASE, BUTTON_VARIANTS.outline, BUTTON_SIZES.lg)}>
            <FolderKanban className="h-4 w-4" aria-hidden="true" /> View Projects
          </Link>
        </div>
      </Container>
    </Section>
  );
}
