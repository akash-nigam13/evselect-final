import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";
import AdPlaceholder from "@/components/AdPlaceholder";
import FacetedCatalog from "@/components/catalog/FacetedCatalog";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ToolsCTA from "@/components/ToolsCTA";
import { byCategory, priceFromLakh, type EVCategory } from "@/lib/ev-data";
import { collectionPageSchema, faqPageSchema } from "@/lib/seo";
import { type Locale, localizedHref } from "@/lib/i18n";

type Copy = { label: string; labelHi: string; h1: string; h1Hi: string; lead: string; leadHi: string };

const COPY: Record<EVCategory, Copy> = {
  car: {
    label: "Electric Cars", labelHi: "इलेक्ट्रिक कारें",
    h1: "Electric Cars in India", h1Hi: "भारत में इलेक्ट्रिक कारें",
    lead: "Every electric car on sale in India in 2026 — compare price, real-world range, battery and charging in one place.",
    leadHi: "2026 में भारत में बिक्री पर मौजूद हर इलेक्ट्रिक कार — कीमत, असली रेंज, बैटरी और चार्जिंग एक ही जगह तुलना करें।",
  },
  scooter: {
    label: "Electric Scooters", labelHi: "इलेक्ट्रिक स्कूटर",
    h1: "Electric Scooters in India", h1Hi: "भारत में इलेक्ट्रिक स्कूटर",
    lead: "Browse every electric scooter in India for 2026 — range, battery, top speed and price, all filterable side by side.",
    leadHi: "2026 के लिए भारत के हर इलेक्ट्रिक स्कूटर को देखें — रेंज, बैटरी, टॉप स्पीड और कीमत, सब फ़िल्टर के साथ।",
  },
  motorcycle: {
    label: "Electric Bikes", labelHi: "इलेक्ट्रिक बाइक",
    h1: "Electric Bikes in India", h1Hi: "भारत में इलेक्ट्रिक बाइक",
    lead: "All electric motorcycles on sale in India in 2026 — compare range, performance, battery and price at a glance.",
    leadHi: "2026 में भारत में बिक्री पर मौजूद सभी इलेक्ट्रिक मोटरसाइकिल — रेंज, परफ़ॉर्मेंस, बैटरी और कीमत एक नज़र में।",
  },
};

