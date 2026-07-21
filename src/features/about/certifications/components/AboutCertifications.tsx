"use client";

import { motion } from "framer-motion";
import { Section, Container, Grid } from "@/components/layout";
import { Heading, Text, Caption } from "@/components/typography";
import { CertificateCard } from "@/components/portfolio";
import { EmptyState } from "@/components/feedback";
import { useAnimationVariants } from "@/hooks/useAnimation";
import { cardGrid, cardItem } from "@/animations/cards";
import { CERTIFICATES } from "@/data/certificates";

export function AboutCertifications() {
  const variants = useAnimationVariants({ cardGrid, cardItem });

  return (
    <Section id="certifications" className="border-t border-line">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <Caption eyebrow>Certifications</Caption>
          <Heading level={2} size="lg" className="mt-3">
            Credentials worth mentioning.
          </Heading>
          <Text size="lg" className="mt-3">
            Formal recognition alongside the day-to-day learning.
          </Text>
        </div>

        {CERTIFICATES.length === 0 ? (
          <EmptyState
            className="mt-12"
            title="No certificates yet"
            description="This section will list verified credentials as they're earned."
          />
        ) : (
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={variants.cardGrid}>
            <Grid cols={3} gap="md" className="mt-12">
              {CERTIFICATES.map((certificate) => (
                <motion.div key={certificate.id} variants={variants.cardItem}>
                  <CertificateCard certificate={certificate} />
                </motion.div>
              ))}
            </Grid>
          </motion.div>
        )}
      </Container>
    </Section>
  );
}
