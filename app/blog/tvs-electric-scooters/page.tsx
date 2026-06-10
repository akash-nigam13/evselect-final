import type { Metadata } from "next";
import ArticleShell from "@/components/blog/ArticleShell";
import BrandGuide from "@/components/blog/BrandGuide";

export const metadata: Metadata = {
  title: "TVS Electric Scooters in India 2026: Models, Prices & Range",
  description: "Every TVS electric scooters on sale in India in 2026 — all 6 models compared on price, real-world range, battery and features to help you choose the right TVS EV.",
  alternates: { canonical: "https://www.evselect.in/blog/tvs-electric-scooters" },
  openGraph: { title: "TVS Electric Scooters in India 2026: Models, Prices & Range", type: "article" },
};

export default function Page() {
  return (
    <ArticleShell slug="tvs-electric-scooters">
      <BrandGuide slug="tvs-electric-scooters" />
    </ArticleShell>
  );
}
