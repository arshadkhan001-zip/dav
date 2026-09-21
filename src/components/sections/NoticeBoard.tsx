import { Link } from "react-router-dom";
import { NOTICES, formatNoticeDate } from "../../data/notices";
import { Section } from "../ui/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../ui/Reveal";

const KIND_LABEL: Record<string, string> = {
  pdf: "PDF",
  image: "Image",
  post: "Post",
  page: "Page",
};

/**
 * STAGE 6 — Notice board.
 * Clean editorial list: date · category · title · action.
 * Every row links to its real document/post; "View all" routes to /notices.
 */
export function NoticeBoard() {
  const latest = NOTICES.slice(0, 5);

  return (
    <Section labelledBy="notices-heading">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Reveal>
            <Eyebrow>Notice board</Eyebrow>
          </Reveal>
          <Reveal delay={70}>
            <h2 id="notices-heading" className="type-heading-xl mt-4 text-navy-900">
              Latest from the school.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <Link
            to="/notices"
            className="type-nav inline-flex items-center gap-2 text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-8 hover:decoration-gold-600"
          >
            View all
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>

      <Reveal delay={140}>
        <ul className="mt-8 border-t border-line">
          {latest.map((notice) => (
            <li key={notice.id} className="border-b border-line">
              <a
                href={notice.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-4 transition-colors duration-150 hover:bg-paper-2/60 sm:gap-6 sm:px-3"
              >
                <span className="type-small w-24 shrink-0 text-muted">
                  {formatNoticeDate(notice.dateISO)}
                </span>
                <span className="type-label hidden w-28 shrink-0 text-gold-600 sm:block">
                  {notice.category}
                </span>
                <span className="type-body min-w-0 flex-1 truncate text-ink group-hover:text-navy-900">
                  {notice.title}
                </span>
                <span className="type-small hidden shrink-0 rounded-[3px] border border-navy-900/20 px-2 py-1 text-navy-900 sm:block">
                  {KIND_LABEL[notice.kind]}
                </span>
                <span aria-hidden="true" className="shrink-0 text-gold-600 transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
      <p className="type-small mt-4 text-muted">
        Documents open from the school's official archive in a new tab.
      </p>
    </Section>
  );
}
