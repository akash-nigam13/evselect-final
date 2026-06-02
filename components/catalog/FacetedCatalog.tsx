"use client";
import { useEffect, useMemo, useState } from "react";
import { Search, SlidersHorizontal, X, RotateCcw } from "lucide-react";
import { priceFromLakh, type EV, type EVCategory } from "@/lib/ev-data";
import EvCard from "./EvCard";
import { usePathname } from "next/navigation";
import { localeFromPath, t } from "@/lib/i18n";
import clsx from "clsx";

type SortKey = "price-asc" | "price-desc" | "range-desc" | "power-desc" | "name";

interface FacetDef {
  key: string;
  label: string;
  labelKey: string;
  get: (e: EV) => string | null;
  /** numeric sort of options */
  numeric?: boolean;
}

interface Props {
  pool: EV[];
  /** hide the Brand facet (used on a single-brand page) */
  lockBrand?: boolean;
  /** preselect a category from URL (?type=) */
  initialCategory?: EVCategory | "all";
  /** preset search text (used by /search) */
  initialQuery?: string;
}

const CAT_TABS: { key: EVCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "car", label: "Cars" },
  { key: "scooter", label: "Scooters" },
  { key: "motorcycle", label: "Bikes" },
];

const CAT_TAB_KEYS: Record<string, string> = {
  all: "cat.all",
  car: "cat.cars",
  scooter: "cat.scooters",
  motorcycle: "cat.bikes",
};

