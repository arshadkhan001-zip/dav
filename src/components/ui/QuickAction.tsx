import { Link } from "react-router-dom";
import type { QuickActionIcon, QuickActionItem } from "../../data/quickActions";
import { cx } from "../../utils/cx";

/**
 * Reusable quick-action link — icon, title, detail. Always a real link;
 * never a fake button. Internal hrefs use the router, external ones open
 * in a new tab.
 */
export function QuickAction({ action }: { action: QuickActionItem }) {
  const cls =
    "group flex items-center gap-4 rounded-[4px] border border-line bg-card px-5 py-4 transition-colors duration-200 hover:border-navy-900/30 hover:bg-paper-2";
  const body = (
    <>
      <span
        aria-hidden="true"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[3px] bg-navy-900 text-gold-500"
      >
        <ActionIcon icon={action.icon} />
      </span>
      <span className="min-w-0">
        <span className="type-nav block truncate text-navy-900">{action.title}</span>
        <span className="type-small block truncate text-muted">{action.detail}</span>
      </span>
      <span aria-hidden="true" className="ml-auto shrink-0 text-gold-600 transition-transform duration-200 group-hover:translate-x-0.5">
        →
      </span>
    </>
  );

  if (action.href.startsWith("/")) {
    return (
      <Link to={action.href} className={cx(cls, "h-full")}>
        {body}
      </Link>
    );
  }
  return (
    <a href={action.href} target="_blank" rel="noopener noreferrer" className={cx(cls, "h-full")}>
      {body}
    </a>
  );
}

function ActionIcon({ icon }: { icon: QuickActionIcon }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  } as const;
  switch (icon) {
    case "briefcase":
      return (
        <svg {...common} aria-hidden="true">
          <rect x="2" y="6" width="14" height="9" rx="1.5" />
          <path d="M6.5 6V4.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1V6M2 10.5h14" />
        </svg>
      );
    case "receipt":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M4 2.5h10v13l-2-1.4-2 1.4-2-1.4L6 15.5l-2-1.4v-11.6zM6.5 6h5M6.5 9h5" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common} aria-hidden="true">
          <circle cx="9" cy="9" r="6.5" />
          <path d="M2.5 9h13M9 2.5c-4 4-4 9 0 13 4-4 4-9 0-13z" />
        </svg>
      );
    case "card":
      return (
        <svg {...common} aria-hidden="true">
          <rect x="2" y="4" width="14" height="10" rx="1.5" />
          <path d="M2 7h14M5 11h3" />
        </svg>
      );
    case "building":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M3 15.5V4.5A1.5 1.5 0 0 1 4.5 3h6A1.5 1.5 0 0 1 12 4.5v11M12 7h2.5A1.5 1.5 0 0 1 16 8.5v7M1.5 15.5h15M6 6h1.5M6 9h1.5M6 12h1.5M9 6h.5M9 9h.5M9 12h.5" />
        </svg>
      );
  }
}
