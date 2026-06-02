import { Info, AlertTriangle, CheckCircle, Lightbulb, Image } from "lucide-react";

/* ─────────────────────────────────────────────
   TYPOGRAPHY HELPERS
───────────────────────────────────────────── */

/** Article body paragraph */
export function P({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-ev-text/75 font-body text-base leading-[1.85] mb-5 ${className}`}>
      {children}
    </p>
  );
}

/** H2 section heading */
export function H2({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="font-display font-bold text-white text-2xl sm:text-3xl mt-14 mb-5 leading-tight scroll-mt-24"
    >
      {children}
    </h2>
  );
}

/** H3 sub-section heading */
export function H3({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h3
      id={id}
      className="font-display font-semibold text-white text-lg sm:text-xl mt-8 mb-3 leading-snug scroll-mt-24"
    >
      {children}
    </h3>
  );
}

/** Inline highlight */
export function Highlight({ children, color = "#00e5ff" }: { children: React.ReactNode; color?: string }) {
  return (
    <strong className="font-semibold" style={{ color }}>
      {children}
    </strong>
  );
}

/* ─────────────────────────────────────────────
   INFO BOXES
───────────────────────────────────────────── */

type BoxVariant = "info" | "tip" | "warning" | "success";

const boxConfig: Record<BoxVariant, { icon: React.ElementType; color: string; bg: string; border: string; label: string }> = {
  info:    { icon: Info,          color: "#00e5ff", bg: "#00e5ff0e", border: "#00e5ff25", label: "Note" },
  tip:     { icon: Lightbulb,     color: "#39ff14", bg: "#39ff140e", border: "#39ff1425", label: "Pro Tip" },
  warning: { icon: AlertTriangle, color: "#ffb800", bg: "#ffb8000e", border: "#ffb80025", label: "Important" },
  success: { icon: CheckCircle,   color: "#39ff14", bg: "#39ff140e", border: "#39ff1425", label: "Key Takeaway" },
};

export function InfoBox({ variant = "info", title, children }: { variant?: BoxVariant; title?: string; children: React.ReactNode }) {
  const { icon: Icon, color, bg, border, label } = boxConfig[variant];
  return (
    <div
      className="rounded-2xl p-5 my-8 border"
      style={{ backgroundColor: bg, borderColor: border }}
    >
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-4 h-4 shrink-0" style={{ color }} />
        <span className="text-xs font-mono uppercase tracking-widest" style={{ color }}>
          {title ?? label}
        </span>
      </div>
      <div className="text-ev-text/70 font-body text-sm leading-relaxed">{children}</div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   INFOGRAPHIC PLACEHOLDER
───────────────────────────────────────────── */

export function Infographic({
  alt,
  caption,
  designNote,
  aspectRatio = "16/7",
  accentColor = "#00e5ff",
}: {
  alt: string;
  caption: string;
  designNote: string;
  aspectRatio?: string;
  accentColor?: string;
}) {
  return (
    <figure className="my-10" role="img" aria-label={alt}>
      <div
        className="relative rounded-2xl border border-dashed overflow-hidden flex flex-col items-center justify-center gap-4 text-center px-6 py-10"
        style={{
          aspectRatio,
          borderColor: `${accentColor}35`,
          background: `radial-gradient(ellipse 60% 60% at 50% 50%, ${accentColor}08, #050b14)`,
        }}
      >
        {/* Corner accents */}
        {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((pos) => (
          <div
            key={pos}
            className={`absolute ${pos} w-5 h-5 border-2`}
            style={{
              borderColor: `${accentColor}50`,
              borderTopWidth: pos.includes("bottom") ? 0 : 2,
              borderBottomWidth: pos.includes("top") ? 0 : 2,
              borderLeftWidth: pos.includes("right") ? 0 : 2,
              borderRightWidth: pos.includes("left") ? 0 : 2,
            }}
          />
        ))}
        <Image className="w-10 h-10 opacity-30" style={{ color: accentColor }} />
        <div className="max-w-lg">
          <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: accentColor }}>
            Infographic Placeholder
          </p>
          <p className="text-ev-text/60 font-body text-sm leading-relaxed">{designNote}</p>
        </div>
      </div>
      <figcaption className="mt-3 text-xs font-body text-ev-muted text-center italic leading-relaxed">
        {caption}
      </figcaption>
    </figure>
  );
}

