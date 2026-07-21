import { Section, Container, Grid } from "@/components/layout";
import { FeatureCard } from "@/components/cards";
import { Calendar, Clock, MailCheck, Timer } from "lucide-react";

const OVERVIEW_ITEMS = [
  { icon: Calendar, title: "What you can book", description: "A focused call to scope your project — not a generic sales pitch." },
  { icon: MailCheck, title: "After you book", description: "You'll get an email confirmation immediately, plus a calendar invite for your chosen platform." },
  { icon: Clock, title: "Response time", description: "I confirm or propose a new time within one business day." },
  { icon: Timer, title: "Duration options", description: "Choose 30, 60, or 90 minutes depending on how much you want to cover." },
];

export function BookingOverview() {
  return (
    <Section id="booking-overview" className="border-t border-line">
      <Container>
        <Grid cols={4} gap="md">
          {OVERVIEW_ITEMS.map((item) => (
            <FeatureCard key={item.title} icon={<item.icon className="h-6 w-6" aria-hidden="true" />} title={item.title} description={item.description} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
