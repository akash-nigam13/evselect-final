import Link from "next/link";
import { vehiclePath } from "@/lib/ev-data";
import { ArrowRight, BatteryCharging, Gauge, Zap, IndianRupee } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/seo";
import {
  getGuide, guideModels, guidePicks, guideFaqs, relatedGuides,
  guideTitle, brandName, TYPE_LC, TYPE_SINGULAR, TYPE_WORD, CAT_PATH, priceLabel,
} from "@/lib/brand-guide";

export default function BrandGuide({ slug }: { slug: string }) {
  const g = getGuide(slug);
  if (!g) return null;
  const name = brandName(g.brandSlug);
  const models = guideModels(g);
  const picks = guidePicks(g);
  const faqs = guideFaqs(g);
  const related = relatedGuides(g);
  const tw = TYPE_LC[g.category];
  const sing = TYPE_SINGULAR[g.category];
  const catPath = CAT_PATH[g.category];

  return (
    <>
      <p>
        Looking for {name} {tw} in India? This 2026 guide lists every {name}{" "}
        {sing} on sale right now — {models.length} models in total — with prices,
        real-world range, battery size and power, so you can compare the full
        lineup in one place and shortlist the right one. {name} is one of the{" "}
        <Link href={`/brand/${g.brandSlug}`}>brands you can explore in full</Link>{" "}
        on EVSelect, and below we break down its {sing} range model by model.
      </p>
      <p>
        Prices are indicative ex-showroom figures and can vary by city, variant
        and offers — always confirm the latest with the dealer. For a side-by-side
        spec battle, drop any two of these into our{" "}
        <Link href="/compare-electric-vehicles">EV comparison tool</Link>, and use
        the <Link href="/ev-calculators/ev-emi-calculator">EV EMI calculator</Link>{" "}
        to check the monthly cost before you decide.
      </p>

      <h2>Every {name} electric {TYPE_WORD[g.category].toLowerCase()} in India (2026)</h2>
      <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
        {models.map((ev, i) => (
          <div key={ev.id} className="rounded-2xl border border-ev-border bg-ev-card p-5">
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="font-display text-base font-bold text-white">
                {i + 1}. {ev.name}
              </h3>
              <span className="shrink-0 font-mono text-xs text-brand">{priceLabel(ev)}</span>
            </div>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-ev-muted">
              {ev.bodyType}
            </p>
            <div className="mt-3 flex flex-wrap gap-3 font-mono text-xs text-ev-text/70">
              {ev.rangeKmARAI && <span className="inline-flex items-center gap-1"><Gauge className="h-3.5 w-3.5 text-brand" /> {ev.rangeKmARAI} km</span>}
              {ev.batteryKwh && <span className="inline-flex items-center gap-1"><BatteryCharging className="h-3.5 w-3.5 text-brand" /> {ev.batteryKwh} kWh</span>}
              {ev.powerBhp && <span className="inline-flex items-center gap-1"><Zap className="h-3.5 w-3.5 text-brand" /> {ev.powerBhp} bhp</span>}
            </div>
            <Link
              href={vehiclePath(ev)}
              className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] font-medium text-brand hover:underline"
            >
              Full specs <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        ))}
      </div>

      <h2>{name} {TYPE_WORD[g.category].toLowerCase()} compared: price, range &amp; battery</h2>
      <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-ev-border">
        <table className="w-full text-left text-sm">
          <thead className="bg-ev-card">
            <tr className="font-mono text-[11px] uppercase tracking-wider text-ev-muted">
              <th className="px-4 py-3">Model</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Range</th>
              <th className="px-4 py-3">Battery</th>
              <th className="px-4 py-3">Power</th>
            </tr>
          </thead>
          <tbody>
            {models.map((ev) => (
              <tr key={ev.id} className="border-t border-ev-border/60">
                <td className="px-4 py-3 font-display text-xs font-semibold text-white">{ev.name}</td>
                <td className="px-4 py-3 text-xs text-ev-text/70">{priceLabel(ev)}</td>
                <td className="px-4 py-3 font-mono text-xs text-ev-cyan">{ev.rangeKmARAI ? `${ev.rangeKmARAI} km` : "—"}</td>
                <td className="px-4 py-3 text-xs text-ev-text/70">{ev.batteryKwh ? `${ev.batteryKwh} kWh` : "—"}</td>
                <td className="px-4 py-3 text-xs text-ev-text/70">{ev.powerBhp ? `${ev.powerBhp} bhp` : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Which {name} {sing} should you buy?</h2>
      <p>It depends on what matters most to you. Three quick picks from the {name} {tw} range:</p>
      <ul>
        {picks.cheapest && (
          <li>
            <strong>Best value / most affordable:</strong> the{" "}
            <Link href={vehiclePath(picks.cheapest)}>{picks.cheapest.name}</Link>{" "}
            at {priceLabel(picks.cheapest)} — the easiest way into the {name} {sing} range.
          </li>
        )}
        {picks.longest && picks.longest.rangeKmARAI && (
          <li>
            <strong>Longest range:</strong> the{" "}
            <Link href={vehiclePath(picks.longest)}>{picks.longest.name}</Link>{" "}
            with a claimed {picks.longest.rangeKmARAI} km — best for highway and long-distance use.
          </li>
        )}
        {picks.powerful && picks.powerful.powerBhp && (
          <li>
            <strong>Most powerful:</strong> the{" "}
            <Link href={vehiclePath(picks.powerful)}>{picks.powerful.name}</Link>{" "}
            making {picks.powerful.powerBhp} bhp — for buyers who want performance.
          </li>
        )}
      </ul>

      <h2>Before you buy a {name} {sing}</h2>
      <p>
        Whichever model you lean towards, weigh real-world range against your daily
        distance, check charging options where you park, and factor in running and
        maintenance savings versus petrol. Many EVs also qualify for{" "}
        <Link href="/ev-subsidies-india">central and state subsidies</Link> that
        lower the on-road price, and the{" "}
        <Link href="/ev-calculators/ev-vs-petrol-cost-calculator">
          EV vs petrol cost calculator
        </Link>{" "}
        shows how quickly the savings add up. Browse the full range of{" "}
        <Link href={catPath}>{tw} in India</Link> or the complete{" "}
        <Link href={`/brand/${g.brandSlug}`}>{name} lineup</Link> to widen your shortlist.
      </p>

      <h2>Frequently asked questions</h2>
      <div className="not-prose my-6 space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-2xl border border-ev-border bg-ev-card p-5">
            <summary className="cursor-pointer font-display text-sm font-bold text-white">{f.q}</summary>
            <p className="mt-3 font-body text-sm leading-relaxed text-ev-text/70">{f.a}</p>
          </details>
        ))}
      </div>

      {related.length > 0 && (
        <>
          <h2>More brand guides</h2>
          <ul>
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/blog/${r.slug}`}>{guideTitle(r).replace(": Models, Prices & Range", "")}</Link>
              </li>
            ))}
          </ul>
        </>
      )}

      <JsonLd data={faqPageSchema(faqs)} />
    </>
  );
}
