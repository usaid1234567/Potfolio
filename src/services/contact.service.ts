import type { ContactPayload } from "@/types";

export async function submitContactForm(
  payload: ContactPayload
): Promise<{ success: boolean }> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok || !data?.success) {
    throw new Error(data?.message || "Failed to submit contact form");
  }

  return data;
}
