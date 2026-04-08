import Link from "next/link";
import { ArrowRight, Zap, Battery, Gauge } from "lucide-react";

const stats = [
  { icon: Zap,     value: "200+", label: "EV Models" },
  { icon: Battery, value: "50+",  label: "Brands Listed" },
  { icon: Gauge,   value: "1M+",  label: "Comparisons Made" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-hero-glow" />
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-100"
        style={{ maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 100%)" }}
      />

      {/* Glowing orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-ev-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-ev-cyan/10 blur-[60px] pointer-events-none" />

      {/* Decorative circuit lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="30%" x2="35%" y2="30%" stroke="#00e5ff" strokeWidth="0.5" />
        <circle cx="35%" cy="30%" r="3" fill="none" stroke="#00e5ff" strokeWidth="0.5" />
        <line x1="65%" y1="70%" x2="100%" y2="70%" stroke="#00e5ff" strokeWidth="0.5" />
        <circle cx="65%" cy="70%" r="3" fill="none" stroke="#00e5ff" strokeWidth="0.5" />
        <line x1="10%" y1="60%" x2="10%" y2="80%" stroke="#39ff14" strokeWidth="0.5" />
        <line x1="90%" y1="20%" x2="90%" y2="40%" stroke="#39ff14" strokeWidth="0.5" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ev-cyan/30 bg-ev-cyan/5 mb-8 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-ev-green animate-pulse" />
            <span className="text-xs font-mono text-ev-cyan tracking-widest uppercase">
              India&apos;s #1 EV Intelligence Platform
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6 animate-fade-up animate-delay-100">
            <span className="text-white">Power Your</span>
            <br />
            <span className="text-gradient-cyan">EV Decision</span>
            <br />
            <span className="text-white/60 text-4xl sm:text-5xl lg:text-6xl">with Real Data.</span>
          </h1>

          {/* Subtext */}
          <p className="text-ev-text/60 text-lg sm:text-xl font-body leading-relaxed max-w-xl mb-10 animate-fade-up animate-delay-200">
            Compare specs, decode battery tech, read expert guides — everything you need to choose the right electric vehicle in India.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16 animate-fade-up animate-delay-300">
            <Link
              href="/compare"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-ev-cyan text-ev-bg font-display font-bold text-sm tracking-wide shadow-ev-glow hover:bg-ev-green hover:shadow-ev-green-glow transition-all duration-300"
            >
              Compare EVs Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about-ev-batteries"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-ev-border bg-ev-surface/50 text-ev-text/80 font-body text-sm hover:border-ev-cyan/40 hover:text-ev-cyan transition-all duration-300"
            >
              <Battery className="w-4 h-4" />
              Battery Deep Dive
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 animate-fade-up animate-delay-400">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-ev-cyan/10 border border-ev-cyan/20 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-ev-cyan" />
                </div>
                <div>
                  <div className="font-display font-bold text-white text-lg leading-none">{value}</div>
                  <div className="text-ev-muted text-xs mt-0.5 font-body">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating EV spec card — decorative */}
        <div className="hidden lg:block absolute right-8 xl:right-0 top-1/2 -translate-y-1/2 w-72 animate-float">
          <div className="relative bg-ev-card border border-ev-border rounded-2xl p-5 shadow-card scanline">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-ev-cyan tracking-widest uppercase">Live Spec</span>
              <span className="w-2 h-2 rounded-full bg-ev-green animate-pulse" />
            </div>
            <div className="text-white font-display font-bold text-xl mb-1">Tata Nexon EV</div>
            <div className="text-ev-muted text-xs mb-5 font-body">Max Long Range · 2024</div>
            <div className="space-y-3">
              {[
                { label: "Range",    value: "465 km",    pct: 85 },
                { label: "Charge",   value: "60 min",    pct: 60 },
                { label: "Top Speed",value: "150 km/h",  pct: 72 },
                { label: "0–100",    value: "8.9 sec",   pct: 55 },
              ].map(({ label, value, pct }) => (
                <div key={label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-ev-muted font-body">{label}</span>
                    <span className="text-ev-text font-mono">{value}</span>
                  </div>
                  <div className="h-1 bg-ev-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-ev-cyan to-ev-green rounded-full"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/compare"
              className="mt-5 flex items-center justify-center gap-1.5 w-full py-2 rounded-lg border border-ev-cyan/30 text-ev-cyan text-xs font-mono tracking-wide hover:bg-ev-cyan/10 transition-colors"
            >
              Full Comparison <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Glow behind card */}
          <div className="absolute -inset-4 bg-ev-cyan/5 rounded-3xl blur-2xl -z-10" />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-ev-bg to-transparent" />
    </section>
  );
}
