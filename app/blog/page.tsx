import type { Metadata } from "next";
import { altsFor } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import BlogHome from "@/components/blog/BlogHome";
import { POSTS, postsByDate } from "@/lib/blog-posts";
import { blogSchema, itemListSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "EV Blog & Guides — EVSelect.in",
  description:
    "Expert EV buying guides, brand line-ups, battery tech deep-dives, cost analyses, charging guides and the latest India EV market news. Everything you need to make the right EV decision in 2026.",
  alternates: altsFor("/blog", "en"),
};

export default function BlogPage() {
  const ordered = postsByDate();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ev-bg pt-16">
        <div className="border-b border-ev-border/30 bg-ev-surface/20">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: "Blog", path: "/blog" }]} className="mb-6" />
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-brand">
              Knowledge Base
            </p>
            <h1 className="mb-3 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              EV <span className="text-gradient-brand">Blog &amp; Guides</span>
            </h1>
            <p className="max-w-xl font-body text-base leading-relaxed text-ev-text/55">
              Research-backed articles on EVs, brand line-ups, battery technology, charging, costs,
              policy and the latest India EV market news — written buyer-first.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <BlogHome posts={ordered} />
          <AdPlaceholder format="leaderboard" slot="5555555555" className="mt-16" />
        </div>
      </main>
      <Footer />
      <JsonLd
        data={[
          blogSchema("/blog"),
          itemListSchema(POSTS.map((p) => ({ name: p.title, path: `/blog/${p.slug}` }))),
        ]}
      />
    </>
  );
}
