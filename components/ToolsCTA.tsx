import Link from "next/link";
import { GitCompare, Banknote, TrendingDown, Gauge } from "lucide-react";
import { Locale, localizedHref } from "@/lib/i18n";

type Tool = "compare" | "emi" | "cost" | "range";

/**
 * Compact, contextual card linking to the site's decision tools.
 * Server component — no client JS. Renders only the tools listed in `tools`,
 * in the given order. When `evId` is present, emi/cost/compare deep-link to
 * that specific vehicle (and the calculators pre-fill from the ?ev= param).
 */
export default function ToolsCTA({
  locale = "en",
  tools,
  evId,
  className = "",
}: {
  locale?: Locale;
  tools: Array<Tool>;
  evId?: string;
  className?: string;
}) {
  const isHi = locale === "hi";
  const href = (base: string, q = "") => localizedHref(base, locale) + q;

  const heading = isHi ? "फैसले में मदद करने वाले टूल" : "Tools to help you decide";

  const items: Record<Tool, { label: string; href: string; Icon: typeof GitCompare }> = {
    compare: {
      label: isHi ? "EVs की तुलना करें" : "Compare EVs",
      href: href("/compare", evId ? `?ids=${evId}` : ""),
      Icon: GitCompare,
    },
    emi: {
      label: isHi ? "EMI कैलकुलेट करें" : "Calculate EMI",
      href: href("/tools/ev-emi-calculator", evId ? `?ev=${evId}` : ""),
      Icon: Banknote,
    },
    cost: {
      label: isHi ? "पेट्रोल बनाम खर्च" : "Cost vs petrol",
      href: href("/tools/ev-vs-petrol-cost-calculator", evId ? `?ev=${evId}` : ""),
      Icon: TrendingDown,
    },
    range: {
      label: isHi ? "रेंज और चार्जिंग" : "Range & charging",
      href: href("/tools/ev-range-calculator"),
      Icon: Gauge,
    },
  };

  return (
    <div className={`rounded-2xl border border-ev-border bg-ev-card p-5 sm:p-6 ${className}`}>
      <h2 className="font-display text-sm font-bold text-white">{heading}</h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {tools.map((key) => {
          const { label, href: itemHref, Icon } = items[key];
          return (
            <Link
              key={key}
              href={itemHref}
              className="inline-flex items-center gap-2 rounded-xl border border-ev-border px-4 py-2.5 font-body text-sm text-ev-text/80 transition-colors hover:border-brand/40 hover:text-brand"
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
