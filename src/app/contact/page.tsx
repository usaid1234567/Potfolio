import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/constants";
import { SiteNavbar } from "@/features/navigation";
import { Footer } from "@/features/footer";
import { ContactHero } from "@/features/contact/hero";
import { ContactInfo } from "@/features/contact/info";
import { ContactForm } from "@/features/contact/form";
import { Availability } from "@/features/contact/availability";
import { ContactSocialLinks } from "@/features/contact/social";
import { ContactFAQ } from "@/features/contact/faq";
import { CTA } from "@/features/cta";

export const metadata: Metadata = buildMetadata({
  title: "Contact — M. USAID",
  description: "Questions, feedback, or a project that doesn't fit the standard booking flow — reach out directly.",
  path: ROUTES.contact,
});

export default function ContactPage() {
  return (
    <>
      <SiteNavbar />
      <main>
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <Availability />
        <ContactSocialLinks />
        <ContactFAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
