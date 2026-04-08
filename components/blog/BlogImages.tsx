// components/blog/BlogImages.tsx
// Pure SVG illustration components — no "use client" needed

/* ─── Reusable helpers ─────────────────────────── */

function Wheel({ cx, cy, r = 44, accent }: { cx: number; cy: number; r?: number; accent: string }) {
  const inner = r * 0.54;
  const hub   = r * 0.13;
  const spokes = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <g>
      <circle cx={cx} cy={cy} r={r}     fill={accent} fillOpacity="0.07" stroke={accent} strokeWidth="2.5" />
      <circle cx={cx} cy={cy} r={inner} fill="none"   stroke={accent} strokeWidth="1"   strokeOpacity="0.4" />
      {spokes.map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <line key={deg}
            x1={cx + Math.cos(rad) * hub}    y1={cy + Math.sin(rad) * hub}
            x2={cx + Math.cos(rad) * inner}  y2={cy + Math.sin(rad) * inner}
            stroke={accent} strokeWidth="1.2" strokeOpacity="0.45"
          />
        );
      })}
      <circle cx={cx} cy={cy} r={hub} fill={accent} fillOpacity="0.8" />
    </g>
  );
}

function GridBg({ w = 960, h = 400, color = "#00e5ff", spacing = 40 }: { w?: number; h?: number; color?: string; spacing?: number }) {
  const cols = Math.ceil(w / spacing);
  const rows = Math.ceil(h / spacing);
  return (
    <g opacity="0.06">
      {Array.from({ length: cols + 1 }, (_, i) => (
        <line key={`v${i}`} x1={i * spacing} y1="0" x2={i * spacing} y2={h} stroke={color} strokeWidth="0.8" />
      ))}
      {Array.from({ length: rows + 1 }, (_, i) => (
        <line key={`h${i}`} x1="0" y1={i * spacing} x2={w} y2={i * spacing} stroke={color} strokeWidth="0.8" />
      ))}
    </g>
  );
}

function Bolt({ x, y, size = 20, color = "#00e5ff" }: { x: number; y: number; size?: number; color?: string }) {
  const s = size;
  return (
    <path
      d={`M${x} ${y} L${x - s * 0.35} ${y + s * 0.55} L${x + s * 0.05} ${y + s * 0.55} L${x} ${y + s}`}
      stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none"
    />
  );
}

/* ═══════════════════════════════════════════════════
   ARTICLE 1 — TOP 5 ELECTRIC SCOOTERS
═══════════════════════════════════════════════════ */

function ScooterSilhouette({ x = 0, y = 0, accent = "#00e5ff", scale = 1 }: { x?: number; y?: number; accent?: string; scale?: number }) {
  const s = scale;
  const fw = { cx: x + 78 * s, cy: y + 175 * s };
  const rw = { cx: x + 292 * s, cy: y + 175 * s };
  const wr = 42 * s;
  return (
    <g>
      {/* Rear fender */}
      <path d={`M${x+268*s} ${y+133*s} C${x+282*s} ${y+140*s},${x+288*s} ${y+155*s},${x+286*s} ${y+175*s}`}
        fill="none" stroke={accent} strokeWidth={2*s} strokeLinecap="round" />
      {/* Main body / frame */}
      <path d={`M${x+112*s} ${y+175*s} L${x+112*s} ${y+148*s} C${x+112*s} ${y+118*s},${x+128*s} ${y+100*s},${x+148*s} ${y+95*s}
               L${x+230*s} ${y+91*s} C${x+250*s} ${y+91*s},${x+265*s} ${y+102*s},${x+268*s} ${y+118*s}
               L${x+268*s} ${y+148*s} L${x+268*s} ${y+175*s} Z`}
        fill={accent} fillOpacity="0.13" stroke={accent} strokeWidth={2*s} strokeLinejoin="round" />
      {/* Seat */}
      <path d={`M${x+150*s} ${y+91*s} L${x+234*s} ${y+91*s} L${x+230*s} ${y+77*s} L${x+154*s} ${y+77*s} Z`}
        fill={accent} fillOpacity="0.35" stroke={accent} strokeWidth={1.5*s} strokeLinejoin="round" />
      {/* Footboard */}
      <rect x={x+120*s} y={y+166*s} width={148*s} height={9*s} rx={4*s}
        fill={accent} fillOpacity="0.22" stroke={accent} strokeWidth={s} />
      {/* Headlight pod */}
      <path d={`M${x+112*s} ${y+148*s} L${x+100*s} ${y+155*s} L${x+92*s} ${y+145*s} L${x+96*s} ${y+128*s} L${x+110*s} ${y+120*s} L${x+118*s} ${y+130*s} L${x+112*s} ${y+148*s}`}
        fill={accent} fillOpacity="0.18" stroke={accent} strokeWidth={1.5*s} strokeLinejoin="round" />
      {/* Headlight lens */}
      <ellipse cx={x+90*s} cy={y+136*s} rx={11*s} ry={10*s}
        fill={accent} fillOpacity="0.22" stroke={accent} strokeWidth={1.5*s} />
      <ellipse cx={x+90*s} cy={y+136*s} rx={5*s} ry={4.5*s}
        fill={accent} fillOpacity="0.6" />
      {/* Handlebar stem */}
      <line x1={x+118*s} y1={y+120*s} x2={x+114*s} y2={y+84*s}
        stroke={accent} strokeWidth={3*s} strokeLinecap="round" />
      {/* Handlebars */}
      <line x1={x+100*s} y1={y+84*s} x2={x+128*s} y2={y+84*s}
        stroke={accent} strokeWidth={3*s} strokeLinecap="round" />
      <circle cx={x+100*s} cy={y+84*s} r={4*s} fill={accent} fillOpacity="0.7" />
      <circle cx={x+128*s} cy={y+84*s} r={4*s} fill={accent} fillOpacity="0.7" />
      {/* Dashboard screen */}
      <rect x={x+116*s} y={y+97*s} width={26*s} height={20*s} rx={3*s}
        fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth={s} />
      <rect x={x+118*s} y={y+99*s} width={22*s} height={16*s} rx={2*s}
        fill={accent} fillOpacity="0.28" />
      {/* Front fork */}
      <line x1={x+112*s} y1={y+148*s} x2={x+88*s} y2={y+166*s}
        stroke={accent} strokeWidth={2.5*s} strokeLinecap="round" />
      <line x1={x+108*s} y1={y+148*s} x2={x+84*s} y2={y+166*s}
        stroke={accent} strokeWidth={1.5*s} strokeLinecap="round" strokeOpacity="0.5" />
      {/* Wheels */}
      <Wheel cx={rw.cx} cy={rw.cy} r={wr} accent={accent} />
      <Wheel cx={fw.cx} cy={fw.cy} r={wr} accent={accent} />
    </g>
  );
}

