export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string; // label
  categorySlug: string;
  readTime: string;
  date: string; // published date (display + datePublished)
  updated?: string; // last-updated date; shown only when it differs from `date`
  accent: string;
  featured?: boolean;
  news?: boolean;
  related: string[]; // slugs for contextual "Related reads"
  // Hindi metadata (used by /hi article pages + locale-aware ArticleShell)
  hiTitle?: string;
  hiSubtitle?: string;
  hiExcerpt?: string;
}

export interface BlogCategory {
  slug: string;
  label: string;
  description: string;
  accent: string;
}

export const CATEGORIES: BlogCategory[] = [
  { slug: "buying-guide", label: "Buying Guide", description: "Practical, step-by-step help for choosing and buying the right EV in India.", accent: "#26E0C4" },
  { slug: "battery-tech", label: "Battery & Tech", description: "How EV batteries and core technology work — explained for Indian conditions.", accent: "#8B7BFF" },
  { slug: "charging", label: "Charging", description: "Home charging, public networks, connectors and road-trip planning in India.", accent: "#C6F94E" },
  { slug: "cost-ownership", label: "Cost & Ownership", description: "Running costs, resale value and the real economics of owning an EV.", accent: "#FFC247" },
  { slug: "range-efficiency", label: "Range & Efficiency", description: "Real-world range, claimed figures and how to get the most from your EV.", accent: "#34D399" },
  { slug: "policy-incentives", label: "Policy & Incentives", description: "Subsidies, road tax, FAME / PM E-Drive and state EV policies, decoded.", accent: "#F472B6" },
  { slug: "market-news", label: "Market News", description: "The latest EV launches, sales numbers and market moves that matter to India.", accent: "#60A5FA" },
  { slug: "brand-guides", label: "Brand Guides", description: "Brand-by-brand lineups of electric cars, scooters and bikes in India — models, prices and which to buy.", accent: "#26E0C4" },
];

