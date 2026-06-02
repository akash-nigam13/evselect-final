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
      title: "EV नहीं मिली | EVSelect.in",
      description: "आप जिस इलेक्ट्रिक वाहन को खोज रहे हैं वह नहीं मिला।",
    };
  }
  const range = ev.rangeKmARAI != null ? `${ev.rangeKmARAI} km रेंज, ` : "";
  return {
    title: `${ev.name} — स्पेसिफिकेशन, रेंज और कीमत | EVSelect.in`,
    description: `${ev.fullName}: ${range}${
      ev.batteryKwh != null ? `${ev.batteryKwh} kWh बैटरी, ` : ""
    }कीमत ${priceLabel(ev)}। पूरी स्पेसिफिकेशन, चार्जिंग डिटेल और मुख्य खूबियाँ।`,
    alternates: altsFor(`/catalog/${ev.id}`, "hi"),
  };
}

export default function EvDetailPageHi({ params }: { params: { id: string } }) {
  const ev = getById(params.id);
  if (!ev) return notFound();
  return <EvDetail ev={ev} locale="hi" />;
}
