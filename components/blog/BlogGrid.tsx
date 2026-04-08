"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, Tag, ChevronRight } from "lucide-react";
import AdPlaceholder from "@/components/AdPlaceholder";
import { POSTS } from "@/lib/blog-posts";
import type { Post } from "@/lib/blog-posts";


const ALL_CATEGORIES = [
  "All",
  "Buying Guide",
  "Battery Tech",
  "Cost Analysis",
  "Infrastructure",
];

const POPULAR_TAGS = [
  "Solid-State", "LFP Battery", "Fast Charging", "Road Trip",
  "EV Subsidy",  "Range Anxiety","Battery Life",  "Best Scooter",
];

/* ─────────────────────────────────────────────────
   SVG COVER IMAGES  (one per article topic)
───────────────────────────────────────────────── */

function CoverScooters({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="sg1" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.18" />
          <stop offset="100%" stopColor="#050b14" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="480" height="220" fill="#050b14" />
      <rect width="480" height="220" fill="url(#sg1)" />
      {/* Grid lines */}
      {[60,120,180,240,300,360,420].map(x=><line key={x} x1={x} y1="0" x2={x} y2="220" stroke={accent} strokeOpacity="0.07" strokeWidth="1"/>)}
      {[55,110,165].map(y=><line key={y} x1="0" y1={y} x2="480" y2={y} stroke={accent} strokeOpacity="0.07" strokeWidth="1"/>)}
      {/* Ground */}
      <line x1="40" y1="175" x2="440" y2="175" stroke={accent} strokeOpacity="0.2" strokeWidth="1" strokeDasharray="6 4"/>
      {/* Scooter 1 — left */}
      <circle cx="115" cy="175" r="20" fill="none" stroke={accent} strokeWidth="2" strokeOpacity="0.6"/>
      <circle cx="115" cy="175" r="7" fill={accent} fillOpacity="0.25"/>
      <circle cx="195" cy="175" r="20" fill="none" stroke={accent} strokeWidth="2" strokeOpacity="0.6"/>
      <circle cx="195" cy="175" r="7" fill={accent} fillOpacity="0.25"/>
      <path d="M125 155 L140 125 L175 125 L185 155Z" fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="1.5" strokeOpacity="0.7" strokeLinejoin="round"/>
      <path d="M115 155 L125 155" stroke={accent} strokeWidth="2" strokeOpacity="0.6"/>
      <path d="M185 155 L195 155" stroke={accent} strokeWidth="2" strokeOpacity="0.6"/>
      <rect x="152" y="112" width="18" height="13" rx="3" fill={accent} fillOpacity="0.3" stroke={accent} strokeWidth="1"/>
      <path d="M138 125 L132 115 L140 115" stroke={accent} strokeWidth="1.5" strokeOpacity="0.6" fill="none"/>
      {/* #1 badge */}
      <circle cx="115" cy="90" r="14" fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="1"/>
      <text x="115" y="95" textAnchor="middle" fill={accent} fontSize="13" fontWeight="bold" fontFamily="monospace">#1</text>
      {/* Scooter 2 — center */}
      <circle cx="265" cy="175" r="20" fill="none" stroke="#39ff14" strokeWidth="2" strokeOpacity="0.5"/>
      <circle cx="265" cy="175" r="7" fill="#39ff14" fillOpacity="0.2"/>
      <circle cx="345" cy="175" r="20" fill="none" stroke="#39ff14" strokeWidth="2" strokeOpacity="0.5"/>
      <circle cx="345" cy="175" r="7" fill="#39ff14" fillOpacity="0.2"/>
      <path d="M275 155 L290 130 L330 130 L335 155Z" fill="#39ff14" fillOpacity="0.12" stroke="#39ff14" strokeWidth="1.5" strokeOpacity="0.6" strokeLinejoin="round"/>
      <path d="M265 155 L275 155" stroke="#39ff14" strokeWidth="2" strokeOpacity="0.5"/>
      <path d="M335 155 L345 155" stroke="#39ff14" strokeWidth="2" strokeOpacity="0.5"/>
      <rect x="298" y="116" width="20" height="14" rx="3" fill="#39ff14" fillOpacity="0.25" stroke="#39ff14" strokeWidth="1"/>
      <circle cx="300" cy="91" r="14" fill="#39ff14" fillOpacity="0.12" stroke="#39ff14" strokeWidth="1"/>
      <text x="300" y="96" textAnchor="middle" fill="#39ff14" fontSize="13" fontWeight="bold" fontFamily="monospace">#2</text>
      {/* Lightning bolts */}
      <path d="M395 60 L388 82 L395 82 L388 104" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeOpacity="0.5"/>
      <path d="M415 45 L407 72 L415 72 L407 99" stroke="#ffb800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeOpacity="0.4"/>
      <path d="M435 58 L428 78 L435 78 L428 98" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" strokeOpacity="0.4"/>
      {/* "TOP 5" label */}
      <text x="40" y="52" fill={accent} fontSize="28" fontWeight="900" fontFamily="monospace" fillOpacity="0.12" letterSpacing="2">TOP 5</text>
    </svg>
  );
}

