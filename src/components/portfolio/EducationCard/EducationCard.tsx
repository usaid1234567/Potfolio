import { GraduationCap } from "lucide-react";
import { GlassCard } from "@/components/cards/GlassCard/GlassCard";
import type { Education } from "@/types";

export interface EducationCardProps {
  education: Education;
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <GlassCard className="flex items-start gap-4">
      <div className="h-11 w-11 rounded-full bg-white/5 flex items-center justify-center shrink-0">
        <GraduationCap className="h-5 w-5 text-violet-soft" aria-hidden="true" />
      </div>
      <div className="flex-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-display text-base text-mist">{education.degree}</h3>
            <p className="text-sm text-violet-soft mt-1">{education.institution}</p>
          </div>
          <p className="text-xs font-mono text-mist-faint whitespace-nowrap">
            {education.startDate} — {education.endDate}
          </p>
        </div>
        {education.highlights.length > 0 && (
          <ul className="mt-3 space-y-1.5">
            {education.highlights.map((highlight) => (
              <li key={highlight} className="text-sm text-mist-muted flex gap-2">
                <span className="text-violet-soft" aria-hidden="true">—</span>
                {highlight}
              </li>
            ))}
          </ul>
        )}
        {education.certifications && education.certifications.length > 0 && (
          <p className="text-xs text-mist-faint font-mono mt-3">{education.certifications.join(" · ")}</p>
        )}
      </div>
    </GlassCard>
  );
}
