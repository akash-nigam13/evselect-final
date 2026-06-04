import type { Metadata } from "next";
import CategoryCatalog from "@/components/catalog/CategoryCatalog";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Electric Cars in India 2026 — Prices, Range & Specs | EVSelect.in",
  description:
    "Compare every electric car on sale in India in 2026 — price, real-world range, battery, charging and full specifications, all filterable side by side.",
  alternates: altsFor("/catalog/electric-cars", "en"),
};

export default function Page() {
  return <CategoryCatalog category="car" locale="en" />;
}
