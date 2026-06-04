import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import Aurora from "@/components/ui/Aurora";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { webAppSchema } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";
import CompareClient from "@/components/compare/CompareClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "इलेक्ट्रिक वाहनों की साथ-साथ तुलना करें",
  description:
    "भारत में किन्हीं भी दो या तीन EVs की साथ-साथ तुलना करें — रेंज, बैटरी, कीमत, पावर और चार्जिंग। 140+ इलेक्ट्रिक कार, स्कूटर और बाइक का लाइव डेटा।",
  alternates: altsFor("/compare-electric-vehicles", "hi"),
};

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
              किन्हीं भी <span className="text-gradient-brand">EVs की तुलना</span>, तुरंत
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
        </div>
      </main>
      <Footer locale="hi" />
      <JsonLd
        data={webAppSchema(
          "EV Comparison Tool",
          "Compare any two or three electric vehicles in India side by side.",
          "/compare-electric-vehicles"
        )}
      />
    </>
  );
}
