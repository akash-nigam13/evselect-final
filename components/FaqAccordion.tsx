import type { ReactNode } from "react";

export interface FaqItem {
  q: string;
  a: ReactNode;
}

/**
 * Site-wide FAQ accordion. Uses native <details>/<summary> so answers stay in
 * the HTML (crawlable + accessible + no JS) while only the question shows until
 * expanded. Matches the card accordion style used across the rest of the site.
 * Presentation only — pages keep emitting their own faqPageSchema via JsonLd.
 */
export default function FaqAccordion({
  items,
  className = "",
}: {
  items: FaqItem[];
  className?: string;
}) {
  if (!items || items.length === 0) return null;
  return (
    <div className={`not-prose space-y-3 ${className}`}>
      {items.map((f, i) => (
        <details
          key={`${i}-${f.q}`}
          className="group rounded-2xl border border-ev-border bg-ev-card p-5"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-sm font-bold text-white">
            <span>{f.q}</span>
            <span className="shrink-0 text-lg leading-none text-brand transition-transform duration-200 group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="mt-3 font-body text-sm leading-relaxed text-ev-text/70">{f.a}</div>
        </details>
      ))}
    </div>
  );
}
