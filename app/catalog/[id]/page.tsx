import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EvDetail from "@/components/catalog/EvDetail";
import { EVS, getById, priceLabel } from "@/lib/ev-data";
import { altsFor } from "@/lib/i18n";

export function generateStaticParams() {
  return EVS.map((e) => ({ id: e.id }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const ev = getById(params.id);
  if (!ev) {
    return {
      title: "EV not found | EVSelect.in",
      description: "The electric vehicle you are looking for was not found.",
    };
  }
  const range = ev.rangeKmARAI != null ? `${ev.rangeKmARAI} km range, ` : "";
  return {
    title: `${ev.name} — Specs, Range & Price | EVSelect.in`,
    description: `${ev.fullName}: ${range}${
      ev.batteryKwh != null ? `${ev.batteryKwh} kWh battery, ` : ""
    }priced at ${priceLabel(ev)}. Full specifications, charging details and highlights.`,
    alternates: altsFor(`/catalog/${ev.id}`, "en"),
  };
}

export default function EvDetailPage({ params }: { params: { id: string } }) {
  const ev = getById(params.id);
  if (!ev) return notFound();
  return <EvDetail ev={ev} locale="en" />;
}
