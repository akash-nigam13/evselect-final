import Link from "next/link";
import { ArrowRight, GitCompare, Check } from "lucide-react";
import { getById, EVS, priceLabel, type EV } from "@/lib/ev-data";
import Reveal from "@/components/ui/Reveal";

const compareFeatures = [
  "Side-by-side specs, leader highlighted",
  "Real-world range estimates",
  "Battery, power, torque & charging",
  "Compare up to three EVs at once",
  "Works for cars, scooters & bikes",
  "Shareable comparison links",
];

const rows: { label: string; get: (e: EV) => string }[] = [
  { label: "Range (ARAI)", get: (e) => (e.rangeKmARAI ? `${e.rangeKmARAI} km` : "—") },
  { label: "Battery", get: (e) => (e.batteryKwh ? `${e.batteryKwh} kWh` : "—") },
  { label: "Power", get: (e) => (e.powerBhp ? `${e.powerBhp} bhp` : "—") },
  { label: "0–100 km/h", get: (e) => (e.accelSec ? `${e.accelSec}s` : "—") },
  { label: "Price", get: (e) => priceLabel(e) },
];

export default function CompareTool() {
  const a = getById("tata-nexon-ev-long-range-45-kwh") ?? EVS[0];
  const b = getById("mg-zs-ev") ?? EVS[1];

  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-iris/5 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-brand">
              Comparison engine
            </p>
            <h2 className="mb-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              Compare any EVs,
              <br />
              <span className="text-gradient-brand">side by side</span>
            </h2>
            <p className="mb-8 max-w-md font-body leading-relaxed text-ev-text/60">
              Stop guessing. Line up every spec that matters — from battery
              capacity to real-world range — and see the winner instantly.
            </p>
            <ul className="mb-8 space-y-2.5">
              {compareFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 font-body text-sm text-ev-text/70">
                  <Check className="h-4 w-4 shrink-0 text-brand" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/compare"
              className="group inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-6 py-3.5 font-display text-sm font-bold tracking-wide text-ev-bg shadow-ev-glow transition-all duration-300 hover:shadow-iris-glow"
            >
              <GitCompare className="h-4 w-4" />
              Open Compare Tool
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          {/* Mock comparison table from real data */}
          <Reveal delay={120}>
            <div className="border-gradient relative overflow-hidden rounded-2xl border border-ev-border bg-ev-card shadow-card">
              <div className="grid grid-cols-3 border-b border-ev-border">
                <div className="p-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-ev-muted">
                    Spec
                  </span>
                </div>
                {[a, b].map((e, i) => (
                  <div key={e.id} className={`border-l border-ev-border p-4 ${i === 0 ? "bg-brand/[0.06]" : ""}`}>
                    <div className="font-mono text-[10px] tracking-wider text-ev-muted">
                      {i === 0 ? "Model A" : "Model B"}
                    </div>
                    <div className="font-display text-xs font-bold leading-tight text-white">
                      {e.name}
                    </div>
                  </div>
                ))}
              </div>
              {rows.map((r, i) => (
                <div
                  key={r.label}
                  className={`grid grid-cols-3 border-b border-ev-border/50 last:border-0 ${i % 2 ? "bg-ev-surface/20" : ""}`}
                >
                  <div className="flex items-center px-4 py-3">
                    <span className="font-body text-xs text-ev-muted">{r.label}</span>
                  </div>
                  <div className="flex items-center border-l border-ev-border/50 bg-brand/[0.04] px-4 py-3">
                    <span className="font-mono text-xs text-brand">{r.get(a)}</span>
                  </div>
                  <div className="flex items-center border-l border-ev-border/50 px-4 py-3">
                    <span className="font-mono text-xs text-ev-text/80">{r.get(b)}</span>
                  </div>
                </div>
              ))}
              <div className="border-t border-ev-border bg-ev-surface/40 p-4">
                <Link
                  href={`/compare?ids=${a.id},${b.id}`}
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-brand/30 py-2.5 font-mono text-xs tracking-wide text-brand transition-colors hover:bg-brand/10"
                >
                  <GitCompare className="h-3.5 w-3.5" />
                  Customise this comparison
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
