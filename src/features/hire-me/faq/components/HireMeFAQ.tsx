import { Section, Container } from "@/components/layout";
import { Heading, Text, Caption } from "@/components/typography";
import { Accordion } from "@/components/interactive";
import { BOOKING_FAQS } from "@/data/bookingFaqs";

export function HireMeFAQ() {
  const items = BOOKING_FAQS.map((faq) => ({ id: faq.id, title: faq.question, content: faq.answer }));

  return (
    <Section id="booking-faq" className="border-t border-line">
      <Container className="max-w-2xl">
        <div className="text-center">
          <Caption eyebrow>FAQ</Caption>
          <Heading level={2} size="lg" className="mt-3">
            Booking questions.
          </Heading>
          <Text size="lg" className="mt-3">
            The details that usually come up before a call.
          </Text>
        </div>

        <div className="glass-panel mt-12 px-6">
          <Accordion items={items} />
        </div>
      </Container>
    </Section>
  );
}
