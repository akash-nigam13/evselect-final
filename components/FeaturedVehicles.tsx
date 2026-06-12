import Link from "next/link";
import { ArrowRight, Gauge, BatteryCharging, Zap } from "lucide-react";
import { getById, EVS, priceLabel, type EV, vehiclePath } from "@/lib/ev-data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import VehiclePhoto from "@/components/catalog/VehiclePhoto";

const featuredIds = [
  "tata-nexon-ev-long-range-45-kwh",
  "mahindra-be-6-79-kwh",
  "ola-s1-pro-gen-3-4-kwh",
  "ultraviolette-f77-mach-2-standard-7-1-kwh",
  "tata-curvv-ev-55-kwh",
];

export default function FeaturedVehicles() {
  const featured = featuredIds
    .map((id) => getById(id))
    .filter(Boolean) as EV[];
  const list = featured.length ? featured : EVS.slice(0, 5);

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          align="left"
          eyebrow="Spotlight"
          title={<>Featured <span className="text-gradient-brand">electric vehicles</span></>}
          subtitle="A handful of the most talked-about EVs in India right now."
        />
        <Reveal>
          <Link
            href="/catalog"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-brand hover:underline"
          >
            View all {EVS.length} EVs
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((ev, i) => (
          <Reveal key={ev.id} delay={i * 70} className={i === 0 ? "lg:col-span-2" : ""}>
            <SpotlightCard accent={ev.accent} className="h-full">
              <div className="flex h-full flex-col p-6">
                <VehiclePhoto
                  id={ev.id}
                  image={ev.image ?? null}
                  accent={ev.accent}
                  name={ev.fullName}
                  className="mb-5"
                />
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className="rounded-md px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest"
                    style={{ color: ev.accent, background: `${ev.accent}1a` }}
                  >
                    {ev.bodyType}
                  </span>
                  <span className="font-mono text-xs text-ev-muted">{ev.year}</span>
                </div>

                <h3 className="font-display text-xl font-bold leading-tight text-white">
                  {ev.name}
                </h3>
                <p className="mt-0.5 font-body text-xs text-ev-muted">
                  {ev.variant ?? ev.brand}
                </p>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[
                    { icon: Gauge, label: "Range", value: ev.rangeKmARAI ? `${ev.rangeKmARAI} km` : "—" },
                    { icon: BatteryCharging, label: "Battery", value: ev.batteryKwh ? `${ev.batteryKwh} kWh` : "—" },
                    { icon: Zap, label: "Power", value: ev.powerBhp ? `${ev.powerBhp} bhp` : "—" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-lg border border-ev-border/60 bg-ev-surface/40 p-2.5">
                      <s.icon className="mb-1 h-3.5 w-3.5 text-ev-muted" />
                      <div className="font-mono text-xs text-ev-text">{s.value}</div>
                      <div className="font-body text-[10px] text-ev-muted">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between pt-6">
                  <span className="font-mono text-lg font-semibold text-brand">
                    {priceLabel(ev)}
                  </span>
                  <Link
                    href={vehiclePath(ev)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-ev-border px-3 py-2 font-mono text-xs text-ev-text/80 transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    Specs <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
