import { GlassCard } from "@/components/cards/GlassCard/GlassCard";
import { ProjectTags } from "../ProjectTags/ProjectTags";
import type { ExperienceEntry } from "@/types";

export interface ExperienceCardProps {
  entry: ExperienceEntry;
}

export function ExperienceCard({ entry }: ExperienceCardProps) {
  return (
    <GlassCard>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-display text-lg text-mist">{entry.role}</h3>
          <p className="text-sm text-violet-soft mt-1">{entry.company}</p>
        </div>
        <p className="text-xs font-mono text-mist-faint whitespace-nowrap">
          {entry.startDate} — {entry.endDate}
        </p>
      </div>
      <p className="text-body text-sm mt-4">{entry.summary}</p>
      {entry.highlights.length > 0 && (
        <ul className="mt-4 space-y-2">
          {entry.highlights.map((highlight) => (
            <li key={highlight} className="text-sm text-mist-muted flex gap-2">
              <span className="text-violet-soft" aria-hidden="true">
                —
              </span>
              {highlight}
            </li>
          ))}
        </ul>
      )}
      {entry.technologies && entry.technologies.length > 0 && (
        <ProjectTags tags={entry.technologies} className="mt-4" />
      )}
    </GlassCard>
  );
}
