"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Menu, X, ChevronDown, GitCompare, ArrowRight, Car, Bike, Wrench, BatteryCharging } from "lucide-react";
import clsx from "clsx";
import LangSwitcher from "@/components/LangSwitcher";
import SiteSearch from "@/components/search/SiteSearch";
import { localeFromPath, localizedHref, t, type Locale } from "@/lib/i18n";

type Bi = { en: string; hi: string };
type MegaItem = { label: Bi; href: string; desc?: Bi };
type MegaCol = { heading: Bi; items: MegaItem[] };
type Promo = { title: Bi; desc: Bi; href: string; cta: Bi };
type SimpleChild = { label?: string; labelKey?: string; href: string; desc?: string };
type NavLink = {
  labelKey: string;
  href: string;
  mega?: { cols: MegaCol[]; promo?: Promo };
  children?: SimpleChild[];
};

const tx = (b: Bi, locale: Locale) => (locale === "hi" ? b.hi : b.en);

const navLinks: NavLink[] = [
  {
    labelKey: "nav.catalog",
    href: "/catalog",
    mega: {
      cols: [
        {
          heading: { en: "Shop by type", hi: "टाइप से चुनें" },
          items: [
            { label: { en: "Electric Cars", hi: "इलेक्ट्रिक कारें" }, href: "/catalog/electric-cars", desc: { en: "Hatchbacks, SUVs & sedans", hi: "हैचबैक, SUV और सेडान" } },
            { label: { en: "Electric Scooters", hi: "इलेक्ट्रिक स्कूटर" }, href: "/catalog/electric-scooters", desc: { en: "City & long-range", hi: "सिटी और लॉन्ग-रेंज" } },
            { label: { en: "Electric Bikes", hi: "इलेक्ट्रिक बाइक" }, href: "/catalog/electric-bikes", desc: { en: "Commuter & performance", hi: "कम्यूटर और परफ़ॉर्मेंस" } },
            { label: { en: "All EVs", hi: "सभी EVs" }, href: "/catalog", desc: { en: "Full filterable list", hi: "पूरी फ़िल्टर वाली सूची" } },
          ],
        },
        {
          heading: { en: "Top brands", hi: "टॉप ब्रांड" },
          items: [
            { label: { en: "Tata", hi: "Tata" }, href: "/catalog/brand/tata" },
            { label: { en: "Mahindra", hi: "Mahindra" }, href: "/catalog/brand/mahindra" },
            { label: { en: "MG", hi: "MG" }, href: "/catalog/brand/mg" },
            { label: { en: "Ola", hi: "Ola" }, href: "/catalog/brand/ola" },
            { label: { en: "Ather", hi: "Ather" }, href: "/catalog/brand/ather" },
            { label: { en: "Tesla", hi: "Tesla" }, href: "/catalog/brand/tesla" },
          ],
        },
        {
          heading: { en: "Tools & guides", hi: "टूल और गाइड" },
          items: [
            { label: { en: "Compare EVs", hi: "EVs की तुलना" }, href: "/compare-electric-vehicles" },
            { label: { en: "EV EMI Calculator", hi: "EV EMI कैलकुलेटर" }, href: "/ev-calculators/ev-emi-calculator" },
            { label: { en: "EV vs Petrol cost", hi: "EV बनाम पेट्रोल खर्च" }, href: "/ev-calculators/ev-vs-petrol-cost-calculator" },
            { label: { en: "EV Subsidies", hi: "EV सब्सिडी" }, href: "/ev-subsidies-india" },
          ],
        },
      ],
      promo: {
        title: { en: "Compare EVs side by side", hi: "EVs की आमने-सामने तुलना" },
        desc: { en: "Put any two electric vehicles head to head on range, price & specs.", hi: "किन्हीं दो EVs को रेंज, कीमत और स्पेक्स पर आमने-सामने रखें।" },
        href: "/compare-electric-vehicles",
        cta: { en: "Start comparing", hi: "तुलना शुरू करें" },
      },
    },
  },
  {
    labelKey: "nav.brands",
    href: "/catalog",
    mega: {
      cols: [
        {
          heading: { en: "Popular car brands", hi: "लोकप्रिय कार ब्रांड" },
          items: [
            { label: { en: "Tata", hi: "Tata" }, href: "/catalog/brand/tata" },
            { label: { en: "Mahindra", hi: "Mahindra" }, href: "/catalog/brand/mahindra" },
            { label: { en: "MG", hi: "MG" }, href: "/catalog/brand/mg" },
            { label: { en: "Hyundai", hi: "Hyundai" }, href: "/catalog/brand/hyundai" },
            { label: { en: "BYD", hi: "BYD" }, href: "/catalog/brand/byd" },
            { label: { en: "Kia", hi: "Kia" }, href: "/catalog/brand/kia" },
          ],
        },
        {
          heading: { en: "Two-wheeler brands", hi: "टू-व्हीलर ब्रांड" },
          items: [
            { label: { en: "Ola", hi: "Ola" }, href: "/catalog/brand/ola" },
            { label: { en: "Ather", hi: "Ather" }, href: "/catalog/brand/ather" },
            { label: { en: "TVS", hi: "TVS" }, href: "/catalog/brand/tvs" },
            { label: { en: "Bajaj", hi: "Bajaj" }, href: "/catalog/brand/bajaj" },
            { label: { en: "Revolt", hi: "Revolt" }, href: "/catalog/brand/revolt" },
            { label: { en: "Ultraviolette", hi: "Ultraviolette" }, href: "/catalog/brand/ultraviolette" },
          ],
        },
        {
          heading: { en: "Luxury & global", hi: "लग्ज़री और ग्लोबल" },
          items: [
            { label: { en: "Tesla", hi: "Tesla" }, href: "/catalog/brand/tesla" },
            { label: { en: "BMW", hi: "BMW" }, href: "/catalog/brand/bmw" },
            { label: { en: "Mercedes-Benz", hi: "Mercedes-Benz" }, href: "/catalog/brand/mercedes-benz" },
            { label: { en: "Audi", hi: "Audi" }, href: "/catalog/brand/audi" },
            { label: { en: "Volvo", hi: "Volvo" }, href: "/catalog/brand/volvo" },
            { label: { en: "Citroen", hi: "Citroen" }, href: "/catalog/brand/citroen" },
          ],
        },
      ],
      promo: {
        title: { en: "Browse every EV brand", hi: "हर EV ब्रांड देखें" },
        desc: { en: "Explore the full brand directory and each maker's complete lineup.", hi: "पूरी ब्रांड डायरेक्टरी और हर निर्माता की पूरी रेंज देखें।" },
        href: "/catalog",
        cta: { en: "View all brands", hi: "सभी ब्रांड देखें" },
      },
    },
  },
  { labelKey: "nav.compare", href: "/compare-electric-vehicles" },
  {
    labelKey: "nav.tools",
    href: "/ev-calculators",
    children: [
      { label: "All tools", href: "/ev-calculators", desc: "Every EV calculator in one place" },
      { label: "EMI Calculator", href: "/ev-calculators/ev-emi-calculator", desc: "EV loan monthly payment" },
      { label: "Cost Calculator", href: "/ev-calculators/ev-vs-petrol-cost-calculator", desc: "EV vs petrol running cost" },
      { label: "Range Calculator", href: "/ev-calculators/ev-range-calculator", desc: "Real-world range & charging" },
    ],
  },
  {
    labelKey: "nav.learn",
    href: "/ev-guides",
    children: [
      { label: "EV 101 — basics & glossary", href: "/ev-guides", desc: "How EVs work, jargon decoded" },
      { label: "EV Subsidies & Incentives", href: "/ev-subsidies-india", desc: "Central + state savings, 2026" },
      { label: "Set up a Charging Station", href: "/ev-charging-station-setup-india", desc: "Cost, licence, subsidy & ROI" },
      { label: "EV Battery Guide", href: "/about-ev-batteries", desc: "How EV batteries work & last" },
    ],
  },
  { labelKey: "nav.news", href: "/ev-news" },
  { labelKey: "nav.blog", href: "/blog" },
];

