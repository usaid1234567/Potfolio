import type { Service } from "@/types";

/** Full service catalog for the Services page — matches real, confirmed skills only. */
export const SERVICE_CATALOG: Service[] = [
  {
    id: "frontend-development",
    title: "Frontend Development",
    description: "Building interfaces with a modern, component-based frontend stack.",
    icon: "layout-template",
    technologies: ["React", "Next.js", "JavaScript"],
    deliverables: ["Working, responsive UI", "Reusable components", "Clean, maintainable code"],
  },
  {
    id: "responsive-websites",
    title: "Responsive Websites",
    description: "Websites and pages that adapt cleanly across screen sizes.",
    icon: "code-2",
    technologies: ["HTML", "CSS", "Tailwind CSS"],
    deliverables: ["Mobile, tablet, and desktop layouts", "Cross-browser testing"],
  },
  {
    id: "ui-implementation",
    title: "UI Implementation",
    description: "Converting a design (Figma or otherwise) into a working interface.",
    icon: "palette",
    technologies: ["Tailwind CSS", "CSS", "React"],
    deliverables: ["Pixel-accurate implementation", "Interactive states and hover behavior"],
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance & Optimization",
    description: "Keeping existing sites updated, working, and reasonably fast.",
    icon: "activity",
    technologies: ["JavaScript", "React", "Next.js"],
    deliverables: ["Bug fixes", "Basic performance improvements", "Code cleanup"],
  },
];