function CoverBattery({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="bg2" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.15" />
          <stop offset="100%" stopColor="#050b14" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="battFill" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.9"/>
          <stop offset="72%" stopColor={accent} stopOpacity="0.9"/>
          <stop offset="72%" stopColor="#1a3a5c" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#1a3a5c" stopOpacity="0.4"/>
        </linearGradient>
      </defs>
      <rect width="480" height="220" fill="#050b14"/>
      <rect width="480" height="220" fill="url(#bg2)"/>
      {/* Temp gauge arc */}
      <path d="M380 160 A80 80 0 0 1 460 160" fill="none" stroke="#1a3a5c" strokeWidth="10" strokeLinecap="round"/>
      <path d="M380 160 A80 80 0 0 1 452 110" fill="none" stroke="#f43f5e" strokeWidth="10" strokeLinecap="round" strokeOpacity="0.7"/>
      <circle cx="420" cy="160" r="8" fill="#f43f5e" fillOpacity="0.7"/>
      <text x="420" y="148" textAnchor="middle" fill="#f43f5e" fontSize="11" fontFamily="monospace" fillOpacity="0.8">45°C</text>
      {/* Main battery body */}
      <rect x="60" y="70" width="240" height="100" rx="10" fill="#0d1f3c" stroke={accent} strokeWidth="2" strokeOpacity="0.6"/>
      <rect x="300" y="100" width="20" height="40" rx="4" fill="#0d1f3c" stroke={accent} strokeWidth="2" strokeOpacity="0.6"/>
      {/* Battery fill */}
      <rect x="68" y="78" width="224" height="84" rx="6" fill="url(#battFill)"/>
      {/* Cell dividers */}
      {[118, 168, 218, 268].map(x => (
        <line key={x} x1={x} y1="78" x2={x} y2="162" stroke="#050b14" strokeWidth="2" strokeOpacity="0.6"/>
      ))}
      {/* % label */}
      <text x="155" y="128" textAnchor="middle" fill="#050b14" fontSize="28" fontWeight="900" fontFamily="monospace">80%</text>
      <text x="155" y="146" textAnchor="middle" fill="#050b14" fontSize="11" fontFamily="monospace">DAILY LIMIT</text>
      {/* Good habits tags */}
      <rect x="60" y="185" width="80" height="22" rx="5" fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="1" strokeOpacity="0.4"/>
      <text x="100" y="200" textAnchor="middle" fill={accent} fontSize="10" fontFamily="monospace">SHADE PARK</text>
      <rect x="150" y="185" width="80" height="22" rx="5" fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="1" strokeOpacity="0.4"/>
      <text x="190" y="200" textAnchor="middle" fill={accent} fontSize="10" fontFamily="monospace">SLOW CHARGE</text>
      <rect x="240" y="185" width="70" height="22" rx="5" fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="1" strokeOpacity="0.4"/>
      <text x="275" y="200" textAnchor="middle" fill={accent} fontSize="10" fontFamily="monospace">LFP SAFE</text>
      {/* 10 yr label */}
      <text x="370" y="60" fill={accent} fontSize="34" fontWeight="900" fontFamily="monospace" fillOpacity="0.11" textAnchor="middle">10YR</text>
    </svg>
  );
}

