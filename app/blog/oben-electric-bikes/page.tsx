import type { Metadata } from "next";
import ArticleShell from "@/components/blog/ArticleShell";
import BrandGuide from "@/components/blog/BrandGuide";

export const metadata: Metadata = {
  title: "Oben Electric Bikes in India 2026: Models, Prices & Range",
  description: "Every Oben electric bikes on sale in India in 2026 — all 3 models compared on price, real-world range, battery and features to help you choose the right Oben EV.",
  alternates: { canonical: "https://www.evselect.in/blog/oben-electric-bikes" },
  openGraph: { title: "Oben Electric Bikes in India 2026: Models, Prices & Range", type: "article" },
};

export default function Page() {
  return (
    <ArticleShell slug="oben-electric-bikes">
      <BrandGuide slug="oben-electric-bikes" />
    </ArticleShell>
  );
}
