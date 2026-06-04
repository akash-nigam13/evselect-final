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
import { webPageSchema, itemListSchema } from "@/lib/seo";

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
        ]}
      />
    </>
  );
}
