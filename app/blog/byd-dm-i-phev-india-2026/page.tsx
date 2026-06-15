import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "BYD Confirms DM-i Plug-in Hybrid for India",
  description:
    "BYD India has revealed its DM-i 'Super Plug-in Hybrid' tech for the Indian market, confirming the Seal U as its first PHEV here by end-2026 — with combined ranges past 1,000 km. Here's why it matters.",
  alternates: altsFor("/blog/byd-dm-i-phev-india-2026", "en"),
  openGraph: {
    title: "BYD Confirms DM-i Plug-in Hybrid for India",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="byd-dm-i-phev-india-2026">
      <p>
        <Link href="/blog/byd-electric-cars">BYD</Link> India has revealed its{" "}
        <strong>DM-i</strong> &mdash; short for &ldquo;Dual Mode intelligent&rdquo;
        &mdash; plug-in hybrid technology for the Indian market, signalling its
        first move beyond pure electric cars here. The company has confirmed the{" "}
        <strong>Seal U</strong> as its first plug-in hybrid for India, expected to
        arrive by the end of 2026.
      </p>

      <h2>What DM-i actually does</h2>
      <p>
        DM-i is an electric-first plug-in hybrid architecture: the system runs on
        the electric motor as much as possible, with the petrol engine stepping in
        mainly to generate electricity and extend range. The payoff is the headline
        BYD likes to quote &mdash; combined driving ranges past{" "}
        <strong>1,000 km</strong> on a full tank and charge, with meaningful
        electric-only running for daily use. Globally, BYD&apos;s DM-i models such as
        the Sealion 6 offer up to roughly 140 km of pure-electric range before the
        engine is needed at all.
      </p>

      <h2>Which models are India-bound</h2>
      <p>
        BYD has kept the exact launch line-up under wraps, but the Seal U is
        confirmed as the first PHEV, with the Sealion 6 and the Creta-sized Atto 2
        among the global DM-i cars seen as candidates for India. For a market where
        charging gaps still make some buyers hesitate, a plug-in hybrid that can
        run on electricity in the city and petrol on the highway is an easier first
        step than a full EV.
      </p>

      <h2>Why BYD&apos;s move matters</h2>
      <p>
        BYD is one of the world&apos;s largest EV makers, and its India push has so
        far centred on the Atto 3, Seal and eMax 7. Adding plug-in hybrids widens
        its appeal to buyers who want lower running costs without committing fully
        to charging infrastructure. It also lands in the same week as the{" "}
        <Link href="/blog/mercedes-s-class-s450e-phev-india-2026">
          first plug-in hybrid Mercedes S-Class
        </Link>
        , underlining that PHEVs are gaining ground across the price spectrum.
      </p>

      <h2>The bottom line</h2>
      <p>
        Whether a PHEV or a pure EV makes more sense depends on how far you drive
        and where you can charge. If you are weighing your options, compare the
        electric cars on sale today on our{" "}
        <Link href="/compare-electric-vehicles">EV comparison tool</Link>, or browse
        the full field in our{" "}
        <Link href="/catalog/electric-cars">electric car catalog</Link>.
      </p>

      <h2>Sources</h2>
      <p>
        As reported by{" "}
        <a href="https://www.autocarindia.com/car-news/byd-teases-its-first-plug-in-hybrid-suv-for-india-439820" target="_blank" rel="noopener noreferrer">
          Autocar India
        </a>{" "}
        ·{" "}
        <a href="https://www.autocarindia.com/car-news/byd-seal-u-india-launch-by-end-2026-with-phev-powertrain-439917" target="_blank" rel="noopener noreferrer">
          Autocar India (Seal U)
        </a>
      </p>
    </ArticleShell>
  );
}
