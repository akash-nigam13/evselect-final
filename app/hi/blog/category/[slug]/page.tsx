import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import Aurora from "@/components/ui/Aurora";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import PostCard from "@/components/blog/PostCard";
import CategoryNav from "@/components/blog/CategoryNav";
import { CATEGORIES, getCategory, postsInCategory } from "@/lib/blog-posts";
import { collectionPageSchema, itemListSchema } from "@/lib/seo";
import { altsFor } from "@/lib/i18n";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const cat = getCategory(params.slug);
  if (!cat) return { title: "श्रेणी नहीं मिली | EVSelect.in" };
  return {
    title: `${cat.label} — EV ब्लॉग और गाइड`,
    description: cat.description,
    alternates: altsFor(`/blog/category/${cat.slug}`, "hi"),
  };
}

export default function BlogCategoryPage({ params }: { params: { slug: string } }) {
  const cat = getCategory(params.slug);
  if (!cat) return notFound();
  const posts = postsInCategory(cat.slug);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        <section className="relative overflow-hidden border-b border-ev-border/40">
          <Aurora variant="dual" />
          <div className="mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 lg:px-8">
            <Breadcrumbs
              homeName="होम"
              homeHref="/hi"
              items={[
                { name: "ब्लॉग", path: "/hi/blog" },
                { name: cat.label, path: `/hi/blog/category/${cat.slug}` },
              ]}
              className="mb-6"
            />
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em]" style={{ color: cat.accent }}>
              श्रेणी
            </p>
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">{cat.label}</h1>
            <p className="mt-4 max-w-2xl font-body text-ev-text/60">{cat.description}</p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <CategoryNav active={cat.slug} />

          <p className="mb-6 mt-8 font-mono text-xs text-ev-muted">
            {posts.length} {posts.length === 1 ? "लेख" : "लेख"}
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>

          <AdPlaceholder format="leaderboard" slot="5555555555" className="mt-12" />
        </div>
      </main>
      <Footer locale="hi" />
      <JsonLd
        data={[
          collectionPageSchema(`${cat.label} — EV Blog`, cat.description, `/blog/category/${cat.slug}`),
          itemListSchema(posts.map((p) => ({ name: p.title, path: `/blog/${p.slug}` }))),
        ]}
      />
    </>
  );
}
