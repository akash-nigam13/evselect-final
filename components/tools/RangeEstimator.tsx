"use client";

import { useMemo, useState } from "react";
import {
  Gauge,
  Wind,
  Mountain,
  Thermometer,
  BatteryCharging,
  Zap,
  Plug,
  Info,
} from "lucide-react";
import { EVS, getById, type EV } from "@/lib/ev-data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Counter from "@/components/ui/Counter";
import VehiclePicker from "@/components/tools/VehiclePicker";

/* ── constants ───────────────────────────────────────────── */

const ACCENT = "#26E0C4";

const STYLE = [
  { key: "eco", label: "Eco", factor: 1.05 },
  { key: "normal", label: "Normal", factor: 0.9 },
  { key: "spirited", label: "Spirited", factor: 0.72 },
] as const;

const AC = [
  { key: "off", label: "Off", factor: 1.0 },
  { key: "low", label: "Low", factor: 0.93 },
  { key: "high", label: "High", factor: 0.85 },
] as const;

const TERRAIN = [
  { key: "city", label: "City", factor: 1.0 },
  { key: "mixed", label: "Mixed", factor: 0.92 },
  { key: "highway", label: "Highway", factor: 0.8 },
] as const;

type StyleKey = (typeof STYLE)[number]["key"];
type AcKey = (typeof AC)[number]["key"];
type TerrainKey = (typeof TERRAIN)[number]["key"];

const DEFAULT_ID = getById("tata-nexon-ev-long-range-45-kwh")
  ? "tata-nexon-ev-long-range-45-kwh"
  : EVS[0].id;

/** Temperature derating: optimal 20–32°C, -0.4%/°C away, capped at -15%. */
function tempFactor(t: number): number {
  let off = 0;
  if (t < 20) off = 20 - t;
  else if (t > 32) off = t - 32;
  const derate = Math.min(off * 0.004, 0.15);
  return 1 - derate;
}

const inr = (n: number) => Math.round(n).toLocaleString("en-IN");

/* ── component ───────────────────────────────────────────── */

