import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EvDetail from "@/components/catalog/EvDetail";
import { EVS, brandSlug, vehicleSlug, vehiclePath, getByBrandAndSlug, priceLabel } from "@/lib/ev-data";
import { altsFor } from "@/lib/i18n";

export function generateStaticParams() {
  return EVS.map((e) => ({ brand: brandSlug(e.brand), model: vehicleSlug(e) }));
}

export async function generateMetadata({
  params,
}: {
  params: { brand: string; model: string };
}): Promise<Metadata> {
  const ev = getByBrandAndSlug(params.brand, params.model);
  if (!ev) {
    return {
      title: "EV not found | EVSelect.in",
      description: "The electric vehicle you are looking for was not found.",
    };
  }
  const range = ev.rangeKmARAI != null ? `${ev.rangeKmARAI} km range, ` : "";
  return {
    title: `${ev.name} Price in India 2026 — Range, Specs & Variants`,
    description: `${ev.fullName} price in India: ${priceLabel(ev)}. ${range}${
      ev.batteryKwh != null ? `${ev.batteryKwh} kWh battery. ` : ""
    }Full variant list, specifications, charging details and highlights.`,
    alternates: altsFor(vehiclePath(ev), "en"),
    // Upcoming/unlaunched models are thin and speculative — keep them out of the
    // index (but follow links) until they have real specs, price and a photo.
    ...(ev.upcoming ? { robots: { index: false, follow: true } } : {}),
  };
}

export default function EvDetailPage({ params }: { params: { brand: string; model: string } }) {
  const ev = getByBrandAndSlug(params.brand, params.model);
  if (!ev) return notFound();
  return <EvDetail ev={ev} locale="en" />;
}
