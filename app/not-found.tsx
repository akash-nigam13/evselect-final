import Link from "next/link";
import { Home, GitCompare, Car, Newspaper } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Aurora from "@/components/ui/Aurora";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/catalog", label: "Browse EVs", icon: Car },
  { href: "/compare", label: "Compare tool", icon: GitCompare },
  { href: "/blog", label: "Blog & guides", icon: Newspaper },
];

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-16 text-center">
        <Aurora variant="dual" />
        <div className="relative z-10 mx-auto max-w-xl py-24">
          <p className="font-mono text-7xl font-bold text-gradient-brand sm:text-8xl">404</p>
          <h1 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
            This route ran out of charge
          </h1>
          <p className="mx-auto mt-3 max-w-md font-body text-sm leading-relaxed text-ev-text/60">
            The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get
            you back to something useful.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {links.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="inline-flex items-center gap-2 rounded-xl border border-ev-border bg-ev-card/60 px-4 py-2.5 font-body text-sm text-ev-text/80 transition-colors hover:border-brand/40 hover:text-brand"
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
