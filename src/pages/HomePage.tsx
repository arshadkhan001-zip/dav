import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { Hero } from "../components/sections/Hero";
import { Introduction } from "../components/sections/Introduction";
import { PrincipalMessage } from "../components/sections/PrincipalMessage";
import { KeyFacts } from "../components/sections/KeyFacts";
import { Academics } from "../components/sections/Academics";
import { QuickActions } from "../components/sections/QuickActions";
import { NoticeBoard } from "../components/sections/NoticeBoard";
import { Activities } from "../components/sections/Activities";
import { Gallery } from "../components/sections/Gallery";
import { Campus } from "../components/sections/Campus";
import { AdmissionsCTA } from "../components/sections/AdmissionsCTA";

/**
 * Home — STAGE 12: hero → introduction → key facts → academics
 * → quick actions → notice board → activities → gallery → campus
 * → admissions call-to-action.
 */
export function HomePage() {
  useDocumentTitle("DAV Police Public School, Panipat");

  return (
    <>
      <Hero />
      <Introduction />
      <PrincipalMessage />
      <KeyFacts />
      <Academics />
      <QuickActions />
      <NoticeBoard />
      <Activities />
      <Gallery />
      <Campus />
      <AdmissionsCTA />
    </>
  );
}
