import type { Metadata } from "next";
import ArticleShell from "@/components/blog/ArticleShell";
import BrandGuide from "@/components/blog/BrandGuide";

export const metadata: Metadata = {
  title: "Hero Electric Scooters in India 2026: Models, Prices & Range",
  description: "Every Hero electric scooters on sale in India in 2026 — all 3 models compared on price, real-world range, battery and features to help you choose the right Hero EV.",
  alternates: { canonical: "https://www.evselect.in/blog/hero-electric-scooters" },
  openGraph: { title: "Hero Electric Scooters in India 2026: Models, Prices & Range", type: "article" },
};

export default function Page() {
  return (
    <ArticleShell slug="hero-electric-scooters">
      <BrandGuide slug="hero-electric-scooters" />
    </ArticleShell>
  );
}
