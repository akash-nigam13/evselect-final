import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";
import AdPlaceholder from "@/components/AdPlaceholder";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import FacetedCatalog from "@/components/catalog/FacetedCatalog";
import BrandExplorer from "@/components/catalog/BrandExplorer";
import { EVS, BRANDS } from "@/lib/ev-data";
import { collectionPageSchema, itemListSchema, faqPageSchema } from "@/lib/seo";
import { altsFor, localizedHref } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "EV कैटलॉग 2026 — भारत के सभी इलेक्ट्रिक वाहन | EVSelect.in",
  description:
    "2026 में भारत में बिक्री पर मौजूद हर इलेक्ट्रिक कार, स्कूटर और मोटरसाइकिल को पूरे फ़िल्टर के साथ ब्राउज़ करें — ब्रांड, बॉडी टाइप, कीमत, रेंज और चार्जिंग। या पूरी ब्रांड डायरेक्टरी देखें।",
  alternates: altsFor("/catalog", "hi"),
};

const carCount = EVS.filter((e) => e.category === "car").length;
const scooterCount = EVS.filter((e) => e.category === "scooter").length;
const bikeCount = EVS.filter((e) => e.category === "motorcycle").length;

const faqs = [
  {
    q: "भारत में कितने इलेक्ट्रिक वाहन बिक्री पर हैं?",
    a: `हमारे कैटलॉग में 2026 में भारत के ${BRANDS.length} ब्रांडों के कुल ${EVS.length} इलेक्ट्रिक वाहन शामिल हैं — ${carCount} इलेक्ट्रिक कारें, ${scooterCount} इलेक्ट्रिक स्कूटर और ${bikeCount} इलेक्ट्रिक मोटरसाइकिलें। नए मॉडल लॉन्च होते ही जोड़े जाते हैं।`,
  },
  {
    q: "भारत में सबसे सस्ती EV कौन-सी है?",
    a: "सूची को कीमत के अनुसार कम-से-ज़्यादा क्रम में छाँटें। एंट्री-लेवल इलेक्ट्रिक स्कूटर अक्सर ₹1 लाख के आसपास शुरू होते हैं, जबकि सबसे बजट-फ्रेंडली इलेक्ट्रिक कारें आमतौर पर ₹7–10 लाख की रेंज से शुरू होती हैं।",
  },
  {
    q: "मैं दो EVs की तुलना कैसे करूँ?",
    a: "किसी भी मॉडल को तुलना टूल में जोड़ें, जहाँ आप इलेक्ट्रिक कारें, स्कूटर या बाइक को आमने-सामने रखकर रेंज, बैटरी क्षमता, चार्जिंग समय, पावर और कीमत को एक साथ तौल सकते हैं।",
  },
  {
    q: "क्या भारत में EVs पर सब्सिडी मिलती है?",
    a: "कई इलेक्ट्रिक वाहन केंद्र और राज्य की रियायतों, रोड-टैक्स छूट और रजिस्ट्रेशन लाभ के लिए पात्र होते हैं, लेकिन सटीक राशि राज्य, वाहन श्रेणी और मॉडल के अनुसार बदलती है। खरीदने से पहले अपने राज्य की मौजूदा योजना ज़रूर जाँचें।",
  },
];

export default function HiCatalogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden">
          <Aurora variant="dual" />
          <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 sm:pt-20 lg:px-8">
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
              भारत के सभी <span className="text-gradient-brand">इलेक्ट्रिक वाहन</span>
            </h1>
            <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-ev-muted sm:text-lg">
              सभी {EVS.length} मॉडल एक ही फ़िल्टर वाले व्यू में — ब्रांड, बॉडी टाइप,
              कीमत, रेंज और चार्जिंग के आधार पर छाँटें। या नीचे स्क्रॉल कर पूरी
              ब्रांड डायरेक्टरी देखें।
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

        {/* PRIMARY: full filterable catalog */}
        <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
          <FacetedCatalog pool={EVS} />
          <AdPlaceholder format="leaderboard" slot="3333333333" className="mt-12" />
        </div>

        {/* SECONDARY: brand directory */}
        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <section className="mt-16">
            <h2 className="mb-2 font-display text-2xl font-bold text-white sm:text-3xl">
              या <span className="text-gradient-brand">ब्रांड</span> के अनुसार EV ब्राउज़ करें
            </h2>
            <p className="mb-8 max-w-2xl font-body text-ev-muted">
              किसी निर्माता को चुनकर उसकी पूरी रेंज देखें, फिर कीमत, रेंज, बैटरी और
              चार्जिंग स्पेक्स में गहराई से जाएँ।
            </p>
            <BrandExplorer />
          </section>

          <div className="mx-auto mt-16 max-w-3xl">
            <div className="prose-ev max-w-3xl">
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                भारत के हर EV मॉडल और ब्रांड, एक ही जगह
              </h2>
              <p className="mt-4 font-body leading-relaxed text-ev-text/70">
                यह 2026 में भारत में बिक्री पर मौजूद हर इलेक्ट्रिक कार, स्कूटर और
                मोटरसाइकिल की पूरी डायरेक्टरी है। ऊपर दिए फ़िल्टर से अपनी EV price
                list 2026 ब्रांड, बॉडी टाइप, कीमत और रेंज के आधार पर बनाएँ, या सीधे
                किसी श्रेणी में जाएँ:{" "}
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
                ।
              </p>
              <p className="mt-3 font-body leading-relaxed text-ev-text/70">
                और गहराई में जाना है? दो EVs की{" "}
                <Link href={localizedHref("/compare-electric-vehicles", "hi")} className="text-brand hover:underline">
                  तुलना (इलेक्ट्रिक कार, स्कूटर और बाइक)
                </Link>{" "}
                आमने-सामने करें, देखें कौन-से मॉडल{" "}
                <Link href={localizedHref("/ev-subsidies-india", "hi")} className="text-brand hover:underline">
                  भारत में EV सब्सिडी
                </Link>{" "}
                के पात्र हैं, या{" "}
                <Link href={localizedHref("/ev-calculators/ev-emi-calculator", "hi")} className="text-brand hover:underline">
                  EV EMI कैलकुलेटर
                </Link>{" "}
                से अपनी मासिक किस्त का अनुमान लगाएँ।
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
            "EV Catalog 2026 — All Electric Vehicles in India",
            "Browse every electric vehicle in India with full filters, plus the complete brand directory.",
            "/catalog"
          ),
          itemListSchema(
            BRANDS.map((b) => ({ name: b.name, path: `/brand/${b.slug}` }))
          ),
          faqPageSchema(faqs),
        ]}
      />
    </>
  );
}
