import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { NOTICES, formatNoticeDate, type Notice } from "../data/notices";
import { Section } from "../components/ui/Section";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";
import { Reveal } from "../components/ui/Reveal";

const KIND_LABEL: Record<Notice["kind"], string> = {
  pdf: "PDF",
  image: "Image",
  post: "Post",
  page: "Page",
};

/**
 * STAGE 14 — Notices page. The complete local notice set with dates,
 * categories and real destinations; the living archive stays on the
 * school's board (linked below).
 */
export function NoticesPage() {
  useDocumentTitle("Notices");

  return (
    <>
      <Section spacing="sm" labelledBy="notices-page-heading">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Notices" }]} />
        </Reveal>
        <Reveal delay={60}>
          <Eyebrow className="mt-6">Notice board</Eyebrow>
        </Reveal>
        <Reveal delay={110}>
          <h1 id="notices-page-heading" className="type-display-lg mt-4 max-w-3xl text-navy-900">
            Announcements and tenders.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="type-body-lg mt-4 max-w-2xl text-muted">
            Reproduced from the school's public notice board — every item links
            to its official document or post.
          </p>
        </Reveal>
      </Section>

      <Section spacing="sm">
        <ul className="border-t border-line">
          {NOTICES.map((notice, i) => (
            <Reveal key={notice.id} delay={Math.min(i, 4) * 50}>
              <li className="border-b border-line">
                <a
                  href={notice.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-4 sm:gap-6 sm:px-3"
                >
                  <span className="type-small w-24 shrink-0 text-muted">
                    {formatNoticeDate(notice.dateISO)}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="type-body block truncate text-ink group-hover:text-navy-900">
                      {notice.title}
                    </span>
                    <span className="type-small text-gold-600">{notice.category}</span>
                  </span>
                  <span className="type-small hidden shrink-0 rounded-[3px] border border-navy-900/20 px-2 py-1 text-navy-900 sm:block">
                    {KIND_LABEL[notice.kind]}
                  </span>
                  <span aria-hidden="true" className="shrink-0 text-gold-600 transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
        <p className="type-small mt-4 text-muted">
          Showing all {NOTICES.length} archived notices. The live board is on the{" "}
          <a
            href="https://davppspanipat.com/NoticeBoardDetail.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy-700 underline decoration-gold-500 decoration-1 underline-offset-4"
          >
            school's notice archive
          </a>
          .
        </p>
        <p className="mt-10">
          <Link
            to="/"
            className="type-nav inline-flex items-center gap-2 text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-8 hover:decoration-gold-600"
          >
            <span aria-hidden="true">←</span> Back to home
          </Link>
        </p>
      </Section>
    </>
  );
}
