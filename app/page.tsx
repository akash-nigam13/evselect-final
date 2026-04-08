import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedVehicles from "@/components/FeaturedVehicles";
import CompareTool from "@/components/CompareTool";
import BatteryTeaser from "@/components/BatteryTeaser";
import BlogSection from "@/components/BlogSection";
import AdPlaceholder from "@/components/AdPlaceholder";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EVSelect.in — India's EV Intelligence Hub",
  description:
    "Compare electric vehicles, explore specs, read expert reviews, and discover the best EVs in India. Cars, bikes, scooters, buses — all on EVSelect.in.",
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