const COL_ICON = [Car, Bike, Wrench];

export default function Navbar() {
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);
  const L = (href: string) => {
    const [p, q] = href.split("?");
    return localizedHref(p, locale) + (q ? `?${q}` : "");
  };

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    if (!mobileOpen) setMobileSection(null);
  }, [mobileOpen]);

  const childLabel = (c: SimpleChild) => (c.labelKey ? t(c.labelKey, locale) : c.label ?? "");

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-ev-border/60 bg-ev-bg/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href={L("/")} className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient shadow-ev-glow-sm transition-transform duration-300 group-hover:scale-110">
            <Zap className="h-5 w-5 text-ev-bg" fill="currentColor" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            <span className="text-white">EV</span>
            <span className="text-gradient-brand">Select</span>
            <span className="text-sm text-ev-muted">.in</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const hasMenu = !!(link.mega || link.children);
            return (
              <li
                key={link.labelKey}
                className="relative"
                onMouseEnter={() => setOpenDrop(hasMenu ? link.labelKey : null)}
                onMouseLeave={() => setOpenDrop(null)}
              >
                {hasMenu ? (
                  <>
                    <Link
                      href={L(link.href)}
                      className="flex items-center gap-1 rounded-lg px-3 py-2 font-body text-sm text-ev-text/80 transition-colors hover:text-brand"
                    >
                      {t(link.labelKey, locale)}
                      <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                    </Link>

                    {/* MEGA panel */}
                    {link.mega && (
                      <div
                        className={clsx(
                          "absolute left-0 top-full w-[min(54rem,calc(100vw-2rem))] pt-2 transition-all duration-200",
                          openDrop === link.labelKey
                            ? "pointer-events-auto translate-y-0 opacity-100"
                            : "pointer-events-none -translate-y-1 opacity-0"
                        )}
                      >
                        <div className="grid grid-cols-1 gap-1 overflow-hidden rounded-2xl border border-ev-border bg-ev-surface/95 p-4 shadow-card backdrop-blur-xl md:grid-cols-[repeat(3,minmax(0,1fr))_15rem]">
                          {link.mega.cols.map((col, ci) => {
                            const Icon = COL_ICON[ci] ?? Wrench;
                            return (
                              <div key={col.heading.en} className="px-2">
                                <p className="mb-2 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-ev-muted">
                                  <Icon className="h-3.5 w-3.5 text-brand" />
                                  {tx(col.heading, locale)}
                                </p>
                                <div className="space-y-0.5">
                                  {col.items.map((it) => (
                                    <Link
                                      key={it.href + it.label.en}
                                      href={L(it.href)}
                                      className="block rounded-lg px-2 py-1.5 transition-colors hover:bg-brand/10"
                                    >
                                      <span className="block text-sm font-medium text-ev-text/90">
                                        {tx(it.label, locale)}
                                      </span>
                                      {it.desc && (
                                        <span className="block text-xs text-ev-muted">{tx(it.desc, locale)}</span>
                                      )}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            );
                          })}

                          {link.mega.promo && (
                            <Link
                              href={L(link.mega.promo.href)}
                              className="group flex flex-col justify-between rounded-xl border border-brand/30 bg-brand/5 p-4 transition-colors hover:border-brand/60 hover:bg-brand/10"
                            >
                              <div>
                                <BatteryCharging className="mb-2 h-5 w-5 text-brand" />
                                <p className="font-display text-sm font-bold text-white">
                                  {tx(link.mega.promo.title, locale)}
                                </p>
                                <p className="mt-1 text-xs leading-relaxed text-ev-muted">
                                  {tx(link.mega.promo.desc, locale)}
                                </p>
                              </div>
                              <span className="mt-3 inline-flex items-center gap-1 font-mono text-xs font-semibold text-brand">
                                {tx(link.mega.promo.cta, locale)}
                                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                              </span>
                            </Link>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Compact dropdown (Tools / Learn) */}
                    {link.children && (
                      <div
                        className={clsx(
                          "absolute left-0 top-full w-64 pt-2 transition-all duration-200",
                          openDrop === link.labelKey
                            ? "pointer-events-auto translate-y-0 opacity-100"
                            : "pointer-events-none -translate-y-1 opacity-0"
                        )}
                      >
                        <div className="overflow-hidden rounded-2xl border border-ev-border bg-ev-surface/95 p-1.5 shadow-card backdrop-blur-xl">
                          {link.children.map((child) => (
                            <Link
                              key={child.href + (child.labelKey ?? child.label)}
                              href={L(child.href)}
                              className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-brand/10"
                            >
                              <span className="block text-sm font-medium text-ev-text/90">
                                {childLabel(child)}
                              </span>
                              {child.desc && (
                                <span className="block text-xs text-ev-muted">{child.desc}</span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={L(link.href)}
                    className="link-underline block rounded-lg px-3 py-2 font-body text-sm text-ev-text/80 transition-colors hover:text-brand"
                  >
                    {t(link.labelKey, locale)}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* Search + CTA + language */}
        <div className="hidden items-center gap-2 lg:flex">
          <div className="w-36 xl:w-56">
            <SiteSearch />
          </div>
          <LangSwitcher />
          <Link
            href={L("/compare-electric-vehicles")}
            className="group inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-4 py-2 font-display text-sm font-semibold text-ev-bg transition-all duration-300 hover:shadow-ev-glow"
          >
            <GitCompare className="h-4 w-4" />
            {t("nav.compareCta", locale)}
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-1 lg:hidden">
          <LangSwitcher />
          <button
            className="p-2 text-ev-text/70 transition-colors hover:text-brand"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={clsx(
          "overflow-hidden border-t border-ev-border/40 bg-ev-surface/95 backdrop-blur-xl transition-all duration-300 lg:hidden",
          mobileOpen ? "max-h-[90vh] overflow-y-auto" : "max-h-0"
        )}
      >
        <div className="space-y-1 px-4 py-5">
          <div className="pb-3">
            <SiteSearch onNavigate={() => setMobileOpen(false)} />
          </div>
          {navLinks.map((link) => {
            const hasMenu = !!(link.mega || link.children);
            const expanded = mobileSection === link.labelKey;
            if (!hasMenu) {
              return (
                <Link
                  key={link.labelKey}
                  href={L(link.href)}
                  className="block rounded-lg px-3 py-3 text-sm font-semibold text-ev-text/90 transition-colors hover:bg-brand/10 hover:text-brand"
                  onClick={() => setMobileOpen(false)}
                >
                  {t(link.labelKey, locale)}
                </Link>
              );
            }
            return (
              <div key={link.labelKey} className="border-b border-ev-border/30 last:border-0">
                {/* accordion header: label navigates, chevron toggles */}
                <div className="flex items-center">
                  <Link
                    href={L(link.href)}
                    className="flex-1 rounded-lg px-3 py-3 text-sm font-semibold text-ev-text/90 transition-colors hover:text-brand"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t(link.labelKey, locale)}
                  </Link>
                  <button
                    type="button"
                    aria-label={`Toggle ${t(link.labelKey, locale)}`}
                    aria-expanded={expanded}
                    onClick={() => setMobileSection(expanded ? null : link.labelKey)}
                    className="flex h-11 w-11 items-center justify-center text-ev-muted transition-colors hover:text-brand"
                  >
                    <ChevronDown
                      className={clsx("h-4 w-4 transition-transform duration-200", expanded && "rotate-180")}
                    />
                  </button>
                </div>

                {/* expandable panel */}
                <div
                  className={clsx(
                    "overflow-hidden transition-all duration-300",
                    expanded ? "max-h-[640px]" : "max-h-0"
                  )}
                >
                  <div className="pb-2">
                    {link.mega?.cols.map((col) => (
                      <div key={col.heading.en} className="mt-1">
                        <p className="px-3 pt-2 font-mono text-[10px] uppercase tracking-wider text-ev-muted">
                          {tx(col.heading, locale)}
                        </p>
                        {col.items.map((it) => (
                          <Link
                            key={it.href + it.label.en}
                            href={L(it.href)}
                            className="block py-2 pl-6 text-sm text-ev-muted transition-colors hover:text-brand"
                            onClick={() => setMobileOpen(false)}
                          >
                            {tx(it.label, locale)}
                          </Link>
                        ))}
                      </div>
                    ))}
                    {link.children?.map((child) => (
                      <Link
                        key={child.href + (child.labelKey ?? child.label)}
                        href={L(child.href)}
                        className="block py-2 pl-6 text-sm text-ev-muted transition-colors hover:text-brand"
                        onClick={() => setMobileOpen(false)}
                      >
                        {childLabel(child)}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
          <Link
            href={L("/compare-electric-vehicles")}
            className="mt-3 block rounded-xl bg-brand-gradient px-4 py-3 text-center font-display text-sm font-semibold text-ev-bg"
            onClick={() => setMobileOpen(false)}
          >
            {t("nav.compareCta", locale)}
          </Link>
        </div>
      </div>
    </header>
  );
}
