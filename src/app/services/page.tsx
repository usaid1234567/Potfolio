import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/constants";
import { SiteNavbar } from "@/features/navigation";
import { Footer } from "@/features/footer";
import { ServicesHero } from "@/features/services/hero";
import { ServicesGrid } from "@/features/services/grid";
import { ProcessTimeline } from "@/features/services/process";
import { TechStack } from "@/features/about/tech-stack";
import { WhyWorkWithMe } from "@/features/services/why-us";
import { ServicesFAQ } from "@/features/services/faq";
import { CTA } from "@/features/cta";

export const metadata: Metadata = buildMetadata({
  title: "Services — M. USAID",
  description: "Eight ways to work together, from a single feature to a full product build — technologies, deliverables, and process included.",
  path: ROUTES.services,
});

export default function ServicesPage() {
  return (
    <>
      <SiteNavbar />
      <main>
        <ServicesHero />
        <ServicesGrid />
        <ProcessTimeline />
        <TechStack
          eyebrow="Technologies"
          title="Built with tools that scale."
          description="Grouped the same way across every engagement, from prototype to production."
        />
        <WhyWorkWithMe />
        <ServicesFAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
