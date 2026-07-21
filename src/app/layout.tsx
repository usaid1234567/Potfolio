import type { Metadata } from "next";
import Script from "next/script";
import { fontDisplay, fontBody, fontMono } from "@/lib/fonts";
import { buildMetadata } from "@/lib/metadata";
import { AppProviders } from "@/providers/AppProviders";
import { StructuredData } from "@/components/seo";
import { SITE_CONFIG } from "@/constants/site";
import { siteConfig } from "@/config/site.config";
import "@/styles/globals.css";

export const metadata: Metadata = buildMetadata();

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  email: SITE_CONFIG.email,
  jobTitle: "Web Developer",
  description: SITE_CONFIG.description,
};

const NO_FLASH_THEME_SCRIPT = `
(function () {
  try {
    var stored = window.localStorage.getItem("${SITE_CONFIG.themeStorageKey}");
    var theme = stored === "dark" || stored === "light" ? stored : "${siteConfig.defaultTheme}";
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="no-flash-theme" strategy="beforeInteractive">
          {NO_FLASH_THEME_SCRIPT}
        </Script>
        <StructuredData data={PERSON_SCHEMA} />
      </head>
      <body
        suppressHydrationWarning
        className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable} font-body bg-base-void text-mist antialiased`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
