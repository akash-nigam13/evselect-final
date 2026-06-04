import Link from "next/link";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedVehicles from "@/components/FeaturedVehicles";
import CompareTool from "@/components/CompareTool";
import BatteryTeaser from "@/components/BatteryTeaser";
import BlogSection from "@/components/BlogSection";
import AdPlaceholder from "@/components/AdPlaceholder";
import Footer from "@/components/Footer";
import { altsFor } from "@/lib/i18n";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: altsFor("/", "en"),
  title: "EVSelect.in — India's EV Knowledge Hub (2026)",
  description:
    "Learn about electric vehicles, compare 140+ EVs side by side, calculate running costs, and browse the full 2026 catalog of cars, scooters and bikes in India.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Categories */}
        <CategoryGrid />

        {/* Ad — between categories and featured */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <AdPlaceholder format="leaderboard" slot="1111111111" />
        </div>

        {/* 3. Featured vehicles */}
        <FeaturedVehicles />

        {/* 4. Compare tool teaser */}
        <CompareTool />

        {/* 5. Battery deep-dive teaser */}
        <BatteryTeaser />

        {/* Ad — before blog */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <AdPlaceholder format="leaderboard" slot="2222222222" />
        </div>

        {/* 6. Blog preview */}
        <BlogSection />

        {/* 7. SEO content */}
        <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="prose-ev max-w-none">
            <h2>India&apos;s EV hub: compare, calculate and decide</h2>
            <p>
              EVSelect.in is India&apos;s independent electric vehicle hub, built to
              make switching to an EV simple. Compare 140+ electric cars, scooters
              and bikes side by side on price, real-world range, battery capacity
              and charging time — all in one place, with data kept current for
              2026.
            </p>
            <p>
              Not sure where to start? Use our free EV tools to estimate your
              monthly EMI, work out running costs versus petrol, and check the
              latest central and state subsidies you qualify for. Whether
              you&apos;re comparing the cheapest electric scooter or a premium
              long-range EV car, EVSelect.in gives you the numbers and guides to
              choose with confidence.
            </p>
            <p>
              From buying advice and ownership tips to charging setup and policy
              updates, our editorial team covers everything that matters before and
              after you go electric in India.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { href: "/catalog", label: "Browse all EVs" },
              { href: "/compare-electric-vehicles", label: "Compare EVs" },
              { href: "/ev-calculators/ev-emi-calculator", label: "EV EMI calculator" },
              { href: "/ev-subsidies-india", label: "EV subsidies in India" },
              { href: "/ev-charging-station-setup-india", label: "Charging station setup" },
              { href: "/blog", label: "EV blog & guides" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full border border-ev-border bg-ev-card/60 px-4 py-2 font-display text-sm font-medium text-ev-text transition-colors hover:border-brand/50 hover:text-brand"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
