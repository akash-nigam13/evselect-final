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
  title: "EV ब्लॉग और गाइड — EVSelect.in",
  description:
    "EV खरीदने की एक्सपर्ट गाइड, ब्रांड लाइनअप, बैटरी तकनीक, खर्च का विश्लेषण, चार्जिंग गाइड और भारत के EV बाज़ार की ताज़ा खबरें। 2026 में सही EV चुनने के लिए ज़रूरी सब कुछ।",
  alternates: altsFor("/blog", "hi"),
};

export default function BlogPage() {
  const ordered = postsByDate();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ev-bg pt-16">
        <div className="border-b border-ev-border/30 bg-ev-surface/20">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
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
              EVs, ब्रांड लाइनअप, बैटरी तकनीक, चार्जिंग, खर्च, नीति और भारत के EV बाज़ार की ताज़ा खबरों
              पर शोध-आधारित लेख — खरीदार को ध्यान में रखकर लिखे गए।
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <BlogHome posts={ordered} />
          <AdPlaceholder format="leaderboard" slot="5555555555" className="mt-16" />
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
