import type { Metadata } from "next";
import ArticleShell from "@/components/blog/ArticleShell";
import BrandGuide from "@/components/blog/BrandGuide";

export const metadata: Metadata = {
  title: "Ola Electric Bikes in India 2026: Models, Prices & Range",
  description: "Every Ola electric bikes on sale in India in 2026 — all 6 models compared on price, real-world range, battery and features to help you choose the right Ola EV.",
  alternates: { canonical: "https://www.evselect.in/blog/ola-electric-bikes" },
  openGraph: { title: "Ola Electric Bikes in India 2026: Models, Prices & Range", type: "article" },
};

export default function Page() {
  return (
    <ArticleShell slug="ola-electric-bikes">
      <BrandGuide slug="ola-electric-bikes" />
    </ArticleShell>
  );
}
