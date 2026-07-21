import type { SocialLink } from "@/types";
import { SITE_CONFIG } from "@/constants/site";

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", href: "https://github.com", icon: "github" },
  { platform: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { platform: "X", href: "https://x.com", icon: "twitter" },
  { platform: "Discord", href: "https://discord.com", icon: "message-circle" },
  { platform: "Email", href: `mailto:${SITE_CONFIG.email}`, icon: "mail" },
];
