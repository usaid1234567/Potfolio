import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants";

export interface BuildMetadataOptions extends Partial<Metadata> {
  /** Page path (e.g. "/about") used to derive the canonical URL. Defaults to the homepage. */
  path?: string;
}

export function buildMetadata(
  { path = "/", ...overrides }: BuildMetadataOptions = {},
): Metadata {
  const title = overrides.title ?? SITE_CONFIG.title;
  const description = overrides.description ?? SITE_CONFIG.description;

  const canonicalUrl = new URL(path, SITE_CONFIG.url).toString();

  return {
    title,
    description,

    metadataBase: new URL(SITE_CONFIG.url),

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.name} - Web Developer`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },

    ...overrides,
  };
}