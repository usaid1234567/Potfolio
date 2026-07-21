"use client";

import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { Container, Divider } from "@/components/layout";
import { Text, Caption } from "@/components/typography";
import { SocialButton } from "@/components/portfolio";
import { IconButton } from "@/components/buttons/IconButton/IconButton";
import { NAV_LINKS } from "@/data/navigation";
import { SOCIALS } from "@/data/socials";
import { SITE_CONFIG, ROUTES } from "@/constants";

export function Footer() {
  const year = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="border-t border-line">
      <Container className="py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="max-w-xs">
            <Link href={ROUTES.home} className="text-display text-lg text-mist">
              {SITE_CONFIG.name}
            </Link>
            <Text size="sm" className="mt-3">
              {SITE_CONFIG.description}
            </Text>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center gap-2 text-sm text-mist-muted hover:text-mist mt-4"
            >
              <Mail className="h-4 w-4" aria-hidden="true" /> {SITE_CONFIG.email}
            </a>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-col gap-3">
            <Caption eyebrow>Navigate</Caption>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-mist-muted hover:text-mist">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <Caption eyebrow>Connect</Caption>
            <div className="flex gap-3">
              {SOCIALS.map((social) => (
                <SocialButton key={social.platform} social={social} />
              ))}
            </div>
          </div>
        </div>

        <Divider className="my-10" />

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <Text size="xs" tone="faint">
            © {year} {SITE_CONFIG.name}. All rights reserved.
          </Text>
          <IconButton
            icon={<ArrowUp className="h-4 w-4" />}
            label="Back to top"
            onClick={scrollToTop}
            variant="ghost"
            size="sm"
          />
        </div>
      </Container>
    </footer>
  );
}
