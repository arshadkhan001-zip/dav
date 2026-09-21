import { useEffect } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { SiteHeader } from "../components/navigation/SiteHeader";
import { SiteFooter } from "../components/navigation/SiteFooter";

/** Root layout — skip link, header shell, main outlet, footer shell. */
export function RootLayout() {
  useEffect(() => {
    document.documentElement.lang = "en";
  }, []);

  return (
    <div className="flex min-h-dvh flex-col bg-paper text-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-[3px] focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <ScrollRestoration />
    </div>
  );
}
