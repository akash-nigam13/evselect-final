"use client";
import { useEffect, useMemo, useState, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPath, t } from "@/lib/i18n";
import { GitCompare, ArrowLeftRight, Trophy, Plus } from "lucide-react";
import { EVS, getById, type EV, vehiclePath } from "@/lib/ev-data";
import { SPEC_ROWS as ROWS, winnersForRow, DASH } from "@/lib/compare-spec";
import { comparePath } from "@/lib/compare-pairs";
import VehiclePicker from "./VehiclePicker";
import clsx from "clsx";

const PRESETS: [string, string][] = [
  ["tata-nexon-ev-long-range-45-kwh", "mg-zs-ev"],
  ["ola-s1-pro-gen-3-4-kwh", "ather-450x-3-7-kwh"],
  ["mahindra-be-6-79-kwh", "tata-curvv-ev-55-kwh"],
  ["ultraviolette-f77-mach-2-standard-7-1-kwh", "revolt-rv400-brz-standard"],
];

export default function CompareClient() {
  const locale = localeFromPath(usePathname() || "/");
  const [slots, setSlots] = useState<(EV | null)[]>([null, null]);

  // hydrate from ?ids=a,b,c on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ids = params.get("ids");
    if (ids) {
      const picked = ids.split(",").map((id) => getById(id) ?? null).filter(Boolean) as EV[];
      if (picked.length) {
        const next: (EV | null)[] = [picked[0] ?? null, picked[1] ?? null];
        if (picked[2]) next.push(picked[2]);
        setSlots(next);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // reflect to URL
  useEffect(() => {
    const ids = slots.filter(Boolean).map((e) => (e as EV).id);
    const url = new URL(window.location.href);
    if (ids.length) url.searchParams.set("ids", ids.join(","));
    else url.searchParams.delete("ids");
    window.history.replaceState({}, "", url);
  }, [slots]);

  const chosen = slots.filter(Boolean) as EV[];
  const excludeIds = chosen.map((e) => e.id);
  const ready = chosen.length >= 2;

  const setSlot = (i: number, ev: EV | null) =>
    setSlots((s) => s.map((v, idx) => (idx === i ? ev : v)));

  const addSlot = () => setSlots((s) => (s.length < 3 ? [...s, null] : s));
  const removeSlot = (i: number) =>
    setSlots((s) => (s.length > 2 ? s.filter((_, idx) => idx !== i) : s.map((v, idx) => (idx === i ? null : v))));

  const swap = () =>
    setSlots((s) => (s.length >= 2 ? [s[1], s[0], ...s.slice(2)] : s));

  // overall winner score (count of row wins) when exactly 2 chosen
  const scores = useMemo(() => {
    if (slots.length === 0) return [];
    const sc = slots.map(() => 0);
    ROWS.forEach((row) => {
      const w = winnersForRow(row, slots);
      w.forEach((i) => (sc[i] += 1));
    });
    return sc;
  }, [slots]);

  const topScore = Math.max(...(scores.length ? scores : [0]));

  const gridCols =
    slots.length === 3 ? "lg:grid-cols-3" : "sm:grid-cols-2";

  return (
    <div>
      {/* Selectors */}
      <div className={clsx("mb-6 grid grid-cols-1 gap-4", gridCols)}>
        {slots.map((ev, i) => (
          <div key={i} className="relative">
            <VehiclePicker
              selected={ev}
              accentLabel={`Vehicle ${String.fromCharCode(65 + i)}`}
              exclude={excludeIds.filter((id) => id !== ev?.id)}
              onSelect={(picked) => setSlot(i, picked)}
              onClear={() => removeSlot(i)}
            />
          </div>
        ))}
        {slots.length < 3 && (
          <button
            onClick={addSlot}
            className="hidden min-h-[180px] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-ev-border/60 text-ev-muted transition-colors hover:border-brand/40 hover:text-brand lg:flex"
          >
            <Plus className="h-5 w-5" />
            <span className="text-xs font-medium">{t("cmp.addThird", locale)}</span>
          </button>
        )}
      </div>

      {/* Controls */}
      {chosen.length >= 2 && (
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <button
            onClick={swap}
            className="inline-flex items-center gap-2 rounded-xl border border-ev-border bg-ev-card px-3 py-2 text-xs font-medium text-ev-text/80 transition-colors hover:border-brand/40 hover:text-brand"
          >
            <ArrowLeftRight className="h-3.5 w-3.5" /> {t("cmp.swap", locale)}
          </button>
          <button
            onClick={() => setSlots([null, null])}
            className="rounded-xl border border-ev-border bg-ev-card px-3 py-2 text-xs font-medium text-ev-muted transition-colors hover:text-brand"
          >
            {t("cmp.reset", locale)}
          </button>
        </div>
      )}

      {/* Comparison table */}
      {ready ? (
        <div className="overflow-hidden rounded-2xl border border-ev-border bg-ev-card animate-fade-up">
          {/* header row with names + score */}
          <div
            className="grid border-b border-ev-border"
            style={{ gridTemplateColumns: `minmax(120px,1.1fr) repeat(${slots.length}, 1fr)` }}
          >
            <div className="p-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ev-muted">
                {t("cmp.spec", locale)}
              </span>
            </div>
            {slots.map((ev, i) => (
              <div
                key={i}
                className={clsx(
                  "border-l border-ev-border p-4",
                  ev && scores[i] === topScore && topScore > 0 && "bg-brand/[0.06]"
                )}
              >
                {ev ? (
                  <>
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full" style={{ background: ev.accent }} />
                      <span className="font-display text-sm font-bold leading-tight text-white">
                        {ev.name}
                      </span>
                    </div>
                    {scores[i] === topScore && topScore > 0 && (
                      <span className="mt-1.5 inline-flex items-center gap-1 rounded-md bg-brand/15 px-1.5 py-0.5 font-mono text-[10px] font-medium text-brand">
                        <Trophy className="h-3 w-3" /> {t("cmp.leads", locale).replace("{n}", String(scores[i]))}
                      </span>
                    )}
                  </>
                ) : (
                  <span className="text-xs text-ev-muted">—</span>
                )}
              </div>
            ))}
          </div>

          {/* spec rows */}
          {ROWS.map((row, ri) => {
            // skip rows where no chosen EV has data
            const anyData = chosen.some((e) => row.text(e) !== DASH);
            if (!anyData) return null;
            const winners = winnersForRow(row, slots);
            return (
              <div
                key={row.key}
                className={clsx(
                  "grid border-b border-ev-border/50 last:border-0",
                  ri % 2 === 1 && "bg-ev-surface/30"
                )}
                style={{ gridTemplateColumns: `minmax(120px,1.1fr) repeat(${slots.length}, 1fr)` }}
              >
                <div className="flex items-center p-3.5">
                  <span className="text-xs font-medium text-ev-muted">{t(row.labelKey, locale)}</span>
                </div>
                {slots.map((ev, i) => (
                  <div
                    key={i}
                    className={clsx(
                      "flex items-center gap-1.5 border-l border-ev-border/50 p-3.5",
                      winners.has(i) && "bg-brand/[0.07]"
                    )}
                  >
                    <span
                      className={clsx(
                        "font-mono text-sm",
                        winners.has(i) ? "font-semibold text-brand" : "text-ev-text/85"
                      )}
                    >
                      {ev ? row.text(ev) : DASH}
                    </span>
                    {winners.has(i) && <Trophy className="h-3 w-3 shrink-0 text-brand" />}
                  </div>
                ))}
              </div>
            );
          })}

          {/* features row */}
          <div
            className="grid border-t border-ev-border"
            style={{ gridTemplateColumns: `minmax(120px,1.1fr) repeat(${slots.length}, 1fr)` }}
          >
            <div className="flex items-center p-3.5">
              <span className="text-xs font-medium text-ev-muted">{t("cmp.highlights", locale)}</span>
            </div>
            {slots.map((ev, i) => (
              <div key={i} className="border-l border-ev-border/50 p-3.5">
                {ev ? (
                  <ul className="space-y-1">
                    {ev.notableFeatures.slice(0, 4).map((f) => (
                      <li key={f} className="text-[11px] leading-snug text-ev-text/70">
                        · {f}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span className="text-xs text-ev-muted">{DASH}</span>
                )}
              </div>
            ))}
          </div>

          {/* footer CTA */}
          <div className="flex flex-wrap gap-3 border-t border-ev-border bg-ev-surface/40 p-4">
            {chosen.map((ev) => (
              <Link
                key={ev.id}
                href={vehiclePath(ev)}
                className="inline-flex items-center gap-2 rounded-lg border border-ev-border px-3 py-2 text-xs font-medium text-ev-text/80 transition-colors hover:border-brand/40 hover:text-brand"
              >
                {`${t("cmp.fullSpecs", locale)} ${ev.name} →`}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-ev-border/50 bg-ev-card/40 p-12 text-center">
          <GitCompare className="mx-auto mb-4 h-10 w-10 text-ev-muted" />
          <p className="font-display font-semibold text-ev-muted">
            {t("cmp.empty", locale)}
          </p>
        </div>
      )}

      {/* Presets */}
      <div className="mt-12">
        <h2 className="mb-5 font-display text-xl font-bold text-white">{t("cmp.popular", locale)}</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PRESETS.map(([a, b]) => {
            const ea = getById(a);
            const eb = getById(b);
            if (!ea || !eb) return null;
            return (
              // Real, crawlable link to the static versus page; the onClick is a
              // progressive enhancement that fills the live tool in-place instead
              // of navigating (so users get an instant comparison, bots get a URL).
              <Link
                key={`${a}-${b}`}
                href={comparePath(a, b)}
                onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  setSlots([ea, eb]);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="card-hover block rounded-xl border border-ev-border bg-ev-card p-4 text-left"
              >
                <div className="text-xs font-semibold text-white">{ea.name}</div>
                <div className="my-2 flex items-center gap-2">
                  <span className="h-px flex-1 bg-ev-border" />
                  <GitCompare className="h-3.5 w-3.5 text-brand" />
                  <span className="h-px flex-1 bg-ev-border" />
                </div>
                <div className="text-xs font-semibold text-ev-muted">{eb.name}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
