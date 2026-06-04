import type { Metadata } from "next";
import { altsFor } from "@/lib/i18n";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import BlogList from "@/components/blog/BlogList";
import CategoryNav from "@/components/blog/CategoryNav";
import { POSTS, postsByDate } from "@/lib/blog-posts";
import { blogSchema, itemListSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "EV ब्लॉग और गाइड — EVSelect.in",
  description:
    "EV खरीदने की एक्सपर्ट गाइड, बैटरी तकनीक की गहराई से जानकारी, खर्च का विश्लेषण, चार्जिंग गाइड और भारत के EV बाज़ार की ताज़ा खबरें। 2026 में सही EV चुनने के लिए ज़रूरी सब कुछ।",
  alternates: altsFor("/blog", "hi"),
};

export default function BlogPage() {
  const ordered = postsByDate();
  const featured = ordered.find((p) => p.featured) ?? ordered[0];
  const rest = ordered.filter((p) => p.slug !== featured.slug);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ev-bg pt-16">
        <div className="border-b border-ev-border/30 bg-ev-surface/20">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <Breadcrumbs
              homeName="होम"
              homeHref="/hi"
              items={[{ name: "ब्लॉग", path: "/hi/blog" }]}
              className="mb-6"
            />
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-brand">
              नॉलेज बेस
            </p>
            <h1 className="mb-3 font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              EV <span className="text-gradient-brand">ब्लॉग और गाइड</span>
            </h1>
            <p className="max-w-xl font-body text-base leading-relaxed text-ev-text/55">
              EVs, बैटरी तकनीक, चार्जिंग, खर्च, नीति और भारत के EV बाज़ार की ताज़ा खबरों पर
              शोध-आधारित लेख — खरीदार को ध्यान में रखकर लिखे गए।
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <CategoryNav />

          <div className="mt-10 grid items-start gap-12 lg:grid-cols-[1fr_300px]">
            <div>
              <AdPlaceholder format="leaderboard" slot="5555555555" className="mb-10" />

              <BlogList posts={ordered} />

              <AdPlaceholder format="leaderboard" slot="5555555566" className="mt-10" />
            </div>

            <aside className="hidden flex-col gap-6 lg:sticky lg:top-24 lg:flex">
              <AdPlaceholder format="rectangle" slot="6666666666" />

              <div className="rounded-2xl border border-ev-border bg-ev-card p-5">
                <h2 className="mb-4 font-display text-sm font-bold text-white">सभी लेख</h2>
                <ul className="space-y-3">
                  {ordered.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group flex items-start gap-2.5 font-body text-xs text-ev-muted transition-colors hover:text-brand"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: post.accent }} />
                        <span className="leading-relaxed">{post.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-brand/20 bg-ev-card p-5">
                <p className="mb-2 font-display text-sm font-bold text-white">EVs की तुलना करें</p>
                <p className="mb-4 font-body text-xs leading-relaxed text-ev-text/55">
                  किन्हीं भी दो इलेक्ट्रिक वाहनों के स्पेक्स साथ-साथ देखें।
                </p>
                <Link
                  href="/hi/compare-electric-vehicles"
                  className="block rounded-xl bg-brand-gradient py-2.5 text-center font-display text-xs font-bold text-ev-bg"
                >
                  तुलना टूल खोलें →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer locale="hi" />
      <JsonLd
        data={[
          blogSchema("/blog"),
          itemListSchema(POSTS.map((p) => ({ name: p.title, path: `/blog/${p.slug}` }))),
        ]}
      />
    </>
  );
}
