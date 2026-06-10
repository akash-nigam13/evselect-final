import type { Metadata } from "next";
import ArticleShell from "@/components/blog/ArticleShell";
import BrandGuide from "@/components/blog/BrandGuide";

export const metadata: Metadata = {
  title: "BMW Electric Cars in India 2026: Models, Prices & Range",
  description: "Every BMW electric cars on sale in India in 2026 — all 5 models compared on price, real-world range, battery and features to help you choose the right BMW EV.",
  alternates: { canonical: "https://www.evselect.in/blog/bmw-electric-cars" },
  openGraph: { title: "BMW Electric Cars in India 2026: Models, Prices & Range", type: "article" },
};

export default function Page() {
  return (
    <ArticleShell slug="bmw-electric-cars">
      <BrandGuide slug="bmw-electric-cars" />
    </ArticleShell>
  );
}
