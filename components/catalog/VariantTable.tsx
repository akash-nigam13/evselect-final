import { priceFromLakh, type EV } from "@/lib/ev-data";
import type { Locale } from "@/lib/i18n";

/**
 * Renders the full variant/trim lineup of a model as a table.
 * Returns null when the model has no variant data yet (graceful fallback).
 */
export default function VariantTable({ ev, locale = "en" }: { ev: EV; locale?: Locale }) {
  const variants = ev.variants;
  if (!variants || variants.length === 0) return null;
  const isHi = locale === "hi";

  const showBattery = variants.some((v) => v.batteryKwh != null);
  const showRange = variants.some((v) => v.rangeKm != null);
  const showPower = variants.some((v) => v.powerBhp != null);
  const showNote = variants.some((v) => v.note);

  const L = {
    eyebrow: isHi ? "वेरिएंट" : "Variants",
    title: isHi ? `${ev.name} के सभी वेरिएंट और कीमत` : `${ev.name} variants & prices`,
    variant: isHi ? "वेरिएंट" : "Variant",
    battery: isHi ? "बैटरी" : "Battery",
    range: isHi ? "रेंज" : "Range",
    power: isHi ? "पावर" : "Power",
    price: isHi ? "कीमत (एक्स-शोरूम)" : "Price (ex-showroom)",
    note: isHi
      ? "कीमतें संकेतात्मक एक्स-शोरूम हैं और शहर, वेरिएंट व ऑफ़र के अनुसार बदल सकती हैं। नवीनतम कीमत के लिए डीलर से पुष्टि करें।"
      : "Prices are indicative ex-showroom and vary by city, variant and offers. Confirm the latest with a dealer.",
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-brand">{L.eyebrow}</p>
      <h2 className="font-display text-3xl font-bold text-ev-text sm:text-4xl">{L.title}</h2>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-ev-border">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="bg-ev-card">
            <tr className="font-mono text-[11px] uppercase tracking-wider text-ev-muted">
              <th className="px-4 py-3.5">{L.variant}</th>
              {showBattery && <th className="px-4 py-3.5">{L.battery}</th>}
              {showRange && <th className="px-4 py-3.5">{L.range}</th>}
              {showPower && <th className="px-4 py-3.5">{L.power}</th>}
              <th className="px-4 py-3.5 text-right">{L.price}</th>
            </tr>
          </thead>
          <tbody>
            {variants.map((v, i) => (
              <tr key={`${v.name}-${i}`} className="border-t border-ev-border/60 hover:bg-ev-card/50">
                <td className="px-4 py-3.5">
                  <span className="font-display text-sm font-semibold text-ev-text">{v.name}</span>
                  {showNote && v.note && (
                    <span className="mt-0.5 block font-body text-xs text-ev-muted">{v.note}</span>
                  )}
                </td>
                {showBattery && (
                  <td className="px-4 py-3.5 font-mono text-xs text-ev-text/80">
                    {v.batteryKwh != null ? `${v.batteryKwh} kWh` : "—"}
                  </td>
                )}
                {showRange && (
                  <td className="px-4 py-3.5 font-mono text-xs text-ev-cyan">
                    {v.rangeKm != null ? `${v.rangeKm} km` : "—"}
                  </td>
                )}
                {showPower && (
                  <td className="px-4 py-3.5 font-mono text-xs text-ev-text/80">
                    {v.powerBhp != null ? `${v.powerBhp} bhp` : "—"}
                  </td>
                )}
                <td className="px-4 py-3.5 text-right font-mono text-sm font-semibold text-brand">
                  {v.priceLakh != null ? priceFromLakh(v.priceLakh) : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-3 font-body text-xs leading-relaxed text-ev-muted">{L.note}</p>
    </section>
  );
}
