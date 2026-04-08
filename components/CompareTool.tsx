import Link from "next/link";
import { ArrowRight, GitCompare, Check } from "lucide-react";

const compareFeatures = [
  "Side-by-side spec comparison",
  "Real-world range estimates",
  "Total cost of ownership",
  "Charging infrastructure data",
  "Resale value insights",
  "User review aggregation",
];

const sampleSpecs = [
  { spec: "Range (ARAI)",   a: "465 km", b: "461 km" },
  { spec: "Battery (kWh)", a: "40.5",   b: "50.3" },
  { spec: "Motor (bhp)",   a: "143",     b: "174" },
  { spec: "0–100 km/h",    a: "8.9 s",  b: "8.5 s" },
  { spec: "Fast Charge",   a: "DC 50kW", b: "DC 50kW" },
  { spec: "Ex-showroom",   a: "₹19.99 L", b: "₹23.99 L" },
];

export default function CompareTool() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-ev-cyan/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div>
            <p className="text-xs font-mono text-ev-cyan tracking-widest uppercase mb-4">Comparison Engine</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
              Compare Any<br />
              <span className="text-gradient-cyan">Two EVs Side by Side</span>
            </h2>
            <p className="text-ev-text/60 font-body leading-relaxed mb-8">
              Stop guessing. Our comparison tool lines up every spec — from battery capacity to real-world range — so you can make a data-driven decision in minutes.
            </p>
            <ul className="space-y-2.5 mb-8">
              {compareFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm font-body text-ev-text/70">
                  <Check className="w-4 h-4 text-ev-green shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/compare"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-ev-cyan text-ev-bg font-display font-bold text-sm tracking-wide shadow-ev-glow hover:bg-ev-green hover:shadow-ev-green-glow transition-all duration-300"
            >
              <GitCompare className="w-4 h-4" />
              Open Compare Tool
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right: mock comparison table */}
          <div className="relative">
            <div className="bg-ev-card border border-ev-border rounded-2xl overflow-hidden shadow-card">
              {/* Table header */}
              <div className="grid grid-cols-3 border-b border-ev-border">
                <div className="p-4 border-r border-ev-border">
                  <span className="text-[10px] font-mono text-ev-muted uppercase tracking-wider">Spec</span>
                </div>
                <div className="p-4 border-r border-ev-border bg-ev-cyan/5">
                  <div className="text-[10px] font-mono text-ev-cyan tracking-wider mb-0.5">Model A</div>
                  <div className="text-xs font-display font-bold text-white leading-tight">Nexon EV Max</div>
                </div>
                <div className="p-4 bg-ev-surface/50">
                  <div className="text-[10px] font-mono text-ev-muted tracking-wider mb-0.5">Model B</div>
                  <div className="text-xs font-display font-bold text-white leading-tight">MG ZS EV</div>
                </div>
              </div>

              {/* Rows */}
              {sampleSpecs.map(({ spec, a, b }, i) => (
                <div
                  key={spec}
                  className={`grid grid-cols-3 border-b border-ev-border/50 last:border-0 ${i % 2 === 0 ? "" : "bg-ev-surface/20"}`}
                >
                  <div className="px-4 py-3 border-r border-ev-border/50 flex items-center">
                    <span className="text-xs font-body text-ev-muted">{spec}</span>
                  </div>
                  <div className="px-4 py-3 border-r border-ev-border/50 bg-ev-cyan/3 flex items-center">
                    <span className="text-xs font-mono text-ev-cyan">{a}</span>
                  </div>
                  <div className="px-4 py-3 flex items-center">
                    <span className="text-xs font-mono text-ev-text/80">{b}</span>
                  </div>
                </div>
              ))}

              {/* Footer CTA */}
              <div className="p-4 bg-ev-surface/40 border-t border-ev-border">
                <Link
                  href="/compare"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-ev-cyan/30 text-ev-cyan text-xs font-mono tracking-wide hover:bg-ev-cyan/10 transition-colors"
                >
                  <GitCompare className="w-3.5 h-3.5" />
                  Customise Comparison
                </Link>
              </div>
            </div>

            {/* Glow */}
            <div className="absolute -inset-4 bg-ev-cyan/5 rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
