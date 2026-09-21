import type { ReactNode } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { Section } from "../components/ui/Section";
import { Eyebrow } from "../components/ui/Eyebrow";

/** Shared placeholder shell — honest “arrives in Stage X” copy, no fake content. */
export function PlaceholderPage({
  title,
  eyebrow,
  stage,
  children,
}: {
  title: string;
  eyebrow: string;
  stage: string;
  children?: ReactNode;
}) {
  useDocumentTitle(title);
  return (
    <Section labelledBy="page-heading">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 id="page-heading" className="type-display-lg mt-4 max-w-3xl text-navy-900">
        {title}
      </h1>
      <p className="type-body-lg mt-4 max-w-2xl text-muted">
        This page arrives in {stage}. Content will be migrated from davppspanipat.com —
        no facts invented.
      </p>
      {children}
    </Section>
  );
}
