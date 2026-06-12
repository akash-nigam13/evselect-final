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
      title: "EV नहीं मिली | EVSelect.in",
      description: "आप जिस इलेक्ट्रिक वाहन को खोज रहे हैं वह नहीं मिला।",
    };
  }
  const range = ev.rangeKmARAI != null ? `${ev.rangeKmARAI} km रेंज, ` : "";
  return {
    title: `${ev.name} — स्पेक्स, रेंज और कीमत | EVSelect.in`,
    description: `${ev.fullName}: ${range}${
      ev.batteryKwh != null ? `${ev.batteryKwh} kWh बैटरी, ` : ""
    }कीमत ${priceLabel(ev)}। पूरी स्पेसिफिकेशन, चार्जिंग जानकारी और हाइलाइट्स।`,
    alternates: altsFor(vehiclePath(ev), "hi"),
  };
}

export default function HiEvDetailPage({ params }: { params: { brand: string; model: string } }) {
  const ev = getByBrandAndSlug(params.brand, params.model);
  if (!ev) return notFound();
  return <EvDetail ev={ev} locale="hi" />;
}
