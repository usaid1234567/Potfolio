import { Mail, MapPin, Clock3, Timer } from "lucide-react";
import { Section, Container, Grid } from "@/components/layout";
import { FeatureCard } from "@/components/cards";
import { SITE_CONFIG } from "@/constants";

const CONTACT_INFO = [
  { icon: Mail, title: "Email", description: SITE_CONFIG.email },
  { icon: MapPin, title: "Location", description: "Pakistan (Remote)" },
  { icon: Clock3, title: "Working Hours", description: "Mon–Sat" },
  { icon: Timer, title: "Response Time", description: "Within 1–2 business days" },
];

export function ContactInfo() {
  return (
    <Section id="contact-info" className="border-t border-line">
      <Container>
        <Grid cols={4} gap="md">
          {CONTACT_INFO.map((item) => (
            <FeatureCard key={item.title} icon={<item.icon className="h-6 w-6" aria-hidden="true" />} title={item.title} description={item.description} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
