import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import Aurora from "@/components/ui/Aurora";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { webAppSchema, faqPageSchema, SITE } from "@/lib/seo";
import { altsFor, localizedHref } from "@/lib/i18n";
import CompareClient from "@/components/compare/CompareClient";
import { getById } from "@/lib/ev-data";
import { COMPARE_PAIRS, comparePath } from "@/lib/compare-pairs";
import type { Metadata } from "next";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}): Promise<Metadata> {
  // noindex any ?ids= preselected variant (same content as the clean page).
  const hasParams = Object.keys(searchParams ?? {}).length > 0;
  return {
    title: "इलेक्ट्रिक वाहनों की साथ-साथ तुलना करें",
    description:
      "भारत में किन्हीं भी दो या तीन EVs की साथ-साथ तुलना करें — रेंज, बैटरी, कीमत, पावर और चार्जिंग। 140+ इलेक्ट्रिक कार, स्कूटर और बाइक का लाइव डेटा।",
    alternates: altsFor("/compare-electric-vehicles", "hi"),
    ...(hasParams ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title: "इलेक्ट्रिक वाहनों की साथ-साथ तुलना करें | EVSelect.in",
      description:
        "भारत में 2–3 EVs की साथ-साथ तुलना करें — कीमत, रेंज, बैटरी, पावर और चार्जिंग। 140+ इलेक्ट्रिक कार, स्कूटर और बाइक।",
      url: `${SITE.url}/hi/compare-electric-vehicles`,
      type: "website",
    },
  };
}

const popularComparisons = COMPARE_PAIRS.map(([a, b]) => {
  const ea = getById(a);
  const eb = getById(b);
  return ea && eb ? { slug: `${a}-vs-${b}`, a: ea, b: eb, path: comparePath(a, b) } : null;
}).filter(Boolean) as { slug: string; a: { name: string }; b: { name: string }; path: string }[];

const faqs = [
  {
    q: "एक बार में कितने EVs की तुलना कर सकते हैं?",
    a: "आप एक बार में दो या तीन इलेक्ट्रिक वाहनों की तुलना कर सकते हैं। साफ़ आमने-सामने मुकाबले के लिए कोई भी दो EVs चुनें, या एक ही स्क्रीन पर तीन विकल्पों को तौलने के लिए तीसरा जोड़ें।",
  },
  {
    q: "किन स्पेक्स की तुलना कर सकते हैं?",
    a: "तुलना टूल हर ज़रूरी स्पेक को साथ-साथ रखता है — एक्स-शोरूम कीमत, असल रेंज, बैटरी क्षमता, पावर और टॉर्क, टॉप स्पीड, चार्जिंग समय और फास्ट-चार्जिंग सपोर्ट — हर पंक्ति में सबसे बेहतर वैल्यू हाइलाइट के साथ।",
  },
  {
    q: "क्या यह तुलना टूल मुफ़्त है?",
    a: "हाँ। यह तुलना टूल पूरी तरह मुफ़्त है और इसके लिए किसी साइन-अप की ज़रूरत नहीं। यह भारत में बिकने वाली 140+ इलेक्ट्रिक कार, स्कूटर और बाइक के लाइव डेटा पर चलता है।",
  },
  {
    q: "किन इलेक्ट्रिक वाहनों की तुलना कर सकते हैं?",
    a: "आप भारत में उपलब्ध हर बड़े ब्रांड की इलेक्ट्रिक कार, स्कूटर और बाइक की तुलना कर सकते हैं, जिनमें Tata, MG, Mahindra, Hyundai, BYD, Ola, Ather, TVS और अन्य शामिल हैं।",
  },
];

