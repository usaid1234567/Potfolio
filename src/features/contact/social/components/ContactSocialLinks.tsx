import { Section, Container } from "@/components/layout";
import { Heading, Text, Caption } from "@/components/typography";
import { SocialButton } from "@/components/portfolio";
import { SOCIALS } from "@/data/socials";

export function ContactSocialLinks() {
  return (
    <Section id="social-links" className="border-t border-line">
      <Container className="max-w-xl text-center">
        <Caption eyebrow>Elsewhere</Caption>
        <Heading level={2} size="lg" className="mt-3">
          Find me on the internet.
        </Heading>
        <Text size="lg" className="mt-3">
          Pick whichever platform you already live in.
        </Text>

        <div className="flex items-center justify-center gap-3 mt-8">
          {SOCIALS.map((social) => (
            <SocialButton key={social.platform} social={social} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
