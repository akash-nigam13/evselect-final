import type { Metadata } from "next";
import Link from "next/link";
import { GitCompare, Calculator, Car, Bike, Zap } from "lucide-react";
import { altsFor, localizedHref } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";
import AdPlaceholder from "@/components/AdPlaceholder";
import FacetedCatalog from "@/components/catalog/FacetedCatalog";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { EVS, BRANDS } from "@/lib/ev-data";
import { webAppSchema, collectionPageSchema, faqPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "EV सिलेक्शन टूल — भारत में सही इलेक्ट्रिक वाहन चुनें (2026) | EVSelect.in",
  description:
    "भारत के लिए फ्री EV सिलेक्शन टूल। 150+ इलेक्ट्रिक कारें, स्कूटर और बाइक को बजट, रेंज, बैटरी और ब्रांड के अनुसार फ़िल्टर करें, तुलना करें और खर्च का अनुमान लगाएँ — मिनटों में अपनी सही EV खोजें।",
  alternates: altsFor("/ev-selection-tool", "hi"),
};

const carCount = EVS.filter((e) => e.category === "car").length;
const scooterCount = EVS.filter((e) => e.category === "scooter").length;
const bikeCount = EVS.filter((e) => e.category === "motorcycle").length;

const quick = [
  { label: "इलेक्ट्रिक कारें", href: "/catalog/electric-cars", icon: Car, n: carCount },
  { label: "इलेक्ट्रिक स्कूटर", href: "/catalog/electric-scooters", icon: Zap, n: scooterCount },
  { label: "इलेक्ट्रिक बाइक", href: "/catalog/electric-bikes", icon: Bike, n: bikeCount },
];

const faqs = [
  {
    q: "EV सिलेक्शन टूल क्या है?",
    a: "EV सिलेक्शन टूल आपकी ज़रूरत के मुताबिक सही इलेक्ट्रिक वाहन खोजने में मदद करता है — बजट, वास्तविक रेंज, बैटरी, बॉडी टाइप, ब्रांड और चार्जिंग जैसे कारकों पर फ़िल्टर और तुलना करके। EVSelect का फ्री टूल 2026 में भारत में बिक्री पर मौजूद 150+ इलेक्ट्रिक कारें, स्कूटर और मोटरसाइकिलें कवर करता है।",
  },
  {
    q: "मैं अपने लिए सही EV कैसे चुनूँ?",
    a: "अपनी रोज़ाना की दूरी और बजट से शुरू करें, फिर टूल को उसी हिसाब से फ़िल्टर करें। दो-तीन मॉडल शॉर्टलिस्ट करें, उन्हें रेंज, बैटरी, चार्जिंग और कीमत पर आमने-सामने रखें, और खरीदने से पहले कॉस्ट व EMI कैलकुलेटर से किफ़ायत जाँचें।",
  },
  {
    q: "क्या EV सिलेक्शन टूल फ्री है?",
    a: "हाँ। EVSelect का सिलेक्शन टूल, तुलना टूल और सभी कैलकुलेटर पूरी तरह फ्री हैं, बिना साइन-अप के। डेटा 2026 के लिए अपडेटेड रहता है।",
  },
  {
    q: "क्या इसमें कारें, स्कूटर और बाइक तीनों शामिल हैं?",
    a: `हाँ — टूल तीनों श्रेणियाँ कवर करता है: ${carCount} इलेक्ट्रिक कारें, ${scooterCount} इलेक्ट्रिक स्कूटर और ${bikeCount} इलेक्ट्रिक मोटरसाइकिलें, ${BRANDS.length} ब्रांडों में।`,
  },
];

