export interface GlossaryTerm {
  term: string;
  short?: string;
  def: string;
}

export const TERMS: GlossaryTerm[] = [
  { term: "kWh (kilowatt-hour)", short: "Battery capacity", def: "The unit used to measure how much energy a battery can store. A bigger kWh number generally means more range. Think of it like the size of the fuel tank — a 50 kWh pack holds roughly double the energy of a 25 kWh pack." },
  { term: "ARAI / MIDC range", short: "Claimed range", def: "The range figure certified under India's standard test cycle (MIDC, administered by ARAI). It is measured in controlled conditions, so real-world range is typically 25–35% lower depending on speed, AC use, traffic and terrain." },
  { term: "AC charging", short: "Slow / home charging", def: "Alternating-current charging, usually from a home or workplace wall box (3.3–11 kW). The car's onboard charger converts AC to DC. It is slower but cheaper and gentler on the battery — ideal for overnight top-ups." },
  { term: "DC fast charging", short: "Rapid public charging", def: "Direct-current charging that bypasses the onboard charger and feeds the battery directly at high power (typically 25–150 kW in India, higher on premium cars). It can take a pack from 10% to 80% in 20–60 minutes." },
  { term: "CCS2", short: "DC fast-charge connector", def: "Combined Charging System 2 — the standard DC fast-charging plug for cars in India. It combines the Type 2 AC pins with two extra high-power DC pins below, so one port handles both AC and DC charging." },
  { term: "Type 2 connector", short: "AC connector", def: "The standard seven-pin AC charging connector used by most EV cars in India and Europe. It handles home and public AC charging up to 22 kW (depending on the car's onboard charger)." },
  { term: "Regenerative braking", short: "Energy recovery", def: "When you lift off the accelerator or brake, the motor runs in reverse as a generator, slowing the car and feeding energy back into the battery. It recovers range and reduces brake-pad wear." },
  { term: "LFP battery", short: "Lithium iron phosphate", def: "A battery chemistry (LiFePO4) prized for long cycle life, safety and lower cost. It is slightly less energy-dense than NMC, so packs can be a bit heavier for the same range, but it tolerates frequent 100% charging well." },
  { term: "NMC battery", short: "Nickel manganese cobalt", def: "A high-energy-density chemistry that packs more range into less weight, common in longer-range cars. It generally costs more than LFP and manufacturers often advise charging to ~80–90% for daily use to preserve longevity." },
  { term: "State of Charge (SoC)", short: "Battery %", def: "The amount of energy left in the battery, shown as a percentage — the EV equivalent of a fuel gauge. 100% is full, 0% is empty." },
  { term: "Range anxiety", short: "Fear of running out", def: "The worry that an EV will run out of charge before reaching a charger. It eases with experience, better range, and India's growing public charging network — most daily driving uses only a fraction of a full charge." },
  { term: "V2L (Vehicle-to-Load)", short: "Power out of your car", def: "A feature that lets the car act as a giant power bank, supplying regular AC electricity to appliances, tools or camping gear through an adapter. Several 2025–26 Indian EVs offer it." },
  { term: "V2V (Vehicle-to-Vehicle)", short: "Charge another EV", def: "Using one EV's battery to charge another stranded EV. It is a niche extension of V2L-style power export and is offered on a handful of models." },
  { term: "ADAS", short: "Driver-assist tech", def: "Advanced Driver Assistance Systems — features like adaptive cruise control, lane-keep assist and automatic emergency braking. Increasingly common on mid- and upper-segment Indian EVs, but they assist rather than replace the driver." },
  { term: "Kerb weight", short: "Empty vehicle weight", def: "The weight of the vehicle with all fluids but no passengers or cargo. EVs are usually heavier than petrol equivalents because of the battery pack, which affects efficiency and tyre wear." },
  { term: "Wh/km efficiency", short: "Energy used per km", def: "How many watt-hours the vehicle consumes to travel one kilometre — the EV version of fuel economy. A lower number means a more efficient car. Multiply by distance to estimate energy and charging cost." },
  { term: "Battery-as-a-Service (BaaS)", short: "Lease the battery", def: "A model where you buy the vehicle without the battery and pay a subscription to use or swap it, lowering the upfront price. Common in some Indian electric two- and three-wheeler ecosystems." },
  { term: "Thermal management", short: "Battery cooling", def: "The system (air- or liquid-cooled) that keeps the battery within its ideal temperature range. Good thermal management protects battery health and enables consistent fast charging, which matters in Indian heat." },
  { term: "Onboard charger (OBC)", short: "AC-to-DC converter", def: "The component inside the car that converts AC from a wall socket or AC charger into DC to fill the battery. Its rating (e.g. 7.2 kW or 11 kW) sets the maximum speed of AC charging." },
  { term: "Bharat NCAP", short: "India's crash-test rating", def: "India's own car safety-assessment programme, launched in 2023, which awards star ratings for adult and child occupant protection. Several EVs have been tested under it, alongside Global NCAP." },
];
