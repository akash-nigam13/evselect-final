"use client";

import { useMemo, useState } from "react";
import {
  Calculator,
  Zap,
  Fuel,
  TrendingDown,
  Leaf,
  Info,
} from "lucide-react";
import { EVS, getById, type EV } from "@/lib/ev-data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Counter from "@/components/ui/Counter";

/* ── helpers ─────────────────────────────────────────────── */

const ACCENT = "#26E0C4";
const CHARGE_LOSS = 1.1; // ~10% home-charging / conversion loss
const CO2_PER_LITRE = 2.31; // kg CO2 per litre of petrol burnt

const inr = (n: number) =>
  Math.round(n).toLocaleString("en-IN");

/** kWh consumed per km for a given EV, with sane fallbacks. */
function kWhPerKm(ev: EV): number {
  const real = ev.realRangeKm ?? (ev.rangeKmARAI != null ? ev.rangeKmARAI * 0.75 : null);
  if (ev.batteryKwh != null && real != null && real > 0) {
    return ev.batteryKwh / real;
  }
  // Fallback efficiency by category
  return ev.category === "car" ? 0.16 : 0.06; // cars heavier than 2-wheelers
}

const DEFAULT_ID = getById("tata-nexon-ev-long-range-45-kwh")
  ? "tata-nexon-ev-long-range-45-kwh"
  : EVS[0].id;

/* ── component ───────────────────────────────────────────── */

