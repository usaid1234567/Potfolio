export const BUTTON_BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] disabled:opacity-40 disabled:pointer-events-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-soft";

export const BUTTON_VARIANTS = {
  primary: "bg-gradient-signature text-onbrand shadow-glow-soft hover:shadow-glow-lg hover:brightness-110 hover:-translate-y-0.5",
  secondary:
    "bg-base-surface text-mist border border-line hover:border-mist-faint hover:-translate-y-0.5",
  ghost: "text-mist hover:bg-white/5",
  outline: "border border-violet/50 text-mist hover:bg-violet/10 hover:border-violet",
} as const;

export const BUTTON_SIZES = {
  sm: "text-sm h-9 px-4",
  md: "text-sm h-11 px-6",
  lg: "text-base h-12 px-8",
} as const;
