"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import type { NavLink as NavLinkData } from "@/types";

export interface NavLinkProps {
  link: NavLinkData;
  onClick?: () => void;
  className?: string;
}

export function NavLink({ link, onClick, className }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === link.href;

  return (
    <Link
      href={link.href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "text-sm transition-colors",
        isActive ? "text-mist" : "text-mist-muted hover:text-mist",
        className
      )}
    >
      {link.label}
    </Link>
  );
}
