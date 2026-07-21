"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { Section, Container } from "@/components/layout";
import { Heading, Text } from "@/components/typography";
import { Input } from "@/components/inputs";
import { Button } from "@/components/buttons";
import { GlassCard } from "@/components/cards";

/** UI only — no subscription backend yet. Wiring a real provider only touches handleSubmit. */
export function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Section id="newsletter" className="border-t border-line">
      <Container className="max-w-xl">
        <GlassCard className="text-center">
          <Mail className="h-6 w-6 text-violet-soft mx-auto" aria-hidden="true" />
          <Heading level={2} size="sm" className="mt-4">
            Get new articles by email
          </Heading>
          <Text size="sm" className="mt-2">
            One email per article, no spam. Unsubscribe anytime.
          </Text>

          {submitted ? (
            <Text size="sm" tone="default" className="mt-5 text-violet-soft">
              You&apos;re on the list — thanks for subscribing.
            </Text>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mt-5">
              <Input
                type="email"
                required
                placeholder="you@example.com"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit">Subscribe</Button>
            </form>
          )}
        </GlassCard>
      </Container>
    </Section>
  );
}