function ScooterCard({
  rank, name, brand, price, range, speed, battery, accent, badge,
}: {
  rank: number; name: string; brand: string; price: string;
  range: string; speed: string; battery: string; accent: string; badge: string;
}) {
  return (
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id={`cg${rank}`} cx="50%" cy="70%" r="65%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.14" />
          <stop offset="100%" stopColor="#050b14" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="260" fill="#050b14" />
      <rect width="400" height="260" fill={`url(#cg${rank})`} />
      <GridBg w={400} h={260} color={accent} spacing={36} />
      {/* Top accent bar */}
      <rect width="400" height="3" fill={accent} opacity="0.8" />
      {/* Rank badge */}
      <circle cx="36" cy="36" r="22" fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="1.5" />
      <text x="36" y="43" textAnchor="middle" fill={accent} fontSize="17" fontWeight="900" fontFamily="monospace">#{rank}</text>
      {/* Badge pill */}
      <rect x="68" y="18" width={badge.length * 7.2 + 14} height="20" rx="5"
        fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="1" strokeOpacity="0.5" />
      <text x={68 + (badge.length * 7.2 + 14) / 2} y="32" textAnchor="middle"
        fill={accent} fontSize="9" fontFamily="monospace" fontWeight="600">{badge}</text>
      {/* Brand */}
      <text x="200" y="22" textAnchor="middle" fill={accent} fontSize="9" fontFamily="monospace" opacity="0.7"
        letterSpacing="2">{brand.toUpperCase()}</text>
      {/* Model name */}
      <text x="200" y="44" textAnchor="middle" fill="white" fontSize="15" fontWeight="700" fontFamily="monospace">{name}</text>
      {/* Scooter illustration */}
      <ScooterSilhouette x={20} y={30} accent={accent} scale={0.82} />
      {/* Specs row */}
      <rect x="12" y="218" width="376" height="34" rx="8" fill={accent} fillOpacity="0.07" stroke={accent} strokeWidth="0.8" strokeOpacity="0.3" />
      {[
        { label: "Range", value: range, x: 60 },
        { label: "Speed", value: speed, x: 162 },
        { label: "Battery", value: battery, x: 258 },
        { label: "Price", value: price, x: 344 },
      ].map(({ label, value, x }) => (
        <g key={label}>
          <text x={x} y="231" textAnchor="middle" fill={accent} fontSize="8" fontFamily="monospace" opacity="0.6">{label}</text>
          <text x={x} y="245" textAnchor="middle" fill="white" fontSize="10" fontWeight="600" fontFamily="monospace">{value}</text>
        </g>
      ))}
      {/* Glow orb behind scooter */}
      <circle cx="185" cy="150" r="80" fill={accent} fillOpacity="0.04" />
    </svg>
  );
}

export function AtherRiztaCard() {
  return <ScooterCard rank={1} name="Rizta Z" brand="Ather Energy" price="₹1.49L"
    range="160 km" speed="100 km/h" battery="3.7 kWh" accent="#00e5ff" badge="Editor's Pick" />;
}
export function TVSiQubeCard() {
  return <ScooterCard rank={2} name="iQube S" brand="TVS Motor" price="₹1.41L"
    range="145 km" speed="95 km/h" battery="3.4 kWh" accent="#39ff14" badge="Best Service Network" />;
}
export function OlaS1ProCard() {
  return <ScooterCard rank={3} name="S1 Pro Gen 3" brand="Ola Electric" price="₹1.29L"
    range="195 km" speed="125 km/h" battery="4.0 kWh" accent="#ffb800" badge="Best Range" />;
}
export function BajajChetakCard() {
  return <ScooterCard rank={4} name="Chetak Premium" brand="Bajaj Auto" price="₹1.58L"
    range="126 km" speed="73 km/h" battery="3.2 kWh" accent="#a78bfa" badge="Premium Lifestyle" />;
}
export function HeroVidaCard() {
  return <ScooterCard rank={5} name="Vida V2 Pro" brand="Hero MotoCorp" price="₹1.11L"
    range="165 km" speed="90 km/h" battery="3.94 kWh" accent="#f43f5e" badge="Best Value" />;
}

export function ScooterHeroBanner() {
  const scooters = [
    { accent: "#00e5ff", x: 30,  rank: 1, name: "Ather Rizta Z",     price: "₹1.49L", range: "160km" },
    { accent: "#39ff14", x: 210, rank: 2, name: "TVS iQube S",       price: "₹1.41L", range: "145km" },
    { accent: "#ffb800", x: 390, rank: 3, name: "Ola S1 Pro",        price: "₹1.29L", range: "195km" },
    { accent: "#a78bfa", x: 570, rank: 4, name: "Bajaj Chetak",      price: "₹1.58L", range: "126km" },
    { accent: "#f43f5e", x: 750, rank: 5, name: "Hero Vida V2",      price: "₹1.11L", range: "165km" },
  ];
  return (
    <svg viewBox="0 0 960 380" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="sheroBg" cx="50%" cy="0%" r="70%">
          <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#050b14" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sheroFade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="60%" stopColor="#050b14" stopOpacity="0" />
          <stop offset="100%" stopColor="#050b14" stopOpacity="1" />
        </linearGradient>
      </defs>
      <rect width="960" height="380" fill="#050b14" />
      <rect width="960" height="380" fill="url(#sheroBg)" />
      <GridBg w={960} h={380} color="#00e5ff" spacing={48} />
      {/* Ground line */}
      <line x1="20" y1="295" x2="940" y2="295" stroke="#00e5ff" strokeWidth="0.8" strokeOpacity="0.2" strokeDasharray="8 4" />
      {/* Scooters */}
      {scooters.map(({ accent, x, rank, name, price, range }) => (
        <g key={rank}>
          <ScooterSilhouette x={x} y={112} accent={accent} scale={0.82} />
          {/* Rank badge */}
          <circle cx={x + 30} cy={128} r={16} fill={accent} fillOpacity="0.2" stroke={accent} strokeWidth="1.5" />
          <text x={x + 30} y={134} textAnchor="middle" fill={accent} fontSize="13" fontWeight="900" fontFamily="monospace">#{rank}</text>
          {/* Model name below */}
          <text x={x + 95} y={318} textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="monospace">{name}</text>
          <text x={x + 95} y={330} textAnchor="middle" fill={accent} fontSize="9" fontFamily="monospace">{range} · {price}</text>
          {/* Glow */}
          <ellipse cx={x + 95} cy={294} rx={55} ry={6} fill={accent} fillOpacity="0.12" />
        </g>
      ))}
      {/* Title */}
      <text x="480" y="52" textAnchor="middle" fill="white" fontSize="28" fontWeight="900" fontFamily="monospace">TOP 5 ELECTRIC SCOOTERS IN INDIA</text>
      <text x="480" y="76" textAnchor="middle" fill="#00e5ff" fontSize="13" fontFamily="monospace" opacity="0.7">2026 Edition — Range · Price · Real-World Performance</text>
      {/* Bottom fade */}
      <rect width="960" height="380" fill="url(#sheroFade)" />
    </svg>
  );
}

