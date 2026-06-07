import type { Metadata } from "next";
import Link from "next/link";
import { altsFor, localizedHref } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";
import AdPlaceholder from "@/components/AdPlaceholder";
import BrandDirectory from "@/components/catalog/BrandDirectory";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { EVS, BRANDS } from "@/lib/ev-data";
import { collectionPageSchema, itemListSchema, faqPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "भारत के सभी EV ब्रांड 2026 — इलेक्ट्रिक कार, स्कूटर और बाइक निर्माता | EVSelect.in",
  description:
    "2026 में भारत के हर इलेक्ट्रिक वाहन ब्रांड को एक ही जगह ब्राउज़ करें — कार, स्कूटर और मोटरसाइकिल निर्माता। टाइप से फ़िल्टर करें और किसी भी ब्रांड की पूरी EV रेंज, कीमत और स्पेक्स देखें।",
  alternates: altsFor("/brand", "hi"),
};

const carBrands = BRANDS.filter((b) => b.categories.includes("car")).length;
const scooterBrands = BRANDS.filter((b) => b.categories.includes("scooter")).length;
const bikeBrands = BRANDS.filter((b) => b.categories.includes("motorcycle")).length;

const faqs = [
  {
    q: "भारत में कितने EV ब्रांड हैं?",
    a: `EVSelect 2026 में भारत के ${BRANDS.length} इलेक्ट्रिक-वाहन ब्रांडों को ट्रैक करता है — कारें, स्कूटर और मोटरसाइकिलें। वाहन टाइप के अनुसार ब्रांड देखने के लिए फ़िल्टर का उपयोग करें।`,
  },
  {
    q: "भारत में कौन-से ब्रांड इलेक्ट्रिक कारें बनाते हैं?",
    a: `लगभग ${carBrands} ब्रांड भारत में इलेक्ट्रिक कारें पेश करते हैं, जिनमें Tata, Mahindra, MG, Hyundai, BYD, Kia और Tesla, BMW, Mercedes-Benz जैसे प्रीमियम नाम शामिल हैं।`,
  },
  {
    q: "कौन-से ब्रांड इलेक्ट्रिक स्कूटर और बाइक बनाते हैं?",
    a: `लगभग ${scooterBrands} ब्रांड इलेक्ट्रिक स्कूटर और ${bikeBrands} ब्रांड इलेक्ट्रिक मोटरसाइकिलें बनाते हैं — जिनमें Ola, Ather, TVS, Bajaj, Revolt और Ultraviolette शामिल हैं।`,
  },
];

export default function HiBrandIndexPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden">
          <Aurora variant="dual" />
          <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 sm:pt-20 lg:px-8">
            <Breadcrumbs
              items={[{ name: "ब्रांड", path: "/hi/brand" }]}
              homeName="होम"
              homeHref="/hi"
              className="mb-6"
            />
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-brand">
              EV ब्रांड
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-ev-text sm:text-5xl lg:text-6xl text-balance">
              भारत के सभी <span className="text-gradient-brand">EV ब्रांड</span>
            </h1>
            <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-ev-muted sm:text-lg">
              भारत में बिक्री पर मौजूद हर इलेक्ट्रिक कार, स्कूटर और मोटरसाइकिल
              निर्माता एक ही जगह। वाहन टाइप से फ़िल्टर करें, फिर किसी ब्रांड को
              खोलकर उसकी पूरी रेंज कीमत, रेंज और स्पेक्स के साथ देखें।
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {[
                { n: BRANDS.length, label: "ब्रांड" },
                { n: EVS.length, label: "कुल EVs" },
                { n: carBrands, label: "कार ब्रांड" },
                { n: scooterBrands, label: "स्कूटर ब्रांड" },
                { n: bikeBrands, label: "बाइक ब्रांड" },
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
          <BrandDirectory />

          <div className="mx-auto mt-16 max-w-3xl">
            <div className="prose-ev max-w-3xl">
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                भारत का हर इलेक्ट्रिक वाहन ब्रांड
              </h2>
              <p className="mt-4 font-body leading-relaxed text-ev-text/70">
                यह 2026 में भारत के EV निर्माताओं की पूरी डायरेक्टरी है — इलेक्ट्रिक
                कारें, स्कूटर और मोटरसाइकिलें। ऊपर दिए फ़िल्टर से वाहन टाइप के अनुसार
                छाँटें, या सीधे किसी श्रेणी में जाएँ:{" "}
                <Link href={localizedHref("/catalog/electric-cars", "hi")} className="text-brand hover:underline">
                  इलेक्ट्रिक कारें
                </Link>
                ,{" "}
                <Link href={localizedHref("/catalog/electric-scooters", "hi")} className="text-brand hover:underline">
                  इलेक्ट्रिक स्कूटर
                </Link>{" "}
                या{" "}
                <Link href={localizedHref("/catalog/electric-bikes", "hi")} className="text-brand hover:underline">
                  इलेक्ट्रिक मोटरसाइकिल
                </Link>
                । सब एक साथ देखना है? पूरा{" "}
                <Link href={localizedHref("/catalog", "hi")} className="text-brand hover:underline">
                  EV कैटलॉग
                </Link>{" "}
                देखें या{" "}
                <Link href={localizedHref("/compare-electric-vehicles", "hi")} className="text-brand hover:underline">
                  मॉडलों की तुलना करें
                </Link>
                ।
              </p>
            </div>
          </div>

          <section className="mx-auto mt-16 max-w-3xl">
            <h2 className="mb-6 font-display text-2xl font-bold text-white sm:text-3xl">
              अक्सर पूछे जाने वाले सवाल
            </h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-ev-border bg-ev-card p-5"
                >
                  <summary className="cursor-pointer font-display font-bold text-white">
                    {f.q}
                  </summary>
                  <p className="mt-3 font-body leading-relaxed text-ev-text/70">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer locale="hi" />
      <JsonLd
        data={[
          collectionPageSchema(
            "All EV Brands in India 2026",
            "Every electric car, scooter and motorcycle brand in India, in one place.",
            "/brand"
          ),
          itemListSchema(BRANDS.map((b) => ({ name: b.name, path: `/brand/${b.slug}` }))),
          faqPageSchema(faqs),
        ]}
      />
    </>
  );
}
