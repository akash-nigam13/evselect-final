import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    label: "Electric Cars",
    href: "/vehicles/cars",
    count: "84 models",
    accent: "#00e5ff",
    icon: (
      <svg viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="6" y="20" width="52" height="14" rx="4" fill="currentColor" opacity="0.15"/>
        <path d="M14 20 L20 8 H44 L50 20Z" fill="currentColor" opacity="0.25"/>
        <rect x="6" y="20" width="52" height="14" rx="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 20 L20 8 H44 L50 20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="18" cy="34" r="5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="46" cy="34" r="5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="18" cy="34" r="2" fill="currentColor" opacity="0.5"/>
        <circle cx="46" cy="34" r="2" fill="currentColor" opacity="0.5"/>
        <line x1="28" y1="14" x2="36" y2="14" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
        <path d="M29 18 L32 12 L35 18" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6"/>
      </svg>
    ),
    desc: "Sedans, SUVs & hatchbacks",
    tag: "Most Popular",
    tagColor: "ev-cyan",
  },
  {
    label: "Electric Bikes",
    href: "/vehicles/bikes",
    count: "38 models",
    accent: "#39ff14",
    icon: (
      <svg viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="14" cy="34" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="50" cy="34" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14" cy="34" r="3" fill="currentColor" opacity="0.4"/>
        <circle cx="50" cy="34" r="3" fill="currentColor" opacity="0.4"/>
        <path d="M14 34 L28 14 L36 14 L50 34" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M36 14 L42 24" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M28 14 L24 8 L32 8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M38 10 L42 6 M42 10 L38 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
    desc: "Performance & commuter bikes",
    tag: "Trending",
    tagColor: "ev-green",
  },
  {
    label: "Electric Scooters",
    href: "/vehicles/scooters",
    count: "56 models",
    accent: "#ffb800",
    icon: (
      <svg viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="12" cy="36" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="48" cy="36" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="36" r="2.5" fill="currentColor" opacity="0.4"/>
        <circle cx="48" cy="36" r="2.5" fill="currentColor" opacity="0.4"/>
        <path d="M12 36 L20 20 L36 20 L44 28 L48 36" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <rect x="28" y="12" width="16" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="20" y1="20" x2="24" y2="12" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M31 16 L34 12 L37 16" stroke="currentColor" strokeWidth="1" strokeOpacity="0.7"/>
      </svg>
    ),
    desc: "Urban & last-mile mobility",
    tag: "Budget Friendly",
    tagColor: "ev-amber",
  },
  {
    label: "Electric Buses",
    href: "/vehicles/buses",
    count: "22 models",
    accent: "#a78bfa",
    icon: (
      <svg viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="4" y="10" width="56" height="28" rx="4" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="4" y="10" width="56" height="28" rx="4" fill="currentColor" opacity="0.08"/>
        <line x1="4" y1="26" x2="60" y2="26" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4"/>
        <rect x="10" y="14" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1"/>
        <rect x="26" y="14" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1"/>
        <rect x="42" y="14" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1"/>
        <circle cx="14" cy="38" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="50" cy="38" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14" cy="38" r="1.5" fill="currentColor" opacity="0.5"/>
        <circle cx="50" cy="38" r="1.5" fill="currentColor" opacity="0.5"/>
        <rect x="28" y="30" width="8" height="5" rx="1" stroke="currentColor" strokeWidth="1"/>
      </svg>
    ),
    desc: "Commercial fleet & transit",
    tag: "Fleet Solutions",
    tagColor: "purple",
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-mono text-ev-cyan tracking-widest uppercase mb-3">Browse by Category</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
              Choose Your<br />
              <span className="text-gradient-cyan">EV Category</span>
            </h2>
          </div>
          <Link href="/vehicles" className="inline-flex items-center gap-1.5 text-sm text-ev-muted hover:text-ev-cyan transition-colors font-body link-underline">
            View all vehicles <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map(({ label, href, count, accent, icon, desc, tag, tagColor }) => (
            <Link
              key={label}
              href={href}
              className="group relative bg-ev-card border border-ev-border rounded-2xl p-6 overflow-hidden card-hover"
            >
              {/* Background gradient on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `radial-gradient(ellipse 80% 80% at 50% 120%, ${accent}10, transparent)` }}
              />

              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at top right, ${accent}, transparent 70%)`,
                }}
              />

              {/* Tag */}
              {tag && (
                <div
                  className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-mono tracking-wider uppercase mb-4 border"
                  style={{ color: accent, borderColor: `${accent}30`, backgroundColor: `${accent}10` }}
                >
                  {tag}
                </div>
              )}

              {/* Icon */}
              <div
                className="w-16 h-12 mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ color: accent }}
              >
                {icon}
              </div>

              {/* Text */}
              <h3 className="font-display font-bold text-white text-lg mb-1 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                style={{ WebkitBackgroundClip: "text" }}
              >
                {label}
              </h3>
              <p className="text-ev-muted text-xs font-body mb-3">{desc}</p>

              <div className="flex items-center justify-between">
                <span
                  className="text-xs font-mono"
                  style={{ color: accent }}
                >
                  {count}
                </span>
                <ArrowRight
                  className="w-4 h-4 text-ev-border group-hover:text-current group-hover:translate-x-1 transition-all duration-200"
                  style={{ color: accent }}
                />
              </div>

              {/* Bottom border glow */}
              <div
                className="absolute bottom-0 inset-x-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${accent}60, transparent)` }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
