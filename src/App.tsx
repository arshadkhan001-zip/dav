import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";

// Route-level code-splitting: each page is its own chunk.
// Home is eager (first paint); the rest lazy (low-end friendly).
import { HomePage } from "./pages/HomePage";

const AboutPage = lazy(() =>
  import("./pages/AboutPage").then((m) => ({ default: m.AboutPage })),
);
const AcademicsPage = lazy(() =>
  import("./pages/AcademicsPage").then((m) => ({ default: m.AcademicsPage })),
);
const CampusPage = lazy(() =>
  import("./pages/CampusPage").then((m) => ({ default: m.CampusPage })),
);
const ActivitiesPage = lazy(() =>
  import("./pages/ActivitiesPage").then((m) => ({ default: m.ActivitiesPage })),
);
const AchievementsPage = lazy(() =>
  import("./pages/AchievementsPage").then((m) => ({
    default: m.AchievementsPage,
  })),
);
const GalleryPage = lazy(() =>
  import("./pages/GalleryPage").then((m) => ({ default: m.GalleryPage })),
);
const AdmissionsPage = lazy(() =>
  import("./pages/AdmissionsPage").then((m) => ({ default: m.AdmissionsPage })),
);
const NoticesPage = lazy(() =>
  import("./pages/NoticesPage").then((m) => ({ default: m.NoticesPage })),
);
const ContactPage = lazy(() =>
  import("./pages/ContactPage").then((m) => ({ default: m.ContactPage })),
);
const FacultyPage = lazy(() =>
  import("./pages/FacultyPage").then((m) => ({ default: m.FacultyPage })),
);
const DisclosurePage = lazy(() =>
  import("./pages/DisclosurePage").then((m) => ({ default: m.DisclosurePage })),
);
const HelpDeskPage = lazy(() =>
  import("./pages/HelpDeskPage").then((m) => ({ default: m.HelpDeskPage })),
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })),
);

function RouteFallback() {
  return (
    <div className="mx-auto w-full max-w-[75rem] px-4 py-16 sm:px-6" aria-busy="true">
      <p className="type-small text-muted">Loading…</p>
    </div>
  );
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
      { index: true, element: <HomePage /> },
      {
        path: "about",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "academics",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <AcademicsPage />
          </Suspense>
        ),
      },
      {
        path: "campus",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <CampusPage />
          </Suspense>
        ),
      },
      {
        path: "activities",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <ActivitiesPage />
          </Suspense>
        ),
      },
      {
        path: "achievements",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <AchievementsPage />
          </Suspense>
        ),
      },
      {
        path: "gallery",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <GalleryPage />
          </Suspense>
        ),
      },
      {
        path: "admissions",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <AdmissionsPage />
          </Suspense>
        ),
      },
      {
        path: "notices",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <NoticesPage />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: "faculty",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <FacultyPage />
          </Suspense>
        ),
      },
      {
        path: "disclosure",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <DisclosurePage />
          </Suspense>
        ),
      },
      {
        path: "help-desk",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <HelpDeskPage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<RouteFallback />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
      ],
    },
  ],
  {
    // Serves the app under the Vite base ("/dav/" on GitHub Pages,
    // "/" on root-domain deploys) so deep links resolve correctly.
    basename: import.meta.env.BASE_URL.replace(/\/$/, "") || "/",
  },
);

export function App() {
  return <RouterProvider router={router} />;
}
