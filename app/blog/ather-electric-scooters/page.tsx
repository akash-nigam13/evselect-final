import type { Metadata } from "next";
import ArticleShell from "@/components/blog/ArticleShell";
import BrandGuide from "@/components/blog/BrandGuide";

export const metadata: Metadata = {
  title: "Ather Electric Scooters in India 2026: Models, Prices & Range",
  description: "Every Ather electric scooters on sale in India in 2026 — all 5 models compared on price, real-world range, battery and features to help you choose the right Ather EV.",
  alternates: { canonical: "https://www.evselect.in/blog/ather-electric-scooters" },
  openGraph: { title: "Ather Electric Scooters in India 2026: Models, Prices & Range", type: "article" },
};

export default function Page() {
  return (
    <ArticleShell slug="ather-electric-scooters">
      <BrandGuide slug="ather-electric-scooters" />
    </ArticleShell>
  );
}
