import { GlassCard } from "../GlassCard/GlassCard";
import type { ReactNode } from "react";

export interface StatsCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
}

export function StatsCard({ value, label, icon }: StatsCardProps) {
  return (
    <GlassCard className="text-center">
      {icon && <div className="flex justify-center text-violet-soft mb-3">{icon}</div>}
      <p className="text-display text-3xl text-gradient">{value}</p>
      <p className="text-xs text-mist-faint uppercase tracking-wide mt-2">{label}</p>
    </GlassCard>
  );
}
