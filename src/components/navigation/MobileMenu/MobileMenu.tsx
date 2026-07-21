"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { NavLink } from "../NavLink/NavLink";
import { BUTTON_BASE, BUTTON_VARIANTS, BUTTON_SIZES } from "@/components/buttons/Button/Button.styles";
import { NAV_LINKS } from "@/data/navigation";
import { ROUTES } from "@/constants";
import styles from "./MobileMenu.module.css";

export interface MobileMenuProps {
  isOpen: boolean;
  onLinkClick: () => void;
}

export function MobileMenu({ isOpen, onLinkClick }: MobileMenuProps) {
  return (
    <div
      id="mobile-menu"
      className={cn(styles.panel, isOpen && styles.panelOpen, "md:hidden border-t border-line")}
    >
      <nav className="container-shell py-6 flex flex-col gap-5" aria-label="Mobile navigation">
        {NAV_LINKS.map((link) => (
          <NavLink key={link.href} link={link} onClick={onLinkClick} className="text-base" />
        ))}
        <Link
          href={ROUTES.hireMe}
          onClick={onLinkClick}
          className={cn(BUTTON_BASE, BUTTON_VARIANTS.primary, BUTTON_SIZES.md, "w-fit sm:hidden")}
        >
          Hire Me
        </Link>
      </nav>
    </div>
  );
}
