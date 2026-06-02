"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { localeFromPath, t } from "@/lib/i18n";
import { Search, ChevronDown } from "lucide-react";
import { TERMS } from "@/lib/glossary";

export default function Glossary() {
  const locale = localeFromPath(usePathname() || "/");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return TERMS;
    return TERMS.filter(
      (t) =>
        t.term.toLowerCase().includes(q) ||
        (t.short?.toLowerCase().includes(q) ?? false) ||
        t.def.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="mx-auto max-w-3xl">
      {/* Search */}
      <div className="relative mb-8">
        <Search
          aria-hidden
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ev-muted"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("gl.search", locale)}
          aria-label="Search glossary terms"
          className="w-full rounded-2xl border border-ev-border bg-ev-card py-4 pl-12 pr-4 font-body text-ev-text placeholder:text-ev-muted/70 outline-none transition-colors focus:border-brand focus:shadow-ev-glow-sm"
        />
      </div>

      {/* Result count */}
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-ev-muted">
        {filtered.length} {t(filtered.length === 1 ? "gl.term" : "gl.terms", locale)}
        {query ? " " + t("gl.found", locale) : ""}
      </p>

      {/* List */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-ev-border bg-ev-card p-8 text-center">
          <p className="font-body text-ev-muted">
            {t("gl.noMatch", locale)}{" "}
            <span className="text-ev-text">&ldquo;{query}&rdquo;</span>. Try a
            shorter or different keyword.
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {filtered.map((t) => {
            const isOpen = open === t.term;
            return (
              <li key={t.term}>
                <div className="overflow-hidden rounded-2xl border border-ev-border bg-ev-card transition-colors hover:border-brand/40">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : t.term)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="flex flex-col">
                      <span className="font-display text-base font-semibold text-ev-text">
                        {t.term}
                      </span>
                      {t.short && (
                        <span className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.15em] text-brand">
                          {t.short}
                        </span>
                      )}
                    </span>
                    <ChevronDown
                      aria-hidden
                      className={`h-5 w-5 flex-shrink-0 text-ev-muted transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-brand" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-ev-border/60 px-5 py-4 font-body text-sm leading-relaxed text-ev-text/80">
                        {t.def}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
