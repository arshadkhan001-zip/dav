/**
 * Prefix a public-asset path with the deploy base.
 * "/dav/" on GitHub Pages, "/" on root-domain deploys (Vite BASE_URL).
 * Vite rewrites bundled URLs automatically, but runtime <img src> strings
 * need this — otherwise images 404 under a subpath deploy.
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  const clean = path.startsWith("/") ? path.slice(1) : path;
  const rooted = base.endsWith("/") ? base : `${base}/`;
  return `${rooted}${clean}`;
}
