import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToolsCTA from "@/components/ToolsCTA";
import Aurora from "@/components/ui/Aurora";
import AdPlaceholder from "@/components/AdPlaceholder";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Glossary from "@/components/learn/Glossary";
import { collectionPageSchema, definedTermSetSchema } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "EV 101 — भारत में इलेक्ट्रिक वाहनों के बारे में जानें",
  description:
    "इलेक्ट्रिक वाहनों में नए हैं? बैटरी, चार्जिंग, जार्गन और इंसेंटिव सरल भाषा में समझें — भारत के 2026 संदर्भ के लिए।",
  alternates: altsFor("/learn", "hi"),
};

const topics = [
  { title: "EV कैसे काम करती है", desc: "बैटरी, मोटर और रीजन ब्रेकिंग — आसान भाषा में।" },
  { title: "बैटरी की मूल बातें", desc: "kWh, रेंज और बैटरी की सेहत का मतलब।" },
  { title: "चार्जिंग समझें", desc: "AC बनाम DC, घर बनाम पब्लिक, और कनेक्टर।" },
  { title: "खर्च और बचत", desc: "पेट्रोल की तुलना में EV का असल खर्च।" },
  { title: "सरकारी इंसेंटिव", desc: "PM E-Drive, राज्य सब्सिडी और रोड टैक्स।" },
  { title: "रखरखाव और ओनरशिप", desc: "EV रखना कितना आसान और किफ़ायती है।" },
];

export default function HiLearnPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden">
          <Aurora variant="dual" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/heroes/learn.jpg"
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-ev-bg via-ev-bg/60 to-ev-bg/20"
          />
          <div className="mx-auto max-w-7xl px-4 pb-12 pt-14 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[{ name: "जानें", path: "/hi/learn" }]}
              homeName="होम"
              homeHref="/hi"
              className="mb-6"
            />
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-brand">EV 101</p>
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl text-balance">
              इलेक्ट्रिक वाहनों को <span className="text-gradient-brand">समझने</span> की हर बात
            </h1>
            <p className="mt-4 max-w-2xl font-body text-ev-text/60">
              पहली बार EV खरीद रहे हैं? बैटरी से लेकर चार्जिंग और इंसेंटिव तक —
              सब कुछ सरल भाषा में।
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((tp) => (
              <div key={tp.title} className="card-hover rounded-2xl border border-ev-border bg-ev-card p-6">
                <h3 className="font-display text-base font-bold text-white">{tp.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ev-text/55">{tp.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="mb-6 font-display text-2xl font-bold text-white">जार्गन बस्टर — शब्दावली</h2>
            <Glossary />
          </div>

          <div className="mt-14 rounded-2xl border border-brand/25 bg-ev-card p-8 text-center">
            <p className="font-display text-xl font-bold text-white">अपनी EV चुनने के लिए तैयार हैं?</p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link href="/hi/catalog" className="inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-5 py-3 font-display text-sm font-bold text-ev-bg">
                कैटलॉग देखें <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/hi/compare" className="inline-flex items-center gap-2 rounded-xl border border-ev-border px-5 py-3 font-display text-sm font-medium text-ev-text/85 hover:border-brand/40 hover:text-brand">
                EV तुलना करें
              </Link>
            </div>
          </div>

          <AdPlaceholder format="leaderboard" slot="5555555555" className="mt-12" />

          <ToolsCTA locale="hi" tools={["compare", "emi", "cost", "range"]} className="mt-12" />
        </div>
      </main>
      <Footer locale="hi" />
      <JsonLd
        data={[
          collectionPageSchema("EV 101 — Learn", "Beginner-friendly EV guides for India.", "/learn"),
          definedTermSetSchema("/learn"),
        ]}
      />
    </>
  );
}
