/** Real IANA time zones, three-tier fallback for older/SSR environments —
 * uses the browser's own Intl database rather than a hand-typed list. */
const FALLBACK_TIMEZONES = [
  "UTC", "America/Los_Angeles", "America/Denver", "America/Chicago", "America/New_York",
  "America/Sao_Paulo", "Europe/London", "Europe/Paris", "Europe/Berlin", "Europe/Moscow",
  "Africa/Cairo", "Africa/Lagos", "Asia/Dubai", "Asia/Karachi", "Asia/Kolkata", "Asia/Dhaka",
  "Asia/Bangkok", "Asia/Singapore", "Asia/Shanghai", "Asia/Tokyo", "Asia/Seoul",
  "Australia/Sydney", "Pacific/Auckland",
];

export function getTimezones(): string[] {
  try {
    if (typeof Intl.supportedValuesOf === "function") {
      return Intl.supportedValuesOf("timeZone");
    }
  } catch {
    // fall through to fallback list
  }
  return FALLBACK_TIMEZONES;
}

/** Human-readable label with the current UTC offset, e.g. "Asia/Karachi (UTC+05:00)". */
export function formatTimezoneLabel(timezone: string): string {
  try {
    const offset = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      timeZoneName: "shortOffset",
    })
      .formatToParts(new Date())
      .find((part) => part.type === "timeZoneName")?.value;

    return offset ? `${timezone.replace(/_/g, " ")} (${offset})` : timezone.replace(/_/g, " ");
  } catch {
    return timezone.replace(/_/g, " ");
  }
}
