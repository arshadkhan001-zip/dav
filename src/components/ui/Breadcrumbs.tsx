import { Link } from "react-router-dom";

export interface Crumb {
  label: string;
  to?: string;
}

/** Accessible breadcrumb trail — echo of page hierarchy, no styling excess. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="type-small flex flex-wrap items-center gap-2 text-muted">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden="true" className="text-gold-600">
                  /
                </span>
              )}
              {item.to && !last ? (
                <Link
                  to={item.to}
                  className="underline-offset-4 hover:text-navy-900 hover:underline"
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined} className={last ? "text-navy-900" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
