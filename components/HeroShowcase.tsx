"use client";
import { useEffect, useRef, useState } from "react";
import { vehiclePathById } from "@/lib/ev-data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { localizedHref, type Locale } from "@/lib/i18n";

const LABELS = {
  en: { live: "Live", fullSpecs: "Full specs", range: "Range", battery: "Battery", power: "Power", accel: "0–100" },
  hi: { live: "लाइव", fullSpecs: "पूरी जानकारी", range: "रेंज", battery: "बैटरी", power: "पावर", accel: "0–100" },
} as const;

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

const ROTATE_MS = 5000;

const fallback = (e: React.SyntheticEvent<HTMLImageElement>, id: string) => {
  const el = e.currentTarget;
  if (!el.dataset.fb) {
    el.dataset.fb = "1";
    el.src = `/vehicles/${id}.jpg`;
  }
};

export default function HeroShowcase({ evs, locale = "en" }: { evs: HeroEv[]; locale?: Locale }) {
  const lbl = LABELS[locale === "hi" ? "hi" : "en"];
  const href = (p: string) => localizedHref(p, locale);
  const [idx, setIdx] = useState(0);
  const [nudge, setNudge] = useState(0); // bump to reset the auto-timer after manual pick
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (evs.length < 2) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % evs.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [evs.length, nudge]);

  if (evs.length === 0) return null;
  const ev = evs[idx];

  // Cursor-reactive parallax tilt (mutates the DOM directly — no re-render).
  const onMove = (e: React.MouseEvent) => {
    const el = tiltRef.current;
    if (!el) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `rotateY(${px * 18}deg) rotateX(${-py * 12}deg) translateX(${px * 16}px) translateY(${py * 10}px)`;
  };
  const onLeave = () => {
    if (tiltRef.current) tiltRef.current.style.transform = "";
  };

  const stats = [
    { label: lbl.range, value: ev.range != null ? `${ev.range}` : "—", unit: "km" },
    { label: lbl.battery, value: ev.battery != null ? `${ev.battery}` : "—", unit: "kWh" },
    { label: lbl.power, value: ev.power != null ? `${ev.power}` : "—", unit: "bhp" },
    { label: lbl.accel, value: ev.accel != null ? `${ev.accel}` : "—", unit: "s" },
  ];

  return (
    <div
      className="absolute right-0 top-1/2 hidden w-[26rem] -translate-y-1/2 2xl:w-[30rem] xl:block"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <style>{`
        @keyframes heroScan {
          0% { transform: translateY(-45%); opacity: 0; }
          18% { opacity: 1; }
          82% { opacity: 1; }
          100% { transform: translateY(150%); opacity: 0; }
        }
        @keyframes heroMaterialize {
          0% { opacity: 0; filter: brightness(2.2) saturate(0.2); }
          60% { opacity: 1; }
          100% { opacity: 1; filter: brightness(1) saturate(1); }
        }
        @keyframes heroPodium {
          0%,100% { opacity: .55; transform: translateX(-50%) scaleX(1); }
          50% { opacity: .85; transform: translateX(-50%) scaleX(1.05); }
        }
      `}</style>

      {/* accent glow */}
      <div
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] blur-3xl transition-colors duration-700"
        style={{ background: `radial-gradient(60% 60% at 60% 40%, ${ev.accent}33, transparent 70%)` }}
      />

      {/* Car + holographic podium */}
      <Link
        href={href(vehiclePathById(ev.id))}
        aria-label={`View ${ev.name} specs`}
        className="relative block h-72 [perspective:1200px]"
      >
        {/* Holographic podium (under the car) */}
        <div className="pointer-events-none absolute inset-x-0 bottom-6 flex flex-col items-center">
          {/* projected grid disc */}
          <div
            className="absolute bottom-0 left-1/2 h-16 w-64"
            style={{
              transform: "translateX(-50%) perspective(300px) rotateX(72deg)",
              background: `repeating-linear-gradient(0deg, ${ev.accent}55 0 1px, transparent 1px 14px), repeating-linear-gradient(90deg, ${ev.accent}55 0 1px, transparent 1px 14px)`,
              maskImage: "radial-gradient(ellipse at center, black 10%, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 10%, transparent 70%)",
              opacity: 0.5,
            }}
          />
          {/* glowing rings */}
          <div
            className="absolute bottom-1 left-1/2 h-5 w-56 rounded-[50%] border"
            style={{ borderColor: `${ev.accent}aa`, boxShadow: `0 0 24px -4px ${ev.accent}`, animation: "heroPodium 3.5s ease-in-out infinite" }}
          />
          <div
            className="absolute bottom-3 left-1/2 h-3 w-40 -translate-x-1/2 rounded-[50%]"
            style={{ background: `radial-gradient(ellipse at center, ${ev.accent}66, transparent 70%)`, filter: "blur(2px)" }}
          />
        </div>

        {/* Reflection */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={`ref-${ev.id}`}
          src={`/hero-cars/${ev.id}.png`}
          alt=""
          aria-hidden
          onError={(e) => fallback(e, ev.id)}
          className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-28 w-[80%] -scale-y-100 object-contain opacity-20 blur-[1px]"
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent 55%)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent 55%)",
          }}
        />

        {/* Floating car (tilts with cursor) */}
        <div ref={tiltRef} className="relative h-full w-full transition-transform duration-300 ease-out [transform-style:preserve-3d] animate-float">
          {evs.map((e, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={e.id}
              src={`/hero-cars/${e.id}.png`}
              alt={e.name}
              onError={(ev2) => fallback(ev2, e.id)}
              className="absolute inset-0 h-[88%] w-full object-contain drop-shadow-2xl transition-opacity duration-1000 ease-in-out"
              style={
                i === idx
                  ? { opacity: 1, animation: "heroMaterialize 1s ease-in-out" }
                  : { opacity: 0 }
              }
            />
          ))}
        </div>

        {/* Materialize scan sweep — replays on each car change (keyed by idx) */}
        <div
          key={`scan-${idx}`}
          className="pointer-events-none absolute inset-x-6 top-[-1.5rem] h-[82%]"
          style={{ animation: "heroScan 1s ease-in-out" }}
        >
          {/* soft glowing band for a smoother sweep */}
          <div
            className="h-10 w-full"
            style={{ background: `linear-gradient(to bottom, transparent, ${ev.accent}40, transparent)`, filter: "blur(3px)" }}
          />
          {/* bright core line */}
          <div
            className="mx-auto -mt-5 h-[2px] w-full rounded-full"
            style={{ background: `linear-gradient(90deg, transparent, ${ev.accent}, transparent)`, boxShadow: `0 0 14px 2px ${ev.accent}` }}
          />
        </div>
      </Link>

      {/* Spec readout */}
      <div className="mt-1 rounded-2xl border border-ev-border bg-ev-card/80 p-5 shadow-card backdrop-blur">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="font-display text-lg font-bold leading-tight text-white">{ev.name}</div>
            <div className="font-body text-xs text-ev-muted">{ev.variant ?? ev.bodyType}</div>
          </div>
          <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-brand">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-volt" /> {lbl.live}
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-ev-border/70 bg-ev-bg/40 px-2 py-2 text-center">
              <div className="font-mono text-sm font-bold text-white transition-all duration-500">{s.value}</div>
              <div className="font-mono text-[9px] uppercase tracking-wider text-ev-muted">{s.unit}</div>
              <div className="mt-0.5 font-body text-[10px] text-ev-muted/70">{s.label}</div>
            </div>
          ))}
        </div>

        <Link
          href={href(vehiclePathById(ev.id))}
          className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-lg border border-brand/30 py-2 font-mono text-xs tracking-wide text-brand transition-colors hover:bg-brand/10"
        >
          {lbl.fullSpecs} <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      {/* Thumbnail picker */}
      <div className="mt-3 flex items-center justify-center gap-2">
        {evs.map((e, i) => (
          <button
            key={e.id}
            onClick={() => {
              setIdx(i);
              setNudge((n) => n + 1);
            }}
            aria-label={`Show ${e.name}`}
            className="relative h-12 w-16 overflow-hidden rounded-lg border bg-ev-card/70 transition-all duration-300"
            style={{
              borderColor: i === idx ? ev.accent : "rgba(255,255,255,0.08)",
              opacity: i === idx ? 1 : 0.5,
              transform: i === idx ? "scale(1.05)" : "scale(1)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/hero-cars/${e.id}.png`}
              alt={e.name}
              onError={(ev2) => fallback(ev2, e.id)}
              className="h-full w-full object-contain p-1"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
