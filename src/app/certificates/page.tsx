import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/constants";
import { SiteNavbar } from "@/features/navigation";
import { Footer } from "@/features/footer";
import { CertificatesHero } from "@/features/certificates-page/hero";
import { AboutCertifications } from "@/features/about/certifications";
import { CTA } from "@/features/cta";

export const metadata: Metadata = buildMetadata({
  title: "Certificates — M. USAID",
  description: "Verified credentials and certifications.",
  path: ROUTES.certificates,
});

export default function CertificatesPage() {
  return (
    <>
      <SiteNavbar />
      <main>
        <CertificatesHero />
        <AboutCertifications />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
