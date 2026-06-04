import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { webAppSchema } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";
import CostCalculator from "@/components/tools/CostCalculator";
import RangeEstimator from "@/components/tools/RangeEstimator";
import EmiCalculator from "@/components/tools/EmiCalculator";

export const metadata: Metadata = {
  title: "EV टूल्स — कॉस्ट कैलकुलेटर और रेंज एस्टिमेटर",
  description:
    "इंटरैक्टिव EV टूल्स — पेट्रोल बनाम इलेक्ट्रिक 5-साल का खर्च निकालें और किसी भी EV की असल रेंज व चार्जिंग का अनुमान लगाएँ।",
  alternates: altsFor("/tools", "hi"),
};

export default function HiToolsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden border-b border-ev-border/40">
          <Aurora variant="dual" />
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[{ name: "टूल्स", path: "/hi/tools" }]}
              homeName="होम"
              homeHref="/hi"
              className="mb-6"
            />
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-brand">
              टूल्स
            </p>
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
              EV <span className="text-gradient-brand">कॉस्ट और रेंज</span> टूल्स
            </h1>
            <p className="mt-4 max-w-2xl font-body text-ev-text/60">
              अपनी असल यूसेज के हिसाब से पेट्रोल बनाम इलेक्ट्रिक की बचत निकालें और
              किसी भी EV की वास्तविक रेंज का अनुमान लगाएँ।
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-5xl space-y-16 px-4 py-14 sm:px-6 lg:px-8">
          <section id="cost" className="scroll-mt-24">
            <CostCalculator />
          </section>
          <section id="range" className="scroll-mt-24">
            <RangeEstimator />
          </section>
          <section id="emi" className="scroll-mt-24">
            <EmiCalculator />
          </section>
        </div>
      </main>
      <Footer locale="hi" />
      <JsonLd
        data={webAppSchema(
          "EV Cost & Range Tools",
          "EV vs petrol running-cost calculator and real-world range estimator for India.",
          "/tools"
        )}
      />
    </>
  );
}
