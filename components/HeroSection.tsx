import Link from "next/link";
import { ArrowRight, GitCompare, Car, Bike, Zap as ZapIcon } from "lucide-react";
import { EVS, getById } from "@/lib/ev-data";
import Counter from "@/components/ui/Counter";

const brands = Array.from(new Set(EVS.map((e) => e.brand)));

const quickLinks = [
  { label: "Cars", href: "/catalog?type=car", icon: Car },
  { label: "Scooters", href: "/catalog?type=scooter", icon: ZapIcon },
  { label: "Bikes", href: "/catalog?type=motorcycle", icon: Bike },
];

export default function HeroSection() {
  const spec = getById("tata-nexon-ev-long-range-45-kwh") ?? EVS[0];
  const bars = [
    { label: "Range", value: `${spec.rangeKmARAI} km`, pct: 88 },
    { label: "Battery", value: `${spec.batteryKwh} kWh`, pct: 64 },
    { label: "Power", value: `${spec.powerBhp} bhp`, pct: 70 },
    { label: "0–100", value: spec.accelSec ? `${spec.accelSec}s` : "—", pct: 58 },
  ];

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Background layers */}
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 bg-iris-glow" />
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 45%, black 35%, transparent 100%)",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/5 blur-[130px]" />
      <div className="pointer-events-none absolute right-[18%] top-1/4 h-72 w-72 rounded-full bg-iris/10 blur-[110px] animate-float-slow" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3 py-1.5 animate-fade-up">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-volt" />
            <span className="font-mono text-xs uppercase tracking-widest text-brand">
              Updated for 2026 · {EVS.length} EVs tracked
            </span>
          </div>

          <h1 className="mb-6 font-display text-5xl font-bold leading-[1.04] tracking-tight animate-fade-up animate-delay-100 sm:text-6xl lg:text-7xl text-balance">
            <span className="text-white">Learn. Compare.</span>
            <br />
            <span className="text-gradient-brand">Choose your EV.</span>
          </h1>

          <p className="mb-9 max-w-xl font-body text-lg leading-relaxed text-ev-text/60 animate-fade-up animate-delay-200">
            India&apos;s one-stop hub for everything electric. Browse {EVS.length}{" "}
            cars, scooters and bikes, compare them side by side, calculate your
            savings, and learn the tech — all in one place.
          </p>

          <div className="mb-8 flex flex-wrap gap-4 animate-fade-up animate-delay-300">
            <Link
              href="/compare"
              className="group inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-6 py-3.5 font-display text-sm font-bold tracking-wide text-ev-bg shadow-ev-glow transition-all duration-300 hover:shadow-iris-glow"
            >
              <GitCompare className="h-4 w-4" />
              Compare EVs
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 rounded-xl border border-ev-border bg-ev-surface/50 px-6 py-3.5 font-body text-sm text-ev-text/80 transition-all duration-300 hover:border-brand/40 hover:text-brand"
            >
              Browse the catalog
            </Link>
          </div>

          {/* Quick category pills */}
          <div className="mb-14 flex flex-wrap gap-2 animate-fade-up animate-delay-400">
            {quickLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                className="inline-flex items-center gap-1.5 rounded-lg border border-ev-border bg-ev-card/60 px-3 py-1.5 text-xs font-medium text-ev-muted transition-colors hover:border-brand/40 hover:text-brand"
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </Link>
            ))}
          </div>

          {/* Stats */}
          <div className="grid max-w-xl grid-cols-3 gap-6 animate-fade-up animate-delay-500">
            {[
              { to: EVS.length, suffix: "", label: "EV models" },
              { to: brands.length, suffix: "+", label: "Brands" },
              { to: 3, suffix: "", label: "Categories" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-bold text-white">
                  <Counter to={s.to} suffix={s.suffix} />
                </div>
                <div className="mt-1 font-body text-xs text-ev-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating live spec card */}
        <div className="absolute right-0 top-1/2 hidden w-72 -translate-y-1/2 animate-float xl:block">
          <div className="border-gradient relative rounded-2xl border border-ev-border bg-ev-card/90 p-5 shadow-card backdrop-blur">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-brand">
                Live spec
              </span>
              <span className="h-2 w-2 animate-pulse rounded-full bg-volt" />
            </div>
            <div className="font-display text-xl font-bold text-white">{spec.name}</div>
            <div className="mb-5 font-body text-xs text-ev-muted">
              {spec.variant ?? spec.bodyType}
            </div>
            <div className="space-y-3">
              {bars.map((b) => (
                <div key={b.label}>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="font-body text-ev-muted">{b.label}</span>
                    <span className="font-mono text-ev-text">{b.value}</span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-ev-border">
                    <div
                      className="h-full rounded-full bg-brand-gradient"
                      style={{ width: `${b.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <Link
              href={`/catalog/${spec.id}`}
              className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-lg border border-brand/30 py-2 font-mono text-xs tracking-wide text-brand transition-colors hover:bg-brand/10"
            >
              Full specs <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-brand/5 blur-2xl" />
        </div>
      </div>

      {/* Brand marquee */}
      <div className="absolute bottom-0 inset-x-0 overflow-hidden border-t border-ev-border/40 bg-ev-bg/60 py-4 backdrop-blur">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {[...brands, ...brands].map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="font-display text-sm font-medium text-ev-muted/50"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
