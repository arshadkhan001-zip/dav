import { useEffect } from "react";

const SITE_SUFFIX = "DAV Police Public School, Panipat";

/** Set document.title per route. Replaces a helmet dependency at this stage. */
export function useDocumentTitle(title: string): void {
  useEffect(() => {
    document.title = title === SITE_SUFFIX ? title : `${title} — ${SITE_SUFFIX}`;
  }, [title]);
}
