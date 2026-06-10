import type { Metadata } from "next";
import ArticleShell from "@/components/blog/ArticleShell";
import BrandGuide from "@/components/blog/BrandGuide";

export const metadata: Metadata = {
  title: "Tork Electric Bikes in India 2026: Models, Prices & Range",
  description: "Every Tork electric bikes on sale in India in 2026 — all 3 models compared on price, real-world range, battery and features to help you choose the right Tork EV.",
  alternates: { canonical: "https://www.evselect.in/blog/tork-electric-bikes" },
  openGraph: { title: "Tork Electric Bikes in India 2026: Models, Prices & Range", type: "article" },
};

export default function Page() {
  return (
    <ArticleShell slug="tork-electric-bikes">
      <BrandGuide slug="tork-electric-bikes" />
    </ArticleShell>
  );
}
