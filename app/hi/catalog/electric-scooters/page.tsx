import type { Metadata } from "next";
import CategoryCatalog from "@/components/catalog/CategoryCatalog";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "भारत में इलेक्ट्रिक स्कूटर 2026 — कीमत, रेंज और स्पेसिफिकेशन | EVSelect.in",
  description:
    "भारत में 2026 के हर इलेक्ट्रिक स्कूटर की कीमत, रेंज, बैटरी, टॉप स्पीड और चार्जिंग की साथ-साथ तुलना करें।",
  alternates: altsFor("/catalog/electric-scooters", "hi"),
};

export default function Page() {
  return <CategoryCatalog category="scooter" locale="hi" />;
}
