import Link from "next/link";
import { ArrowRight, Battery, Zap, ThermometerSun, Shield } from "lucide-react";

const batteryTopics = [
  { icon: Battery,        label: "LFP vs NMC",       desc: "Which chemistry lasts longer in India?" },
  { icon: ThermometerSun, label: "Thermal Management",desc: "Why Indian summers are hard on EV batteries" },
  { icon: Zap,            label: "Fast Charging 101", desc: "What DC fast charging actually does to cells" },
  { icon: Shield,         label: "Warranty Decoded",  desc: "Understanding your EV battery warranty terms" },
];

export default function BatteryTeaser() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Green glow right side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-ev-green/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-ev-card via-ev-card to-ev-surface border border-ev-border rounded-3xl overflow-hidden p-8 lg:p-12">
          {/* Decorative battery graphic */}
          <div className="absolute top-0 right-0 w-72 h-72 opacity-5 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <rect x="10" y="20" width="70" height="60" rx="6" stroke="#39ff14" strokeWidth="2" />
              <rect x="80" y="38" width="10" height="24" rx="3" stroke="#39ff14" strokeWidth="2" />
              <rect x="16" y="28" width="12" height="44" rx="2" fill="#39ff14" opacity="0.3" />
              <rect x="32" y="28" width="12" height="44" rx="2" fill="#39ff14" opacity="0.5" />
              <rect x="48" y="28" width="12" height="44" rx="2" fill="#39ff14" opacity="0.7" />
              <rect x="64" y="28" width="8" height="44" rx="2" fill="#39ff14" />
            </svg>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ev-green/30 bg-ev-green/5 mb-6">
                <Battery className="w-3.5 h-3.5 text-ev-green" />
                <span className="text-xs font-mono text-ev-green tracking-widest uppercase">Deep Dive</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
                Everything About<br />
                <span className="text-ev-green">EV Batteries</span>
              </h2>
              <p className="text-ev-text/60 font-body leading-relaxed mb-8">
                Understanding your EV&apos;s battery is the single most important thing you can do before buying — and after. Our comprehensive guide covers chemistry, longevity, India-specific challenges, and how to maximize your pack&apos;s lifespan.
              </p>
              <Link
                href="/about-ev-batteries"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-ev-green text-ev-green font-display font-bold text-sm tracking-wide hover:bg-ev-green hover:text-ev-bg transition-all duration-300 shadow-ev-green-glow"
              >
                Read Battery Guide
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Topic pills */}
            <div className="grid sm:grid-cols-2 gap-3">
              {batteryTopics.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className="bg-ev-bg/50 border border-ev-green/15 rounded-xl p-4 hover:border-ev-green/40 transition-colors group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-ev-green/10 flex items-center justify-center mb-3 group-hover:bg-ev-green/20 transition-colors">
                    <Icon className="w-4 h-4 text-ev-green" />
                  </div>
                  <div className="font-display font-semibold text-white text-sm mb-1">{label}</div>
                  <div className="text-ev-text/50 text-xs font-body leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