function CoverCost({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="bg3" cx="40%" cy="50%" r="60%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.15"/>
          <stop offset="100%" stopColor="#050b14" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="480" height="220" fill="#050b14"/>
      <rect width="480" height="220" fill="url(#bg3)"/>
      {/* X/Y axes */}
      <line x1="70" y1="30" x2="70" y2="175" stroke="#1a3a5c" strokeWidth="1.5"/>
      <line x1="70" y1="175" x2="440" y2="175" stroke="#1a3a5c" strokeWidth="1.5"/>
      {/* Year labels */}
      {["Y1","Y2","Y3","Y4","Y5"].map((yr, i) => (
        <text key={yr} x={70 + 74*(i+1) - 37 + 37} y="190" textAnchor="middle" fill="#4a6fa5" fontSize="11" fontFamily="monospace">{yr}</text>
      ))}
      {/* Petrol line — higher cumulative */}
      <polyline
        points="70,175 144,148 218,118 292,91 366,65 440,40"
        fill="none" stroke={accent} strokeWidth="2.5" strokeLinejoin="round"
      />
      {/* EV line — lower after crossover */}
      <polyline
        points="70,175 144,158 218,138 292,110 366,80 440,52"
        fill="none" stroke="#00e5ff" strokeWidth="2.5" strokeLinejoin="round" strokeDasharray="6 3"
      />
      {/* Area under petrol */}
      <polygon
        points="70,175 144,148 218,118 292,91 366,65 440,40 440,175"
        fill={accent} fillOpacity="0.07"
      />
      {/* Area under EV */}
      <polygon
        points="70,175 144,158 218,138 292,110 366,80 440,52 440,175"
        fill="#00e5ff" fillOpacity="0.07"
      />
      {/* Crossover marker */}
      <circle cx="250" cy="128" r="5" fill="#39ff14"/>
      <line x1="250" y1="128" x2="250" y2="175" stroke="#39ff14" strokeWidth="1" strokeDasharray="4 3"/>
      <text x="255" y="120" fill="#39ff14" fontSize="10" fontFamily="monospace">Break-even</text>
      {/* Labels */}
      <text x="448" y="44" fill={accent} fontSize="11" fontFamily="monospace">Petrol</text>
      <text x="448" y="56" fill="#00e5ff" fontSize="11" fontFamily="monospace">EV</text>
      {/* Saving callout */}
      <rect x="290" y="38" width="110" height="36" rx="6" fill="#39ff14" fillOpacity="0.12" stroke="#39ff14" strokeWidth="1" strokeOpacity="0.4"/>
      <text x="345" y="54" textAnchor="middle" fill="#39ff14" fontSize="10" fontFamily="monospace">5-yr saving</text>
      <text x="345" y="67" textAnchor="middle" fill="#39ff14" fontSize="13" fontWeight="bold" fontFamily="monospace">≈ ₹3L+</text>
      {/* Y axis label */}
      <text x="30" y="110" fill="#4a6fa5" fontSize="10" fontFamily="monospace" transform="rotate(-90,30,110)">Total Cost (₹)</text>
    </svg>
  );
}

