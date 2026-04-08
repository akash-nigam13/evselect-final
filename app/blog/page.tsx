import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { ArrowRight, Clock, Tag } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EV Blog & Guides",
  description: "Expert EV reviews, buying guides, battery tech explainers, and the latest electric vehicle news from India.",
};

const categories = ["All", "Buying Guide", "Reviews", "Battery Tech", "Infrastructure", "Policy & Subsidies"];

const posts = [
  { slug: "best-electric-cars-india-2024", title: "Best Electric Cars in India 2024", category: "Buying Guide", readTime: "9 min", date: "Jun 12, 2024", accent: "#00e5ff" },
  { slug: "ev-battery-degradation-explained", title: "EV Battery Degradation: What Indian Drivers Need to Know", category: "Battery Tech", readTime: "6 min", date: "Jun 9, 2024", accent: "#39ff14" },
  { slug: "charging-infrastructure-india", title: "India's EV Charging Infrastructure: State of Play in 2024", category: "Infrastructure", readTime: "7 min", date: "Jun 5, 2024", accent: "#ffb800" },
  { slug: "ola-s1-pro-long-term-review", title: "Ola S1 Pro After 10,000 km: An Honest Long-Term Review", category: "Reviews", readTime: "11 min", date: "May 29, 2024", accent: "#a78bfa" },
  { slug: "fame-ii-subsidy-guide", title: "FAME II Subsidy Guide: How to Claim Your EV Discount", category: "Policy & Subsidies", readTime: "5 min", date: "May 22, 2024", accent: "#f43f5e" },
  { slug: "tata-nexon-vs-mg-zs-ev", title: "Tata Nexon EV Max vs MG ZS EV: The Definitive Comparison", category: "Reviews", readTime: "8 min", date: "May 18, 2024", accent: "#00e5ff" },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-10">
            <p className="text-xs font-mono text-ev-cyan tracking-widest uppercase mb-3">Knowledge Base</p>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-white mb-4">
              EV <span className="text-gradient-cyan">Blog & Guides</span>
            </h1>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wide border transition-colors ${i === 0 ? "bg-ev-cyan text-ev-bg border-ev-cyan" : "border-ev-border text-ev-muted hover:border-ev-cyan/40 hover:text-ev-cyan"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Top ad */}
          <AdPlaceholder format="leaderboard" slot="5555555555" className="mb-10" />

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Posts */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-ev-card border border-ev-border rounded-2xl overflow-hidden card-hover">
                  <div className="h-36 relative" style={{ background: `linear-gradient(135deg, ${post.accent}12, transparent)` }}>
                    <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 80% 50%, ${post.accent}18, transparent)` }} />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-mono" style={{ color: post.accent, backgroundColor: `${post.accent}18` }}>
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h2 className="font-display font-bold text-white text-sm mb-2 leading-tight group-hover:text-ev-cyan transition-colors">{post.title}</h2>
                    <div className="flex items-center gap-3 text-[10px] font-mono text-ev-muted">
                      <span className="flex items-center gap-1"><Clock className="w-2.5 h-2.5" />{post.readTime}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <AdPlaceholder format="rectangle" slot="6666666666" />

              <div className="bg-ev-card border border-ev-border rounded-2xl p-5">
                <h3 className="font-display font-bold text-white text-sm mb-4">Popular Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {["Range Anxiety", "Charging Cost", "Battery Life", "Best Scooter", "EV Subsidy", "Fast Charging", "LFP Battery", "Resale Value"].map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded text-[10px] font-mono text-ev-muted border border-ev-border hover:border-ev-cyan/30 hover:text-ev-cyan cursor-pointer transition-colors">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <AdPlaceholder format="rectangle" slot="7777777777" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
