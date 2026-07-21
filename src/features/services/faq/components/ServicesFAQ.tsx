import { Section, Container } from "@/components/layout";
import { Heading, Text, Caption } from "@/components/typography";
import { Accordion } from "@/components/interactive";
import { FAQS } from "@/data/faqs";

export function ServicesFAQ() {
  const items = FAQS.map((faq) => ({ id: faq.id, title: faq.question, content: faq.answer }));

  return (
    <Section id="faq" className="border-t border-line">
      <Container className="max-w-2xl">
        <div className="text-center">
          <Caption eyebrow>FAQ</Caption>
          <Heading level={2} size="lg" className="mt-3">
            Common questions.
          </Heading>
          <Text size="lg" className="mt-3">
            The things most clients ask before we start.
          </Text>
        </div>

        <div className="glass-panel mt-12 px-6">
          <Accordion items={items} />
        </div>
      </Container>
    </Section>
  );
}
