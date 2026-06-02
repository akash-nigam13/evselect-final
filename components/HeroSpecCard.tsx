"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface HeroEv {
  id: string;
  name: string;
  variant: string | null;
  bodyType: string;
  range: number | null;
  battery: number | null;
  power: number | null;
  accel: number | null;
  accent: string;
}

const ROTATE_MS = 4500;

export default function HeroSpecCard({ evs }: { evs: HeroEv[] }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (evs.length < 2) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % evs.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [evs.length]);

  // Maxima for proportional bars.
  const max = useMemo(() => {
    const m = (sel: (e: HeroEv) => number | null) =>
      Math.max(1, ...evs.map((e) => sel(e) ?? 0));
    return {
      range: m((e) => e.range),
      battery: m((e) => e.battery),
      power: m((e) => e.power),
      fastestAccel: Math.min(...evs.map((e) => e.accel ?? 99).filter((n) => n > 0)),
    };
  }, [evs]);

  if (evs.length === 0) return null;
  const ev = evs[idx];

  const bars = [
    { label: "Range", value: ev.range != null ? `${ev.range} km` : "—", pct: ev.range ? (ev.range / max.range) * 100 : 0 },
    { label: "Battery", value: ev.battery != null ? `${ev.battery} kWh` : "—", pct: ev.battery ? (ev.battery / max.battery) * 100 : 0 },
    { label: "Power", value: ev.power != null ? `${ev.power} bhp` : "—", pct: ev.power ? (ev.power / max.power) * 100 : 0 },
    { label: "0–100", value: ev.accel ? `${ev.accel}s` : "—", pct: ev.accel ? (max.fastestAccel / ev.accel) * 100 : 0 },
  ];

  return (
    <div className="absolute right-0 top-1/2 hidden w-80 -translate-y-1/2 animate-float xl:block">
      <div
        className="border-gradient relative overflow-hidden rounded-2xl border border-ev-border bg-ev-card/90 p-5 shadow-card backdrop-blur transition-colors duration-700"
        style={{ boxShadow: `0 0 60px -20px ${ev.accent}55` }}
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-brand">Live spec</span>
          <span className="h-2 w-2 animate-pulse rounded-full bg-volt" />
        </div>

        {/* Floating EV image (cross-fades; falls back to the branded tile until a real photo is added) */}
        <Link
          href={`/catalog/${ev.id}`}
          aria-label={`View ${ev.name} specs`}
          className="relative mb-4 block h-36 [perspective:1000px]"
        >
          {evs.map((e, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={e.id}
              src={`/hero-cars/${e.id}.png`}
              alt={e.name}
              onError={(ev2) => {
                const el = ev2.currentTarget;
                if (!el.dataset.fb) {
                  el.dataset.fb = "1";
                  el.src = `/vehicles/${e.id}.jpg`;
                }
              }}
              className="absolute inset-0 h-full w-full rounded-xl object-contain transition-all duration-700 ease-out"
              style={{
                opacity: i === idx ? 1 : 0,
                transform: i === idx ? "translateY(0) rotateY(-8deg) scale(1)" : "translateY(8px) rotateY(-14deg) scale(0.96)",
              }}
            />
          ))}
        </Link>

        <div className="font-display text-xl font-bold text-white transition-all duration-500">{ev.name}</div>
        <div className="mb-5 font-body text-xs text-ev-muted">{ev.variant ?? ev.bodyType}</div>

        <div className="space-y-3">
          {bars.map((b) => (
            <div key={b.label}>
              <div className="mb-1 flex justify-between text-xs">
                <span className="font-body text-ev-muted">{b.label}</span>
                <span className="font-mono text-ev-text transition-all duration-500">{b.value}</span>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-ev-border">
                <div
                  className="h-full rounded-full bg-brand-gradient transition-all duration-700 ease-out"
                  style={{ width: `${Math.min(100, Math.max(6, b.pct))}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <Link
          href={`/catalog/${ev.id}`}
          className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-lg border border-brand/30 py-2 font-mono text-xs tracking-wide text-brand transition-colors hover:bg-brand/10"
        >
          Full specs <ArrowRight className="h-3 w-3" />
        </Link>

        {/* progress dots */}
        <div className="mt-4 flex justify-center gap-1.5">
          {evs.map((e, i) => (
            <button
              key={e.id}
              aria-label={`Show ${e.name}`}
              onClick={() => setIdx(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === idx ? 18 : 6,
                background: i === idx ? ev.accent : "var(--tw-ev-border, #2a2a33)",
                opacity: i === idx ? 1 : 0.4,
              }}
            />
          ))}
        </div>
      </div>
      <div className="absolute -inset-4 -z-10 rounded-3xl bg-brand/5 blur-2xl" />
    </div>
  );
}