export default function HiEvSelectionToolPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden">
          <Aurora variant="dual" />
          <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 sm:pt-20 lg:px-8">
            <Breadcrumbs
              items={[{ name: "EV सिलेक्शन टूल", path: "/hi/ev-selection-tool" }]}
              homeName="होम"
              homeHref="/hi"
              className="mb-6"
            />
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-brand">
              EV सिलेक्शन टूल
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-ev-text sm:text-5xl lg:text-6xl text-balance">
              अपने लिए सही <span className="text-gradient-brand">इलेक्ट्रिक वाहन</span> खोजें
            </h1>
            <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-ev-muted sm:text-lg">
              भारत का फ्री EV सिलेक्शन टूल। {EVS.length} इलेक्ट्रिक कारें, स्कूटर और
              बाइक को बजट, रेंज, बैटरी और ब्रांड के अनुसार फ़िल्टर करें — फिर अपनी
              शॉर्टलिस्ट की तुलना करें और खरीदने से पहले असली खर्च का अनुमान लगाएँ।
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {quick.map(({ label, href, icon: Icon, n }) => (
                <Link
                  key={label}
                  href={localizedHref(href, "hi")}
                  className="inline-flex items-center gap-2 rounded-xl border border-ev-border bg-ev-card/60 px-4 py-2.5 font-display text-sm font-medium text-ev-text/85 transition-colors hover:border-brand/40 hover:text-brand"
                >
                  <Icon className="h-4 w-4 text-brand" /> {label}
                  <span className="font-mono text-xs text-ev-muted">{n}</span>
                </Link>
              ))}
              <Link
                href={localizedHref("/compare-electric-vehicles", "hi")}
                className="inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-4 py-2.5 font-display text-sm font-bold text-ev-bg transition-all hover:shadow-ev-glow"
              >
                <GitCompare className="h-4 w-4" /> EVs की तुलना
              </Link>
              <Link
                href={localizedHref("/ev-calculators", "hi")}
                className="inline-flex items-center gap-2 rounded-xl border border-ev-border bg-ev-card/60 px-4 py-2.5 font-display text-sm font-medium text-ev-text/85 transition-colors hover:border-brand/40 hover:text-brand"
              >
                <Calculator className="h-4 w-4 text-brand" /> कॉस्ट और EMI कैलकुलेटर
              </Link>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
          <FacetedCatalog pool={EVS} />
          <AdPlaceholder format="leaderboard" slot="3333333333" className="mt-12" />
        </div>

        <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="prose-ev mt-12 max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              EV सिलेक्शन टूल का उपयोग कैसे करें
            </h2>
            <p className="mt-4 font-body leading-relaxed text-ev-text/70">
              भारत में इलेक्ट्रिक वाहन चुनने के लिए अब पहले से कहीं ज़्यादा विकल्प हैं — {BRANDS.length}{" "}
              ब्रांडों में {EVS.length} मॉडल। हमारा EV सिलेक्शन टूल इस चुनाव को कुछ आसान
              चरणों में बदल देता है। पहले अपनी ज़रूरत पर फ़िल्टर करें: बजट सेट करें, बॉडी
              टाइप चुनें, और रेंज, बैटरी या ब्रांड के अनुसार छाँटें। सूची तुरंत अपडेट होती है।
            </p>
            <p className="mt-3 font-body leading-relaxed text-ev-text/70">
              शॉर्टलिस्ट बनने पर मॉडलों को हमारे{" "}
              <Link href={localizedHref("/compare-electric-vehicles", "hi")} className="text-brand hover:underline">
                EV तुलना टूल
              </Link>{" "}
              से आमने-सामने रखें, फिर{" "}
              <Link href={localizedHref("/ev-calculators/ev-vs-petrol-cost-calculator", "hi")} className="text-brand hover:underline">
                EV बनाम पेट्रोल कॉस्ट कैलकुलेटर
              </Link>{" "}
              और{" "}
              <Link href={localizedHref("/ev-calculators/ev-emi-calculator", "hi")} className="text-brand hover:underline">
                EV EMI कैलकुलेटर
              </Link>{" "}
              से खर्च की पुष्टि करें।
            </p>
            <h2 className="mt-10 font-display text-2xl font-bold text-white sm:text-3xl">
              EV चुनते समय किन बातों का ध्यान रखें
            </h2>
            <p className="mt-4 font-body leading-relaxed text-ev-text/70">
              सही EV इस पर निर्भर करती है कि आप उसका उपयोग कैसे करेंगे। सिटी कम्यूट के लिए{" "}
              <Link href={localizedHref("/catalog/electric-scooters", "hi")} className="text-brand hover:underline">
                इलेक्ट्रिक स्कूटर
              </Link>{" "}
              या कॉम्पैक्ट{" "}
              <Link href={localizedHref("/catalog/electric-cars", "hi")} className="text-brand hover:underline">
                इलेक्ट्रिक कार
              </Link>{" "}
              सबसे किफ़ायती हैं; हाईवे और परिवार के लिए रेंज और फ़ास्ट चार्जिंग को प्राथमिकता दें।
              परफ़ॉर्मेंस के शौकीन{" "}
              <Link href={localizedHref("/catalog/electric-bikes", "hi")} className="text-brand hover:underline">
                इलेक्ट्रिक मोटरसाइकिलें
              </Link>{" "}
              देख सकते हैं। यह भी जाँचें कि कौन-से मॉडल{" "}
              <Link href={localizedHref("/ev-subsidies-india", "hi")} className="text-brand hover:underline">
                भारत में EV सब्सिडी
              </Link>{" "}
              के पात्र हैं, और पूरा{" "}
              <Link href={localizedHref("/catalog", "hi")} className="text-brand hover:underline">
                EV कैटलॉग
              </Link>{" "}
              व{" "}
              <Link href={localizedHref("/brand", "hi")} className="text-brand hover:underline">
                ब्रांड डायरेक्टरी
              </Link>{" "}
              देखें।
            </p>
          </div>

          <section className="mt-16">
            <h2 className="mb-6 font-display text-2xl font-bold text-white sm:text-3xl">
              अक्सर पूछे जाने वाले सवाल
            </h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-ev-border bg-ev-card p-5">
                  <summary className="cursor-pointer font-display font-bold text-white">{f.q}</summary>
                  <p className="mt-3 font-body leading-relaxed text-ev-text/70">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer locale="hi" />
      <JsonLd
        data={[
          webAppSchema(
            "EV Selection Tool",
            "Free tool to find, filter and compare electric vehicles in India by budget, range, battery and brand.",
            "/ev-selection-tool"
          ),
          collectionPageSchema(
            "EV Selection Tool — Find the Right Electric Vehicle in India",
            "Filter and compare 150+ electric cars, scooters and bikes in India to find your perfect EV.",
            "/ev-selection-tool"
          ),
          faqPageSchema(faqs),
        ]}
      />
    </>
  );
}
