import type { Metadata } from "next";
import ArticleShell from "@/components/blog/ArticleShell";
import BrandGuide from "@/components/blog/BrandGuide";

export const metadata: Metadata = {
  title: "Audi Electric Cars in India 2026: Models, Prices & Range",
  description: "Every Audi electric cars on sale in India in 2026 — all 3 models compared on price, real-world range, battery and features to help you choose the right Audi EV.",
  alternates: { canonical: "https://www.evselect.in/blog/audi-electric-cars" },
  openGraph: { title: "Audi Electric Cars in India 2026: Models, Prices & Range", type: "article" },
};

export default function Page() {
  return (
    <ArticleShell slug="audi-electric-cars">
      <BrandGuide slug="audi-electric-cars" />
    </ArticleShell>
  );
}
