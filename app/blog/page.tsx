import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import { ArrowRight, Clock, Calendar, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "EV Blog & Guides — EVSelect.in",
  description:
    "Expert EV buying guides, battery tech deep-dives, cost analyses, and India-specific charging guides. Everything you need to make the right EV decision in 2026.",
  alternates: { canonical: "https://evselect.in/blog" },
};

const posts = [
  {
    slug: "top-5-electric-scooters-india-2026",
    title: "Top 5 Electric Scooters in India 2026",
    subtitle: "Range, Price & Features Compared",
    excerpt:
      "We analysed India's best electric scooters on ARAI range, real-world performance, charging times, service networks, and 5-year running costs to help you pick the right one.",
    category: "Buying Guide",
    readTime: "11 min",
    date: "Jan 15, 2026",
    accent: "#00e5ff",
    featured: true,
  },
  {
    slug: "ev-battery-life-india-weather",
    title: "EV Battery Life in Indian Weather",
    subtitle: "How to Make Your Battery Last 10+ Years",
    excerpt:
      "India's 45°C summers and monsoon humidity are uniquely brutal on EV batteries. Here's the science-backed playbook to protect your pack and preserve your warranty.",
    category: "Battery Tech",
    readTime: "13 min",
    date: "Jan 22, 2026",
    accent: "#39ff14",
    featured: false,
  },
  {
    slug: "petrol-vs-electric-5-year-cost-india",
    title: "Petrol vs Electric: 5-Year Cost Analysis",
    subtitle: "Total Cost of Ownership for Indian Buyers",
    excerpt:
      "A rupee-by-rupee breakdown of purchase price, fuel, insurance, maintenance, and resale value over 5 years. We compare the Tata Nexon EV Max against the Hyundai Creta petrol.",
    category: "Cost Analysis",
    readTime: "14 min",
    date: "Feb 3, 2026",
    accent: "#ffb800",
    featured: false,
  },
  {
    slug: "solid-state-batteries-2026",
    title: "Solid-State Batteries: The 2026 Turning Point",
    subtitle: "Why This Year Changes EV Range Forever",
    excerpt:
      "After years of promises, solid-state cells are entering limited production. We explain what the technology actually delivers, who is leading, and when Indian EV buyers will feel the impact.",
    category: "Battery Tech",
    readTime: "12 min",
    date: "Feb 14, 2026",
    accent: "#a78bfa",
    featured: false,
  },
  {
    slug: "ev-charging-infrastructure-india",
    title: "EV Charging Infrastructure in India 2026",
    subtitle: "A Complete Road Trip Planning Guide",
    excerpt:
      "India now has 25,000+ public chargers and 4,500+ DC fast chargers on highways. We map the best corridors, recommend the top apps, and give you a step-by-step road trip checklist.",
    category: "Infrastructure",
    readTime: "15 min",
    date: "Feb 28, 2026",
    accent: "#00e5ff",
    featured: false,
  },
];

const tags = [
  "Solid-State", "LFP Battery", "Fast Charging", "Road Trip",
  "EV Subsidy", "Range Anxiety", "Battery Life", "Best Scooter",
  "CCS2 Charger", "TCO Analysis",
];

