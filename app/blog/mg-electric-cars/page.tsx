import type { Metadata } from "next";
import ArticleShell from "@/components/blog/ArticleShell";
import BrandGuide from "@/components/blog/BrandGuide";

export const metadata: Metadata = {
  title: "MG Electric Cars in India 2026: Models, Prices & Range",
  description: "Every MG electric cars on sale in India in 2026 — all 6 models compared on price, real-world range, battery and features to help you choose the right MG EV.",
  alternates: { canonical: "https://www.evselect.in/blog/mg-electric-cars" },
  openGraph: { title: "MG Electric Cars in India 2026: Models, Prices & Range", type: "article" },
};

export default function Page() {
  return (
    <ArticleShell slug="mg-electric-cars">
      <BrandGuide slug="mg-electric-cars" />
    </ArticleShell>
  );
}
