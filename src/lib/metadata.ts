import type { Metadata } from "next";
import { SITE_CONFIG } from "@/constants";

export interface BuildMetadataOptions extends Partial<Metadata> {
  /** Page path (e.g. "/about") used to derive the canonical URL. Defaults to the homepage. */
  path?: string;
}

export function buildMetadata({ path = "/", ...overrides }: BuildMetadataOptions = {}): Metadata {
  const title = overrides.title ?? SITE_CONFIG.title;
  const description = overrides.description ?? SITE_CONFIG.description;

  return {
    title,
    description,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_CONFIG.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    ...overrides,
  };
}
