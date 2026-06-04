"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Menu, X, ChevronDown, GitCompare } from "lucide-react";
import clsx from "clsx";
import LangSwitcher from "@/components/LangSwitcher";
import SiteSearch from "@/components/search/SiteSearch";
import { localeFromPath, localizedHref, t } from "@/lib/i18n";

type NavChild = { label?: string; labelKey?: string; href: string; desc?: string };
type NavLink = { labelKey: string; href: string; children?: NavChild[] };

const navLinks: NavLink[] = [
  {
    labelKey: "nav.catalog",
    href: "/catalog",
    children: [
      { labelKey: "nav.cars", href: "/catalog?type=car", desc: "Hatchbacks, SUVs, sedans & MPVs" },
      { labelKey: "nav.scooters", href: "/catalog?type=scooter", desc: "City & long-range scooters" },
      { labelKey: "nav.bikes", href: "/catalog?type=motorcycle", desc: "Commuter & performance bikes" },
      { labelKey: "nav.allBrands", href: "/catalog", desc: "Every model in one place" },
    ],
  },
  {
    labelKey: "nav.brands",
    href: "/catalog",
    children: [
      { label: "Tata", href: "/catalog/brand/tata", desc: "Nexon, Punch, Curvv, Harrier EV" },
      { label: "Mahindra", href: "/catalog/brand/mahindra", desc: "BE 6, XEV 9e & 9S" },
      { label: "MG", href: "/catalog/brand/mg", desc: "Windsor, ZS, Comet, Cyberster" },
      { label: "Ola", href: "/catalog/brand/ola", desc: "S1 scooters & Roadster bikes" },
      { label: "Ather", href: "/catalog/brand/ather", desc: "450X, Rizta, Apex" },
      { label: "Tesla", href: "/catalog/brand/tesla", desc: "Model Y, Model 3" },
      { labelKey: "nav.allBrands", href: "/catalog", desc: "Browse every brand →" },
    ],
  },
  { labelKey: "nav.compare", href: "/compare" },
  {
    labelKey: "nav.tools",
    href: "/tools",
    children: [
      { label: "All tools", href: "/tools", desc: "Every EV calculator in one place" },
      { label: "EMI Calculator", href: "/tools/ev-emi-calculator", desc: "EV loan monthly payment" },
      { label: "Cost Calculator", href: "/tools/ev-vs-petrol-cost-calculator", desc: "EV vs petrol running cost" },
      { label: "Range Calculator", href: "/tools/ev-range-calculator", desc: "Real-world range & charging" },
    ],
  },
  {
    labelKey: "nav.learn",
    href: "/learn",
    children: [
      { label: "EV 101 — basics & glossary", href: "/learn", desc: "How EVs work, jargon decoded" },
      { label: "EV Subsidies & Incentives", href: "/ev-subsidies-india", desc: "Central + state savings, 2026" },
      { label: "Set up a Charging Station", href: "/ev-charging-station-setup-india", desc: "Cost, licence, subsidy & ROI" },
      { label: "EV Battery Guide", href: "/about-ev-batteries", desc: "How EV batteries work & last" },
    ],
  },
  { labelKey: "nav.news", href: "/news" },
  { labelKey: "nav.blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);
  const L = (href: string) => {
    // preserve query strings while prefixing the locale
    const [p, q] = href.split("?");
    return localizedHref(p, locale) + (q ? `?${q}` : "");
  };

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const childLabel = (c: NavChild) => (c.labelKey ? t(c.labelKey, locale) : c.label ?? "");

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
          {navLinks.map((link) => (
            <li
              key={link.labelKey}
              className="relative"
              onMouseEnter={() => setOpenDrop(link.children ? link.labelKey : null)}
              onMouseLeave={() => setOpenDrop(null)}
            >
              {link.children ? (
                <>
                  <Link
                    href={L(link.href)}
                    className="flex items-center gap-1 rounded-lg px-3 py-2 font-body text-sm text-ev-text/80 transition-colors hover:text-brand"
                  >
                    {t(link.labelKey, locale)}
                    <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                  </Link>
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
          ))}
        </ul>

        {/* Search + CTA + language */}
        <div className="hidden items-center gap-2 lg:flex">
          <div className="w-36 xl:w-56">
            <SiteSearch />
          </div>
          <LangSwitcher />
          <Link
            href={L("/compare")}
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
          {navLinks.map((link) => (
            <div key={link.labelKey}>
              <Link
                href={L(link.href)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ev-text/90 transition-colors hover:bg-brand/10 hover:text-brand"
                onClick={() => setMobileOpen(false)}
              >
                {t(link.labelKey, locale)}
              </Link>
              {link.children?.map((child) => (
                <Link
                  key={child.href + (child.labelKey ?? child.label)}
                  href={L(child.href)}
                  className="block py-2 pl-7 text-sm text-ev-muted transition-colors hover:text-brand"
                  onClick={() => setMobileOpen(false)}
                >
                  {childLabel(child)}
                </Link>
              ))}
            </div>
          ))}
          <Link
            href={L("/compare")}
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
