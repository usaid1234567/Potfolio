/** Derives up to two initials from a full name, for avatar fallbacks. */
export function getInitials(fullName: string): string {
  const parts = fullName.trim().split(/\s+/);
  const initials = parts.slice(0, 2).map((part) => part[0]?.toUpperCase() ?? "");
  return initials.join("");
}