export default function HiComparePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden border-b border-ev-border/40">
          <Aurora variant="dual" />
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[{ name: "तुलना करें", path: "/hi/compare-electric-vehicles" }]}
              homeName="होम"
              homeHref="/hi"
              className="mb-6 justify-center"
            />
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-brand">
              तुलना इंजन
            </p>
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
              <span className="text-gradient-brand">इलेक्ट्रिक वाहनों</span> की साथ-साथ तुलना करें
            </h1>
            <p className="mx-auto mt-4 max-w-xl font-body text-ev-text/60">
              दो या तीन इलेक्ट्रिक वाहन चुनें और हर ज़रूरी स्पेक का पूरा साथ-साथ
              ब्योरा पाएँ — विजेता हाइलाइट के साथ।
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <CompareClient />
          <AdPlaceholder format="leaderboard" slot="3333333333" className="mt-12" />

          <div className="prose-ev mx-auto mb-12 mt-16 max-w-3xl">
            <h2>भारत में इलेक्ट्रिक वाहनों की साथ-साथ तुलना करें</h2>
            <p>
              जब हर आँकड़ा एक ही जगह दिखे, तो दो या तीन EVs के बीच चुनाव कहीं आसान हो जाता है। हमारा
              तुलना टूल आपको उन्हीं स्पेक्स पर भारत में इलेक्ट्रिक वाहनों की तुलना करने देता है जो असल
              में खरीदारी तय करते हैं — एक्स-शोरूम कीमत, असल रेंज, बैटरी क्षमता, पावर, चार्जिंग समय और
              बहुत कुछ — हर पंक्ति में सबसे बेहतर वैल्यू हाइलाइट के साथ, ताकि फ़र्क एक नज़र में साफ़ दिखे।
            </p>
            <p>
              <strong>तुलना टूल कैसे इस्तेमाल करें:</strong> पहला EV चुनें, दूसरा (और चाहें तो तीसरा)
              जोड़ें, फिर साथ-साथ स्पेक्स टेबल देखें। यह इलेक्ट्रिक कार, स्कूटर और बाइक — सभी पर काम
              करता है। पहले बड़ी सूची देखना चाहते हैं? पूरा{" "}
              <Link href={localizedHref("/catalog", "hi")}>EV कैटलॉग</Link> ब्राउज़ करें, हमारे{" "}
              <Link href={localizedHref("/ev-calculators/ev-emi-calculator", "hi")}>
                EV EMI कैलकुलेटर
              </Link>{" "}
              से मासिक खर्च निकालें, या देखें कि आप{" "}
              <Link href={localizedHref("/ev-subsidies-india", "hi")}>भारत में EV सब्सिडी</Link> से
              कितनी बचत कर सकते हैं।
            </p>
          </div>

          <section className="mx-auto mb-12 max-w-5xl">
            <h2 className="mb-2 font-display text-2xl font-bold text-white">
              लोकप्रिय EV तुलनाएँ
            </h2>
            <p className="mb-6 font-body text-sm text-ev-text/60">
              खरीदार जिन मुकाबलों के बारे में सबसे ज़्यादा पूछते हैं, सीधे उन पर जाएँ।
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {popularComparisons.map((c) => (
                <Link
                  key={c.slug}
                  href={c.path}
                  className="card-hover rounded-xl border border-ev-border bg-ev-card p-4"
                >
                  <span className="text-sm font-semibold text-white">
                    {c.a.name} <span className="text-brand">vs</span> {c.b.name}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="mx-auto mt-16 max-w-3xl">
            <h2 className="mb-6 font-display text-2xl font-bold text-white">
              अक्सर पूछे जाने वाले सवाल
            </h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-ev-border bg-ev-card p-5"
                >
                  <summary className="cursor-pointer list-none font-display font-bold text-white marker:hidden">
                    {f.q}
                  </summary>
                  <p className="mt-3 font-body text-sm leading-relaxed text-ev-text/70">{f.a}</p>
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
            "EV Comparison Tool",
            "Compare any two or three electric vehicles in India side by side.",
            "/compare-electric-vehicles"
          ),
          faqPageSchema(faqs),
        ]}
      />
    </>
  );
}
