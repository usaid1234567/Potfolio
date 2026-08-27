import type { SocialLink } from "@/types";
import { SITE_CONFIG } from "@/constants/site";

export const SOCIALS: SocialLink[] = [
  {
    platform: "GitHub",
    href: "https://github.com/usaid1234567",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    href: "https://www.linkedin.com/in/m-usaid-full-stack",
    icon: "linkedin",
  },
  {
    platform: "X",
    href: "https://x.com/UsaidM29903",
    icon: "twitter",
  },
  {
    platform: "Discord",
    href: "https://discord.com/usaid134567_30894",
    icon: "message-circle",
  },
  {
    platform: "Email",
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      SITE_CONFIG.email
    )}`,
    icon: "mail",
  },
];