"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { BRANDS, byBrandSlug, type EVCategory } from "@/lib/ev-data";
import BrandLogo from "@/components/ui/BrandLogo";
import { usePathname } from "next/navigation";
import { localeFromPath, t } from "@/lib/i18n";
import clsx from "clsx";

const CAT_TABS: { key: EVCategory | "all"; label: string }[] = [
  { key: "all", label: "All brands" },
  { key: "car", label: "Cars" },
  { key: "scooter", label: "Scooters" },
  { key: "motorcycle", label: "Bikes" },
];

const CAT_TAB_KEYS: Record<string, string> = {
  all: "brand.allTab",
  car: "cat.cars",
  scooter: "cat.scooters",
  motorcycle: "cat.bikes",
};

export default function BrandExplorer() {
  const locale = localeFromPath(usePathname() || "/");
  const [category, setCategory] = useState<EVCategory | "all">("all");
  const [query, setQuery] = useState("");

  // preselect from ?type=
  useEffect(() => {
    const type = new URLSearchParams(window.location.search).get("type");
    if (type === "car" || type === "scooter" || type === "motorcycle") setCategory(type);
  }, []);

  const brands = useMemo(() => {
    return BRANDS.filter((b) => {
      if (category !== "all" && !b.categories.includes(category)) return false;
      if (query.trim() && !b.name.toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    }).map((b) => ({
      ...b,
      shown:
        category === "all"
          ? b.count
          : byBrandSlug(b.slug).filter((e) => e.category === category).length,
    }));
  }, [category, query]);

  return (
    <div>
      {/* Category tabs + search */}
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <div className="flex flex-wrap gap-2">
          {CAT_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setCategory(tab.key)}
              className={clsx(
                "rounded-xl px-4 py-2 font-display text-sm font-medium transition-colors",
                category === tab.key
                  ? "bg-brand text-ev-bg"
                  : "border border-ev-border bg-ev-card text-ev-muted hover:text-brand"
              )}
            >
              {t(CAT_TAB_KEYS[tab.key], locale)}
            </button>
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

      {/* Browse all */}
      <div className="mt-10 text-center">
        <Link
          href="/catalog/all"
          className="inline-flex items-center gap-2 rounded-xl border border-ev-border bg-ev-card px-5 py-3 font-display text-sm font-medium text-ev-text/85 transition-colors hover:border-brand/40 hover:text-brand"
        >
          {t("brand.browseAll", locale).replace("{n}", String(BRANDS.reduce((n, b) => n + b.count, 0)))}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
