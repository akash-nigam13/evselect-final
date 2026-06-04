import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { webPageSchema, SITE } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "About EVSelect.in — India's Independent EV Knowledge Hub",
  description:
    "EVSelect.in is an independent India-focused electric-vehicle research hub — 148+ EVs, side-by-side comparison, cost tools and expert guides. Learn who we are, what we cover and how we work.",
  alternates: altsFor("/about", "en"),
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden border-b border-ev-border/40">
          <Aurora variant="dual" />
          <div className="relative mx-auto max-w-4xl px-4 pb-12 pt-12 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: "About", path: "/about" }]} className="mb-6" />
            <h1 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              About <span className="text-gradient-brand">EVSelect.in</span>
            </h1>
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ev-text/60 sm:text-lg">
              An independent, India-focused hub built to make switching to electric simple,
              transparent and jargon-free.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <article className="prose-ev max-w-none">
            <h2>Our mission</h2>
            <p>
              EVSelect.in exists to help Indian buyers research and choose electric vehicles with
              confidence. The EV market is moving fast, the specs are confusing, and the incentives
              change constantly — we bring it all into one place: a complete, current catalogue, an
              honest side-by-side comparison tool, practical cost and range calculators, and
              buyer-first guides written in plain language (and in Hindi).
            </p>

            <h2>What we cover</h2>
            <p>
              We track <strong>148+ electric cars, scooters and motorcycles</strong> on sale or
              launching in India, across <strong>50+ brands</strong>. For every vehicle you get
              battery, range, charging, performance and price details, plus the ability to{" "}
              <Link href="/compare-electric-vehicles">compare any models side by side</Link>. Beyond the catalogue, we
              publish guides on <Link href="/ev-subsidies-india">subsidies &amp; incentives</Link>,{" "}
              <Link href="/ev-charging-station-setup-india">setting up charging stations</Link>,
              battery technology, real-world range, and the latest{" "}
              <Link href="/ev-news">India EV news</Link>.
            </p>

            <h2>How we stay independent</h2>
            <p>
              EVSelect.in is reader-first and editorially independent. We are not owned by any
              vehicle manufacturer, and our comparisons and recommendations are never influenced by
              advertisers. The site is free to use and funded by advertising and, where relevant,
              affiliate partnerships — explained in full in our{" "}
              <Link href="/advertising-disclosure">advertising disclosure</Link>. How we research and
              fact-check our content is described in our{" "}
              <Link href="/editorial-policy">editorial policy</Link>.
            </p>

            <h2>Who we are</h2>
            <p>
              EVSelect.in is founded and run by <strong>Akash Nigam</strong>, with content produced
              by the EVSelect Editorial Team. We combine first-hand research of manufacturer data and
              official sources with continuous updates as new vehicles, prices and policies arrive.
              Spotted something out of date or incorrect? We genuinely want to know — please{" "}
              <Link href="/contact">get in touch</Link> and we&apos;ll fix it.
            </p>

            <h2>Important note</h2>
            <p>
              EVSelect.in is an information resource, not a dealership, manufacturer or financial
              advisor. Prices, specifications and government incentives are indicative and based on
              publicly available information at the time of writing — always confirm the latest
              details with an official dealer or government portal before making a purchase decision.
            </p>

            <p className="text-sm text-ev-muted">
              Contact: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
          </article>
        </div>
      </main>
      <Footer />
      <JsonLd
        data={webPageSchema(
          "About EVSelect.in",
          "Who we are, what we cover and how we work — India's independent EV knowledge hub.",
          "/about"
        )}
      />
    </>
  );
}
