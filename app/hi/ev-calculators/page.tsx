import type { Metadata } from "next";
import Link from "next/link";
import { Banknote, TrendingDown, Gauge, GitCompare, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import Aurora from "@/components/ui/Aurora";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { altsFor, localizedHref } from "@/lib/i18n";
import { webPageSchema, itemListSchema, faqPageSchema } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: altsFor("/ev-calculators", "hi"),
  title: "मुफ़्त EV टूल्स — EMI, कॉस्ट और रेंज कैलकुलेटर (भारत 2026)",
  description:
    "भारत के लिए इंटरैक्टिव EV कैलकुलेटर: अपनी EV लोन EMI निकालें, EV बनाम पेट्रोल का खर्च तुलना करें, और किसी भी EV की असल रेंज व चार्जिंग समय का अनुमान लगाएँ।",
};

const tools = [
  {
    title: "EV EMI कैलकुलेटर",
    desc: "अपनी मासिक EV लोन EMI, कुल ब्याज और देय राशि का अनुमान लगाएँ। डाउन पेमेंट, ब्याज दर और अवधि बदलें।",
    href: "/ev-calculators/ev-emi-calculator",
    Icon: Banknote,
    accent: "#8B7BFF",
  },
  {
    title: "EV बनाम पेट्रोल कॉस्ट कैलकुलेटर",
    desc: "अपनी असल यूसेज के आधार पर देखें कि पेट्रोल के बजाय EV चलाने में कितनी बचत होती है।",
    href: "/ev-calculators/ev-vs-petrol-cost-calculator",
    Icon: TrendingDown,
    accent: "#26E0C4",
  },
  {
    title: "EV रेंज और चार्जिंग कैलकुलेटर",
    desc: "भारतीय परिस्थितियों में किसी भी EV की असल रेंज और चार्जिंग समय का अनुमान लगाएँ।",
    href: "/ev-calculators/ev-range-calculator",
    Icon: Gauge,
    accent: "#34D399",
  },
  {
    title: "EVs की तुलना करें",
    desc: "किन्हीं भी दो या तीन इलेक्ट्रिक वाहनों को रेंज, बैटरी, कीमत और चार्जिंग पर साथ-साथ रखें।",
    href: "/compare-electric-vehicles",
    Icon: GitCompare,
    accent: "#60A5FA",
  },
];

const faqs = [
  {
    q: "EVSelect.in कौन-कौन से EV कैलकुलेटर देता है?",
    a: "EVSelect.in भारत के लिए तीन मुफ़्त EV कैलकुलेटर देता है: अपनी मासिक लोन किस्त निकालने के लिए EV EMI कैलकुलेटर, ईंधन की बचत देखने के लिए EV बनाम पेट्रोल कॉस्ट कैलकुलेटर, और असल रेंज व चार्जिंग समय का अनुमान लगाने के लिए EV रेंज और चार्जिंग कैलकुलेटर।",
  },
  {
    q: "क्या ये EV कैलकुलेटर मुफ़्त हैं?",
    a: "हाँ। सभी EV कैलकुलेटर पूरी तरह मुफ़्त हैं और इनके लिए किसी साइन-अप की ज़रूरत नहीं। आप जितने चाहें उतने अनुमान, जितनी बार चाहें, लगा सकते हैं।",
  },
  {
    q: "अनुमान कितने सटीक होते हैं?",
    a: "ये कैलकुलेटर असल 2026 भारतीय EV स्पेक्स और मानक वित्तीय फ़ॉर्मूलों पर बने हैं, इसलिए योजना बनाने के लिए भरोसेमंद अंदाज़ा देते हैं। असल आँकड़े आपकी सटीक लोन शर्तों, बिजली व पेट्रोल कीमतों, ड्राइविंग स्टाइल और मौसम के साथ बदलते हैं, इसलिए नतीजों को कोटेशन नहीं बल्कि अनुमान मानें।",
  },
  {
    q: "क्या मुझे व्यक्तिगत जानकारी देनी होगी?",
    a: "नहीं। ये EV कैलकुलेटर पूरी तरह आपके ब्राउज़र में, आपके दर्ज किए आँकड़ों (जैसे कीमत, डाउन पेमेंट, ब्याज दर और यूसेज) से काम करते हैं। आपको कोई व्यक्तिगत या संपर्क जानकारी साझा करने की ज़रूरत नहीं।",
  },
];

