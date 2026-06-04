"use client";

import { useEffect, useMemo, useState } from "react";
import { Banknote, Wallet, Percent, CalendarClock, Info } from "lucide-react";
import { EVS, getById, type EV } from "@/lib/ev-data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import VehiclePicker from "@/components/tools/VehiclePicker";

const ACCENT = "#8B7BFF";
const inr = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

const DEFAULT_ID = getById("tata-nexon-ev-long-range-45-kwh")
  ? "tata-nexon-ev-long-range-45-kwh"
  : EVS[0].id;

const priceOf = (ev: EV) =>
  ev.priceMinLakh != null ? Math.round(ev.priceMinLakh * 100000) : 1500000;

export default function EmiCalculator({ embedded = false }: { embedded?: boolean }) {
  const [evId, setEvId] = useState(DEFAULT_ID);
  const ev = getById(evId) ?? EVS[0];

  const [price, setPrice] = useState(priceOf(ev));
  const [downPct, setDownPct] = useState(15);
  const [rate, setRate] = useState(9.5);
  const [years, setYears] = useState(5);

  // Pre-fill from a ?ev= query param on mount, if it maps to a real vehicle.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const q = new URLSearchParams(window.location.search).get("ev");
    if (q && getById(q)) {
      setEvId(q);
      const e = getById(q);
      if (e) setPrice(e.priceMinLakh != null ? Math.round(e.priceMinLakh * 100000) : 1500000);
    }
  }, []);

  // When the chosen EV changes, reset the price to its ex-showroom figure.
  const onSelectEv = (id: string) => {
    setEvId(id);
    const next = getById(id);
    if (next) setPrice(priceOf(next));
  };

  const calc = useMemo(() => {
    const down = (price * downPct) / 100;
    const principal = Math.max(price - down, 0);
    const n = years * 12;
    const r = rate / 12 / 100;
    const emi = r === 0 ? principal / n : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayable = emi * n;
    const totalInterest = totalPayable - principal;
    return { down, principal, emi, totalPayable, totalInterest, n };
  }, [price, downPct, rate, years]);

  const interestPct = calc.totalPayable > 0 ? (calc.totalInterest / calc.totalPayable) * 100 : 0;

  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      {!embedded && (
        <SectionHeading
          align="left"
          eyebrow="EMI Calculator"
          title={<>Plan your <span className="text-gradient-brand">EV loan</span></>}
          subtitle="Estimate your monthly EMI, total interest and amount payable for any electric vehicle. Adjust the down payment, interest rate and tenure to see what fits your budget."
        />
      )}

      <Reveal className={`grid gap-6 lg:grid-cols-[1fr_1fr] ${embedded ? "" : "mt-10"}`}>
        {/* Inputs */}
        <div className="rounded-2xl border border-ev-border bg-ev-card p-6">
          {/* Vehicle picker — Type → Brand → Model (searchable) */}
          <div className="mb-6">
            <VehiclePicker value={evId} onChange={onSelectEv} />
          </div>

          {/* Price */}
          <div className="mb-5">
            <div className="mb-1 flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-body text-sm text-ev-text/80"><Banknote className="h-4 w-4 text-brand" /> On-road / vehicle price</span>
              <span className="font-mono text-sm font-semibold text-white">{inr(price)}</span>
            </div>
            <input type="range" min={300000} max={9000000} step={50000} value={price} onChange={(e) => setPrice(+e.target.value)} className="w-full accent-brand" />
          </div>

          {/* Down payment */}
          <div className="mb-5">
            <div className="mb-1 flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-body text-sm text-ev-text/80"><Wallet className="h-4 w-4 text-brand" /> Down payment</span>
              <span className="font-mono text-sm font-semibold text-white">{downPct}% · {inr(calc.down)}</span>
            </div>
            <input type="range" min={0} max={60} step={1} value={downPct} onChange={(e) => setDownPct(+e.target.value)} className="w-full accent-brand" />
          </div>

          {/* Interest rate */}
          <div className="mb-5">
            <div className="mb-1 flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-body text-sm text-ev-text/80"><Percent className="h-4 w-4 text-brand" /> Interest rate (p.a.)</span>
              <span className="font-mono text-sm font-semibold text-white">{rate.toFixed(1)}%</span>
            </div>
            <input type="range" min={6} max={18} step={0.1} value={rate} onChange={(e) => setRate(+e.target.value)} className="w-full accent-brand" />
          </div>

          {/* Tenure */}
          <div>
            <div className="mb-1 flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-body text-sm text-ev-text/80"><CalendarClock className="h-4 w-4 text-brand" /> Loan tenure</span>
              <span className="font-mono text-sm font-semibold text-white">{years} {years === 1 ? "year" : "years"}</span>
            </div>
            <input type="range" min={1} max={8} step={1} value={years} onChange={(e) => setYears(+e.target.value)} className="w-full accent-brand" />
          </div>
        </div>

        {/* Results */}
        <div className="flex flex-col rounded-2xl border border-iris/30 bg-ev-card-2 p-6">
          <p className="font-mono text-xs uppercase tracking-wider text-ev-muted">Your monthly EMI</p>
          <p className="mt-1 font-display text-4xl font-bold sm:text-5xl" style={{ color: ACCENT }}>
            {inr(calc.emi)}
          </p>
          <p className="mt-1 font-body text-xs text-ev-muted">over {calc.n} months</p>

          <div className="mt-6 space-y-3">
            {[
              { label: "Loan amount (principal)", value: inr(calc.principal) },
              { label: "Total interest payable", value: inr(calc.totalInterest) },
              { label: "Total amount payable", value: inr(calc.totalPayable) },
              { label: "Down payment", value: inr(calc.down) },
            ].map((r) => (
              <div key={r.label} className="flex items-center justify-between border-b border-ev-border/40 pb-2">
                <span className="font-body text-sm text-ev-muted">{r.label}</span>
                <span className="font-mono text-sm font-medium text-white">{r.value}</span>
              </div>
            ))}
          </div>

          {/* principal vs interest bar */}
          <div className="mt-6">
            <div className="mb-1.5 flex justify-between font-mono text-[11px] text-ev-muted">
              <span>Principal</span>
              <span>Interest {interestPct.toFixed(0)}%</span>
            </div>
            <div className="flex h-2.5 overflow-hidden rounded-full bg-ev-border">
              <div className="h-full bg-brand-gradient" style={{ width: `${100 - interestPct}%` }} />
              <div className="h-full" style={{ width: `${interestPct}%`, background: ACCENT }} />
            </div>
          </div>

          <p className="mt-6 flex items-start gap-2 rounded-xl border border-ev-border bg-ev-bg/40 p-3 font-body text-[11px] leading-relaxed text-ev-muted">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            Indicative estimate only — actual EMI depends on the on-road price, your lender, credit profile, processing fees and offers. Not financial advice. Confirm with your bank or dealer.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