export default function RangeEstimator({ embedded = false }: { embedded?: boolean }) {
  const [evId, setEvId] = useState(DEFAULT_ID);
  const [style, setStyle] = useState<StyleKey>("normal");
  const [ac, setAc] = useState<AcKey>("low");
  const [terrain, setTerrain] = useState<TerrainKey>("mixed");
  const [temp, setTemp] = useState(28);
  const [startPct, setStartPct] = useState(90);
  const [targetPct, setTargetPct] = useState(20);

  const ev = getById(evId) ?? EVS[0];

  const calc = useMemo(() => {
    const base = ev.realRangeKm ?? ev.rangeKmARAI ?? 0;
    const arai = ev.rangeKmARAI ?? base;

    const sF = STYLE.find((s) => s.key === style)!.factor;
    const aF = AC.find((a) => a.key === ac)!.factor;
    const tF = TERRAIN.find((t) => t.key === terrain)!.factor;
    const tempF = tempFactor(temp);

    const estimated = base * sF * aF * tF * tempF;

    // Remaining usable range for chosen start% relative to start (down to 0)
    const usableFull = estimated * (startPct / 100);
    // Range available from start% down to target%
    const usableToTarget = estimated * (Math.max(0, startPct - targetPct) / 100);

    const vsAraiPct = arai > 0 ? (estimated / arai) * 100 : 0;

    // Charging estimates ----------------------------------------------------
    const needPct = Math.max(0, startPct - targetPct); // not used directly; charging adds up
    const addPct = 100 - startPct; // charge to full from current start
    const batteryKwh = ev.batteryKwh;

    let dcMinutes: number | null = null;
    let acMinutes: number | null = null;
    if (batteryKwh != null && addPct > 0) {
      const kWhToAdd = batteryKwh * (addPct / 100);
      if (ev.fastChargeKw != null && ev.fastChargeKw > 0) {
        // DC tapers — use ~70% effective average power
        dcMinutes = (kWhToAdd / (ev.fastChargeKw * 0.7)) * 60;
      }
      if (ev.acChargeKw != null && ev.acChargeKw > 0) {
        acMinutes = (kWhToAdd / (ev.acChargeKw * 0.95)) * 60;
      }
    }

    return {
      base,
      arai,
      estimated,
      usableFull,
      usableToTarget,
      vsAraiPct,
      addPct,
      needPct,
      dcMinutes,
      acMinutes,
      factors: {
        style: sF,
        ac: aF,
        terrain: tF,
        temp: tempF,
      },
    };
  }, [ev, style, ac, terrain, temp, startPct, targetPct]);

  const fillPct = Math.min(100, Math.max(0, calc.vsAraiPct));

  return (
    <div className={`relative overflow-hidden ${embedded ? "py-8" : "py-20 sm:py-24"}`}>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {!embedded && (
          <SectionHeading
            align="left"
            eyebrow="Tool 02 — Range & Charging"
            title={
              <>
                Real-world{" "}
                <span className="text-gradient-volt">range estimator</span>
              </>
            }
            subtitle="ARAI numbers are lab figures. Dial in how and where you drive to get a grounded estimate — plus the charging time to top back up."
          />
        )}

        <div className={`grid gap-6 lg:grid-cols-[minmax(0,420px)_1fr] ${embedded ? "" : "mt-12"}`}>
          {/* ── Inputs ─────────────────────────────────────── */}
          <Reveal className="glass rounded-2xl border border-ev-border p-6 sm:p-7">
            <div className="mb-6 flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-iris/10 text-iris">
                <Gauge className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-bold text-white">
                Conditions
              </h3>
            </div>

            {/* EV picker — Type → Brand → Model (searchable) */}
            <div className="mb-6">
              <span className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-ev-muted">
                Choose your EV
              </span>
              <VehiclePicker value={evId} onChange={setEvId} />
              <span className="mt-2 block font-mono text-[11px] text-iris/80">
                ARAI {calc.arai ? `${inr(calc.arai)} km` : "—"} · base{" "}
                {calc.base ? `${inr(calc.base)} km` : "—"}
              </span>
            </div>

            <Segmented
              icon={<Wind className="h-3.5 w-3.5" />}
              label="Driving style"
              options={STYLE}
              value={style}
              onChange={setStyle}
            />
            <Segmented
              icon={<Thermometer className="h-3.5 w-3.5" />}
              label="AC / Heater"
              options={AC}
              value={ac}
              onChange={setAc}
            />
            <Segmented
              icon={<Mountain className="h-3.5 w-3.5" />}
              label="Route / speed"
              options={TERRAIN}
              value={terrain}
              onChange={setTerrain}
            />

            {/* temperature */}
            <div className="mb-5">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-ev-muted">
                  Ambient temp
                </span>
                <span className="font-mono text-sm font-medium text-iris">
                  {temp}°C
                </span>
              </div>
              <input
                type="range"
                min={5}
                max={48}
                step={1}
                value={temp}
                onChange={(e) => setTemp(Number(e.target.value))}
                className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-ev-border"
                style={{ accentColor: ACCENT }}
              />
            </div>

            {/* start / target % */}
            <div className="mb-5">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-ev-muted">
                  Start charge
                </span>
                <span className="font-mono text-sm font-medium text-iris">
                  {startPct}%
                </span>
              </div>
              <input
                type="range"
                min={5}
                max={100}
                step={5}
                value={startPct}
                onChange={(e) => {
                  const v = Number(e.target.value);
                  setStartPct(v);
                  if (v <= targetPct) setTargetPct(Math.max(0, v - 5));
                }}
                className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-ev-border"
                style={{ accentColor: ACCENT }}
              />
            </div>
            <div className="mb-1">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-ev-muted">
                  Target (reserve)
                </span>
                <span className="font-mono text-sm font-medium text-iris">
                  {targetPct}%
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={95}
                step={5}
                value={targetPct}
                onChange={(e) => {
                  const v = Number(e.target.value);
                  setTargetPct(Math.min(v, startPct - 5));
                }}
                className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-ev-border"
                style={{ accentColor: ACCENT }}
              />
            </div>
          </Reveal>

          {/* ── Results ────────────────────────────────────── */}
          <Reveal delay={120} className="space-y-6">
            {/* Headline range */}
            <div className="border-gradient relative overflow-hidden rounded-2xl bg-ev-card p-7 shadow-card">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-iris/15 blur-[80px]" />
              <div className="relative">
                <p className="font-mono text-[11px] uppercase tracking-wider text-ev-muted">
                  Estimated full-charge range
                </p>
                <div className="mt-1 flex items-baseline gap-2">
                  <Gauge className="h-7 w-7 text-volt" />
                  <Counter
                    key={`${Math.round(calc.estimated)}-${evId}`}
                    to={calc.estimated}
                    suffix=" km"
                    className="font-display text-4xl font-bold text-gradient-volt sm:text-5xl"
                  />
                </div>
                <p className="mt-3 max-w-md font-body text-sm text-ev-text/60">
                  For the <span className="text-ev-text">{ev.name}</span> under
                  your conditions — roughly{" "}
                  <span className="text-volt">
                    {calc.arai > 0
                      ? Math.round(calc.vsAraiPct)
                      : 0}
                    %
                  </span>{" "}
                  of the {inr(calc.arai)} km ARAI figure.
                </p>

                {/* range fill bar vs ARAI */}
                <div className="mt-5">
                  <div className="mb-1.5 flex items-center justify-between font-mono text-[11px] text-ev-muted">
                    <span>Estimated</span>
                    <span>ARAI {inr(calc.arai)} km</span>
                  </div>
                  <div className="relative h-4 overflow-hidden rounded-full bg-ev-card-2">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-iris to-volt transition-[width] duration-700 ease-out"
                      style={{ width: `${Math.max(3, fillPct)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* secondary range stats */}
            <div className="grid gap-4 sm:grid-cols-2">
              <StatCard
                icon={<BatteryCharging className="h-4 w-4" />}
                tone="iris"
                label={`Range at ${startPct}% now`}
                value={`${inr(calc.usableFull)} km`}
                sub={`${startPct}% of estimated`}
              />
              <StatCard
                icon={<Gauge className="h-4 w-4" />}
                tone="volt"
                label={`Usable to ${targetPct}% reserve`}
                value={`${inr(calc.usableToTarget)} km`}
                sub={`${Math.max(0, startPct - targetPct)}% window`}
              />
            </div>

            {/* derating chips */}
            <div className="rounded-2xl border border-ev-border bg-ev-card p-6 shadow-card">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-wider text-ev-muted">
                Derating factors applied
              </p>
              <div className="flex flex-wrap gap-2">
                <Chip
                  label="Style"
                  factor={calc.factors.style}
                />
                <Chip label="AC/Heat" factor={calc.factors.ac} />
                <Chip label="Route" factor={calc.factors.terrain} />
                <Chip label="Temp" factor={calc.factors.temp} />
              </div>
            </div>

            {/* charging summary */}
            <div className="rounded-2xl border border-ev-border bg-ev-card p-6 shadow-card">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-wider text-ev-muted">
                Charging back to 100% (adding {calc.addPct}%)
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {/* DC fast */}
                <div className="rounded-xl border border-ev-border bg-ev-surface/40 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-brand" />
                    <span className="font-mono text-[11px] uppercase tracking-wider text-ev-muted">
                      DC fast charge
                    </span>
                  </div>
                  {ev.fastChargeKw != null ? (
                    <>
                      <div className="font-display text-xl font-bold text-brand">
                        {calc.dcMinutes != null
                          ? `~${Math.round(calc.dcMinutes)} min`
                          : "—"}
                      </div>
                      <div className="mt-1 font-mono text-[11px] text-ev-muted">
                        {ev.fastChargeKw} kW peak
                      </div>
                      {ev.fastChargeTime && (
                        <div className="mt-1 font-mono text-[11px] text-ev-text/50">
                          OEM: {ev.fastChargeTime}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="font-mono text-xs text-ev-text/50">
                      {ev.fastChargeTime ?? "Not DC fast-charge capable"}
                    </div>
                  )}
                </div>

                {/* AC */}
                <div className="rounded-xl border border-ev-border bg-ev-surface/40 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Plug className="h-4 w-4 text-iris" />
                    <span className="font-mono text-[11px] uppercase tracking-wider text-ev-muted">
                      AC home charge
                    </span>
                  </div>
                  {ev.acChargeKw != null ? (
                    <>
                      <div className="font-display text-xl font-bold text-iris">
                        {calc.acMinutes != null
                          ? formatMinutes(calc.acMinutes)
                          : "—"}
                      </div>
                      <div className="mt-1 font-mono text-[11px] text-ev-muted">
                        {ev.acChargeKw} kW AC
                      </div>
                    </>
                  ) : (
                    <div className="font-mono text-xs text-ev-text/50">
                      {ev.chargeTimeFull ?? "See manufacturer charger spec"}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <p className="flex items-start gap-2 font-body text-xs leading-relaxed text-ev-muted">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ev-muted" />
              Estimate only. Real range and charge times depend on payload,
              tyre pressure, traffic, battery health, charger output and
              charging curve. DC times assume ~70% effective average power to
              account for tapering.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

/* ── helpers / sub-components ────────────────────────────── */

function formatMinutes(mins: number): string {
  if (mins < 90) return `~${Math.round(mins)} min`;
  const h = Math.floor(mins / 60);
  const m = Math.round(mins % 60);
  return m > 0 ? `~${h} hr ${m} min` : `~${h} hr`;
}

function Segmented<T extends string>({
  icon,
  label,
  options,
  value,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  options: ReadonlyArray<{ key: T; label: string; factor: number }>;
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="mb-5">
      <div className="mb-2 flex items-center gap-1.5">
        <span className="text-iris">{icon}</span>
        <span className="font-mono text-[11px] uppercase tracking-wider text-ev-muted">
          {label}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-1.5 rounded-xl border border-ev-border bg-ev-card-2 p-1">
        {options.map((o) => {
          const active = o.key === value;
          return (
            <button
              key={o.key}
              type="button"
              onClick={() => onChange(o.key)}
              className={`rounded-lg px-2 py-2 font-mono text-xs transition-all ${
                active
                  ? "bg-iris/15 text-iris shadow-ev-glow-sm"
                  : "text-ev-muted hover:text-ev-text"
              }`}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  sub,
  tone,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
  tone: "iris" | "volt";
}) {
  const toneText = tone === "iris" ? "text-iris" : "text-volt";
  const toneBg = tone === "iris" ? "bg-iris/10" : "bg-volt/10";
  return (
    <div className="rounded-2xl border border-ev-border bg-ev-card p-5 shadow-card card-hover">
      <div className="mb-3 flex items-center gap-2">
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-lg ${toneBg} ${toneText}`}
        >
          {icon}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-wider text-ev-muted">
          {label}
        </span>
      </div>
      <div className={`font-display text-2xl font-bold ${toneText}`}>
        {value}
      </div>
      <div className="mt-1 font-mono text-[11px] text-ev-muted">{sub}</div>
    </div>
  );
}

function Chip({ label, factor }: { label: string; factor: number }) {
  const pct = Math.round((factor - 1) * 100);
  const positive = pct >= 0;
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-ev-border bg-ev-surface/50 px-3 py-1.5">
      <span className="font-mono text-[11px] text-ev-muted">{label}</span>
      <span
        className={`font-mono text-[11px] font-medium ${
          positive ? "text-volt" : "text-ev-amber"
        }`}
      >
        {positive ? "+" : ""}
        {pct}%
      </span>
    </div>
  );
}
