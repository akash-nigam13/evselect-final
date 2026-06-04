import type { Metadata } from "next";
import CategoryCatalog from "@/components/catalog/CategoryCatalog";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Electric Bikes in India 2026 — Prices, Range & Specs | EVSelect.in",
  description:
    "Compare every electric motorcycle (bike) in India in 2026 — price, range, performance, battery and charging, all filterable side by side.",
  alternates: altsFor("/catalog/electric-bikes", "en"),
};

export default function Page() {
  return <CategoryCatalog category="motorcycle" locale="en" />;
}
