import type { Metadata } from "next";
import ArticleShell from "@/components/blog/ArticleShell";
import BrandGuide from "@/components/blog/BrandGuide";

export const metadata: Metadata = {
  title: "Mercedes-Benz Electric Cars in India 2026: Models, Prices & Range",
  description: "Every Mercedes-Benz electric cars on sale in India in 2026 — all 5 models compared on price, real-world range, battery and features to help you choose the right Mercedes-Benz EV.",
  alternates: { canonical: "https://www.evselect.in/blog/mercedes-benz-electric-cars" },
  openGraph: { title: "Mercedes-Benz Electric Cars in India 2026: Models, Prices & Range", type: "article" },
};

export default function Page() {
  return (
    <ArticleShell slug="mercedes-benz-electric-cars">
      <BrandGuide slug="mercedes-benz-electric-cars" />
    </ArticleShell>
  );
}
