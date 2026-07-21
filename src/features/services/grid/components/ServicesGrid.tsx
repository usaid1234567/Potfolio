"use client";

import { motion } from "framer-motion";
import { Section, Container, Grid } from "@/components/layout";
import { Heading, Text, Caption } from "@/components/typography";
import { ServiceCard } from "@/components/cards";
import { useAnimationVariants } from "@/hooks/useAnimation";
import { cardGrid, cardItem } from "@/animations/cards";
import { SERVICE_CATALOG } from "@/data/serviceCatalog";

export function ServicesGrid() {
  const variants = useAnimationVariants({ cardGrid, cardItem });

  return (
    <Section id="offerings" className="border-t border-line">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <Caption eyebrow>What I Offer</Caption>
          <Heading level={2} size="lg" className="mt-3">
            Ways to work together.
          </Heading>
          <Text size="lg" className="mt-3">
            Each service comes with a clear set of technologies and deliverables.
          </Text>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={variants.cardGrid}>
          <Grid cols={3} gap="md" className="mt-12">
            {SERVICE_CATALOG.map((service) => (
              <motion.div key={service.id} variants={variants.cardItem} className="h-full">
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Section>
  );
}
