"use client";

import Link from "next/link";
import { ArrowRight, GitCompare } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import VehiclePhoto from "@/components/catalog/VehiclePhoto";
import { priceLabel, CATEGORY_LABELS, vehiclePath, type EV } from "@/lib/ev-data";
import { usePathname } from "next/navigation";
import { localeFromPath, localizedHref, t } from "@/lib/i18n";

interface EvCardProps {
  ev: EV;
}

function statValue(v: number | null, suffix: string): string {
  return v == null ? "—" : `${v}${suffix}`;
}

export default function EvCard({ ev }: EvCardProps) {
  const locale = localeFromPath(usePathname() || "/");
  const chipLabel =
    ev.bodyType || CATEGORY_LABELS[ev.category] || ev.category;

  const vHref = localizedHref(vehiclePath(ev), locale);

  return (
    <SpotlightCard accent={ev.accent} className="h-full">
      <div className="group relative flex h-full flex-col p-5 sm:p-6">
        {/* Cover image */}
        <VehiclePhoto
          id={ev.id}
          image={ev.image ?? null}
          accent={ev.accent}
          name={ev.fullName}
          className="mb-5"
        />

        {/* Chip + year */}
        <div className="mb-4 flex items-center justify-between gap-3">
          <span
            className="inline-flex items-center rounded-full border px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.18em]"
            style={{
              color: ev.accent,
              borderColor: `color-mix(in srgb, ${ev.accent} 35%, transparent)`,
              backgroundColor: `color-mix(in srgb, ${ev.accent} 10%, transparent)`,
            }}
          >
            {chipLabel}
          </span>
          {ev.upcoming ? (
            <span className="rounded-full border border-iris/40 bg-iris/10 px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-iris">
              {t("card.upcoming", locale)}
            </span>
          ) : (
            ev.year != null && (
              <span className="font-mono text-[11px] text-ev-muted">{ev.year}</span>
            )
          )}
        </div>

        {/* Name + subtitle — the name is the anchor; its ::before stretches over
            the whole card so clicking anywhere opens the vehicle page. */}
        <h3 className="font-display text-xl font-bold leading-tight text-ev-text transition-colors group-hover:text-brand">
          <Link href={vHref} className="before:absolute before:inset-0 before:content-['']">
            {ev.name}
          </Link>
        </h3>
        <p className="mt-1 font-body text-sm text-ev-muted">
          {ev.variant ?? ev.bodyType}
        </p>

        {/* Price */}
        <p className="mt-4 font-mono text-lg font-semibold text-brand">
          {priceLabel(ev)}
        </p>

        {/* Mini stats */}
        <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl border border-ev-border bg-ev-card-2/60 p-3">
          <div className="text-center">
            <p className="font-mono text-sm font-semibold text-ev-text">
              {statValue(ev.rangeKmARAI, "")}
            </p>
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-ev-muted">
              {t("card.kmRange", locale)}
            </p>
          </div>
          <div className="border-x border-ev-border text-center">
            <p className="font-mono text-sm font-semibold text-ev-text">
              {statValue(ev.batteryKwh, "")}
            </p>
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-ev-muted">
              kWh
            </p>
          </div>
          <div className="text-center">
            <p className="font-mono text-sm font-semibold text-ev-text">
              {statValue(ev.powerBhp, "")}
            </p>
            <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-ev-muted">
              bhp
            </p>
          </div>
        </div>

        {/* Actions. The "view specs" pill is visual only (pointer-events-none) so
            clicks pass through to the card-wide name link. Compare sits above it. */}
        <div className="mt-auto flex items-center gap-3 pt-6">
          <span className="pointer-events-none inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-brand-gradient px-4 py-2.5 font-body text-sm font-semibold text-ev-bg transition-transform duration-200 group-hover:-translate-y-0.5">
            {t("card.viewSpecs", locale)}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
          <Link
            href={localizedHref(`/compare-electric-vehicles?ids=${ev.id}`, locale)}
            className="relative z-10 inline-flex items-center justify-center gap-1.5 rounded-xl border border-ev-border bg-ev-surface px-4 py-2.5 font-body text-sm font-medium text-ev-text transition-colors duration-200 hover:border-iris/50 hover:text-iris"
          >
            <GitCompare className="h-4 w-4" />
            {t("card.compare", locale)}
          </Link>
        </div>
      </div>
    </SpotlightCard>
  );
}
