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
  title: "Advertising & Affiliate Disclosure — EVSelect.in",
  description:
    "How EVSelect.in is funded: display advertising, sponsorships and affiliate links — and our commitment that they never influence our editorial content.",
  alternates: altsFor("/advertising-disclosure", "en"),
};

export default function DisclosurePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden border-b border-ev-border/40">
          <Aurora variant="dual" />
          <div className="relative mx-auto max-w-4xl px-4 pb-12 pt-12 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: "Advertising Disclosure", path: "/advertising-disclosure" }]} className="mb-6" />
            <h1 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Advertising &amp; <span className="text-gradient-brand">Affiliate Disclosure</span>
            </h1>
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ev-text/60 sm:text-lg">
              How EVSelect.in stays free — and our promise on independence.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <article className="prose-ev max-w-none">
            <h2>How we&apos;re funded</h2>
            <p>
              EVSelect.in is free to use. To keep it that way, we earn revenue from{" "}
              <strong>display advertising</strong> (including Google AdSense), and we may also earn
              from <strong>sponsored content</strong> and <strong>affiliate links</strong>, where we
              receive a commission if you click through to a partner and take an action — at no extra
              cost to you.
            </p>

            <h2>Advertising</h2>
            <p>
              Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s
              prior visits to this and other websites. You can manage your preferences via your
              browser settings and through Google&apos;s Ads Settings. We show a cookie notice so you
              can accept or decline non-essential cookies. For details on data, see our{" "}
              <Link href="/privacy">Privacy Policy</Link>.
            </p>

            <h2>Our independence promise</h2>
            <p>
              Advertising and affiliate relationships <strong>never</strong> influence our editorial
              content, vehicle data, comparisons or recommendations. Sponsored items, where they
              appear, are clearly labelled as such. How we research and fact-check is set out in our{" "}
              <Link href="/editorial-policy">editorial policy</Link>.
            </p>

            <h2>Work with us</h2>
            <p>
              Interested in advertising, sponsorship or a partnership? Email{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or use the{" "}
              <Link href="/contact">contact form</Link> and select &quot;Advertise on EVSelect.in&quot;.
            </p>
          </article>
        </div>
      </main>
      <Footer />
      <JsonLd
        data={webPageSchema(
          "Advertising & Affiliate Disclosure — EVSelect.in",
          "How EVSelect.in is funded through advertising and affiliate links, and our editorial-independence commitment.",
          "/advertising-disclosure"
        )}
      />
    </>
  );
}