export function ScooterRangeChart() {
  const data = [
    { name: "Ola S1 Pro Gen 3",    arai: 195, real: 148, accent: "#ffb800" },
    { name: "Ather Rizta Z",       arai: 160, real: 124, accent: "#00e5ff" },
    { name: "Hero Vida V2 Pro",    arai: 165, real: 128, accent: "#f43f5e" },
    { name: "TVS iQube S",         arai: 145, real: 112, accent: "#39ff14" },
    { name: "Bajaj Chetak Premium",arai: 126, real:  98, accent: "#a78bfa" },
  ];
  const max = 220;
  const barH = 28;
  const gap = 48;
  const labelW = 170;
  const chartW = 580;
  return (
    <svg viewBox="0 0 820 340" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="820" height="340" fill="#050b14" rx="16" />
      <GridBg w={820} h={340} color="#00e5ff" spacing={40} />
      <text x="24" y="32" fill="white" fontSize="13" fontWeight="700" fontFamily="monospace">ARAI vs Real-World Range Comparison</text>
      <text x="24" y="48" fill="#4a6fa5" fontSize="9" fontFamily="monospace">km — all models 2026</text>
      {/* Legend */}
      <rect x="580" y="20" width="12" height="12" rx="2" fill="#00e5ff" fillOpacity="0.8" />
      <text x="596" y="31" fill="#c8dff5" fontSize="9" fontFamily="monospace">ARAI Certified</text>
      <rect x="580" y="38" width="12" height="12" rx="2" fill="#00e5ff" fillOpacity="0.3" />
      <text x="596" y="49" fill="#c8dff5" fontSize="9" fontFamily="monospace">Real-World (~78%)</text>
      {/* Axis */}
      <line x1={labelW} y1="64" x2={labelW} y2="305" stroke="#1a3a5c" strokeWidth="1" />
      <line x1={labelW} y1="305" x2="796" y2="305" stroke="#1a3a5c" strokeWidth="1" />
      {/* X grid */}
      {[0, 50, 100, 150, 200].map((v) => {
        const bx = labelW + (v / max) * chartW;
        return (
          <g key={v}>
            <line x1={bx} y1="64" x2={bx} y2="305" stroke="#1a3a5c" strokeWidth="0.8" strokeDasharray="4 4" />
            <text x={bx} y="320" textAnchor="middle" fill="#4a6fa5" fontSize="9" fontFamily="monospace">{v}km</text>
          </g>
        );
      })}
      {/* Bars */}
      {data.map(({ name, arai, real, accent }, i) => {
        const y = 72 + i * gap;
        const araiW = (arai / max) * chartW;
        const realW = (real / max) * chartW;
        return (
          <g key={name}>
            <text x={labelW - 8} y={y + barH * 0.65} textAnchor="end" fill="#c8dff5" fontSize="9" fontFamily="monospace">{name.split(" ").slice(-2).join(" ")}</text>
            {/* ARAI bar */}
            <rect x={labelW} y={y} width={araiW} height={barH * 0.52} rx="3" fill={accent} fillOpacity="0.75" />
            <text x={labelW + araiW + 5} y={y + barH * 0.35} fill={accent} fontSize="9" fontFamily="monospace">{arai}km</text>
            {/* Real bar */}
            <rect x={labelW} y={y + barH * 0.52 + 2} width={realW} height={barH * 0.42} rx="3" fill={accent} fillOpacity="0.3" />
            <text x={labelW + realW + 5} y={y + barH} fill={accent} fontSize="9" fontFamily="monospace" opacity="0.7">{real}km</text>
          </g>
        );
      })}
    </svg>
  );
}

/* ═══════════════════════════════════════════════════
   ARTICLE 2 — EV BATTERY LIFE
═══════════════════════════════════════════════════ */

export function BatteryLifeHero() {
  return (
    <svg viewBox="0 0 960 380" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="bhBg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#39ff14" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#050b14" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="battFill" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"  stopColor="#39ff14" stopOpacity="0.9" />
          <stop offset="78%" stopColor="#39ff14" stopOpacity="0.9" />
          <stop offset="78%" stopColor="#1a3a5c" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#1a3a5c" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="bhFade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="60%" stopColor="#050b14" stopOpacity="0" />
          <stop offset="100%" stopColor="#050b14" stopOpacity="1" />
        </linearGradient>
      </defs>
      <rect width="960" height="380" fill="#050b14" />
      <rect width="960" height="380" fill="url(#bhBg)" />
      <GridBg w={960} h={380} color="#39ff14" spacing={48} />

      {/* Main battery illustration — centered */}
      {/* Battery outer body */}
      <rect x="230" y="100" width="400" height="170" rx="18" fill="#0d1f3c" stroke="#39ff14" strokeWidth="2.5" />
      {/* Terminal */}
      <rect x="630" y="148" width="35" height="74" rx="8" fill="#0d1f3c" stroke="#39ff14" strokeWidth="2" />
      {/* Fill bar */}
      <rect x="244" y="116" width="372" height="138" rx="10" fill="url(#battFill)" />
      {/* Cell dividers */}
      {[338, 432, 526].map((x) => (
        <line key={x} x1={x} y1="116" x2={x} y2="254" stroke="#050b14" strokeWidth="2.5" />
      ))}
      {/* Percentage */}
      <text x="420" y="198" textAnchor="middle" fill="#050b14" fontSize="52" fontWeight="900" fontFamily="monospace">80%</text>
      <text x="420" y="226" textAnchor="middle" fill="#050b14" fontSize="14" fontFamily="monospace">DAILY LIMIT</text>

      {/* Heat indicator — top right */}
      <g>
        <circle cx="760" cy="155" r="45" fill="none" stroke="#1a3a5c" strokeWidth="8" strokeDasharray="141.4" strokeDashoffset="0" />
        <circle cx="760" cy="155" r="45" fill="none" stroke="#f43f5e" strokeWidth="8"
          strokeDasharray="141.4" strokeDashoffset="70" strokeLinecap="round" transform="rotate(-90 760 155)" />
        <text x="760" y="148" textAnchor="middle" fill="#f43f5e" fontSize="18" fontWeight="700" fontFamily="monospace">45°C</text>
        <text x="760" y="166" textAnchor="middle" fill="#f43f5e" fontSize="10" fontFamily="monospace">DANGER</text>
        <text x="760" y="215" textAnchor="middle" fill="#4a6fa5" fontSize="10" fontFamily="monospace">Indian summer</text>
      </g>

      {/* Monsoon drops — top left */}
      {[[150, 120], [135, 148], [160, 162], [175, 130]].map(([dx, dy], i) => (
        <path key={i} d={`M${dx} ${dy} Q${dx - 5} ${dy + 10},${dx} ${dy + 20} Q${dx + 5} ${dy + 10},${dx} ${dy}`}
          fill="#00e5ff" fillOpacity="0.5" />
      ))}
      <text x="155" y="200" textAnchor="middle" fill="#00e5ff" fontSize="10" fontFamily="monospace" opacity="0.7">Monsoon</text>

      {/* LFP / NMC labels */}
      <rect x="244" y="268" width="80" height="22" rx="6" fill="#39ff14" fillOpacity="0.15" stroke="#39ff14" strokeWidth="1" />
      <text x="284" y="283" textAnchor="middle" fill="#39ff14" fontSize="10" fontFamily="monospace">LFP SAFE</text>
      <rect x="335" y="268" width="100" height="22" rx="6" fill="#ffb800" fillOpacity="0.15" stroke="#ffb800" strokeWidth="1" />
      <text x="385" y="283" textAnchor="middle" fill="#ffb800" fontSize="10" fontFamily="monospace">NMC CAUTION</text>
      <rect x="446" y="268" width="90" height="22" rx="6" fill="#00e5ff" fillOpacity="0.15" stroke="#00e5ff" strokeWidth="1" />
      <text x="491" y="283" textAnchor="middle" fill="#00e5ff" fontSize="10" fontFamily="monospace">CHARGE ≤80%</text>

      {/* Title */}
      <text x="480" y="50" textAnchor="middle" fill="white" fontSize="26" fontWeight="900" fontFamily="monospace">EV BATTERY LIFE IN INDIAN WEATHER</text>
      <text x="480" y="72" textAnchor="middle" fill="#39ff14" fontSize="13" fontFamily="monospace" opacity="0.7">How to make your battery last 10+ years</text>
      <rect width="960" height="380" fill="url(#bhFade)" />
    </svg>
  );
}

