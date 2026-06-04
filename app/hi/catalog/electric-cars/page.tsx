import type { Metadata } from "next";
import CategoryCatalog from "@/components/catalog/CategoryCatalog";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "भारत में इलेक्ट्रिक कारें 2026 — कीमत, रेंज और स्पेसिफिकेशन | EVSelect.in",
  description:
    "भारत में 2026 की हर इलेक्ट्रिक कार की कीमत, असली रेंज, बैटरी, चार्जिंग और स्पेसिफिकेशन की साथ-साथ तुलना करें।",
  alternates: altsFor("/catalog/electric-cars", "hi"),
};

export default function Page() {
  return <CategoryCatalog category="car" locale="hi" />;
}
