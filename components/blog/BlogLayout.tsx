import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock, Calendar, User, Tag } from "lucide-react";

export interface BlogMeta {
  title: string;
  description: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  categoryColor: string;   // Tailwind text colour class e.g. "text-ev-cyan"
  categoryBg: string;      // Inline hex for bg chip e.g. "#00e5ff"
  tags: string[];
  heroAccent: string;      // hex for decorative accent colour
}

interface BlogLayoutProps {
  meta: BlogMeta;
  children: React.ReactNode;
}

export default function BlogLayout({ meta, children }: BlogLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">

        {/* ── Hero banner ── */}
        <div
          className="relative border-b border-ev-border/30 overflow-hidden"
          style={{
            background: `radial-gradient(ellipse 70% 80% at 50% -10%, ${meta.heroAccent}14, transparent 60%), #0a1628`,
          }}
        >
          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `linear-gradient(${meta.heroAccent}08 1px, transparent 1px), linear-gradient(90deg, ${meta.heroAccent}08 1px, transparent 1px)`,
              backgroundSize: "36px 36px",
            }}
          />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            {/* Breadcrumb */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono text-ev-muted hover:text-ev-cyan transition-colors mb-8 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              Back to Blog
            </Link>

            {/* Category chip */}
            <div className="mb-5">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase border"
                style={{
                  color: meta.categoryBg,
                  backgroundColor: `${meta.categoryBg}15`,
                  borderColor: `${meta.categoryBg}35`,
                }}
              >
                <Tag className="w-3 h-3" />
                {meta.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1] mb-6">
              {meta.title}
            </h1>

            {/* Description */}
            <p className="text-ev-text/60 font-body text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
              {meta.description}
            </p>

            {/* Byline row */}
            <div className="flex flex-wrap items-center gap-5 text-xs font-mono text-ev-muted border-t border-ev-border/30 pt-5">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" style={{ color: meta.categoryBg }} />
                {meta.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" style={{ color: meta.categoryBg }} />
                {meta.publishDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" style={{ color: meta.categoryBg }} />
                {meta.readTime} read
              </span>
            </div>
          </div>
        </div>

        {/* ── Article body + sidebar ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">

            {/* Article content */}
            <article className="max-w-none">
              {children}
            </article>

            {/* Sticky sidebar */}
            <aside className="hidden lg:flex flex-col gap-5 sticky top-24">

              {/* Tags */}
              <div className="bg-ev-card border border-ev-border rounded-2xl p-5">
                <p className="text-[10px] font-mono text-ev-muted uppercase tracking-widest mb-3">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {meta.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg border border-ev-border text-[11px] font-mono text-ev-muted hover:border-ev-cyan/30 hover:text-ev-cyan transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related CTA */}
              <div
                className="rounded-2xl p-5 border"
                style={{
                  background: `linear-gradient(135deg, ${meta.heroAccent}10, transparent)`,
                  borderColor: `${meta.heroAccent}25`,
                }}
              >
                <p className="font-display font-bold text-white text-sm mb-2">Compare EVs on EVSelect</p>
                <p className="text-ev-text/55 text-xs font-body leading-relaxed mb-4">
                  Use our side-by-side tool to compare any two electric vehicles on specs, range, and price.
                </p>
                <Link
                  href="/compare"
                  className="block text-center py-2.5 rounded-xl text-xs font-display font-bold tracking-wide transition-all"
                  style={{ backgroundColor: meta.heroAccent, color: "#050b14" }}
                >
                  Open Compare Tool →
                </Link>
              </div>

              {/* Ad sidebar */}
              <div className="border border-dashed border-ev-border/40 rounded-xl h-[250px] flex items-center justify-center bg-ev-surface/20">
                <div className="text-center">
                  <p className="text-[10px] font-mono text-ev-border uppercase tracking-widest">Advertisement</p>
                  <p className="text-[10px] font-mono text-ev-border/50 mt-1">300×250 · Sidebar</p>
                </div>
              </div>

              {/* Ad sidebar 2 */}
              <div className="border border-dashed border-ev-border/40 rounded-xl h-[250px] flex items-center justify-center bg-ev-surface/20">
                <div className="text-center">
                  <p className="text-[10px] font-mono text-ev-border uppercase tracking-widest">Advertisement</p>
                  <p className="text-[10px] font-mono text-ev-border/50 mt-1">300×250 · Sidebar</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
