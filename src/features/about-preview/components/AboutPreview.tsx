import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, Container, Grid, Stack } from "@/components/layout";
import { Heading, Text, Caption } from "@/components/typography";
import { StatsCard } from "@/components/cards";
import { BUTTON_BASE, BUTTON_VARIANTS, BUTTON_SIZES } from "@/components/buttons/Button/Button.styles";
import { cn } from "@/lib/cn";
import { STATS } from "@/data/stats";
import { ROUTES } from "@/constants";
import { AboutPreviewVisual } from "./AboutPreviewVisual";

const PREVIEW_STATS = STATS.slice(0, 2);

export function AboutPreview() {
  return (
    <Section id="about" className="border-t border-line">
      <Container>
        <Grid cols={2} gap="lg" className="items-center">
          <AboutPreviewVisual />

          <Stack gap="md">
            <Caption eyebrow>About</Caption>
            <Heading level={2} size="lg">
              Full Stack Developer Learning & Building
            </Heading>
            <Text size="lg">
              I&apos;m a web developer based in Pakistan, currently working at Symmetry Group.
              I focus on building responsive websites and interfaces with React and Next.js.
            </Text>

            <Grid cols={2} gap="sm">
              {PREVIEW_STATS.map((stat) => (
                <StatsCard key={stat.id} value={stat.value} label={stat.label} />
              ))}
            </Grid>

            <Link
              href={ROUTES.about}
              className={cn(BUTTON_BASE, BUTTON_VARIANTS.outline, BUTTON_SIZES.md, "w-fit")}
            >
              Learn more about me <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Stack>
        </Grid>
      </Container>
    </Section>
  );
}
