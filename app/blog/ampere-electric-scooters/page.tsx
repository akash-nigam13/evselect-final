import type { Metadata } from "next";
import ArticleShell from "@/components/blog/ArticleShell";
import BrandGuide from "@/components/blog/BrandGuide";

export const metadata: Metadata = {
  title: "Ampere Electric Scooters in India 2026: Models, Prices & Range",
  description: "Every Ampere electric scooters on sale in India in 2026 — all 2 models compared on price, real-world range, battery and features to help you choose the right Ampere EV.",
  alternates: { canonical: "https://www.evselect.in/blog/ampere-electric-scooters" },
  openGraph: { title: "Ampere Electric Scooters in India 2026: Models, Prices & Range", type: "article" },
};

export default function Page() {
  return (
    <ArticleShell slug="ampere-electric-scooters">
      <BrandGuide slug="ampere-electric-scooters" />
    </ArticleShell>
  );
}
