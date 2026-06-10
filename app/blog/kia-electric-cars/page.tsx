import type { Metadata } from "next";
import ArticleShell from "@/components/blog/ArticleShell";
import BrandGuide from "@/components/blog/BrandGuide";

export const metadata: Metadata = {
  title: "Kia Electric Cars in India 2026: Models, Prices & Range",
  description: "Every Kia electric cars on sale in India in 2026 — all 5 models compared on price, real-world range, battery and features to help you choose the right Kia EV.",
  alternates: { canonical: "https://www.evselect.in/blog/kia-electric-cars" },
  openGraph: { title: "Kia Electric Cars in India 2026: Models, Prices & Range", type: "article" },
};

export default function Page() {
  return (
    <ArticleShell slug="kia-electric-cars">
      <BrandGuide slug="kia-electric-cars" />
    </ArticleShell>
  );
}
