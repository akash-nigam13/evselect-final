import type { Metadata } from "next";
import ArticleShell from "@/components/blog/ArticleShell";
import BrandGuide from "@/components/blog/BrandGuide";

export const metadata: Metadata = {
  title: "Revolt Electric Bikes in India 2026: Models, Prices & Range",
  description: "Every Revolt electric bikes on sale in India in 2026 — all 4 models compared on price, real-world range, battery and features to help you choose the right Revolt EV.",
  alternates: { canonical: "https://www.evselect.in/blog/revolt-electric-bikes" },
  openGraph: { title: "Revolt Electric Bikes in India 2026: Models, Prices & Range", type: "article" },
};

export default function Page() {
  return (
    <ArticleShell slug="revolt-electric-bikes">
      <BrandGuide slug="revolt-electric-bikes" />
    </ArticleShell>
  );
}
