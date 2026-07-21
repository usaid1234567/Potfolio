/** Animated aurora background layer, built from the existing gradient + keyframe utilities. */
export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-signature-glow" />
      <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-violet/30 blur-[100px] animate-orb-float" />
      <div className="absolute top-32 right-1/4 h-80 w-80 rounded-full bg-azure/20 blur-[110px] animate-orb-float [animation-delay:2s]" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-gold/10 blur-[120px] animate-orb-float [animation-delay:4s]" />
      <div className="absolute inset-0 bg-noise-overlay opacity-40" />
    </div>
  );
}
