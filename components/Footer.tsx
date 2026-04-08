import Link from "next/link";
import { Zap, Twitter, Youtube, Instagram, Mail } from "lucide-react";

const footerLinks = {
  Vehicles: [
    { label: "Electric Cars",    href: "/vehicles/cars" },
    { label: "Electric Bikes",   href: "/vehicles/bikes" },
    { label: "Electric Scooters",href: "/vehicles/scooters" },
    { label: "Electric Buses",   href: "/vehicles/buses" },
    { label: "All Vehicles",     href: "/vehicles" },
  ],
  Guides: [
    { label: "EV Battery Guide", href: "/about-ev-batteries" },
    { label: "Buying Guide",     href: "/blog/category/buying-guide" },
    { label: "Charging Guide",   href: "/blog/category/charging" },
    { label: "Government Subsidies", href: "/blog/ev-subsidies-india" },
    { label: "Compare EVs",      href: "/compare" },
  ],
  Company: [
    { label: "About Us",     href: "/about" },
    { label: "Blog",         href: "/blog" },
    { label: "Advertise",    href: "/advertise" },
    { label: "Privacy Policy",href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
};

const socials = [
  { icon: Twitter,   href: "https://twitter.com/evselect_in",   label: "Twitter" },
  { icon: Youtube,   href: "https://youtube.com/@evselect_in",  label: "YouTube" },
  { icon: Instagram, href: "https://instagram.com/evselect_in", label: "Instagram" },
  { icon: Mail,      href: "mailto:hello@evselect.in",          label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ev-border/30 bg-ev-surface/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand col */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center bg-ev-cyan/15 rounded-lg">
                <Zap className="w-5 h-5 text-ev-cyan" fill="currentColor" />
              </div>
              <span className="font-display text-lg font-bold">
                <span className="text-white">EV</span>
                <span className="text-ev-cyan">SELECT</span>
                <span className="text-ev-muted text-sm">.in</span>
              </span>
            </Link>
            <p className="text-ev-text/50 text-sm font-body leading-relaxed max-w-xs mb-6">
              India&apos;s most comprehensive EV intelligence platform. Compare specs, explore battery tech, and make smarter electric vehicle decisions.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-ev-border flex items-center justify-center text-ev-muted hover:text-ev-cyan hover:border-ev-cyan/40 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-display font-semibold text-white text-xs tracking-widest uppercase mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-ev-text/50 hover:text-ev-cyan text-sm font-body transition-colors link-underline"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ev-border/30 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-ev-border text-xs font-mono">
            © {new Date().getFullYear()} EVSelect.in — All rights reserved.
          </p>
          <p className="text-ev-border/60 text-xs font-body">
            Prices are indicative. Always verify with official dealer.
          </p>
        </div>
      </div>
    </footer>
  );
}
