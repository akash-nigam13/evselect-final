export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string; // label
  categorySlug: string;
  readTime: string;
  date: string;
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
    title: "EV Maintenance Cost in India: What You'll Actually Pay",
    subtitle: "Service intervals, what gets checked, and the real bills",
    excerpt:
      "Electric cars need far less servicing than petrol — no oil, no spark plugs, no clutch. Here's exactly what an EV needs, how often, and what maintenance really costs in India.",
    category: "Cost & Ownership",
    categorySlug: "cost-ownership",
    readTime: "8 min",
    date: "Jun 8, 2026",
    accent: "#FFC247",
    related: ["petrol-vs-electric-5-year-cost-india", "ev-resale-value-battery-health-india", "ev-battery-life-india-weather", "how-to-choose-first-ev-india"],
    hiTitle: "भारत में EV मेंटेनेंस लागत: आप असल में कितना चुकाएँगे",
    hiSubtitle: "सर्विस इंटरवल, क्या-क्या जाँचा जाता है, और असली बिल",
    hiExcerpt:
      "इलेक्ट्रिक कारों को पेट्रोल से कहीं कम सर्विसिंग चाहिए — न ऑयल, न स्पार्क प्लग, न क्लच। यहाँ जानिए एक EV को असल में क्या चाहिए, कितनी बार, और भारत में मेंटेनेंस पर सच में कितना खर्च आता है।",
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

  // ── News (May 2026) ──────────────────────────────────────────
  {
    slug: "tata-sierra-ev-launch-2026",
    title: "Tata Sierra EV: Launch Timeline, Price & Range",
    subtitle: "What we know about India's most-awaited electric SUV",
    excerpt:
      "Tata's iconic Sierra returns as an electric SUV on the Gen-2 Acti.ev platform — with an expected 55–65 kWh battery, up to ~500 km range and RWD/AWD options. Here's everything reported so far.",
    category: "Market News",
    categorySlug: "market-news",
    readTime: "5 min",
    date: "Jun 6, 2026",
    accent: "#60A5FA",
    news: true,
    related: ["india-ev-sales-fy2026", "maruti-e-vitara-first-ev-launch", "tesla-model-y-price-cut-india-2026", "how-to-choose-first-ev-india"],
    hiTitle: "Tata Sierra EV: लॉन्च टाइमलाइन, कीमत और रेंज",
    hiSubtitle: "भारत की सबसे प्रतीक्षित इलेक्ट्रिक SUV के बारे में अब तक क्या पता है",
    hiExcerpt:
      "Tata की प्रतिष्ठित Sierra अब Gen-2 Acti.ev प्लेटफ़ॉर्म पर इलेक्ट्रिक SUV के रूप में लौट रही है — अपेक्षित 55–65 kWh बैटरी, ~500 km तक रेंज और RWD/AWD विकल्पों के साथ। अब तक रिपोर्ट की गई हर जानकारी यहाँ है।",
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
