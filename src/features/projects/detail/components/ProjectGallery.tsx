import { ImageIcon } from "lucide-react";
import { Heading } from "@/components/typography";
import { cn } from "@/lib/cn";

export interface ProjectGalleryProps {
  title: string;
  images: string[];
  variant?: "showcase" | "grid";
}

/** Real screenshots aren't available yet, so each slot renders a labeled placeholder frame. */
export function ProjectGallery({ title, images, variant = "showcase" }: ProjectGalleryProps) {
  return (
    <div>
      <Heading level={3} size="sm">
        {title}
      </Heading>
      <div className={cn("grid gap-4 mt-4", variant === "showcase" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-2 md:grid-cols-3")}>
        {images.map((src, index) => (
          <div
            key={src}
            className="glass-panel aspect-[16/10] flex items-center justify-center"
          >
            <ImageIcon className="h-6 w-6 text-mist-faint" aria-hidden="true" />
            <span className="visually-hidden">{`${title} image ${index + 1}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
