# Component Library (Phase: UI Kit)

A complete, reusable component library. **No pages consume it yet** — the
Home page and all other page implementations are built in a later phase and
will import from here instead of writing custom UI.

## Import

```tsx
import { Button, GlassCard, Heading, Navbar } from "@/components";
// or, for smaller bundles / clarity:
import { Button } from "@/components/buttons";
import { ProjectCard } from "@/components/cards";
```

## Categories

| Folder | Components |
| --- | --- |
| `typography/` | Heading, Text, Label, Caption, Code, GradientText |
| `buttons/` | Button (primary/secondary/ghost/outline via `variant`), IconButton, LoadingButton |
| `inputs/` | Input, Textarea, Select, SearchInput, Checkbox, Radio, Toggle, FileUpload |
| `cards/` | GlassCard (base), ProjectCard, ServiceCard, TestimonialCard, StatsCard, FeatureCard |
| `navigation/` | Navbar, MobileMenu, NavLink, ThemeToggle |
| `layout/` | Section, Container, Grid, Stack, Divider |
| `feedback/` | Toast, Alert, Loader, Skeleton, EmptyState |
| `interactive/` | Modal, Drawer, Tabs, Accordion, Tooltip |
| `portfolio/` | ProjectTags, SkillBadge, SocialButton, TimelineItem, ExperienceCard, CertificateCard |

## Design decisions

- **One component per folder.** Each folder holds the component, its
  `index.ts` barrel, and (where the variant surface warrants it) a
  `*.types.ts` or `*.styles.ts` file kept separate from the render logic.
- **No duplicated tokens.** Every component styles itself with the existing
  Tailwind tokens (`base.void/ink/surface`, `violet`, `azure`, `mist`, `line`,
  `bg-gradient-signature`) and the global utility classes already defined in
  `src/styles/*.css` (`.glass-card`, `.glass-panel`, `.btn-signature`,
  `.text-display`, `.text-body`, `.text-eyebrow`, `.text-gradient`). No new
  color or spacing scale was introduced.
- **CSS Modules only where Tailwind can't express it cleanly**: the
  `MobileMenu` height transition, `Accordion` grid-row animation, `Toast`
  slide-in keyframes, `Tooltip` positioning, and the `SkillBadge` progress
  fill (driven by a CSS custom property, not an inline style) each get a
  scoped `.module.css`. Everything else is Tailwind utility classes.
- **Composition over duplication.** `IconButton` and `LoadingButton` reuse
  `Button`'s style maps. Every specialized card composes `GlassCard`.
  `Modal` and `Drawer` share `useEscapeKey` / `useScrollLock` hooks instead
  of repeating the same effects.
- **Accessibility**: semantic roles (`dialog`, `tablist`/`tab`/`tabpanel`,
  `switch`, `separator`, `alert`, `status`), `aria-label`/`aria-expanded`/
  `aria-controls` on interactive elements, visible focus rings via the
  global `:focus-visible` style, keyboard support (Escape to close
  Modal/Drawer, Enter to trigger the FileUpload dropzone), and
  `prefers-reduced-motion` respected globally.
- **Edge cases handled**: `Input`/`Textarea`/`Select` render an inline error
  message and `aria-invalid`; `Button`/`IconButton`/`LoadingButton` support
  `disabled`; `LoadingButton` swaps in a `Loader` and locks interaction while
  `isLoading`; `EmptyState` covers empty collections; `FileUpload` supports
  drag-and-drop, click-to-browse, and per-file removal.

## Next phase

Pages (starting with Home) will be assembled by composing these components
inside `src/features/*`, with no new one-off UI written at the page level.
