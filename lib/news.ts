export type NewsCategory =
  | "Launch"
  | "Policy"
  | "Charging"
  | "Technology"
  | "Market";

export interface NewsItem {
  id: string;
  title: string;
  /** Human-readable month/year, e.g. "May 2026" */
  date: string;
  category: NewsCategory;
  status?: "Launched" | "Upcoming";
  summary: string;
  tag?: string;
}

/**
 * Curated editorial feed for illustration. Launch entries reference real,
 * publicly known India EVs; Policy/Charging/Technology/Market entries are
 * general editorial summaries and intentionally avoid specific figures.
 */
export const NEWS: NewsItem[] = [
  {
    id: "harrier-ev",
    title: "Tata Harrier EV broadens the electric SUV map",
    date: "May 2026",
    category: "Launch",
    status: "Launched",
    summary:
      "Tata's flagship electric SUV pairs a long-range battery with the option of dual-motor all-wheel drive, bringing genuine highway range and CCS2 fast charging to the mid-size segment. It sits at the top of Tata's growing EV line-up.",
    tag: "SUV",
  },
  {
    id: "curvv-ev",
    title: "Tata Curvv EV blends coupe styling with practical range",
    date: "April 2026",
    category: "Launch",
    status: "Launched",
    summary:
      "The Curvv EV offers a coupe-SUV silhouette with multiple battery options, targeting buyers who want distinctive design without sacrificing everyday usability or fast-charging support.",
    tag: "Coupe-SUV",
  },
  {
    id: "be-6",
    title: "Mahindra BE 6 ushers in the INGLO-based electric era",
    date: "March 2026",
    category: "Launch",
    status: "Launched",
    summary:
      "Built on Mahindra's dedicated born-electric INGLO platform, the BE 6 is a sharply styled compact electric SUV with a focus on cabin technology, efficiency and a software-defined experience.",
    tag: "Born-electric",
  },
  {
    id: "xev-9e",
    title: "Mahindra XEV 9e adds a larger flagship to the range",
    date: "March 2026",
    category: "Launch",
    status: "Launched",
    summary:
      "The XEV 9e is Mahindra's larger electric SUV-coupe on the same INGLO architecture as the BE 6, emphasising long range, triple-screen cabin tech and ADAS features for the premium segment.",
    tag: "Flagship",
  },
  {
    id: "e-vitara",
    title: "Maruti Suzuki e Vitara marks the brand's EV debut",
    date: "June 2026",
    category: "Launch",
    status: "Upcoming",
    summary:
      "Maruti Suzuki's first mass-market electric SUV is widely anticipated to bring the country's largest carmaker into the EV space, with the scale and service reach that could accelerate mainstream adoption.",
    tag: "First EV",
  },
  {
    id: "creta-electric",
    title: "Hyundai Creta Electric electrifies a household name",
    date: "February 2026",
    category: "Launch",
    status: "Launched",
    summary:
      "An electric version of one of India's best-selling SUVs, the Creta Electric offers familiar styling and packaging with multiple battery choices, aiming to convert loyal Creta buyers to electric.",
    tag: "SUV",
  },
  {
    id: "windsor-pro",
    title: "MG Windsor EV Pro extends range on a popular crossover",
    date: "January 2026",
    category: "Launch",
    status: "Launched",
    summary:
      "The Windsor EV Pro adds a larger battery to MG's airy 'CUV' crossover, addressing range needs while retaining the lounge-like cabin and battery-subscription purchase options that made the original notable.",
    tag: "Crossover",
  },
  {
    id: "byd-emax-7",
    title: "BYD broadens its India range with the eMAX 7 and Seal",
    date: "April 2026",
    category: "Launch",
    status: "Launched",
    summary:
      "BYD continues to expand in India with its electric MPV and the Seal sedan, bringing its in-house Blade LFP battery technology to families and performance-oriented buyers respectively.",
    tag: "MPV / Sedan",
  },
  {
    id: "ather-rizta",
    title: "Ather Rizta targets families in the electric scooter space",
    date: "February 2026",
    category: "Launch",
    status: "Launched",
    summary:
      "Ather's family-focused scooter prioritises seat comfort, storage and practicality over outright sportiness, widening the brand's appeal beyond enthusiasts in the competitive two-wheeler market.",
    tag: "Scooter",
  },
  {
    id: "ola-s1-pro-gen3",
    title: "Ola S1 Pro Gen 3 refines the performance scooter formula",
    date: "March 2026",
    category: "Launch",
    status: "Launched",
    summary:
      "The third-generation S1 Pro focuses on improved efficiency, reliability and ride quality, as Ola Electric works to consolidate its position in the high-volume electric scooter segment.",
    tag: "Scooter",
  },
  {
    id: "uv-f77-mach2",
    title: "Ultraviolette F77 Mach 2 pushes electric performance bikes",
    date: "May 2026",
    category: "Launch",
    status: "Upcoming",
    summary:
      "The Bengaluru-based maker's flagship electric motorcycle continues to chase strong acceleration and range, keeping the spotlight on India's small but growing premium electric two-wheeler niche.",
    tag: "Motorcycle",
  },
  {
    id: "pm-e-drive",
    title: "PM E-Drive scheme continues to anchor demand incentives",
    date: "Ongoing 2026",
    category: "Policy",
    summary:
      "The central PM E-Drive scheme (successor to FAME) remains the main national lever for EV demand support, with the bulk of incentives directed at electric two- and three-wheelers, buses and charging infrastructure. Exact benefits and eligibility evolve over time and vary by state.",
    tag: "National",
  },
  {
    id: "state-subsidies",
    title: "State EV policies keep shaping where it's cheapest to buy",
    date: "Ongoing 2026",
    category: "Policy",
    summary:
      "Several states continue to offer their own purchase subsidies, road-tax waivers and registration benefits on top of central support. Because these are periodically revised and capped, buyers are advised to confirm current terms in their state before purchase.",
    tag: "State",
  },
  {
    id: "dc-corridors",
    title: "DC fast-charging corridors expand along highways",
    date: "Q1 2026",
    category: "Charging",
    summary:
      "Public DC fast-charging networks continue to grow along major intercity highways and within metros, operated by a mix of oil-marketing companies, utilities and private charge-point operators — gradually easing long-distance EV travel.",
    tag: "Infrastructure",
  },
  {
    id: "interoperability",
    title: "Push for simpler, interoperable public charging",
    date: "Q2 2026",
    category: "Charging",
    summary:
      "Industry and policy attention is increasingly on app interoperability, transparent tariffs and reliable uptime, so that EV owners can locate, access and pay at chargers across different networks with less friction.",
    tag: "Standards",
  },
  {
    id: "lfp-mainstream",
    title: "LFP chemistry becomes the volume choice for affordable EVs",
    date: "Q1 2026",
    category: "Technology",
    summary:
      "Lithium iron phosphate (LFP) batteries are increasingly favoured for mainstream models thanks to their cost, safety and long cycle life, helping bring down prices in the mass-market segment.",
    tag: "Batteries",
  },
  {
    id: "solid-state",
    title: "Solid-state battery research moves closer to the road",
    date: "2026 outlook",
    category: "Technology",
    summary:
      "Globally, manufacturers and suppliers continue to advance solid-state and other next-generation cell technologies that promise higher energy density and faster charging. Mainstream, affordable availability remains a multi-year journey rather than an immediate shift.",
    tag: "R&D",
  },
  {
    id: "ev-penetration",
    title: "EV penetration keeps climbing, led by two-wheelers",
    date: "2026 trend",
    category: "Market",
    summary:
      "Electric two-wheelers and three-wheelers continue to drive the bulk of EV volumes in India, while electric cars remain a smaller but fast-growing share as more models, financing options and chargers reach buyers.",
    tag: "Adoption",
  },
  {
    id: "used-ev-market",
    title: "A used-EV and resale ecosystem begins to take shape",
    date: "2026 trend",
    category: "Market",
    summary:
      "As the first waves of EVs age, interest is growing in battery-health reporting, certified pre-owned programmes and clearer resale-value benchmarks — factors that will increasingly influence new-EV buying decisions.",
    tag: "Resale",
  },
];
