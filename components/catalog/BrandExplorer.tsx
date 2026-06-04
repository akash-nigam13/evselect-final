"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { BRANDS } from "@/lib/ev-data";
import BrandLogo from "@/components/ui/BrandLogo";
import { usePathname } from "next/navigation";
import { localeFromPath, localizedHref, t } from "@/lib/i18n";
import clsx from "clsx";

// "All brands" stays on this page; the category tabs link to the dedicated
// category pages (/catalog/electric-cars etc.) so they have real, indexable URLs.
const CAT_TABS: { key: string; path: string; tk: string; active: boolean }[] = [
  { key: "all", path: "/catalog", tk: "brand.allTab", active: true },
  { key: "car", path: "/catalog/electric-cars", tk: "cat.cars", active: false },
  { key: "scooter", path: "/catalog/electric-scooters", tk: "cat.scooters", active: false },
  { key: "motorcycle", path: "/catalog/electric-bikes", tk: "cat.bikes", active: false },
];

export default function BrandExplorer() {
  const locale = localeFromPath(usePathname() || "/");
  const [query, setQuery] = useState("");

  const brands = useMemo(() => {
    return BRANDS.filter((b) => {
      if (query.trim() && !b.name.toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    }).map((b) => ({ ...b, shown: b.count }));
  }, [query]);

  return (
    <div>
      {/* Category tabs (links to dedicated pages) + search */}
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <div className="flex flex-wrap gap-2">
          {CAT_TABS.map((tab) => (
            <Link
              key={tab.key}
              href={localizedHref(tab.path, locale)}
              className={clsx(
                "rounded-xl px-4 py-2 font-display text-sm font-medium transition-colors",
                tab.active
                  ? "bg-brand text-ev-bg"
                  : "border border-ev-border bg-ev-card text-ev-muted hover:text-brand"
              )}
            >
              {t(tab.tk, locale)}
            </Link>
          ))}
        </div>
        <div className="ml-auto flex min-w-[180px] items-center gap-2 rounded-xl border border-ev-border bg-ev-card px-3">
          <Search className="h-4 w-4 text-ev-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("brand.search", locale)}
            className="w-full bg-transparent py-2.5 text-sm text-ev-text outline-none placeholder:text-ev-muted"
          />
        </div>
      </div>

      {/* Brand grid */}
      {brands.length === 0 ? (
        <p className="py-16 text-center font-display text-ev-muted">{t("brand.noMatch", locale)}</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {brands.map((b) => (
            <Link
              key={b.slug}
              href={`/catalog/brand/${b.slug}`}
              className="card-hover group relative flex flex-col items-start overflow-hidden rounded-2xl border border-ev-border bg-ev-card p-5"
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
                style={{ background: b.accent }}
              />
              <BrandLogo
                domain={b.domain}
                monogram={b.monogram}
                accent={b.accent}
                name={b.name}
                className="mb-4 h-14 w-14 text-lg"
              />
              <h3 className="font-display text-base font-bold text-white">{b.name}</h3>
              <p className="mt-0.5 font-mono text-xs text-ev-muted">
                {b.shown} {t(b.shown === 1 ? "brand.model" : "brand.models", locale)}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] font-medium text-brand opacity-0 transition-opacity group-hover:opacity-100">
                {t("brand.viewLineup", locale)} <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
