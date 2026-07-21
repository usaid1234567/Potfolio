"use client";

import { motion } from "framer-motion";
import { Section, Container, Grid } from "@/components/layout";
import { Heading, Text, Caption } from "@/components/typography";
import { ServiceCard } from "@/components/cards";
import { useAnimationVariants } from "@/hooks/useAnimation";
import { cardGrid, cardItem } from "@/animations/cards";
import { SERVICES } from "@/data/services";

export function ServicesPreview() {
  const variants = useAnimationVariants({ cardGrid, cardItem });

  return (
    <Section id="services" className="border-t border-line">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <Caption eyebrow>Services</Caption>
          <Heading level={2} size="lg" className="mt-3">
            What I bring to a build.
          </Heading>
          <Text size="lg" className="mt-3">
            A few ways I can help with your web project.
          </Text>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={variants.cardGrid}
        >
          <Grid cols={4} gap="md" className="mt-12">
            {SERVICES.map((service) => (
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
