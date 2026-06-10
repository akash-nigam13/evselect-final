import type { Metadata } from "next";
import ArticleShell from "@/components/blog/ArticleShell";
import BrandGuide from "@/components/blog/BrandGuide";

export const metadata: Metadata = {
  title: "Tesla Electric Cars in India 2026: Models, Prices & Range",
  description: "Every Tesla electric cars on sale in India in 2026 — all 4 models compared on price, real-world range, battery and features to help you choose the right Tesla EV.",
  alternates: { canonical: "https://www.evselect.in/blog/tesla-electric-cars-india" },
  openGraph: { title: "Tesla Electric Cars in India 2026: Models, Prices & Range", type: "article" },
};

export default function Page() {
  return (
    <ArticleShell slug="tesla-electric-cars-india">
      <BrandGuide slug="tesla-electric-cars-india" />
    </ArticleShell>
  );
}
