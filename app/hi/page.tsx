import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GitCompare, Car, Bike, Zap as ZapIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";
import Counter from "@/components/ui/Counter";
import { EVS } from "@/lib/ev-data";
import { t, altsFor, localizedHref, type Locale } from "@/lib/i18n";

const LOCALE: Locale = "hi";
const brands = Array.from(new Set(EVS.map((e) => e.brand)));

export const metadata: Metadata = {
  title: "EVSelect.in — भारत का EV नॉलेज हब (2026)",
  description:
    "इलेक्ट्रिक वाहनों के बारे में जानें, 140+ EVs की साथ-साथ तुलना करें, चलने का खर्च निकालें और भारत की पूरी 2026 कार, स्कूटर व बाइक कैटलॉग ब्राउज़ करें।",
  alternates: altsFor("/", LOCALE),
  openGraph: {
    type: "website",
    locale: "hi_IN",
    url: "https://www.evselect.in/hi",
    siteName: "EVSelect.in",
    title: "EVSelect.in — भारत का EV नॉलेज हब (2026)",
    description:
      "इलेक्ट्रिक से जुड़ी हर चीज़ के लिए भारत का वन-स्टॉप हब — जानें, तुलना करें और अपनी EV चुनें।",
  },
};

const quickLinks = [
  { label: t("nav.cars", LOCALE), href: "/catalog?type=car", icon: Car },
  { label: t("nav.scooters", LOCALE), href: "/catalog?type=scooter", icon: ZapIcon },
  { label: t("nav.bikes", LOCALE), href: "/catalog?type=motorcycle", icon: Bike },
];

export default function HindiHomePage() {
  const L = (href: string) => {
    const [p, q] = href.split("?");
    return localizedHref(p, LOCALE) + (q ? `?${q}` : "");
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
          <div className="absolute inset-0 bg-hero-glow" />
          <div className="absolute inset-0 bg-iris-glow" />
          <div
            className="absolute inset-0 bg-grid-pattern bg-grid"
            style={{
              maskImage:
                "radial-gradient(ellipse 70% 70% at 50% 45%, black 35%, transparent 100%)",
            }}
          />
          <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/5 blur-[130px]" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3 py-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-volt" />
                <span className="font-body text-xs font-medium tracking-wide text-brand">
                  {t("home.badge", LOCALE)} · {EVS.length} EVs
                </span>
              </div>

              <h1 className="mb-6 font-display text-5xl font-bold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl text-balance">
                <span className="text-white">{t("home.h1a", LOCALE)}</span>
                <br />
                <span className="text-gradient-brand">{t("home.h1b", LOCALE)}</span>
              </h1>

              <p className="mb-9 max-w-xl font-body text-lg leading-relaxed text-ev-text/60">
                {t("home.sub", LOCALE)}
              </p>

              <div className="mb-8 flex flex-wrap gap-4">
                <Link
                  href={L("/compare")}
                  className="group inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-6 py-3.5 font-display text-sm font-bold tracking-wide text-ev-bg shadow-ev-glow transition-all duration-300 hover:shadow-iris-glow"
                >
                  <GitCompare className="h-4 w-4" />
                  {t("home.compare", LOCALE)}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={L("/catalog")}
                  className="inline-flex items-center gap-2 rounded-xl border border-ev-border bg-ev-surface/50 px-6 py-3.5 font-body text-sm text-ev-text/80 transition-all duration-300 hover:border-brand/40 hover:text-brand"
                >
                  {t("home.browse", LOCALE)}
                </Link>
              </div>

              <div className="mb-14 flex flex-wrap gap-2">
                {quickLinks.map(({ label, href, icon: Icon }) => (
                  <Link
                    key={label}
                    href={L(href)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-ev-border bg-ev-card/60 px-3 py-1.5 text-xs font-medium text-ev-muted transition-colors hover:border-brand/40 hover:text-brand"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </Link>
                ))}
              </div>

              <div className="grid max-w-xl grid-cols-3 gap-6">
                {[
                  { to: EVS.length, suffix: "", label: t("common.models", LOCALE) },
                  { to: brands.length, suffix: "+", label: t("common.brands", LOCALE) },
                  { to: 3, suffix: "", label: t("common.categories", LOCALE) },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-3xl font-bold text-white">
                      <Counter to={s.to} suffix={s.suffix} />
                    </div>
                    <div className="mt-1 font-body text-xs text-ev-muted">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 inset-x-0 overflow-hidden border-t border-ev-border/40 bg-ev-bg/60 py-4 backdrop-blur">
            <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
              {[...brands, ...brands].map((b, i) => (
                <span key={`${b}-${i}`} className="font-display text-sm font-medium text-ev-muted/50">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <Aurora variant="dual" />
          <p className="font-body text-ev-text/55">
            यह पेज हिन्दी पायलट का हिस्सा है। बाकी पेज जल्द ही हिन्दी में आ रहे हैं।
          </p>
        </section>
      </main>
      <Footer locale={LOCALE} />
    </>
  );
}
