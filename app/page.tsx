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
      </main>

      <Footer />
    </>
  );
}
