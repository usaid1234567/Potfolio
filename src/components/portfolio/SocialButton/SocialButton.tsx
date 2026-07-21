import { Link as LinkIcon } from "lucide-react";
import { resolveLucideIcon } from "@/utils/resolveLucideIcon";
import type { SocialLink } from "@/types";

export interface SocialButtonProps {
  social: SocialLink;
}

export function SocialButton({ social }: SocialButtonProps) {
  const Icon = resolveLucideIcon(social.icon, LinkIcon);

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={social.platform}
      className="h-10 w-10 rounded-full border border-line flex items-center justify-center text-mist-muted hover:text-mist hover:border-violet/50 hover:bg-violet/5 transition-colors"
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}
