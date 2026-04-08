export const POSTS = [
  {
    slug: "top-5-electric-scooters-india-2026",
    title: "Top 5 Electric Scooters in India 2026",
    subtitle: "Range, Price & Features Compared",
    excerpt:
      "We tested India's best electric scooters on real roads — ARAI range, charging times, service networks, and 5-year running costs — to help you pick the right one.",
    category: "Buying Guide",
    readTime: "11 min",
    date: "Jan 15, 2026",
    accent: "#00e5ff",
    featured: true,
  },
  {
    slug: "ev-battery-life-india-weather",
    title: "EV Battery Life in Indian Weather",
    subtitle: "How to Make Your Battery Last 10+ Years",
    excerpt:
      "India's 45°C summers and monsoon humidity are uniquely brutal on EV batteries. Here's the science-backed playbook to protect your pack.",
    category: "Battery Tech",
    readTime: "13 min",
    date: "Jan 22, 2026",
    accent: "#39ff14",
    featured: false,
  },
  {
    slug: "petrol-vs-electric-5-year-cost-india",
    title: "Petrol vs Electric: 5-Year Cost Analysis",
    subtitle: "Total Cost of Ownership for Indian Buyers",
    excerpt:
      "A rupee-by-rupee breakdown of purchase price, fuel, insurance, maintenance, and resale value over 5 years. The numbers might surprise you.",
    category: "Cost Analysis",
    readTime: "14 min",
    date: "Feb 3, 2026",
    accent: "#ffb800",
    featured: false,
  },
  {
    slug: "solid-state-batteries-2026",
    title: "Solid-State Batteries: The 2026 Turning Point",
    subtitle: "Why This Year Changes EV Range Forever",
    excerpt:
      "After years of promises, solid-state cells are entering limited production. We explain what the technology actually delivers and when Indian buyers will feel it.",
    category: "Battery Tech",
    readTime: "12 min",
    date: "Feb 14, 2026",
    accent: "#a78bfa",
    featured: false,
  },
  {
    slug: "ev-charging-infrastructure-india",
    title: "EV Charging Infrastructure in India 2026",
    subtitle: "A Complete Road Trip Planning Guide",
    excerpt:
      "25,000+ public chargers, 4,500+ DC fast chargers on highways. Which corridors are ready, which apps to use, and how to never get stranded.",
    category: "Infrastructure",
    readTime: "15 min",
    date: "Feb 28, 2026",
    accent: "#00e5ff",
    featured: false,
  },
] as const;

export type Post = (typeof POSTS)[number];