export default function CategoryCatalog({ category, locale = "en" }: { category: EVCategory; locale?: Locale }) {
  const isHi = locale === "hi";
  const href = (p: string) => localizedHref(p, locale);
  const c = COPY[category];
  const pool = byCategory(category);
  const label = isHi ? c.labelHi : c.label;

  const cheapest = [...pool].filter((e) => e.priceMinLakh != null).sort((a, b) => a.priceMinLakh! - b.priceMinLakh!)[0];
  const longest = [...pool].filter((e) => e.rangeKmARAI != null).sort((a, b) => b.rangeKmARAI! - a.rangeKmARAI!)[0];
  const noun = category === "car" ? (isHi ? "इलेक्ट्रिक कार" : "electric car") : category === "scooter" ? (isHi ? "इलेक्ट्रिक स्कूटर" : "electric scooter") : (isHi ? "इलेक्ट्रिक बाइक" : "electric bike");

  const faqs = [
    isHi
      ? { q: `भारत में कितनी ${label} उपलब्ध हैं?`, a: `EVSelect.in पर इस समय ${pool.length} ${label} ट्रैक की जा रही हैं, जिनकी कीमत और स्पेसिफिकेशन 2026 के लिए अपडेटेड हैं।` }
      : { q: `How many ${c.label.toLowerCase()} are available in India?`, a: `EVSelect.in currently tracks ${pool.length} ${c.label.toLowerCase()} in India, with prices and specifications updated for 2026.` },
    cheapest && (isHi
      ? { q: `सबसे सस्ती ${noun} कौन-सी है?`, a: `सबसे किफ़ायती ${noun} ${cheapest.name} है, जिसकी एक्स-शोरूम कीमत ${priceFromLakh(cheapest.priceMinLakh!)} से शुरू होती है।` }
      : { q: `Which is the cheapest ${noun} in India?`, a: `The most affordable ${noun} is the ${cheapest.name}, starting at ${priceFromLakh(cheapest.priceMinLakh!)} (ex-showroom).` }),
    longest?.rangeKmARAI != null && (isHi
      ? { q: `सबसे ज़्यादा रेंज वाली ${noun} कौन-सी है?`, a: `${longest.name} सबसे ज़्यादा रेंज देती है — ARAI के अनुसार ${longest.rangeKmARAI} km।` }
      : { q: `Which ${noun} has the longest range?`, a: `The ${longest.name} offers the longest range, with a claimed ${longest.rangeKmARAI} km (ARAI).` }),
    isHi
      ? { q: `क्या ${label} पर सब्सिडी मिलती है?`, a: `कई राज्य EV खरीद पर सब्सिडी और रोड-टैक्स छूट देते हैं। ताज़ा राज्यवार जानकारी के लिए हमारी EV सब्सिडी गाइड देखें।` }
      : { q: `Are ${c.label.toLowerCase()} eligible for subsidies in India?`, a: `Many states offer purchase subsidies and road-tax waivers on EVs. See our EV subsidies guide for the latest state-by-state details.` },
  ].filter(Boolean) as { q: string; a: string }[];

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden">
          <Aurora variant="dual" />
          <div className="mx-auto max-w-7xl px-4 pb-10 pt-14 sm:px-6 lg:px-8">
            <Breadcrumbs
              homeName={isHi ? "होम" : "Home"}
              homeHref={isHi ? "/hi" : "/"}
              items={[
                { name: isHi ? "कैटलॉग" : "Catalog", path: href("/catalog") },
                { name: label, path: href(`/catalog/${category === "car" ? "electric-cars" : category === "scooter" ? "electric-scooters" : "electric-bikes"}`) },
              ]}
              className="mb-4"
            />
            <Link href={href("/catalog")} className="mb-6 inline-flex items-center gap-1.5 font-mono text-xs text-ev-muted transition-colors hover:text-brand">
              <ArrowLeft className="h-3.5 w-3.5" /> {isHi ? "सभी ब्रांड" : "All brands"}
            </Link>
            <h1 className="font-display text-4xl font-bold text-ev-text sm:text-5xl">
              {isHi ? c.h1Hi : c.h1} <span className="text-gradient-brand">2026</span>
            </h1>
            <p className="mt-4 max-w-2xl font-body text-ev-muted">{isHi ? c.leadHi : c.lead}</p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          {/* Primary: filterable list first */}
          <FacetedCatalog pool={pool} />
          <AdPlaceholder format="leaderboard" slot="3333333333" className="mt-12" />
          <ToolsCTA locale={locale} tools={["compare", "emi", "cost"]} className="mt-10" />

          {/* SEO copy */}
          <div className="prose-ev mt-12 max-w-3xl">
            <h2>{isHi ? `${label} — कीमत, रेंज और चुनाव` : `${c.label} in India — prices, range & choosing`}</h2>
            <p>
              {isHi
                ? `${label} तेज़ी से लोकप्रिय हो रही हैं क्योंकि चलने की लागत कम है और सरकार EV अपनाने को बढ़ावा दे रही है। ऊपर दी गई सूची में हर मॉडल की कीमत, ARAI रेंज, बैटरी क्षमता और चार्जिंग समय फ़िल्टर के साथ तुलना करें।`
                : `${c.label} are gaining ground fast in India thanks to low running costs and government EV incentives. Use the filterable list above to compare every model's price, ARAI range, battery capacity and charging time side by side.`}
            </p>
            <p className="text-sm">
              {isHi ? "और देखें: " : "Explore more: "}
              <Link href={href("/compare-electric-vehicles")}>{isHi ? "EVs की तुलना" : "compare EVs"}</Link>,{" "}
              <Link href={href("/ev-calculators/ev-emi-calculator")}>{isHi ? "EMI कैलकुलेटर" : "EMI calculator"}</Link>,{" "}
              <Link href={href("/ev-subsidies-india")}>{isHi ? "EV सब्सिडी" : "EV subsidies"}</Link> {isHi ? "और" : "and the"}{" "}
              <Link href={href("/catalog")}>{isHi ? "पूरा कैटलॉग" : "full catalog"}</Link>.
            </p>
          </div>

          {/* FAQ */}
          <section className="mt-12 max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-ev-text sm:text-3xl">
              {isHi ? `${label} — अक्सर पूछे जाने वाले सवाल` : `${c.label} — frequently asked questions`}
            </h2>
            <div className="mt-6 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-ev-border bg-ev-card p-5">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-sm font-bold text-white">
                    {f.q}
                    <span className="text-brand transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 font-body text-sm leading-relaxed text-ev-text/70">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer locale={locale} />
      <JsonLd
        data={[
          collectionPageSchema(`${c.label} in India`, c.lead, `/catalog/${category === "car" ? "electric-cars" : category === "scooter" ? "electric-scooters" : "electric-bikes"}`),
          faqPageSchema(faqs),
        ]}
      />
    </>
  );
}