export const POSTS: BlogPost[] = [
  // ── Charging-station business cluster (spokes of /ev-charging-station-setup-india) ──
  {
    slug: "cost-to-set-up-ev-charging-station-india",
    title: "EV Charging Station Setup Cost in India (2026)",
    subtitle: "AC vs DC capex, hardware prices and the real total to open a station",
    excerpt:
      "How much does it cost to set up an EV charging station in India? A 2026 breakdown of AC and DC charger prices, electrical and civil work, and the total to open a small or fast-charging station.",
    category: "Charging",
    categorySlug: "charging",
    readTime: "9 min",
    date: "Jun 16, 2026",
    accent: "#C6F94E",
    featured: true,
    related: ["is-ev-charging-station-business-profitable-india", "ev-charging-station-subsidy-india", "ev-charging-station-licence-registration-india", "ev-charging-station-franchise-india"],
  },
  {
    slug: "is-ev-charging-station-business-profitable-india",
    title: "Is the EV Charging Station Business Profitable in India? (2026)",
    subtitle: "Margins, per-charger earnings and payback period, explained",
    excerpt:
      "Is an EV charging station business profitable in India? We break down how operators earn, realistic margins, per-charger monthly income and the typical payback period in 2026.",
    category: "Charging",
    categorySlug: "charging",
    readTime: "9 min",
    date: "Jun 15, 2026",
    accent: "#C6F94E",
    related: ["cost-to-set-up-ev-charging-station-india", "ev-charging-station-subsidy-india", "ev-charging-station-franchise-india", "ev-charging-station-licence-registration-india"],
  },
  {
    slug: "ev-charging-station-licence-registration-india",
    title: "Licence & Approvals to Open an EV Charging Station in India",
    subtitle: "Why it's de-licensed — and the permits you actually need",
    excerpt:
      "Do you need a licence for an EV charging station in India? Public charging is de-licensed, but you still need a DISCOM load sanction, NOCs, electrical and fire safety sign-offs and GST. The full 2026 checklist.",
    category: "Charging",
    categorySlug: "charging",
    readTime: "8 min",
    date: "Jun 14, 2026",
    accent: "#C6F94E",
    related: ["cost-to-set-up-ev-charging-station-india", "is-ev-charging-station-business-profitable-india", "ev-charging-station-subsidy-india", "ev-charging-station-equipment-ac-dc-india"],
  },
  {
    slug: "ev-charging-station-subsidy-india",
    title: "Government Subsidy for EV Charging Stations in India (2026)",
    subtitle: "PM E-Drive central support and state capital subsidies",
    excerpt:
      "What subsidies can you get for an EV charging station in India? PM E-Drive central support plus state capital subsidies (Maharashtra, Delhi, Gujarat and more) for 2026, with eligibility explained.",
    category: "Policy & Incentives",
    categorySlug: "policy-incentives",
    readTime: "8 min",
    date: "Jun 13, 2026",
    accent: "#F472B6",
    related: ["cost-to-set-up-ev-charging-station-india", "is-ev-charging-station-business-profitable-india", "ev-charging-station-franchise-india", "ev-subsidies-road-tax-by-state-india-2026"],
  },
  {
    slug: "ev-charging-station-franchise-india",
    title: "EV Charging Station Franchise in India: Cost & How It Works (2026)",
    subtitle: "CPO partnerships, investment range and what a franchise gives you",
    excerpt:
      "Thinking of an EV charging station franchise in India? How charge-point-operator partnership models work, the typical investment, what the franchise provides, and the ROI to expect in 2026.",
    category: "Charging",
    categorySlug: "charging",
    readTime: "8 min",
    date: "Jun 12, 2026",
    accent: "#C6F94E",
    related: ["cost-to-set-up-ev-charging-station-india", "is-ev-charging-station-business-profitable-india", "ev-charging-station-subsidy-india", "ev-charging-station-equipment-ac-dc-india"],
  },
  {
    slug: "ev-charging-station-equipment-ac-dc-india",
    title: "AC vs DC Chargers: Which to Install for Your EV Station (India 2026)",
    subtitle: "Power levels, connectors (CCS2, Type 2, LECCS) and what to buy",
    excerpt:
      "Choosing equipment for an EV charging station in India? AC vs DC explained, the connector standards that matter (CCS2, Type 2, LECCS), power levels, and which chargers to install for cars versus two-wheelers.",
    category: "Charging",
    categorySlug: "charging",
    readTime: "8 min",
    date: "Jun 11, 2026",
    accent: "#C6F94E",
    related: ["cost-to-set-up-ev-charging-station-india", "ev-charging-station-licence-registration-india", "is-ev-charging-station-business-profitable-india", "ev-charger-types-connectors-india"],
  },
  // ── PAA / buying-intent guides ──────────────────────────────
  {
    slug: "best-electric-cars-india-2026",
    title: "Best Electric Cars in India 2026: Which EV Car Is Best to Buy?",
    subtitle: "The best EVs across budgets, ranked buyer-first",
    excerpt: "Which electric car is best to buy in India in 2026? Our buyer-first pick of the best EV cars across budgets — by range, safety, price and value.",
    category: "Buying Guide",
    categorySlug: "buying-guide",
    readTime: "10 min",
    date: "Jun 6, 2026",
    accent: "#26E0C4",
    related: ["best-selling-electric-cars-india","safest-electric-cars-india","tata-electric-cars","top-5-electric-scooters-india-2026"],
  },
  {
    slug: "best-selling-electric-cars-india",
    title: "Best-Selling Electric Cars in India 2026: Top Models & India's No. 1 EV",
    subtitle: "What India is actually buying — and why",
    excerpt: "Which is the top-selling electric car in India? The best-selling EV cars of 2026, India's No. 1 EV brand and the most sold electric car — and what the numbers mean for buyers.",
    category: "Market News",
    categorySlug: "market-news",
    readTime: "8 min",
    date: "Jun 6, 2026",
    accent: "#60A5FA",
    related: ["best-electric-cars-india-2026","tata-electric-cars","mg-electric-cars","safest-electric-cars-india"],
  },
  {
    slug: "safest-electric-cars-india",
    title: "Safest Electric Cars in India 2026 (Bharat NCAP & Global NCAP Rated)",
    subtitle: "5-star EVs and what makes a safe electric car",
    excerpt: "Which is the safest electric car in India? A 2026 list of the safest EVs by Bharat NCAP and Global NCAP crash-test ratings, plus what to check before buying.",
    category: "Buying Guide",
    categorySlug: "buying-guide",
    readTime: "8 min",
    date: "Jun 6, 2026",
    accent: "#34D399",
    related: ["best-electric-cars-india-2026","best-selling-electric-cars-india","tata-electric-cars","mahindra-electric-cars"],
  },
  {
    slug: "ev-battery-lifespan-india",
    title: "How Long Does an EV Battery Last? Lifespan, the 80% Rule & Charging Habits (2026)",
    subtitle: "Battery life, the 8-year question and charging myths",
    excerpt: "How long does an EV battery last in India? Lifespan explained — what happens after 8 years, the 80% charging rule, charging twice a day, and how to extend battery life.",
    category: "Battery & Tech",
    categorySlug: "battery-tech",
    readTime: "9 min",
    date: "Jun 6, 2026",
    accent: "#8B7BFF",
    related: ["ev-battery-life-india-weather","ev-resale-value-battery-health-india","home-ev-charging-cost-india","disadvantages-of-electric-vehicles-india"],
  },
  {
    slug: "disadvantages-of-electric-vehicles-india",
    title: "Disadvantages of Electric Vehicles in India (2026): Honest Cons to Know",
    subtitle: "The real downsides — and how to work around them",
    excerpt: "What are the disadvantages of electric vehicles? An honest 2026 look at EV cons in India — price, charging gaps, range anxiety, resale and battery worries — and how to deal with them.",
    category: "Buying Guide",
    categorySlug: "buying-guide",
    readTime: "9 min",
    date: "Jun 6, 2026",
    accent: "#FFC247",
    related: ["best-electric-cars-india-2026","ev-battery-lifespan-india","petrol-vs-electric-5-year-cost-india","home-ev-charging-cost-india"],
  },
  // ── Brand Guides (listicles) ──────────────────────────────
  {
    slug: "tata-electric-cars",
    title: "Tata Electric Cars in India 2026: Models, Prices & Range",
    subtitle: "Full lineup, prices & which one to buy",
    excerpt: "A complete list of Tata electric cars in India for 2026 — 6 models compared on price, range, battery and value.",
    category: "Brand Guides",
    categorySlug: "brand-guides",
    readTime: "9 min",
    date: "Jun 6, 2026",
    accent: "#22d3ee",
    related: ["mg-electric-cars","byd-electric-cars","kia-electric-cars","tesla-electric-cars-india"],
  },
  {
    slug: "mg-electric-cars",
    title: "MG Electric Cars in India 2026: Models, Prices & Range",
    subtitle: "Full lineup, prices & which one to buy",
    excerpt: "A complete list of MG electric cars in India for 2026 — 6 models compared on price, range, battery and value.",
    category: "Brand Guides",
    categorySlug: "brand-guides",
    readTime: "9 min",
    date: "Jun 6, 2026",
    accent: "#22d3ee",
    related: ["tata-electric-cars","byd-electric-cars","kia-electric-cars","tesla-electric-cars-india"],
  },
  {
    slug: "byd-electric-cars",
    title: "BYD Electric Cars in India 2026: Models, Prices & Range",
    subtitle: "Full lineup, prices & which one to buy",
    excerpt: "A complete list of BYD electric cars in India for 2026 — 5 models compared on price, range, battery and value.",
    category: "Brand Guides",
    categorySlug: "brand-guides",
    readTime: "9 min",
    date: "Jun 6, 2026",
    accent: "#22d3ee",
    related: ["tata-electric-cars","mg-electric-cars","kia-electric-cars","tesla-electric-cars-india"],
  },
  {
    slug: "kia-electric-cars",
    title: "Kia Electric Cars in India 2026: Models, Prices & Range",
    subtitle: "Full lineup, prices & which one to buy",
    excerpt: "A complete list of Kia electric cars in India for 2026 — 5 models compared on price, range, battery and value.",
    category: "Brand Guides",
    categorySlug: "brand-guides",
    readTime: "9 min",
    date: "Jun 6, 2026",
    accent: "#22d3ee",
    related: ["tata-electric-cars","mg-electric-cars","byd-electric-cars","tesla-electric-cars-india"],
  },
  {
    slug: "tesla-electric-cars-india",
    title: "Tesla Electric Cars in India 2026: Models, Prices & Range",
    subtitle: "Full lineup, prices & which one to buy",
    excerpt: "A complete list of Tesla electric cars in India for 2026 — 4 models compared on price, range, battery and value.",
    category: "Brand Guides",
    categorySlug: "brand-guides",
    readTime: "8 min",
    date: "Jun 6, 2026",
    accent: "#22d3ee",
    related: ["tata-electric-cars","mg-electric-cars","byd-electric-cars","kia-electric-cars"],
  },
  {
    slug: "hyundai-electric-cars",
    title: "Hyundai Electric Cars in India 2026: Models, Prices & Range",
    subtitle: "Full lineup, prices & which one to buy",
    excerpt: "A complete list of Hyundai electric cars in India for 2026 — 3 models compared on price, range, battery and value.",
    category: "Brand Guides",
    categorySlug: "brand-guides",
    readTime: "7 min",
    date: "Jun 6, 2026",
    accent: "#22d3ee",
    related: ["tata-electric-cars","mg-electric-cars","byd-electric-cars","kia-electric-cars"],
  },
  {
    slug: "mahindra-electric-cars",
    title: "Mahindra Electric Cars in India 2026: Models, Prices & Range",
    subtitle: "Full lineup, prices & which one to buy",
    excerpt: "A complete list of Mahindra electric cars in India for 2026 — 3 models compared on price, range, battery and value.",
    category: "Brand Guides",
    categorySlug: "brand-guides",
    readTime: "7 min",
    date: "Jun 6, 2026",
    accent: "#22d3ee",
    related: ["tata-electric-cars","mg-electric-cars","byd-electric-cars","kia-electric-cars"],
  },
  {
    slug: "bmw-electric-cars",
    title: "BMW Electric Cars in India 2026: Models, Prices & Range",
    subtitle: "Full lineup, prices & which one to buy",
    excerpt: "A complete list of BMW electric cars in India for 2026 — 5 models compared on price, range, battery and value.",
    category: "Brand Guides",
    categorySlug: "brand-guides",
    readTime: "9 min",
    date: "Jun 6, 2026",
    accent: "#22d3ee",
    related: ["tata-electric-cars","mg-electric-cars","byd-electric-cars","kia-electric-cars"],
  },
  {
    slug: "mercedes-benz-electric-cars",
    title: "Mercedes-Benz Electric Cars in India 2026: Models, Prices & Range",
    subtitle: "Full lineup, prices & which one to buy",
    excerpt: "A complete list of Mercedes-Benz electric cars in India for 2026 — 5 models compared on price, range, battery and value.",
    category: "Brand Guides",
    categorySlug: "brand-guides",
    readTime: "9 min",
    date: "Jun 6, 2026",
    accent: "#22d3ee",
    related: ["tata-electric-cars","mg-electric-cars","byd-electric-cars","kia-electric-cars"],
  },
  {
    slug: "audi-electric-cars",
    title: "Audi Electric Cars in India 2026: Models, Prices & Range",
    subtitle: "Full lineup, prices & which one to buy",
    excerpt: "A complete list of Audi electric cars in India for 2026 — 3 models compared on price, range, battery and value.",
    category: "Brand Guides",
    categorySlug: "brand-guides",
    readTime: "7 min",
    date: "Jun 6, 2026",
    accent: "#22d3ee",
    related: ["tata-electric-cars","mg-electric-cars","byd-electric-cars","kia-electric-cars"],
  },
  {
    slug: "volvo-electric-cars",
    title: "Volvo Electric Cars in India 2026: Models, Prices & Range",
    subtitle: "Full lineup, prices & which one to buy",
    excerpt: "A complete list of Volvo electric cars in India for 2026 — 4 models compared on price, range, battery and value.",
    category: "Brand Guides",
    categorySlug: "brand-guides",
    readTime: "8 min",
    date: "Jun 6, 2026",
    accent: "#22d3ee",
    related: ["tata-electric-cars","mg-electric-cars","byd-electric-cars","kia-electric-cars"],
  },
  {
    slug: "vinfast-electric-cars",
    title: "VinFast Electric Cars in India 2026: Models, Prices & Range",
    subtitle: "Full lineup, prices & which one to buy",
    excerpt: "A complete list of VinFast electric cars in India for 2026 — 4 models compared on price, range, battery and value.",
    category: "Brand Guides",
    categorySlug: "brand-guides",
    readTime: "8 min",
    date: "Jun 6, 2026",
    accent: "#22d3ee",
    related: ["tata-electric-cars","mg-electric-cars","byd-electric-cars","kia-electric-cars"],
  },
  {
    slug: "citroen-electric-cars",
    title: "Citroen Electric Cars in India 2026: Models, Prices & Range",
    subtitle: "Full lineup, prices & which one to buy",
    excerpt: "A complete list of Citroen electric cars in India for 2026 — 2 models compared on price, range, battery and value.",
    category: "Brand Guides",
    categorySlug: "brand-guides",
    readTime: "6 min",
    date: "Jun 6, 2026",
    accent: "#22d3ee",
    related: ["tata-electric-cars","mg-electric-cars","byd-electric-cars","kia-electric-cars"],
  },
  {
    slug: "ola-electric-scooters",
    title: "Ola Electric Scooters in India 2026: Models, Prices & Range",
    subtitle: "Full lineup, prices & which one to buy",
    excerpt: "A complete list of Ola electric scooters in India for 2026 — 6 models compared on price, range, battery and value.",
    category: "Brand Guides",
    categorySlug: "brand-guides",
    readTime: "9 min",
    date: "Jun 6, 2026",
    accent: "#a3e635",
    related: ["ather-electric-scooters","tvs-electric-scooters","bajaj-electric-scooters","hero-electric-scooters"],
  },
  {
    slug: "ather-electric-scooters",
    title: "Ather Electric Scooters in India 2026: Models, Prices & Range",
    subtitle: "Full lineup, prices & which one to buy",
    excerpt: "A complete list of Ather electric scooters in India for 2026 — 5 models compared on price, range, battery and value.",
    category: "Brand Guides",
    categorySlug: "brand-guides",
    readTime: "9 min",
    date: "Jun 6, 2026",
    accent: "#a3e635",
    related: ["ola-electric-scooters","tvs-electric-scooters","bajaj-electric-scooters","hero-electric-scooters"],
  },
  {
    slug: "tvs-electric-scooters",
    title: "TVS Electric Scooters in India 2026: Models, Prices & Range",
    subtitle: "Full lineup, prices & which one to buy",
    excerpt: "A complete list of TVS electric scooters in India for 2026 — 6 models compared on price, range, battery and value.",
    category: "Brand Guides",
    categorySlug: "brand-guides",
    readTime: "9 min",
    date: "Jun 6, 2026",
    accent: "#a3e635",
    related: ["ola-electric-scooters","ather-electric-scooters","bajaj-electric-scooters","hero-electric-scooters"],
  },
  {
    slug: "bajaj-electric-scooters",
    title: "Bajaj Electric Scooters in India 2026: Models, Prices & Range",
    subtitle: "Full lineup, prices & which one to buy",
    excerpt: "A complete list of Bajaj electric scooters in India for 2026 — 2 models compared on price, range, battery and value.",
    category: "Brand Guides",
    categorySlug: "brand-guides",
    readTime: "6 min",
    date: "Jun 6, 2026",
    accent: "#a3e635",
    related: ["ola-electric-scooters","ather-electric-scooters","tvs-electric-scooters","hero-electric-scooters"],
  },
  {
    slug: "hero-electric-scooters",
    title: "Hero Electric Scooters in India 2026: Models, Prices & Range",
    subtitle: "Full lineup, prices & which one to buy",
    excerpt: "A complete list of Hero electric scooters in India for 2026 — 3 models compared on price, range, battery and value.",
    category: "Brand Guides",
    categorySlug: "brand-guides",
    readTime: "7 min",
    date: "Jun 6, 2026",
    accent: "#a3e635",
    related: ["ola-electric-scooters","ather-electric-scooters","tvs-electric-scooters","bajaj-electric-scooters"],
  },
  {
    slug: "ampere-electric-scooters",
    title: "Ampere Electric Scooters in India 2026: Models, Prices & Range",
    subtitle: "Full lineup, prices & which one to buy",
    excerpt: "A complete list of Ampere electric scooters in India for 2026 — 2 models compared on price, range, battery and value.",
    category: "Brand Guides",
    categorySlug: "brand-guides",
    readTime: "6 min",
    date: "Jun 6, 2026",
    accent: "#a3e635",
    related: ["ola-electric-scooters","ather-electric-scooters","tvs-electric-scooters","bajaj-electric-scooters"],
  },
  {
    slug: "ola-electric-bikes",
    title: "Ola Electric Bikes in India 2026: Models, Prices & Range",
    subtitle: "Full lineup, prices & which one to buy",
    excerpt: "A complete list of Ola electric bikes in India for 2026 — 6 models compared on price, range, battery and value.",
    category: "Brand Guides",
    categorySlug: "brand-guides",
    readTime: "9 min",
    date: "Jun 6, 2026",
    accent: "#a3e635",
    related: ["ultraviolette-electric-bikes","revolt-electric-bikes","tork-electric-bikes","oben-electric-bikes"],
  },
  {
    slug: "ultraviolette-electric-bikes",
    title: "Ultraviolette Electric Bikes in India 2026: Models, Prices & Range",
    subtitle: "Full lineup, prices & which one to buy",
    excerpt: "A complete list of Ultraviolette electric bikes in India for 2026 — 4 models compared on price, range, battery and value.",
    category: "Brand Guides",
    categorySlug: "brand-guides",
    readTime: "8 min",
    date: "Jun 6, 2026",
    accent: "#fb923c",
    related: ["ola-electric-bikes","revolt-electric-bikes","tork-electric-bikes","oben-electric-bikes"],
  },
  {
    slug: "revolt-electric-bikes",
    title: "Revolt Electric Bikes in India 2026: Models, Prices & Range",
    subtitle: "Full lineup, prices & which one to buy",
    excerpt: "A complete list of Revolt electric bikes in India for 2026 — 4 models compared on price, range, battery and value.",
    category: "Brand Guides",
    categorySlug: "brand-guides",
    readTime: "8 min",
    date: "Jun 6, 2026",
    accent: "#fb923c",
    related: ["ola-electric-bikes","ultraviolette-electric-bikes","tork-electric-bikes","oben-electric-bikes"],
  },
  {
    slug: "tork-electric-bikes",
    title: "Tork Electric Bikes in India 2026: Models, Prices & Range",
    subtitle: "Full lineup, prices & which one to buy",
    excerpt: "A complete list of Tork electric bikes in India for 2026 — 3 models compared on price, range, battery and value.",
    category: "Brand Guides",
    categorySlug: "brand-guides",
    readTime: "7 min",
    date: "Jun 6, 2026",
    accent: "#fb923c",
    related: ["ola-electric-bikes","ultraviolette-electric-bikes","revolt-electric-bikes","oben-electric-bikes"],
  },
  {
    slug: "oben-electric-bikes",
    title: "Oben Electric Bikes in India 2026: Models, Prices & Range",
    subtitle: "Full lineup, prices & which one to buy",
    excerpt: "A complete list of Oben electric bikes in India for 2026 — 3 models compared on price, range, battery and value.",
    category: "Brand Guides",
    categorySlug: "brand-guides",
    readTime: "7 min",
    date: "Jun 6, 2026",
    accent: "#fb923c",
    related: ["ola-electric-bikes","ultraviolette-electric-bikes","revolt-electric-bikes","tork-electric-bikes"],
  },
  // ── Existing evergreen ───────────────────────────────────────
  {
    slug: "top-5-electric-scooters-india-2026",
    title: "Top 5 Electric Scooters in India 2026",
    subtitle: "Range, Price & Features Compared",
    excerpt:
      "We analysed India's best electric scooters on ARAI range, real-world performance, charging times, service networks, and 5-year running costs to help you pick the right one.",
    category: "Buying Guide",
    categorySlug: "buying-guide",
    readTime: "11 min",
    date: "Jan 15, 2026",
    accent: "#00e5ff",
    featured: true,
    related: ["how-to-choose-first-ev-india", "petrol-vs-electric-5-year-cost-india", "ev-subsidies-road-tax-by-state-india-2026", "home-ev-charging-cost-india"],
  },
  {
    slug: "ev-battery-life-india-weather",
    title: "EV Battery Life in Indian Weather",
    subtitle: "How to Make Your Battery Last 10+ Years",
    excerpt:
      "India's 45°C summers and monsoon humidity are uniquely brutal on EV batteries. Here's the science-backed playbook to protect your pack and preserve your warranty.",
    category: "Battery & Tech",
    categorySlug: "battery-tech",
    readTime: "13 min",
    date: "Jan 22, 2026",
    accent: "#39ff14",
    related: ["ev-resale-value-battery-health-india", "solid-state-batteries-2026", "real-world-range-vs-arai-india", "home-ev-charging-cost-india"],
  },
  {
    slug: "cost-of-owning-an-electric-car-in-india",
    title: "Cost of Owning an Electric Car in India (2026): The Complete Guide",
    subtitle: "Price, charging, servicing, insurance and resale — the full running-cost picture",
    excerpt:
      "What does it really cost to own an electric car in India? This complete 2026 guide breaks down the on-road price, charging and running cost per km, servicing, insurance, battery and resale — and links to a deep guide on every part.",
    category: "Cost & Ownership",
    categorySlug: "cost-ownership",
    readTime: "15 min",
    date: "Jun 17, 2026",
    accent: "#FFC247",
    featured: true,
    related: ["petrol-vs-electric-5-year-cost-india", "ev-maintenance-cost-india", "home-ev-charging-cost-india", "ev-resale-value-battery-health-india"],
  },
  {
    slug: "petrol-vs-electric-5-year-cost-india",
    title: "Petrol vs Electric: 5-Year Cost Analysis",
    subtitle: "Total Cost of Ownership for Indian Buyers",
    excerpt:
      "A rupee-by-rupee breakdown of purchase price, fuel, insurance, maintenance, and resale value over 5 years. We compare the Tata Nexon EV Max against the Hyundai Creta petrol.",
    category: "Cost & Ownership",
    categorySlug: "cost-ownership",
    readTime: "14 min",
    date: "Feb 3, 2026",
    accent: "#ffb800",
    related: ["how-to-choose-first-ev-india", "ev-resale-value-battery-health-india", "ev-subsidies-road-tax-by-state-india-2026", "home-ev-charging-cost-india"],
  },
  {
    slug: "solid-state-batteries-2026",
    title: "Solid-State Batteries: The 2026 Turning Point",
    subtitle: "Why This Year Changes EV Range Forever",
    excerpt:
      "After years of promises, solid-state cells are entering limited production. We explain what the technology actually delivers, who is leading, and when Indian EV buyers will feel the impact.",
    category: "Battery & Tech",
    categorySlug: "battery-tech",
    readTime: "12 min",
    date: "Feb 14, 2026",
    accent: "#a78bfa",
    related: ["ev-battery-life-india-weather", "real-world-range-vs-arai-india", "ev-resale-value-battery-health-india", "india-ev-sales-fy2026"],
  },
  {
    slug: "ev-charging-infrastructure-india",
    title: "EV Charging Infrastructure in India 2026",
    subtitle: "A Complete Road Trip Planning Guide",
    excerpt:
      "India now has 25,000+ public chargers and 4,500+ DC fast chargers on highways. We map the best corridors, recommend the top apps, and give you a step-by-step road trip checklist.",
    category: "Charging",
    categorySlug: "charging",
    readTime: "15 min",
    date: "Feb 28, 2026",
    accent: "#00e5ff",
    related: ["home-ev-charging-cost-india", "india-ev-charging-network-2026", "real-world-range-vs-arai-india", "how-to-choose-first-ev-india"],
  },

  // ── New evergreen ────────────────────────────────────────────
  {
    slug: "home-ev-charging-cost-india",
    title: "Home EV Charging in India: Setup, Costs & What You Actually Need",
    subtitle: "Chargers, wiring, tariffs and real per-km costs",
    excerpt:
      "Home charging is where most EV owners top up. Here's exactly what charger to get, what installation costs, and how cheap charging at home really is in 2026.",
    category: "Charging",
    categorySlug: "charging",
    readTime: "7 min",
    date: "Mar 12, 2026",
    accent: "#C6F94E",
    related: ["ev-charging-infrastructure-india", "india-ev-charging-network-2026", "petrol-vs-electric-5-year-cost-india", "real-world-range-vs-arai-india"],
    hiTitle: "भारत में घर पर EV चार्जिंग: सेटअप, लागत और आपको असल में क्या चाहिए",
    hiSubtitle: "चार्जर, वायरिंग, टैरिफ और असली प्रति-किमी लागत",
    hiExcerpt:
      "ज़्यादातर EV मालिक घर पर ही चार्ज करते हैं। यहाँ बताया गया है कि कौन-सा चार्जर लें, इंस्टॉलेशन में कितना खर्च आता है, और 2026 में घर पर चार्जिंग असल में कितनी सस्ती है।",
  },
  {
    slug: "how-to-choose-first-ev-india",
    title: "Buying Your First EV in India: The Complete Checklist",
    subtitle: "Range, charging, costs and safety — in order",
    excerpt:
      "Switching from petrol to electric? This buyer-first checklist walks you through everything that actually matters before you book your first EV in India.",
    category: "Buying Guide",
    categorySlug: "buying-guide",
    readTime: "7 min",
    date: "Mar 24, 2026",
    accent: "#26E0C4",
    related: ["petrol-vs-electric-5-year-cost-india", "ev-resale-value-battery-health-india", "ev-subsidies-road-tax-by-state-india-2026", "real-world-range-vs-arai-india"],
    hiTitle: "भारत में अपनी पहली EV खरीदना: पूरी चेकलिस्ट",
    hiSubtitle: "रेंज, चार्जिंग, लागत और सुरक्षा — सही क्रम में",
    hiExcerpt:
      "पेट्रोल से इलेक्ट्रिक पर स्विच कर रहे हैं? यह बायर-फर्स्ट चेकलिस्ट भारत में अपनी पहली EV बुक करने से पहले हर ज़रूरी बात समझाती है।",
  },
  {
    slug: "real-world-range-vs-arai-india",
    title: "Real-World EV Range vs ARAI Claims, Explained",
    subtitle: "Why the sticker number isn't what you'll get",
    excerpt:
      "Your EV's ARAI range and the range you actually get can differ by 20–30%. Here's why, what affects it in Indian conditions, and how to estimate your true range.",
    category: "Range & Efficiency",
    categorySlug: "range-efficiency",
    readTime: "6 min",
    date: "Apr 7, 2026",
    accent: "#34D399",
    related: ["ev-battery-life-india-weather", "home-ev-charging-cost-india", "ev-charging-infrastructure-india", "how-to-choose-first-ev-india"],
    hiTitle: "असल EV रेंज बनाम ARAI दावे, विस्तार से समझाया गया",
    hiSubtitle: "स्टिकर का नंबर वह नहीं जो आपको असल में मिलेगा",
    hiExcerpt:
      "आपकी EV की ARAI रेंज और असल में मिलने वाली रेंज में 20–30% का अंतर हो सकता है। यहाँ जानिए ऐसा क्यों होता है, भारतीय परिस्थितियों में किन बातों का असर पड़ता है, और अपनी असली रेंज का अनुमान कैसे लगाएँ।",
  },
  {
    slug: "ev-resale-value-battery-health-india",
    title: "EV Resale Value & Battery Health in India",
    subtitle: "Will your EV hold its worth?",
    excerpt:
      "Battery health drives EV resale value. Learn what affects degradation, how State of Health is measured, and how to protect both your battery and your resale price.",
    category: "Cost & Ownership",
    categorySlug: "cost-ownership",
    readTime: "7 min",
    date: "Apr 18, 2026",
    accent: "#FFC247",
    related: ["ev-battery-life-india-weather", "petrol-vs-electric-5-year-cost-india", "how-to-choose-first-ev-india", "maruti-e-vitara-first-ev-launch"],
    hiTitle: "भारत में EV रीसेल वैल्यू और बैटरी हेल्थ",
    hiSubtitle: "क्या आपकी EV अपनी कीमत बनाए रखेगी?",
    hiExcerpt:
      "बैटरी हेल्थ EV की रीसेल वैल्यू तय करती है। जानिए डिग्रेडेशन को क्या प्रभावित करता है, State of Health कैसे मापा जाता है, और अपनी बैटरी व रीसेल कीमत दोनों की रक्षा कैसे करें।",
  },
  {
    slug: "ev-subsidies-road-tax-by-state-india-2026",
    title: "EV Subsidies, Road Tax & Incentives by State (2026 Guide)",
    subtitle: "What you actually save, and where",
    excerpt:
      "Central PM E-Drive incentives, state subsidies and road-tax waivers can change an EV's on-road price by lakhs. Here's how the 2026 incentive landscape works in India.",
    category: "Policy & Incentives",
    categorySlug: "policy-incentives",
    readTime: "7 min",
    date: "Apr 29, 2026",
    accent: "#F472B6",
    related: ["how-to-choose-first-ev-india", "petrol-vs-electric-5-year-cost-india", "india-ev-sales-fy2026", "tesla-model-y-price-cut-india-2026"],
    hiTitle: "राज्यवार EV सब्सिडी, रोड टैक्स और प्रोत्साहन (2026 गाइड)",
    hiSubtitle: "आप असल में कितना बचाते हैं, और कहाँ",
    hiExcerpt:
      "केंद्र की PM E-Drive प्रोत्साहन योजनाएँ, राज्य सब्सिडी और रोड-टैक्स छूट किसी EV की ऑन-रोड कीमत को लाखों रुपये तक बदल सकती हैं। यहाँ जानिए भारत में 2026 का प्रोत्साहन परिदृश्य कैसे काम करता है।",
  },

  {
    slug: "electric-car-vs-hybrid-india",
    title: "Electric Car vs Hybrid Car in India: Which Should You Buy?",
    subtitle: "EVs, strong hybrids and PHEVs — honestly compared",
    excerpt:
      "An electric car and a hybrid solve different problems. This guide breaks down mild, strong and plug-in hybrids against pure EVs on cost, charging, tax and real-world fit for Indian buyers.",
    category: "Buying Guide",
    categorySlug: "buying-guide",
    readTime: "9 min",
    date: "Jun 6, 2026",
    accent: "#26E0C4",
    related: ["how-to-choose-first-ev-india", "petrol-vs-electric-5-year-cost-india", "home-ev-charging-cost-india", "ev-subsidies-road-tax-by-state-india-2026"],
    hiTitle: "भारत में इलेक्ट्रिक कार बनाम हाइब्रिड कार: कौन-सी खरीदें?",
    hiSubtitle: "EV, स्ट्रॉन्ग हाइब्रिड और PHEV — ईमानदारी से तुलना",
    hiExcerpt:
      "एक इलेक्ट्रिक कार और एक हाइब्रिड अलग-अलग समस्याएँ हल करते हैं। यह गाइड माइल्ड, स्ट्रॉन्ग और प्लग-इन हाइब्रिड की तुलना शुद्ध EV से — लागत, चार्जिंग, टैक्स और भारतीय खरीदार के लिए असली फिट के आधार पर — करती है।",
  },

  {
    slug: "ev-maintenance-cost-india",
    title: "EV Car Maintenance Cost in India (2026): What You'll Actually Pay",
    subtitle: "EV service cost, yearly bills, and how it compares with a petrol SUV",
    excerpt:
      "What does EV car maintenance cost in India? Real 2026 EV service charges, the per-year servicing bill, brake, tyre and battery costs, and how electric SUV maintenance compares with a petrol SUV.",
    category: "Cost & Ownership",
    categorySlug: "cost-ownership",
    readTime: "8 min",
    date: "Jun 8, 2026",
    updated: "Jun 21, 2026",
    accent: "#FFC247",
    related: ["petrol-vs-electric-5-year-cost-india", "ev-resale-value-battery-health-india", "ev-battery-life-india-weather", "how-to-choose-first-ev-india"],
    hiTitle: "भारत में EV मेंटेनेंस लागत: आप असल में कितना चुकाएँगे",
    hiSubtitle: "सर्विस इंटरवल, क्या-क्या जाँचा जाता है, और असली बिल",
    hiExcerpt:
      "इलेक्ट्रिक कारों को पेट्रोल से कहीं कम सर्विसिंग चाहिए — न ऑयल, न स्पार्क प्लग, न क्लच। यहाँ जानिए एक EV को असल में क्या चाहिए, कितनी बार, और भारत में मेंटेनेंस पर सच में कितना खर्च आता है।",
  },

  {
    slug: "upcoming-electric-cars-under-15-lakh-india",
    title: "Upcoming Electric Cars Under ₹15 Lakh in India (2026)",
    subtitle: "New EVs launching at or near the ₹15 lakh mark",
    excerpt:
      "Which electric cars under ₹15 lakh are launching in India in 2026? Expected models, prices and timing — from the Hyundai Inster and Tata Altroz EV to new Mahindra and Citroen options.",
    category: "Buying Guide",
    categorySlug: "buying-guide",
    readTime: "7 min",
    date: "Jun 16, 2026",
    accent: "#26E0C4",
    related: ["best-electric-cars-under-15-lakh-india", "best-electric-cars-india-2026", "cost-of-owning-an-electric-car-in-india", "how-to-choose-first-ev-india"],
  },
  {
    slug: "electric-cars-under-15-lakh-on-road-price-india",
    title: "On-Road Price of Electric Cars Under ₹15 Lakh in India (2026)",
    subtitle: "Ex-showroom vs on-road — and why EVs barely add tax",
    excerpt:
      "What's the on-road price of an electric car under ₹15 lakh in India? How road tax, registration, insurance and TCS add up — and why EV waivers keep the on-road price close to ex-showroom.",
    category: "Buying Guide",
    categorySlug: "buying-guide",
    readTime: "7 min",
    date: "Jun 15, 2026",
    accent: "#26E0C4",
    related: ["best-electric-cars-under-15-lakh-india", "ev-subsidies-road-tax-by-state-india-2026", "cost-of-owning-an-electric-car-in-india", "electric-car-loan-india"],
  },
  {
    slug: "7-seater-electric-cars-under-15-lakh-india",
    title: "7-Seater Electric Cars Under ₹15 Lakh in India: The Honest Answer (2026)",
    subtitle: "Are there any — and the cheapest 7-seat EVs that exist",
    excerpt:
      "Are there 7-seater electric cars under ₹15 lakh in India? The honest 2026 answer, the cheapest 7-seat EVs available (from ~₹18 lakh), and the best spacious 5-seat EVs under ₹15 lakh instead.",
    category: "Buying Guide",
    categorySlug: "buying-guide",
    readTime: "6 min",
    date: "Jun 14, 2026",
    accent: "#26E0C4",
    related: ["best-electric-cars-under-15-lakh-india", "best-electric-cars-india-2026", "cost-of-owning-an-electric-car-in-india", "how-to-choose-first-ev-india"],
  },
  {
    slug: "electric-cars-with-sunroof-under-15-lakh-india",
    title: "Electric Cars With Sunroof Under ₹15 Lakh in India (2026)",
    subtitle: "Which EVs offer a real sunroof or glass roof in this budget",
    excerpt:
      "Want an electric car with a sunroof under ₹15 lakh in India? Which EVs offer a real opening sunroof vs a fixed glass roof in 2026 — and which variants actually stay under the ₹15 lakh mark.",
    category: "Buying Guide",
    categorySlug: "buying-guide",
    readTime: "6 min",
    date: "Jun 13, 2026",
    accent: "#26E0C4",
    related: ["best-electric-cars-under-15-lakh-india", "best-electric-cars-india-2026", "cost-of-owning-an-electric-car-in-india", "how-to-choose-first-ev-india"],
  },
  {
    slug: "best-electric-cars-under-15-lakh-india",
    title: "Best Electric Cars Under ₹15 Lakh in India (2026)",
    subtitle: "Seven EVs that make the switch genuinely affordable",
    excerpt:
      "From the sub-₹7-lakh Tata Tiago EV to feature-loaded compact SUVs, here are the best electric cars under ₹15 lakh in India in 2026 — compared on range, price, battery and real-world fit.",
    category: "Buying Guide",
    categorySlug: "buying-guide",
    readTime: "9 min",
    date: "Jun 8, 2026",
    updated: "Jun 21, 2026",
    accent: "#26E0C4",
    related: ["how-to-choose-first-ev-india", "petrol-vs-electric-5-year-cost-india", "real-world-range-vs-arai-india", "ev-subsidies-road-tax-by-state-india-2026"],
    hiTitle: "भारत में ₹15 लाख से कम की सबसे अच्छी इलेक्ट्रिक कारें (2026)",
    hiSubtitle: "सात EV जो स्विच करना सचमुच किफ़ायती बनाती हैं",
    hiExcerpt:
      "₹7 लाख से कम की Tata Tiago EV से लेकर फ़ीचर-भरपूर कॉम्पैक्ट SUV तक, यहाँ 2026 में भारत में ₹15 लाख से कम की सबसे अच्छी इलेक्ट्रिक कारें हैं — रेंज, कीमत, बैटरी और असली फिट पर तुलना।",
  },

  {
    slug: "best-electric-motorcycles-india-2026",
    title: "Best Electric Motorcycles in India 2026: Price, Range & Picks",
    subtitle: "Seven electric bikes — from commuter to flagship — compared",
    excerpt:
      "Electric motorcycles in India now span ₹90,000 commuters to ₹4-lakh performance machines. Here are the best electric bikes in India in 2026 — Ola Roadster X, Revolt RV400, Oben Rorr, Tork Kratos, Matter Aera and Ultraviolette — compared on price, range and real-world fit.",
    category: "Buying Guide",
    categorySlug: "buying-guide",
    readTime: "9 min",
    date: "Jun 10, 2026",
    accent: "#26E0C4",
    related: ["top-5-electric-scooters-india-2026", "how-to-choose-first-ev-india", "ev-subsidies-road-tax-by-state-india-2026", "real-world-range-vs-arai-india"],
    hiTitle: "भारत में 2026 की सबसे अच्छी इलेक्ट्रिक मोटरसाइकिलें: कीमत, रेंज और पसंद",
    hiSubtitle: "सात इलेक्ट्रिक बाइक — कम्यूटर से फ्लैगशिप तक — तुलना",
    hiExcerpt:
      "भारत में इलेक्ट्रिक मोटरसाइकिलें अब ₹90,000 के कम्यूटर से लेकर ₹4 लाख की परफ़ॉर्मेंस मशीनों तक फैली हैं। यहाँ 2026 में भारत की सबसे अच्छी इलेक्ट्रिक बाइक हैं — Ola Roadster X, Revolt RV400, Oben Rorr, Tork Kratos, Matter Aera और Ultraviolette — कीमत, रेंज और असली फिट पर तुलना।",
  },

  {
    slug: "ev-charging-apartments-housing-societies-india",
    title: "EV Charging in Apartments in India: Rules, Rights & How to Set It Up",
    subtitle: "RWA permissions, wiring, billing and what the law now says",
    excerpt:
      "Living in a flat doesn't mean you can't charge an EV. Here's how to install a charger in an apartment or housing society in India — the rules, your rights, the costs and the paperwork.",
    category: "Charging",
    categorySlug: "charging",
    readTime: "9 min",
    date: "Jun 10, 2026",
    accent: "#C6F94E",
    related: ["home-ev-charging-cost-india", "ev-charging-infrastructure-india", "india-ev-charging-network-2026", "how-to-choose-first-ev-india"],
    hiTitle: "भारत में अपार्टमेंट में EV चार्जिंग: नियम, अधिकार और सेटअप कैसे करें",
    hiSubtitle: "RWA अनुमति, वायरिंग, बिलिंग और अब कानून क्या कहता है",
    hiExcerpt:
      "फ्लैट में रहने का मतलब यह नहीं कि आप EV चार्ज नहीं कर सकते। यहाँ बताया गया है कि भारत में अपार्टमेंट या हाउसिंग सोसाइटी में चार्जर कैसे लगवाएँ — नियम, आपके अधिकार, लागत और कागज़ी कार्रवाई।",
  },

  {
    slug: "ev-insurance-india",
    title: "Electric Car Insurance in India: Costs, Add-Ons & What's Actually Covered",
    subtitle: "Premiums, the battery question and the add-ons that matter",
    excerpt:
      "EV insurance in India works differently from petrol-car cover — a cheaper third-party rate but a pricier own-damage side, all because of the battery. Here's what electric car insurance costs in 2026 and the add-ons you shouldn't skip.",
    category: "Cost & Ownership",
    categorySlug: "cost-ownership",
    readTime: "9 min",
    date: "Jun 11, 2026",
    accent: "#FFC247",
    related: ["petrol-vs-electric-5-year-cost-india", "ev-maintenance-cost-india", "ev-resale-value-battery-health-india", "how-to-choose-first-ev-india"],
    hiTitle: "भारत में इलेक्ट्रिक कार बीमा: लागत, ऐड-ऑन और असल में क्या कवर होता है",
    hiSubtitle: "प्रीमियम, बैटरी का सवाल और वे ऐड-ऑन जो मायने रखते हैं",
    hiExcerpt:
      "भारत में EV बीमा पेट्रोल-कार कवर से अलग काम करता है — थर्ड-पार्टी दर सस्ती, पर ओन-डैमेज पक्ष महँगा, और इसकी वजह है बैटरी। यहाँ जानिए 2026 में इलेक्ट्रिक कार बीमा की लागत कितनी है और कौन-से ऐड-ऑन नहीं छोड़ने चाहिए।",
  },

  {
    slug: "electric-car-loan-india",
    title: "Electric Car Loan in India: Interest Rates, EMI & 80EEB Tax Benefit (2026)",
    subtitle: "Green car loans, what you'll pay each month, and the tax catch",
    excerpt:
      "How does an electric car loan work in India? A 2026 guide to green car loan interest rates, how much banks finance, EMIs and tenure, and the Section 80EEB tax benefit most buyers get wrong.",
    category: "Cost & Ownership",
    categorySlug: "cost-ownership",
    readTime: "9 min",
    date: "Jun 12, 2026",
    accent: "#FFC247",
    related: ["petrol-vs-electric-5-year-cost-india", "ev-insurance-india", "ev-subsidies-road-tax-by-state-india-2026", "how-to-choose-first-ev-india"],
    hiTitle: "भारत में इलेक्ट्रिक कार लोन: ब्याज दरें, EMI और 80EEB टैक्स लाभ (2026)",
    hiSubtitle: "ग्रीन कार लोन, हर महीने कितना देंगे, और टैक्स वाली पेच",
    hiExcerpt:
      "भारत में इलेक्ट्रिक कार लोन कैसे काम करता है? 2026 की यह गाइड बताती है ग्रीन कार लोन ब्याज दरें, बैंक कितना फाइनेंस करते हैं, EMI और अवधि, और Section 80EEB टैक्स लाभ जिसे ज़्यादातर खरीदार ग़लत समझते हैं।",
  },

  {
    slug: "ev-charger-types-connectors-india",
    title: "EV Charger Types & Connectors in India (2026): Type 2, CCS2 & GB/T Explained",
    subtitle: "AC vs DC, the plugs your EV uses, and which charger is which",
    excerpt:
      "What are the different EV charger types in India? A 2026 guide to AC vs DC charging and the connectors — Type 2, CCS2, CHAdeMO, GB/T and the new LECCS for scooters — so you always plug into the right one.",
    category: "Charging",
    categorySlug: "charging",
    readTime: "8 min",
    date: "Jun 13, 2026",
    accent: "#C6F94E",
    related: ["home-ev-charging-cost-india", "ev-charging-infrastructure-india", "india-ev-charging-network-2026", "ev-charging-apartments-housing-societies-india"],
    hiTitle: "भारत में EV चार्जर के प्रकार और कनेक्टर (2026): Type 2, CCS2 और GB/T समझाए गए",
    hiSubtitle: "AC बनाम DC, आपकी EV जो प्लग इस्तेमाल करती है, और कौन-सा चार्जर कौन-सा है",
    hiExcerpt:
      "भारत में EV चार्जर के अलग-अलग प्रकार क्या हैं? 2026 की यह गाइड AC बनाम DC चार्जिंग और कनेक्टरों — Type 2, CCS2, CHAdeMO, GB/T और स्कूटरों के लिए नया LECCS — को समझाती है, ताकि आप हमेशा सही चार्जर में प्लग करें।",
  },

  {
    slug: "electric-car-vs-cng-car-india",
    title: "Electric Car vs CNG Car in India (2026): Which Should You Buy?",
    subtitle: "Running cost, refuelling, GST and real-world fit — honestly compared",
    excerpt:
      "Electric car vs CNG car is the value buyer's real dilemma in India. This 2026 guide compares EVs and CNG cars on upfront price, running cost, GST, refuelling, boot space and resale to help you choose.",
    category: "Buying Guide",
    categorySlug: "buying-guide",
    readTime: "9 min",
    date: "Jun 14, 2026",
    accent: "#26E0C4",
    related: ["how-to-choose-first-ev-india", "petrol-vs-electric-5-year-cost-india", "electric-car-vs-hybrid-india", "home-ev-charging-cost-india"],
    hiTitle: "भारत में इलेक्ट्रिक कार बनाम CNG कार (2026): कौन-सी खरीदें?",
    hiSubtitle: "रनिंग कॉस्ट, रिफ्यूलिंग, GST और असली फिट — ईमानदारी से तुलना",
    hiExcerpt:
      "इलेक्ट्रिक कार बनाम CNG कार भारत में किफ़ायती खरीदार की असली दुविधा है। यह 2026 गाइड EV और CNG कारों की तुलना अपफ्रंट कीमत, रनिंग कॉस्ट, GST, रिफ्यूलिंग, बूट स्पेस और रीसेल पर करती है ताकि आप सही चुनाव कर सकें।",
  },

  {
    slug: "ev-charging-time-india",
    title: "EV Charging Time in India (2026): How Long Does It Take to Charge an Electric Car?",
    subtitle: "AC vs DC times, the 10–80% rule and what really decides the wait",
    excerpt:
      "How long does it take to charge an electric car in India? A 2026 guide to EV charging time — home AC vs DC fast charging, why the 10–80% window matters, scooter vs car times, and the factors that speed it up or slow it down.",
    category: "Charging",
    categorySlug: "charging",
    readTime: "8 min",
    date: "Jun 15, 2026",
    accent: "#C6F94E",
    related: ["ev-charger-types-connectors-india", "home-ev-charging-cost-india", "ev-charging-infrastructure-india", "real-world-range-vs-arai-india"],
    hiTitle: "भारत में EV चार्जिंग समय (2026): इलेक्ट्रिक कार चार्ज होने में कितना समय लगता है?",
    hiSubtitle: "AC बनाम DC समय, 10–80% का नियम, और असल में इंतज़ार क्या तय करता है",
    hiExcerpt:
      "भारत में इलेक्ट्रिक कार को चार्ज होने में कितना समय लगता है? 2026 की यह गाइड EV चार्जिंग समय समझाती है — होम AC बनाम DC फ़ास्ट चार्जिंग, 10–80% विंडो क्यों मायने रखती है, स्कूटर बनाम कार के समय, और कौन-से कारक इसे तेज़ या धीमा करते हैं।",
  },

  {
    slug: "ev-battery-replacement-cost-india",
    title: "EV Battery Replacement Cost in India (2026): What It Really Costs",
    subtitle: "Per-kWh prices, warranty cover and why most owners never pay",
    excerpt:
      "How much does it cost to replace an EV battery in India? A 2026 guide to real replacement prices for cars and scooters, the 8-year warranty that usually covers you, and why most owners never see the bill.",
    category: "Battery & Tech",
    categorySlug: "battery-tech",
    readTime: "9 min",
    date: "Jun 16, 2026",
    accent: "#8B7BFF",
    related: ["ev-battery-lifespan-india", "ev-battery-life-india-weather", "ev-resale-value-battery-health-india", "petrol-vs-electric-5-year-cost-india"],
    hiTitle: "भारत में EV बैटरी रिप्लेसमेंट लागत (2026): असल में कितना खर्च आता है",
    hiSubtitle: "प्रति-kWh कीमतें, वारंटी कवर और ज़्यादातर मालिक क्यों कभी नहीं चुकाते",
    hiExcerpt:
      "भारत में EV बैटरी बदलवाने में कितना खर्च आता है? 2026 की यह गाइड कारों और स्कूटरों के लिए असली रिप्लेसमेंट कीमतें, 8 साल की वारंटी जो आमतौर पर आपको कवर करती है, और ज़्यादातर मालिक यह बिल क्यों कभी नहीं देखते — सब समझाती है।",
  },

  {
    slug: "used-electric-car-india",
    title: "Buying a Used Electric Car in India (2026): Checklist, Battery Health & Costs",
    subtitle: "Battery State of Health, warranty transfer and the red flags to walk away from",
    excerpt:
      "Thinking of buying a used electric car in India? A 2026 buyer's guide to second-hand EVs — how to check battery State of Health, transfer the 8-year warranty, spot flood damage, and judge whether a used EV is really a bargain.",
    category: "Buying Guide",
    categorySlug: "buying-guide",
    readTime: "9 min",
    date: "Jun 17, 2026",
    accent: "#26E0C4",
    related: ["ev-resale-value-battery-health-india", "ev-battery-replacement-cost-india", "petrol-vs-electric-5-year-cost-india", "how-to-choose-first-ev-india"],
    hiTitle: "भारत में पुरानी इलेक्ट्रिक कार खरीदना (2026): चेकलिस्ट, बैटरी हेल्थ और लागत",
    hiSubtitle: "बैटरी State of Health, वारंटी ट्रांसफर और वे रेड फ्लैग जिन पर लौट जाना चाहिए",
    hiExcerpt:
      "भारत में पुरानी इलेक्ट्रिक कार खरीदने की सोच रहे हैं? सेकंड-हैंड EV की 2026 बायर गाइड — बैटरी State of Health कैसे जाँचें, 8 साल की वारंटी कैसे ट्रांसफर करें, बाढ़ क्षति कैसे पहचानें, और क्या पुरानी EV सचमुच फ़ायदे का सौदा है।",
  },

  {
    slug: "electric-scooter-vs-petrol-scooter-india",
    title: "Electric Scooter vs Petrol Scooter in India (2026): Which Should You Buy?",
    subtitle: "Running cost, price, range, charging and maintenance — honestly compared",
    excerpt:
      "Electric scooter vs petrol scooter is the real question for most Indian commuters. This 2026 guide compares the two on upfront price, running cost per km, range, charging vs refuelling, maintenance, subsidies and resale — so you can pick the right one for how you actually ride.",
    category: "Buying Guide",
    categorySlug: "buying-guide",
    readTime: "9 min",
    date: "Jun 18, 2026",
    accent: "#26E0C4",
    related: ["top-5-electric-scooters-india-2026", "petrol-vs-electric-5-year-cost-india", "ev-subsidies-road-tax-by-state-india-2026", "how-to-choose-first-ev-india"],
    hiTitle: "भारत में इलेक्ट्रिक स्कूटर बनाम पेट्रोल स्कूटर (2026): कौन-सा खरीदें?",
    hiSubtitle: "रनिंग कॉस्ट, कीमत, रेंज, चार्जिंग और मेंटेनेंस — ईमानदारी से तुलना",
    hiExcerpt:
      "ज़्यादातर भारतीय कम्यूटरों के लिए असली सवाल इलेक्ट्रिक स्कूटर बनाम पेट्रोल स्कूटर है। यह 2026 गाइड दोनों की तुलना अपफ्रंट कीमत, प्रति-किमी रनिंग कॉस्ट, रेंज, चार्जिंग बनाम रिफ्यूलिंग, मेंटेनेंस, सब्सिडी और रीसेल पर करती है — ताकि आप अपनी असली राइडिंग के अनुसार सही चुन सकें।",
  },

  {
    slug: "longest-range-electric-cars-india-2026",
    title: "Longest Range Electric Cars in India 2026: Which EV Goes Farthest?",
    subtitle: "The highest-range EVs by claimed km — and what you'll really get",
    excerpt:
      "Which electric car has the longest range in India? A 2026 leaderboard of the highest-range EVs — from the Mahindra BE 6 and Tata Harrier EV to the BYD Seal and Mercedes EQS — with claimed figures, real-world range and how much range you actually need.",
    category: "Range & Efficiency",
    categorySlug: "range-efficiency",
    readTime: "10 min",
    date: "Jun 19, 2026",
    accent: "#34D399",
    featured: true,
    related: ["real-world-range-vs-arai-india", "best-electric-cars-india-2026", "ev-battery-life-india-weather", "how-to-choose-first-ev-india"],
    hiTitle: "भारत में 2026 की सबसे लंबी रेंज वाली इलेक्ट्रिक कारें: कौन-सी EV सबसे दूर जाती है?",
    hiSubtitle: "दावा किए गए किमी के हिसाब से सबसे ज़्यादा रेंज वाली EV — और असल में आपको क्या मिलेगा",
    hiExcerpt:
      "भारत में किस इलेक्ट्रिक कार की रेंज सबसे लंबी है? 2026 की यह लीडरबोर्ड सबसे ज़्यादा रेंज वाली EV दिखाती है — Mahindra BE 6 और Tata Harrier EV से लेकर BYD Seal और Mercedes EQS तक — दावा किए गए आँकड़े, असल रेंज और आपको असल में कितनी रेंज चाहिए, सब के साथ।",
  },

  {
    slug: "lfp-vs-nmc-ev-battery-india",
    title: "LFP vs NMC EV Battery in India (2026): Which Battery Type Is Better?",
    subtitle: "Energy density, safety, lifespan and which EVs use which chemistry",
    excerpt:
      "LFP vs NMC is the EV battery question that decides range, price, safety and how well a pack survives Indian heat. A 2026 guide to the two main EV battery types in India — what each does well, which cars and scooters use which, and what LMFP and sodium-ion change next.",
    category: "Battery & Tech",
    categorySlug: "battery-tech",
    readTime: "9 min",
    date: "Jun 20, 2026",
    accent: "#8B7BFF",
    related: ["ev-battery-lifespan-india", "ev-battery-life-india-weather", "ev-battery-replacement-cost-india", "solid-state-batteries-2026"],
    hiTitle: "भारत में LFP बनाम NMC EV बैटरी (2026): कौन-सा बैटरी प्रकार बेहतर है?",
    hiSubtitle: "एनर्जी डेंसिटी, सुरक्षा, लाइफ़स्पैन और कौन-सी EV कौन-सी केमिस्ट्री इस्तेमाल करती है",
    hiExcerpt:
      "LFP बनाम NMC वह EV बैटरी सवाल है जो रेंज, कीमत, सुरक्षा और एक पैक भारतीय गर्मी में कितना टिकेगा — सब तय करता है। 2026 की यह गाइड भारत के दो मुख्य EV बैटरी प्रकार समझाती है — हर एक किसमें अच्छा है, कौन-सी कारें और स्कूटर कौन-सा इस्तेमाल करते हैं, और LMFP व सोडियम-आयन आगे क्या बदलते हैं।",
  },

  {
    slug: "battery-as-a-service-baas-ev-india",
    title: "Battery as a Service (BaaS) for EVs in India (2026): How It Works & Is It Worth It?",
    subtitle: "Battery rental, per-km costs and the maths that decides if BaaS saves you money",
    excerpt:
      "What is Battery as a Service (BaaS) for electric cars in India? A 2026 guide to how EV battery subscription works, real per-km rental costs from Tata, MG, Maruti and Citroen, the hidden minimum-km catch, and how to work out whether BaaS actually saves you money.",
    category: "Cost & Ownership",
    categorySlug: "cost-ownership",
    readTime: "9 min",
    date: "Jun 21, 2026",
    accent: "#FFC247",
    related: ["cost-of-owning-an-electric-car-in-india", "ev-battery-replacement-cost-india", "ev-resale-value-battery-health-india", "best-electric-cars-under-15-lakh-india"],
    hiTitle: "भारत में EV के लिए बैटरी ऐज़ अ सर्विस (BaaS) (2026): यह कैसे काम करती है और क्या फ़ायदेमंद है?",
    hiSubtitle: "बैटरी किराया, प्रति-किमी लागत और वह गणित जो तय करता है कि BaaS से बचत होती है या नहीं",
    hiExcerpt:
      "इलेक्ट्रिक कारों के लिए बैटरी ऐज़ अ सर्विस (BaaS) क्या है? 2026 की यह गाइड बताती है कि EV बैटरी सब्सक्रिप्शन कैसे काम करता है, Tata, MG, Maruti और Citroen की असली प्रति-किमी किराया दरें, छिपा हुआ न्यूनतम-किमी पेच, और कैसे पता करें कि BaaS से सचमुच पैसा बचता है या नहीं।",
  },

  {
    slug: "electric-car-rain-floods-india",
    title: "Can You Drive an Electric Car in the Rain & Floods? EV Monsoon Safety in India (2026)",
    subtitle: "IP ratings, wading depth, charging in the wet and the real limits",
    excerpt:
      "Are electric cars safe to drive in the rain and through floods in India? A 2026 guide to EV monsoon safety — what IP67 really means, how deep an EV can wade, why there's no electrocution risk, whether you can charge in the rain, and when to stop.",
    category: "Battery & Tech",
    categorySlug: "battery-tech",
    readTime: "9 min",
    date: "Jun 25, 2026",
    accent: "#8B7BFF",
    related: ["ev-battery-life-india-weather", "ev-insurance-india", "home-ev-charging-cost-india", "how-to-choose-first-ev-india"],
    hiTitle: "क्या आप बारिश और बाढ़ में इलेक्ट्रिक कार चला सकते हैं? भारत में EV मानसून सुरक्षा (2026)",
    hiSubtitle: "IP रेटिंग, वेडिंग डेप्थ, गीले में चार्जिंग और असली सीमाएँ",
    hiExcerpt:
      "क्या भारत में बारिश और बाढ़ में इलेक्ट्रिक कार चलाना सुरक्षित है? 2026 की यह गाइड EV मानसून सुरक्षा समझाती है — IP67 का असल मतलब, एक EV कितने गहरे पानी में चल सकती है, बिजली के झटके का जोखिम क्यों नहीं, क्या आप बारिश में चार्ज कर सकते हैं, और कब रुकना चाहिए।",
  },

  // ── News (May 2026) ──────────────────────────────────────────
  {
    slug: "tata-sierra-ev-launch-2026",
    title: "Tata Sierra EV Interior Revealed Ahead of June 30 Launch: Triple-Screen Cabin, AWD & Price",
    subtitle: "New teaser shows an ivory triple-screen cabin and ADAS — AWD (QWD) confirmed, launch set for June 30",
    excerpt:
      "Tata's latest teaser has revealed the Sierra EV's interior for the first time — an ivory dual-tone cabin with a triple-screen panoramic dashboard, a panoramic sunroof and ADAS — days before its June 30, 2026 launch. With AWD (QWD) confirmed, expected Harrier EV hardware up to 75 kWh, ~500–550 km range and an estimated ₹18–25 lakh price, here's everything confirmed so far.",
    category: "Market News",
    categorySlug: "market-news",
    readTime: "5 min",
    date: "Jun 25, 2026",
    accent: "#60A5FA",
    news: true,
    related: ["india-ev-sales-fy2026", "maruti-e-vitara-first-ev-launch", "tesla-model-y-price-cut-india-2026", "how-to-choose-first-ev-india"],
    hiTitle: "Tata Sierra EV का इंटीरियर रिवील, 30 जून लॉन्च से पहले: ट्रिपल-स्क्रीन केबिन, AWD और कीमत",
    hiSubtitle: "नए टीज़र में आइवरी ट्रिपल-स्क्रीन केबिन और ADAS दिखे — AWD (QWD) की पुष्टि, लॉन्च 30 जून को",
    hiExcerpt:
      "Tata के नए टीज़र ने 30 जून 2026 के लॉन्च से ठीक पहले Sierra EV का इंटीरियर पहली बार दिखाया है — आइवरी ड्यूल-टोन केबिन, ट्रिपल-स्क्रीन पैनोरमिक डैशबोर्ड, पैनोरमिक सनरूफ़ और ADAS। AWD (QWD) की पुष्टि, अपेक्षित Harrier EV हार्डवेयर (75 kWh तक), ~500–550 km रेंज और अनुमानित ₹18–25 लाख कीमत के साथ, अब तक पुष्ट हर जानकारी यहाँ है।",
  },
  {
    slug: "india-ev-sales-fy2026",
    title: "India EV Sales Cross 2.45 Million in FY2026",
    subtitle: "What the record numbers mean for buyers",
    excerpt:
      "EV sales grew about 25% to 2.45 million units in FY2026, with electric cars up 84%. We break down the FADA data and what India's broadening EV market means for you.",
    category: "Market News",
    categorySlug: "market-news",
    readTime: "6 min",
    date: "May 8, 2026",
    accent: "#60A5FA",
    news: true,
    related: ["maruti-e-vitara-first-ev-launch", "tesla-model-y-price-cut-india-2026", "india-ev-charging-network-2026", "how-to-choose-first-ev-india"],
    hiTitle: "FY2026 में भारत की EV बिक्री 24.5 लाख यूनिट के पार",
    hiSubtitle: "रिकॉर्ड आंकड़े खरीदारों के लिए क्या मायने रखते हैं",
    hiExcerpt:
      "FY2026 में EV बिक्री लगभग 25% बढ़कर 24.5 लाख यूनिट हो गई, जिसमें इलेक्ट्रिक कारें 84% ऊपर रहीं। हम FADA डेटा और भारत के बढ़ते EV बाज़ार का आपके लिए मतलब समझाते हैं।",
  },
  {
    slug: "maruti-e-vitara-first-ev-launch",
    title: "Maruti e Vitara: India's Biggest Carmaker Goes Electric",
    subtitle: "What its first EV (and BaaS pricing) means",
    excerpt:
      "Maruti Suzuki's first EV, the e Vitara, brings a battery-as-a-service option to the mass market. Here's why India's largest carmaker going electric matters for every buyer.",
    category: "Market News",
    categorySlug: "market-news",
    readTime: "6 min",
    date: "May 12, 2026",
    accent: "#60A5FA",
    news: true,
    related: ["india-ev-sales-fy2026", "how-to-choose-first-ev-india", "ev-resale-value-battery-health-india", "tesla-model-y-price-cut-india-2026"],
    hiTitle: "Maruti e Vitara: भारत की सबसे बड़ी कारमेकर इलेक्ट्रिक हुई",
    hiSubtitle: "इसकी पहली EV (और BaaS कीमत) का क्या मतलब है",
    hiExcerpt:
      "Maruti Suzuki की पहली EV, e Vitara, मास मार्केट में बैटरी-ऐज़-अ-सर्विस विकल्प लाती है। जानिए भारत की सबसे बड़ी कारमेकर का इलेक्ट्रिक होना हर खरीदार के लिए क्यों मायने रखता है।",
  },
  {
    slug: "india-ev-charging-network-2026",
    title: "India's Charging Network Nears 30,000 Stations",
    subtitle: "Growth, reliability and a UPI-style fix",
    excerpt:
      "India's public charging network is scaling fast — but reliability is still the pain point. Here's the latest on PM E-Drive chargers and the proposed UPI-style payment system.",
    category: "Market News",
    categorySlug: "market-news",
    readTime: "6 min",
    date: "May 20, 2026",
    accent: "#60A5FA",
    news: true,
    related: ["ev-charging-infrastructure-india", "home-ev-charging-cost-india", "india-ev-sales-fy2026", "real-world-range-vs-arai-india"],
    hiTitle: "भारत का चार्जिंग नेटवर्क 30,000 स्टेशनों के करीब",
    hiSubtitle: "विकास, विश्वसनीयता और एक UPI-जैसा समाधान",
    hiExcerpt:
      "भारत का सार्वजनिक चार्जिंग नेटवर्क तेज़ी से बढ़ रहा है — लेकिन विश्वसनीयता अब भी सबसे बड़ी समस्या है। यहाँ PM E-Drive चार्जर और प्रस्तावित UPI-जैसी भुगतान प्रणाली पर ताज़ा जानकारी है।",
  },
  {
    slug: "tesla-model-y-price-cut-india-2026",
    title: "Tesla Cuts Model Y Price in India by ₹9 Lakh",
    subtitle: "Why import duty still keeps it premium",
    excerpt:
      "Tesla slashed the Model Y's India price by about ₹9 lakh in May 2026. We unpack the new pricing, the import-duty story, and how it stacks up against home-grown EVs.",
    category: "Market News",
    categorySlug: "market-news",
    readTime: "6 min",
    date: "May 30, 2026",
    accent: "#60A5FA",
    news: true,
    related: ["india-ev-sales-fy2026", "ev-subsidies-road-tax-by-state-india-2026", "maruti-e-vitara-first-ev-launch", "india-ev-charging-network-2026"],
    hiTitle: "Tesla ने भारत में Model Y की कीमत ₹9 लाख घटाई",
    hiSubtitle: "इम्पोर्ट ड्यूटी इसे अब भी प्रीमियम क्यों रखती है",
    hiExcerpt:
      "Tesla ने मई 2026 में Model Y की भारत कीमत लगभग ₹9 लाख घटाई। हम नई कीमत, इम्पोर्ट-ड्यूटी की कहानी, और यह घरेलू EVs के मुकाबले कैसी टिकती है — सब समझाते हैं।",
  },

  // ── News (June 2026) ─────────────────────────────────────────
  {
    slug: "electric-two-wheeler-sales-record-may-2026",
    title: "Electric Two-Wheeler Sales Near Record High in May 2026",
    subtitle: "TVS leads, Bajaj and Ather surge as petrol prices bite",
    excerpt:
      "India retailed 1.7 lakh electric two-wheelers in May 2026 — up 63% year-on-year and the segment's second-best month ever. TVS led, with Bajaj, Ather and Hero Vida all posting big gains. Here's the full breakdown.",
    category: "Market News",
    categorySlug: "market-news",
    readTime: "5 min",
    date: "Jun 6, 2026",
    accent: "#60A5FA",
    news: true,
    related: ["tata-ev-sales-cross-10000-may-2026", "top-5-electric-scooters-india-2026", "ev-subsidies-road-tax-by-state-india-2026", "how-to-choose-first-ev-india"],
    hiTitle: "मई 2026 में इलेक्ट्रिक टू-व्हीलर बिक्री रिकॉर्ड के करीब",
    hiSubtitle: "TVS आगे, पेट्रोल की कीमतें बढ़ने से Bajaj और Ather में उछाल",
    hiExcerpt:
      "मई 2026 में भारत में 1.7 लाख इलेक्ट्रिक टू-व्हीलर बिके — सालाना 63% की बढ़त और सेगमेंट का अब तक का दूसरा सबसे अच्छा महीना। TVS सबसे आगे रहा, जबकि Bajaj, Ather और Hero Vida ने बड़ी बढ़त दर्ज की। यहाँ पूरा ब्योरा है।",
  },
  {
    slug: "tata-ev-sales-cross-10000-may-2026",
    title: "Tata EV Sales Cross 10,000 in a Month for the First Time",
    subtitle: "Record May as Tata edges past Mahindra in the sales race",
    excerpt:
      "Tata Motors sold over 10,500 EVs in May 2026 — its first month above 10,000 — as India's electric-car market jumped on the back of rising petrol, diesel and CNG prices. Here's what the record numbers mean.",
    category: "Market News",
    categorySlug: "market-news",
    readTime: "5 min",
    date: "Jun 6, 2026",
    accent: "#60A5FA",
    news: true,
    related: ["electric-two-wheeler-sales-record-may-2026", "india-ev-sales-fy2026", "tata-sierra-ev-launch-2026", "petrol-vs-electric-5-year-cost-india"],
    hiTitle: "Tata की EV बिक्री पहली बार एक महीने में 10,000 के पार",
    hiSubtitle: "रिकॉर्ड मई, Tata बिक्री की दौड़ में Mahindra से आगे",
    hiExcerpt:
      "Tata Motors ने मई 2026 में 10,500 से अधिक EV बेचीं — पहली बार किसी महीने में 10,000 से ऊपर — क्योंकि पेट्रोल, डीज़ल और CNG की बढ़ती कीमतों ने भारत के इलेक्ट्रिक-कार बाज़ार को गति दी। जानिए रिकॉर्ड आंकड़ों का मतलब।",
  },
  {
    slug: "tata-ev-discounts-june-2026",
    title: "Tata Offers Up to ₹3.35 Lakh Off on Its EVs in June 2026",
    subtitle: "Harrier EV leads with benefits of up to ₹2.75 lakh",
    excerpt:
      "Tata Motors is running its biggest EV offers of the year, with discounts of up to ₹3.35 lakh across the Nexon, Punch, Tiago, Curvv and Harrier EVs in June 2026. Here's the model-by-model breakdown and what to check before you buy.",
    category: "Market News",
    categorySlug: "market-news",
    readTime: "5 min",
    date: "Jun 7, 2026",
    accent: "#60A5FA",
    news: true,
    related: ["tata-ev-sales-cross-10000-may-2026", "petrol-vs-electric-5-year-cost-india", "ev-subsidies-road-tax-by-state-india-2026", "how-to-choose-first-ev-india"],
    hiTitle: "Tata जून 2026 में अपनी EVs पर ₹3.35 लाख तक की छूट दे रही है",
    hiSubtitle: "Harrier EV सबसे आगे, ₹2.75 लाख तक के फ़ायदे",
    hiExcerpt:
      "Tata Motors साल की अपनी सबसे बड़ी EV पेशकश चला रही है, जिसमें जून 2026 में Nexon, Punch, Tiago, Curvv और Harrier EV पर ₹3.35 लाख तक की छूट है। यहाँ मॉडल-दर-मॉडल ब्योरा और खरीदने से पहले जाँचने लायक बातें हैं।",
  },
  {
    slug: "ultraviolette-tesseract-delayed-2027",
    title: "Ultraviolette Tesseract Pushed to January 2027",
    subtitle: "Early bookings keep the ₹1.45 lakh launch price",
    excerpt:
      "Ultraviolette has delayed its radar-equipped Tesseract electric scooter to January 2027 — its third slip since the 2025 unveil — but has promised to honour the ₹1.45 lakh introductory price for early reservation holders. Here's what changed and why.",
    category: "Market News",
    categorySlug: "market-news",
    readTime: "5 min",
    date: "Jun 7, 2026",
    accent: "#60A5FA",
    news: true,
    related: ["top-5-electric-scooters-india-2026", "electric-two-wheeler-sales-record-may-2026", "how-to-choose-first-ev-india", "real-world-range-vs-arai-india"],
    hiTitle: "Ultraviolette Tesseract जनवरी 2027 तक टली",
    hiSubtitle: "शुरुआती बुकिंग पर ₹1.45 लाख की लॉन्च कीमत बरकरार",
    hiExcerpt:
      "Ultraviolette ने अपनी रडार-युक्त Tesseract इलेक्ट्रिक स्कूटर को जनवरी 2027 तक टाल दिया है — 2025 की पहली झलक के बाद यह तीसरी देरी है — लेकिन शुरुआती बुकिंग करने वालों के लिए ₹1.45 लाख की इंट्रोडक्टरी कीमत बनाए रखने का वादा किया है। जानिए क्या बदला और क्यों।",
  },
  {
    slug: "tata-tiago-ev-2026-update-launch",
    title: "2026 Tata Tiago EV Launched From ₹6.99 Lakh",
    subtitle: "A full generation update — six airbags, faster charging, new cabin",
    excerpt:
      "Tata has launched the 2026 Tiago EV as a generation update, not a facelift — priced from ₹6.99 lakh (or ₹4.69 lakh on its battery-as-a-service plan). It gets six airbags as standard, a redesigned cabin, two battery packs with up to 285 km of range, and 40% faster charging. Here's everything that's new.",
    category: "Market News",
    categorySlug: "market-news",
    readTime: "5 min",
    date: "Jun 9, 2026",
    accent: "#60A5FA",
    news: true,
    related: ["best-electric-cars-under-15-lakh-india", "tata-ev-discounts-june-2026", "india-ev-sales-fy2026", "how-to-choose-first-ev-india"],
    hiTitle: "2026 Tata Tiago EV ₹6.99 लाख से लॉन्च",
    hiSubtitle: "पूरा जनरेशन अपडेट — छह एयरबैग, तेज़ चार्जिंग, नया केबिन",
    hiExcerpt:
      "Tata ने 2026 Tiago EV को महज़ फेसलिफ्ट नहीं, बल्कि एक पूरे जनरेशन अपडेट के रूप में लॉन्च किया है — कीमत ₹6.99 लाख से (या बैटरी-ऐज़-अ-सर्विस प्लान पर ₹4.69 लाख से)। इसमें मानक रूप से छह एयरबैग, नया केबिन, दो बैटरी पैक (285 km तक रेंज) और 40% तेज़ चार्जिंग मिलती है। यहाँ जानिए सब कुछ जो नया है।",
  },
  {
    slug: "ather-rizta-price-hike-june-2026",
    title: "Ather Hikes Rizta Prices; Now Starts at ₹1.21 Lakh",
    subtitle: "Family e-scooter is up to ₹4,000 dearer from June 1",
    excerpt:
      "Ather Energy has raised prices of its best-selling Rizta family scooter by ₹3,000–4,000, effective June 1, 2026. The four-variant lineup now spans ₹1.21–1.59 lakh (ex-showroom). Here's the variant-wise breakdown and what the hike means for buyers.",
    category: "Market News",
    categorySlug: "market-news",
    readTime: "4 min",
    date: "Jun 9, 2026",
    accent: "#60A5FA",
    news: true,
    related: ["top-5-electric-scooters-india-2026", "electric-two-wheeler-sales-record-may-2026", "ev-subsidies-road-tax-by-state-india-2026", "how-to-choose-first-ev-india"],
    hiTitle: "Ather ने Rizta की कीमतें बढ़ाईं; अब ₹1.21 लाख से शुरू",
    hiSubtitle: "1 जून से फैमिली ई-स्कूटर ₹4,000 तक महँगा",
    hiExcerpt:
      "Ather Energy ने अपनी सबसे ज़्यादा बिकने वाली Rizta फैमिली स्कूटर की कीमतें ₹3,000–4,000 बढ़ा दी हैं, जो 1 जून 2026 से लागू हैं। चार-वेरिएंट लाइनअप अब ₹1.21–1.59 लाख (एक्स-शोरूम) तक फैली है। यहाँ वेरिएंट-वार ब्योरा और खरीदारों के लिए इसका मतलब है।",
  },
  {
    slug: "tesla-hyderabad-experience-centre-june-2026",
    title: "Tesla Opens 5th India Centre in Hyderabad, Shows 2026 Model Y Lineup",
    subtitle: "HITEC City showroom debuts the Model Y L six-seater at ₹61.99 lakh",
    excerpt:
      "Tesla opened its fifth India experience centre in Hyderabad's HITEC City on June 17, 2026, joining outlets in Delhi, Gurugram, Mumbai and Bengaluru. It showcases the 2026 Model Y Premium RWD (₹50.89 lakh) and the new six-seat Model Y L (₹61.99 lakh, 681 km), with a free Wall Connector for orders before June 30. Here's what it means for Indian buyers.",
    category: "Market News",
    categorySlug: "market-news",
    readTime: "4 min",
    date: "Jun 18, 2026",
    accent: "#60A5FA",
    news: true,
    related: ["tesla-model-y-price-cut-india-2026", "tesla-electric-cars-india", "india-ev-charging-network-2026", "how-to-choose-first-ev-india"],
    hiTitle: "Tesla ने हैदराबाद में 5वाँ भारत केंद्र खोला, 2026 Model Y लाइनअप पेश",
    hiSubtitle: "HITEC City शोरूम में छह-सीट Model Y L ₹61.99 लाख से पेश",
    hiExcerpt:
      "Tesla ने 17 जून 2026 को हैदराबाद के HITEC City में अपना पाँचवाँ भारत एक्सपीरियंस सेंटर खोला, जो दिल्ली, गुड़गाँव, मुंबई और बेंगलुरु के केंद्रों में जुड़ गया। इसमें 2026 Model Y Premium RWD (₹50.89 लाख) और नई छह-सीट Model Y L (₹61.99 लाख, 681 km) पेश की गई हैं, और 30 जून से पहले ऑर्डर पर मुफ़्त Wall Connector मिलेगा। जानिए भारतीय खरीदारों के लिए इसका क्या मतलब है।",
  },
  {
    slug: "jsw-mg-1000-community-ev-chargers-2026",
    title: "JSW MG Becomes First Carmaker to Install 1,000 Community EV Chargers",
    subtitle: "470+ sites covered; three new EVs including a PHEV due in 2026",
    excerpt:
      "JSW MG Motor India says it is the first carmaker in the country to install 1,000 community EV chargers, spread across 470+ residential, hospital and campus sites. The company also confirmed three new electric vehicles for 2026, including its first plug-in hybrid. Here's why community charging matters.",
    category: "Market News",
    categorySlug: "market-news",
    readTime: "5 min",
    date: "Jun 10, 2026",
    accent: "#60A5FA",
    news: true,
    related: ["india-ev-charging-network-2026", "ev-charging-apartments-housing-societies-india", "mg-electric-cars", "home-ev-charging-cost-india"],
    hiTitle: "JSW MG बनी 1,000 कम्युनिटी EV चार्जर लगाने वाली पहली कारमेकर",
    hiSubtitle: "470+ साइटें कवर; 2026 में एक PHEV समेत तीन नई EV",
    hiExcerpt:
      "JSW MG Motor India का कहना है कि वह देश में 1,000 कम्युनिटी EV चार्जर लगाने वाली पहली कारमेकर है, जो 470+ रिहायशी, अस्पताल और कैंपस साइटों में फैले हैं। कंपनी ने 2026 के लिए तीन नई इलेक्ट्रिक वाहनों की भी पुष्टि की, जिनमें उसकी पहली प्लग-इन हाइब्रिड शामिल है। जानिए कम्युनिटी चार्जिंग क्यों मायने रखती है।",
  },
  {
    slug: "tvs-1-million-electric-scooter-sales-2026",
    title: "TVS Crosses 1 Million Electric Scooter Sales in India",
    subtitle: "Only the second brand after Ola to hit the 10-lakh mark",
    excerpt:
      "TVS Motor has crossed 10 lakh (1 million) cumulative electric scooter sales in India — 10,04,148 units of the iQube and Orbiter as of June 11, 2026 — becoming only the second EV maker after Ola Electric to reach the milestone. Here's how fast it got there and what it signals.",
    category: "Market News",
    categorySlug: "market-news",
    readTime: "5 min",
    date: "Jun 14, 2026",
    accent: "#60A5FA",
    news: true,
    related: ["electric-two-wheeler-sales-record-may-2026", "tvs-electric-scooters", "top-5-electric-scooters-india-2026", "how-to-choose-first-ev-india"],
    hiTitle: "TVS ने भारत में 10 लाख इलेक्ट्रिक स्कूटर बिक्री पार की",
    hiSubtitle: "Ola के बाद यह मुकाम छूने वाला सिर्फ़ दूसरा ब्रांड",
    hiExcerpt:
      "TVS Motor ने भारत में 10 लाख (1 मिलियन) संचयी इलेक्ट्रिक स्कूटर बिक्री पार कर ली है — 11 जून 2026 तक iQube और Orbiter की 10,04,148 यूनिट — और Ola Electric के बाद यह उपलब्धि हासिल करने वाली दूसरी EV निर्माता बन गई है। जानिए यह कितनी तेज़ी से पहुँची और इसका क्या मतलब है।",
  },
  {
    slug: "petrol-price-100-ev-demand-june-2026",
    title: "Petrol Tops ₹100 in Major Cities — and EV Interest Is Surging",
    subtitle: "A ₹7.5/litre fuel-price jump sharpens the case for going electric",
    excerpt:
      "Petrol and diesel have risen by nearly ₹7.5 a litre in under two weeks, pushing petrol past ₹100 in several Indian cities amid West Asia tensions. As pump prices bite, EV running-cost savings look bigger than ever. Here's what the fuel shock means for Indian buyers.",
    category: "Market News",
    categorySlug: "market-news",
    readTime: "5 min",
    date: "Jun 14, 2026",
    accent: "#60A5FA",
    news: true,
    related: ["petrol-vs-electric-5-year-cost-india", "electric-car-vs-cng-car-india", "ev-maintenance-cost-india", "how-to-choose-first-ev-india"],
    hiTitle: "बड़े शहरों में पेट्रोल ₹100 के पार — EV में दिलचस्पी बढ़ी",
    hiSubtitle: "₹7.5/लीटर की उछाल ने इलेक्ट्रिक चुनने का तर्क और मज़बूत किया",
    hiExcerpt:
      "पश्चिम एशिया में तनाव के बीच दो हफ़्तों से भी कम समय में पेट्रोल-डीज़ल करीब ₹7.5 प्रति लीटर महँगे हुए हैं, जिससे कई भारतीय शहरों में पेट्रोल ₹100 के पार चला गया है। पंप की कीमतें चुभने के साथ EV की रनिंग-कॉस्ट बचत पहले से कहीं बड़ी दिखती है। जानिए इस ईंधन झटके का भारतीय खरीदारों के लिए क्या मतलब है।",
  },
  {
    slug: "mercedes-s-class-s450e-phev-india-2026",
    title: "Mercedes S-Class S 450e Launched: India's First Plug-in Hybrid S-Class",
    subtitle: "The flagship sedan goes electric-first with a 100 km PHEV range",
    excerpt:
      "Mercedes-Benz launched the 2026 S-Class facelift in India on June 15, offered solely as the plug-in hybrid S 450e — its first non-AMG PHEV S-Class here. A 3.0-litre inline-six pairs with a 22 kWh battery for 435 hp and a claimed 100 km of electric range. Here's what the flagship's electrification means.",
    category: "Market News",
    categorySlug: "market-news",
    readTime: "5 min",
    date: "Jun 15, 2026",
    accent: "#60A5FA",
    news: true,
    related: ["byd-dm-i-phev-india-2026", "tesla-hyderabad-experience-centre-june-2026", "best-electric-cars-india-2026", "tesla-model-y-price-cut-india-2026"],
    hiTitle: "Mercedes S-Class S 450e लॉन्च: भारत की पहली प्लग-इन हाइब्रिड S-Class",
    hiSubtitle: "फ्लैगशिप सेडान अब इलेक्ट्रिक-फर्स्ट, 100 km की PHEV रेंज के साथ",
    hiExcerpt:
      "Mercedes-Benz ने 15 जून को भारत में 2026 S-Class फेसलिफ्ट लॉन्च की, जो सिर्फ़ प्लग-इन हाइब्रिड S 450e के रूप में पेश की गई — यह यहाँ की पहली नॉन-AMG PHEV S-Class है। 3.0-लीटर इनलाइन-सिक्स इंजन 22 kWh बैटरी के साथ मिलकर 435 hp और दावा की गई 100 km की इलेक्ट्रिक रेंज देता है। जानिए फ्लैगशिप के इलेक्ट्रिक होने का क्या मतलब है।",
  },
  {
    slug: "byd-dm-i-phev-india-2026",
    title: "BYD Confirms DM-i Plug-in Hybrid for India",
    subtitle: "Super-efficient PHEV tech with 1,000 km+ combined range is India-bound",
    excerpt:
      "BYD India has revealed its DM-i 'Super Plug-in Hybrid' technology for the Indian market, confirming the Seal U as its first PHEV here, due by the end of 2026. With combined ranges past 1,000 km and up to ~140 km of electric-only running, here's why BYD's hybrid push matters for Indian buyers.",
    category: "Market News",
    categorySlug: "market-news",
    readTime: "5 min",
    date: "Jun 15, 2026",
    accent: "#60A5FA",
    news: true,
    related: ["byd-electric-cars", "best-electric-cars-india-2026", "mercedes-s-class-s450e-phev-india-2026", "tata-sierra-ev-launch-2026"],
    hiTitle: "BYD ने भारत के लिए DM-i प्लग-इन हाइब्रिड की पुष्टि की",
    hiSubtitle: "1,000 km+ कंबाइंड रेंज वाली सुपर-एफिशिएंट PHEV तकनीक भारत आ रही है",
    hiExcerpt:
      "BYD India ने भारतीय बाज़ार के लिए अपनी DM-i 'सुपर प्लग-इन हाइब्रिड' तकनीक का खुलासा किया है और Seal U को यहाँ अपनी पहली PHEV के रूप में पुष्टि की है, जो 2026 के अंत तक आएगी। 1,000 km से अधिक की कंबाइंड रेंज और लगभग 140 km तक की इलेक्ट्रिक-ओनली रेंज के साथ, जानिए BYD के हाइब्रिड कदम का भारतीय खरीदारों के लिए क्या मतलब है।",
  },
  {
    slug: "ev-cars-record-share-may-2026",
    title: "Electric Cars Hit Record 6.6% Share in India in May 2026",
    subtitle: "EV passenger sales jump 81% as fuel prices bite",
    excerpt:
      "Electric passenger vehicle retail sales surged 81% year-on-year to 26,682 units in May 2026, taking EV cars to a record 6.6% of the market, FADA data shows. Tata led with 10,340 units, ahead of Mahindra and JSW MG. Here's what the record month means for buyers.",
    category: "Market News",
    categorySlug: "market-news",
    readTime: "5 min",
    date: "Jun 15, 2026",
    accent: "#60A5FA",
    news: true,
    related: ["tata-ev-sales-cross-10000-may-2026", "electric-two-wheeler-sales-record-may-2026", "petrol-price-100-ev-demand-june-2026", "india-ev-sales-fy2026"],
    hiTitle: "मई 2026 में भारत में इलेक्ट्रिक कारों की हिस्सेदारी रिकॉर्ड 6.6% पर",
    hiSubtitle: "ईंधन कीमतें चुभने से EV पैसेंजर बिक्री 81% उछली",
    hiExcerpt:
      "FADA डेटा के अनुसार, मई 2026 में इलेक्ट्रिक पैसेंजर वाहन रिटेल बिक्री सालाना 81% बढ़कर 26,682 यूनिट हो गई, जिससे EV कारें बाज़ार के रिकॉर्ड 6.6% तक पहुँच गईं। Tata 10,340 यूनिट के साथ आगे रही, उसके बाद Mahindra और JSW MG। जानिए इस रिकॉर्ड महीने का खरीदारों के लिए क्या मतलब है।",
  },
  {
    slug: "pm-e-drive-2w-subsidy-deadline-july-2026",
    title: "PM E-Drive Scooter Subsidy Ends July 31 — Buy Before the Cap Runs Out",
    subtitle: "₹5,000 e-scooter incentive is fund-limited and nearly used up",
    excerpt:
      "The PM E-Drive demand incentive for electric two-wheelers now ends on July 31, 2026 — but the scheme is fund-limited and could close sooner. With about 22 lakh of the 24.79 lakh e-scooter slots already claimed, here's what buyers need to know before the cap runs out.",
    category: "Market News",
    categorySlug: "market-news",
    readTime: "5 min",
    date: "Jun 15, 2026",
    accent: "#60A5FA",
    news: true,
    related: ["ev-subsidies-road-tax-by-state-india-2026", "top-5-electric-scooters-india-2026", "electric-two-wheeler-sales-record-may-2026", "best-electric-motorcycles-india-2026"],
    hiTitle: "PM E-Drive स्कूटर सब्सिडी 31 जुलाई को खत्म — कैप खत्म होने से पहले खरीदें",
    hiSubtitle: "₹5,000 का ई-स्कूटर प्रोत्साहन फंड-सीमित और लगभग खत्म",
    hiExcerpt:
      "इलेक्ट्रिक टू-व्हीलर के लिए PM E-Drive डिमांड प्रोत्साहन अब 31 जुलाई 2026 को खत्म होगा — पर यह योजना फंड-सीमित है और जल्दी बंद हो सकती है। 24.79 लाख ई-स्कूटर स्लॉट में से लगभग 22 लाख पहले ही क्लेम हो चुके हैं, जानिए कैप खत्म होने से पहले खरीदारों को क्या जानना चाहिए।",
  },
  {
    slug: "tata-price-hike-july-2026",
    title: "Tata Raises Car & EV Prices by Up to 1.5% From July 1",
    subtitle: "The first hike for its EV range this year — right as June discounts run",
    excerpt:
      "Tata Motors will raise prices across its passenger-vehicle range, including its electric cars, by up to 1.5% from July 1, 2026, blaming rising input costs. It is the first price increase for Tata's EV lineup this year — and it lands just as the brand runs its biggest June discounts. Here's what it means for buyers.",
    category: "Market News",
    categorySlug: "market-news",
    readTime: "4 min",
    date: "Jun 16, 2026",
    accent: "#60A5FA",
    news: true,
    related: ["tata-ev-discounts-june-2026", "tata-ev-sales-cross-10000-may-2026", "ev-cars-record-share-may-2026", "petrol-vs-electric-5-year-cost-india"],
    hiTitle: "Tata 1 जुलाई से कारों और EV की कीमतें 1.5% तक बढ़ाएगी",
    hiSubtitle: "इस साल EV रेंज की पहली बढ़ोतरी — वह भी जून की छूट के बीच",
    hiExcerpt:
      "Tata Motors 1 जुलाई 2026 से अपनी पैसेंजर-वाहन रेंज में, इलेक्ट्रिक कारों समेत, कीमतें 1.5% तक बढ़ाएगी और इसके लिए बढ़ती इनपुट लागत को ज़िम्मेदार ठहराया है। यह इस साल Tata की EV लाइनअप की पहली कीमत बढ़ोतरी है — और यह तब आ रही है जब ब्रांड अपनी सबसे बड़ी जून छूट चला रहा है। जानिए खरीदारों के लिए इसका क्या मतलब है।",
  },
  {
    slug: "delhi-ev-policy-2-0-2026",
    title: "Delhi EV Policy 2.0: Up to ₹1 Lakh Subsidy, Tied to Scrapping Old Cars",
    subtitle: "Scrappage-linked incentives, faster DBT payouts and an e-scooter sweetener",
    excerpt:
      "Delhi's Budget 2026 has introduced EV Policy 2.0 with a ₹200 crore outlay, offering up to ₹1 lakh off an electric car under ₹15 lakh, a flat ₹10,000 for e-two-wheelers and bigger benefits if you scrap an old petrol or diesel vehicle. Payouts move to direct bank transfer. Here's what's confirmed and who gains.",
    category: "Market News",
    categorySlug: "market-news",
    readTime: "5 min",
    date: "Jun 16, 2026",
    accent: "#60A5FA",
    news: true,
    related: ["ev-subsidies-road-tax-by-state-india-2026", "pm-e-drive-2w-subsidy-deadline-july-2026", "best-electric-cars-under-15-lakh-india", "how-to-choose-first-ev-india"],
    hiTitle: "दिल्ली EV नीति 2.0: ₹1 लाख तक सब्सिडी, पुरानी कार स्क्रैप करने से जुड़ी",
    hiSubtitle: "स्क्रैपेज-लिंक्ड प्रोत्साहन, तेज़ DBT भुगतान और ई-स्कूटर पर सहूलियत",
    hiExcerpt:
      "दिल्ली के बजट 2026 में ₹200 करोड़ के परिव्यय के साथ EV नीति 2.0 पेश की गई है, जिसमें ₹15 लाख से कम की इलेक्ट्रिक कार पर ₹1 लाख तक की छूट, ई-टू-व्हीलर पर सपाट ₹10,000 और पुराने पेट्रोल या डीज़ल वाहन को स्क्रैप करने पर बड़े फ़ायदे मिलते हैं। भुगतान अब सीधे बैंक ट्रांसफर से होगा। जानिए क्या पुष्टि हुई है और किसे फ़ायदा।",
  },
  {
    slug: "citroen-ec3x-launched-india-2026",
    title: "Citroen eC3X Launched in India From ₹10.25 Lakh (₹6.89 Lakh With BaaS)",
    subtitle: "A budget electric crossover with six airbags, 320 km range and a battery-rental option",
    excerpt:
      "Citroen has launched the eC3X electric crossover in India on June 17, 2026, priced from ₹10.25 lakh (ex-showroom) — or just ₹6.89 lakh on its Battery-as-a-Service plan, with battery rent of ₹2.26 per km. It packs a 29.2 kWh battery, a claimed 320 km range, six airbags as standard and 10–80% DC fast charging in about 57 minutes. Here's everything that's new.",
    category: "Market News",
    categorySlug: "market-news",
    readTime: "5 min",
    date: "Jun 19, 2026",
    accent: "#60A5FA",
    news: true,
    related: ["best-electric-cars-under-15-lakh-india", "tata-tiago-ev-2026-update-launch", "maruti-e-vitara-first-ev-launch", "how-to-choose-first-ev-india"],
    hiTitle: "Citroen eC3X भारत में ₹10.25 लाख से लॉन्च (BaaS पर ₹6.89 लाख)",
    hiSubtitle: "छह एयरबैग, 320 km रेंज और बैटरी-किराया विकल्प वाला बजट इलेक्ट्रिक क्रॉसओवर",
    hiExcerpt:
      "Citroen ने 17 जून 2026 को भारत में eC3X इलेक्ट्रिक क्रॉसओवर लॉन्च किया है, जिसकी कीमत ₹10.25 लाख (एक्स-शोरूम) से शुरू होती है — या इसके बैटरी-ऐज़-अ-सर्विस प्लान पर सिर्फ़ ₹6.89 लाख, जिसमें ₹2.26 प्रति km बैटरी किराया लगता है। इसमें 29.2 kWh बैटरी, 320 km की दावा की गई रेंज, मानक रूप से छह एयरबैग और लगभग 57 मिनट में 10–80% DC फ़ास्ट चार्जिंग मिलती है। यहाँ जानिए सब कुछ जो नया है।",
  },
];

