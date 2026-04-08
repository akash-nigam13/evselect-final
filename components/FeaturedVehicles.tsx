import Link from "next/link";
import { ArrowRight, Star, Zap, Gauge, BatteryCharging } from "lucide-react";

const featured = [
  {
    name: "Tata Nexon EV Max",
    brand: "Tata Motors",
    price: "₹19.99 L",
    range: "465 km",
    speed: "150 km/h",
    charge: "60 min",
    rating: 4.5,
    category: "SUV",
    href: "/vehicles/cars/tata-nexon-ev-max",
    accent: "#00e5ff",
    badge: "Editor's Pick",
  },
  {
    name: "Ather 450X",
    brand: "Ather Energy",
    price: "₹1.55 L",
    range: "150 km",
    speed: "90 km/h",
    charge: "4.5 hrs",
    rating: 4.4,
    category: "Scooter",
    href: "/vehicles/scooters/ather-450x",
    accent: "#39ff14",
    badge: "Top Rated",
  },
  {
    name: "Ola S1 Pro",
    brand: "Ola Electric",
    price: "₹1.47 L",
    range: "195 km",
    speed: "116 km/h",
    charge: "6.5 hrs",
    rating: 4.1,
    category: "Scooter",
    href: "/vehicles/scooters/ola-s1-pro",
    accent: "#ffb800",
    badge: "Best Value",
  },
  {
    name: "MG ZS EV",
    brand: "MG Motor",
    price: "₹23.99 L",
    range: "461 km",
    speed: "175 km/h",
    charge: "50 min",
    rating: 4.3,
    category: "SUV",
    href: "/vehicles/cars/mg-zs-ev",
    accent: "#a78bfa",
    badge: "Long Range",
  },
  {
    name: "Revolt RV400",
    brand: "Revolt Motors",
    price: "₹1.33 L",
    range: "150 km",
    speed: "85 km/h",
    charge: "4.5 hrs",
    rating: 3.9,
    category: "Bike",
    href: "/vehicles/bikes/revolt-rv400",
    accent: "#f43f5e",
    badge: "Sporty",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-3 h-3"
          fill={i < Math.floor(rating) ? "currentColor" : "none"}
          strokeWidth={1.5}
          style={{ color: i < Math.floor(rating) ? "#ffb800" : "#4a6fa5" }}
        />
      ))}
      <span className="text-xs font-mono text-ev-muted ml-1">{rating}</span>
    </div>
  );
}

export default function FeaturedVehicles() {
  return (
    <section className="py-24 relative">
      {/* Background stripe */}
      <div className="absolute inset-0 bg-ev-surface/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-mono text-ev-cyan tracking-widest uppercase mb-3">Top Picks</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Featured <span className="text-gradient-cyan">Electric Vehicles</span>
            </h2>
          </div>
          <Link
            href="/vehicles"
            className="inline-flex items-center gap-1.5 text-sm text-ev-muted hover:text-ev-cyan transition-colors font-body link-underline"
          >
            All vehicles <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {featured.map((ev) => (
            <Link
              key={ev.name}
              href={ev.href}
              className="group relative bg-ev-card border border-ev-border rounded-2xl overflow-hidden card-hover flex flex-col"
            >
              {/* Top accent bar */}
              <div className="h-0.5 w-full" style={{ background: ev.accent }} />

              {/* Image placeholder */}
              <div
                className="relative h-36 flex items-center justify-center overflow-hidden"
                style={{ background: `radial-gradient(ellipse at 50% 110%, ${ev.accent}18, transparent 70%)` }}
              >
                <div
                  className="text-5xl font-display font-black opacity-5 select-none absolute"
                  style={{ color: ev.accent }}
                >
                  EV
                </div>
                <div
                  className="w-20 h-20 rounded-full border flex items-center justify-center"
                  style={{ borderColor: `${ev.accent}30`, backgroundColor: `${ev.accent}08` }}
                >
                  <Zap className="w-8 h-8" style={{ color: ev.accent }} />
                </div>
                {/* Badge */}
                <div
                  className="absolute top-3 left-3 px-2 py-0.5 rounded-md text-[10px] font-mono tracking-wider"
                  style={{ color: ev.accent, backgroundColor: `${ev.accent}18`, border: `1px solid ${ev.accent}30` }}
                >
                  {ev.badge}
                </div>
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md text-[10px] font-mono bg-ev-border/30 text-ev-muted">
                  {ev.category}
                </div>
              </div>

              <div className="flex-1 p-4 flex flex-col">
                <div className="mb-3">
                  <div className="text-[10px] font-mono text-ev-muted mb-1">{ev.brand}</div>
                  <h3 className="font-display font-bold text-white text-sm leading-tight mb-2">{ev.name}</h3>
                  <StarRating rating={ev.rating} />
                </div>

                {/* Specs */}
                <div className="space-y-1.5 mb-4 flex-1">
                  {[
                    { icon: BatteryCharging, label: "Range",  value: ev.range },
                    { icon: Gauge,           label: "Speed",  value: ev.speed },
                    { icon: Zap,             label: "Charge", value: ev.charge },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-ev-muted">
                        <Icon className="w-3 h-3" />
                        <span className="text-[10px] font-body">{label}</span>
                      </div>
                      <span className="text-[11px] font-mono text-ev-text">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-3 border-t border-ev-border/40">
                  <span className="font-display font-bold text-sm" style={{ color: ev.accent }}>{ev.price}</span>
                  <span
                    className="text-[10px] font-mono flex items-center gap-0.5 group-hover:gap-1.5 transition-all"
                    style={{ color: ev.accent }}
                  >
                    View <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
