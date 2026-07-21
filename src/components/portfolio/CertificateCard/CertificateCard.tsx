import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import { GlassCard } from "@/components/cards/GlassCard/GlassCard";
import { ProjectTags } from "@/components/portfolio/ProjectTags/ProjectTags";
import { BUTTON_BASE, BUTTON_VARIANTS, BUTTON_SIZES } from "@/components/buttons/Button/Button.styles";
import { cn } from "@/lib/cn";
import { formatDate } from "@/utils/formatDate";
import type { Certificate } from "@/types";

export interface CertificateCardProps {
  certificate: Certificate;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  // Backward compatible: if only the original `credentialUrl` is set (no new
  // certificateUrl/verifyUrl), it still renders as a single "View Credential" link.
  const primaryUrl = certificate.certificateUrl ?? certificate.credentialUrl;
  const hasActions = Boolean(primaryUrl || certificate.verifyUrl);

  return (
    <GlassCard className="p-0 overflow-hidden flex flex-col h-full">
      <div className="relative aspect-[16/10] bg-base-surface flex items-center justify-center overflow-hidden">
        {certificate.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={certificate.image} alt={`${certificate.title} certificate`} className="w-full h-full object-cover" />
        ) : (
          <div className="h-11 w-11 rounded-full bg-white/5 flex items-center justify-center" aria-hidden="true">
            <Award className="h-5 w-5 text-violet-soft" />
          </div>
        )}
        {certificate.featured && (
          <span className="absolute top-3 right-3 text-xs font-mono bg-gradient-signature text-onbrand rounded-full px-2.5 py-1">
            Featured
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-2 text-xs text-mist-faint font-mono">
          <span>{certificate.issuer}</span>
          <span aria-hidden="true">·</span>
          <span>{formatDate(certificate.issueDate)}</span>
          {certificate.expiryDate && (
            <>
              <span aria-hidden="true">·</span>
              <span>Expires {formatDate(certificate.expiryDate)}</span>
            </>
          )}
        </div>

        <h3 className="text-display text-lg text-mist mt-3">{certificate.title}</h3>

        {certificate.description && <p className="text-body text-sm mt-2">{certificate.description}</p>}

        {certificate.skills && certificate.skills.length > 0 && <ProjectTags tags={certificate.skills} className="mt-4" />}

        {certificate.credentialId && (
          <p className="text-xs text-mist-faint font-mono mt-3">ID: {certificate.credentialId}</p>
        )}

        {hasActions && (
          <div className="flex flex-wrap gap-2 pt-4 border-t border-line mt-auto">
            {primaryUrl && (
              <a
                href={primaryUrl}
                target="_blank"
                rel="noreferrer noopener"
                className={cn(BUTTON_BASE, BUTTON_VARIANTS.secondary, BUTTON_SIZES.sm)}
              >
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /> View Certificate
              </a>
            )}
            {certificate.verifyUrl && (
              <a
                href={certificate.verifyUrl}
                target="_blank"
                rel="noreferrer noopener"
                className={cn(BUTTON_BASE, BUTTON_VARIANTS.ghost, BUTTON_SIZES.sm)}
              >
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" /> Verify Credential
              </a>
            )}
          </div>
        )}
      </div>
    </GlassCard>
  );
}
