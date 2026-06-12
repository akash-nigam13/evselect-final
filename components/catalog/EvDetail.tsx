import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  BatteryCharging,
  Gauge,
  Zap,
  Timer,
  Check,
  Plug,
  Settings2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";
import AdPlaceholder from "@/components/AdPlaceholder";
import Counter from "@/components/ui/Counter";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import VehiclePhoto from "@/components/catalog/VehiclePhoto";
import ToolsCTA from "@/components/ToolsCTA";
import { EVS, priceLabel, brandSlug, type EV, vehiclePath } from "@/lib/ev-data";
import { productSchema, faqPageSchema } from "@/lib/seo";
import { Locale, t, localizedHref } from "@/lib/i18n";
import { featureHi } from "@/lib/feature-hi";
import { evOverview, evFaqs } from "@/lib/ev-content";

type SpecRow = { label: string; value: string };

function specRows(rows: (SpecRow | null)[]): SpecRow[] {
  return rows.filter((r): r is SpecRow => r !== null);
}

function row(label: string, value: string | number | null, suffix = ""): SpecRow | null {
  if (value == null || value === "") return null;
  return { label, value: `${value}${suffix}` };
}

/** Pick up to 3 same-category EVs nearest in price. */
function similarEvs(ev: EV): EV[] {
  const base = ev.priceMinLakh;
  return EVS.filter((o) => o.category === ev.category && o.id !== ev.id)
    .map((o) => ({
      ev: o,
      dist:
        base != null && o.priceMinLakh != null
          ? Math.abs(o.priceMinLakh - base)
          : Number.POSITIVE_INFINITY,
    }))
    .sort((a, b) => a.dist - b.dist)
    .slice(0, 3)
    .map((x) => x.ev);
}

function catKeyFor(ev: EV): "ev.catcar" | "ev.catscooter" | "ev.catbike" {
  if (ev.category === "motorcycle") return "ev.catbike";
  if (ev.category === "scooter") return "ev.catscooter";
  return "ev.catcar";
}

/** Auto-generated Hindi intro paragraph built from the vehicle's own data. */
function summaryHi(ev: EV): string {
  const cat = t(catKeyFor(ev), "hi");
  let s = t("ev.summary", "hi")
    .replace("{name}", ev.name)
    .replace("{cat}", cat)
    .replace("{body}", ev.bodyType);
  const bits: string[] = [];
  if (ev.batteryKwh != null) bits.push(`${ev.batteryKwh} kWh बैटरी`);
  if (ev.rangeKmARAI != null) bits.push(`ARAI के अनुसार ${ev.rangeKmARAI} km रेंज`);
  if (ev.powerBhp != null) bits.push(`${ev.powerBhp} bhp पावर`);
  if (bits.length) s += ` इसमें ${bits.join(", ")} मिलती है।`;
  s += ` एक्स-शोरूम कीमत ${priceLabel(ev)} से शुरू होती है।`;
  return s;
}

