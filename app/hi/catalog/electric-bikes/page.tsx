import type { Metadata } from "next";
import CategoryCatalog from "@/components/catalog/CategoryCatalog";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "भारत में इलेक्ट्रिक बाइक 2026 — कीमत, रेंज और स्पेसिफिकेशन | EVSelect.in",
  description:
    "भारत में 2026 की हर इलेक्ट्रिक मोटरसाइकिल (बाइक) की कीमत, रेंज, परफ़ॉर्मेंस, बैटरी और चार्जिंग की साथ-साथ तुलना करें।",
  alternates: altsFor("/catalog/electric-bikes", "hi"),
};

export default function Page() {
  return <CategoryCatalog category="motorcycle" locale="hi" />;
}
