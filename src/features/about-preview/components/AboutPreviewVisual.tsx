import { SITE_CONFIG } from "@/constants";

/** Professional photo for the About Preview section. */
export function AboutPreviewVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div
        className="absolute inset-0 rounded-xl2 bg-gradient-signature opacity-20 blur-2xl"
        aria-hidden="true"
      />

      <div className="glass-panel relative h-full w-full overflow-hidden rounded-xl2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="\assets\images\About\about.png"
          alt={`${SITE_CONFIG.name} - About`}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
}