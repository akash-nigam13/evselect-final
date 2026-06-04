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
  title: "Editorial & Data Policy — How EVSelect.in Researches and Fact-Checks",
  description:
    "How EVSelect.in sources EV specifications and prices, keeps content accurate and up to date, stays independent, and handles corrections.",
  alternates: altsFor("/editorial-policy", "en"),
};

export default function EditorialPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden border-b border-ev-border/40">
          <Aurora variant="dual" />
          <div className="relative mx-auto max-w-4xl px-4 pb-12 pt-12 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: "Editorial & Data Policy", path: "/editorial-policy" }]} className="mb-6" />
            <h1 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Editorial &amp; <span className="text-gradient-brand">Data Policy</span>
            </h1>
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ev-text/60 sm:text-lg">
              How we research, source, fact-check and update everything you read on EVSelect.in.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <article className="prose-ev max-w-none">
            <h2>Where our data comes from</h2>
            <p>
              Vehicle specifications, prices and figures are compiled from primary and reputable
              public sources: official manufacturer websites and brochures, ARAI/IDC claimed figures,
              government portals (such as the PM E-DRIVE portal, PIB and state transport
              departments), and established automotive publications. Prices are ex-showroom and
              indicative unless stated otherwise.
            </p>

            <h2>How we keep content accurate &amp; current</h2>
            <p>
              The EV market changes weekly, so EVSelect.in is reviewed and refreshed on a regular
              cycle. New launches are added to the catalogue, the news timeline is updated, and our
              policy pages — including <Link href="/ev-subsidies-india">subsidies</Link> and{" "}
              <Link href="/ev-charging-station-setup-india">charging-station guidance</Link> — are
              re-checked against official sources on a recurring schedule. Pages that depend on
              fast-changing figures display a &quot;last updated&quot; date.
            </p>

            <h2>Accuracy &amp; the limits of our information</h2>
            <p>
              We work hard to be accurate, but specifications, prices and government incentives vary
              by variant, city, dealer and date, and can change without notice. Our content is for
              general information only and is not financial, legal or purchasing advice. Always verify
              the latest details with an official dealer or government portal before you buy.
            </p>

            <h2>Independence</h2>
            <p>
              Our editorial judgement is independent of advertisers and manufacturers. Sponsorships
              and advertising never determine our rankings, comparisons or recommendations. See our{" "}
              <Link href="/advertising-disclosure">advertising disclosure</Link> for how the site is
              funded.
            </p>

            <h2>Corrections</h2>
            <p>
              If you spot an error or something out of date, please tell us via the{" "}
              <Link href="/contact">contact form</Link> or email{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. We review reported issues promptly
              and update verified corrections, typically within a couple of business days.
            </p>

            <h2>Authorship</h2>
            <p>
              Content is produced and reviewed by the EVSelect Editorial Team and overseen by the
              site&apos;s founder. Learn more on our <Link href="/about">About page</Link>.
            </p>
          </article>
        </div>
      </main>
      <Footer />
      <JsonLd
        data={webPageSchema(
          "Editorial & Data Policy — EVSelect.in",
          "How EVSelect.in sources, fact-checks and updates EV data, stays independent, and handles corrections.",
          "/editorial-policy"
        )}
      />
    </>
  );
}
