import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/constants";
import { SiteNavbar } from "@/features/navigation";
import { Footer } from "@/features/footer";
import { HireMeHero } from "@/features/hire-me/hero";
import { BookingOverview } from "@/features/hire-me/overview";
import { BookingWizard } from "@/features/hire-me/wizard";
import { HireMeFAQ } from "@/features/hire-me/faq";
import { CTA } from "@/features/cta";

export const metadata: Metadata = buildMetadata({
  title: "Hire Me — M. USAID",
  description: "Book a consultation — pick a time, describe the project, and hear back within a business day.",
  path: ROUTES.hireMe,
});

export default function HireMePage() {
  return (
    <>
      <SiteNavbar />
      <main>
        <HireMeHero />
        <BookingOverview />
        <BookingWizard />
        <HireMeFAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
