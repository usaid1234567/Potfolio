import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ROUTES } from "@/constants";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

/** Simple breadcrumb trail, always anchored at Home. Reusable across every inner page. */
export function Breadcrumb({ items }: BreadcrumbProps) {
  const trail: BreadcrumbItem[] = [{ label: "Home", href: ROUTES.home }, ...items];

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs text-mist-faint">
        {trail.map((item, index) => {
          const isLast = index === trail.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-mist transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className={isLast ? "text-mist-muted" : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && <ChevronRight className="h-3 w-3" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
