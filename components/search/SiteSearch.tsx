"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Search, Car, Tag, Newspaper, Wrench, CornerDownLeft } from "lucide-react";
import clsx from "clsx";
import { localeFromPath, t } from "@/lib/i18n";
import {
  search,
  itemHref,
  PLACEHOLDERS,
  GROUP_ORDER,
  type SearchGroup,
  type SearchItem,
} from "@/lib/search";

const GROUP_ICON: Record<SearchGroup, typeof Car> = {
  vehicle: Car,
  brand: Tag,
  article: Newspaper,
  page: Wrench,
};
const GROUP_LABEL_KEY: Record<SearchGroup, string> = {
  vehicle: "search.gVehicles",
  brand: "search.gBrands",
  article: "search.gArticles",
  page: "search.gPages",
};

export default function SiteSearch({ autoFocus = false, onNavigate }: { autoFocus?: boolean; onNavigate?: () => void }) {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  const result = useMemo(() => search(query, locale), [query, locale]);

  // Flat list of visible items (for keyboard navigation).
  const flat = useMemo(() => {
    const out: SearchItem[] = [];
    for (const g of GROUP_ORDER) out.push(...result.groups[g]);
    return out;
  }, [result]);

  useEffect(() => setActive(0), [query]);

  // Close on outside click.
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  // ── Typewriter "blinking" placeholder ──────────────────────────
  const phrases = PLACEHOLDERS[locale] ?? PLACEHOLDERS.en;
  const [pi, setPi] = useState(0);
  const [txt, setTxt] = useState("");
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    if (query) return; // pause animation while the user is typing
    const full = phrases[pi % phrases.length];
    let delay = deleting ? 38 : 85;
    if (!deleting && txt === full) delay = 1500;
    if (deleting && txt === "") delay = 250;
    const id = setTimeout(() => {
      if (!deleting && txt === full) return setDeleting(true);
      if (deleting && txt === "") {
        setDeleting(false);
        setPi((p) => p + 1);
        return;
      }
      setTxt(deleting ? full.slice(0, txt.length - 1) : full.slice(0, txt.length + 1));
    }, delay);
    return () => clearTimeout(id);
  }, [txt, deleting, pi, query, phrases]);

  const go = (item: SearchItem) => {
    setOpen(false);
    setQuery("");
    onNavigate?.();
    router.push(itemHref(item, locale));
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false);
      (e.target as HTMLInputElement).blur();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActive((a) => Math.min(a + 1, flat.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter" && flat[active]) {
      e.preventDefault();
      go(flat[active]);
    }
  };

  let runningIndex = -1;

  return (
    <div ref={rootRef} className="relative w-full">
      <div
        className={clsx(
          "flex items-center gap-2 rounded-xl border bg-ev-card/70 px-3 py-2 transition-colors",
          open ? "border-brand/60 shadow-ev-glow-sm" : "border-ev-border hover:border-ev-border/80"
        )}
      >
        <Search className="h-4 w-4 shrink-0 text-ev-muted" />
        <div className="relative min-w-0 flex-1">
          <input
            type="text"
            value={query}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus={autoFocus}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={onKeyDown}
            aria-label={t("search.aria", locale)}
            className="w-full bg-transparent font-body text-sm text-ev-text placeholder-transparent outline-none"
          />
          {query === "" && (
            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center font-body text-sm text-ev-muted">
              {txt}
              <span className="ml-0.5 inline-block w-[1px] animate-pulse bg-brand" style={{ height: "1.05em" }} />
            </span>
          )}
        </div>
      </div>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-[min(92vw,24rem)] overflow-hidden rounded-2xl border border-ev-border bg-ev-surface/97 shadow-card backdrop-blur-xl">
          <div className="max-h-[70vh] overflow-y-auto p-1.5">
            <p className="px-3 pb-1 pt-2 font-mono text-[10px] uppercase tracking-widest text-ev-muted">
              {result.isPopular ? t("search.popular", locale) : t("search.hint", locale)}
            </p>
            {GROUP_ORDER.map((g) => {
              const items = result.groups[g];
              if (items.length === 0) return null;
              const Icon = GROUP_ICON[g];
              return (
                <div key={g} className="pb-1">
                  <p className="flex items-center gap-1.5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-ev-muted/80">
                    <Icon className="h-3 w-3" /> {t(GROUP_LABEL_KEY[g], locale)}
                  </p>
                  {items.map((item) => {
                    runningIndex += 1;
                    const idx = runningIndex;
                    const title = locale === "hi" && item.titleHi ? item.titleHi : item.title;
                    const sub = locale === "hi" && item.subHi ? item.subHi : item.sub;
                    return (
                      <Link
                        key={item.path}
                        href={itemHref(item, locale)}
                        onClick={() => go(item)}
                        onMouseEnter={() => setActive(idx)}
                        className={clsx(
                          "flex items-center justify-between gap-3 rounded-xl px-3 py-2 transition-colors",
                          idx === active ? "bg-brand/12" : "hover:bg-brand/8"
                        )}
                      >
                        <span className="min-w-0">
                          <span className="block truncate text-sm font-medium text-ev-text/90">{title}</span>
                          {sub && <span className="block truncate font-mono text-[11px] text-ev-muted">{sub}</span>}
                        </span>
                        {idx === active && <CornerDownLeft className="h-3.5 w-3.5 shrink-0 text-brand" />}
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