// ── Helpers ──────────────────────────────────────────────────────
export const getPost = (slug: string): BlogPost | undefined =>
  POSTS.find((p) => p.slug === slug);

export const getCategory = (slug: string): BlogCategory | undefined =>
  CATEGORIES.find((c) => c.slug === slug);

export const postsInCategory = (slug: string): BlogPost[] =>
  POSTS.filter((p) => p.categorySlug === slug).sort(
    (a, b) => +new Date(b.date) - +new Date(a.date)
  );

/** Resolve a post's related list (falls back to same-category posts). */
export function relatedPosts(slug: string, count = 4): BlogPost[] {
  const post = getPost(slug);
  if (!post) return [];
  const chosen = post.related
    .map((s) => getPost(s))
    .filter((p): p is BlogPost => !!p);
  if (chosen.length >= count) return chosen.slice(0, count);
  const extra = POSTS.filter(
    (p) =>
      p.slug !== slug &&
      !chosen.some((c) => c.slug === p.slug) &&
      p.categorySlug === post.categorySlug
  );
  return [...chosen, ...extra].slice(0, count);
}

/** Newest-first ordering by the date string. */
export const postsByDate = (): BlogPost[] =>
  [...POSTS].sort((a, b) => +new Date(b.date) - +new Date(a.date));

export type Post = BlogPost;
