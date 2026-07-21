import { Quote, Star } from "lucide-react";
import { GlassCard } from "../GlassCard/GlassCard";
import { getInitials } from "@/utils/getInitials";
import type { Testimonial } from "@/types";

export interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <GlassCard className="flex flex-col">
      <div className="flex items-center justify-between">
        <Quote className="h-6 w-6 text-violet-soft" aria-hidden="true" />
        <div className="flex gap-0.5" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={
                index < testimonial.rating
                  ? "h-3.5 w-3.5 fill-violet-soft text-violet-soft"
                  : "h-3.5 w-3.5 text-mist-faint"
              }
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
      <p className="text-body text-mist mt-4 flex-1">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="flex items-center gap-3 mt-6">
        <div
          className="h-10 w-10 rounded-full bg-gradient-signature flex items-center justify-center text-onbrand text-xs font-medium shrink-0"
          aria-hidden="true"
        >
          {getInitials(testimonial.name)}
        </div>
        <div>
          <p className="text-sm font-medium text-mist">{testimonial.name}</p>
          <p className="text-xs text-mist-faint">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}