/* ─────────────────────────────────────────────
   KEY STAT CARD
───────────────────────────────────────────── */

export function KeyStat({ value, label, sub, color = "#00e5ff" }: { value: string; label: string; sub?: string; color?: string }) {
  return (
    <div
      className="bg-ev-card border border-ev-border rounded-2xl p-5 text-center relative overflow-hidden"
    >
      <div
        className="absolute inset-x-0 top-0 h-0.5"
        style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
      />
      <div className="font-display font-black text-3xl sm:text-4xl mb-1" style={{ color }}>
        {value}
      </div>
      <div className="font-body text-sm text-white font-medium mb-0.5">{label}</div>
      {sub && <div className="font-mono text-[11px] text-ev-muted">{sub}</div>}
    </div>
  );
}

/** Grid of KeyStat cards */
export function StatGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-10">{children}</div>;
}

/* ─────────────────────────────────────────────
   DATA TABLE
───────────────────────────────────────────── */

export function DataTable({
  caption,
  headers,
  rows,
  accentCol = 0,
  accentColor = "#00e5ff",
}: {
  caption?: string;
  headers: string[];
  rows: (string | React.ReactNode)[][];
  accentCol?: number;
  accentColor?: string;
}) {
  return (
    <div className="my-10 overflow-x-auto rounded-2xl border border-ev-border">
      {caption && (
        <div className="px-5 py-3 border-b border-ev-border bg-ev-surface/30">
          <p className="text-xs font-mono text-ev-muted uppercase tracking-widest">{caption}</p>
        </div>
      )}
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-ev-border bg-ev-surface/20">
            {headers.map((h, i) => (
              <th
                key={h}
                className="px-5 py-3 text-left font-mono text-[11px] uppercase tracking-wider"
                style={{ color: i === accentCol ? accentColor : "#4a6fa5" }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={`border-b border-ev-border/40 ${ri % 2 !== 0 ? "bg-ev-surface/10" : ""}`}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className="px-5 py-3 font-body"
                  style={{
                    color: ci === accentCol ? accentColor : ci === 0 ? "#ffffff" : "#c8dff5aa",
                    fontFamily: ci === accentCol ? "var(--font-mono)" : "var(--font-body)",
                    fontSize: ci === accentCol ? "13px" : "13px",
                    fontWeight: ci === 0 ? 600 : 400,
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─────────────────────────────────────────────
   AD PLACEHOLDER (article inline)
───────────────────────────────────────────── */

export function ArticleAd({ slot }: { slot: string }) {
  return (
    <div className="my-10 border border-dashed border-ev-border/40 rounded-xl h-[90px] flex items-center justify-center bg-ev-surface/20">
      <div className="text-center">
        <p className="text-[10px] font-mono text-ev-border uppercase tracking-widest">Advertisement</p>
        <p className="text-[10px] font-mono text-ev-border/50 mt-0.5">728×90 Leaderboard · Slot: {slot}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SOURCES & REFERENCES
───────────────────────────────────────────── */

export function Sources({ sources }: { sources: { label: string; url: string }[] }) {
  return (
    <section className="mt-16 pt-8 border-t border-ev-border/40">
      <h2 className="font-display font-bold text-white text-xl mb-5 flex items-center gap-3">
        <span className="w-1 h-5 rounded-full bg-ev-muted inline-block" />
        Sources &amp; References
      </h2>
      <ol className="space-y-2 pl-2">
        {sources.map(({ label, url }, i) => (
          <li key={i} className="flex items-start gap-3 text-sm font-body text-ev-text/60">
            <span className="font-mono text-[11px] text-ev-muted shrink-0 mt-0.5 w-5">{i + 1}.</span>
            <span>
              {label}{" "}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] text-ev-muted hover:text-ev-cyan transition-colors break-all"
              >
                [{url}]
              </a>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ─────────────────────────────────────────────
   DISCLAIMER
───────────────────────────────────────────── */

export function Disclaimer() {
  return (
    <div className="mt-10 p-5 bg-ev-surface/40 border border-ev-border/40 rounded-2xl">
      <p className="text-[10px] font-mono text-ev-muted uppercase tracking-widest mb-2">Disclaimer</p>
      <p className="text-xs font-body text-ev-text/50 leading-relaxed">
        The information published on EVSelect.in is for general informational and educational purposes
        only. While we strive for accuracy, EV specifications, pricing, and availability change
        frequently. All prices mentioned are indicative ex-showroom figures based on publicly available
        data at the time of writing; actual prices may vary by state, variant, and dealership.
        Always verify current details directly with the manufacturer or an authorised dealer before
        making a purchase decision. EVSelect.in is an independent platform and is not affiliated with
        any vehicle manufacturer or government body. We are not responsible for decisions made based
        on the content of this article.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   BULLET LIST
───────────────────────────────────────────── */

export function BulletList({ items, color = "#00e5ff" }: { items: (string | React.ReactNode)[]; color?: string }) {
  return (
    <ul className="space-y-2.5 my-5 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-ev-text/70 font-body text-sm leading-relaxed">
          <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: color }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ─────────────────────────────────────────────
   SCOOTER / VEHICLE CARD
───────────────────────────────────────────── */

export interface VehicleCardProps {
  rank: number;
  name: string;
  brand: string;
  price: string;
  range: string;
  topSpeed: string;
  chargingTime: string;
  batteryKwh: string;
  highlight: string;
  accent: string;
  pros: string[];
  cons: string[];
}

export function VehicleCard(v: VehicleCardProps) {
  return (
    <div
      className="bg-ev-card border border-ev-border rounded-2xl overflow-hidden my-8"
      style={{ borderTopColor: v.accent, borderTopWidth: 2 }}
    >
      <div className="px-6 py-5">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center font-display font-black text-sm"
                style={{ backgroundColor: `${v.accent}20`, color: v.accent }}
              >
                {v.rank}
              </span>
              <span className="text-xs font-mono text-ev-muted">{v.brand}</span>
            </div>
            <h3 className="font-display font-bold text-white text-xl">{v.name}</h3>
          </div>
          <div className="text-right shrink-0">
            <div className="font-display font-black text-lg" style={{ color: v.accent }}>{v.price}</div>
            <div className="text-xs font-mono text-ev-muted">ex-showroom</div>
          </div>
        </div>

        {/* Specs grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {[
            { label: "ARAI Range", value: v.range },
            { label: "Top Speed",  value: v.topSpeed },
            { label: "Charge Time",value: v.chargingTime },
            { label: "Battery",    value: v.batteryKwh },
          ].map(({ label, value }) => (
            <div key={label} className="bg-ev-surface/60 rounded-xl px-3 py-2.5 text-center">
              <div className="font-mono text-sm font-semibold" style={{ color: v.accent }}>{value}</div>
              <div className="text-ev-muted text-[10px] font-body mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        {/* Highlight */}
        <div
          className="rounded-xl px-4 py-2.5 mb-4 text-sm font-body"
          style={{ backgroundColor: `${v.accent}10`, borderLeft: `3px solid ${v.accent}` }}
        >
          <span className="text-ev-muted text-xs font-mono mr-2">WHY BUY:</span>
          <span className="text-ev-text/80">{v.highlight}</span>
        </div>

        {/* Pros / Cons */}
        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <p className="text-xs font-mono text-ev-green uppercase tracking-wider mb-2">Pros</p>
            <ul className="space-y-1">
              {v.pros.map((p) => (
                <li key={p} className="flex items-start gap-2 text-xs font-body text-ev-text/65">
                  <span className="text-ev-green mt-0.5">✓</span> {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-mono text-ev-amber uppercase tracking-wider mb-2">Cons</p>
            <ul className="space-y-1">
              {v.cons.map((c) => (
                <li key={c} className="flex items-start gap-2 text-xs font-body text-ev-text/65">
                  <span className="text-ev-amber mt-0.5">–</span> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
