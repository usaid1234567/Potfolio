"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { useNavbar } from "@/hooks/useNavbar";
import { NavLink } from "../NavLink/NavLink";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { IconButton } from "@/components/buttons/IconButton/IconButton";
import { BUTTON_BASE, BUTTON_VARIANTS, BUTTON_SIZES } from "@/components/buttons/Button/Button.styles";
import { NAV_LINKS } from "@/data/navigation";
import { ROUTES, SITE_CONFIG } from "@/constants";

export function Navbar() {
  const { isOpen, toggle, close, scrolled } = useNavbar();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-base-void/80 backdrop-blur-xl border-b border-line" : "bg-transparent"
      )}
    >
      <div className="container-shell flex items-center justify-between h-16">
        <Link href={ROUTES.home} className="text-display text-lg text-mist">
          {SITE_CONFIG.name}
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} link={link} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href={ROUTES.hireMe} className={cn(BUTTON_BASE, BUTTON_VARIANTS.primary, BUTTON_SIZES.sm, "hidden sm:inline-flex")}>
            Hire Me
          </Link>
          <ThemeToggle />
          <IconButton
            icon={isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            label={isOpen ? "Close menu" : "Open menu"}
            onClick={toggle}
            variant="ghost"
            size="sm"
            className="md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          />
        </div>
      </div>

      <MobileMenu isOpen={isOpen} onLinkClick={close} />
    </header>
  );
}
