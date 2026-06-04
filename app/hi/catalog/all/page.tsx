import type { Metadata } from "next";
import { altsFor, localizedHref } from "@/lib/i18n";
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
import { collectionPageSchema, faqPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "सभी इलेक्ट्रिक वाहन — फ़िल्टर करें और तुलना करें | EVSelect.in",
  description:
    "भारत की सभी इलेक्ट्रिक कारें, स्कूटर और बाइक एक ही फ़िल्टर वाले व्यू में — ब्रांड, बॉडी टाइप, कीमत, रेंज, चार्जिंग और बहुत कुछ के आधार पर छाँटें।",
  alternates: altsFor("/catalog/all", "hi"),
};

const faqs = [
  {
    q: "भारत में कितने इलेक्ट्रिक वाहन बिक्री पर हैं?",
    a: `इस फ़िल्टर वाली सूची में 2026 में भारत के कुल ${EVS.length} इलेक्ट्रिक वाहन शामिल हैं — इलेक्ट्रिक कारें, स्कूटर और मोटरसाइकिलें एक साथ — और नए मॉडल लॉन्च होते ही यह बढ़ती रहती है।`,
  },
  {
    q: "भारत में सबसे सस्ती EV कौन-सी है?",
    a: "सूची को कीमत के अनुसार कम-से-ज़्यादा क्रम में छाँटें ताकि सबसे किफ़ायती मॉडल ऊपर आ जाएँ। एंट्री-लेवल इलेक्ट्रिक स्कूटर आमतौर पर ₹1 लाख के आसपास और बजट इलेक्ट्रिक कारें ₹7–10 लाख की रेंज से शुरू होती हैं।",
  },
  {
    q: "मैं दो EVs की तुलना कैसे करूँ?",
    a: "किन्हीं दो मॉडलों को तुलना टूल में जोड़ें ताकि रेंज, बैटरी क्षमता, चार्जिंग समय, पावर और कीमत आमने-सामने दिखें और खरीदने से पहले फ़ायदे-नुकसान तौलना आसान हो।",
  },
  {
    q: "क्या भारत में EVs पर सब्सिडी मिलती है?",
    a: "कई EVs केंद्र और राज्य की रियायतों, रोड-टैक्स छूट और रजिस्ट्रेशन लाभ के लिए पात्र होती हैं, लेकिन राशि आपके राज्य, वाहन श्रेणी और मॉडल पर निर्भर करती है, इसलिए स्थानीय रूप से मौजूदा योजना ज़रूर जाँचें।",
  },
];

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

          <div className="mx-auto mt-16 max-w-3xl">
            <div className="prose-ev max-w-3xl">
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                हर EV मॉडल, फ़िल्टर के साथ एक ही जगह
              </h2>
              <p className="mt-4 font-body leading-relaxed text-ev-text/70">
                2026 में भारत में बिक्री पर मौजूद हर इलेक्ट्रिक कार, स्कूटर और
                मोटरसाइकिल को यहाँ ब्राउज़ करें — कीमत, रेंज, बैटरी और चार्जिंग
                स्पेक्स के साथ, सब कुछ यहीं फ़िल्टर करने योग्य। इस EV price list 2026
                में ब्रांड, बॉडी टाइप, कीमत और रेंज के आधार पर छाँटें, या किसी
                श्रेणी पर जाएँ:{" "}
                <Link
                  href={localizedHref("/catalog/electric-cars", "hi")}
                  className="text-brand hover:underline"
                >
                  इलेक्ट्रिक कारें
                </Link>
                ,{" "}
                <Link
                  href={localizedHref("/catalog/electric-scooters", "hi")}
                  className="text-brand hover:underline"
                >
                  इलेक्ट्रिक स्कूटर
                </Link>{" "}
                और{" "}
                <Link
                  href={localizedHref("/catalog/electric-bikes", "hi")}
                  className="text-brand hover:underline"
                >
                  इलेक्ट्रिक मोटरसाइकिल
                </Link>
                ।
              </p>
              <p className="mt-3 font-body leading-relaxed text-ev-text/70">
                फ़ैसला करने के लिए तैयार हैं? दो EVs की{" "}
                <Link
                  href={localizedHref("/compare-electric-vehicles", "hi")}
                  className="text-brand hover:underline"
                >
                  तुलना (इलेक्ट्रिक कार, स्कूटर और बाइक)
                </Link>{" "}
                आमने-सामने करें, देखें कौन-से मॉडल{" "}
                <Link
                  href={localizedHref("/ev-subsidies-india", "hi")}
                  className="text-brand hover:underline"
                >
                  भारत में EV सब्सिडी
                </Link>{" "}
                के पात्र हैं, और{" "}
                <Link
                  href={localizedHref("/ev-calculators/ev-emi-calculator", "hi")}
                  className="text-brand hover:underline"
                >
                  EV EMI कैलकुलेटर
                </Link>{" "}
                से अपनी किस्त निकालें।
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
            "All Electric Vehicles",
            "Every electric car, scooter and bike in India with full filters.",
            "/catalog/all"
          ),
          faqPageSchema(faqs),
        ]}
      />
    </>
  );
}
