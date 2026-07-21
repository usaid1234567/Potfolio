import { Mail, MessageSquare } from "lucide-react";
import { Section, Container } from "@/components/layout";
import { Heading, Text, Caption } from "@/components/typography";
import { GlassCard } from "@/components/cards";

const COMMUNICATION_METHODS = [
  { icon: Mail, label: "Email" },
  { icon: MessageSquare, label: "Contact Form" },
];

export function Availability() {
  return (
    <Section id="availability" className="border-t border-line">
      <Container className="max-w-3xl">
        <GlassCard className="text-center">
          <div className="glass-panel inline-flex items-center gap-2 px-4 py-1.5 w-fit mx-auto">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-pulse-glow" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs text-mist-muted">Currently available for new projects</span>
          </div>

          <Heading level={2} size="sm" className="mt-4">
            Estimated response time: within 1–2 business days
          </Heading>
          <Text size="sm" className="mt-2">
            Faster for anything simple, a little longer for detailed project inquiries.
          </Text>

          <Caption eyebrow className="mt-6 block">Preferred communication methods</Caption>
          <div className="flex items-center justify-center gap-6 mt-3">
            {COMMUNICATION_METHODS.map((method) => (
              <div key={method.label} className="flex items-center gap-2 text-sm text-mist-muted">
                <method.icon className="h-4 w-4 text-violet-soft" aria-hidden="true" />
                {method.label}
              </div>
            ))}
          </div>
        </GlassCard>
      </Container>
    </Section>
  );
}
