import { GlassCard } from "../GlassCard/GlassCard";
import type { ReactNode } from "react";

export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <GlassCard>
      <div className="text-azure-soft">{icon}</div>
      <h3 className="text-display text-base text-mist mt-4">{title}</h3>
      <p className="text-body text-sm mt-2">{description}</p>
    </GlassCard>
  );
}
