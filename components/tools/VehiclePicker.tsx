"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Search, Check } from "lucide-react";
import { EVS, getById, type EVCategory } from "@/lib/ev-data";

/* ── A small searchable dropdown (combobox) ──────────────────────── */
type Opt = { value: string; label: string };

function Combobox({
  label,
  value,
  options,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  options: Opt[];
  onChange: (v: string) => void;
  placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const selected = options.find((o) => o.value === value);
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    return s ? options.filter((o) => o.label.toLowerCase().includes(s)) : options;
  }, [q, options]);

  return (
    <div ref={ref} className="relative min-w-0">
      <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-ev-muted">{label}</label>
      <button
        type="button"
        onClick={() => { setOpen((o) => !o); setQ(""); }}
        className="flex w-full items-center justify-between gap-1.5 rounded-xl border border-ev-border bg-ev-bg px-3 py-2.5 text-left font-body text-sm text-ev-text outline-none transition-colors hover:border-ev-border/80 focus:border-brand/50"
      >
        <span className="truncate">{selected?.label ?? placeholder}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-ev-muted transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute z-30 mt-1.5 w-full overflow-hidden rounded-xl border border-ev-border bg-ev-surface shadow-card">
          <div className="flex items-center gap-2 border-b border-ev-border/60 px-3 py-2">
            <Search className="h-3.5 w-3.5 shrink-0 text-ev-muted" />
            {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
            <input
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={`Search ${label.toLowerCase()}…`}
              className="w-full bg-transparent font-body text-sm text-ev-text outline-none placeholder:text-ev-muted"
            />
          </div>
          <ul className="max-h-56 overflow-y-auto p-1">
            {filtered.length === 0 && (
              <li className="px-3 py-2 font-body text-xs text-ev-muted">No matches</li>
            )}
            {filtered.map((o) => (
              <li key={o.value}>
                <button
                  type="button"
                  onClick={() => { onChange(o.value); setOpen(false); }}
                  className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left font-body text-sm transition-colors hover:bg-brand/10 ${o.value === value ? "text-brand" : "text-ev-text/85"}`}
                >
                  <span className="truncate">{o.label}</span>
                  {o.value === value && <Check className="h-3.5 w-3.5 shrink-0 text-brand" />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ── Cascading Type → Brand → Model picker ───────────────────────── */
const TYPE_LABEL: Record<EVCategory, string> = { car: "Car", scooter: "Scooter", motorcycle: "Bike" };
const TYPE_OPTS: Opt[] = [
  { value: "car", label: "Cars" },
  { value: "scooter", label: "Scooters" },
  { value: "motorcycle", label: "Bikes" },
];

const modelLabel = (id: string) => {
  const e = getById(id);
  if (!e) return id;
  return e.name + (e.variant ? ` — ${e.variant}` : "");
};

export default function VehiclePicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (id: string) => void;
}) {
  const current = getById(value) ?? EVS[0];
  const [type, setType] = useState<EVCategory>(current.category);
  const [brand, setBrand] = useState<string>(current.brand);

  // Keep type/brand in sync when the vehicle is set externally (e.g. ?ev= prefill).
  useEffect(() => {
    const e = getById(value);
    if (e) { setType(e.category); setBrand(e.brand); }
  }, [value]);

  const brandOpts = useMemo<Opt[]>(() => {
    const set = Array.from(new Set(EVS.filter((e) => e.category === type).map((e) => e.brand))).sort();
    return set.map((b) => ({ value: b, label: b }));
  }, [type]);

  const modelOpts = useMemo<Opt[]>(
    () => EVS.filter((e) => e.category === type && e.brand === brand).map((e) => ({ value: e.id, label: modelLabel(e.id) })),
    [type, brand]
  );

  const pickType = (t: string) => {
    const cat = t as EVCategory;
    setType(cat);
    const firstBrand = Array.from(new Set(EVS.filter((e) => e.category === cat).map((e) => e.brand))).sort()[0];
    setBrand(firstBrand);
    const firstModel = EVS.find((e) => e.category === cat && e.brand === firstBrand);
    if (firstModel) onChange(firstModel.id);
  };

  const pickBrand = (b: string) => {
    setBrand(b);
    const firstModel = EVS.find((e) => e.category === type && e.brand === b);
    if (firstModel) onChange(firstModel.id);
  };

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      <Combobox label="Type" value={type} options={TYPE_OPTS} onChange={pickType} placeholder="Type" />
      <Combobox label="Brand" value={brand} options={brandOpts} onChange={pickBrand} placeholder="Brand" />
      <Combobox label="Model" value={value} options={modelOpts} onChange={onChange} placeholder="Model" />
    </div>
  );
}
