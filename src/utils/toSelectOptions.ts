/** Converts a flat string list into { label, value } pairs for Select options. */
export function toSelectOptions(values: string[]): { label: string; value: string }[] {
  return values.map((value) => ({ label: value, value }));
}
