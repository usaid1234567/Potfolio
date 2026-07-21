"use client";

import { useState } from "react";
import { Link2, Check } from "lucide-react";
import { IconButton } from "@/components/buttons";
import { Caption } from "@/components/typography";

export interface ShareButtonsProps {
  title: string;
  url: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const shareTargets = [
    { label: "Share on X", href: `https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}` },
    { label: "Share on LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
  ];

  return (
    <div className="flex items-center gap-3">
      <Caption>Share</Caption>
      {shareTargets.map((target) => (
        <a key={target.label} href={target.href} target="_blank" rel="noreferrer noopener" className="text-sm text-mist-muted hover:text-mist transition-colors">
          {target.label}
        </a>
      ))}
      <IconButton
        icon={copied ? <Check className="h-3.5 w-3.5" /> : <Link2 className="h-3.5 w-3.5" />}
        label="Copy link"
        onClick={copyLink}
        variant="ghost"
        size="sm"
      />
    </div>
  );
}
