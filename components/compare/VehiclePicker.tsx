"use client";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { localeFromPath, t, type Locale } from "@/lib/i18n";
import { Search, Plus, X, Check } from "lucide-react";
import { EVS, type EV, type EVCategory, priceLabel } from "@/lib/ev-data";
import clsx from "clsx";

const TYPE_LABEL_KEYS: Record<EVCategory | "all", string> = {
  all: "cat.all",
  car: "cat.cars",
  scooter: "cat.scooters",
  motorcycle: "cat.bikes",
};

interface Props {
  selected: EV | null;
  onSelect: (ev: EV) => void;
  onClear: () => void;
  /** ids already chosen elsewhere (disabled) */
  exclude?: string[];
  accentLabel?: string;
}

export default function VehiclePicker({
  selected,
  onSelect,
  onClear,
  exclude = [],
  accentLabel,
}: Props) {
  const locale = localeFromPath(usePathname() || "/");
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [type, setType] = useState<EVCategory | "all">("all");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return EVS.filter((e) => {
      if (type !== "all" && e.category !== type) return false;
      if (!q) return true;
      return (
        e.fullName.toLowerCase().includes(q) ||
        e.brand.toLowerCase().includes(q) ||
        e.bodyType.toLowerCase().includes(q)
      );
    }).slice(0, 60);
  }, [query, type]);

  if (selected) {
    return (
      <div className="border-gradient relative overflow-hidden rounded-2xl border border-ev-border bg-ev-card p-5">
        <button
          onClick={onClear}
          aria-label="Remove vehicle"
          className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-lg text-ev-muted transition-colors hover:bg-ev-card-2 hover:text-brand"
        >
          <X className="h-4 w-4" />
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/vehicles/${selected.id}.jpg`}
          alt={selected.fullName}
          loading="lazy"
          className="mb-3 aspect-[16/10] w-full rounded-xl border border-ev-border object-cover"
        />
        <span
          className="mb-2 inline-block rounded-md px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest"
          style={{ color: selected.accent, backgroundColor: `${selected.accent}1a` }}
        >
          {selected.bodyType}
        </span>
        <h3 className="font-display text-lg font-bold leading-tight text-white">
          {selected.name}
        </h3>
        {selected.variant && (
          <p className="mt-0.5 text-xs text-ev-muted">{selected.variant}</p>
        )}
        <p className="mt-3 font-mono text-xl font-semibold text-brand">
          {priceLabel(selected)}
        </p>
        <button
          onClick={() => setOpen(true)}
          className="mt-4 text-xs font-medium text-ev-muted underline-offset-2 transition-colors hover:text-brand hover:underline"
        >
          {t("picker.changeVehicle", locale)}
        </button>
        {open && (
          <PickerOverlay
            locale={locale}
            results={results}
            query={query}
            setQuery={setQuery}
            type={type}
            setType={setType}
            exclude={exclude}
            onPick={(e) => {
              onSelect(e);
              setOpen(false);
              setQuery("");
            }}
            onClose={() => setOpen(false)}
          />
        )}
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group flex min-h-[180px] w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-ev-border bg-ev-card/40 p-6 transition-colors hover:border-brand/50 hover:bg-ev-card"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-ev-border transition-colors group-hover:border-brand/50">
          <Plus className="h-6 w-6 text-ev-muted transition-colors group-hover:text-brand" />
        </span>
        <span className="text-center">
          <span className="block font-display text-sm font-semibold text-white">
            {`${t("picker.select", locale)} ${accentLabel ?? t("picker.vehicle", locale)}`}
          </span>
          <span className="block text-xs text-ev-muted">{t("picker.searchByName", locale)}</span>
        </span>
      </button>
      {open && (
        <PickerOverlay
          locale={locale}
          results={results}
          query={query}
          setQuery={setQuery}
          type={type}
          setType={setType}
          exclude={exclude}
          onPick={(e) => {
            onSelect(e);
            setOpen(false);
            setQuery("");
          }}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

function PickerOverlay({
  locale,
  results,
  query,
  setQuery,
  type,
  setType,
  exclude,
  onPick,
  onClose,
}: {
  locale: Locale;
  results: EV[];
  query: string;
  setQuery: (s: string) => void;
  type: EVCategory | "all";
  setType: (t: EVCategory | "all") => void;
  exclude: string[];
  onPick: (e: EV) => void;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center bg-ev-bg/80 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <div
        className="mt-10 flex max-h-[80vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-ev-border bg-ev-surface shadow-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b border-ev-border p-4">
          <div className="flex items-center gap-2 rounded-xl border border-ev-border bg-ev-card px-3">
            <Search className="h-4 w-4 text-ev-muted" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("picker.searchAll", locale)}
              className="w-full bg-transparent py-2.5 text-sm text-ev-text outline-none placeholder:text-ev-muted"
            />
            <button onClick={onClose} aria-label="Close" className="text-ev-muted hover:text-brand">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-3 flex gap-1.5">
            {(Object.keys(TYPE_LABEL_KEYS) as (EVCategory | "all")[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setType(cat)}
                className={clsx(
                  "rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
                  type === cat
                    ? "bg-brand text-ev-bg"
                    : "bg-ev-card text-ev-muted hover:text-brand"
                )}
              >
                {t(TYPE_LABEL_KEYS[cat], locale)}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-y-auto p-2">
          {results.length === 0 && (
            <p className="py-10 text-center text-sm text-ev-muted">{t("picker.noMatch", locale)}</p>
          )}
          {results.map((e) => {
            const disabled = exclude.includes(e.id);
            return (
              <button
                key={e.id}
                disabled={disabled}
                onClick={() => !disabled && onPick(e)}
                className={clsx(
                  "flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left transition-colors",
                  disabled
                    ? "cursor-not-allowed opacity-40"
                    : "hover:bg-brand/10"
                )}
              >
                <span className="min-w-0">
                  <span className="flex items-center gap-2">
                    <span
                      className="h-2 w-2 shrink-0 rounded-full"
                      style={{ background: e.accent }}
                    />
                    <span className="truncate text-sm font-medium text-ev-text">
                      {e.name}
                    </span>
                  </span>
                  <span className="ml-4 block truncate text-xs text-ev-muted">
                    {e.variant ?? e.bodyType} · {priceLabel(e)}
                  </span>
                </span>
                {disabled ? (
                  <Check className="h-4 w-4 shrink-0 text-brand" />
                ) : (
                  <span className="shrink-0 font-mono text-[11px] text-ev-muted">
                    {e.rangeKmARAI ? `${e.rangeKmARAI} km` : ""}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
