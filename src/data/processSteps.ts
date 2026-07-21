import type { ProcessStep } from "@/types";

export const PROCESS_STEPS: ProcessStep[] = [
  { id: "discovery", step: 1, title: "Discovery", description: "Understand the goals, constraints, and users before any code gets written.", icon: "search" },
  { id: "planning", step: 2, title: "Planning", description: "Scope the work into milestones with clear, demoable checkpoints.", icon: "clipboard-list" },
  { id: "design", step: 3, title: "Design", description: "Wireframe and prototype the interface alongside the data model.", icon: "palette" },
  { id: "development", step: 4, title: "Development", description: "Build in typed, reviewable increments — nothing lands untested.", icon: "code-2" },
  { id: "testing", step: 5, title: "Testing", description: "Verify behavior, performance, and edge cases before anything ships.", icon: "check-circle-2" },
  { id: "deployment", step: 6, title: "Deployment", description: "Ship with a rollback plan and monitoring in place from day one.", icon: "rocket" },
  { id: "support", step: 7, title: "Support", description: "Stay involved post-launch to fix, tune, and extend as real usage comes in.", icon: "life-buoy" },
];
