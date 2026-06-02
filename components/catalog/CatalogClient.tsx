"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, SlidersHorizontal, Zap } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import EvCard from "@/components/catalog/EvCard";
import { EVS, type EV, type EVCategory } from "@/lib/ev-data";

type CategoryFilter = "all" | EVCategory;
type SortKey = "price-asc" | "price-desc" | "range-desc" | "power-desc";

const CATEGORY_TABS: { key: CategoryFilter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "car", label: "Cars" },
  { key: "scooter", label: "Scooters" },
  { key: "motorcycle", label: "Bikes" },
];

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: "price-asc", label: "Price: Low to High" },
  { key: "price-desc", label: "Price: High to Low" },
  { key: "range-desc", label: "Range: High to Low" },
  { key: "power-desc", label: "Power: High to Low" },
];

function num(v: number | null, fallback: number): number {
  return v == null ? fallback : v;
}

export default function CatalogClient() {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("price-asc");

  // Read the initial category from the URL (?type=car|scooter|motorcycle)
  // on mount, avoiding next/navigation useSearchParams (Suspense requirement).
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");
    if (type === "car" || type === "scooter" || type === "motorcycle") {
      setCategory(type);
    }
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();

    let list: EV[] = EVS.filter((ev) => {
      if (category !== "all" && ev.category !== category) return false;
      if (!q) return true;
      const haystack =
        `${ev.name} ${ev.brand} ${ev.model} ${ev.bodyType} ${ev.fullName}`.toLowerCase();
      return haystack.includes(q);
    });

    list = [...list].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return num(a.priceMinLakh, Infinity) - num(b.priceMinLakh, Infinity);
        case "price-desc":
          return num(b.priceMinLakh, -Infinity) - num(a.priceMinLakh, -Infinity);
        case "range-desc":
          return num(b.rangeKmARAI, -Infinity) - num(a.rangeKmARAI, -Infinity);
        case "power-desc":
          return num(b.powerBhp, -Infinity) - num(a.powerBhp, -Infinity);
        default:
          return 0;
      }
    });

    return list;
  }, [category, query, sort]);

  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
      {/* Controls */}
      <div className="glass sticky top-16 z-20 -mx-2 mb-10 rounded-2xl border border-ev-border px-3 py-4 sm:px-5">
        <div className="flex flex-col gap-4">
          {/* Category tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORY_TABS.map((tab) => {
              const active = category === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setCategory(tab.key)}
                  className={`rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] transition-all duration-200 ${
                    active
                      ? "bg-brand-gradient text-ev-bg shadow-ev-glow-sm"
                      : "border border-ev-border bg-ev-surface text-ev-muted hover:border-brand/40 hover:text-ev-text"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search + sort */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ev-muted" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, brand or body type…"
                className="w-full rounded-xl border border-ev-border bg-ev-card py-2.5 pl-10 pr-4 font-body text-sm text-ev-text placeholder:text-ev-muted focus:border-brand/60 focus:outline-none focus:ring-1 focus:ring-brand/40"
              />
            </div>

            <div className="relative sm:w-64">
              <SlidersHorizontal className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ev-muted" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="w-full appearance-none rounded-xl border border-ev-border bg-ev-card py-2.5 pl-10 pr-9 font-body text-sm text-ev-text focus:border-brand/60 focus:outline-none focus:ring-1 focus:ring-brand/40"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option
                    key={opt.key}
                    value={opt.key}
                    className="bg-ev-card text-ev-text"
                  >
                    {opt.label}
                  </option>
                ))}
              </select>
              <svg
                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ev-muted"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden
              >
                <path
                  d="M6 8l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="mb-6 flex items-center gap-2 font-mono text-sm text-ev-muted">
        <Zap className="h-4 w-4 text-brand" />
        Showing{" "}
        <span className="font-semibold text-ev-text">{results.length}</span>{" "}
        {results.length === 1 ? "EV" : "EVs"}
      </div>

      {/* Grid */}
      {results.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-ev-border bg-ev-surface/40 px-6 py-20 text-center">
          <p className="font-display text-xl font-bold text-ev-text">
            No EVs match your filters
          </p>
          <p className="mt-2 max-w-sm font-body text-sm text-ev-muted">
            Try clearing the search, switching category, or browsing all
            vehicles.
          </p>
          <button
            type="button"
            onClick={() => {
              setCategory("all");
              setQuery("");
            }}
            className="mt-6 rounded-xl bg-brand-gradient px-5 py-2.5 font-body text-sm font-semibold text-ev-bg transition-transform duration-200 hover:-translate-y-0.5"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((ev, i) => (
            <Reveal key={ev.id} delay={Math.min(i, 8) * 60}>
              <EvCard ev={ev} />
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
