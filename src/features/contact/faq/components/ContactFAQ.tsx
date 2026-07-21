import { Section, Container } from "@/components/layout";
import { Heading, Text, Caption } from "@/components/typography";
import { Accordion } from "@/components/interactive";
import { CONTACT_FAQS } from "@/data/contactFaqs";

export function ContactFAQ() {
  const items = CONTACT_FAQS.map((faq) => ({ id: faq.id, title: faq.question, content: faq.answer }));

  return (
    <Section id="contact-faq" className="border-t border-line">
      <Container className="max-w-2xl">
        <div className="text-center">
          <Caption eyebrow>FAQ</Caption>
          <Heading level={2} size="lg" className="mt-3">
            Common questions.
          </Heading>
          <Text size="lg" className="mt-3">
            A few things people usually want to know first.
          </Text>
        </div>

        <div className="glass-panel mt-12 px-6">
          <Accordion items={items} />
        </div>
      </Container>
    </Section>
  );
}
