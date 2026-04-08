import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import AdPlaceholder from "./AdPlaceholder";

const posts = [
  {
    slug: "best-electric-cars-india-2024",
    title: "Best Electric Cars in India 2024: The Definitive Buyer's Guide",
    excerpt: "From budget-friendly options to premium long-rangers — we rank every EV car worth buying in India right now.",
    category: "Buying Guide",
    readTime: "9 min",
    date: "Jun 12, 2024",
    accent: "#00e5ff",
    featured: true,
  },
  {
    slug: "ev-battery-degradation-explained",
    title: "EV Battery Degradation: What Indian Drivers Need to Know",
    excerpt: "How fast does your EV battery lose capacity? And what you can do to slow it down.",
    category: "Battery Tech",
    readTime: "6 min",
    date: "Jun 9, 2024",
    accent: "#39ff14",
    featured: false,
  },
  {
    slug: "charging-infrastructure-india",
    title: "India's EV Charging Infrastructure: State of Play in 2024",
    excerpt: "A city-by-city breakdown of fast chargers, home charging solutions, and what's coming next.",
    category: "Infrastructure",
    readTime: "7 min",
    date: "Jun 5, 2024",
    accent: "#ffb800",
    featured: false,
  },
  {
    slug: "ola-s1-pro-long-term-review",
    title: "Ola S1 Pro After 10,000 km: An Honest Long-Term Review",
    excerpt: "We rode the Ola S1 Pro for 10,000 km across Indian roads. Here's everything we learned.",
    category: "Review",
    readTime: "11 min",
    date: "May 29, 2024",
    accent: "#a78bfa",
    featured: false,
  },
];

export default function BlogSection() {
  const [featured, ...rest] = posts;

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-mono text-ev-cyan tracking-widest uppercase mb-3">Latest Insights</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              EV <span className="text-gradient-cyan">Knowledge Base</span>
            </h2>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-ev-muted hover:text-ev-cyan transition-colors font-body link-underline">
            All articles <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Ad — Leaderboard above blog content */}
        <AdPlaceholder format="leaderboard" slot="1234567890" className="mb-10" />

        {/* Blog grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Featured post — spans 2 cols */}
          <Link
            href={`/blog/${featured.slug}`}
            className="lg:col-span-2 group relative bg-ev-card border border-ev-border rounded-2xl overflow-hidden card-hover flex flex-col"
          >
            {/* Featured image placeholder */}
            <div
              className="h-52 flex items-center justify-center relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${featured.accent}10, transparent)` }}
            >
              <div
                className="font-display font-black text-[80px] leading-none select-none opacity-5 absolute"
                style={{ color: featured.accent }}
              >
                EV
              </div>
              <div
                className="absolute inset-0"
                style={{ background: `radial-gradient(ellipse at 70% 50%, ${featured.accent}15, transparent 70%)` }}
              />
              <span
                className="relative z-10 px-3 py-1 rounded-full text-xs font-mono border"
                style={{ color: featured.accent, borderColor: `${featured.accent}40`, backgroundColor: `${featured.accent}10` }}
              >
                FEATURED
              </span>
            </div>

            <div className="flex-1 p-6">
              <div className="flex items-center gap-4 mb-3">
                <span className="flex items-center gap-1 text-[10px] font-mono text-ev-muted">
                  <Tag className="w-2.5 h-2.5" /> {featured.category}
                </span>
                <span className="flex items-center gap-1 text-[10px] font-mono text-ev-muted">
                  <Clock className="w-2.5 h-2.5" /> {featured.readTime} read
                </span>
                <span className="text-[10px] font-mono text-ev-border">{featured.date}</span>
              </div>
              <h3 className="font-display font-bold text-white text-xl mb-3 leading-tight group-hover:text-ev-cyan transition-colors">
                {featured.title}
              </h3>
              <p className="text-ev-text/60 text-sm font-body leading-relaxed mb-4">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-mono" style={{ color: featured.accent }}>
                Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>

          {/* Sidebar: 3 posts + ad */}
          <div className="flex flex-col gap-4">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-ev-card border border-ev-border rounded-xl p-4 card-hover flex flex-col gap-2"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded"
                    style={{ color: post.accent, backgroundColor: `${post.accent}15` }}
                  >
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-mono text-ev-border">
                    <Clock className="w-2.5 h-2.5" /> {post.readTime}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-white text-sm leading-tight group-hover:text-ev-cyan transition-colors">
                  {post.title}
                </h3>
                <p className="text-ev-text/50 text-xs font-body leading-relaxed line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[10px] font-mono text-ev-border">{post.date}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-ev-border group-hover:text-ev-cyan group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>
            ))}

            {/* In-feed ad */}
            <AdPlaceholder format="rectangle" slot="0987654321" />
          </div>
        </div>
      </div>
    </section>
  );
}
