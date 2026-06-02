import type { Metadata } from "next";
import { altsFor } from "@/lib/i18n";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";
import AdPlaceholder from "@/components/AdPlaceholder";
import FacetedCatalog from "@/components/catalog/FacetedCatalog";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { EVS } from "@/lib/ev-data";
import { collectionPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "सभी इलेक्ट्रिक वाहन — फ़िल्टर करें और तुलना करें | EVSelect.in",
  description:
    "भारत की सभी इलेक्ट्रिक कारें, स्कूटर और बाइक एक ही फ़िल्टर वाले व्यू में — ब्रांड, बॉडी टाइप, कीमत, रेंज, चार्जिंग और बहुत कुछ के आधार पर छाँटें।",
  alternates: altsFor("/catalog/all", "hi"),
};

export default function CatalogAllPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden">
          <Aurora variant="dual" />
          <div className="mx-auto max-w-7xl px-4 pb-10 pt-14 sm:px-6 lg:px-8">
            <Breadcrumbs
              homeName="होम"
              homeHref="/hi"
              items={[
                { name: "कैटलॉग", path: "/hi/catalog" },
                { name: "सभी मॉडल", path: "/hi/catalog/all" },
              ]}
              className="mb-4"
            />
            <Link
              href="/hi/catalog"
              className="mb-6 inline-flex items-center gap-1.5 font-mono text-xs text-ev-muted transition-colors hover:text-brand"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> ब्रांड पर वापस जाएँ
            </Link>
            <h1 className="font-display text-4xl font-bold text-ev-text sm:text-5xl">
              सभी <span className="text-gradient-brand">इलेक्ट्रिक वाहन</span>
            </h1>
            <p className="mt-4 max-w-2xl font-body text-ev-muted">
              हर मॉडल एक ही फ़िल्टर वाले व्यू में। ब्रांड, बॉडी टाइप, कीमत, रेंज
              और बहुत कुछ के आधार पर छाँटें।
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <FacetedCatalog pool={EVS} />
          <AdPlaceholder format="leaderboard" slot="3333333333" className="mt-12" />
        </div>
      </main>
      <Footer locale="hi" />
      <JsonLd
        data={collectionPageSchema(
          "All Electric Vehicles",
          "Every electric car, scooter and bike in India with full filters.",
          "/catalog/all"
        )}
      />
    </>
  );
}
