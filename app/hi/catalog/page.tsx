import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";
import AdPlaceholder from "@/components/AdPlaceholder";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import BrandExplorer from "@/components/catalog/BrandExplorer";
import { EVS, BRANDS } from "@/lib/ev-data";
import { collectionPageSchema } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "EV कैटलॉग — ब्रांड के अनुसार ब्राउज़ करें | EVSelect.in",
  description:
    "ब्रांड चुनकर उसकी इलेक्ट्रिक वाहन रेंज देखें, या फ़िल्टर के साथ भारत की सभी EVs ब्राउज़ करें — कारें, स्कूटर और बाइक।",
  alternates: altsFor("/catalog", "hi"),
};

const carCount = EVS.filter((e) => e.category === "car").length;
const scooterCount = EVS.filter((e) => e.category === "scooter").length;
const bikeCount = EVS.filter((e) => e.category === "motorcycle").length;

export default function HiCatalogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden">
          <Aurora variant="dual" />
          <div className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 sm:pt-20 lg:px-8">
            <Breadcrumbs
              items={[{ name: "कैटलॉग", path: "/hi/catalog" }]}
              homeName="होम"
              homeHref="/hi"
              className="mb-6"
            />
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-brand">
              कैटलॉग
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-ev-text sm:text-5xl lg:text-6xl text-balance">
              <span className="text-gradient-brand">ब्रांड</span> के अनुसार EV ब्राउज़ करें
            </h1>
            <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-ev-muted sm:text-lg">
              किसी ब्रांड को चुनकर उसकी पूरी रेंज देखें, फिर ज़रूरी नंबरों पर
              फ़िल्टर करें। या सभी {EVS.length} मॉडलों को पूरे फ़िल्टर सेट के साथ देखें।
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {[
                { n: BRANDS.length, label: "ब्रांड" },
                { n: EVS.length, label: "कुल EVs" },
                { n: carCount, label: "कारें" },
                { n: scooterCount, label: "स्कूटर" },
                { n: bikeCount, label: "बाइक" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-ev-border bg-ev-card/60 px-4 py-3">
                  <span className="font-mono text-2xl font-bold text-ev-text">{s.n}</span>
                  <span className="ml-2 font-mono text-xs uppercase tracking-wider text-ev-muted">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto mb-10 max-w-7xl px-4 sm:px-6 lg:px-8">
          <AdPlaceholder format="leaderboard" slot="3333333333" />
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <BrandExplorer />
        </div>
      </main>
      <Footer locale="hi" />
      <JsonLd
        data={collectionPageSchema(
          "EV Catalog — Browse by Brand",
          "Browse electric vehicles in India by brand.",
          "/catalog"
        )}
      />
    </>
  );
}