export default function HiToolsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden border-b border-ev-border/40">
          <Aurora variant="dual" />
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[{ name: "टूल्स", path: "/hi/ev-calculators" }]}
              homeName="होम"
              homeHref="/hi"
              className="mb-6"
            />
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-brand">मुफ़्त टूल्स</p>
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl text-balance">
              इलेक्ट्रिक चुनने से पहले <span className="text-gradient-brand">हिसाब लगाएँ</span>
            </h1>
            <p className="mt-4 max-w-2xl font-body text-ev-text/60">
              असल 2026 भारतीय EV डेटा पर बने इंटरैक्टिव कैलकुलेटर — अपनी लोन EMI, पेट्रोल के मुकाबले बचत,
              और असल रेंज व चार्जिंग समय निकालें।
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {tools.map(({ title, desc, href, Icon, accent }) => (
              <Link
                key={href}
                href={localizedHref(href, "hi")}
                className="card-hover group flex flex-col rounded-2xl border border-ev-border bg-ev-card p-7"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${accent}18`, border: `1px solid ${accent}40` }}
                >
                  <Icon className="h-6 w-6" style={{ color: accent }} />
                </span>
                <h2 className="mt-5 font-display text-xl font-bold text-white transition-colors group-hover:text-brand">
                  {title}
                </h2>
                <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-ev-text/60">{desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-bold text-brand">
                  खोलें <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <AdPlaceholder format="leaderboard" slot="3333333333" className="mt-12" />

          <div className="prose-ev mb-12 mt-16 max-w-3xl">
            <h2>भारत के लिए मुफ़्त EV कैलकुलेटर</h2>
            <p>
              इलेक्ट्रिक चुनना जितना ड्राइविंग का फ़ैसला है, उतना ही हिसाब-किताब का भी। हमारा EV
              कैलकुलेटर टूलकिट तीन मुफ़्त टूल एक साथ लाता है जो खरीदारों के सबसे आम सवालों के जवाब देते
              हैं। EV EMI कैलकुलेटर आपकी मासिक लोन किस्त, कुल ब्याज और देय राशि दिखाता है जब आप कीमत,
              डाउन पेमेंट, ब्याज दर और अवधि तय करते हैं। EV बनाम पेट्रोल कॉस्ट कैलकुलेटर बताता है कि आप
              हर साल ईंधन पर कितनी बचत करते हैं, और EV रेंज व चार्जिंग कैलकुलेटर भारतीय परिस्थितियों में
              असल रेंज और चार्जिंग समय का अनुमान लगाता है।
            </p>
            <p>
              मिलकर ये टूल आपको खरीद की शुरुआती और लंबे समय की लागत — दोनों की साफ़ तस्वीर देते हैं।
              हिसाब लगाने के बाद आप{" "}
              <Link href={localizedHref("/compare-electric-vehicles", "hi")}>
                इलेक्ट्रिक वाहनों की साथ-साथ तुलना
              </Link>{" "}
              कर सकते हैं, देख सकते हैं कि{" "}
              <Link href={localizedHref("/ev-subsidies-india", "hi")}>भारत में EV सब्सिडी</Link> से
              कितना दावा कर सकते हैं, या अपना अगला वाहन शॉर्टलिस्ट करने के लिए पूरा{" "}
              <Link href={localizedHref("/catalog/all", "hi")}>EV कैटलॉग</Link> ब्राउज़ कर सकते हैं।
            </p>
          </div>

          <section className="mt-16 max-w-3xl">
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
          webPageSchema(
            "मुफ़्त EV टूल्स — EMI, कॉस्ट और रेंज कैलकुलेटर",
            "भारत के लिए इंटरैक्टिव EV कैलकुलेटर: EMI, EV बनाम पेट्रोल खर्च, और असल रेंज व चार्जिंग।",
            "/ev-calculators"
          ),
          itemListSchema(tools.map((t) => ({ name: t.title, path: t.href }))),
          faqPageSchema(faqs),
        ]}
      />
    </>
  );
}
