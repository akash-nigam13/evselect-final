import Link from "next/link";
import { Clock, Calendar, User, ArrowRight, GitCompare, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdPlaceholder from "@/components/AdPlaceholder";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ToolsCTA from "@/components/ToolsCTA";
import { getPost, getCategory, relatedPosts } from "@/lib/blog-posts";
import { blogPostingSchema, newsArticleSchema, SITE } from "@/lib/seo";
import { Locale, t, localizedHref } from "@/lib/i18n";

/**
 * Shared layout for blog articles.
 * Pass the post `slug` (must exist in lib/blog-posts) and the article body as children.
 * Renders hero, breadcrumbs, byline, a 2-col layout with a TOP-RIGHT "Related reads"
 * sidebar, BlogPosting + Breadcrumb schema, and the footer.
 *
 * Pass `locale="hi"` from a /hi article page to render the localized chrome,
 * Hindi title/subtitle (from the post's hi* fields) and localized internal links.
 */
export default function ArticleShell({
  slug,
  children,
  locale = "en",
}: {
  slug: string;
  children: React.ReactNode;
  locale?: Locale;
}) {
  const post = getPost(slug)!;
  const category = getCategory(post.categorySlug);
  const related = relatedPosts(slug, 4);
  const accent = post.accent;
  const isHi = locale === "hi";

  const title = isHi && post.hiTitle ? post.hiTitle : post.title;
  const subtitle = isHi && post.hiSubtitle ? post.hiSubtitle : post.subtitle;
  const excerpt = isHi && post.hiExcerpt ? post.hiExcerpt : post.excerpt;

  const L = (path: string) => localizedHref(path, locale);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        {/* Hero */}
        <section
          className="relative overflow-hidden border-b border-ev-border/40"
          style={{
            background: `radial-gradient(70% 80% at 50% -10%, ${accent}14, transparent 60%)`,
          }}
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-grid-pattern bg-grid opacity-20"
          />
          <div className="relative mx-auto max-w-4xl px-4 pb-12 pt-12 sm:px-6 lg:px-8">
            <Breadcrumbs
              homeName={isHi ? "होम" : "Home"}
              homeHref={isHi ? "/hi" : "/"}
              items={[
                { name: "Blog", path: L("/blog") },
                ...(category ? [{ name: category.label, path: L(`/blog/category/${category.slug}`) }] : []),
                { name: title, path: L(`/blog/${post.slug}`) },
              ]}
              className="mb-6"
            />

            {category && (
              <Link
                href={L(`/blog/category/${category.slug}`)}
                className="mb-5 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-widest transition-colors"
                style={{ color: accent, borderColor: `${accent}40`, backgroundColor: `${accent}12` }}
              >
                <Tag className="h-3 w-3" />
                {category.label}
              </Link>
            )}

            <h1 className="font-display text-3xl font-bold leading-[1.12] text-white sm:text-4xl lg:text-[2.75rem] text-balance">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-ev-text/60 sm:text-lg">
                {subtitle}
              </p>
            )}

            <div className="mt-7 flex flex-wrap items-center gap-5 border-t border-ev-border/40 pt-5 font-mono text-xs text-ev-muted">
              <span className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" style={{ color: accent }} />
                {SITE.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" style={{ color: accent }} />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" style={{ color: accent }} />
                {post.readTime} {t("article.readWord", locale)}
              </span>
            </div>

            {/* Banner */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-ev-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/blog/${post.slug}.png`}
                alt={title}
                className="aspect-[1200/630] w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Body + sidebar */}
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_320px]">
            <article className="prose-ev max-w-none">{children}</article>

            <aside className="flex flex-col gap-6 lg:sticky lg:top-24">
              {/* Related reads — TOP of the sidebar */}
              {related.length > 0 && (
                <div className="rounded-2xl border border-ev-border bg-ev-card p-5">
                  <h2 className="mb-4 font-display text-sm font-bold text-white">{t("article.related", locale)}</h2>
                  <ul className="space-y-3.5">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link href={L(`/blog/${r.slug}`)} className="group flex items-start gap-2.5">
                          <span
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                            style={{ background: r.accent }}
                          />
                          <span>
                            <span className="block text-sm font-medium leading-snug text-ev-text/85 transition-colors group-hover:text-brand">
                              {isHi && r.hiTitle ? r.hiTitle : r.title}
                            </span>
                            <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-wider text-ev-muted">
                              {r.category} · {r.readTime}
                            </span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tools CTA */}
              <div className="rounded-2xl border border-brand/25 bg-ev-card p-5">
                <p className="font-display text-sm font-bold text-white">{t("article.ctaTitle", locale)}</p>
                <p className="mt-2 font-body text-xs leading-relaxed text-ev-text/55">
                  {t("article.ctaSub", locale)}
                </p>
                <Link
                  href={L("/compare-electric-vehicles")}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient py-2.5 font-display text-xs font-bold text-ev-bg"
                >
                  <GitCompare className="h-3.5 w-3.5" /> {t("article.ctaBtn", locale)}
                </Link>
                <Link
                  href={L("/ev-calculators")}
                  className="mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-ev-border py-2.5 font-mono text-xs text-ev-text/80 transition-colors hover:border-brand/40 hover:text-brand"
                >
                  {t("article.ctaTools", locale)} <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              {/* Contextual tools CTA */}
              <ToolsCTA locale={locale} tools={["compare", "emi", "cost"]} />

              <AdPlaceholder format="rectangle" slot="8888888888" />
            </aside>
          </div>

          {/* Bottom related strip (mobile-friendly, full width) */}
          {related.length > 0 && (
            <div className="mt-16 border-t border-ev-border/40 pt-10">
              <h2 className="mb-6 font-display text-xl font-bold text-white">{t("article.keep", locale)}</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={L(`/blog/${r.slug}`)}
                    className="card-hover group rounded-2xl border border-ev-border bg-ev-card p-5"
                  >
                    <span
                      className="font-mono text-[10px] uppercase tracking-widest"
                      style={{ color: r.accent }}
                    >
                      {r.category}
                    </span>
                    <h3 className="mt-2 font-display text-sm font-bold leading-snug text-white transition-colors group-hover:text-brand">
                      {isHi && r.hiTitle ? r.hiTitle : r.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1 font-mono text-[11px] text-brand">
                      {t("article.read", locale)} <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer locale={locale} />
      <JsonLd
        data={(post.news ? newsArticleSchema : blogPostingSchema)({
          title,
          description: excerpt,
          path: L(`/blog/${post.slug}`),
          datePublished: post.date,
          dateModified: post.date,
          section: post.category,
          image: `${SITE.url}/blog/${post.slug}.png`,
        })}
      />
    </>
  );
}
