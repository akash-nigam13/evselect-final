import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell from "@/components/blog/ArticleShell";
import { altsFor } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "VinFast Patents Viper E-Scooter in India, Readies Three-Model 2W Launch",
  description:
    "VinFast has registered a design patent for its Viper electric scooter in India, signalling its entry into the country's two-wheeler market. The Vietnamese EV maker plans to launch three e-scooters — Evo, Feliz and Viper — in the second half of 2026.",
  alternates: altsFor("/blog/vinfast-electric-scooters-india-2026", "en"),
  openGraph: {
    title: "VinFast Patents Viper E-Scooter in India, Readies Three-Model 2W Launch",
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleShell slug="vinfast-electric-scooters-india-2026">
      <p>
        VinFast, the Vietnamese EV giant that already builds electric cars in India,
        looks set to enter the country&apos;s far larger two-wheeler market. The
        company has <strong>registered a design patent for its Viper electric
        scooter</strong> in India — filed under design number 500341-001 and labelled
        simply &quot;Motorcycle&quot;, though the drawings clearly show a modern
        maxi-style e-scooter. It is the clearest signal yet that VinFast is preparing
        a two-wheeler launch here.
      </p>

      <h2>Three scooters planned for H2 2026</h2>
      <p>
        The patent fits a plan VinFast has already confirmed: bringing{" "}
        <strong>three electric scooters — the Evo, Feliz and Viper — to India in the
        second half of 2026</strong>. The patented model carries a sporty stance with
        a tall front apron, angular LED lighting with integrated DRLs, a compact
        flyscreen and a split-tone body finish, suggesting a Gen-2 version of the
        Viper sold in other markets. VinFast already produces cars at its plant in
        Tamil Nadu, giving it a local manufacturing base it could lean on for
        two-wheelers too.
      </p>

      <h2>A crowded, fast-growing market</h2>
      <p>
        VinFast would be walking into the world&apos;s biggest two-wheeler market at
        its most competitive. India&apos;s electric-scooter space is led by Ola, TVS,
        Bajaj, Ather and Hero Vida, with monthly volumes running well past a lakh
        units and several brands now past the million-sales mark. A new global player
        with deep pockets could shake up pricing and features — but it will have to
        build a service and charging footprint from scratch and earn trust on
        after-sales, where India&apos;s incumbents have a long head start. See how the
        current field stacks up in our{" "}
        <Link href="/blog/top-5-electric-scooters-india-2026">top electric scooters guide</Link>.
      </p>

      <h2>What it means for buyers</h2>
      <p>
        For now this is a signal of intent, not a product on sale, so it&apos;s worth
        treating launch timing and pricing as unconfirmed until VinFast says more.
        Still, more competition is generally good news for buyers: it tends to push
        prices down and features up. If VinFast prices the Evo and Feliz keenly, they
        could land in the busy sub-₹1 lakh bracket where most first-time buyers shop —
        the segment we cover in our{" "}
        <Link href="/blog/best-electric-scooters-under-1-lakh-india">best e-scooters under ₹1 lakh</Link>{" "}
        guide. Until then, you can compare what&apos;s available today in our{" "}
        <Link href="/catalog/electric-scooters">electric-scooter catalogue</Link>.
      </p>

      <h2>Sources</h2>
      <p>
        Patent and launch-plan details as reported by{" "}
        <a href="https://www.rushlane.com/new-vinfast-viper-electric-scooter-patented-india-launch-soon-12550004.html" target="_blank" rel="noopener noreferrer">
          Rushlane
        </a>{" "}
        ·{" "}
        <a href="https://www.autocarindia.com/bike-news/vinfast-looking-to-launch-three-electric-scooters-in-india-439304" target="_blank" rel="noopener noreferrer">
          Autocar India
        </a>
      </p>
    </ArticleShell>
  );
}
