// Server-rendered comparison table for the static /compare/[pair] versus pages.
// Unlike the interactive CompareClient, this outputs the full spec table in the
// initial HTML so the comparison content is crawlable/indexable.
import Link from "next/link";
import { Trophy } from "lucide-react";
import clsx from "clsx";
import { type EV, vehiclePath } from "@/lib/ev-data";
import { SPEC_ROWS, winnersForRow, scoreEvs, DASH } from "@/lib/compare-spec";

export default function CompareTable({ evs }: { evs: EV[] }) {
  const slots: (EV | null)[] = evs;
  const scores = scoreEvs(slots);
  const topScore = Math.max(...(scores.length ? scores : [0]));
  const cols = `minmax(120px,1.1fr) repeat(${slots.length}, 1fr)`;

  return (
    <div className="overflow-hidden rounded-2xl border border-ev-border bg-ev-card">
      {/* header row with names + score */}
      <div className="grid border-b border-ev-border" style={{ gridTemplateColumns: cols }}>
        <div className="p-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-ev-muted">
            Spec
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
            {ev && (
              <>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full" style={{ background: ev.accent }} />
                  <span className="font-display text-sm font-bold leading-tight text-white">
                    {ev.name}
                  </span>
                </div>
                {scores[i] === topScore && topScore > 0 && (
                  <span className="mt-1.5 inline-flex items-center gap-1 rounded-md bg-brand/15 px-1.5 py-0.5 font-mono text-[10px] font-medium text-brand">
                    <Trophy className="h-3 w-3" /> Leads on {scores[i]} specs
                  </span>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      {/* spec rows */}
      {SPEC_ROWS.map((row, ri) => {
        const anyData = evs.some((e) => row.text(e) !== DASH);
        if (!anyData) return null;
        const winners = winnersForRow(row, slots);
        return (
          <div
            key={row.key}
            className={clsx(
              "grid border-b border-ev-border/50 last:border-0",
              ri % 2 === 1 && "bg-ev-surface/30"
            )}
            style={{ gridTemplateColumns: cols }}
          >
            <div className="flex items-center p-3.5">
              <span className="text-xs font-medium text-ev-muted">{row.label}</span>
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

      {/* highlights row */}
      <div className="grid border-t border-ev-border" style={{ gridTemplateColumns: cols }}>
        <div className="flex items-center p-3.5">
          <span className="text-xs font-medium text-ev-muted">Highlights</span>
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

      {/* footer CTAs */}
      <div className="flex flex-wrap gap-3 border-t border-ev-border bg-ev-surface/40 p-4">
        {evs.map((ev) => (
          <Link
            key={ev.id}
            href={vehiclePath(ev)}
            className="inline-flex items-center gap-2 rounded-lg border border-ev-border px-3 py-2 text-xs font-medium text-ev-text/80 transition-colors hover:border-brand/40 hover:text-brand"
          >
            {`Full specs: ${ev.name} →`}
          </Link>
        ))}
      </div>
    </div>
  );
}
