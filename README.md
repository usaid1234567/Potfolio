# Portfolio — Architecture (Phase 1)

Enterprise-grade Next.js 15 + TypeScript portfolio. This phase establishes the
full project architecture. No Home page UI is implemented yet — every route
renders a lightweight `PageSkeleton` placeholder.

## Stack
Next.js 15 (App Router) · React · TypeScript · Tailwind CSS · CSS Modules ·
Framer Motion · shadcn/ui-ready · Lucide Icons · React Hook Form · Zod

## Structure

```
src/
├── app/            Route segments (App Router). Only routing + layout, no business logic.
├── components/     Shared, feature-agnostic UI (ui/, layout/, sections/).
├── features/       One folder per Home section, each with its own components/hooks/animations.
├── hooks/          Cross-feature reusable hooks (useTheme, useScroll, useNavbar, useAnimation).
├── services/       API-shaped functions (project, contact, booking, blog) — swap in real
│                   endpoints without touching components.
├── lib/            Framework-adjacent helpers (cn, fonts, metadata).
├── utils/          Pure, dependency-free helpers (formatDate, scrollTo, clamp).
├── constants/      Static config values (site info, routes, breakpoints).
├── data/           Typed content arrays — components never hardcode copy.
├── animations/     Framer Motion variants, one file per motion context.
├── styles/         globals.css + one responsibility per stylesheet (see below).
├── assets/         Images, icons, fonts.
├── types/          Shared TypeScript interfaces, one file per domain.
├── providers/      React context providers (ThemeProvider, AppProviders).
└── config/         Small typed config objects (site.config, nav.config).
```

## Styles

Each stylesheet in `src/styles/` owns exactly one concern and is imported once
from `globals.css`: `variables` (design tokens), `typography`, `layout`,
`cards`, `buttons`, `gradients`, `scrollbar`, `animations`, `utilities`.

## Design tokens (see `tailwind.config.ts` / `variables.css`)

- **Palette**: void `#07070C`, ink `#0D0D14`, surface `#13131C`, violet `#7C5CFF`,
  azure `#3E8BFF`, mist `#EDEDF4`.
- **Type**: Space Grotesk (display), Inter (body), JetBrains Mono (utility/eyebrow).
- **Signature element**: a glass navbar over an ambient violet→azure radial glow,
  reserved for the Hero in Phase 2.

## Routing

All routes from the brief are scaffolded and render: Home, About, Services,
Projects, Project Details (`/projects/[slug]`), Experience, Certificates, Blog,
Blog Details (`/blog/[slug]`), Hire Me, Contact, 404.

## Constraints enforced

- Every file kept under the size ceiling (pages < 80 lines, components < 150 lines).
- One responsibility per file; no colocated UI + logic + styles + data.
- Feature folders, not type-first dumping grounds.

## Next: Phase 2

Implement the Home page by building out each `src/features/*` folder
(Navigation, Hero, About Preview, Services Preview, Featured Projects,
Skills Preview, Testimonials, CTA, Footer) as composed, reusable components.
