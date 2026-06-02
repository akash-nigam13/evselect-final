import Link from "next/link";
import { ArrowRight, Car, Bike, Zap } from "lucide-react";
import { byCategory } from "@/lib/ev-data";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const cats = [
  {
    type: "car" as const,
    title: "Electric Cars",
    desc: "Hatchbacks, SUVs, sedans & MPVs — from city runabouts to 600 km+ flagships.",
    icon: Car,
    accent: "#26E0C4",
    href: "/catalog?type=car",
  },
  {
    type: "scooter" as const,
    title: "Electric Scooters",
    desc: "The smart way to commute — connected, low-cost, and zero-emission.",
    icon: Zap,
    accent: "#C6F94E",
    href: "/catalog?type=scooter",
  },
  {
    type: "motorcycle" as const,
    title: "Electric Bikes",
    desc: "From efficient commuters to 150 km/h performance machines.",
    icon: Bike,
    accent: "#8B7BFF",
    href: "/catalog?type=motorcycle",
  },
];

export default function CategoryGrid() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Browse by category"
        title={<>Find your kind of <span className="text-gradient-brand">electric</span></>}
        subtitle="Every electric vehicle on sale in India, organised and filterable. Pick a lane to start exploring."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {cats.map((c, i) => {
          const count = byCategory(c.type).length;
          const Icon = c.icon;
          return (
            <Reveal key={c.type} delay={i * 90}>
              <Link
                href={c.href}
                className="card-hover group relative block h-full overflow-hidden rounded-2xl border border-ev-border bg-ev-card p-7"
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-20 blur-3xl transition-opacity duration-300 group-hover:opacity-40"
                  style={{ background: c.accent }}
                />
                <div
                  className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: `${c.accent}1a`, color: c.accent }}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mb-2 flex items-baseline gap-2">
                  <h3 className="font-display text-xl font-bold text-white">{c.title}</h3>
                  <span className="font-mono text-xs text-ev-muted">{count} models</span>
                </div>
                <p className="mb-6 font-body text-sm leading-relaxed text-ev-text/55">
                  {c.desc}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-medium"
                  style={{ color: c.accent }}
                >
                  Explore
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
