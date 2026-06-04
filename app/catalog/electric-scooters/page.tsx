import type { Metadata } from "next";
import CategoryCatalog from "@/components/catalog/CategoryCatalog";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Electric Scooters in India 2026 — Prices, Range & Specs | EVSelect.in",
  description:
    "Compare every electric scooter in India in 2026 — price, range, battery, top speed and charging, all filterable side by side.",
  alternates: altsFor("/catalog/electric-scooters", "en"),
};

export default function Page() {
  return <CategoryCatalog category="scooter" locale="en" />;
}
