/** Join class names, skipping falsy values. Minimal cx — no dependency. */
export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