function CoverSolidState({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="bg4" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.18"/>
          <stop offset="100%" stopColor="#050b14" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="480" height="220" fill="#050b14"/>
      <rect width="480" height="220" fill="url(#bg4)"/>
      {/* Conventional cell — left */}
      <text x="120" y="35" textAnchor="middle" fill="#4a6fa5" fontSize="10" fontFamily="monospace">Li-Ion (today)</text>
      <rect x="60" y="48" width="120" height="130" rx="6" fill="#0d1f3c" stroke="#1a3a5c" strokeWidth="1.5"/>
      <rect x="68" y="56" width="104" height="24" rx="3" fill="#1a3a5c" fillOpacity="0.8"/>
      <text x="120" y="72" textAnchor="middle" fill="#4a6fa5" fontSize="9" fontFamily="monospace">Cathode (NMC)</text>
      <rect x="68" y="84" width="104" height="28" rx="3" fill="#f43f5e" fillOpacity="0.18" stroke="#f43f5e" strokeWidth="1" strokeOpacity="0.4"/>
      <text x="120" y="101" textAnchor="middle" fill="#f43f5e" fontSize="8.5" fontFamily="monospace">Liquid Electrolyte</text>
      <text x="120" y="112" textAnchor="middle" fill="#f43f5e" fontSize="8" fontFamily="monospace">⚠ Flammable</text>
      <rect x="68" y="116" width="104" height="14" rx="2" fill="#1a3a5c" fillOpacity="0.6"/>
      <text x="120" y="127" textAnchor="middle" fill="#4a6fa5" fontSize="8" fontFamily="monospace">Separator</text>
      <rect x="68" y="134" width="104" height="24" rx="3" fill="#1a3a5c" fillOpacity="0.8"/>
      <text x="120" y="149" textAnchor="middle" fill="#4a6fa5" fontSize="9" fontFamily="monospace">Graphite Anode</text>
      <text x="120" y="163" textAnchor="middle" fill="#4a6fa5" fontSize="9" fontFamily="monospace">250–300 Wh/kg</text>
      {/* Arrow */}
      <path d="M200 110 L240 110" stroke={accent} strokeWidth="2" strokeOpacity="0.7" fill="none"/>
      <polygon points="240,106 250,110 240,114" fill={accent} fillOpacity="0.7"/>
      <text x="225" y="105" textAnchor="middle" fill={accent} fontSize="9" fontFamily="monospace">SSB</text>
      {/* Solid-state cell — right */}
      <text x="350" y="35" textAnchor="middle" fill={accent} fontSize="10" fontFamily="monospace">Solid-State (2026+)</text>
      <rect x="280" y="48" width="140" height="130" rx="6" fill="#0d1f3c" stroke={accent} strokeWidth="1.5" strokeOpacity="0.7"/>
      <rect x="288" y="56" width="124" height="24" rx="3" fill={accent} fillOpacity="0.18" stroke={accent} strokeWidth="1" strokeOpacity="0.5"/>
      <text x="350" y="72" textAnchor="middle" fill={accent} fontSize="9" fontFamily="monospace">Cathode (NMC+)</text>
      <rect x="288" y="84" width="124" height="22" rx="3" fill={accent} fillOpacity="0.3" stroke={accent} strokeWidth="1.5"/>
      <text x="350" y="98" textAnchor="middle" fill="#050b14" fontSize="9" fontFamily="monospace" fontWeight="bold">Solid Electrolyte</text>
      <text x="350" y="109" textAnchor="middle" fill="#050b14" fontSize="8" fontFamily="monospace">✓ Non-flammable</text>
      <rect x="288" y="110" width="124" height="30" rx="3" fill={accent} fillOpacity="0.18" stroke={accent} strokeWidth="1" strokeOpacity="0.5"/>
      <text x="350" y="128" textAnchor="middle" fill={accent} fontSize="9" fontFamily="monospace">Li-Metal Anode</text>
      <text x="350" y="155" textAnchor="middle" fill={accent} fontSize="10" fontWeight="bold" fontFamily="monospace">400–500 Wh/kg</text>
      {/* Improvement badges */}
      <rect x="290" y="168" width="55" height="18" rx="4" fill="#39ff14" fillOpacity="0.15" stroke="#39ff14" strokeWidth="1" strokeOpacity="0.5"/>
      <text x="317" y="180" textAnchor="middle" fill="#39ff14" fontSize="9" fontFamily="monospace">2× Range</text>
      <rect x="352" y="168" width="55" height="18" rx="4" fill="#39ff14" fillOpacity="0.15" stroke="#39ff14" strokeWidth="1" strokeOpacity="0.5"/>
      <text x="379" y="180" textAnchor="middle" fill="#39ff14" fontSize="9" fontFamily="monospace">10min ⚡</text>
      {/* Glow effect */}
      <circle cx="350" cy="110" r="70" fill={accent} fillOpacity="0.03"/>
    </svg>
  );
}

