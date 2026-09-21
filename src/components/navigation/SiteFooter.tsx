import { Link } from "react-router-dom";
import { FOOTER_GROUPS } from "../../data/navigation";
import { SCHOOL } from "../../data/school";

/**
 * Site footer — identity, navigation, contact, official links, legal.
 */
export function SiteFooter() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto grid w-full max-w-[75rem] gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-medium">{SCHOOL.name}</p>
          <p className="type-small mt-1 text-white/70">{SCHOOL.place} · CBSE Senior Secondary</p>
          <address className="type-small mt-4 leading-relaxed text-white/80 not-italic">
            {SCHOOL.addressLines[0]}
            <br />
            {SCHOOL.addressLines[1]}
            <br />
            <a href={SCHOOL.phoneHref} className="underline-offset-4 hover:underline">
              {SCHOOL.phone}
            </a>
            <br />
            <a href={SCHOOL.emailHref} className="break-all underline-offset-4 hover:underline">
              {SCHOOL.email}
            </a>
            <br />
            {SCHOOL.website}
          </address>
          <p className="type-small mt-3 text-white/55">{SCHOOL.affiliation}</p>
        </div>

        {FOOTER_GROUPS.map((group) => (
          <nav key={group.label} aria-label={`Footer — ${group.label}`}>
            <p className="type-label text-gold-500">{group.label}</p>
            <ul className="mt-4 space-y-2.5">
              {group.items.map((item) => (
                <li key={item.to + item.label}>
                  <Link to={item.to} className="type-small text-white/80 hover:text-white hover:underline hover:underline-offset-4">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <p className="type-label text-gold-500">Official</p>
          <ul className="type-small mt-4 space-y-2.5 text-white/80">
            <li>
              <a href={SCHOOL.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline hover:underline-offset-4">
                Facebook — DAV PPS Panipat
              </a>
            </li>
            <li>
              <a href={SCHOOL.atlFacebook} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline hover:underline-offset-4">
                ATL Facebook Page
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex w-full max-w-[75rem] flex-col gap-1 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="type-small text-white/60">
            © {new Date().getFullYear()} {SCHOOL.name}, {SCHOOL.place}. All rights reserved.
          </p>
          <p className="type-small text-white/60">Content migrated from davppspanipat.com — redesign in progress.</p>
        </div>
      </div>
    </footer>
  );
}
