import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { Section } from "../components/ui/Section";
import { Eyebrow } from "../components/ui/Eyebrow";

export function NotFoundPage() {
  useDocumentTitle("Page not found");
  return (
    <Section labelledBy="notfound-heading">
      <Eyebrow>404</Eyebrow>
      <h1 id="notfound-heading" className="type-display-lg mt-4 text-navy-900">
        Page not found
      </h1>
      <p className="type-body-lg mt-4 max-w-xl text-muted">
        The page you asked for does not exist yet.
      </p>
      <p className="mt-6">
        <Link
          to="/"
          className="type-nav rounded-[3px] bg-navy-900 px-5 py-3 text-white hover:bg-navy-950"
        >
          Back to home
        </Link>
      </p>
    </Section>
  );
}