export default function FacetedCatalog({
  pool,
  lockBrand = false,
  initialCategory = "all",
  initialQuery = "",
}: Props) {
  const locale = localeFromPath(usePathname() || "/");
  const facetDefs = useMemo<FacetDef[]>(() => {
    const defs: FacetDef[] = [];
    if (!lockBrand) defs.push({ key: "brand", label: "Brand", labelKey: "facet.brand", get: (e) => e.brand });
    defs.push({ key: "bodyType", label: "Body type", labelKey: "facet.bodyType", get: (e) => e.bodyType });
    defs.push({ key: "driveType", label: "Drivetrain", labelKey: "facet.drivetrain", get: (e) => e.driveType });
    defs.push({ key: "seating", label: "Seats", labelKey: "facet.seats", get: (e) => (e.seating != null ? String(e.seating) : null), numeric: true });
    return defs;
  }, [lockBrand]);

  // price + range bounds from the whole pool
  const bounds = useMemo(() => {
    const prices = pool.map((e) => e.priceMaxLakh ?? e.priceMinLakh).filter((v): v is number => v != null);
    const pricesMin = pool.map((e) => e.priceMinLakh).filter((v): v is number => v != null);
    const ranges = pool.map((e) => e.rangeKmARAI).filter((v): v is number => v != null);
    return {
      priceMin: Math.floor(Math.min(...pricesMin, 0)),
      priceMax: Math.ceil(Math.max(...prices, 1)),
      rangeMax: Math.ceil(Math.max(...ranges, 1)),
    };
  }, [pool]);

  const [category, setCategory] = useState<EVCategory | "all">(initialCategory);
  const [query, setQuery] = useState(initialQuery);
  const [selections, setSelections] = useState<Record<string, Set<string>>>({});
  const [priceMax, setPriceMax] = useState(bounds.priceMax);
  const [minRange, setMinRange] = useState(0);
  const [fastOnly, setFastOnly] = useState(false);
  const [sort, setSort] = useState<SortKey>("price-asc");
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => setPriceMax(bounds.priceMax), [bounds.priceMax]);

  const availableCats = useMemo(
    () => CAT_TABS.filter((tab) => tab.key === "all" || pool.some((e) => e.category === tab.key)),
    [pool]
  );

  const toggle = (facet: string, value: string) =>
    setSelections((prev) => {
      const next = { ...prev };
      const set = new Set(next[facet] ?? []);
      if (set.has(value)) set.delete(value);
      else set.add(value);
      next[facet] = set;
      return next;
    });

  const clearAll = () => {
    setSelections({});
    setPriceMax(bounds.priceMax);
    setMinRange(0);
    setFastOnly(false);
    setQuery("");
  };

  // does an EV pass everything except (optionally) one facet key?
  const passes = (e: EV, exclude?: string) => {
    if (category !== "all" && e.category !== category) return false;
    if (query.trim()) {
      const q = query.toLowerCase();
      if (!(`${e.fullName} ${e.brand} ${e.bodyType}`.toLowerCase().includes(q))) return false;
    }
    if (e.priceMinLakh != null && e.priceMinLakh > priceMax) return false;
    if (minRange > 0 && (e.rangeKmARAI ?? 0) < minRange) return false;
    if (fastOnly && e.fastChargeKw == null) return false;
    for (const def of facetDefs) {
      if (def.key === exclude) continue;
      const sel = selections[def.key];
      if (sel && sel.size > 0) {
        const v = def.get(e);
        if (v == null || !sel.has(v)) return false;
      }
    }
    return true;
  };

  const results = useMemo(() => {
    const list = pool.filter((e) => passes(e));
    const arr = [...list];
    arr.sort((a, b) => {
      switch (sort) {
        case "price-asc": return (a.priceMinLakh ?? 1e9) - (b.priceMinLakh ?? 1e9);
        case "price-desc": return (b.priceMinLakh ?? -1) - (a.priceMinLakh ?? -1);
        case "range-desc": return (b.rangeKmARAI ?? -1) - (a.rangeKmARAI ?? -1);
        case "power-desc": return (b.powerBhp ?? -1) - (a.powerBhp ?? -1);
        case "name": return a.name.localeCompare(b.name);
        default: return 0;
      }
    });
    return arr;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pool, category, query, selections, priceMax, minRange, fastOnly, sort]);

  // options + live counts per facet
  const facetOptions = useMemo(() => {
    const out: Record<string, { value: string; count: number }[]> = {};
    for (const def of facetDefs) {
      const base = pool.filter((e) => passes(e, def.key));
      const counts = new Map<string, number>();
      for (const e of base) {
        const v = def.get(e);
        if (v != null) counts.set(v, (counts.get(v) ?? 0) + 1);
      }
      let opts = Array.from(counts.entries()).map(([value, count]) => ({ value, count }));
      opts = def.numeric
        ? opts.sort((a, b) => Number(a.value) - Number(b.value))
        : opts.sort((a, b) => a.value.localeCompare(b.value));
      out[def.key] = opts;
    }
    return out;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pool, category, query, selections, priceMax, minRange, fastOnly, facetDefs]);

  const fastCount = useMemo(
    () => pool.filter((e) => passes(e, "__fast__") && e.fastChargeKw != null).length,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pool, category, query, selections, priceMax, minRange]
  );

  const activeCount =
    Object.values(selections).reduce((n, s) => n + s.size, 0) +
    (fastOnly ? 1 : 0) +
    (priceMax < bounds.priceMax ? 1 : 0) +
    (minRange > 0 ? 1 : 0);

  const filters = (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-sm font-semibold text-white">{t("facet.filters", locale)}</h3>
        {activeCount > 0 && (
          <button onClick={clearAll} className="inline-flex items-center gap-1 font-mono text-[11px] text-ev-muted hover:text-brand">
            <RotateCcw className="h-3 w-3" /> {t("facet.clear", locale)} ({activeCount})
          </button>
        )}
      </div>

      {/* Price */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-wider text-ev-muted">{t("facet.maxPrice", locale)}</span>
          <span className="font-mono text-xs text-brand">{priceFromLakh(priceMax)}</span>
        </div>
        <input
          type="range"
          min={Math.max(1, bounds.priceMin)}
          max={bounds.priceMax}
          step={0.5}
          value={priceMax}
          onChange={(e) => setPriceMax(Number(e.target.value))}
          className="w-full"
          style={{ accentColor: "#26E0C4" }}
        />
      </div>

      {/* Min range */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-wider text-ev-muted">{t("facet.minRange", locale)}</span>
          <span className="font-mono text-xs text-brand">{minRange} km</span>
        </div>
        <input
          type="range"
          min={0}
          max={bounds.rangeMax}
          step={10}
          value={minRange}
          onChange={(e) => setMinRange(Number(e.target.value))}
          className="w-full"
          style={{ accentColor: "#26E0C4" }}
        />
      </div>

      {/* Fast charging */}
      <label className="flex cursor-pointer items-center justify-between rounded-lg border border-ev-border bg-ev-card px-3 py-2.5">
        <span className="flex items-center gap-2 text-sm text-ev-text/85">
          <input
            type="checkbox"
            checked={fastOnly}
            onChange={(e) => setFastOnly(e.target.checked)}
            style={{ accentColor: "#26E0C4" }}
          />
          {t("facet.dcFast", locale)}
        </span>
        <span className="font-mono text-[11px] text-ev-muted">{fastCount}</span>
      </label>

      {/* Multi-select facets */}
      {facetDefs.map((def) => {
        const opts = facetOptions[def.key] ?? [];
        if (opts.length === 0) return null;
        const sel = selections[def.key] ?? new Set<string>();
        return (
          <div key={def.key}>
            <span className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-ev-muted">
              {t(def.labelKey, locale)}
            </span>
            <div className="max-h-56 space-y-1 overflow-y-auto pr-1">
              {opts.map((o) => (
                <label
                  key={o.value}
                  className="flex cursor-pointer items-center justify-between rounded-lg px-2 py-1.5 hover:bg-ev-card"
                >
                  <span className="flex items-center gap-2 text-sm text-ev-text/85">
                    <input
                      type="checkbox"
                      checked={sel.has(o.value)}
                      onChange={() => toggle(def.key, o.value)}
                      style={{ accentColor: "#26E0C4" }}
                    />
                    {def.key === "seating" ? `${o.value} ${t("facet.seatsWord", locale)}` : o.value}
                  </span>
                  <span className="font-mono text-[11px] text-ev-muted">{o.count}</span>
                </label>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div>
      {/* Category tabs */}
      {availableCats.length > 2 && (
        <div className="mb-6 flex flex-wrap gap-2">
          {availableCats.map((tab) => (
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
      )}

      {/* Search + sort + mobile filter button */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div className="flex min-w-[200px] flex-1 items-center gap-2 rounded-xl border border-ev-border bg-ev-card px-3">
          <Search className="h-4 w-4 text-ev-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("facet.searchModels", locale)}
            className="w-full bg-transparent py-2.5 text-sm text-ev-text outline-none placeholder:text-ev-muted"
          />
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          className="rounded-xl border border-ev-border bg-ev-card px-3 py-2.5 text-sm text-ev-text outline-none"
        >
          <option value="price-asc">{t("sort.priceAsc", locale)}</option>
          <option value="price-desc">{t("sort.priceDesc", locale)}</option>
          <option value="range-desc">{t("sort.rangeDesc", locale)}</option>
          <option value="power-desc">{t("sort.powerDesc", locale)}</option>
          <option value="name">{t("sort.name", locale)}</option>
        </select>
        <button
          onClick={() => setDrawerOpen(true)}
          className="inline-flex items-center gap-2 rounded-xl border border-ev-border bg-ev-card px-4 py-2.5 text-sm text-ev-text/85 lg:hidden"
        >
          <SlidersHorizontal className="h-4 w-4" />
          {t("facet.filters", locale)} {activeCount > 0 && `(${activeCount})`}
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-2xl border border-ev-border bg-ev-surface/40 p-5">
            {filters}
          </div>
        </aside>

        {/* Results */}
        <div>
          <p className="mb-4 font-mono text-xs text-ev-muted">
            {t("facet.showing", locale)} <span className="text-brand">{results.length}</span> {t("facet.of", locale)} {pool.length} {t("facet.modelsWord", locale)}
          </p>
          {results.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-ev-border/50 bg-ev-card/40 p-12 text-center">
              <p className="font-display font-semibold text-ev-muted">{t("facet.noMatch", locale)}</p>
              <button onClick={clearAll} className="mt-3 font-mono text-xs text-brand hover:underline">
                {t("facet.clearAll", locale)}
              </button>
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {results.map((ev) => (
                <EvCard key={ev.id} ev={ev} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden" onClick={() => setDrawerOpen(false)}>
          <div className="absolute inset-0 bg-ev-bg/70 backdrop-blur-sm" />
          <div
            className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-3xl border-t border-ev-border bg-ev-surface p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="font-display font-bold text-white">{t("facet.filters", locale)}</span>
              <button onClick={() => setDrawerOpen(false)} aria-label="Close" className="text-ev-muted hover:text-brand">
                <X className="h-5 w-5" />
              </button>
            </div>
            {filters}
            <button
              onClick={() => setDrawerOpen(false)}
              className="mt-6 w-full rounded-xl bg-brand-gradient py-3 font-display text-sm font-bold text-ev-bg"
            >
              {t("facet.showResults", locale).replace("{n}", String(results.length))}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
