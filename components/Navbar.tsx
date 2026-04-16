"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Zap, Menu, X, ChevronDown } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  {
    label: "Vehicles",
    href: "#",
    children: [
      { label: "Electric Cars",    href: "/vehicles/cars" },
      { label: "Electric Bikes",   href: "/vehicles/bikes" },
      { label: "Electric Scooters",href: "/vehicles/scooters" },
      { label: "Electric Buses",   href: "/vehicles/buses" },
    ],
  },
  { label: "Compare",  href: "/compare" },
  { label: "Battery Guide", href: "/about-ev-batteries" },
  { label: "Blog",     href: "/blog" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDrop,  setOpenDrop]  = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-ev-bg/90 backdrop-blur-md border-b border-ev-border/50 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
<Link href="/" className="flex items-center">
  <Image
    src="/logo.png"
    alt="EVSelect Logo"
    width={160}
    height={50}
    className="h-18 w-auto"
    priority
  />
</Link>
        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label} className="relative group">
              {link.children ? (
                <>
                  <button
                    className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-body text-ev-text/80 hover:text-ev-cyan transition-colors"
                    onMouseEnter={() => setOpenDrop(link.label)}
                    onMouseLeave={() => setOpenDrop(null)}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                  </button>
                  {/* Dropdown */}
                  <div
                    className={clsx(
                      "absolute top-full left-0 mt-1 w-52 bg-ev-surface border border-ev-border rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.6)] transition-all duration-200",
                      openDrop === link.label ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                    )}
                    onMouseEnter={() => setOpenDrop(link.label)}
                    onMouseLeave={() => setOpenDrop(null)}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-ev-text/70 hover:text-ev-cyan hover:bg-ev-cyan/5 transition-colors border-b border-ev-border/30 last:border-0"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-sm font-body text-ev-text/80 hover:text-ev-cyan transition-colors link-underline"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/compare"
            className="px-4 py-2 rounded-lg text-sm font-display font-semibold tracking-wide bg-ev-cyan text-ev-bg hover:bg-ev-green transition-colors duration-200 shadow-ev-glow-sm"
          >
            Compare EVs
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-ev-text/60 hover:text-ev-cyan"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={clsx(
          "md:hidden border-t border-ev-border/30 bg-ev-surface/95 backdrop-blur-md transition-all duration-300 overflow-hidden",
          mobileOpen ? "max-h-screen" : "max-h-0"
        )}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href ?? "#"}
                className="block px-3 py-2.5 text-ev-text/80 hover:text-ev-cyan rounded-lg hover:bg-ev-cyan/5 text-sm transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.children?.map((child) => (
                <Link
                  key={child.label}
                  href={child.href}
                  className="block pl-7 py-2 text-ev-text/50 hover:text-ev-cyan text-sm transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <Link
            href="/compare"
            className="mt-3 block w-full text-center px-4 py-2.5 rounded-lg text-sm font-display font-semibold bg-ev-cyan text-ev-bg"
            onClick={() => setMobileOpen(false)}
          >
            Compare EVs
          </Link>
        </div>
      </div>
    </header>
  );
}