export function CapacityRetentionChart() {
  const pts = (values: number[][], xMax = 600, yMax = 220) =>
    values.map(([km, cap]) => `${80 + (km / 120000) * xMax},${yMax - ((cap - 60) / 40) * yMax}`).join(" ");

  const lfp = [[0,100],[15000,98],[30000,96],[50000,93],[80000,90],[100000,88],[120000,86]];
  const nmc = [[0,100],[15000,96],[30000,91],[50000,85],[80000,79],[100000,74],[120000,70]];

  return (
    <svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="760" height="320" fill="#050b14" rx="16" />
      <GridBg w={760} h={320} color="#39ff14" spacing={40} />
      <text x="24" y="30" fill="white" fontSize="13" fontWeight="700" fontFamily="monospace">Battery Capacity Retention — LFP vs NMC</text>
      <text x="24" y="46" fill="#4a6fa5" fontSize="9" fontFamily="monospace">Indian driving conditions · avg 32°C ambient</text>

      {/* Axes */}
      <line x1="80" y1="60" x2="80" y2="280" stroke="#1a3a5c" strokeWidth="1.5" />
      <line x1="80" y1="280" x2="700" y2="280" stroke="#1a3a5c" strokeWidth="1.5" />

      {/* Y gridlines + labels */}
      {[60, 70, 80, 90, 100].map((cap) => {
        const y = 280 - ((cap - 60) / 40) * 220;
        return (
          <g key={cap}>
            <line x1="80" y1={y} x2="700" y2={y} stroke="#1a3a5c" strokeWidth="0.8" strokeDasharray="4 4" />
            <text x="70" y={y + 4} textAnchor="end" fill="#4a6fa5" fontSize="9" fontFamily="monospace">{cap}%</text>
          </g>
        );
      })}
      {/* X labels */}
      {[0, 30000, 60000, 90000, 120000].map((km) => {
        const x = 80 + (km / 120000) * 620;
        return (
          <text key={km} x={x} y="296" textAnchor="middle" fill="#4a6fa5" fontSize="9" fontFamily="monospace">
            {km === 0 ? "0" : `${km / 1000}k km`}
          </text>
        );
      })}

      {/* 80% warranty line */}
      <line x1="80" y1={280 - ((80 - 60) / 40) * 220} x2="700" y2={280 - ((80 - 60) / 40) * 220}
        stroke="#ffb800" strokeWidth="1.5" strokeDasharray="8 4" />
      <text x="702" y={280 - ((80 - 60) / 40) * 220 + 4} fill="#ffb800" fontSize="8" fontFamily="monospace">80% warranty</text>

      {/* Area fills */}
      <polygon points={`80,280 ${pts(lfp)} 700,280`} fill="#39ff14" fillOpacity="0.07" />
      <polygon points={`80,280 ${pts(nmc)} 700,280`} fill="#00e5ff" fillOpacity="0.07" />

      {/* Lines */}
      <polyline points={pts(lfp)} fill="none" stroke="#39ff14" strokeWidth="2.5" strokeLinejoin="round" />
      <polyline points={pts(nmc)} fill="none" stroke="#00e5ff" strokeWidth="2.5" strokeLinejoin="round" strokeDasharray="8 3" />

      {/* Dots at key points */}
      {lfp.map(([km, cap], i) => (
        <circle key={i} cx={80 + (km / 120000) * 620} cy={280 - ((cap - 60) / 40) * 220} r="3.5" fill="#39ff14" />
      ))}

      {/* Legend */}
      <line x1="520" y1="22" x2="545" y2="22" stroke="#39ff14" strokeWidth="2.5" />
      <text x="550" y="26" fill="#39ff14" fontSize="9" fontFamily="monospace">LFP (Tata, BYD)</text>
      <line x1="520" y1="38" x2="545" y2="38" stroke="#00e5ff" strokeWidth="2.5" strokeDasharray="6 3" />
      <text x="550" y="42" fill="#00e5ff" fontSize="9" fontFamily="monospace">NMC (MG, Hyundai)</text>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════
   ARTICLE 3 — PETROL vs ELECTRIC
═══════════════════════════════════════════════════ */

function CarSilhouette({ x = 0, y = 0, accent = "#00e5ff", isEV = true }: { x?: number; y?: number; accent?: string; isEV?: boolean }) {
  return (
    <g>
      {/* Main body */}
      <path d={`M${x+50} ${y+130} L${x+60} ${y+80} C${x+70} ${y+55},${x+110} ${y+42},${x+175} ${y+40}
               C${x+240} ${y+38},${x+285} ${y+50},${x+310} ${y+78} L${x+330} ${y+110} L${x+340} ${y+130} Z`}
        fill={accent} fillOpacity="0.14" stroke={accent} strokeWidth="2" strokeLinejoin="round" />
      {/* Roof */}
      <path d={`M${x+100} ${y+80} C${x+115} ${y+52},${x+145} ${y+44},${x+195} ${y+42}
               C${x+245} ${y+40},${x+270} ${y+50},${x+290} ${y+80}`}
        fill={accent} fillOpacity="0.08" stroke={accent} strokeWidth="1.5" />
      {/* Windows */}
      <path d={`M${x+105} ${y+80} L${x+115} ${y+58} L${x+185} ${y+55} L${x+185} ${y+80} Z`}
        fill={accent} fillOpacity="0.2" stroke={accent} strokeWidth="1" />
      <path d={`M${x+192} ${y+80} L${x+192} ${y+55} L${x+272} ${y+57} L${x+285} ${y+80} Z`}
        fill={accent} fillOpacity="0.2" stroke={accent} strokeWidth="1" />
      {/* Door */}
      <line x1={x + 188} y1={y + 45} x2={x + 188} y2={y + 130} stroke={accent} strokeWidth="1.5" strokeOpacity="0.4" />
      {/* Headlight */}
      <path d={`M${x+52} ${y+95} L${x+64} ${y+88} L${x+72} ${y+100} L${x+60} ${y+108} Z`}
        fill={accent} fillOpacity="0.5" stroke={accent} strokeWidth="1" />
      {/* Tail light */}
      <rect x={x + 328} y={y + 95} width="10" height="20" rx="3" fill={isEV ? "#39ff14" : "#f43f5e"} fillOpacity="0.5" stroke={isEV ? "#39ff14" : "#f43f5e"} strokeWidth="1" />
      {/* Grille / front */}
      <path d={`M${x+52} ${y+110} L${x+75} ${y+125} L${x+75} ${y+115} L${x+52} ${y+100}`}
        fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="1" />
      {/* EV badge or petrol cap */}
      {isEV
        ? <><rect x={x+295} y={y+95} width="28" height="18" rx="4" fill="#39ff14" fillOpacity="0.25" stroke="#39ff14" strokeWidth="1" />
            <text x={x+309} y={y+108} textAnchor="middle" fill="#39ff14" fontSize="8" fontWeight="700" fontFamily="monospace">EV</text></>
        : <><circle cx={x+305} cy={y+104} r="9" fill="#ffb800" fillOpacity="0.25" stroke="#ffb800" strokeWidth="1" />
            <text x={x+305} y={y+108} textAnchor="middle" fill="#ffb800" fontSize="7" fontFamily="monospace">⛽</text></>
      }
      {/* Wheels */}
      <Wheel cx={x + 102} cy={y + 155} r={40} accent={accent} />
      <Wheel cx={x + 280} cy={y + 155} r={40} accent={accent} />
      {/* Ground shadow */}
      <ellipse cx={x + 192} cy={y + 198} rx={130} ry={8} fill={accent} fillOpacity="0.08" />
    </g>
  );
}

export function NexonEVCard() {
  return (
    <svg viewBox="0 0 440 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="nevGrad" cx="50%" cy="80%" r="60%">
          <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#050b14" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="440" height="260" fill="#050b14" />
      <rect width="440" height="260" fill="url(#nevGrad)" />
      <GridBg w={440} h={260} color="#00e5ff" spacing={38} />
      <rect width="440" height="3" fill="#00e5ff" opacity="0.8" />
      <text x="220" y="26" textAnchor="middle" fill="#00e5ff" fontSize="9" fontFamily="monospace" opacity="0.7" letterSpacing="2">TATA MOTORS</text>
      <text x="220" y="44" textAnchor="middle" fill="white" fontSize="15" fontWeight="700" fontFamily="monospace">Nexon EV Max</text>
      <CarSilhouette x={48} y={40} accent="#00e5ff" isEV={true} />
      <rect x="12" y="218" width="416" height="34" rx="8" fill="#00e5ff" fillOpacity="0.07" stroke="#00e5ff" strokeWidth="0.8" strokeOpacity="0.3" />
      {[
        { label: "Range", value: "465km", x: 70 },
        { label: "Motor", value: "143bhp", x: 178 },
        { label: "Battery", value: "40.5kWh", x: 286 },
        { label: "Price", value: "₹19.99L", x: 380 },
      ].map(({ label, value, x }) => (
        <g key={label}>
          <text x={x} y="231" textAnchor="middle" fill="#00e5ff" fontSize="8" fontFamily="monospace" opacity="0.6">{label}</text>
          <text x={x} y="245" textAnchor="middle" fill="white" fontSize="10" fontWeight="600" fontFamily="monospace">{value}</text>
        </g>
      ))}
    </svg>
  );
}

export function CretaPetrolCard() {
  return (
    <svg viewBox="0 0 440 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="cretaGrad" cx="50%" cy="80%" r="60%">
          <stop offset="0%" stopColor="#ffb800" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#050b14" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="440" height="260" fill="#050b14" />
      <rect width="440" height="260" fill="url(#cretaGrad)" />
      <GridBg w={440} h={260} color="#ffb800" spacing={38} />
      <rect width="440" height="3" fill="#ffb800" opacity="0.8" />
      <text x="220" y="26" textAnchor="middle" fill="#ffb800" fontSize="9" fontFamily="monospace" opacity="0.7" letterSpacing="2">HYUNDAI INDIA</text>
      <text x="220" y="44" textAnchor="middle" fill="white" fontSize="15" fontWeight="700" fontFamily="monospace">Creta 1.5 Petrol MT</text>
      <CarSilhouette x={48} y={40} accent="#ffb800" isEV={false} />
      <rect x="12" y="218" width="416" height="34" rx="8" fill="#ffb800" fillOpacity="0.07" stroke="#ffb800" strokeWidth="0.8" strokeOpacity="0.3" />
      {[
        { label: "Mileage", value: "14km/L", x: 70 },
        { label: "Engine", value: "115bhp", x: 178 },
        { label: "Fuel", value: "Petrol", x: 286 },
        { label: "Price", value: "₹16.99L", x: 380 },
      ].map(({ label, value, x }) => (
        <g key={label}>
          <text x={x} y="231" textAnchor="middle" fill="#ffb800" fontSize="8" fontFamily="monospace" opacity="0.6">{label}</text>
          <text x={x} y="245" textAnchor="middle" fill="white" fontSize="10" fontWeight="600" fontFamily="monospace">{value}</text>
        </g>
      ))}
    </svg>
  );
}

export function CostComparisonHero() {
  return (
    <svg viewBox="0 0 960 380" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="costSplit" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#ffb800" stopOpacity="0.1" />
          <stop offset="50%"  stopColor="#050b14" stopOpacity="0" />
          <stop offset="100%" stopColor="#39ff14" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="costFade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="60%" stopColor="#050b14" stopOpacity="0" />
          <stop offset="100%" stopColor="#050b14" stopOpacity="1" />
        </linearGradient>
      </defs>
      <rect width="960" height="380" fill="#050b14" />
      <rect width="960" height="380" fill="url(#costSplit)" />
      <GridBg w={960} h={380} color="#4a6fa5" spacing={48} />

      {/* Divider line */}
      <line x1="480" y1="40" x2="480" y2="320" stroke="#1a3a5c" strokeWidth="1.5" strokeDasharray="8 5" />
      <text x="480" y="200" textAnchor="middle" fill="white" fontSize="28" fontWeight="900" fontFamily="monospace">VS</text>

      {/* Left — Petrol */}
      <CarSilhouette x={50} y={80} accent="#ffb800" isEV={false} />
      <text x="220" y="46" textAnchor="middle" fill="#ffb800" fontSize="22" fontWeight="900" fontFamily="monospace">PETROL</text>
      <text x="220" y="64" textAnchor="middle" fill="#ffb800" fontSize="12" fontFamily="monospace" opacity="0.7">Hyundai Creta 1.5</text>
      {/* Petrol cost callouts */}
      <rect x="60" y="270" width="120" height="30" rx="6" fill="#ffb800" fillOpacity="0.12" stroke="#ffb800" strokeWidth="1" />
      <text x="120" y="283" textAnchor="middle" fill="#ffb800" fontSize="9" fontFamily="monospace">5-yr Fuel Cost</text>
      <text x="120" y="296" textAnchor="middle" fill="#ffb800" fontSize="12" fontWeight="700" fontFamily="monospace">₹4,46,400</text>
      <rect x="200" y="270" width="120" height="30" rx="6" fill="#ffb800" fillOpacity="0.12" stroke="#ffb800" strokeWidth="1" />
      <text x="260" y="283" textAnchor="middle" fill="#ffb800" fontSize="9" fontFamily="monospace">5-yr Maintenance</text>
      <text x="260" y="296" textAnchor="middle" fill="#ffb800" fontSize="12" fontWeight="700" fontFamily="monospace">₹81,100</text>

      {/* Right — EV */}
      <CarSilhouette x={530} y={80} accent="#00e5ff" isEV={true} />
      <text x="720" y="46" textAnchor="middle" fill="#00e5ff" fontSize="22" fontWeight="900" fontFamily="monospace">ELECTRIC</text>
      <text x="720" y="64" textAnchor="middle" fill="#00e5ff" fontSize="12" fontFamily="monospace" opacity="0.7">Tata Nexon EV Max</text>
      {/* EV cost callouts */}
      <rect x="555" y="270" width="120" height="30" rx="6" fill="#39ff14" fillOpacity="0.12" stroke="#39ff14" strokeWidth="1" />
      <text x="615" y="283" textAnchor="middle" fill="#39ff14" fontSize="9" fontFamily="monospace">5-yr Electricity</text>
      <text x="615" y="296" textAnchor="middle" fill="#39ff14" fontSize="12" fontWeight="700" fontFamily="monospace">₹81,600</text>
      <rect x="695" y="270" width="120" height="30" rx="6" fill="#39ff14" fillOpacity="0.12" stroke="#39ff14" strokeWidth="1" />
      <text x="755" y="283" textAnchor="middle" fill="#39ff14" fontSize="9" fontFamily="monospace">5-yr Maintenance</text>
      <text x="755" y="296" textAnchor="middle" fill="#39ff14" fontSize="12" fontWeight="700" fontFamily="monospace">₹34,000</text>

      {/* Saving banner */}
      <rect x="345" y="316" width="270" height="40" rx="10" fill="#39ff14" fillOpacity="0.15" stroke="#39ff14" strokeWidth="1.5" />
      <text x="480" y="331" textAnchor="middle" fill="#39ff14" fontSize="10" fontFamily="monospace">EV saves approximately</text>
      <text x="480" y="348" textAnchor="middle" fill="#39ff14" fontSize="16" fontWeight="900" fontFamily="monospace">₹3,00,000 over 5 years</text>

      <rect width="960" height="380" fill="url(#costFade)" />
    </svg>
  );
}

export function BreakevenLineChart() {
  const ev     = [[0,22],[1,23.3],[2,24.5],[3,25.6],[4,26.5],[5,27.4]];
  const petrol = [[0,20.2],[1,22],[2,23.7],[3,25.3],[4,26.9],[5,28.3]];
  const maxY = 30; const minY = 19; const range = maxY - minY;
  const toX = (yr: number) => 100 + (yr / 5) * 580;
  const toY = (v: number)  => 280 - ((v - minY) / range) * 220;

  return (
    <svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="760" height="320" fill="#050b14" rx="16" />
      <GridBg w={760} h={320} color="#ffb800" spacing={40} />
      <text x="24" y="30" fill="white" fontSize="13" fontWeight="700" fontFamily="monospace">5-Year Cumulative Cost — EV vs Petrol</text>
      <text x="24" y="46" fill="#4a6fa5" fontSize="9" fontFamily="monospace">₹ Lakhs · 12,000 km/year · Delhi</text>

      <line x1="100" y1="60" x2="100" y2="280" stroke="#1a3a5c" strokeWidth="1.5" />
      <line x1="100" y1="280" x2="680" y2="280" stroke="#1a3a5c" strokeWidth="1.5" />

      {[0,1,2,3,4,5].map((yr) => (
        <text key={yr} x={toX(yr)} y="296" textAnchor="middle" fill="#4a6fa5" fontSize="9" fontFamily="monospace">Yr {yr}</text>
      ))}
      {[20,22,24,26,28,30].map((v) => (
        <g key={v}>
          <line x1="100" y1={toY(v)} x2="680" y2={toY(v)} stroke="#1a3a5c" strokeWidth="0.8" strokeDasharray="4 4" />
          <text x="90" y={toY(v) + 4} textAnchor="end" fill="#4a6fa5" fontSize="9" fontFamily="monospace">₹{v}L</text>
        </g>
      ))}

      {/* Area fills */}
      <polygon points={`${toX(0)},280 ${ev.map(([x,y]) => `${toX(x)},${toY(y)}`).join(" ")} ${toX(5)},280`}
        fill="#00e5ff" fillOpacity="0.07" />
      <polygon points={`${toX(0)},280 ${petrol.map(([x,y]) => `${toX(x)},${toY(y)}`).join(" ")} ${toX(5)},280`}
        fill="#ffb800" fillOpacity="0.07" />

      {/* Lines */}
      <polyline points={ev.map(([x,y]) => `${toX(x)},${toY(y)}`).join(" ")}
        fill="none" stroke="#00e5ff" strokeWidth="2.5" strokeLinejoin="round" />
      <polyline points={petrol.map(([x,y]) => `${toX(x)},${toY(y)}`).join(" ")}
        fill="none" stroke="#ffb800" strokeWidth="2.5" strokeLinejoin="round" />

      {/* Break-even marker ~year 3.1 */}
      <line x1={toX(3.1)} y1="60" x2={toX(3.1)} y2="280"
        stroke="#39ff14" strokeWidth="1.5" strokeDasharray="6 4" />
      <rect x={toX(3.1) - 48} y="64" width="96" height="24" rx="6" fill="#39ff14" fillOpacity="0.15" stroke="#39ff14" strokeWidth="1" />
      <text x={toX(3.1)} y="80" textAnchor="middle" fill="#39ff14" fontSize="9" fontFamily="monospace">Break-even ~3.1 yrs</text>

      {/* Dots */}
      {ev.map(([x,y],i) => <circle key={i} cx={toX(x)} cy={toY(y)} r="4" fill="#00e5ff" />)}

      {/* Labels at Year 5 */}
      <text x={toX(5) + 6} y={toY(27.4)} fill="#00e5ff" fontSize="9" fontFamily="monospace">EV</text>
      <text x={toX(5) + 6} y={toY(28.3)} fill="#ffb800" fontSize="9" fontFamily="monospace">Petrol</text>

      <line x1="560" y1="22" x2="580" y2="22" stroke="#00e5ff" strokeWidth="2.5" />
      <text x="584" y="26" fill="#00e5ff" fontSize="9" fontFamily="monospace">Nexon EV Max</text>
      <line x1="560" y1="38" x2="580" y2="38" stroke="#ffb800" strokeWidth="2.5" />
      <text x="584" y="42" fill="#ffb800" fontSize="9" fontFamily="monospace">Creta Petrol</text>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════
   ARTICLE 4 — SOLID-STATE BATTERIES
═══════════════════════════════════════════════════ */

export function SolidStateHero() {
  return (
    <svg viewBox="0 0 960 380" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="ssBg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#050b14" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ssElectrolyte" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#a78bfa" stopOpacity="1" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="ssFade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="60%" stopColor="#050b14" stopOpacity="0" />
          <stop offset="100%" stopColor="#050b14" stopOpacity="1" />
        </linearGradient>
      </defs>
      <rect width="960" height="380" fill="#050b14" />
      <rect width="960" height="380" fill="url(#ssBg)" />
      <GridBg w={960} h={380} color="#a78bfa" spacing={48} />

      {/* Left: Li-Ion cell cross-section */}
      <text x="200" y="60" textAnchor="middle" fill="#4a6fa5" fontSize="12" fontFamily="monospace">Li-Ion (Current)</text>
      <rect x="80" y="74" width="240" height="200" rx="14" fill="#0d1f3c" stroke="#1a3a5c" strokeWidth="2" />
      <rect x="94" y="90" width="212" height="38" rx="6" fill="#1a3a5c" />
      <text x="200" y="113" textAnchor="middle" fill="#4a6fa5" fontSize="11" fontFamily="monospace">Cathode (NMC)</text>
      <rect x="94" y="133" width="212" height="46" rx="6" fill="#f43f5e" fillOpacity="0.22" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="4 2" />
      <text x="200" y="153" textAnchor="middle" fill="#f43f5e" fontSize="11" fontFamily="monospace">Liquid Electrolyte</text>
      <text x="200" y="168" textAnchor="middle" fill="#f43f5e" fontSize="9" fontFamily="monospace">⚠ Flammable</text>
      <rect x="94" y="183" width="212" height="22" rx="4" fill="#1a3a5c" fillOpacity="0.6" />
      <text x="200" y="198" textAnchor="middle" fill="#4a6fa5" fontSize="9" fontFamily="monospace">Separator</text>
      <rect x="94" y="209" width="212" height="40" rx="6" fill="#1a3a5c" />
      <text x="200" y="232" textAnchor="middle" fill="#4a6fa5" fontSize="11" fontFamily="monospace">Graphite Anode</text>
      <text x="200" y="290" textAnchor="middle" fill="#4a6fa5" fontSize="12" fontFamily="monospace">250–300 Wh/kg</text>

      {/* Arrow */}
      <line x1="345" y1="175" x2="385" y2="175" stroke="#a78bfa" strokeWidth="2.5" />
      <polygon points="385,170 400,175 385,180" fill="#a78bfa" />
      <text x="372" y="166" textAnchor="middle" fill="#a78bfa" fontSize="10" fontFamily="monospace">SSB</text>

      {/* Right: Solid-State cell */}
      <text x="600" y="60" textAnchor="middle" fill="#a78bfa" fontSize="12" fontFamily="monospace">Solid-State (2026+)</text>
      <rect x="440" y="74" width="320" height="200" rx="14" fill="#0d1f3c" stroke="#a78bfa" strokeWidth="2.5" />
      <rect x="456" y="90" width="288" height="38" rx="6" fill="#a78bfa" fillOpacity="0.2" stroke="#a78bfa" strokeWidth="1" />
      <text x="600" y="113" textAnchor="middle" fill="#a78bfa" fontSize="11" fontFamily="monospace">Cathode (Advanced NMC+)</text>
      <rect x="456" y="133" width="288" height="38" rx="6" fill="url(#ssElectrolyte)" />
      <text x="600" y="150" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="monospace">Solid Electrolyte</text>
      <text x="600" y="165" textAnchor="middle" fill="white" fontSize="9" fontFamily="monospace">✓ Non-flammable · Stable</text>
      <rect x="456" y="176" width="288" height="48" rx="6" fill="#a78bfa" fillOpacity="0.2" stroke="#a78bfa" strokeWidth="1" />
      <text x="600" y="204" textAnchor="middle" fill="#a78bfa" fontSize="11" fontFamily="monospace">Lithium-Metal Anode</text>
      <text x="600" y="220" textAnchor="middle" fill="#a78bfa" fontSize="9" fontFamily="monospace">(no graphite needed)</text>
      <text x="600" y="290" textAnchor="middle" fill="#a78bfa" fontSize="14" fontWeight="700" fontFamily="monospace">400–500 Wh/kg</text>

      {/* Improvement badges */}
      {[
        { label: "2× Range",     x: 460, color: "#39ff14" },
        { label: "10-min Charge", x: 560, color: "#00e5ff" },
        { label: "Safer",        x: 660, color: "#a78bfa" },
        { label: "3× Life",      x: 738, color: "#ffb800" },
      ].map(({ label, x, color }) => (
        <g key={label}>
          <rect x={x} y="304" width={label.length * 7.5 + 14} height="22" rx="5"
            fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1" />
          <text x={x + (label.length * 7.5 + 14) / 2} y="319" textAnchor="middle"
            fill={color} fontSize="9" fontFamily="monospace">{label}</text>
        </g>
      ))}

      {/* Title */}
      <text x="780" y="100" textAnchor="middle" fill="white" fontSize="18" fontWeight="900" fontFamily="monospace">SOLID-STATE</text>
      <text x="780" y="120" textAnchor="middle" fill="white" fontSize="18" fontWeight="900" fontFamily="monospace">BATTERIES</text>
      <text x="780" y="148" textAnchor="middle" fill="#a78bfa" fontSize="12" fontFamily="monospace">2026 Turning Point</text>
      <Bolt x={752} y={164} size={42} color="#a78bfa" />
      <Bolt x={786} y={158} size={50} color="#a78bfa" />
      <Bolt x={812} y={168} size={38} color="#a78bfa" />

      <rect width="960" height="380" fill="url(#ssFade)" />
    </svg>
  );
}

export function ManufacturerTimeline() {
  const makers = [
    { name: "Toyota",       color: "#f43f5e", y: 60,  milestones: [{x: 0.2, label:"Pilot Japan"},{x: 0.5, label:"Global launch"},{x: 0.8, label:"Volume"}] },
    { name: "Samsung SDI",  color: "#00e5ff", y: 120, milestones: [{x: 0.15,label:"Pilot cells"},{x: 0.45,label:"BMW supply"},{x: 0.75,label:"Scale"}] },
    { name: "CATL",         color: "#39ff14", y: 180, milestones: [{x: 0.1, label:"Semi-solid"},{x: 0.5, label:"India supply"},{x: 0.85,label:"Full SSB"}] },
    { name: "QuantumScape", color: "#ffb800", y: 240, milestones: [{x: 0.25,label:"VW samples"},{x: 0.55,label:"Production"},{x: 0.9, label:"Volume"}] },
  ];
  const years = [2025,2026,2027,2028,2029,2030];
  const toX = (frac: number) => 140 + frac * 580;

  return (
    <svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="760" height="320" fill="#050b14" rx="16" />
      <GridBg w={760} h={320} color="#a78bfa" spacing={40} />
      <text x="24" y="30" fill="white" fontSize="13" fontWeight="700" fontFamily="monospace">Solid-State Battery: Manufacturer Roadmap</text>
      {/* Year markers */}
      {years.map((yr, i) => {
        const x = toX(i / (years.length - 1));
        return (
          <g key={yr}>
            <line x1={x} y1="44" x2={x} y2="278" stroke="#1a3a5c" strokeWidth="0.8" strokeDasharray="4 4" />
            <text x={x} y="294" textAnchor="middle" fill="#4a6fa5" fontSize="9" fontFamily="monospace">{yr}</text>
          </g>
        );
      })}
      {/* India impact zone */}
      <rect x={toX(0.6)} y="44" width={toX(1) - toX(0.6)} height="234"
        fill="#39ff14" fillOpacity="0.04" stroke="#39ff14" strokeWidth="1" strokeDasharray="4 2" />
      <text x={toX(0.8)} y="56" textAnchor="middle" fill="#39ff14" fontSize="8" fontFamily="monospace">India Impact Zone</text>

      {/* Maker rows */}
      {makers.map(({ name, color, y, milestones }) => (
        <g key={name}>
          <text x="130" y={y + 5} textAnchor="end" fill={color} fontSize="10" fontFamily="monospace">{name}</text>
          <line x1="140" y1={y} x2="720" y2={y} stroke={color} strokeWidth="1.5" strokeOpacity="0.4" />
          {milestones.map(({ x, label }) => (
            <g key={label}>
              <circle cx={toX(x)} cy={y} r="6" fill={color} fillOpacity="0.25" stroke={color} strokeWidth="1.5" />
              <text x={toX(x)} y={y - 10} textAnchor="middle" fill={color} fontSize="8" fontFamily="monospace">{label}</text>
            </g>
          ))}
        </g>
      ))}
    </svg>
  );
}

/* ═══════════════════════════════════════════════════
   ARTICLE 5 — EV CHARGING INFRASTRUCTURE
═══════════════════════════════════════════════════ */

export function ChargingInfraHero() {
  // Simplified India map with highway corridors
  const cities = [
    { name: "Delhi",     x: 310, y: 110 },
    { name: "Jaipur",   x: 250, y: 155 },
    { name: "Ahmedabad",x: 180, y: 210 },
    { name: "Mumbai",   x: 168, y: 268 },
    { name: "Pune",     x: 182, y: 288 },
    { name: "Bengaluru",x: 248, y: 330 },
    { name: "Chennai",  x: 318, y: 318 },
    { name: "Hyderabad",x: 280, y: 275 },
    { name: "Kolkata",  x: 410, y: 185 },
    { name: "Lucknow",  x: 345, y: 148 },
  ];
  const corridors = [
    { from: [310,110], to: [250,155], color: "#39ff14", dash: "" },
    { from: [250,155], to: [180,210], color: "#39ff14", dash: "" },
    { from: [180,210], to: [168,268], color: "#39ff14", dash: "" },
    { from: [168,268], to: [182,288], color: "#39ff14", dash: "" },
    { from: [248,330], to: [318,318], color: "#39ff14", dash: "" },
    { from: [310,110], to: [345,148], color: "#ffb800", dash: "8 4" },
    { from: [345,148], to: [410,185], color: "#ffb800", dash: "8 4" },
    { from: [280,275], to: [248,330], color: "#00e5ff", dash: "" },
    { from: [280,275], to: [318,318], color: "#00e5ff", dash: "" },
    { from: [168,268], to: [248,330], color: "#f43f5e", dash: "6 4" },
  ];
  const chargers = [[290,130],[265,172],[214,238],[176,280],[268,302],[302,300],[290,250]];

  return (
    <svg viewBox="0 0 960 380" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="chBg" cx="30%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#050b14" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="chFade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="60%" stopColor="#050b14" stopOpacity="0" />
          <stop offset="100%" stopColor="#050b14" stopOpacity="1" />
        </linearGradient>
      </defs>
      <rect width="960" height="380" fill="#050b14" />
      <rect width="960" height="380" fill="url(#chBg)" />
      <GridBg w={960} h={380} color="#00e5ff" spacing={48} />

      {/* India outline — simplified polygon */}
      <path d="M310 60 L370 70 L420 80 L440 120 L430 160 L410 185 L420 210 L400 250
               L390 290 L365 320 L340 340 L318 318 L290 310 L248 330 L220 316
               L182 288 L168 268 L155 240 L148 210 L162 190 L158 160 L168 130
               L200 90 L250 68 Z"
        fill="none" stroke="#1a3a5c" strokeWidth="1.5" strokeOpacity="0.6" />

      {/* Corridors */}
      {corridors.map(({ from, to, color, dash }, i) => (
        <line key={i} x1={from[0]} y1={from[1]} x2={to[0]} y2={to[1]}
          stroke={color} strokeWidth="3" strokeLinecap="round"
          strokeDasharray={dash} strokeOpacity="0.8" />
      ))}

      {/* Charger icons */}
      {chargers.map(([cx, cy], i) => (
        <g key={i}>
          <rect x={cx - 7} y={cy - 9} width="14" height="18" rx="3"
            fill="#00e5ff" fillOpacity="0.2" stroke="#00e5ff" strokeWidth="1" />
          <Bolt x={cx - 4} y={cy - 6} size={12} color="#00e5ff" />
        </g>
      ))}

      {/* City dots */}
      {cities.map(({ name, x, y }) => (
        <g key={name}>
          <circle cx={x} cy={y} r="5" fill="#00e5ff" fillOpacity="0.3" stroke="#00e5ff" strokeWidth="1.5" />
          <circle cx={x} cy={y} r="2.5" fill="#00e5ff" />
          <text x={x + 8} y={y + 4} fill="#c8dff5" fontSize="9" fontFamily="monospace" opacity="0.8">{name}</text>
        </g>
      ))}

      {/* Right side — stats */}
      <text x="680" y="80" textAnchor="middle" fill="white" fontSize="24" fontWeight="900" fontFamily="monospace">CHARGING</text>
      <text x="680" y="105" textAnchor="middle" fill="white" fontSize="24" fontWeight="900" fontFamily="monospace">INFRASTRUCTURE</text>
      <text x="680" y="125" textAnchor="middle" fill="#00e5ff" fontSize="12" fontFamily="monospace" opacity="0.7">India 2026</text>

      {[
        { value: "25,000+", label: "Public Chargers",      color: "#00e5ff", y: 165 },
        { value: "4,500+",  label: "DC Fast Chargers",     color: "#39ff14", y: 215 },
        { value: "60–80km", label: "Avg Spacing (Golden)", color: "#ffb800", y: 265 },
      ].map(({ value, label, color, y }) => (
        <g key={label}>
          <rect x="540" y={y - 24} width="280" height="42" rx="8"
            fill={color} fillOpacity="0.08" stroke={color} strokeWidth="1" strokeOpacity="0.3" />
          <text x="560" y={y - 4} fill={color} fontSize="20" fontWeight="900" fontFamily="monospace">{value}</text>
          <text x="560" y={y + 12} fill={color} fontSize="9" fontFamily="monospace" opacity="0.7">{label}</text>
        </g>
      ))}

      {/* Legend */}
      <line x1="548" y1="308" x2="572" y2="308" stroke="#39ff14" strokeWidth="3" />
      <text x="578" y="312" fill="#39ff14" fontSize="9" fontFamily="monospace">Excellent coverage</text>
      <line x1="548" y1="324" x2="572" y2="324" stroke="#ffb800" strokeWidth="3" strokeDasharray="6 3" />
      <text x="578" y="328" fill="#ffb800" fontSize="9" fontFamily="monospace">Developing</text>
      <line x1="700" y1="308" x2="724" y2="308" stroke="#f43f5e" strokeWidth="3" strokeDasharray="4 3" />
      <text x="730" y="312" fill="#f43f5e" fontSize="9" fontFamily="monospace">Limited</text>

      <rect width="960" height="380" fill="url(#chFade)" />
    </svg>
  );
}

export function ConnectorTypesGuide() {
  const connectors = [
    { name: "CCS2 (DC)", power: "50–150 kW", time: "30–60 min", color: "#00e5ff", badge: "RECOMMENDED",
      shape: "M0 0 L18 0 L18 32 C18 38,14 42,8 42 L10 42 C4 42,0 38,0 32 Z" },
    { name: "Type 2 (AC)", power: "7–22 kW",  time: "3–8 hrs",   color: "#39ff14", badge: "HOME & OFFICE",
      shape: "M4 0 L14 0 L18 28 L9 38 L0 28 Z" },
    { name: "Bharat DC", power: "15 kW",     time: "1–2 hrs",   color: "#ffb800", badge: "2W / 3W",
      shape: "M2 0 L16 0 L18 20 L9 30 L0 20 Z" },
    { name: "GB/T (DC)", power: "50–120 kW", time: "30–60 min", color: "#a78bfa", badge: "BYD / MG",
      shape: "M0 4 L4 0 L14 0 L18 4 L18 28 L14 32 L4 32 L0 28 Z" },
  ];
  return (
    <svg viewBox="0 0 760 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="760" height="220" fill="#050b14" rx="16" />
      <GridBg w={760} h={220} color="#00e5ff" spacing={38} />
      <text x="24" y="28" fill="white" fontSize="13" fontWeight="700" fontFamily="monospace">EV Charging Connector Types — India 2026</text>
      {connectors.map(({ name, power, time, color, badge }, i) => {
        const cx = 100 + i * 165;
        return (
          <g key={name}>
            {/* Card */}
            <rect x={cx - 60} y="42" width="120" height="160" rx="12"
              fill={color} fillOpacity="0.06" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" />
            {/* Badge */}
            <rect x={cx - 42} y="50" width="84" height="16" rx="4" fill={color} fillOpacity="0.2" />
            <text x={cx} y="62" textAnchor="middle" fill={color} fontSize="7" fontFamily="monospace">{badge}</text>
            {/* Connector icon (abstract) */}
            <rect x={cx - 22} y="75" width="44" height="56" rx="8"
              fill={color} fillOpacity="0.15" stroke={color} strokeWidth="2" />
            {/* Pin dots */}
            {[[cx-10,95],[cx+10,95],[cx,115],[cx-10,115],[cx+10,115]].map(([px,py],j) => (
              <circle key={j} cx={px} cy={py} r="4" fill={color} fillOpacity="0.6" />
            ))}
            {/* Details */}
            <text x={cx} y="148" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="monospace">{name}</text>
            <text x={cx} y="163" textAnchor="middle" fill={color} fontSize="10" fontFamily="monospace">{power}</text>
            <text x={cx} y="178" textAnchor="middle" fill="#4a6fa5" fontSize="9" fontFamily="monospace">{time}</text>
          </g>
        );
      })}
    </svg>
  );
}