export default function CostCalculator() {
  const [evId, setEvId] = useState(DEFAULT_ID);
  const [annualKm, setAnnualKm] = useState(15000);
  const [tariff, setTariff] = useState(8);
  const [petrolPrice, setPetrolPrice] = useState(105);
  const [mileage, setMileage] = useState(18);
  const [years, setYears] = useState(5);

  const ev = getById(evId) ?? EVS[0];

  const calc = useMemo(() => {
    const perKm = kWhPerKm(ev);

    // Annual costs
    const evAnnual = annualKm * perKm * CHARGE_LOSS * tariff;
    const petrolAnnual = (annualKm / mileage) * petrolPrice;

    // Totals over horizon (no inflation)
    const evTotal = evAnnual * years;
    const petrolTotal = petrolAnnual * years;
    const savings = petrolTotal - evTotal;

    // Per-km running cost
    const evPerKm = perKm * CHARGE_LOSS * tariff;
    const petrolPerKm = petrolPrice / mileage;

    // CO2 avoided over horizon (tailpipe only)
    const litresPerYear = annualKm / mileage;
    const co2Total = litresPerYear * years * CO2_PER_LITRE; // kg

    const maxTotal = Math.max(evTotal, petrolTotal, 1);

    return {
      perKm,
      evAnnual,
      petrolAnnual,
      evTotal,
      petrolTotal,
      savings,
      evPerKm,
      petrolPerKm,
      co2Total,
      evBarPct: (evTotal / maxTotal) * 100,
      petrolBarPct: (petrolTotal / maxTotal) * 100,
    };
  }, [ev, annualKm, tariff, petrolPrice, mileage, years]);

  const saves = calc.savings >= 0;

  return (
    <div className="relative overflow-hidden py-20 sm:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="left"
          eyebrow="Tool 01 — Running Cost"
          title={
            <>
              EV vs Petrol{" "}
              <span className="text-gradient-brand">cost calculator</span>
            </>
          }
          subtitle="Adjust your driving habits and local rates to see what you'd actually spend on energy — and how much an EV saves over the years."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,420px)_1fr]">
          {/* ── Inputs ─────────────────────────────────────── */}
          <Reveal className="glass rounded-2xl border border-ev-border p-6 sm:p-7">
            <div className="mb-6 flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Calculator className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-bold text-white">
                Your inputs
              </h3>
            </div>

            {/* EV picker */}
            <label className="mb-5 block">
              <span className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-ev-muted">
                Choose your EV
              </span>
              <select
                value={evId}
                onChange={(e) => setEvId(e.target.value)}
                className="w-full rounded-xl border border-ev-border bg-ev-card-2 px-3.5 py-3 font-body text-sm text-ev-text outline-none transition-colors focus:border-brand"
                style={{ accentColor: ACCENT }}
              >
                {(["car", "scooter", "motorcycle"] as const).map((cat) => (
                  <optgroup
                    key={cat}
                    label={
                      cat === "car"
                        ? "Cars"
                        : cat === "scooter"
                        ? "Scooters"
                        : "Motorcycles"
                    }
                  >
                    {EVS.filter((v) => v.category === cat).map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.fullName}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <span className="mt-2 block font-mono text-[11px] text-brand/80">
                ~{calc.perKm.toFixed(3)} kWh/km efficiency
              </span>
            </label>

            <SliderRow
              label="Annual distance"
              value={annualKm}
              min={3000}
              max={40000}
              step={500}
              onChange={setAnnualKm}
              format={(v) => `${inr(v)} km/yr`}
            />
            <SliderRow
              label="Electricity tariff"
              value={tariff}
              min={4}
              max={15}
              step={0.5}
              onChange={setTariff}
              format={(v) => `₹${v.toFixed(1)} / kWh`}
            />
            <SliderRow
              label="Petrol price"
              value={petrolPrice}
              min={80}
              max={130}
              step={1}
              onChange={setPetrolPrice}
              format={(v) => `₹${inr(v)} / litre`}
            />
            <SliderRow
              label="Petrol vehicle mileage"
              value={mileage}
              min={8}
              max={35}
              step={1}
              onChange={setMileage}
              format={(v) => `${v} kmpl`}
            />
            <SliderRow
              label="Years to project"
              value={years}
              min={1}
              max={10}
              step={1}
              onChange={setYears}
              format={(v) => `${v} ${v === 1 ? "year" : "years"}`}
            />
          </Reveal>

          {/* ── Results ────────────────────────────────────── */}
          <Reveal delay={120} className="space-y-6">
            {/* Headline savings */}
            <div className="border-gradient relative overflow-hidden rounded-2xl bg-ev-card p-7 shadow-card">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/15 blur-[80px]" />
              <div className="relative">
                <p className="font-mono text-[11px] uppercase tracking-wider text-ev-muted">
                  {saves ? "You save over" : "Extra cost over"} {years}{" "}
                  {years === 1 ? "year" : "years"}
                </p>
                <div className="mt-1 flex items-baseline gap-2">
                  <TrendingDown
                    className={`h-7 w-7 ${
                      saves ? "text-brand" : "text-ev-amber"
                    }`}
                  />
                  <Counter
                    key={`${Math.round(calc.savings)}-${years}`}
                    to={Math.abs(calc.savings)}
                    prefix="₹"
                    className={`font-display text-4xl font-bold sm:text-5xl ${
                      saves ? "text-gradient-brand" : "text-ev-amber"
                    }`}
                  />
                </div>
                <p className="mt-3 max-w-md font-body text-sm text-ev-text/60">
                  Running the{" "}
                  <span className="text-ev-text">{ev.name}</span> on electricity
                  vs an equivalent {mileage} kmpl petrol vehicle, on energy /
                  fuel cost alone.
                </p>

                {/* CO2 chip */}
                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-volt/30 bg-volt/5 px-3.5 py-1.5">
                  <Leaf className="h-3.5 w-3.5 text-volt" />
                  <span className="font-mono text-xs text-volt">
                    ~{inr(calc.co2Total)} kg tailpipe CO₂ avoided
                  </span>
                </div>
              </div>
            </div>

            {/* EV vs Petrol totals */}
            <div className="grid gap-4 sm:grid-cols-2">
              <TotalCard
                icon={<Zap className="h-4 w-4" />}
                tone="brand"
                label="EV energy cost"
                total={calc.evTotal}
                annual={calc.evAnnual}
                perKm={calc.evPerKm}
              />
              <TotalCard
                icon={<Fuel className="h-4 w-4" />}
                tone="amber"
                label="Petrol fuel cost"
                total={calc.petrolTotal}
                annual={calc.petrolAnnual}
                perKm={calc.petrolPerKm}
              />
            </div>

            {/* Bar comparison */}
            <div className="rounded-2xl border border-ev-border bg-ev-card p-6 shadow-card">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-wider text-ev-muted">
                Total spend over {years} {years === 1 ? "year" : "years"}
              </p>
              <BarRow
                label="EV"
                value={calc.evTotal}
                pct={calc.evBarPct}
                tone="brand"
              />
              <BarRow
                label="Petrol"
                value={calc.petrolTotal}
                pct={calc.petrolBarPct}
                tone="amber"
              />
            </div>

            {/* Breakdown */}
            <div className="grid gap-4 sm:grid-cols-2">
              <MiniStat
                label="EV running cost"
                value={`₹${calc.evPerKm.toFixed(2)} / km`}
              />
              <MiniStat
                label="Petrol running cost"
                value={`₹${calc.petrolPerKm.toFixed(2)} / km`}
              />
            </div>

            <p className="flex items-start gap-2 font-body text-xs leading-relaxed text-ev-muted">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ev-muted" />
              Estimates only. Figures cover energy / fuel cost alone and exclude
              purchase price, insurance, maintenance, inflation and subsidies.
              Assumes ~10% home-charging loss; actuals vary with tariffs,
              driving style and conditions.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

/* ── sub-components ──────────────────────────────────────── */

function SliderRow({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
}) {
  return (
    <div className="mb-5">
      <div className="mb-2 flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-wider text-ev-muted">
          {label}
        </span>
        <span className="font-mono text-sm font-medium text-brand">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-ev-border"
        style={{ accentColor: ACCENT }}
      />
    </div>
  );
}

function TotalCard({
  icon,
  label,
  total,
  annual,
  perKm,
  tone,
}: {
  icon: React.ReactNode;
  label: string;
  total: number;
  annual: number;
  perKm: number;
  tone: "brand" | "amber";
}) {
  const toneText = tone === "brand" ? "text-brand" : "text-ev-amber";
  const toneBg = tone === "brand" ? "bg-brand/10" : "bg-ev-amber/10";
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
        ₹{inr(total)}
      </div>
      <div className="mt-2 space-y-1 font-mono text-[11px] text-ev-muted">
        <div>₹{inr(annual)} / year</div>
        <div>₹{perKm.toFixed(2)} / km</div>
      </div>
    </div>
  );
}

function BarRow({
  label,
  value,
  pct,
  tone,
}: {
  label: string;
  value: number;
  pct: number;
  tone: "brand" | "amber";
}) {
  const bar = tone === "brand" ? "bg-brand-gradient" : "bg-ev-amber";
  return (
    <div className="mb-4 last:mb-0">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="font-mono text-xs text-ev-text/70">{label}</span>
        <span className="font-mono text-xs font-medium text-ev-text">
          ₹{inr(value)}
        </span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-ev-card-2">
        <div
          className={`h-full rounded-full ${bar} transition-[width] duration-700 ease-out`}
          style={{ width: `${Math.max(2, pct)}%` }}
        />
      </div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-ev-border bg-ev-surface/40 px-4 py-3">
      <div className="font-mono text-[10px] uppercase tracking-wider text-ev-muted">
        {label}
      </div>
      <div className="mt-1 font-mono text-sm font-medium text-ev-text">
        {value}
      </div>
    </div>
  );
}
