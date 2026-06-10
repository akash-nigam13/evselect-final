import type { Metadata } from "next";
import ArticleShell from "@/components/blog/ArticleShell";
import BrandGuide from "@/components/blog/BrandGuide";

export const metadata: Metadata = {
  title: "Citroen Electric Cars in India 2026: Models, Prices & Range",
  description: "Every Citroen electric cars on sale in India in 2026 — all 2 models compared on price, real-world range, battery and features to help you choose the right Citroen EV.",
  alternates: { canonical: "https://www.evselect.in/blog/citroen-electric-cars" },
  openGraph: { title: "Citroen Electric Cars in India 2026: Models, Prices & Range", type: "article" },
};

export default function Page() {
  return (
    <ArticleShell slug="citroen-electric-cars">
      <BrandGuide slug="citroen-electric-cars" />
    </ArticleShell>
  );
}
