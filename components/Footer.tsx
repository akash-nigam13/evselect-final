import Link from "next/link";
import { Zap, Twitter, Youtube, Instagram, Mail } from "lucide-react";
import { localizedHref, t, type Locale } from "@/lib/i18n";

const headingKey: Record<string, string> = {
  Explore: "footer.explore",
  "Learn & Tools": "footer.learnTools",
  Company: "footer.company",
};

const footerLinks = {
  Explore: [
    { label: "Electric Cars", href: "/catalog?type=car" },
    { label: "Electric Scooters", href: "/catalog?type=scooter" },
    { label: "Electric Bikes", href: "/catalog?type=motorcycle" },
    { label: "Browse all EVs", href: "/catalog" },
    { label: "Compare EVs", href: "/compare" },
  ],
  "Learn & Tools": [
    { label: "EV 101 — Learn Hub", href: "/learn" },
    { label: "EV Subsidies & Incentives", href: "/ev-subsidies-india" },
    { label: "EMI Calculator", href: "/tools/ev-emi-calculator" },
    { label: "Cost Calculator", href: "/tools/ev-vs-petrol-cost-calculator" },
    { label: "Blog", href: "/blog" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Editorial & Data Policy", href: "/editorial-policy" },
    { label: "Advertising Disclosure", href: "/advertising-disclosure" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
};

const socials = [
  { icon: Twitter, href: "https://twitter.com/evselect_in", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com/@evselect_in", label: "YouTube" },
  { icon: Instagram, href: "https://instagram.com/evselect_in", label: "Instagram" },
  { icon: Mail, href: "mailto:akash.nigam@evselect.in", label: "Email" },
];

export default function Footer({ locale = "en" }: { locale?: Locale }) {
  const L = (href: string) => {
    const m = href.match(/^([^?#]*)([?#].*)?$/);
    return localizedHref(m ? m[1] : href, locale) + (m && m[2] ? m[2] : "");
  };
  return (
    <footer className="relative overflow-hidden border-t border-ev-border/40 bg-ev-surface/30">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[40rem] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 py-16 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand col */}
          <div className="col-span-2">
            <Link href="/" className="mb-4 inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient">
                <Zap className="h-5 w-5 text-ev-bg" fill="currentColor" />
              </span>
              <span className="font-display text-lg font-bold">
                <span className="text-white">EV</span>
                <span className="text-gradient-brand">Select</span>
                <span className="text-sm text-ev-muted">.in</span>
              </span>
            </Link>
            <p className="mb-6 max-w-xs font-body text-sm leading-relaxed text-ev-text/50">
              {t("footer.tagline", locale)}
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-ev-border text-ev-muted transition-all hover:border-brand/40 hover:text-brand"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="mb-4 font-display text-xs font-semibold uppercase tracking-widest text-white">
                {t(headingKey[section] ?? "", locale) || section}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={L(href)}
                      className="link-underline font-body text-sm text-ev-text/50 transition-colors hover:text-brand"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-ev-border/40 py-6">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="font-mono text-xs text-ev-muted/70">
              © {new Date().getFullYear()} EVSelect.in — {t("footer.rights", locale)}
            </p>
            <p className="font-body text-xs text-ev-muted/50">
              Specs &amp; prices are indicative (early 2026). Always verify with the official dealer.
            </p>
          </div>
          <p className="mt-4 max-w-4xl font-body text-[11px] leading-relaxed text-ev-muted/40">
            All product names, model names, brands and trademarks are the property of their
            respective owners and are used for identification and editorial purposes only.
            EVSelect.in is an independent platform and is not affiliated with, endorsed by, or
            sponsored by any vehicle manufacturer. All original content, design and code on this
            site are the property of EVSelect.in and may not be reproduced without permission.
          </p>
        </div>
      </div>
    </footer>
  );
}
