import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";
import AdPlaceholder from "@/components/AdPlaceholder";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { NEWS } from "@/lib/news";
import { collectionPageSchema } from "@/lib/seo";
import { altsFor, localizedHref } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "EV समाचार और 2026 लॉन्च — भारत",
  description:
    "भारत के EV बाज़ार की ताज़ा खबरें, नए लॉन्च और 2026 की टाइमलाइन — कारें, स्कूटर और बाइक।",
  alternates: altsFor("/ev-news", "hi"),
};

const accent: Record<string, string> = {
  Launch: "#26E0C4",
  Policy: "#8B7BFF",
  Charging: "#C6F94E",
  Technology: "#FFC247",
  Market: "#60A5FA",
};

export default function HiNewsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden">
          <Aurora variant="dual" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/heroes/news.jpg"
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
              items={[{ name: "समाचार", path: "/hi/ev-news" }]}
              homeName="होम"
              homeHref="/hi"
              className="mb-6"
            />
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-brand">
              समाचार और लॉन्च
            </p>
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
              भारत के EV बाज़ार की <span className="text-gradient-brand">ताज़ा खबरें</span>
            </h1>
            <p className="mt-4 max-w-2xl font-body text-ev-text/60">
              नए लॉन्च, बिक्री के आँकड़े और नीतिगत अपडेट — मुख्य ब्योरे अभी अंग्रेज़ी
              में हैं और जल्द ही हिन्दी में आ रहे हैं।
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-4 pt-12 sm:px-6 lg:px-8">
          <div className="prose-ev">
            <h2>भारत में इलेक्ट्रिक वाहनों की ताज़ा खबरें (2026)</h2>
            <p>
              2026 में भारत के EV बाज़ार की हर अहम खबर एक जगह — नए launches और
              कीमतों में बदलाव से लेकर सरकारी नीति, FAME और राज्य सब्सिडी, तथा
              तेज़ी से बढ़ते public charging नेटवर्क तक। यह टाइमलाइन उन launches,
              range और battery अपडेट्स और बाज़ार की हलचलों पर नज़र रखती है जो तय
              करती हैं कि भारतीय इलेक्ट्रिक कार, स्कूटर और बाइक कैसे ख़रीदते हैं।
              और गहराई से समझने के लिए हमारा{" "}
              <Link href={localizedHref("/blog", "hi")}>EV ब्लॉग और गाइड</Link> पढ़ें,{" "}
              <Link href={localizedHref("/catalog/all", "hi")}>पूरा EV कैटलॉग</Link>{" "}
              ब्राउज़ करें, या{" "}
              <Link href={localizedHref("/ev-subsidies-india", "hi")}>
                भारत में EV सब्सिडी
              </Link>{" "}
              से होने वाली बचत देखें।
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <ol className="relative space-y-6 border-l border-ev-border/60 pl-6">
            {NEWS.map((n) => (
              <li key={n.id} className="relative">
                <span
                  className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full"
                  style={{ background: accent[n.category] ?? "#26E0C4" }}
                />
                <div className="rounded-2xl border border-ev-border bg-ev-card p-5">
                  <div className="mb-2 flex flex-wrap items-center gap-3 font-mono text-[11px] text-ev-muted">
                    <span style={{ color: accent[n.category] ?? "#26E0C4" }}>{n.category}</span>
                    <span>{n.date}</span>
                    {n.status && (
                      <span className="rounded-md bg-ev-card-2 px-2 py-0.5">{n.status}</span>
                    )}
                  </div>
                  <h2 className="font-display text-lg font-bold leading-snug text-white">{n.title}</h2>
                  <p className="mt-2 font-body text-sm leading-relaxed text-ev-text/65">{n.summary}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-center font-body text-xs italic text-ev-muted/70">
            यह एक संपादकीय फ़ीड है (उदाहरण हेतु)।
          </p>
          <AdPlaceholder format="leaderboard" slot="5555555555" className="mt-12" />
        </div>
      </main>
      <Footer locale="hi" />
      <JsonLd
        data={collectionPageSchema(
          "EV News & 2026 Launches in India",
          "Latest India EV launches, sales and policy news.",
          "/ev-news"
        )}
      />
    </>
  );
}