export default function EvDetail({ ev, locale = "en" }: { ev: EV; locale?: Locale }) {
  const isHi = locale === "hi";
  const L = (en: string, hiKey: string) => (isHi ? t(hiKey, "hi") : en);
  const href = (p: string) => localizedHref(p, locale);
  const catLabel = t(catKeyFor(ev), locale);

  const battery = specRows([
    row(L("Battery", "row.battery"), ev.batteryKwh, " kWh"),
    row(L("Range (ARAI)", "row.rangeArai"), ev.rangeKmARAI, " km"),
    row(L("Real-world range", "row.rangeReal"), ev.realRangeKm, " km"),
  ]);

  const performance = specRows([
    row(L("Power", "row.power"), ev.powerBhp, " bhp"),
    row(L("Torque", "row.torque"), ev.torqueNm, " Nm"),
    ev.accelSec != null
      ? { label: ev.accelNote ?? L("Acceleration", "row.accel"), value: `${ev.accelSec} s` }
      : null,
    row(L("Top speed", "row.top"), ev.topSpeedKmph, " km/h"),
  ]);

  const charging = specRows([
    row(L("Fast charge (DC)", "row.fastkw"), ev.fastChargeKw, " kW"),
    row(L("Fast charge time", "row.fasttime"), ev.fastChargeTime),
    row(L("AC charging", "ev.acCharge"), ev.acChargeKw, " kW"),
    row(L("Full charge time", "ev.fullChargeTime"), ev.chargeTimeFull),
  ]);

  const practicality = specRows([
    row(L("Body type", "row.body"), ev.bodyType),
    row(L("Drive type", "row.drive"), ev.driveType),
    row(L("Seating", "row.seat"), ev.seating),
    row(L("Boot space", "row.boot"), ev.bootLitres, " L"),
    row(L("Kerb weight", "row.weight"), ev.kerbWeightKg, " kg"),
    row(L("Model year", "row.year"), ev.year),
  ]);

  const specGroups: { title: string; icon: typeof BatteryCharging; rows: SpecRow[] }[] = [
    { title: L("Battery & Range", "ev.grpBattery"), icon: BatteryCharging, rows: battery },
    { title: L("Performance", "ev.grpPerf"), icon: Gauge, rows: performance },
    { title: L("Charging", "ev.grpCharging"), icon: Plug, rows: charging },
    { title: L("Practicality", "ev.grpPractical"), icon: Settings2, rows: practicality },
  ].filter((g) => g.rows.length > 0);

  const similar = similarEvs(ev);
  const overview = evOverview(ev, locale);
  const faqs = evFaqs(ev, locale);

  type Tile =
    | { kind: "counter"; icon: typeof Zap; label: string; to: number; decimals: number; suffix: string }
    | { kind: "text"; icon: typeof Zap; label: string; value: string };

  const tiles: Tile[] = [];
  if (ev.rangeKmARAI != null)
    tiles.push({ kind: "counter", icon: Gauge, label: L("ARAI Range", "ev.tileRange"), to: ev.rangeKmARAI, decimals: 0, suffix: " km" });
  if (ev.batteryKwh != null)
    tiles.push({ kind: "counter", icon: BatteryCharging, label: L("Battery", "row.battery"), to: ev.batteryKwh, decimals: ev.batteryKwh % 1 === 0 ? 0 : 1, suffix: " kWh" });
  if (ev.powerBhp != null)
    tiles.push({ kind: "counter", icon: Zap, label: L("Power", "row.power"), to: ev.powerBhp, decimals: ev.powerBhp % 1 === 0 ? 0 : 1, suffix: " bhp" });
  if (ev.accelSec != null)
    tiles.push({ kind: "counter", icon: Timer, label: ev.accelNote ?? L("Acceleration", "ev.tileAccel"), to: ev.accelSec, decimals: ev.accelSec % 1 === 0 ? 0 : 1, suffix: " s" });
  else if (ev.topSpeedKmph != null)
    tiles.push({ kind: "counter", icon: Timer, label: L("Top speed", "row.top"), to: ev.topSpeedKmph, decimals: 0, suffix: " km/h" });

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <Aurora variant="brand" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background: `radial-gradient(60% 50% at 75% 0%, color-mix(in srgb, ${ev.accent} 18%, transparent), transparent 70%)`,
            }}
          />
          <div className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pt-14 lg:px-8">
            <Breadcrumbs
              homeName={isHi ? "होम" : "Home"}
              homeHref={isHi ? "/hi" : "/"}
              items={[
                { name: t("nav.catalog", locale), path: href("/catalog") },
                { name: ev.brand, path: href(`/brand/${brandSlug(ev.brand)}`) },
                { name: ev.name, path: href(vehiclePath(ev)) },
              ]}
              className="mb-5"
            />
            <Link
              href={href("/catalog")}
              className="link-underline mb-8 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.18em] text-ev-muted transition-colors hover:text-brand"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              {L("Back to catalog", "ev.back")}
            </Link>

            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <span
                  className="inline-flex items-center rounded-full border px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.18em]"
                  style={{
                    color: ev.accent,
                    borderColor: `color-mix(in srgb, ${ev.accent} 35%, transparent)`,
                    backgroundColor: `color-mix(in srgb, ${ev.accent} 10%, transparent)`,
                  }}
                >
                  {ev.bodyType} · {catLabel}
                </span>
                {ev.upcoming && (
                  <span className="ml-2 inline-flex items-center rounded-full border border-iris/40 bg-iris/10 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-iris">
                    {t("card.upcoming", locale)}
                  </span>
                )}

                <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-ev-text sm:text-5xl lg:text-6xl text-balance">
                  {ev.name}
                </h1>
                {ev.variant && (
                  <p className="mt-2 font-body text-lg text-ev-muted">{ev.variant}</p>
                )}

                <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-mono text-3xl font-bold text-brand sm:text-4xl">
                    {priceLabel(ev)}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-ev-muted">
                    {L("ex-showroom", "ev.exShowroom")}
                  </span>
                </div>

                {isHi && (
                  <p className="mt-6 max-w-xl font-body text-sm leading-relaxed text-ev-text/70">
                    {summaryHi(ev)}
                  </p>
                )}
              </div>

              {/* Right column: photo + stats */}
              <div className="space-y-4">
                <VehiclePhoto id={ev.id} image={ev.image ?? null} accent={ev.accent} name={ev.fullName} />
                {tiles.length > 0 && (
                  <div className="grid grid-cols-2 gap-3">
                    {tiles.map((tile) => {
                      const Icon = tile.icon;
                      return (
                        <div
                          key={tile.label}
                          className="rounded-2xl border border-ev-border bg-ev-card/70 p-4 shadow-card"
                        >
                          <Icon className="h-5 w-5" style={{ color: ev.accent }} />
                          <p className="mt-3 font-mono text-2xl font-bold text-ev-text">
                            {tile.kind === "counter" ? (
                              <Counter to={tile.to} decimals={tile.decimals} suffix={tile.suffix} />
                            ) : (
                              tile.value
                            )}
                          </p>
                          <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-ev-muted">
                            {tile.label}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Primary CTA */}
            <div className="mt-10">
              <Link
                href={href(`/compare-electric-vehicles?ids=${ev.id}`)}
                className="group inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-6 py-3 font-body text-sm font-semibold text-ev-bg shadow-ev-glow-sm transition-transform duration-200 hover:-translate-y-0.5"
              >
                {L("Compare this EV", "ev.compareThis")}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Specs */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-brand">
            {L("Specifications", "ev.specsEyebrow")}
          </p>
          <h2 className="font-display text-3xl font-bold text-ev-text sm:text-4xl">
            {L("The full picture", "ev.specsTitle")}
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {specGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.title} className="rounded-2xl border border-ev-border bg-ev-card p-6">
                  <div className="mb-5 flex items-center gap-2.5">
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `color-mix(in srgb, ${ev.accent} 14%, transparent)` }}
                    >
                      <Icon className="h-4 w-4" style={{ color: ev.accent }} />
                    </span>
                    <h3 className="font-display text-lg font-bold text-ev-text">{group.title}</h3>
                  </div>
                  <dl className="divide-y divide-ev-border">
                    {group.rows.map((r) => (
                      <div key={r.label} className="flex items-center justify-between gap-4 py-3">
                        <dt className="font-body text-sm text-ev-muted">{r.label}</dt>
                        <dd className="text-right font-mono text-sm font-medium text-ev-text">{r.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              );
            })}
          </div>
        </section>

        {/* Highlights */}
        {ev.notableFeatures.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-ev-border bg-ev-surface/50 p-6 sm:p-8">
              <h2 className="font-display text-2xl font-bold text-ev-text">
                {L("Highlights", "ev.highlights")}
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {ev.notableFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full"
                      style={{ backgroundColor: `color-mix(in srgb, ${ev.accent} 18%, transparent)` }}
                    >
                      <Check className="h-3 w-3" style={{ color: ev.accent }} />
                    </span>
                    <span className="font-body text-sm text-ev-text">{isHi ? featureHi(f) : f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* SEO overview */}
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="prose-ev max-w-3xl">
            <h2>{ev.name} — {isHi ? "ओवरव्यू, कीमत और स्पेसिफिकेशन" : "overview, price & specifications"}</h2>
            {overview.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <p className="text-sm">
              {isHi ? "और देखें: " : "Explore more: "}
              <Link href={href(`/compare-electric-vehicles?ids=${ev.id}`)}>{isHi ? `${ev.name} की तुलना` : `compare the ${ev.name}`}</Link>,{" "}
              <Link href={href(`/brand/${brandSlug(ev.brand)}`)}>{isHi ? `सभी ${ev.brand} EVs` : `all ${ev.brand} EVs`}</Link>,{" "}
              <Link href={href("/ev-subsidies-india")}>{isHi ? "EV सब्सिडी" : "EV subsidies"}</Link> {isHi ? "और" : "and the"}{" "}
              <Link href={href(`/ev-calculators/ev-emi-calculator?ev=${ev.id}`)}>{isHi ? "EMI कैलकुलेटर" : "EMI calculator"}</Link>.
            </p>
          </div>
        </section>

        {/* Leaderboard ad */}
        <div className="mx-auto my-10 max-w-7xl px-4 sm:px-6 lg:px-8">
          <AdPlaceholder format="leaderboard" slot="4444444444" />
        </div>

        {/* Tools CTA */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ToolsCTA locale={locale} evId={ev.id} tools={["emi", "cost", "compare"]} className="my-10" />
        </div>

        {/* Compare with similar */}
        {similar.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-iris">
              {L("Compare with similar", "ev.similarEyebrow")}
            </p>
            <h2 className="font-display text-3xl font-bold text-ev-text sm:text-4xl">
              {L("Closest rivals", "ev.closestRivals")}
            </h2>
            <p className="mt-3 max-w-xl font-body text-sm text-ev-muted">
              {(isHi ? t("ev.similarSub", "hi") : "{cat} priced nearest to the {name}. Put them head-to-head in the compare tool.")
                .replace("{cat}", catLabel)
                .replace("{name}", ev.name)}
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map((other) => (
                <Link
                  key={other.id}
                  href={href(`/compare-electric-vehicles?ids=${ev.id},${other.id}`)}
                  className="card-hover group flex flex-col rounded-2xl border border-ev-border bg-ev-card p-5"
                >
                  <span
                    className="inline-flex w-fit items-center rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em]"
                    style={{ color: other.accent, borderColor: `color-mix(in srgb, ${other.accent} 35%, transparent)` }}
                  >
                    {other.bodyType}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-ev-text">{other.name}</h3>
                  <p className="mt-1 font-mono text-sm font-semibold text-brand">{priceLabel(other)}</p>
                  <div className="mt-4 flex items-center gap-4 font-mono text-xs text-ev-muted">
                    <span>{other.rangeKmARAI != null ? `${other.rangeKmARAI} km` : "—"}</span>
                    <span>{other.batteryKwh != null ? `${other.batteryKwh} kWh` : "—"}</span>
                    <span>{other.powerBhp != null ? `${other.powerBhp} bhp` : "—"}</span>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-body text-sm font-medium text-iris">
                    {L("Compare both", "ev.compareBoth")}
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-ev-text sm:text-3xl">
            {isHi ? "अक्सर पूछे जाने वाले सवाल" : "Frequently asked questions"}
          </h2>
          <div className="mt-6 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-ev-border bg-ev-card p-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-sm font-bold text-white">
                  {f.q}
                  <span className="text-brand transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 font-body text-sm leading-relaxed text-ev-text/70">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-ev-border bg-ev-card-2 p-8 text-center sm:p-12">
            <Aurora variant="dual" />
            <h2 className="font-display text-2xl font-bold text-ev-text sm:text-3xl">
              {L("Ready to make a decision?", "ev.ctaTitle")}
            </h2>
            <p className="mx-auto mt-3 max-w-md font-body text-sm text-ev-muted">
              {(isHi ? t("ev.ctaSub", "hi") : "Stack the {name} against any other EV — specs, charging and value, side by side.").replace("{name}", ev.name)}
            </p>
            <Link
              href={href(`/compare-electric-vehicles?ids=${ev.id}`)}
              className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-6 py-3 font-body text-sm font-semibold text-ev-bg shadow-ev-glow transition-transform duration-200 hover:-translate-y-0.5"
            >
              {L("Compare this EV", "ev.compareThis")}
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
      <JsonLd data={[productSchema(ev), faqPageSchema(faqs)]} />
    </>
  );
}
