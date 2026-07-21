import type { NavLink } from "@/types";
import { ROUTES } from "@/constants";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: ROUTES.home },
  { label: "About", href: ROUTES.about },
  { label: "Services", href: ROUTES.services },
  { label: "Projects", href: ROUTES.projects },
  { label: "Experience", href: ROUTES.experience },
  { label: "Certificates", href: ROUTES.certificates },
  { label: "Blog", href: ROUTES.blog },
  { label: "Contact", href: ROUTES.contact },
];