function CoverCharging({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="bg5" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.15"/>
          <stop offset="100%" stopColor="#050b14" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="480" height="220" fill="#050b14"/>
      <rect width="480" height="220" fill="url(#bg5)"/>
      {/* Simplified India road map */}
      <path d="M160 30 L200 80 L190 130 L220 175 L240 190" fill="none" stroke="#1a3a5c" strokeWidth="2"/>
      <path d="M160 30 L130 75 L150 120 L160 155 L180 175 L240 190" fill="none" stroke="#1a3a5c" strokeWidth="2"/>
      <path d="M160 30 L200 80 L250 95 L300 110 L350 130 L380 160" fill="none" stroke="#39ff14" strokeWidth="2.5" strokeDasharray="0"/>
      <path d="M240 190 L300 180 L350 165 L380 160" fill="none" stroke="#39ff14" strokeWidth="2.5"/>
      <path d="M160 30 L210 50 L260 60 L310 70 L350 90 L380 110 L400 130" fill="none" stroke="#ffb800" strokeWidth="2" strokeDasharray="8 4"/>
      {/* City dots — green route */}
      {[
        { x: 160, y: 30,  label: "Delhi",     clr: accent },
        { x: 250, y: 95,  label: "Jaipur",    clr: "#39ff14" },
        { x: 350, y: 130, label: "Ahmedabad", clr: "#39ff14" },
        { x: 380, y: 160, label: "Mumbai",    clr: "#39ff14" },
        { x: 240, y: 190, label: "Pune",      clr: accent },
        { x: 310, y: 180, label: "Bengaluru", clr: accent },
      ].map(({ x, y, label, clr }) => (
        <g key={label}>
          <circle cx={x} cy={y} r="7" fill={clr} fillOpacity="0.3" stroke={clr} strokeWidth="1.5"/>
          <circle cx={x} cy={y} r="3" fill={clr}/>
          <text x={x+10} y={y+4} fill={clr} fontSize="10" fontFamily="monospace" fillOpacity="0.9">{label}</text>
        </g>
      ))}
      {/* Charger icons along route */}
      {[{x:205,y:63},{x:300,y:108},{x:365,y:145}].map(({x,y},i)=>(
        <g key={i}>
          <rect x={x-8} y={y-10} width="16" height="20" rx="3" fill={accent} fillOpacity="0.2" stroke={accent} strokeWidth="1"/>
          <path d={`M${x-3} ${y-6} L${x} ${y-2} L${x+3} ${y-6}`} fill="none" stroke={accent} strokeWidth="1.5" strokeLinecap="round"/>
          <line x1={x} y1={y-2} x2={x} y2={y+6} stroke={accent} strokeWidth="1.5" strokeLinecap="round"/>
        </g>
      ))}
      {/* Legend */}
      <line x1="60" y1="190" x2="85" y2="190" stroke="#39ff14" strokeWidth="2.5"/>
      <text x="90" y="194" fill="#39ff14" fontSize="10" fontFamily="monospace">Excellent coverage</text>
      <line x1="60" y1="207" x2="85" y2="207" stroke="#ffb800" strokeWidth="2" strokeDasharray="6 3"/>
      <text x="90" y="211" fill="#ffb800" fontSize="10" fontFamily="monospace">Developing</text>
      {/* Charger count */}
      <text x="430" y="50" textAnchor="middle" fill={accent} fontSize="26" fontWeight="900" fontFamily="monospace" fillOpacity="0.12">25K+</text>
      <text x="430" y="64" textAnchor="middle" fill={accent} fontSize="10" fontFamily="monospace" fillOpacity="0.4">CHARGERS</text>
    </svg>
  );
}

const COVER_MAP: Record<string, (props: { accent: string }) => JSX.Element> = {
  "top-5-electric-scooters-india-2026":   CoverScooters,
  "ev-battery-life-india-weather":         CoverBattery,
  "petrol-vs-electric-5-year-cost-india":  CoverCost,
  "solid-state-batteries-2026":            CoverSolidState,
  "ev-charging-infrastructure-india":      CoverCharging,
};

/* ─────────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────────── */

function CategoryChip({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-3.5 py-1.5 rounded-xl text-xs font-mono tracking-wide border transition-all duration-200"
      style={
        active
          ? { background: "#00e5ff", color: "#050b14", borderColor: "#00e5ff", fontWeight: 700 }
          : { background: "transparent", color: "#4a6fa5", borderColor: "#1a3a5c" }
      }
    >
      {label}
    </button>
  );
}

