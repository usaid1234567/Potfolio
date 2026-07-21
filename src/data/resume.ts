import type { ResumeConfig } from "@/types";

/** No resume file has been uploaded yet. Once a real PDF exists, place it in
 * /public and update fileUrl — do not point this at a placeholder file. */
export const RESUME: ResumeConfig = {
  fileUrl: "",
  fileName: "resume.pdf",
};
