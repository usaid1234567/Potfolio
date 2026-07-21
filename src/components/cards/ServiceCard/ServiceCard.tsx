import { GlassCard } from "../GlassCard/GlassCard";
import { ProjectTags } from "@/components/portfolio/ProjectTags/ProjectTags";
import { resolveLucideIcon } from "@/utils/resolveLucideIcon";
import type { Service } from "@/types";

export interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = resolveLucideIcon(service.icon);

  return (
    <GlassCard>
      <div className="h-11 w-11 rounded-full bg-gradient-signature flex items-center justify-center">
        <Icon className="h-5 w-5 text-onbrand" aria-hidden="true" />
      </div>
      <h3 className="text-display text-lg text-mist mt-5">{service.title}</h3>
      <p className="text-body text-sm mt-2">{service.description}</p>
      {service.technologies.length > 0 && <ProjectTags tags={service.technologies} className="mt-4" />}
      {service.deliverables && service.deliverables.length > 0 && (
        <ul className="mt-4 space-y-1.5 border-t border-line pt-4">
          {service.deliverables.map((item) => (
            <li key={item} className="text-sm text-mist-muted flex gap-2">
              <span className="text-violet-soft" aria-hidden="true">—</span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </GlassCard>
  );
}