export default function BlogPage() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-ev-bg">

        {/* Header */}
        <div className="border-b border-ev-border/30 bg-ev-surface/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <p className="text-xs font-mono text-ev-cyan tracking-widest uppercase mb-3">
              Knowledge Base
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-black text-white leading-tight mb-3">
              EV <span className="text-gradient-cyan">Blog &amp; Guides</span>
            </h1>
            <p className="text-ev-text/55 font-body text-base max-w-xl leading-relaxed">
              Research-backed articles on EVs, battery technology, charging infrastructure, and cost
              analysis — written for the Indian market.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">

            {/* Main */}
            <div>
              <AdPlaceholder format="leaderboard" slot="5555555555" className="mb-10" />

              {/* Featured */}
              <Link
                href={`/blog/${featured.slug}`}
                className="group flex flex-col md:flex-row bg-ev-card border border-ev-border rounded-2xl overflow-hidden mb-10 hover:border-ev-cyan/40 transition-colors"
              >
                {/* Cover */}
                <div
                  className="md:w-[55%] h-52 md:h-auto flex items-center justify-center relative flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${featured.accent}14, #050b14)` }}
                >
                  <div
                    className="absolute inset-0"
                    style={{ background: `radial-gradient(ellipse 70% 70% at 30% 50%, ${featured.accent}18, transparent)` }}
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-ev-bg/80 border border-ev-border">
                    <span className="w-1.5 h-1.5 rounded-full bg-ev-green animate-pulse" />
                    <span className="text-[10px] font-mono text-ev-cyan tracking-widest uppercase">Featured</span>
                  </div>
                  <span
                    className="font-display font-black text-7xl opacity-10 select-none"
                    style={{ color: featured.accent }}
                  >
                    EV
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-col justify-between p-7 flex-1">
                  <div>
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono mb-4"
                      style={{ color: featured.accent, backgroundColor: `${featured.accent}15`, border: `1px solid ${featured.accent}30` }}
                    >
                      <Tag className="w-3 h-3" />
                      {featured.category}
                    </span>
                    <h2 className="font-display font-black text-white text-2xl leading-tight mb-1 group-hover:text-ev-cyan transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-sm text-ev-muted font-body mb-3">{featured.subtitle}</p>
                    <p className="text-ev-text/60 font-body text-sm leading-relaxed">{featured.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-ev-border/40">
                    <div className="flex items-center gap-4 text-[11px] font-mono text-ev-muted">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" style={{ color: featured.accent }} />
                        {featured.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" style={{ color: featured.accent }} />
                        {featured.readTime} read
                      </span>
                    </div>
                    <span className="flex items-center gap-1.5 text-sm font-display font-bold group-hover:translate-x-1 transition-transform"
                      style={{ color: featured.accent }}>
                      Read <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {rest.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col bg-ev-card border border-ev-border rounded-2xl overflow-hidden hover:border-ev-cyan/30 hover:-translate-y-1 transition-all duration-200"
                  >
                    {/* Cover */}
                    <div
                      className="h-40 relative flex items-center justify-center flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${post.accent}12, #050b14)` }}
                    >
                      <div
                        className="absolute inset-0"
                        style={{ background: `radial-gradient(ellipse at 70% 50%, ${post.accent}18, transparent)` }}
                      />
                      <span
                        className="font-display font-black text-6xl opacity-10 select-none relative"
                        style={{ color: post.accent }}
                      >EV</span>
                      <span
                        className="absolute top-3 left-3 flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono"
                        style={{ color: post.accent, backgroundColor: `${post.accent}20`, border: `1px solid ${post.accent}30` }}
                      >
                        <Tag className="w-2.5 h-2.5" />
                        {post.category}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="flex flex-col flex-1 p-5">
                      <h2 className="font-display font-bold text-white text-base leading-snug mb-1 group-hover:text-ev-cyan transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-xs text-ev-muted font-body mb-3">{post.subtitle}</p>
                      <p className="text-ev-text/55 text-xs font-body leading-relaxed flex-1 line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-ev-border/40">
                        <div className="flex items-center gap-3 text-[10px] font-mono text-ev-muted">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />{post.readTime}
                          </span>
                          <span>{post.date}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" style={{ color: post.accent }} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <AdPlaceholder format="leaderboard" slot="5555555566" className="mt-10" />
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:flex flex-col gap-6 sticky top-24">
              <AdPlaceholder format="rectangle" slot="6666666666" />

              <div className="bg-ev-card border border-ev-border rounded-2xl p-5">
                <h2 className="font-display font-bold text-white text-sm mb-4">Popular Topics</h2>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg border border-ev-border text-[11px] font-mono text-ev-muted hover:border-ev-cyan/30 hover:text-ev-cyan cursor-pointer transition-colors">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-ev-card border border-ev-border rounded-2xl p-5">
                <h2 className="font-display font-bold text-white text-sm mb-4">All Articles</h2>
                <ul className="space-y-3">
                  {posts.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-start gap-2.5 text-xs font-body text-ev-muted hover:text-ev-cyan transition-colors group"
                      >
                        <span className="w-1 h-1 rounded-full mt-1.5 shrink-0 group-hover:bg-ev-cyan transition-colors" style={{ backgroundColor: post.accent }} />
                        <span className="leading-relaxed">{post.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <AdPlaceholder format="rectangle" slot="7777777777" />

              <div className="bg-ev-card border border-ev-cyan/20 rounded-2xl p-5">
                <p className="font-display font-bold text-white text-sm mb-2">Compare EVs</p>
                <p className="text-ev-text/55 text-xs font-body leading-relaxed mb-4">
                  Side-by-side specs for any two electric vehicles.
                </p>
                <Link
                  href="/compare"
                  className="block text-center py-2.5 rounded-xl text-xs font-display font-bold tracking-wide bg-ev-cyan text-ev-bg hover:bg-ev-green transition-colors"
                >
                  Open Compare Tool →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