/** The big hero card for the featured article */
function FeaturedCard({ post }: { post: Post }) {
  const CoverComponent = COVER_MAP[post.slug];
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative bg-ev-card border border-ev-border rounded-3xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 hover:border-ev-cyan/40 hover:shadow-[0_0_40px_rgba(0,229,255,0.1)]"
    >
      {/* Cover — left on desktop, top on mobile */}
      <div className="relative md:w-[55%] shrink-0 h-56 md:h-auto overflow-hidden bg-ev-bg">
        {CoverComponent && <CoverComponent accent={post.accent} />}
        {/* Overlay gradient for text legibility */}
        <div className="absolute inset-0 md:hidden bg-gradient-to-t from-ev-card via-transparent to-transparent" />
        {/* Featured badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-ev-bg/80 backdrop-blur-sm border border-ev-cyan/30">
          <span className="w-1.5 h-1.5 rounded-full bg-ev-green animate-pulse" />
          <span className="text-[10px] font-mono text-ev-cyan tracking-widest uppercase">Featured</span>
        </div>
      </div>

      {/* Text — right on desktop */}
      <div className="flex flex-col justify-between p-7 md:p-8 flex-1">
        <div>
          {/* Category chip */}
          <div
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg mb-5 text-[11px] font-mono tracking-wide"
            style={{ color: post.accent, backgroundColor: `${post.accent}15`, border: `1px solid ${post.accent}30` }}
          >
            <Tag className="w-3 h-3" />
            {post.category}
          </div>

          <h2 className="font-display font-black text-white text-2xl sm:text-3xl leading-tight mb-2 group-hover:text-ev-cyan transition-colors duration-200">
            {post.title}
          </h2>
          <p className="text-sm font-body text-ev-muted mb-4">{post.subtitle}</p>
          <p className="text-ev-text/60 font-body text-sm leading-relaxed mb-6 max-w-lg">
            {post.excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5 text-[11px] font-mono text-ev-muted">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" style={{ color: post.accent }} />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" style={{ color: post.accent }} />
              {post.readTime} read
            </span>
          </div>
          <span
            className="inline-flex items-center gap-1.5 text-sm font-display font-bold tracking-wide transition-transform duration-200 group-hover:translate-x-1"
            style={{ color: post.accent }}
          >
            Read Article <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

/** Standard grid card */
function ArticleCard({ post }: { post: Post }) {
  const CoverComponent = COVER_MAP[post.slug];
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-ev-card border border-ev-border rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:border-ev-cyan/30 hover:shadow-[0_0_30px_rgba(0,229,255,0.08)] hover:-translate-y-1"
    >
      {/* Cover image */}
      <div className="relative h-44 shrink-0 overflow-hidden bg-ev-bg">
        {CoverComponent && <CoverComponent accent={post.accent} />}
        <div className="absolute inset-0 bg-gradient-to-t from-ev-card/60 via-transparent to-transparent" />
        {/* Category badge — overlaid on image */}
        <div
          className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-mono tracking-wide backdrop-blur-sm"
          style={{
            color: post.accent,
            backgroundColor: `${post.accent}20`,
            border: `1px solid ${post.accent}35`,
          }}
        >
          <Tag className="w-2.5 h-2.5" />
          {post.category}
        </div>
      </div>

      {/* Text body */}
      <div className="flex flex-col flex-1 p-5">
        <h2 className="font-display font-bold text-white text-base leading-snug mb-1.5 group-hover:text-ev-cyan transition-colors duration-200 line-clamp-2">
          {post.title}
        </h2>
        <p className="text-xs font-body text-ev-muted mb-3">{post.subtitle}</p>
        <p className="text-ev-text/55 font-body text-xs leading-relaxed mb-4 flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Footer row */}
        <div className="flex items-center justify-between pt-3 border-t border-ev-border/40">
          <div className="flex items-center gap-3 text-[10px] font-mono text-ev-muted">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {post.date}
            </span>
          </div>
          <ChevronRight
            className="w-4 h-4 transition-all duration-200 group-hover:translate-x-0.5"
            style={{ color: post.accent }}
          />
        </div>
      </div>
    </Link>
  );
}

/* ─────────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────────── */

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? POSTS
    : POSTS.filter((p) => p.category === activeCategory);

  const featured = filtered[0];
  const rest     = filtered.slice(1);

  return (
    <div className="space-y-10">

      {/* ── Category filter ── */}
      <div className="flex flex-wrap gap-2">
        {ALL_CATEGORIES.map((cat) => (
          <CategoryChip
            key={cat}
            label={cat}
            active={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
          />
        ))}
      </div>

      {/* ── Top leaderboard ad ── */}
      <AdPlaceholder format="leaderboard" slot="5555555555" />

      {/* ── Featured hero card ── */}
      {featured && (
        <section aria-label="Featured article">
          <FeaturedCard post={featured} />
        </section>
      )}

      {/* ── Article grid ── */}
      {rest.length > 0 && (
        <section aria-label="All articles">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-2">
            {rest.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* ── Mid-content ad ── */}
      <AdPlaceholder format="leaderboard" slot="5555555566" />

      {/* ── Empty state ── */}
      {filtered.length === 0 && (
        <div className="py-20 text-center">
          <p className="font-display text-ev-muted text-lg">No articles in this category yet.</p>
          <button
            onClick={() => setActiveCategory("All")}
            className="mt-4 text-sm font-mono text-ev-cyan hover:underline"
          >
            Show all articles →
          </button>
        </div>
      )}
    </div>
  );
}
