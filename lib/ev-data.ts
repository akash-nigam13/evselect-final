// AUTO-GENERATED EV dataset for EVSelect.in
// 47 vehicles — sourced 2026-05-30
// Specs reflect early-2026 Indian-market listings (ARAI/IDC claimed figures).
// Prices are ex-showroom in lakh; re-validate against manufacturer sites before production.

export type EVCategory = "car" | "scooter" | "motorcycle";

/** A single purchasable trim/variant of a model. */
export interface Variant {
  /** Trim/variant name, e.g. "Creative+ 45" or "S1 Pro 4 kWh". */
  name: string;
  batteryKwh?: number | null;
  /** Claimed (ARAI/IDC) range in km. */
  rangeKm?: number | null;
  powerBhp?: number | null;
  /** Ex-showroom price in ₹ lakh. */
  priceLakh?: number | null;
  /** One short highlight, e.g. "Adds sunroof + ADAS". */
  note?: string | null;
}

export interface EV {
  id: string;
  category: EVCategory;
  brand: string;
  model: string;
  variant: string | null;
  name: string;
  fullName: string;
  bodyType: string;
  priceMinLakh: number | null;
  priceMaxLakh: number | null;
  batteryKwh: number | null;
  rangeKmARAI: number | null;
  realRangeKm: number | null;
  powerBhp: number | null;
  torqueNm: number | null;
  accelSec: number | null;
  accelNote: string | null;
  topSpeedKmph: number | null;
  fastChargeKw: number | null;
  fastChargeTime: string | null;
  acChargeKw: number | null;
  chargeTimeFull: string | null;
  driveType: string | null;
  seating: number | null;
  bootLitres: number | null;
  kerbWeightKg: number | null;
  year: number | null;
  accent: string;
  upcoming?: boolean;
  /** optional photo URL; if unset the UI tries /vehicles/<id>.jpg then a placeholder */
  image?: string | null;
  /** attribution caption for the photo, e.g. "Author · CC BY-SA 4.0" */
  imageCredit?: string | null;
  /** link to the photo's source page (e.g. its Wikimedia Commons file page) */
  imageSource?: string | null;
  /** full purchasable variant/trim lineup; rendered as a table on the page */
  variants?: Variant[];
  notableFeatures: string[];
}

export const EVS: EV[] = [
  {
    "id": "tata-tiago-ev-long-range-24-kwh",
    "category": "car",
    "brand": "Tata",
    "model": "Tiago EV",
    "variant": "Long Range 24 kWh",
    "name": "Tata Tiago EV",
    "fullName": "Tata Tiago EV Long Range 24 kWh",
    "bodyType": "Hatchback",
    "priceMinLakh": 6.99,
    "priceMaxLakh": 9.99,
    "batteryKwh": 24,
    "rangeKmARAI": 285,
    "realRangeKm": 215,
    "powerBhp": 75,
    "torqueNm": 114,
    "accelSec": null,
    "accelNote": null,
    "topSpeedKmph": 120,
    "fastChargeKw": 50,
    "fastChargeTime": "10–80% in 57 min",
    "acChargeKw": 7.2,
    "chargeTimeFull": null,
    "driveType": "FWD",
    "seating": 5,
    "bootLitres": 240,
    "kerbWeightKg": null,
    "year": 2026,
    "accent": "#22d3ee",
    "notableFeatures": [
      "Affordable entry EV",
      "Multi-mode regen",
      "Fresh facelift design",
      "Wireless charging"
    ]
  },
  {
    "id": "mg-comet-ev",
    "category": "car",
    "brand": "MG",
    "model": "Comet EV",
    "variant": null,
    "name": "MG Comet EV",
    "fullName": "MG Comet EV",
    "bodyType": "Hatchback",
    "priceMinLakh": 7.5,
    "priceMaxLakh": 9.99,
    "batteryKwh": 17.3,
    "rangeKmARAI": 230,
    "realRangeKm": 191,
    "powerBhp": 41,
    "torqueNm": 110,
    "accelSec": null,
    "accelNote": null,
    "topSpeedKmph": 100,
    "fastChargeKw": null,
    "fastChargeTime": "0–80% in approx 5 hours (AC)",
    "acChargeKw": 3.3,
    "chargeTimeFull": null,
    "driveType": "RWD",
    "seating": 4,
    "bootLitres": null,
    "kerbWeightKg": null,
    "year": 2026,
    "accent": "#22d3ee",
    "notableFeatures": [
      "Compact city runabout",
      "Twin 10.25-inch screens",
      "Connected car tech",
      "Tiny urban footprint"
    ]
  },
  {
    "id": "tata-punch-ev-long-range-40-kwh",
    "category": "car",
    "brand": "Tata",
    "model": "Punch EV",
    "variant": "Long Range 40 kWh",
    "name": "Tata Punch EV",
    "fullName": "Tata Punch EV Long Range 40 kWh",
    "bodyType": "SUV",
    "priceMinLakh": 9.69,
    "priceMaxLakh": 12.59,
    "batteryKwh": 40,
    "rangeKmARAI": 468,
    "realRangeKm": 345,
    "powerBhp": 127,
    "torqueNm": 154,
    "accelSec": 9,
    "accelNote": "0-100 km/h",
    "topSpeedKmph": null,
    "fastChargeKw": 50,
    "fastChargeTime": "10–80% in approx 56 min",
    "acChargeKw": 7.2,
    "chargeTimeFull": null,
    "driveType": "FWD",
    "seating": 5,
    "bootLitres": 366,
    "kerbWeightKg": null,
    "year": 2026,
    "accent": "#22d3ee",
    "notableFeatures": [
      "Sub-compact electric SUV",
      "V2L/V2V capability",
      "Arcade.ev app suite",
      "5-star Bharat NCAP"
    ]
  },
  {
    "id": "tata-nexon-ev-long-range-45-kwh",
    "category": "car",
    "brand": "Tata",
    "model": "Nexon EV",
    "variant": "Long Range 45 kWh",
    "name": "Tata Nexon EV",
    "fullName": "Tata Nexon EV Long Range 45 kWh",
    "bodyType": "SUV",
    "priceMinLakh": 12.49,
    "priceMaxLakh": 17.49,
    "batteryKwh": 45,
    "rangeKmARAI": 489,
    "realRangeKm": 375,
    "powerBhp": 143,
    "torqueNm": 215,
    "accelSec": 8.9,
    "accelNote": "0-100 km/h",
    "topSpeedKmph": 150,
    "fastChargeKw": 70,
    "fastChargeTime": "10–80% in 56 min",
    "acChargeKw": 7.2,
    "chargeTimeFull": null,
    "driveType": "FWD",
    "seating": 5,
    "bootLitres": 350,
    "kerbWeightKg": null,
    "year": 2026,
    "accent": "#22d3ee",
    "notableFeatures": [
      "Best-selling EV in India",
      "6 airbags standard",
      "JBL audio + wireless CarPlay",
      "Liquid-cooled IP67 battery"
    ]
  },
  {
    "id": "citroen-ec3",
    "category": "car",
    "brand": "Citroen",
    "model": "eC3",
    "variant": null,
    "name": "Citroen eC3",
    "fullName": "Citroen eC3",
    "bodyType": "Hatchback",
    "priceMinLakh": 12.9,
    "priceMaxLakh": 13.41,
    "batteryKwh": 29.2,
    "rangeKmARAI": 320,
    "realRangeKm": 219,
    "powerBhp": 57,
    "torqueNm": 143,
    "accelSec": null,
    "accelNote": null,
    "topSpeedKmph": 107,
    "fastChargeKw": 30,
    "fastChargeTime": "10–80% in 57 min",
    "acChargeKw": 3.3,
    "chargeTimeFull": null,
    "driveType": "FWD",
    "seating": 5,
    "bootLitres": 315,
    "kerbWeightKg": null,
    "year": 2026,
    "accent": "#22d3ee",
    "notableFeatures": [
      "Spacious budget hatch",
      "10.2-inch touchscreen",
      "Wireless Android Auto/CarPlay",
      "Rear camera"
    ]
  },
  {
    "id": "mg-windsor-ev-38-kwh",
    "category": "car",
    "brand": "MG",
    "model": "Windsor EV",
    "variant": "38 kWh",
    "name": "MG Windsor EV",
    "fullName": "MG Windsor EV 38 kWh",
    "bodyType": "SUV",
    "priceMinLakh": 14,
    "priceMaxLakh": 16.5,
    "batteryKwh": 38,
    "rangeKmARAI": 332,
    "realRangeKm": 250,
    "powerBhp": 136,
    "torqueNm": 200,
    "accelSec": null,
    "accelNote": null,
    "topSpeedKmph": null,
    "fastChargeKw": 60,
    "fastChargeTime": "20–80% in approx 50 min",
    "acChargeKw": 7.4,
    "chargeTimeFull": null,
    "driveType": "FWD",
    "seating": 5,
    "bootLitres": 604,
    "kerbWeightKg": null,
    "year": 2026,
    "accent": "#22d3ee",
    "notableFeatures": [
      "Aero-lounge cabin",
      "Battery-as-a-Service option",
      "15.6-inch touchscreen",
      "Reclining rear seats"
    ]
  },
  {
    "id": "mg-zs-ev",
    "category": "car",
    "brand": "MG",
    "model": "ZS EV",
    "variant": null,
    "name": "MG ZS EV",
    "fullName": "MG ZS EV",
    "bodyType": "SUV",
    "priceMinLakh": 18.98,
    "priceMaxLakh": 25.75,
    "batteryKwh": 50.3,
    "rangeKmARAI": 461,
    "realRangeKm": 350,
    "powerBhp": 173,
    "torqueNm": 280,
    "accelSec": 8.6,
    "accelNote": "0-100 km/h",
    "topSpeedKmph": 175,
    "fastChargeKw": 75,
    "fastChargeTime": "10–80% in approx 60 min",
    "acChargeKw": 7.4,
    "chargeTimeFull": null,
    "driveType": "FWD",
    "seating": 5,
    "bootLitres": 448,
    "kerbWeightKg": null,
    "year": 2026,
    "accent": "#22d3ee",
    "notableFeatures": ["Run-out model (clearance) — next-gen ZS EV due 2027",
      "Panoramic sunroof",
      "Larger touchscreen",
      "Connected car tech",
      "Digital instrument cluster"
    ]
  },
  {
    "id": "mg-windsor-ev-pro-52-9-kwh",
    "category": "car",
    "brand": "MG",
    "model": "Windsor EV Pro",
    "variant": "52.9 kWh",
    "name": "MG Windsor EV Pro",
    "fullName": "MG Windsor EV Pro 52.9 kWh",
    "bodyType": "SUV",
    "priceMinLakh": 17.49,
    "priceMaxLakh": 18.1,
    "batteryKwh": 52.9,
    "rangeKmARAI": 449,
    "realRangeKm": 340,
    "powerBhp": 136,
    "torqueNm": 200,
    "accelSec": null,
    "accelNote": null,
    "topSpeedKmph": null,
    "fastChargeKw": 60,
    "fastChargeTime": "20–80% in 50 min",
    "acChargeKw": 7.4,
    "chargeTimeFull": null,
    "driveType": "FWD",
    "seating": 5,
    "bootLitres": 604,
    "kerbWeightKg": null,
    "year": 2026,
    "accent": "#22d3ee",
    "notableFeatures": [
      "Level 2 ADAS",
      "V2V and V2L functionality",
      "Powered tailgate",
      "BaaS pricing option"
    ]
  },
  {
    "id": "tata-curvv-ev-55-kwh",
    "category": "car",
    "brand": "Tata",
    "model": "Curvv EV",
    "variant": "55 kWh",
    "name": "Tata Curvv EV",
    "fullName": "Tata Curvv EV 55 kWh",
    "bodyType": "SUV",
    "priceMinLakh": 16.99,
    "priceMaxLakh": 19.49,
    "batteryKwh": 55,
    "rangeKmARAI": 585,
    "realRangeKm": 440,
    "powerBhp": 167,
    "torqueNm": 215,
    "accelSec": 8.6,
    "accelNote": "0-100 km/h",
    "topSpeedKmph": 160,
    "fastChargeKw": 70,
    "fastChargeTime": "10–80% in 40 min",
    "acChargeKw": 7.2,
    "chargeTimeFull": null,
    "driveType": "FWD",
    "seating": 5,
    "bootLitres": 500,
    "kerbWeightKg": null,
    "year": 2026,
    "accent": "#22d3ee",
    "notableFeatures": [
      "Coupe-SUV styling",
      "11.6L frunk",
      "Level 2 ADAS",
      "12.3-inch touchscreen"
    ]
  },
  {
    "id": "hyundai-creta-electric-long-range-51-4-kwh",
    "category": "car",
    "brand": "Hyundai",
    "model": "Creta Electric",
    "variant": "Long Range 51.4 kWh",
    "name": "Hyundai Creta Electric",
    "fullName": "Hyundai Creta Electric Long Range 51.4 kWh",
    "bodyType": "SUV",
    "priceMinLakh": 18.02,
    "priceMaxLakh": 24.7,
    "batteryKwh": 51.4,
    "rangeKmARAI": 510,
    "realRangeKm": 385,
    "powerBhp": 171,
    "torqueNm": 255,
    "accelSec": 7.9,
    "accelNote": "0-100 km/h",
    "topSpeedKmph": null,
    "fastChargeKw": 50,
    "fastChargeTime": "10–80% in 58 min",
    "acChargeKw": 11,
    "chargeTimeFull": null,
    "driveType": "FWD",
    "seating": 5,
    "bootLitres": 433,
    "kerbWeightKg": null,
    "year": 2026,
    "accent": "#22d3ee",
    "notableFeatures": [
      "Dual 10.25-inch screens",
      "Front ventilated seats",
      "Panoramic sunroof",
      "Level 2 ADAS"
    ]
  },
  {
    "id": "mahindra-be-6-79-kwh",
    "category": "car",
    "brand": "Mahindra",
    "model": "BE 6",
    "variant": "79 kWh",
    "name": "Mahindra BE 6",
    "fullName": "Mahindra BE 6 79 kWh",
    "bodyType": "SUV",
    "priceMinLakh": 18.9,
    "priceMaxLakh": 26.9,
    "batteryKwh": 79,
    "rangeKmARAI": 682,
    "realRangeKm": 500,
    "powerBhp": 286,
    "torqueNm": 380,
    "accelSec": 6.7,
    "accelNote": "0-100 km/h",
    "topSpeedKmph": 202,
    "fastChargeKw": 175,
    "fastChargeTime": "20–80% in 20 min",
    "acChargeKw": 11,
    "chargeTimeFull": null,
    "driveType": "RWD",
    "seating": 5,
    "bootLitres": 455,
    "kerbWeightKg": null,
    "year": 2026,
    "accent": "#22d3ee",
    "notableFeatures": [
      "INGLO skateboard platform",
      "Fighter-jet cockpit design",
      "Level 2 ADAS",
      "Augmented reality HUD"
    ]
  },
  {
    "id": "maruti-suzuki-e-vitara-61-kwh",
    "category": "car",
    "brand": "Maruti Suzuki",
    "model": "e Vitara",
    "variant": "61 kWh",
    "name": "Maruti Suzuki e Vitara",
    "fullName": "Maruti Suzuki e Vitara 61 kWh",
    "bodyType": "SUV",
    "priceMinLakh": 15.99,
    "priceMaxLakh": 20.01,
    "batteryKwh": 61.1,
    "rangeKmARAI": 543,
    "realRangeKm": 410,
    "powerBhp": 172,
    "torqueNm": 193,
    "accelSec": null,
    "accelNote": null,
    "topSpeedKmph": null,
    "fastChargeKw": 70,
    "fastChargeTime": "10–80% in approx 45 min",
    "acChargeKw": 11,
    "chargeTimeFull": null,
    "driveType": "FWD",
    "seating": 5,
    "bootLitres": 306,
    "kerbWeightKg": null,
    "year": 2026,
    "accent": "#22d3ee",
    "notableFeatures": [
      "Maruti's first EV",
      "360-degree camera",
      "Electric sunroof",
      "5-star Bharat NCAP"
    ]
  },
  {
    "id": "mahindra-xev-9e-79-kwh",
    "category": "car",
    "brand": "Mahindra",
    "model": "XEV 9e",
    "variant": "79 kWh",
    "name": "Mahindra XEV 9e",
    "fullName": "Mahindra XEV 9e 79 kWh",
    "bodyType": "SUV",
    "priceMinLakh": 21.9,
    "priceMaxLakh": 30.5,
    "batteryKwh": 79,
    "rangeKmARAI": 656,
    "realRangeKm": 490,
    "powerBhp": 282,
    "torqueNm": 380,
    "accelSec": 6.8,
    "accelNote": "0-100 km/h",
    "topSpeedKmph": 202,
    "fastChargeKw": 175,
    "fastChargeTime": "20–80% in 20 min",
    "acChargeKw": 11,
    "chargeTimeFull": null,
    "driveType": "RWD",
    "seating": 5,
    "bootLitres": 663,
    "kerbWeightKg": null,
    "year": 2026,
    "accent": "#22d3ee",
    "notableFeatures": [
      "Triple 12.3-inch screens",
      "150L frunk + 663L boot",
      "Level 3 autonomous-ready ADAS",
      "Dolby Atmos audio"
    ]
  },
  {
    "id": "tata-harrier-ev-qwd-75-kwh",
    "category": "car",
    "brand": "Tata",
    "model": "Harrier EV",
    "variant": "QWD 75 kWh",
    "name": "Tata Harrier EV",
    "fullName": "Tata Harrier EV QWD 75 kWh",
    "bodyType": "SUV",
    "priceMinLakh": 21.49,
    "priceMaxLakh": 30.23,
    "batteryKwh": 75,
    "rangeKmARAI": 627,
    "realRangeKm": 470,
    "powerBhp": 390,
    "torqueNm": 504,
    "accelSec": 6.3,
    "accelNote": "0-100 km/h",
    "topSpeedKmph": null,
    "fastChargeKw": 120,
    "fastChargeTime": "0–80% in 25 min",
    "acChargeKw": 11,
    "chargeTimeFull": null,
    "driveType": "AWD",
    "seating": 5,
    "bootLitres": 502,
    "kerbWeightKg": null,
    "year": 2026,
    "accent": "#22d3ee",
    "notableFeatures": [
      "Dual-motor AWD",
      "Off-road modes (Rock Crawl, Boost)",
      "14.5-inch touchscreen",
      "V2L and V2V"
    ]
  },
  {
    "id": "byd-atto-3-superior-60-48-kwh",
    "category": "car",
    "brand": "BYD",
    "model": "Atto 3",
    "variant": "Superior 60.48 kWh",
    "name": "BYD Atto 3",
    "fullName": "BYD Atto 3 Superior 60.48 kWh",
    "bodyType": "SUV",
    "priceMinLakh": 24.99,
    "priceMaxLakh": 33.99,
    "batteryKwh": 60.48,
    "rangeKmARAI": 521,
    "realRangeKm": 390,
    "powerBhp": 201,
    "torqueNm": 310,
    "accelSec": 7.3,
    "accelNote": "0-100 km/h",
    "topSpeedKmph": 160,
    "fastChargeKw": 88,
    "fastChargeTime": "30–80% in approx 29 min",
    "acChargeKw": 7,
    "chargeTimeFull": null,
    "driveType": "FWD",
    "seating": 5,
    "bootLitres": 440,
    "kerbWeightKg": null,
    "year": 2026,
    "accent": "#22d3ee",
    "notableFeatures": [
      "Blade LFP battery",
      "Rotating 12.8-inch touchscreen",
      "Panoramic sunroof",
      "7 airbags + ADAS"
    ]
  },
  {
    "id": "byd-emax-7-superior-71-8-kwh",
    "category": "car",
    "brand": "BYD",
    "model": "eMAX 7",
    "variant": "Superior 71.8 kWh",
    "name": "BYD eMAX 7",
    "fullName": "BYD eMAX 7 Superior 71.8 kWh",
    "bodyType": "MPV",
    "priceMinLakh": 26.9,
    "priceMaxLakh": 29.9,
    "batteryKwh": 71.8,
    "rangeKmARAI": 530,
    "realRangeKm": 400,
    "powerBhp": 204,
    "torqueNm": 310,
    "accelSec": 8.6,
    "accelNote": "0-100 km/h",
    "topSpeedKmph": 180,
    "fastChargeKw": 115,
    "fastChargeTime": "0–80% in 37 min",
    "acChargeKw": 11,
    "chargeTimeFull": null,
    "driveType": "FWD",
    "seating": 7,
    "bootLitres": 180,
    "kerbWeightKg": null,
    "year": 2026,
    "accent": "#22d3ee",
    "notableFeatures": [
      "6/7-seater electric MPV",
      "Blade battery",
      "Rotating 12.8-inch screen",
      "Level 2 ADAS + 360 camera"
    ]
  },
  {
    "id": "byd-seal-premium-82-56-kwh",
    "category": "car",
    "brand": "BYD",
    "model": "Seal",
    "variant": "Premium 82.56 kWh",
    "name": "BYD Seal",
    "fullName": "BYD Seal Premium 82.56 kWh",
    "bodyType": "Sedan",
    "priceMinLakh": 41,
    "priceMaxLakh": 53.15,
    "batteryKwh": 82.56,
    "rangeKmARAI": 650,
    "realRangeKm": 490,
    "powerBhp": 313,
    "torqueNm": 360,
    "accelSec": 5.9,
    "accelNote": "0-100 km/h",
    "topSpeedKmph": 180,
    "fastChargeKw": 150,
    "fastChargeTime": "0–80% in 45 min",
    "acChargeKw": 11,
    "chargeTimeFull": null,
    "driveType": "RWD",
    "seating": 5,
    "bootLitres": 400,
    "kerbWeightKg": null,
    "year": 2026,
    "accent": "#22d3ee",
    "notableFeatures": [
      "CTB cell-to-body design",
      "iTAC torque control",
      "Rotating touchscreen",
      "Performance AWD option"
    ]
  },
  {
    "id": "hyundai-ioniq-5-84-kwh",
    "category": "car",
    "brand": "Hyundai",
    "model": "Ioniq 5",
    "variant": "84 kWh",
    "name": "Hyundai Ioniq 5",
    "fullName": "Hyundai Ioniq 5 84 kWh",
    "bodyType": "SUV",
    "priceMinLakh": 55.7,
    "priceMaxLakh": 55.7,
    "batteryKwh": 84,
    "rangeKmARAI": 690,
    "realRangeKm": 520,
    "powerBhp": 229,
    "torqueNm": 350,
    "accelSec": null,
    "accelNote": null,
    "topSpeedKmph": 185,
    "fastChargeKw": 350,
    "fastChargeTime": "10–80% in 18 min",
    "acChargeKw": 11,
    "chargeTimeFull": null,
    "driveType": "RWD",
    "seating": 5,
    "bootLitres": 527,
    "kerbWeightKg": null,
    "year": 2026,
    "accent": "#22d3ee",
    "notableFeatures": [
      "800V E-GMP architecture",
      "Ultra-fast 350kW charging",
      "V2L power export",
      "Dual 12.3-inch screens"
    ]
  },
  {
    "id": "kia-ev6-gt-line-awd-84-kwh",
    "category": "car",
    "brand": "Kia",
    "model": "EV6",
    "variant": "GT Line AWD 84 kWh",
    "name": "Kia EV6",
    "fullName": "Kia EV6 GT Line AWD 84 kWh",
    "bodyType": "SUV",
    "priceMinLakh": 65.97,
    "priceMaxLakh": 65.97,
    "batteryKwh": 84,
    "rangeKmARAI": 663,
    "realRangeKm": 480,
    "powerBhp": 325,
    "torqueNm": 605,
    "accelSec": 5.3,
    "accelNote": "0-100 km/h",
    "topSpeedKmph": 188,
    "fastChargeKw": 350,
    "fastChargeTime": "10–80% in 18 min",
    "acChargeKw": 11,
    "chargeTimeFull": null,
    "driveType": "AWD",
    "seating": 5,
    "bootLitres": 480,
    "kerbWeightKg": null,
    "year": 2026,
    "accent": "#22d3ee",
    "notableFeatures": [
      "800V dual-motor AWD",
      "Dual 12.3-inch curved displays",
      "8 airbags + Level 2 ADAS",
      "V2L functionality"
    ]
  },
  {
    "id": "ola-s1-pro-gen-3-4-kwh",
    "category": "scooter",
    "brand": "Ola",
    "model": "S1 Pro",
    "variant": "Gen 3 (4 kWh)",
    "name": "Ola S1 Pro",
    "fullName": "Ola S1 Pro Gen 3 (4 kWh)",
    "bodyType": "Scooter",
    "priceMinLakh": 1.15,
    "priceMaxLakh": 1.45,
    "batteryKwh": 4,
    "rangeKmARAI": 242,
    "realRangeKm": 170,
    "powerBhp": 14.75,
    "torqueNm": null,
    "accelSec": 2.7,
    "accelNote": "0-40 km/h",
    "topSpeedKmph": 125,
    "fastChargeKw": null,
    "fastChargeTime": "20-70% in 25 min on Hypercharger",
    "acChargeKw": null,
    "chargeTimeFull": "6.5 hr 0-100%",
    "driveType": null,
    "seating": 2,
    "bootLitres": 34,
    "kerbWeightKg": 113,
    "year": 2026,
    "accent": "#a3e635",
    "notableFeatures": [
      "7-inch TFT touchscreen",
      "MoveOS 5",
      "Cruise control",
      "Reverse mode"
    ]
  },
  {
    "id": "ola-s1-x-gen-3-4-kwh",
    "category": "scooter",
    "brand": "Ola",
    "model": "S1 X",
    "variant": "Gen 3 (4 kWh)",
    "name": "Ola S1 X",
    "fullName": "Ola S1 X Gen 3 (4 kWh)",
    "bodyType": "Scooter",
    "priceMinLakh": 0.9,
    "priceMaxLakh": 1.25,
    "batteryKwh": 4,
    "rangeKmARAI": 242,
    "realRangeKm": 170,
    "powerBhp": null,
    "torqueNm": null,
    "accelSec": null,
    "accelNote": null,
    "topSpeedKmph": 123,
    "fastChargeKw": null,
    "fastChargeTime": "Hypercharger compatible",
    "acChargeKw": null,
    "chargeTimeFull": "approx 5 hr 0-100%",
    "driveType": null,
    "seating": 2,
    "bootLitres": 34,
    "kerbWeightKg": 113,
    "year": 2026,
    "accent": "#a3e635",
    "notableFeatures": [
      "4.3-inch TFT",
      "Three ride modes",
      "Brake-by-wire",
      "Multiple battery options"
    ]
  },
  {
    "id": "ola-s1-x-5-2-kwh-4680-bharat-cell",
    "category": "scooter",
    "brand": "Ola",
    "model": "S1 X+",
    "variant": "5.2 kWh (4680 Bharat Cell)",
    "name": "Ola S1 X+",
    "fullName": "Ola S1 X+ 5.2 kWh (4680 Bharat Cell)",
    "bodyType": "Scooter",
    "priceMinLakh": 1.3,
    "priceMaxLakh": 1.49,
    "batteryKwh": 5.2,
    "rangeKmARAI": 320,
    "realRangeKm": 224,
    "powerBhp": null,
    "torqueNm": null,
    "accelSec": null,
    "accelNote": null,
    "topSpeedKmph": 125,
    "fastChargeKw": null,
    "fastChargeTime": "Hypercharger compatible",
    "acChargeKw": null,
    "chargeTimeFull": null,
    "driveType": null,
    "seating": 2,
    "bootLitres": 34,
    "kerbWeightKg": null,
    "year": 2026,
    "accent": "#a3e635",
    "notableFeatures": [
      "Indigenous 4680 Bharat Cell",
      "320 km claimed range",
      "TFT display",
      "OTA updates"
    ]
  },
  {
    "id": "ola-s1-air-3-kwh",
    "category": "scooter",
    "brand": "Ola",
    "model": "S1 Air",
    "variant": "3 kWh",
    "name": "Ola S1 Air",
    "fullName": "Ola S1 Air 3 kWh",
    "bodyType": "Scooter",
    "priceMinLakh": 0.85,
    "priceMaxLakh": 1.1,
    "batteryKwh": 3,
    "rangeKmARAI": 151,
    "realRangeKm": 105,
    "powerBhp": 6.03,
    "torqueNm": null,
    "accelSec": null,
    "accelNote": null,
    "topSpeedKmph": 95,
    "fastChargeKw": null,
    "fastChargeTime": null,
    "acChargeKw": null,
    "chargeTimeFull": "5 hr 0-100%",
    "driveType": null,
    "seating": 2,
    "bootLitres": 34,
    "kerbWeightKg": 108,
    "year": 2026,
    "accent": "#a3e635",
    "notableFeatures": [
      "Hub-mounted 4.5 kW motor",
      "Lightweight",
      "Multiple battery options",
      "Smartphone connectivity"
    ]
  },
  {
    "id": "ather-450x-3-7-kwh",
    "category": "scooter",
    "brand": "Ather",
    "model": "450X",
    "variant": "3.7 kWh",
    "name": "Ather 450X",
    "fullName": "Ather 450X 3.7 kWh",
    "bodyType": "Scooter",
    "priceMinLakh": 1.47,
    "priceMaxLakh": 1.57,
    "batteryKwh": 3.7,
    "rangeKmARAI": 161,
    "realRangeKm": 113,
    "powerBhp": 8.58,
    "torqueNm": 26,
    "accelSec": null,
    "accelNote": null,
    "topSpeedKmph": 90,
    "fastChargeKw": null,
    "fastChargeTime": "Ather Grid fast charging",
    "acChargeKw": null,
    "chargeTimeFull": "approx 5.7 hr 0-100%",
    "driveType": null,
    "seating": 2,
    "bootLitres": 22,
    "kerbWeightKg": 111,
    "year": 2026,
    "accent": "#a3e635",
    "notableFeatures": [
      "Warp mode",
      "Google Maps navigation",
      "Ather Grid fast charging",
      "Magic twist regen"
    ]
  },
  {
    "id": "ather-rizta-z-3-7-kwh",
    "category": "scooter",
    "brand": "Ather",
    "model": "Rizta",
    "variant": "Z 3.7 kWh",
    "name": "Ather Rizta",
    "fullName": "Ather Rizta Z 3.7 kWh",
    "bodyType": "Scooter",
    "priceMinLakh": 1.21,
    "priceMaxLakh": 1.59,
    "batteryKwh": 3.7,
    "rangeKmARAI": 159,
    "realRangeKm": 111,
    "powerBhp": 5.77,
    "torqueNm": 22,
    "accelSec": null,
    "accelNote": null,
    "topSpeedKmph": 80,
    "fastChargeKw": null,
    "fastChargeTime": "Ather Grid fast charging",
    "acChargeKw": null,
    "chargeTimeFull": null,
    "driveType": null,
    "seating": 2,
    "bootLitres": 34,
    "kerbWeightKg": null,
    "year": 2026,
    "accent": "#a3e635",
    "notableFeatures": [
      "56 L total storage",
      "Longest 900 mm seat",
      "7-inch touchscreen",
      "Family-focused design"
    ]
  },
  {
    "id": "tvs-iqube-3-5-kwh",
    "category": "scooter",
    "brand": "TVS",
    "model": "iQube",
    "variant": "3.5 kWh",
    "name": "TVS iQube",
    "fullName": "TVS iQube 3.5 kWh",
    "bodyType": "Scooter",
    "priceMinLakh": 1.15,
    "priceMaxLakh": 1.35,
    "batteryKwh": 3.5,
    "rangeKmARAI": 145,
    "realRangeKm": 102,
    "powerBhp": 5.9,
    "torqueNm": 33,
    "accelSec": null,
    "accelNote": null,
    "topSpeedKmph": 82,
    "fastChargeKw": null,
    "fastChargeTime": null,
    "acChargeKw": null,
    "chargeTimeFull": null,
    "driveType": null,
    "seating": 2,
    "bootLitres": 32,
    "kerbWeightKg": null,
    "year": 2026,
    "accent": "#a3e635",
    "notableFeatures": [
      "BLDC hub motor",
      "TFT display",
      "Multiple battery options",
      "Connected tech"
    ]
  },
  {
    "id": "tvs-iqube-st-5-3-kwh",
    "category": "scooter",
    "brand": "TVS",
    "model": "iQube ST",
    "variant": "5.3 kWh",
    "name": "TVS iQube ST",
    "fullName": "TVS iQube ST 5.3 kWh",
    "bodyType": "Scooter",
    "priceMinLakh": 1.62,
    "priceMaxLakh": 1.62,
    "batteryKwh": 5.3,
    "rangeKmARAI": 212,
    "realRangeKm": 148,
    "powerBhp": 5.9,
    "torqueNm": 33,
    "accelSec": null,
    "accelNote": null,
    "topSpeedKmph": 82,
    "fastChargeKw": null,
    "fastChargeTime": "0-80% in 4 hr 18 min",
    "acChargeKw": null,
    "chargeTimeFull": null,
    "driveType": null,
    "seating": 2,
    "bootLitres": 32,
    "kerbWeightKg": 132,
    "year": 2026,
    "accent": "#a3e635",
    "notableFeatures": [
      "Voice assist",
      "118+ connected features",
      "Turn-by-turn navigation",
      "Largest battery in iQube range"
    ]
  },
  {
    "id": "bajaj-chetak-c3501-35-series",
    "category": "scooter",
    "brand": "Bajaj",
    "model": "Chetak",
    "variant": "C3501 (35 Series)",
    "name": "Bajaj Chetak",
    "fullName": "Bajaj Chetak C3501 (35 Series)",
    "bodyType": "Scooter",
    "priceMinLakh": 1.2,
    "priceMaxLakh": 1.3,
    "batteryKwh": 3.5,
    "rangeKmARAI": 153,
    "realRangeKm": 107,
    "powerBhp": null,
    "torqueNm": null,
    "accelSec": null,
    "accelNote": null,
    "topSpeedKmph": 80,
    "fastChargeKw": null,
    "fastChargeTime": "0-80% in 3 hr",
    "acChargeKw": null,
    "chargeTimeFull": "approx 4 hr 25 min 0-100%",
    "driveType": null,
    "seating": 2,
    "bootLitres": 35,
    "kerbWeightKg": null,
    "year": 2026,
    "accent": "#a3e635",
    "notableFeatures": [
      "Metal body",
      "5.5-inch touchscreen",
      "Google Maps navigation",
      "35 L boot"
    ]
  },
  {
    "id": "bajaj-chetak-3001-30-series",
    "category": "scooter",
    "brand": "Bajaj",
    "model": "Chetak",
    "variant": "3001 (30 Series)",
    "name": "Bajaj Chetak",
    "fullName": "Bajaj Chetak 3001 (30 Series)",
    "bodyType": "Scooter",
    "priceMinLakh": 1,
    "priceMaxLakh": 1.07,
    "batteryKwh": 3,
    "rangeKmARAI": 127,
    "realRangeKm": 89,
    "powerBhp": 4.16,
    "torqueNm": null,
    "accelSec": null,
    "accelNote": null,
    "topSpeedKmph": 63,
    "fastChargeKw": null,
    "fastChargeTime": "0-80% in 3 hr 50 min",
    "acChargeKw": null,
    "chargeTimeFull": null,
    "driveType": null,
    "seating": 2,
    "bootLitres": 35,
    "kerbWeightKg": null,
    "year": 2026,
    "accent": "#a3e635",
    "notableFeatures": [
      "IP67 steel frame",
      "Hill Start Assist",
      "Anti-theft alarm",
      "Affordable entry Chetak"
    ]
  },
  {
    "id": "hero-vida-v2-pro-3-94-kwh",
    "category": "scooter",
    "brand": "Hero",
    "model": "Vida V2",
    "variant": "Pro (3.94 kWh)",
    "name": "Hero Vida V2",
    "fullName": "Hero Vida V2 Pro (3.94 kWh)",
    "bodyType": "Scooter",
    "priceMinLakh": 0.96,
    "priceMaxLakh": 1.35,
    "batteryKwh": 3.94,
    "rangeKmARAI": 165,
    "realRangeKm": 115,
    "powerBhp": 8,
    "torqueNm": 25,
    "accelSec": null,
    "accelNote": null,
    "topSpeedKmph": 80,
    "fastChargeKw": null,
    "fastChargeTime": "0-80% in 5.5 hr",
    "acChargeKw": null,
    "chargeTimeFull": null,
    "driveType": null,
    "seating": 2,
    "bootLitres": null,
    "kerbWeightKg": null,
    "year": 2026,
    "accent": "#a3e635",
    "notableFeatures": [
      "Removable dual batteries",
      "7-inch TFT",
      "4 ride modes",
      "Charge anywhere"
    ]
  },
  {
    "id": "hero-vida-vx2-plus-dual-3-4-kwh",
    "category": "scooter",
    "brand": "Hero",
    "model": "Vida VX2",
    "variant": "Plus (dual 3.4 kWh)",
    "name": "Hero Vida VX2",
    "fullName": "Hero Vida VX2 Plus (dual 3.4 kWh)",
    "bodyType": "Scooter",
    "priceMinLakh": 0.99,
    "priceMaxLakh": 1.1,
    "batteryKwh": 3.4,
    "rangeKmARAI": 142,
    "realRangeKm": 100,
    "powerBhp": 8,
    "torqueNm": 25,
    "accelSec": 4.2,
    "accelNote": "0-40 km/h",
    "topSpeedKmph": 80,
    "fastChargeKw": null,
    "fastChargeTime": null,
    "acChargeKw": null,
    "chargeTimeFull": null,
    "driveType": null,
    "seating": 2,
    "bootLitres": null,
    "kerbWeightKg": 115,
    "year": 2026,
    "accent": "#a3e635",
    "notableFeatures": [
      "Removable batteries",
      "Battery-as-a-Service option",
      "PMSM motor",
      "Combined braking system"
    ]
  },
  {
    "id": "ampere-nexus-ex-st",
    "category": "scooter",
    "brand": "Ampere",
    "model": "Nexus",
    "variant": "EX / ST",
    "name": "Ampere Nexus",
    "fullName": "Ampere Nexus EX / ST",
    "bodyType": "Scooter",
    "priceMinLakh": 1.15,
    "priceMaxLakh": 1.2,
    "batteryKwh": 3,
    "rangeKmARAI": 136,
    "realRangeKm": 105,
    "powerBhp": 4.43,
    "torqueNm": null,
    "accelSec": null,
    "accelNote": null,
    "topSpeedKmph": 93,
    "fastChargeKw": null,
    "fastChargeTime": null,
    "acChargeKw": null,
    "chargeTimeFull": "3 hr 20 min 0-100%",
    "driveType": null,
    "seating": 2,
    "bootLitres": null,
    "kerbWeightKg": null,
    "year": 2026,
    "accent": "#a3e635",
    "notableFeatures": [
      "LFP battery",
      "7-inch TFT",
      "12-inch alloys",
      "5yr/75,000 km battery warranty"
    ]
  },
  {
    "id": "simple-one-gen-2-5-kwh",
    "category": "scooter",
    "brand": "Simple",
    "model": "One",
    "variant": "Gen 2 (5 kWh)",
    "name": "Simple One",
    "fullName": "Simple One Gen 2 (5 kWh)",
    "bodyType": "Scooter",
    "priceMinLakh": 1.4,
    "priceMaxLakh": 1.78,
    "batteryKwh": 5,
    "rangeKmARAI": 265,
    "realRangeKm": 185,
    "powerBhp": 11.8,
    "torqueNm": 72,
    "accelSec": 2.55,
    "accelNote": "0-40 km/h",
    "topSpeedKmph": 115,
    "fastChargeKw": null,
    "fastChargeTime": null,
    "acChargeKw": null,
    "chargeTimeFull": null,
    "driveType": null,
    "seating": 2,
    "bootLitres": null,
    "kerbWeightKg": null,
    "year": 2026,
    "accent": "#a3e635",
    "notableFeatures": [
      "8.8 kW peak motor",
      "265 km claimed range",
      "Lifetime warranty",
      "EcoX and SonicX modes"
    ]
  },
  {
    "id": "river-indie",
    "category": "scooter",
    "brand": "River",
    "model": "Indie",
    "variant": null,
    "name": "River Indie",
    "fullName": "River Indie",
    "bodyType": "Scooter",
    "priceMinLakh": 1.42,
    "priceMaxLakh": 1.54,
    "batteryKwh": 4,
    "rangeKmARAI": 161,
    "realRangeKm": 120,
    "powerBhp": 8.99,
    "torqueNm": 26,
    "accelSec": 3.7,
    "accelNote": "0-40 km/h",
    "topSpeedKmph": 90,
    "fastChargeKw": null,
    "fastChargeTime": "0-80% in 5 hr",
    "acChargeKw": null,
    "chargeTimeFull": null,
    "driveType": null,
    "seating": 2,
    "bootLitres": 43,
    "kerbWeightKg": null,
    "year": 2026,
    "accent": "#a3e635",
    "notableFeatures": [
      "43 L under-seat storage",
      "12 L front glovebox",
      "SUV-style rugged design",
      "Dual USB ports"
    ]
  },
  {
    "id": "bgauss-ruv-350-ex-max",
    "category": "scooter",
    "brand": "BGauss",
    "model": "RUV 350",
    "variant": "EX / Max",
    "name": "BGauss RUV 350",
    "fullName": "BGauss RUV 350 EX / Max",
    "bodyType": "Scooter",
    "priceMinLakh": 1.1,
    "priceMaxLakh": 1.35,
    "batteryKwh": 3,
    "rangeKmARAI": 145,
    "realRangeKm": 105,
    "powerBhp": 4.69,
    "torqueNm": null,
    "accelSec": 5.8,
    "accelNote": "0-40 km/h",
    "topSpeedKmph": 75,
    "fastChargeKw": null,
    "fastChargeTime": null,
    "acChargeKw": null,
    "chargeTimeFull": "6.5 hr 0-100%",
    "driveType": null,
    "seating": 2,
    "bootLitres": null,
    "kerbWeightKg": 122,
    "year": 2026,
    "accent": "#a3e635",
    "notableFeatures": [
      "16-inch alloy wheels",
      "5-inch TFT",
      "IP67 hub motor",
      "Turn-by-turn navigation"
    ]
  },
  {
    "id": "revolt-rv400-brz-standard",
    "category": "motorcycle",
    "brand": "Revolt",
    "model": "RV400",
    "variant": "BRZ / standard",
    "name": "Revolt RV400",
    "fullName": "Revolt RV400 BRZ / standard",
    "bodyType": "Motorcycle",
    "priceMinLakh": 1.39,
    "priceMaxLakh": 1.43,
    "batteryKwh": 3.24,
    "rangeKmARAI": 150,
    "realRangeKm": 100,
    "powerBhp": 5.5,
    "torqueNm": 54,
    "accelSec": null,
    "accelNote": null,
    "topSpeedKmph": 85,
    "fastChargeKw": null,
    "fastChargeTime": null,
    "acChargeKw": null,
    "chargeTimeFull": "4.5 hr 0-100%",
    "driveType": null,
    "seating": 2,
    "bootLitres": null,
    "kerbWeightKg": 108,
    "year": 2026,
    "accent": "#fb923c",
    "notableFeatures": [
      "Removable battery",
      "AI-enabled sounds",
      "Three ride modes",
      "App connectivity"
    ]
  },
  {
    "id": "revolt-rv1-base-2-2-kwh",
    "category": "motorcycle",
    "brand": "Revolt",
    "model": "RV1",
    "variant": "Base 2.2 kWh",
    "name": "Revolt RV1",
    "fullName": "Revolt RV1 Base 2.2 kWh",
    "bodyType": "Motorcycle",
    "priceMinLakh": 0.85,
    "priceMaxLakh": 0.85,
    "batteryKwh": 2.2,
    "rangeKmARAI": 100,
    "realRangeKm": 70,
    "powerBhp": 3.75,
    "torqueNm": null,
    "accelSec": null,
    "accelNote": null,
    "topSpeedKmph": 70,
    "fastChargeKw": null,
    "fastChargeTime": null,
    "acChargeKw": null,
    "chargeTimeFull": "3 hr 0-80%",
    "driveType": null,
    "seating": 2,
    "bootLitres": null,
    "kerbWeightKg": null,
    "year": 2026,
    "accent": "#fb923c",
    "notableFeatures": [
      "Removable battery",
      "Affordable commuter EV",
      "LCD console",
      "App connectivity"
    ]
  },
  {
    "id": "revolt-rv1-3-24-kwh",
    "category": "motorcycle",
    "brand": "Revolt",
    "model": "RV1+",
    "variant": "3.24 kWh",
    "name": "Revolt RV1+",
    "fullName": "Revolt RV1+ 3.24 kWh",
    "bodyType": "Motorcycle",
    "priceMinLakh": 1,
    "priceMaxLakh": 1,
    "batteryKwh": 3.24,
    "rangeKmARAI": 160,
    "realRangeKm": 110,
    "powerBhp": 3.75,
    "torqueNm": null,
    "accelSec": null,
    "accelNote": null,
    "topSpeedKmph": 75,
    "fastChargeKw": null,
    "fastChargeTime": "1 hr 20 min 0-80%",
    "acChargeKw": null,
    "chargeTimeFull": "4.5 hr 0-100%",
    "driveType": null,
    "seating": 2,
    "bootLitres": null,
    "kerbWeightKg": null,
    "year": 2026,
    "accent": "#fb923c",
    "notableFeatures": [
      "Removable battery",
      "Fast charging",
      "Larger range pack",
      "App connectivity"
    ]
  },
  {
    "id": "revolt-rv-blazex",
    "category": "motorcycle",
    "brand": "Revolt",
    "model": "RV BlazeX",
    "variant": null,
    "name": "Revolt RV BlazeX",
    "fullName": "Revolt RV BlazeX",
    "bodyType": "Motorcycle",
    "priceMinLakh": 1.14,
    "priceMaxLakh": 1.2,
    "batteryKwh": 3.24,
    "rangeKmARAI": 150,
    "realRangeKm": 105,
    "powerBhp": 5.5,
    "torqueNm": null,
    "accelSec": null,
    "accelNote": null,
    "topSpeedKmph": 85,
    "fastChargeKw": null,
    "fastChargeTime": "80 min 0-80%",
    "acChargeKw": null,
    "chargeTimeFull": "3.5 hr 0-80%",
    "driveType": null,
    "seating": 2,
    "bootLitres": null,
    "kerbWeightKg": 113,
    "year": 2026,
    "accent": "#fb923c",
    "notableFeatures": [
      "Removable IP67 battery",
      "Lightweight 113 kg",
      "6-inch LCD display",
      "Fast charging"
    ]
  },
  {
    "id": "tork-kratos-r",
    "category": "motorcycle",
    "brand": "Tork",
    "model": "Kratos R",
    "variant": null,
    "name": "Tork Kratos R",
    "fullName": "Tork Kratos R",
    "bodyType": "Motorcycle",
    "priceMinLakh": 1.5,
    "priceMaxLakh": 1.5,
    "batteryKwh": 4,
    "rangeKmARAI": 180,
    "realRangeKm": 120,
    "powerBhp": 12.07,
    "torqueNm": 38,
    "accelSec": 3.5,
    "accelNote": "0-40 km/h",
    "topSpeedKmph": 105,
    "fastChargeKw": null,
    "fastChargeTime": "1 hr 0-80%",
    "acChargeKw": null,
    "chargeTimeFull": "5 hr 0-100%",
    "driveType": null,
    "seating": 2,
    "bootLitres": null,
    "kerbWeightKg": 140,
    "year": 2026,
    "accent": "#fb923c",
    "notableFeatures": [
      "Axial flux motor",
      "Regenerative braking",
      "Track mode",
      "Geo-fencing"
    ]
  },
  {
    "id": "ultraviolette-f77-mach-2-standard-7-1-kwh",
    "category": "motorcycle",
    "brand": "Ultraviolette",
    "model": "F77 Mach 2",
    "variant": "Standard 7.1 kWh",
    "name": "Ultraviolette F77 Mach 2",
    "fullName": "Ultraviolette F77 Mach 2 Standard 7.1 kWh",
    "bodyType": "Motorcycle",
    "priceMinLakh": 3.09,
    "priceMaxLakh": 4.24,
    "batteryKwh": 7.1,
    "rangeKmARAI": 211,
    "realRangeKm": 150,
    "powerBhp": 36.2,
    "torqueNm": 90,
    "accelSec": 2.8,
    "accelNote": "0-60 km/h",
    "topSpeedKmph": 155,
    "fastChargeKw": null,
    "fastChargeTime": null,
    "acChargeKw": null,
    "chargeTimeFull": "5 hr 0-80%",
    "driveType": null,
    "seating": 2,
    "bootLitres": null,
    "kerbWeightKg": 207,
    "year": 2026,
    "accent": "#fb923c",
    "notableFeatures": [
      "5-inch TFT",
      "Dynamic stability control",
      "Hill hold",
      "USD front forks"
    ]
  },
  {
    "id": "ultraviolette-f77-mach-2-recon-recon-10-3-kwh",
    "category": "motorcycle",
    "brand": "Ultraviolette",
    "model": "F77 Mach 2 Recon",
    "variant": "Recon 10.3 kWh",
    "name": "Ultraviolette F77 Mach 2 Recon",
    "fullName": "Ultraviolette F77 Mach 2 Recon Recon 10.3 kWh",
    "bodyType": "Motorcycle",
    "priceMinLakh": 4.24,
    "priceMaxLakh": 4.24,
    "batteryKwh": 10.3,
    "rangeKmARAI": 323,
    "realRangeKm": 230,
    "powerBhp": 40.2,
    "torqueNm": 100,
    "accelSec": 2.8,
    "accelNote": "0-60 km/h",
    "topSpeedKmph": 155,
    "fastChargeKw": null,
    "fastChargeTime": null,
    "acChargeKw": null,
    "chargeTimeFull": "6 hr 0-100%",
    "driveType": null,
    "seating": 2,
    "bootLitres": null,
    "kerbWeightKg": 207,
    "year": 2026,
    "accent": "#fb923c",
    "notableFeatures": [
      "Highest range in segment",
      "30 kW motor",
      "DSC and ABS",
      "5-inch TFT"
    ]
  },
  {
    "id": "oben-rorr-original-4-4-kwh",
    "category": "motorcycle",
    "brand": "Oben",
    "model": "Rorr",
    "variant": "Original 4.4 kWh",
    "name": "Oben Rorr",
    "fullName": "Oben Rorr Original 4.4 kWh",
    "bodyType": "Motorcycle",
    "priceMinLakh": 1.5,
    "priceMaxLakh": 1.5,
    "batteryKwh": 4.4,
    "rangeKmARAI": 187,
    "realRangeKm": 130,
    "powerBhp": 10.73,
    "torqueNm": 52,
    "accelSec": null,
    "accelNote": null,
    "topSpeedKmph": 100,
    "fastChargeKw": null,
    "fastChargeTime": null,
    "acChargeKw": null,
    "chargeTimeFull": "4 hr 0-100%",
    "driveType": null,
    "seating": 2,
    "bootLitres": null,
    "kerbWeightKg": 147,
    "year": 2026,
    "accent": "#fb923c",
    "notableFeatures": [
      "LFP battery",
      "All-LED lighting",
      "Digital console",
      "Three ride modes"
    ]
  },
  {
    "id": "oben-rorr-ez-up-to-4-4-kwh",
    "category": "motorcycle",
    "brand": "Oben",
    "model": "Rorr EZ",
    "variant": "Up to 4.4 kWh",
    "name": "Oben Rorr EZ",
    "fullName": "Oben Rorr EZ Up to 4.4 kWh",
    "bodyType": "Motorcycle",
    "priceMinLakh": 1,
    "priceMaxLakh": 1.3,
    "batteryKwh": 4.4,
    "rangeKmARAI": 175,
    "realRangeKm": 122,
    "powerBhp": 10.73,
    "torqueNm": 52,
    "accelSec": null,
    "accelNote": null,
    "topSpeedKmph": 95,
    "fastChargeKw": null,
    "fastChargeTime": "45 min 0-80%",
    "acChargeKw": null,
    "chargeTimeFull": "4 hr 0-100%",
    "driveType": null,
    "seating": 2,
    "bootLitres": null,
    "kerbWeightKg": 130,
    "year": 2026,
    "accent": "#fb923c",
    "notableFeatures": [
      "Three battery options",
      "Fast charging 0-80% in 45 min",
      "Eco/City/Havoc modes",
      "All-LED lighting"
    ]
  },
  {
    "id": "matter-aera-5000-geared",
    "category": "motorcycle",
    "brand": "Matter",
    "model": "Aera 5000+",
    "variant": "Geared",
    "name": "Matter Aera 5000+",
    "fullName": "Matter Aera 5000+ Geared",
    "bodyType": "Motorcycle",
    "priceMinLakh": 1.83,
    "priceMaxLakh": 1.94,
    "batteryKwh": 5,
    "rangeKmARAI": 125,
    "realRangeKm": 88,
    "powerBhp": 15.4,
    "torqueNm": null,
    "accelSec": null,
    "accelNote": null,
    "topSpeedKmph": 105,
    "fastChargeKw": null,
    "fastChargeTime": "1.5 hr 0-80%",
    "acChargeKw": null,
    "chargeTimeFull": "6 hr 0-100%",
    "driveType": null,
    "seating": 2,
    "bootLitres": null,
    "kerbWeightKg": 168,
    "year": 2026,
    "accent": "#fb923c",
    "notableFeatures": [
      "4-speed manual gearbox",
      "Liquid-cooled battery",
      "ABS with disc brakes",
      "Smartphone connectivity"
    ]
  },
  {
    "id": "orxa-mantis",
    "category": "motorcycle",
    "brand": "Orxa",
    "model": "Mantis",
    "variant": null,
    "name": "Orxa Mantis",
    "fullName": "Orxa Mantis",
    "bodyType": "Motorcycle",
    "priceMinLakh": 3.6,
    "priceMaxLakh": 3.6,
    "batteryKwh": 8.9,
    "rangeKmARAI": 221,
    "realRangeKm": 155,
    "powerBhp": 27.12,
    "torqueNm": 93,
    "accelSec": 8.9,
    "accelNote": "0-100 km/h",
    "topSpeedKmph": 135,
    "fastChargeKw": 3.3,
    "fastChargeTime": "2.5 hr 0-80%",
    "acChargeKw": null,
    "chargeTimeFull": "5 hr 0-80%",
    "driveType": null,
    "seating": 2,
    "bootLitres": null,
    "kerbWeightKg": 182,
    "year": 2026,
    "accent": "#fb923c",
    "notableFeatures": [
      "Twin projector LED headlights",
      "5-inch TFT",
      "Ride-by-wire",
      "Regenerative braking"
    ]
  },
  {
    "id": "kabira-km4000-mark-2",
    "category": "motorcycle",
    "brand": "Kabira",
    "model": "KM4000 Mark 2",
    "variant": null,
    "name": "Kabira KM4000 Mark 2",
    "fullName": "Kabira KM4000 Mark 2",
    "bodyType": "Motorcycle",
    "priceMinLakh": 1.51,
    "priceMaxLakh": 1.7,
    "batteryKwh": 4.1,
    "rangeKmARAI": 178,
    "realRangeKm": 125,
    "powerBhp": null,
    "torqueNm": null,
    "accelSec": null,
    "accelNote": null,
    "topSpeedKmph": 120,
    "fastChargeKw": null,
    "fastChargeTime": null,
    "acChargeKw": null,
    "chargeTimeFull": "3 hr 0-100%",
    "driveType": null,
    "seating": 2,
    "bootLitres": null,
    "kerbWeightKg": 152,
    "year": 2026,
    "accent": "#fb923c",
    "notableFeatures": [
      "120 km/h top speed",
      "Fast 3-hour charge",
      "Digital console",
      "Sporty styling"
    ]
  },
  {"id":"tesla-model-y-premium-rwd","category":"car","brand":"Tesla","model":"Model Y","variant":"Premium RWD","name":"Tesla Model Y","fullName":"Tesla Model Y Premium RWD","bodyType":"SUV","priceMinLakh":50.89,"priceMaxLakh":50.89,"batteryKwh":60,"rangeKmARAI":500,"realRangeKm":375,"powerBhp":null,"torqueNm":null,"accelSec":5.9,"accelNote":"0-100 km/h","topSpeedKmph":201,"fastChargeKw":175,"fastChargeTime":"238 km in 15 min","acChargeKw":11,"chargeTimeFull":null,"driveType":"RWD","seating":5,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#22d3ee","upcoming":false,"notableFeatures":["15.4-inch touchscreen","Panoramic glass roof","Supercharger network","Autopilot"]},
  {"id":"tesla-model-y-long-range-rwd","category":"car","brand":"Tesla","model":"Model Y","variant":"Long Range RWD","name":"Tesla Model Y","fullName":"Tesla Model Y Long Range RWD","bodyType":"SUV","priceMinLakh":60,"priceMaxLakh":62,"batteryKwh":84.2,"rangeKmARAI":661,"realRangeKm":500,"powerBhp":null,"torqueNm":null,"accelSec":5.9,"accelNote":"0-100 km/h","topSpeedKmph":201,"fastChargeKw":175,"fastChargeTime":"238 km in 15 min","acChargeKw":11,"chargeTimeFull":null,"driveType":"RWD","seating":5,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#22d3ee","upcoming":false,"notableFeatures":["661 km WLTP range","15.4-inch touchscreen","Panoramic glass roof","Autopilot"]},
  {"id":"tesla-model-y-l-long-wheelbase-awd","category":"car","brand":"Tesla","model":"Model Y L","variant":"Long Wheelbase AWD","name":"Tesla Model Y L","fullName":"Tesla Model Y L Long Wheelbase AWD","bodyType":"SUV","priceMinLakh":61.99,"priceMaxLakh":61.99,"batteryKwh":84.2,"rangeKmARAI":681,"realRangeKm":510,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":201,"fastChargeKw":175,"fastChargeTime":null,"acChargeKw":11,"chargeTimeFull":null,"driveType":"AWD","seating":6,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#22d3ee","upcoming":false,"notableFeatures":["6-seater 3-row layout","681 km range","Dual-motor AWD","Panoramic glass roof"]},
  {"id":"tesla-model-3","category":"car","brand":"Tesla","model":"Model 3","variant":null,"name":"Tesla Model 3","fullName":"Tesla Model 3","bodyType":"Sedan","priceMinLakh":60,"priceMaxLakh":70,"batteryKwh":79,"rangeKmARAI":500,"realRangeKm":400,"powerBhp":283,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":175,"fastChargeTime":"10-80% in 40 min","acChargeKw":11,"chargeTimeFull":null,"driveType":"RWD","seating":5,"bootLitres":null,"kerbWeightKg":null,"year":2026,"accent":"#22d3ee","upcoming":true,"notableFeatures":["Highland facelift CBU","15-inch touchscreen","Panoramic glass roof","Autopilot"]},
  {"id":"hyundai-ioniq-6","category":"car","brand":"Hyundai","model":"Ioniq 6","variant":null,"name":"Hyundai Ioniq 6","fullName":"Hyundai Ioniq 6","bodyType":"Sedan","priceMinLakh":52,"priceMaxLakh":65,"batteryKwh":77.4,"rangeKmARAI":631,"realRangeKm":475,"powerBhp":320,"torqueNm":null,"accelSec":5.1,"accelNote":"0-100 km/h","topSpeedKmph":null,"fastChargeKw":350,"fastChargeTime":"10-80% in 18 min","acChargeKw":11,"chargeTimeFull":null,"driveType":"RWD","seating":5,"bootLitres":null,"kerbWeightKg":null,"year":2026,"accent":"#22d3ee","upcoming":true,"notableFeatures":["800V architecture","350 kW ultra-fast charging","Level 2 ADAS","Streamliner aero design"]},
  {"id":"kia-carens-clavis-ev-42-kwh","category":"car","brand":"Kia","model":"Carens Clavis EV","variant":"42 kWh","name":"Kia Carens Clavis EV","fullName":"Kia Carens Clavis EV 42 kWh","bodyType":"MPV","priceMinLakh":17.99,"priceMaxLakh":20.49,"batteryKwh":42,"rangeKmARAI":404,"realRangeKm":303,"powerBhp":135,"torqueNm":255,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":100,"fastChargeTime":"10-80% in 39 min","acChargeKw":11,"chargeTimeFull":null,"driveType":"FWD","seating":6,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#22d3ee","upcoming":false,"notableFeatures":["6/7-seat options","Level 2 ADAS","Dual-screen setup","V2L capability"]},
  {"id":"kia-carens-clavis-ev-51-4-kwh-long-range","category":"car","brand":"Kia","model":"Carens Clavis EV","variant":"51.4 kWh Long Range","name":"Kia Carens Clavis EV","fullName":"Kia Carens Clavis EV 51.4 kWh Long Range","bodyType":"MPV","priceMinLakh":21.99,"priceMaxLakh":24.49,"batteryKwh":51.4,"rangeKmARAI":490,"realRangeKm":368,"powerBhp":171,"torqueNm":255,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":100,"fastChargeTime":"10-80% in 39 min","acChargeKw":11,"chargeTimeFull":null,"driveType":"FWD","seating":6,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#22d3ee","upcoming":false,"notableFeatures":["490 km range","Level 2 ADAS","6/7-seat options","V2L capability"]},
  {"id":"kia-ev9-gt-line","category":"car","brand":"Kia","model":"EV9","variant":"GT-Line","name":"Kia EV9","fullName":"Kia EV9 GT-Line","bodyType":"Luxury SUV","priceMinLakh":130,"priceMaxLakh":130,"batteryKwh":99.8,"rangeKmARAI":561,"realRangeKm":420,"powerBhp":379,"torqueNm":700,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":350,"fastChargeTime":"10-80% in 24 min","acChargeKw":11,"chargeTimeFull":null,"driveType":"AWD","seating":6,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#22d3ee","upcoming":false,"notableFeatures":["800V architecture","6-seat captain chairs","Level 2 ADAS","5+ metre flagship SUV"]},
  {"id":"kia-syros-ev","category":"car","brand":"Kia","model":"Syros EV","variant":null,"name":"Kia Syros EV","fullName":"Kia Syros EV","bodyType":"SUV","priceMinLakh":14,"priceMaxLakh":20,"batteryKwh":42,"rangeKmARAI":390,"realRangeKm":293,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":null,"fastChargeTime":"10-80% in ~30 min","acChargeKw":null,"chargeTimeFull":null,"driveType":"FWD","seating":5,"bootLitres":null,"kerbWeightKg":null,"year":2026,"accent":"#22d3ee","upcoming":true,"notableFeatures":["K1 platform","Dual-screen setup","Ventilated seats","Kia's most affordable EV"]},
  {"id":"byd-sealion-7-premium-rwd","category":"car","brand":"BYD","model":"Sealion 7","variant":"Premium RWD","name":"BYD Sealion 7","fullName":"BYD Sealion 7 Premium RWD","bodyType":"SUV","priceMinLakh":49.4,"priceMaxLakh":49.4,"batteryKwh":82.56,"rangeKmARAI":567,"realRangeKm":425,"powerBhp":313,"torqueNm":380,"accelSec":6.7,"accelNote":"0-100 km/h","topSpeedKmph":null,"fastChargeKw":150,"fastChargeTime":null,"acChargeKw":11,"chargeTimeFull":null,"driveType":"RWD","seating":5,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#22d3ee","upcoming":false,"notableFeatures":["15.6-inch rotating screen","Panoramic sunroof","11 airbags","360-degree camera"]},
  {"id":"byd-sealion-7-performance-awd","category":"car","brand":"BYD","model":"Sealion 7","variant":"Performance AWD","name":"BYD Sealion 7","fullName":"BYD Sealion 7 Performance AWD","bodyType":"SUV","priceMinLakh":54.9,"priceMaxLakh":54.9,"batteryKwh":82.56,"rangeKmARAI":542,"realRangeKm":407,"powerBhp":530,"torqueNm":690,"accelSec":4.5,"accelNote":"0-100 km/h","topSpeedKmph":null,"fastChargeKw":150,"fastChargeTime":null,"acChargeKw":11,"chargeTimeFull":null,"driveType":"AWD","seating":5,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#22d3ee","upcoming":false,"notableFeatures":["Dual-motor AWD","0-100 in 4.5s","15.6-inch rotating screen","11 airbags"]},
  {"id":"vinfast-vf6","category":"car","brand":"VinFast","model":"VF6","variant":null,"name":"VinFast VF6","fullName":"VinFast VF6","bodyType":"SUV","priceMinLakh":16.49,"priceMaxLakh":18.29,"batteryKwh":59.6,"rangeKmARAI":468,"realRangeKm":351,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":11,"chargeTimeFull":null,"driveType":"FWD","seating":5,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#22d3ee","upcoming":false,"notableFeatures":["Assembled in Tamil Nadu","12.9-inch touchscreen","Level 2 ADAS","Panoramic roof"]},
  {"id":"vinfast-vf7","category":"car","brand":"VinFast","model":"VF7","variant":null,"name":"VinFast VF7","fullName":"VinFast VF7","bodyType":"SUV","priceMinLakh":20.89,"priceMaxLakh":25.49,"batteryKwh":70.8,"rangeKmARAI":532,"realRangeKm":399,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":11,"chargeTimeFull":null,"driveType":"FWD","seating":5,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#22d3ee","upcoming":false,"notableFeatures":["Assembled in Tamil Nadu","FWD & AWD options","Advanced HUD","10-year battery warranty"]},
  {"id":"volvo-ex30","category":"car","brand":"Volvo","model":"EX30","variant":null,"name":"Volvo EX30","fullName":"Volvo EX30","bodyType":"SUV","priceMinLakh":41,"priceMaxLakh":46,"batteryKwh":69,"rangeKmARAI":475,"realRangeKm":356,"powerBhp":268,"torqueNm":343,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":153,"fastChargeTime":null,"acChargeKw":11,"chargeTimeFull":null,"driveType":"RWD","seating":5,"bootLitres":318,"kerbWeightKg":null,"year":2025,"accent":"#22d3ee","upcoming":false,"notableFeatures":["Cheapest Volvo in India","Vertical centre touchscreen","Sustainable cabin materials","Compact luxury SUV"]},
  {"id":"volvo-ex40-single-motor-ultra","category":"car","brand":"Volvo","model":"EX40","variant":"Single Motor Ultra","name":"Volvo EX40","fullName":"Volvo EX40 Single Motor Ultra","bodyType":"SUV","priceMinLakh":50.1,"priceMaxLakh":56,"batteryKwh":69,"rangeKmARAI":475,"realRangeKm":356,"powerBhp":238,"torqueNm":420,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":150,"fastChargeTime":null,"acChargeKw":11,"chargeTimeFull":null,"driveType":"RWD","seating":5,"bootLitres":419,"kerbWeightKg":null,"year":2024,"accent":"#22d3ee","upcoming":false,"notableFeatures":["Google built-in","Pixel LED headlights","Harman Kardon audio","475 km WLTP range"]},
  {"id":"volvo-ec40","category":"car","brand":"Volvo","model":"EC40","variant":null,"name":"Volvo EC40","fullName":"Volvo EC40","bodyType":"Coupe","priceMinLakh":59,"priceMaxLakh":62,"batteryKwh":78,"rangeKmARAI":530,"realRangeKm":398,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":150,"fastChargeTime":null,"acChargeKw":11,"chargeTimeFull":null,"driveType":"AWD","seating":5,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#22d3ee","upcoming":false,"notableFeatures":["Dual-motor AWD","Coupe-SUV styling","Google built-in","530 km WLTP range"]},
  {"id":"volvo-ex90","category":"car","brand":"Volvo","model":"EX90","variant":null,"name":"Volvo EX90","fullName":"Volvo EX90","bodyType":"Luxury SUV","priceMinLakh":120,"priceMaxLakh":130,"batteryKwh":111,"rangeKmARAI":600,"realRangeKm":450,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":250,"fastChargeTime":null,"acChargeKw":11,"chargeTimeFull":null,"driveType":"AWD","seating":7,"bootLitres":null,"kerbWeightKg":null,"year":2026,"accent":"#22d3ee","upcoming":true,"notableFeatures":["7-seat flagship SUV","LiDAR-based safety","Bowers & Wilkins audio","Dual-motor AWD"]},
  {"id":"tata-sierra-ev","category":"car","brand":"Tata","model":"Sierra EV","variant":"63 kWh RWD","name":"Tata Sierra EV","fullName":"Tata Sierra EV 63 kWh RWD","bodyType":"SUV","priceMinLakh":18.79,"priceMaxLakh":22.79,"batteryKwh":63,"rangeKmARAI":565,"realRangeKm":450,"powerBhp":235,"torqueNm":315,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":120,"fastChargeTime":"20-80% in 26 min","acChargeKw":7.2,"chargeTimeFull":null,"driveType":"RWD","seating":5,"bootLitres":622,"kerbWeightKg":null,"year":2026,"accent":"#22d3ee","upcoming":false,"notableFeatures":["Acti.ev platform","Triple 12-inch screen setup","Level 2+ ADAS","540-degree surround camera","Lifetime battery warranty"]},
  {"id":"tata-sierra-ev-qwd-75-kwh","category":"car","brand":"Tata","model":"Sierra EV","variant":"QWD 75 kWh","name":"Tata Sierra EV","fullName":"Tata Sierra EV QWD 75 kWh","bodyType":"SUV","priceMinLakh":25.99,"priceMaxLakh":25.99,"batteryKwh":75,"rangeKmARAI":665,"realRangeKm":520,"powerBhp":344,"torqueNm":504,"accelSec":5.8,"accelNote":"0-100 km/h","topSpeedKmph":null,"fastChargeKw":120,"fastChargeTime":"263 km in 15 min","acChargeKw":7.2,"chargeTimeFull":null,"driveType":"AWD","seating":5,"bootLitres":622,"kerbWeightKg":null,"year":2026,"accent":"#22d3ee","upcoming":false,"notableFeatures":["Quad Wheel Drive dual motor","0-100 km/h in 5.8s","665 km MIDC range","12-speaker JBL with soundbar","V2L & V2V charging"]},
  {"id":"mahindra-xev-9s","category":"car","brand":"Mahindra","model":"XEV 9S","variant":null,"name":"Mahindra XEV 9S","fullName":"Mahindra XEV 9S","bodyType":"SUV","priceMinLakh":19.95,"priceMaxLakh":29.45,"batteryKwh":79,"rangeKmARAI":679,"realRangeKm":509,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":175,"fastChargeTime":"20-80% in 20 min","acChargeKw":11,"chargeTimeFull":null,"driveType":"RWD","seating":7,"bootLitres":null,"kerbWeightKg":null,"year":2026,"accent":"#22d3ee","upcoming":true,"notableFeatures":["First dedicated 7-seat mass-market EV","INGLO platform","59/70/79 kWh options","175 kW fast charging"]},
  {"id":"toyota-urban-cruiser-ev","category":"car","brand":"Toyota","model":"Urban Cruiser EV","variant":null,"name":"Toyota Urban Cruiser EV","fullName":"Toyota Urban Cruiser EV","bodyType":"SUV","priceMinLakh":19,"priceMaxLakh":25,"batteryKwh":61,"rangeKmARAI":543,"realRangeKm":407,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":50,"fastChargeTime":"10-80% in ~45-50 min","acChargeKw":null,"chargeTimeFull":null,"driveType":"FWD","seating":5,"bootLitres":null,"kerbWeightKg":null,"year":2026,"accent":"#22d3ee","upcoming":true,"notableFeatures":["e Vitara twin","49 & 61 kWh options","Launch confirmed Jan 2026","Mid-size electric SUV"]},
  {"id":"citroen-basalt-ev","category":"car","brand":"Citroen","model":"Basalt EV","variant":null,"name":"Citroen Basalt EV","fullName":"Citroen Basalt EV","bodyType":"Coupe","priceMinLakh":14,"priceMaxLakh":17,"batteryKwh":35,"rangeKmARAI":450,"realRangeKm":338,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":"FWD","seating":5,"bootLitres":null,"kerbWeightKg":null,"year":2026,"accent":"#22d3ee","upcoming":true,"notableFeatures":["Coupe-SUV styling","Budget electric SUV","Single electric motor","Expected ~450 km range"]},
  {"id":"mg-cyberster","category":"car","brand":"MG","model":"Cyberster","variant":null,"name":"MG Cyberster","fullName":"MG Cyberster","bodyType":"Coupe","priceMinLakh":72.49,"priceMaxLakh":74.99,"batteryKwh":77,"rangeKmARAI":580,"realRangeKm":435,"powerBhp":503,"torqueNm":725,"accelSec":3.2,"accelNote":"0-100 km/h","topSpeedKmph":null,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":7.4,"chargeTimeFull":null,"driveType":"AWD","seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#22d3ee","upcoming":false,"notableFeatures":["Electric roadster with scissor doors","0-100 in 3.2s","Dual-motor AWD","Lifetime battery warranty"]},
  {"id":"mg-m9","category":"car","brand":"MG","model":"M9","variant":null,"name":"MG M9","fullName":"MG M9","bodyType":"MPV","priceMinLakh":69.9,"priceMaxLakh":69.9,"batteryKwh":90,"rangeKmARAI":430,"realRangeKm":323,"powerBhp":180,"torqueNm":350,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":11,"chargeTimeFull":null,"driveType":"FWD","seating":7,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#22d3ee","upcoming":false,"notableFeatures":["Luxury 7-seat electric MPV","Captain chairs with recline","Large screens","Sold via MG Select"]},
  {"id":"mercedes-benz-eqa","category":"car","brand":"Mercedes-Benz","model":"EQA","variant":null,"name":"Mercedes-Benz EQA","fullName":"Mercedes-Benz EQA","bodyType":"SUV","priceMinLakh":67.2,"priceMaxLakh":67.2,"batteryKwh":70.5,"rangeKmARAI":560,"realRangeKm":420,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":11,"chargeTimeFull":null,"driveType":"FWD","seating":5,"bootLitres":null,"kerbWeightKg":null,"year":2024,"accent":"#22d3ee","upcoming":false,"notableFeatures":["Entry Mercedes EV SUV","MBUX infotainment","560 km claimed range","70.5 kWh battery"]},
  {"id":"mercedes-benz-eqb","category":"car","brand":"Mercedes-Benz","model":"EQB","variant":null,"name":"Mercedes-Benz EQB","fullName":"Mercedes-Benz EQB","bodyType":"SUV","priceMinLakh":70,"priceMaxLakh":75,"batteryKwh":70.5,"rangeKmARAI":535,"realRangeKm":401,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":11,"chargeTimeFull":null,"driveType":"AWD","seating":7,"bootLitres":null,"kerbWeightKg":null,"year":2024,"accent":"#22d3ee","upcoming":false,"notableFeatures":["7-seat electric SUV","MBUX infotainment","535 km claimed range","4MATIC AWD"]},
  {"id":"mercedes-benz-eqe-suv-500-4matic","category":"car","brand":"Mercedes-Benz","model":"EQE SUV","variant":"500 4MATIC","name":"Mercedes-Benz EQE SUV","fullName":"Mercedes-Benz EQE SUV 500 4MATIC","bodyType":"Luxury SUV","priceMinLakh":141,"priceMaxLakh":141,"batteryKwh":90.6,"rangeKmARAI":550,"realRangeKm":413,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":170,"fastChargeTime":null,"acChargeKw":11,"chargeTimeFull":null,"driveType":"AWD","seating":5,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#22d3ee","upcoming":false,"notableFeatures":["MBUX Hyperscreen","4MATIC AWD","Air suspension","550 km claimed range"]},
  {"id":"mercedes-benz-eqs-580-4matic","category":"car","brand":"Mercedes-Benz","model":"EQS","variant":"580 4MATIC","name":"Mercedes-Benz EQS","fullName":"Mercedes-Benz EQS 580 4MATIC","bodyType":"Luxury Sedan","priceMinLakh":130,"priceMaxLakh":165,"batteryKwh":107.8,"rangeKmARAI":857,"realRangeKm":643,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":200,"fastChargeTime":null,"acChargeKw":11,"chargeTimeFull":null,"driveType":"AWD","seating":5,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#22d3ee","upcoming":false,"notableFeatures":["857 km ARAI range","MBUX Hyperscreen","Rear-axle steering","Flagship electric sedan"]},
  {"id":"mercedes-benz-eqs-suv-580-4matic","category":"car","brand":"Mercedes-Benz","model":"EQS SUV","variant":"580 4MATIC","name":"Mercedes-Benz EQS SUV","fullName":"Mercedes-Benz EQS SUV 580 4MATIC","bodyType":"Luxury SUV","priceMinLakh":133,"priceMaxLakh":240,"batteryKwh":118,"rangeKmARAI":809,"realRangeKm":607,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":200,"fastChargeTime":null,"acChargeKw":11,"chargeTimeFull":null,"driveType":"AWD","seating":7,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#22d3ee","upcoming":false,"notableFeatures":["Up to 7-seat luxury SUV","MBUX Hyperscreen","809 km claimed range","4MATIC AWD"]},
  {"id":"mercedes-maybach-eqs-680-suv-680-4matic","category":"car","brand":"Mercedes-Maybach","model":"EQS 680 SUV","variant":"680 4MATIC","name":"Mercedes-Maybach EQS 680 SUV","fullName":"Mercedes-Maybach EQS 680 SUV 680 4MATIC","bodyType":"Luxury SUV","priceMinLakh":225,"priceMaxLakh":252,"batteryKwh":122,"rangeKmARAI":611,"realRangeKm":458,"powerBhp":649,"torqueNm":955,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":200,"fastChargeTime":null,"acChargeKw":11,"chargeTimeFull":null,"driveType":"AWD","seating":4,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#22d3ee","upcoming":false,"notableFeatures":["Maybach ultra-luxury EV","649 bhp","Executive rear seats","MBUX Hyperscreen"]},
  {"id":"bmw-ix1-lwb-edrive20l","category":"car","brand":"BMW","model":"iX1","variant":"LWB eDrive20L","name":"BMW iX1","fullName":"BMW iX1 LWB eDrive20L","bodyType":"SUV","priceMinLakh":49,"priceMaxLakh":49,"batteryKwh":66.4,"rangeKmARAI":531,"realRangeKm":398,"powerBhp":204,"torqueNm":250,"accelSec":8.6,"accelNote":"0-100 km/h","topSpeedKmph":175,"fastChargeKw":130,"fastChargeTime":null,"acChargeKw":11,"chargeTimeFull":null,"driveType":"FWD","seating":5,"bootLitres":490,"kerbWeightKg":null,"year":2025,"accent":"#22d3ee","upcoming":false,"notableFeatures":["Long-wheelbase India version","Curved display","531 km claimed range","Entry BMW EV"]},
  {"id":"bmw-i4-edrive35","category":"car","brand":"BMW","model":"i4","variant":"eDrive35","name":"BMW i4","fullName":"BMW i4 eDrive35","bodyType":"Sedan","priceMinLakh":72.5,"priceMaxLakh":77.5,"batteryKwh":83.9,"rangeKmARAI":590,"realRangeKm":443,"powerBhp":340,"torqueNm":430,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":200,"fastChargeTime":null,"acChargeKw":11,"chargeTimeFull":null,"driveType":"RWD","seating":5,"bootLitres":470,"kerbWeightKg":null,"year":2025,"accent":"#22d3ee","upcoming":false,"notableFeatures":["Gran Coupe styling","590 km claimed range","Curved display","Harman Kardon audio"]},
  {"id":"bmw-i5-m60-xdrive","category":"car","brand":"BMW","model":"i5","variant":"M60 xDrive","name":"BMW i5","fullName":"BMW i5 M60 xDrive","bodyType":"Luxury Sedan","priceMinLakh":120,"priceMaxLakh":120,"batteryKwh":81.2,"rangeKmARAI":516,"realRangeKm":387,"powerBhp":593,"torqueNm":795,"accelSec":3.8,"accelNote":"0-100 km/h","topSpeedKmph":230,"fastChargeKw":205,"fastChargeTime":null,"acChargeKw":11,"chargeTimeFull":null,"driveType":"AWD","seating":5,"bootLitres":490,"kerbWeightKg":null,"year":2025,"accent":"#22d3ee","upcoming":false,"notableFeatures":["M Performance EV","BMW Curved Display","Highway Assistant","AWD dual motor"]},
  {"id":"bmw-ix-xdrive50","category":"car","brand":"BMW","model":"iX","variant":"xDrive50","name":"BMW iX","fullName":"BMW iX xDrive50","bodyType":"Luxury SUV","priceMinLakh":140,"priceMaxLakh":140,"batteryKwh":105.2,"rangeKmARAI":635,"realRangeKm":476,"powerBhp":523,"torqueNm":765,"accelSec":4.6,"accelNote":"0-100 km/h","topSpeedKmph":200,"fastChargeKw":195,"fastChargeTime":null,"acChargeKw":11,"chargeTimeFull":null,"driveType":"AWD","seating":5,"bootLitres":500,"kerbWeightKg":null,"year":2025,"accent":"#22d3ee","upcoming":false,"notableFeatures":["Flagship electric SUV","Curved display","635 km claimed range","Panoramic Sky Lounge roof"]},
  {"id":"bmw-i7-xdrive60","category":"car","brand":"BMW","model":"i7","variant":"xDrive60","name":"BMW i7","fullName":"BMW i7 xDrive60","bodyType":"Luxury Sedan","priceMinLakh":205,"priceMaxLakh":250,"batteryKwh":101.7,"rangeKmARAI":560,"realRangeKm":420,"powerBhp":650,"torqueNm":745,"accelSec":4.7,"accelNote":"0-100 km/h","topSpeedKmph":240,"fastChargeKw":195,"fastChargeTime":null,"acChargeKw":11,"chargeTimeFull":null,"driveType":"AWD","seating":5,"bootLitres":500,"kerbWeightKg":null,"year":2025,"accent":"#22d3ee","upcoming":false,"notableFeatures":["31.3-inch rear Theatre Screen","Executive Lounge","Flagship electric 7 Series","Crystal headlights"]},
  {"id":"audi-q8-e-tron-55-quattro","category":"car","brand":"Audi","model":"Q8 e-tron","variant":"55 quattro","name":"Audi Q8 e-tron","fullName":"Audi Q8 e-tron 55 quattro","bodyType":"Luxury SUV","priceMinLakh":119,"priceMaxLakh":131,"batteryKwh":106,"rangeKmARAI":600,"realRangeKm":450,"powerBhp":408,"torqueNm":664,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":170,"fastChargeTime":"10-80% in 31 min","acChargeKw":11,"chargeTimeFull":null,"driveType":"AWD","seating":5,"bootLitres":569,"kerbWeightKg":null,"year":2025,"accent":"#22d3ee","upcoming":false,"notableFeatures":["Dual-motor quattro AWD","Virtual exterior mirrors option","600 km range","Matrix LED headlights"]},
  {"id":"audi-e-tron-gt","category":"car","brand":"Audi","model":"e-tron GT","variant":null,"name":"Audi e-tron GT","fullName":"Audi e-tron GT","bodyType":"Luxury Sedan","priceMinLakh":170,"priceMaxLakh":195,"batteryKwh":93.4,"rangeKmARAI":500,"realRangeKm":375,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":270,"fastChargeTime":null,"acChargeKw":11,"chargeTimeFull":null,"driveType":"AWD","seating":5,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#22d3ee","upcoming":false,"notableFeatures":["Grand tourer styling","800V architecture","RS variant available","270 kW fast charging"]},
  {"id":"audi-q6-e-tron","category":"car","brand":"Audi","model":"Q6 e-tron","variant":null,"name":"Audi Q6 e-tron","fullName":"Audi Q6 e-tron","bodyType":"Luxury SUV","priceMinLakh":100,"priceMaxLakh":110,"batteryKwh":100,"rangeKmARAI":625,"realRangeKm":469,"powerBhp":null,"torqueNm":null,"accelSec":5.9,"accelNote":"0-100 km/h","topSpeedKmph":null,"fastChargeKw":270,"fastChargeTime":"10-80% in 21 min","acChargeKw":11,"chargeTimeFull":null,"driveType":"RWD","seating":5,"bootLitres":null,"kerbWeightKg":null,"year":2026,"accent":"#22d3ee","upcoming":true,"notableFeatures":["PPE 800V platform","270 kW fast charging","OLED taillights","Passenger display"]},
  {"id":"porsche-taycan","category":"car","brand":"Porsche","model":"Taycan","variant":null,"name":"Porsche Taycan","fullName":"Porsche Taycan","bodyType":"Luxury Sedan","priceMinLakh":170,"priceMaxLakh":270,"batteryKwh":105,"rangeKmARAI":668,"realRangeKm":501,"powerBhp":408,"torqueNm":410,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":270,"fastChargeTime":null,"acChargeKw":11,"chargeTimeFull":null,"driveType":"RWD","seating":4,"bootLitres":407,"kerbWeightKg":null,"year":2025,"accent":"#22d3ee","upcoming":false,"notableFeatures":["800V architecture","81-litre frunk","Up to 668 km range","Turbo variants available"]},
  {"id":"porsche-macan-ev","category":"car","brand":"Porsche","model":"Macan EV","variant":null,"name":"Porsche Macan EV","fullName":"Porsche Macan EV","bodyType":"Luxury SUV","priceMinLakh":121,"priceMaxLakh":194,"batteryKwh":100,"rangeKmARAI":624,"realRangeKm":468,"powerBhp":360,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":270,"fastChargeTime":null,"acChargeKw":11,"chargeTimeFull":null,"driveType":"RWD","seating":5,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#22d3ee","upcoming":false,"notableFeatures":["PPE 800V platform","RWD, 4S & Turbo variants","AR head-up display","Up to 639 PS Turbo"]},
  {"id":"mini-countryman-electric-e","category":"car","brand":"Mini","model":"Countryman Electric","variant":"E","name":"Mini Countryman Electric","fullName":"Mini Countryman Electric E","bodyType":"SUV","priceMinLakh":54.9,"priceMaxLakh":66.9,"batteryKwh":66.45,"rangeKmARAI":462,"realRangeKm":347,"powerBhp":204,"torqueNm":250,"accelSec":8.6,"accelNote":"0-100 km/h","topSpeedKmph":170,"fastChargeKw":130,"fastChargeTime":"10-80% under 30 min","acChargeKw":22,"chargeTimeFull":null,"driveType":"FWD","seating":5,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#22d3ee","upcoming":false,"notableFeatures":["Round 9.4-inch OLED display","SE All4 AWD option","Panoramic sunroof","Premium compact SUV"]},
  {"id":"lotus-eletre","category":"car","brand":"Lotus","model":"Eletre","variant":null,"name":"Lotus Eletre","fullName":"Lotus Eletre","bodyType":"Luxury SUV","priceMinLakh":255,"priceMaxLakh":320,"batteryKwh":112,"rangeKmARAI":600,"realRangeKm":450,"powerBhp":null,"torqueNm":null,"accelSec":2.95,"accelNote":"0-100 km/h","topSpeedKmph":null,"fastChargeKw":350,"fastChargeTime":null,"acChargeKw":11,"chargeTimeFull":null,"driveType":"AWD","seating":5,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#22d3ee","upcoming":false,"notableFeatures":["Electric hyper-SUV","0-100 in 2.95s (Eletre R)","112 kWh battery","S and R variants"]},
  {"id":"rolls-royce-spectre","category":"car","brand":"Rolls-Royce","model":"Spectre","variant":null,"name":"Rolls-Royce Spectre","fullName":"Rolls-Royce Spectre","bodyType":"Luxury Coupe","priceMinLakh":750,"priceMaxLakh":750,"batteryKwh":102,"rangeKmARAI":530,"realRangeKm":415,"powerBhp":584,"torqueNm":900,"accelSec":4.5,"accelNote":"0-100 km/h","topSpeedKmph":null,"fastChargeKw":195,"fastChargeTime":null,"acChargeKw":11,"chargeTimeFull":null,"driveType":"AWD","seating":4,"bootLitres":null,"kerbWeightKg":null,"year":2024,"accent":"#22d3ee","upcoming":false,"notableFeatures":["Most expensive EV in India","Starlight doors","Ultra-luxury electric coupe","102 kWh battery"]},
  {"id":"ather-450-apex","category":"scooter","brand":"Ather","model":"450 Apex","variant":null,"name":"Ather 450 Apex","fullName":"Ather 450 Apex","bodyType":"Scooter","priceMinLakh":1.9,"priceMaxLakh":1.99,"batteryKwh":3.7,"rangeKmARAI":157,"realRangeKm":110,"powerBhp":9.8,"torqueNm":null,"accelSec":null,"accelNote":"0-40 km/h","topSpeedKmph":100,"fastChargeKw":null,"fastChargeTime":"0-80% in 15 min","acChargeKw":null,"chargeTimeFull":"5h 45m","driveType":null,"seating":2,"bootLitres":22,"kerbWeightKg":111,"year":2025,"accent":"#a3e635","upcoming":false,"notableFeatures":["Warp Drive mode","7-inch TFT Ather Stack 6","MagicTwist regen","India's fastest e-scooter"]},
  {"id":"ather-450s-2-9-kwh","category":"scooter","brand":"Ather","model":"450S","variant":"2.9 kWh","name":"Ather 450S","fullName":"Ather 450S 2.9 kWh","bodyType":"Scooter","priceMinLakh":1.23,"priceMaxLakh":1.58,"batteryKwh":2.9,"rangeKmARAI":122,"realRangeKm":95,"powerBhp":7.2,"torqueNm":22,"accelSec":null,"accelNote":"0-40 km/h","topSpeedKmph":90,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":"7h 45m","driveType":null,"seating":2,"bootLitres":22,"kerbWeightKg":108,"year":2025,"accent":"#a3e635","upcoming":false,"notableFeatures":["Deepview display","Eco/Ride/Sport modes","Pro Pack option","Most affordable 450"]},
  {"id":"ola-s1-pro-gen-3-5-3-kwh","category":"scooter","brand":"Ola","model":"S1 Pro+","variant":"Gen 3 5.3 kWh","name":"Ola S1 Pro+","fullName":"Ola S1 Pro+ Gen 3 5.3 kWh","bodyType":"Scooter","priceMinLakh":1.7,"priceMaxLakh":1.82,"batteryKwh":5.3,"rangeKmARAI":320,"realRangeKm":220,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":"0-40 km/h","topSpeedKmph":141,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":34,"kerbWeightKg":118,"year":2025,"accent":"#a3e635","upcoming":false,"notableFeatures":["13 kW motor","Top speed 141 km/h","320 km claimed range","MoveOS 5"]},
  {"id":"ola-gig","category":"scooter","brand":"Ola","model":"Gig","variant":null,"name":"Ola Gig","fullName":"Ola Gig","bodyType":"Scooter","priceMinLakh":0.4,"priceMaxLakh":0.4,"batteryKwh":1.5,"rangeKmARAI":112,"realRangeKm":80,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":25,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#a3e635","upcoming":false,"notableFeatures":["250W motor","Removable battery","No-licence 25 km/h","Built for gig/delivery"]},
  {"id":"tvs-x","category":"scooter","brand":"TVS","model":"X","variant":null,"name":"TVS X","fullName":"TVS X","bodyType":"Scooter","priceMinLakh":2.5,"priceMaxLakh":2.63,"batteryKwh":4.44,"rangeKmARAI":140,"realRangeKm":100,"powerBhp":14.75,"torqueNm":null,"accelSec":null,"accelNote":"0-40 km/h","topSpeedKmph":110,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2024,"accent":"#a3e635","upcoming":false,"notableFeatures":["First e-scooter with ABS","10.2-inch TFT touchscreen","Premium build","Three ride modes"]},
  {"id":"tvs-orbiter-v2-3-1-kwh","category":"scooter","brand":"TVS","model":"Orbiter","variant":"V2 3.1 kWh","name":"TVS Orbiter","fullName":"TVS Orbiter V2 3.1 kWh","bodyType":"Scooter","priceMinLakh":0.85,"priceMaxLakh":0.999,"batteryKwh":3.1,"rangeKmARAI":158,"realRangeKm":110,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":"0-40 km/h","topSpeedKmph":68,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":"0-80% in 4h 10m","driveType":null,"seating":2,"bootLitres":34,"kerbWeightKg":null,"year":2025,"accent":"#a3e635","upcoming":false,"notableFeatures":["14-inch front wheel","BaaS option","Anti-theft alarm","Eco/City modes"]},
  {"id":"tvs-orbiter-v1-1-8-kwh","category":"scooter","brand":"TVS","model":"Orbiter","variant":"V1 1.8 kWh","name":"TVS Orbiter","fullName":"TVS Orbiter V1 1.8 kWh","bodyType":"Scooter","priceMinLakh":0.5,"priceMaxLakh":0.845,"batteryKwh":1.8,"rangeKmARAI":86,"realRangeKm":60,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":68,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":"0-80% in 2h 20m","driveType":null,"seating":2,"bootLitres":34,"kerbWeightKg":null,"year":2025,"accent":"#a3e635","upcoming":false,"notableFeatures":["Entry Orbiter","BaaS pricing","Geo-fencing","Navigation"]},
  {"id":"suzuki-e-access","category":"scooter","brand":"Suzuki","model":"e-Access","variant":null,"name":"Suzuki e-Access","fullName":"Suzuki e-Access","bodyType":"Scooter","priceMinLakh":1.88,"priceMaxLakh":1.88,"batteryKwh":3.07,"rangeKmARAI":95,"realRangeKm":72,"powerBhp":5.5,"torqueNm":15,"accelSec":null,"accelNote":null,"topSpeedKmph":71,"fastChargeKw":null,"fastChargeTime":"0-100% in 2h 12m (fast)","acChargeKw":null,"chargeTimeFull":"6h 42m","driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":122,"year":2025,"accent":"#a3e635","upcoming":false,"notableFeatures":["LFP battery","Suzuki's first India EV","TFT display","Three ride modes"]},
  {"id":"honda-activa-e","category":"scooter","brand":"Honda","model":"Activa e:","variant":null,"name":"Honda Activa e:","fullName":"Honda Activa e:","bodyType":"Scooter","priceMinLakh":1.2,"priceMaxLakh":1.52,"batteryKwh":3,"rangeKmARAI":102,"realRangeKm":75,"powerBhp":8,"torqueNm":22,"accelSec":7.3,"accelNote":"0-60 km/h","topSpeedKmph":80,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":119,"year":2025,"accent":"#a3e635","upcoming":false,"notableFeatures":["Dual swappable batteries","7-inch TFT RoadSync Duo","Honda swap network","Three ride modes"]},
  {"id":"honda-qc1","category":"scooter","brand":"Honda","model":"QC1","variant":null,"name":"Honda QC1","fullName":"Honda QC1","bodyType":"Scooter","priceMinLakh":0.9,"priceMaxLakh":0.95,"batteryKwh":1.5,"rangeKmARAI":80,"realRangeKm":56,"powerBhp":2.4,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":50,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":"6h 50m","driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":89.5,"year":2025,"accent":"#a3e635","upcoming":false,"notableFeatures":["Fixed battery","5-inch LCD","USB-C charging","Affordable entry EV"]},
  {"id":"hero-vida-z","category":"scooter","brand":"Hero","model":"Vida Z","variant":null,"name":"Hero Vida Z","fullName":"Hero Vida Z","bodyType":"Scooter","priceMinLakh":1,"priceMaxLakh":1,"batteryKwh":3.4,"rangeKmARAI":null,"realRangeKm":null,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2026,"accent":"#a3e635","upcoming":true,"notableFeatures":["Modular 2.2-4.4 kWh platform","Removable batteries","Family-oriented design","Sub Rs 1 lakh expected"]},
  {"id":"ampere-primus","category":"scooter","brand":"Ampere","model":"Primus","variant":null,"name":"Ampere Primus","fullName":"Ampere Primus","bodyType":"Scooter","priceMinLakh":1.1,"priceMaxLakh":1.2,"batteryKwh":3,"rangeKmARAI":107,"realRangeKm":82,"powerBhp":4.6,"torqueNm":null,"accelSec":null,"accelNote":"0-40 km/h","topSpeedKmph":77,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":"5h","driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2024,"accent":"#a3e635","upcoming":false,"notableFeatures":["LFP battery","Belt drive","12-inch alloys","Greaves/Ampere flagship"]},
  {"id":"okinawa-okhi-90","category":"scooter","brand":"Okinawa","model":"Okhi-90","variant":null,"name":"Okinawa Okhi-90","fullName":"Okinawa Okhi-90","bodyType":"Scooter","priceMinLakh":1.5,"priceMaxLakh":1.5,"batteryKwh":3.6,"rangeKmARAI":160,"realRangeKm":112,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":90,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2024,"accent":"#a3e635","upcoming":false,"notableFeatures":["Lithium-ion 72V battery","Fast charging","Okinawa flagship","Connected features"]},
  {"id":"okinawa-praisepro","category":"scooter","brand":"Okinawa","model":"PraisePro","variant":null,"name":"Okinawa PraisePro","fullName":"Okinawa PraisePro","bodyType":"Scooter","priceMinLakh":0.85,"priceMaxLakh":0.95,"batteryKwh":2,"rangeKmARAI":81,"realRangeKm":57,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":58,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2024,"accent":"#a3e635","upcoming":false,"notableFeatures":["Low-frame ergonomics","Detachable battery","Affordable commuter","Anti-theft alarm"]},
  {"id":"okaya-faast-f4","category":"scooter","brand":"Okaya","model":"Faast F4","variant":null,"name":"Okaya Faast F4","fullName":"Okaya Faast F4","bodyType":"Scooter","priceMinLakh":0.9,"priceMaxLakh":1.18,"batteryKwh":4.4,"rangeKmARAI":160,"realRangeKm":112,"powerBhp":3.35,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":70,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":"5-6h","driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2024,"accent":"#a3e635","upcoming":false,"notableFeatures":["LFP swappable battery","CBS braking","Reverse mode","Digital cluster"]},
  {"id":"pure-ev-epluto-7g","category":"scooter","brand":"Pure EV","model":"ePluto 7G","variant":null,"name":"Pure EV ePluto 7G","fullName":"Pure EV ePluto 7G","bodyType":"Scooter","priceMinLakh":0.78,"priceMaxLakh":0.93,"batteryKwh":2.4,"rangeKmARAI":151,"realRangeKm":90,"powerBhp":null,"torqueNm":30,"accelSec":null,"accelNote":null,"topSpeedKmph":68,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":"4h","driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":79,"year":2024,"accent":"#a3e635","upcoming":false,"notableFeatures":["Lightweight 79 kg","BaTRics battery tech","Front disc brake","Affordable commuter"]},
  {"id":"pure-ev-etrance-neo","category":"scooter","brand":"Pure EV","model":"eTrance Neo+","variant":null,"name":"Pure EV eTrance Neo+","fullName":"Pure EV eTrance Neo+","bodyType":"Scooter","priceMinLakh":0.8,"priceMaxLakh":1.06,"batteryKwh":2.5,"rangeKmARAI":151,"realRangeKm":90,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":60,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":"4h","driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2024,"accent":"#a3e635","upcoming":false,"notableFeatures":["Compact commuter","Removable battery","Multiple variants","City-focused"]},
  {"id":"bounce-infinity-e1","category":"scooter","brand":"Bounce","model":"Infinity E1","variant":null,"name":"Bounce Infinity E1","fullName":"Bounce Infinity E1","bodyType":"Scooter","priceMinLakh":1.15,"priceMaxLakh":1.26,"batteryKwh":1.9,"rangeKmARAI":85,"realRangeKm":60,"powerBhp":null,"torqueNm":83,"accelSec":null,"accelNote":null,"topSpeedKmph":65,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":"4-5h","driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2024,"accent":"#a3e635","upcoming":false,"notableFeatures":["Battery swap (BaaS) option","Drag/reverse mode","Geo-fencing","Cruise control"]},
  {"id":"kinetic-green-zulu","category":"scooter","brand":"Kinetic Green","model":"Zulu","variant":null,"name":"Kinetic Green Zulu","fullName":"Kinetic Green Zulu","bodyType":"Scooter","priceMinLakh":0.8,"priceMaxLakh":0.95,"batteryKwh":2.27,"rangeKmARAI":104,"realRangeKm":73,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":60,"fastChargeKw":null,"fastChargeTime":"0-80% in 30 min (15A)","acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":93,"year":2025,"accent":"#a3e635","upcoming":false,"notableFeatures":["Fast 30-min charge claim","Battery subscription option","Front & rear disc","Alloy wheels"]},
  {"id":"bgauss-c12-max-2-7-kwh","category":"scooter","brand":"BGauss","model":"C12","variant":"Max 2.7 kWh","name":"BGauss C12","fullName":"BGauss C12 Max 2.7 kWh","bodyType":"Scooter","priceMinLakh":1.08,"priceMaxLakh":1.33,"batteryKwh":2.7,"rangeKmARAI":123,"realRangeKm":86,"powerBhp":null,"torqueNm":105,"accelSec":null,"accelNote":"0-40 km/h","topSpeedKmph":60,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#a3e635","upcoming":false,"notableFeatures":["TFT display","Eco/Sport modes","CBS braking","Side-stand sensor"]},
  {"id":"bgauss-d15","category":"scooter","brand":"BGauss","model":"D15","variant":null,"name":"BGauss D15","fullName":"BGauss D15","bodyType":"Scooter","priceMinLakh":1,"priceMaxLakh":1.59,"batteryKwh":3,"rangeKmARAI":115,"realRangeKm":80,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":60,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#a3e635","upcoming":false,"notableFeatures":["Family scooter","Connected features","Multiple battery options","LED lighting"]},
  {"id":"ivoomi-jeet-x","category":"scooter","brand":"iVOOMi","model":"Jeet X","variant":null,"name":"iVOOMi Jeet X","fullName":"iVOOMi Jeet X","bodyType":"Scooter","priceMinLakh":0.85,"priceMaxLakh":1.05,"batteryKwh":2,"rangeKmARAI":100,"realRangeKm":70,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":65,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":"5h","driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":83.5,"year":2024,"accent":"#a3e635","upcoming":false,"notableFeatures":["Front disc brake","Lightweight","Multiple battery options","Affordable commuter"]},
  {"id":"ivoomi-jeet-x-ze","category":"scooter","brand":"iVOOMi","model":"Jeet X ZE","variant":null,"name":"iVOOMi Jeet X ZE","fullName":"iVOOMi Jeet X ZE","bodyType":"Scooter","priceMinLakh":0.9,"priceMaxLakh":1,"batteryKwh":3,"rangeKmARAI":170,"realRangeKm":119,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":65,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#a3e635","upcoming":false,"notableFeatures":["Up to 3 kWh battery","170 km claimed range","Multiple battery tiers","Connected app"]},
  {"id":"lectrix-nduro-3-0","category":"scooter","brand":"Lectrix","model":"NDuro","variant":"3.0","name":"Lectrix NDuro","fullName":"Lectrix NDuro 3.0","bodyType":"Scooter","priceMinLakh":0.58,"priceMaxLakh":1,"batteryKwh":3,"rangeKmARAI":117,"realRangeKm":82,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":"0-40 km/h","topSpeedKmph":65,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#a3e635","upcoming":false,"notableFeatures":["BaaS option","5-inch LCD with app","Eco/Normal/Sport + reverse","Geo-fencing"]},
  {"id":"joy-e-bike-gen-next-nanu","category":"scooter","brand":"Joy e-bike","model":"Gen Next Nanu+","variant":null,"name":"Joy e-bike Gen Next Nanu+","fullName":"Joy e-bike Gen Next Nanu+","bodyType":"Scooter","priceMinLakh":0.7,"priceMaxLakh":0.86,"batteryKwh":1.44,"rangeKmARAI":100,"realRangeKm":70,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":45,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":"4h","driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":70,"year":2024,"accent":"#a3e635","upcoming":false,"notableFeatures":["Compact low-speed commuter","Front & rear disc","Lightweight 70 kg","Multiple battery chemistries"]},
  {"id":"komaki-se","category":"scooter","brand":"Komaki","model":"SE","variant":null,"name":"Komaki SE","fullName":"Komaki SE","bodyType":"Scooter","priceMinLakh":0.6,"priceMaxLakh":0.6,"batteryKwh":null,"rangeKmARAI":null,"realRangeKm":null,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":25,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":"4-5h","driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2024,"accent":"#a3e635","upcoming":false,"notableFeatures":["Low-speed (no licence)","Front disc brake","Anti-theft lock","City commuter"]},
  {"id":"battre-iot","category":"scooter","brand":"BattRE","model":"IOT","variant":null,"name":"BattRE IOT","fullName":"BattRE IOT","bodyType":"Scooter","priceMinLakh":0.8,"priceMaxLakh":0.9,"batteryKwh":2,"rangeKmARAI":85,"realRangeKm":60,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":60,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2024,"accent":"#a3e635","upcoming":false,"notableFeatures":["Digital cluster","Navigation support","Anti-theft alarm","Trip statistics"]},
  {"id":"ultraviolette-tesseract","category":"scooter","brand":"Ultraviolette","model":"Tesseract","variant":null,"name":"Ultraviolette Tesseract","fullName":"Ultraviolette Tesseract","bodyType":"Scooter","priceMinLakh":1.45,"priceMaxLakh":2,"batteryKwh":6,"rangeKmARAI":261,"realRangeKm":190,"powerBhp":20.1,"torqueNm":null,"accelSec":2.9,"accelNote":"0-60 km/h","topSpeedKmph":125,"fastChargeKw":null,"fastChargeTime":"0-80% in ~50 min","acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2027,"accent":"#a3e635","upcoming":true,"notableFeatures":["Radar ADAS (blind-spot/collision)","Dual-channel ABS","Dash cams","Up to 6 kWh / 261 km"]},
  {"id":"ather-el","category":"scooter","brand":"Ather","model":"EL","variant":null,"name":"Ather EL","fullName":"Ather EL","bodyType":"Scooter","priceMinLakh":0.9,"priceMaxLakh":1,"batteryKwh":null,"rangeKmARAI":150,"realRangeKm":105,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2026,"accent":"#a3e635","upcoming":true,"notableFeatures":["New EL family platform","2-5 kWh battery options","Value/family focus","OTA updates"]},
  {"id":"yamaha-aerox-e","category":"scooter","brand":"Yamaha","model":"Aerox E","variant":null,"name":"Yamaha Aerox E","fullName":"Yamaha Aerox E","bodyType":"Scooter","priceMinLakh":2.5,"priceMaxLakh":2.6,"batteryKwh":6,"rangeKmARAI":106,"realRangeKm":75,"powerBhp":12.6,"torqueNm":48,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2026,"accent":"#a3e635","upcoming":true,"notableFeatures":["Dual removable 3 kWh batteries","9.4 kW mid-mounted motor","Sporty Aerox styling","Yamaha's first India EV"]},
  {"id":"yamaha-ec-06","category":"scooter","brand":"Yamaha","model":"EC-06","variant":null,"name":"Yamaha EC-06","fullName":"Yamaha EC-06","bodyType":"Scooter","priceMinLakh":1.68,"priceMaxLakh":1.68,"batteryKwh":4,"rangeKmARAI":169,"realRangeKm":118,"powerBhp":9,"torqueNm":26,"accelSec":null,"accelNote":null,"topSpeedKmph":79,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":"0-100% in 10h","driveType":null,"seating":2,"bootLitres":24,"kerbWeightKg":null,"year":2026,"accent":"#a3e635","upcoming":false,"notableFeatures":["169 km certified range","Fixed 4 kWh battery, IPMSM motor","Eco/Standard/Power ride modes","Co-developed with River Mobility"]},
  {"id":"ola-roadster-x-2-5-kwh","category":"motorcycle","brand":"Ola","model":"Roadster X","variant":"2.5 kWh","name":"Ola Roadster X","fullName":"Ola Roadster X 2.5 kWh","bodyType":"Motorcycle","priceMinLakh":1.04,"priceMaxLakh":1.04,"batteryKwh":2.5,"rangeKmARAI":117,"realRangeKm":82,"powerBhp":null,"torqueNm":null,"accelSec":3.4,"accelNote":"0-40 km/h","topSpeedKmph":105,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#fb923c","upcoming":false,"notableFeatures":["11 kW mid-drive motor","Three ride modes","4.3-inch LCD","Full LED lighting"]},
  {"id":"ola-roadster-x-4-5-kwh","category":"motorcycle","brand":"Ola","model":"Roadster X","variant":"4.5 kWh","name":"Ola Roadster X","fullName":"Ola Roadster X 4.5 kWh","bodyType":"Motorcycle","priceMinLakh":1.29,"priceMaxLakh":1.29,"batteryKwh":4.5,"rangeKmARAI":200,"realRangeKm":140,"powerBhp":null,"torqueNm":null,"accelSec":3.1,"accelNote":"0-40 km/h","topSpeedKmph":118,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#fb923c","upcoming":false,"notableFeatures":["11 kW motor","200 km claimed range","Sports/Normal/Eco modes","TPMS"]},
  {"id":"ola-roadster-x-9-1-kwh","category":"motorcycle","brand":"Ola","model":"Roadster X+","variant":"9.1 kWh","name":"Ola Roadster X+","fullName":"Ola Roadster X+ 9.1 kWh","bodyType":"Motorcycle","priceMinLakh":1.29,"priceMaxLakh":1.29,"batteryKwh":9.1,"rangeKmARAI":501,"realRangeKm":350,"powerBhp":null,"torqueNm":null,"accelSec":2.7,"accelNote":"0-40 km/h","topSpeedKmph":125,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#fb923c","upcoming":false,"notableFeatures":["4680 Bharat Cell","Claimed 501 km range","11 kW mid-drive motor","Faster charging"]},
  {"id":"ola-roadster-3-5-kwh","category":"motorcycle","brand":"Ola","model":"Roadster","variant":"3.5 kWh","name":"Ola Roadster","fullName":"Ola Roadster 3.5 kWh","bodyType":"Motorcycle","priceMinLakh":1.05,"priceMaxLakh":1.05,"batteryKwh":3.5,"rangeKmARAI":151,"realRangeKm":106,"powerBhp":null,"torqueNm":null,"accelSec":2.4,"accelNote":"0-40 km/h","topSpeedKmph":116,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#fb923c","upcoming":false,"notableFeatures":["13 kW peak motor","Up to 248 km range variants","Four ride modes","TFT touchscreen"]},
  {"id":"ola-roadster-pro-8-kwh","category":"motorcycle","brand":"Ola","model":"Roadster Pro","variant":"8 kWh","name":"Ola Roadster Pro","fullName":"Ola Roadster Pro 8 kWh","bodyType":"Motorcycle","priceMinLakh":2,"priceMaxLakh":2,"batteryKwh":8,"rangeKmARAI":316,"realRangeKm":221,"powerBhp":70,"torqueNm":105,"accelSec":2.2,"accelNote":"0-60 km/h","topSpeedKmph":154,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2026,"accent":"#fb923c","upcoming":true,"notableFeatures":["52 kW motor","10-inch TFT touchscreen","Four power modes","Geo-fencing"]},
  {"id":"ola-roadster-pro-16-kwh","category":"motorcycle","brand":"Ola","model":"Roadster Pro","variant":"16 kWh","name":"Ola Roadster Pro","fullName":"Ola Roadster Pro 16 kWh","bodyType":"Motorcycle","priceMinLakh":2.5,"priceMaxLakh":2.5,"batteryKwh":16,"rangeKmARAI":579,"realRangeKm":405,"powerBhp":70,"torqueNm":105,"accelSec":1.9,"accelNote":"0-60 km/h","topSpeedKmph":194,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2026,"accent":"#fb923c","upcoming":true,"notableFeatures":["52 kW motor","Claimed sub-2s 0-60","Top speed ~194 km/h","10-inch touchscreen"]},
  {"id":"royal-enfield-flying-flea-c6","category":"motorcycle","brand":"Royal Enfield","model":"Flying Flea C6","variant":null,"name":"Royal Enfield Flying Flea C6","fullName":"Royal Enfield Flying Flea C6","bodyType":"Motorcycle","priceMinLakh":2.79,"priceMaxLakh":2.79,"batteryKwh":3.91,"rangeKmARAI":154,"realRangeKm":108,"powerBhp":20.6,"torqueNm":60,"accelSec":3.7,"accelNote":"0-60 km/h","topSpeedKmph":115,"fastChargeKw":2.2,"fastChargeTime":"20-80% in 60 min","acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":124,"year":2026,"accent":"#fb923c","upcoming":true,"notableFeatures":["RE's first EV","Aluminium/magnesium frame","Five riding modes","Keyless ignition & wireless charger"]},
  {"id":"ultraviolette-shockwave","category":"motorcycle","brand":"Ultraviolette","model":"Shockwave","variant":null,"name":"Ultraviolette Shockwave","fullName":"Ultraviolette Shockwave","bodyType":"Motorcycle","priceMinLakh":1.5,"priceMaxLakh":1.75,"batteryKwh":4,"rangeKmARAI":165,"realRangeKm":116,"powerBhp":14.5,"torqueNm":null,"accelSec":2.9,"accelNote":"0-60 km/h","topSpeedKmph":120,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":120,"year":2026,"accent":"#fb923c","upcoming":true,"notableFeatures":["India's first electric enduro","Four traction control modes","Switchable dual-channel ABS","Wire-spoke 19/17-inch wheels"]},
  {"id":"ultraviolette-f99","category":"motorcycle","brand":"Ultraviolette","model":"F99","variant":null,"name":"Ultraviolette F99","fullName":"Ultraviolette F99","bodyType":"Motorcycle","priceMinLakh":8,"priceMaxLakh":8,"batteryKwh":null,"rangeKmARAI":null,"realRangeKm":null,"powerBhp":120,"torqueNm":null,"accelSec":3,"accelNote":"0-100 km/h","topSpeedKmph":265,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":178,"year":2026,"accent":"#fb923c","upcoming":true,"notableFeatures":["Liquid-cooled 90 kW motor","Carbon-fibre bodywork","Active aerodynamic winglets","Ohlins forks, Brembo brakes"]},
  {"id":"hero-vida-vxz","category":"motorcycle","brand":"Hero","model":"Vida VXZ","variant":null,"name":"Hero Vida VXZ","fullName":"Hero Vida VXZ","bodyType":"Motorcycle","priceMinLakh":null,"priceMaxLakh":null,"batteryKwh":null,"rangeKmARAI":null,"realRangeKm":null,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2026,"accent":"#fb923c","upcoming":true,"notableFeatures":["Co-developed with Zero Motorcycles","Trellis frame, USD forks","Belt drive","17-inch alloy wheels"]},
  {"id":"tork-kratos","category":"motorcycle","brand":"Tork","model":"Kratos","variant":null,"name":"Tork Kratos","fullName":"Tork Kratos","bodyType":"Motorcycle","priceMinLakh":1.37,"priceMaxLakh":1.37,"batteryKwh":4,"rangeKmARAI":180,"realRangeKm":120,"powerBhp":10.05,"torqueNm":28,"accelSec":null,"accelNote":null,"topSpeedKmph":100,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":"4-5 hours","driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#fb923c","upcoming":false,"notableFeatures":["7.5 kW BLDC motor","Eco/City/Sport modes","Bluetooth app connectivity","Full digital cluster"]},
  {"id":"tork-kratos-x","category":"motorcycle","brand":"Tork","model":"Kratos X","variant":null,"name":"Tork Kratos X","fullName":"Tork Kratos X","bodyType":"Motorcycle","priceMinLakh":1.8,"priceMaxLakh":1.82,"batteryKwh":4,"rangeKmARAI":180,"realRangeKm":120,"powerBhp":16.09,"torqueNm":null,"accelSec":4,"accelNote":"0-40 km/h","topSpeedKmph":100,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2026,"accent":"#fb923c","upcoming":true,"notableFeatures":["12 kW motor","7-inch Android display","Aluminium swingarm","Navigation support"]},
  {"id":"matter-aera-5000","category":"motorcycle","brand":"Matter","model":"Aera 5000","variant":null,"name":"Matter Aera 5000","fullName":"Matter Aera 5000","bodyType":"Motorcycle","priceMinLakh":1.81,"priceMaxLakh":1.81,"batteryKwh":5,"rangeKmARAI":125,"realRangeKm":88,"powerBhp":13.4,"torqueNm":null,"accelSec":6,"accelNote":"0-60 km/h","topSpeedKmph":105,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#fb923c","upcoming":false,"notableFeatures":["India's first geared electric bike","10 kW liquid-cooled motor","4-speed manual gearbox","Bluetooth, OTA updates"]},
  {"id":"hop-electric-oxo-standard","category":"motorcycle","brand":"Hop Electric","model":"Oxo","variant":"Standard","name":"Hop Electric Oxo","fullName":"Hop Electric Oxo Standard","bodyType":"Motorcycle","priceMinLakh":1.33,"priceMaxLakh":1.33,"batteryKwh":3.75,"rangeKmARAI":150,"realRangeKm":105,"powerBhp":8.3,"torqueNm":200,"accelSec":null,"accelNote":null,"topSpeedKmph":90,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":"5 hours","driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#fb923c","upcoming":false,"notableFeatures":["3 kW motor, 72V","Eco/Power/Sport modes","Front & rear disc brakes","150 km Eco range"]},
  {"id":"hop-electric-oxo-x","category":"motorcycle","brand":"Hop Electric","model":"Oxo X","variant":null,"name":"Hop Electric Oxo X","fullName":"Hop Electric Oxo X","bodyType":"Motorcycle","priceMinLakh":1.61,"priceMaxLakh":1.63,"batteryKwh":3.75,"rangeKmARAI":150,"realRangeKm":105,"powerBhp":8.3,"torqueNm":200,"accelSec":null,"accelNote":null,"topSpeedKmph":90,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":"5 hours","driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#fb923c","upcoming":false,"notableFeatures":["Turbo mode","200 Nm peak torque","18-inch front wheel","App connectivity"]},
  {"id":"kabira-km3000-mark-2","category":"motorcycle","brand":"Kabira","model":"KM3000 Mark 2","variant":null,"name":"Kabira KM3000 Mark 2","fullName":"Kabira KM3000 Mark 2","bodyType":"Motorcycle","priceMinLakh":1.5,"priceMaxLakh":1.75,"batteryKwh":4.1,"rangeKmARAI":178,"realRangeKm":125,"powerBhp":16.08,"torqueNm":192,"accelSec":2.9,"accelNote":"0-40 km/h","topSpeedKmph":120,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":"3 hours","driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#fb923c","upcoming":false,"notableFeatures":["12 kW hub motor","Up to 5.15 kWh battery","Eco/City/Sport modes","Keyless ignition"]},
  {"id":"komaki-ranger","category":"motorcycle","brand":"Komaki","model":"Ranger","variant":null,"name":"Komaki Ranger","fullName":"Komaki Ranger","bodyType":"Motorcycle","priceMinLakh":1.35,"priceMaxLakh":1.88,"batteryKwh":4,"rangeKmARAI":200,"realRangeKm":140,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":80,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":"4 hours (0-90%)","driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#fb923c","upcoming":false,"notableFeatures":["Electric cruiser styling","5 kW hub motor","Up to 250 km range variant","Cruise control, reverse assist"]},
  {"id":"komaki-mx3","category":"motorcycle","brand":"Komaki","model":"MX3","variant":null,"name":"Komaki MX3","fullName":"Komaki MX3","bodyType":"Motorcycle","priceMinLakh":1.14,"priceMaxLakh":1.14,"batteryKwh":2.1,"rangeKmARAI":100,"realRangeKm":85,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":25,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":"4-5 hours","driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#fb923c","upcoming":false,"notableFeatures":["Low-speed (no licence)","3 kW hub motor","Removable battery","OTA updates, keyless"]},
  {"id":"srivaru-motors-prana-2-0-grand","category":"motorcycle","brand":"Srivaru Motors","model":"Prana 2.0","variant":"Grand","name":"Srivaru Motors Prana 2.0","fullName":"Srivaru Motors Prana 2.0 Grand","bodyType":"Motorcycle","priceMinLakh":2.55,"priceMaxLakh":2.55,"batteryKwh":5,"rangeKmARAI":150,"realRangeKm":105,"powerBhp":13.4,"torqueNm":38,"accelSec":4,"accelNote":"0-60 km/h","topSpeedKmph":123,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":"7.3 hours","driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":181,"year":2025,"accent":"#fb923c","upcoming":false,"notableFeatures":["10 kW motor","Disc brakes front & rear","Four colour options","Made in Coimbatore"]},
  {"id":"srivaru-motors-prana-2-0-elite","category":"motorcycle","brand":"Srivaru Motors","model":"Prana 2.0","variant":"Elite","name":"Srivaru Motors Prana 2.0","fullName":"Srivaru Motors Prana 2.0 Elite","bodyType":"Motorcycle","priceMinLakh":3.2,"priceMaxLakh":3.2,"batteryKwh":8.44,"rangeKmARAI":250,"realRangeKm":175,"powerBhp":13.4,"torqueNm":38,"accelSec":4,"accelNote":"0-60 km/h","topSpeedKmph":123,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":181,"year":2025,"accent":"#fb923c","upcoming":false,"notableFeatures":["8.44 kWh large battery","250 km claimed range","10 kW motor","Premium e-motorcycle"]},
  {"id":"pure-ev-etryst-350","category":"motorcycle","brand":"Pure EV","model":"eTryst 350","variant":null,"name":"Pure EV eTryst 350","fullName":"Pure EV eTryst 350","bodyType":"Motorcycle","priceMinLakh":1.55,"priceMaxLakh":1.55,"batteryKwh":3.5,"rangeKmARAI":140,"realRangeKm":98,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":85,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":"6 hours","driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":120,"year":2025,"accent":"#fb923c","upcoming":false,"notableFeatures":["3 kW motor","Naked street design","Tubular crash guard","Three colour options"]},
  {"id":"odysse-evoqis","category":"motorcycle","brand":"Odysse","model":"Evoqis","variant":null,"name":"Odysse Evoqis","fullName":"Odysse Evoqis","bodyType":"Motorcycle","priceMinLakh":1.71,"priceMaxLakh":1.84,"batteryKwh":4.32,"rangeKmARAI":140,"realRangeKm":98,"powerBhp":5.77,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":80,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":"6 hours","driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":150,"year":2025,"accent":"#fb923c","upcoming":false,"notableFeatures":["Fully-faired bodywork","0-50 km/h in 4.2s","Twin-pod headlight","Five colour options"]},
  {"id":"joy-e-bike-beast","category":"motorcycle","brand":"Joy e-bike","model":"Beast","variant":null,"name":"Joy e-bike Beast","fullName":"Joy e-bike Beast","bodyType":"Motorcycle","priceMinLakh":2.42,"priceMaxLakh":2.42,"batteryKwh":5.18,"rangeKmARAI":110,"realRangeKm":77,"powerBhp":6.7,"torqueNm":230,"accelSec":null,"accelNote":null,"topSpeedKmph":90,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":"9 hours","driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":115,"year":2025,"accent":"#fb923c","upcoming":false,"notableFeatures":["5 kW BLDC hub motor","Naked streetfighter styling","GPS & anti-theft IoT","Alloy wheels, tubeless tyres"]},
  {"id":"joy-e-bike-hurricane","category":"motorcycle","brand":"Joy e-bike","model":"Hurricane","variant":null,"name":"Joy e-bike Hurricane","fullName":"Joy e-bike Hurricane","bodyType":"Motorcycle","priceMinLakh":2.33,"priceMaxLakh":2.33,"batteryKwh":4.75,"rangeKmARAI":80,"realRangeKm":56,"powerBhp":6.7,"torqueNm":230,"accelSec":null,"accelNote":null,"topSpeedKmph":90,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":"9 hours","driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#fb923c","upcoming":false,"notableFeatures":["Naked roadster styling","5 kW hub motor","72V lithium-ion battery","IoT & AI sensors"]},
  {"id":"joy-e-bike-thunderbolt","category":"motorcycle","brand":"Joy e-bike","model":"Thunderbolt","variant":null,"name":"Joy e-bike Thunderbolt","fullName":"Joy e-bike Thunderbolt","bodyType":"Motorcycle","priceMinLakh":2.33,"priceMaxLakh":2.33,"batteryKwh":4.75,"rangeKmARAI":80,"realRangeKm":56,"powerBhp":6.7,"torqueNm":230,"accelSec":null,"accelNote":null,"topSpeedKmph":90,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":"9 hours","driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#fb923c","upcoming":false,"notableFeatures":["Fully-faired sport styling","5 kW hub motor","10A smart charger","IoT connectivity"]},
  {"id":"joy-e-bike-skyline","category":"motorcycle","brand":"Joy e-bike","model":"Skyline","variant":null,"name":"Joy e-bike Skyline","fullName":"Joy e-bike Skyline","bodyType":"Motorcycle","priceMinLakh":2.29,"priceMaxLakh":2.29,"batteryKwh":4.75,"rangeKmARAI":80,"realRangeKm":56,"powerBhp":6.7,"torqueNm":230,"accelSec":null,"accelNote":null,"topSpeedKmph":90,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":"9 hours","driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2025,"accent":"#fb923c","upcoming":false,"notableFeatures":["Fully-faired tourer styling","5 kW hub motor","72V lithium-ion battery","Smart charger"]},
  {"id":"bajaj-electric-motorcycle","category":"motorcycle","brand":"Bajaj","model":"Electric Motorcycle","variant":null,"name":"Bajaj Electric Motorcycle","fullName":"Bajaj Electric Motorcycle","bodyType":"Motorcycle","priceMinLakh":null,"priceMaxLakh":null,"batteryKwh":null,"rangeKmARAI":null,"realRangeKm":null,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2026,"accent":"#fb923c","upcoming":true,"notableFeatures":["All-new in-house EV platform","Daily-use commuter focus","Expected debut late 2026","Spans entry to performance"]},
  {"id":"honda-shine-e","category":"motorcycle","brand":"Honda","model":"Shine e:","variant":null,"name":"Honda Shine e:","fullName":"Honda Shine e:","bodyType":"Motorcycle","priceMinLakh":null,"priceMaxLakh":null,"batteryKwh":null,"rangeKmARAI":null,"realRangeKm":null,"powerBhp":5.36,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":null,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2026,"accent":"#fb923c","upcoming":true,"notableFeatures":["~4 kW rated output","100cc-equivalent performance","Swappable battery expected","Commuter-focused"]},
  {"id":"oben-rorr-evo-3-4-kwh","category":"motorcycle","brand":"Oben","model":"Rorr Evo","variant":"3.4 kWh","name":"Oben Rorr Evo","fullName":"Oben Rorr Evo 3.4 kWh","bodyType":"Motorcycle","priceMinLakh":1,"priceMaxLakh":1.25,"batteryKwh":3.4,"rangeKmARAI":180,"realRangeKm":145,"powerBhp":12.07,"torqueNm":250,"accelSec":3,"accelNote":"0-40 km/h","topSpeedKmph":110,"fastChargeKw":null,"fastChargeTime":"0-80% in 90 min","acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":140,"year":2026,"accent":"#fb923c","upcoming":false,"notableFeatures":["SmartIQ AI ride mode","9 kW motor, 250 Nm wheel torque","0-80% fast charge in 90 min","8-year battery warranty"]},
  {"id":"vinfast-vf6-59-6-kwh","category":"car","brand":"VinFast","model":"VF6","variant":null,"name":"VinFast VF6","fullName":"VinFast VF6","bodyType":"SUV","priceMinLakh":17.29,"priceMaxLakh":19.19,"batteryKwh":59.6,"rangeKmARAI":468,"realRangeKm":370,"powerBhp":204,"torqueNm":310,"accelSec":8.9,"accelNote":"0-100 km/h (Wind)","topSpeedKmph":null,"fastChargeKw":100,"fastChargeTime":"10-70% in 25 min","acChargeKw":11,"chargeTimeFull":null,"driveType":"FWD","seating":5,"bootLitres":null,"kerbWeightKg":null,"year":2026,"accent":"#22d3ee","upcoming":false,"notableFeatures":["Level-2 ADAS","Panoramic glass roof","100 kW DC fast charging","Compact 5-seat e-SUV"]},
  {"id":"vinfast-vf7-70-8-kwh","category":"car","brand":"VinFast","model":"VF7","variant":null,"name":"VinFast VF7","fullName":"VinFast VF7","bodyType":"SUV","priceMinLakh":21.89,"priceMaxLakh":26.79,"batteryKwh":70.8,"rangeKmARAI":532,"realRangeKm":420,"powerBhp":349,"torqueNm":500,"accelSec":5.8,"accelNote":"0-100 km/h (AWD)","topSpeedKmph":null,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":11,"chargeTimeFull":null,"driveType":"AWD","seating":5,"bootLitres":null,"kerbWeightKg":null,"year":2026,"accent":"#22d3ee","upcoming":false,"notableFeatures":["Bharat NCAP 5-star safety","Dual-motor AWD (349 bhp)","Level-2 ADAS","59.6/70.8 kWh battery options"]},
  {"id":"tvs-iqube-s-4-7-kwh","category":"scooter","brand":"TVS","model":"iQube S","variant":"4.7 kWh","name":"TVS iQube S","fullName":"TVS iQube S 4.7 kWh","bodyType":"Scooter","priceMinLakh":1.37,"priceMaxLakh":1.37,"batteryKwh":4.7,"rangeKmARAI":175,"realRangeKm":122,"powerBhp":6,"torqueNm":140,"accelSec":4.3,"accelNote":"0-40 km/h","topSpeedKmph":82,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":"0-80% in approx 4h","driveType":null,"seating":2,"bootLitres":32,"kerbWeightKg":null,"year":2026,"accent":"#a3e635","upcoming":false,"notableFeatures":["Bigger 4.7 kWh battery pack","175 km IDC claimed range","17.78 cm TFT with navigation","32 L under-seat storage"]},
  {"id":"vinfast-vf-mpv-7-60-13-kwh","category":"car","brand":"VinFast","model":"VF MPV 7","variant":null,"name":"VinFast VF MPV 7","fullName":"VinFast VF MPV 7","bodyType":"MPV","priceMinLakh":24.49,"priceMaxLakh":24.49,"batteryKwh":60.13,"rangeKmARAI":517,"realRangeKm":388,"powerBhp":201,"torqueNm":280,"accelSec":null,"accelNote":"0-100 km/h under 9s (claimed)","topSpeedKmph":140,"fastChargeKw":80,"fastChargeTime":"10-70% in 30 min","acChargeKw":6.9,"chargeTimeFull":null,"driveType":"FWD","seating":7,"bootLitres":126,"kerbWeightKg":null,"year":2026,"accent":"#22d3ee","upcoming":false,"notableFeatures":["Three-row 7-seat electric MPV","517 km ARAI claimed range","Theatre-style 2nd-row seats","10-year battery warranty"]},
  {"id":"bajaj-chetak-c25","category":"scooter","brand":"Bajaj","model":"Chetak C25","variant":null,"name":"Bajaj Chetak C25","fullName":"Bajaj Chetak C25","bodyType":"Scooter","priceMinLakh":0.91,"priceMaxLakh":0.96,"batteryKwh":2.5,"rangeKmARAI":113,"realRangeKm":90,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":55,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":"0-80% in 2h 25m","driveType":null,"seating":2,"bootLitres":25,"kerbWeightKg":108,"year":2026,"accent":"#a3e635","upcoming":false,"notableFeatures":["Metal-body retro design","2.5 kWh NMC battery, 2.2 kW hub motor","25 L under-seat storage","Most affordable Chetak"]},
  {"id":"mahindra-xuv-3xo-ev-39-4-kwh","category":"car","brand":"Mahindra","model":"XUV 3XO EV","variant":"39.4 kWh","name":"Mahindra XUV 3XO EV","fullName":"Mahindra XUV 3XO EV 39.4 kWh","bodyType":"SUV","priceMinLakh":13.89,"priceMaxLakh":14.96,"batteryKwh":39.4,"rangeKmARAI":null,"realRangeKm":285,"powerBhp":148,"torqueNm":310,"accelSec":8.3,"accelNote":"0-100 km/h","topSpeedKmph":null,"fastChargeKw":null,"fastChargeTime":"0-80% in 50 min","acChargeKw":7.2,"chargeTimeFull":"0-100% in ~6.5h (7.2 kW)","driveType":"FWD","seating":5,"bootLitres":null,"kerbWeightKg":null,"year":2026,"accent":"#22d3ee","upcoming":false,"notableFeatures":["Level 2 ADAS suite","Dual 10.25-inch screens","Panoramic sunroof","6 airbags & 360-degree camera"]},
  {"id":"simple-ultra-6-5-kwh","category":"scooter","brand":"Simple","model":"Ultra","variant":null,"name":"Simple Ultra","fullName":"Simple Ultra","bodyType":"Scooter","priceMinLakh":2.35,"priceMaxLakh":2.35,"batteryKwh":6.5,"rangeKmARAI":400,"realRangeKm":280,"powerBhp":null,"torqueNm":null,"accelSec":2.77,"accelNote":"0-40 km/h","topSpeedKmph":115,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2026,"accent":"#a3e635","upcoming":false,"notableFeatures":["India's largest scooter battery (6.5 kWh)","400 km IDC claimed range","Dual battery (5 + 1.5 kWh) setup","7-inch console with traction control"]},
  {"id":"zelio-gracy-2026","category":"scooter","brand":"Zelio","model":"Gracy","variant":"2026","name":"Zelio Gracy","fullName":"Zelio Gracy 2026","bodyType":"Scooter","priceMinLakh":0.6,"priceMaxLakh":0.77,"batteryKwh":2.3,"rangeKmARAI":120,"realRangeKm":84,"powerBhp":null,"torqueNm":null,"accelSec":null,"accelNote":null,"topSpeedKmph":25,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":"4-5h (lithium); 8-10h (lead-acid)","driveType":null,"seating":2,"bootLitres":50,"kerbWeightKg":null,"year":2026,"accent":"#a3e635","upcoming":false,"notableFeatures":["Low-speed: no licence or registration needed","Lead-acid & lithium battery options (60V/72V)","Central locking with anti-theft alarm","50 L under-seat storage"]},
  {"id":"ultraviolette-x47-crossover-original-7-1-kwh","category":"motorcycle","brand":"Ultraviolette","model":"X47 Crossover","variant":"Original 7.1 kWh","name":"Ultraviolette X47 Crossover","fullName":"Ultraviolette X47 Crossover Original 7.1 kWh","bodyType":"Motorcycle","priceMinLakh":2.74,"priceMaxLakh":4.49,"batteryKwh":7.1,"rangeKmARAI":211,"realRangeKm":150,"powerBhp":36.2,"torqueNm":null,"accelSec":2.7,"accelNote":"0-60 km/h","topSpeedKmph":145,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":197,"year":2026,"accent":"#fb923c","upcoming":false,"notableFeatures":["World's first motorcycle with standard integrated radar","27 kW (36 bhp) motor, 145 km/h top speed","211 km IDC claimed range","8 lakh km battery warranty"]},
  {"id":"ultraviolette-x47-crossover-recon-10-3-kwh","category":"motorcycle","brand":"Ultraviolette","model":"X47 Crossover Recon","variant":"Recon 10.3 kWh","name":"Ultraviolette X47 Crossover Recon","fullName":"Ultraviolette X47 Crossover Recon 10.3 kWh","bodyType":"Motorcycle","priceMinLakh":3.59,"priceMaxLakh":4.49,"batteryKwh":10.3,"rangeKmARAI":323,"realRangeKm":230,"powerBhp":40.2,"torqueNm":null,"accelSec":2.7,"accelNote":"0-60 km/h","topSpeedKmph":145,"fastChargeKw":null,"fastChargeTime":null,"acChargeKw":null,"chargeTimeFull":null,"driveType":null,"seating":2,"bootLitres":null,"kerbWeightKg":207,"year":2026,"accent":"#fb923c","upcoming":false,"notableFeatures":["323 km IDC range (segment-leading)","30 kW (40 bhp) motor","Integrated radar safety suite","10.3 kWh IP67 battery pack"]},
  {"id":"citroen-ec3x","category":"car","brand":"Citroen","model":"eC3X","variant":null,"name":"Citroen eC3X","fullName":"Citroen eC3X","bodyType":"Crossover","priceMinLakh":11.99,"priceMaxLakh":13.26,"batteryKwh":29.2,"rangeKmARAI":325,"realRangeKm":222,"powerBhp":57,"torqueNm":143,"accelSec":null,"accelNote":null,"topSpeedKmph":107,"fastChargeKw":30,"fastChargeTime":"10–80% in 57 min","acChargeKw":3.3,"chargeTimeFull":null,"driveType":"FWD","seating":5,"bootLitres":315,"kerbWeightKg":null,"year":2026,"accent":"#22d3ee","upcoming":false,"notableFeatures":["Battery-as-a-Service option from ₹6.89 lakh","29.2 kWh battery, 325 km MIDC claimed range","10.25-inch touchscreen with wireless charging","DC fast charge 10–80% in 57 min"]},
  {"id":"kia-carens-clavis-ev","category":"car","brand":"Kia","model":"Carens Clavis EV","variant":null,"name":"Kia Carens Clavis EV","fullName":"Kia Carens Clavis EV","bodyType":"MPV","priceMinLakh":17.99,"priceMaxLakh":25,"batteryKwh":51.4,"rangeKmARAI":490,"realRangeKm":null,"powerBhp":171,"torqueNm":255,"accelSec":8.4,"accelNote":"0-100 km/h (ER)","topSpeedKmph":null,"fastChargeKw":100,"fastChargeTime":"10–80% in 39 min","acChargeKw":11,"chargeTimeFull":"0-100% in 4h 45m (11 kW, ER)","driveType":"FWD","seating":7,"bootLitres":216,"kerbWeightKg":1725,"year":2026,"accent":"#22d3ee","upcoming":false,"notableFeatures":["42 / 51.4 kWh battery options, up to 490 km claimed","100 kW DC fast charge: 10–80% in 39 min","6 & 7-seater configurations","Vehicle-to-Load (V2L) + 6 airbags standard"]},
  {"id":"byd-yangwang-u9","category":"car","brand":"BYD","model":"Yangwang U9","variant":null,"name":"BYD Yangwang U9","fullName":"BYD Yangwang U9","bodyType":"Electric Super-coupe","priceMinLakh":250,"priceMaxLakh":300,"batteryKwh":80,"rangeKmARAI":450,"realRangeKm":350,"powerBhp":1287,"torqueNm":null,"accelSec":2.36,"accelNote":"0-100 km/h","topSpeedKmph":309,"fastChargeKw":500,"fastChargeTime":"30-80% in ~10 min","acChargeKw":null,"chargeTimeFull":null,"driveType":"AWD","seating":2,"bootLitres":null,"kerbWeightKg":null,"year":2026,"accent":"#f43f5e","upcoming":true,"notableFeatures":["Quad-motor e4 platform — ~1,287 bhp","0–100 km/h in 2.36s, top speed ~309 km/h","DiSus-X active suspension (can 'jump' and dance)","CLTC range ~450 km (80 kWh Blade battery)","Not launched in India — China price ~¥1.8M; India figures are speculative"]},
  {"id":"byd-yangwang-u7","category":"car","brand":"BYD","model":"Yangwang U7","variant":null,"name":"BYD Yangwang U7","fullName":"BYD Yangwang U7","bodyType":"Luxury Sedan","priceMinLakh":120,"priceMaxLakh":180,"batteryKwh":150,"rangeKmARAI":1006,"realRangeKm":760,"powerBhp":1287,"torqueNm":1584,"accelSec":2.9,"accelNote":"0-100 km/h","topSpeedKmph":null,"fastChargeKw":null,"fastChargeTime":"Flash charging","acChargeKw":null,"chargeTimeFull":null,"driveType":"AWD","seating":5,"bootLitres":null,"kerbWeightKg":null,"year":2026,"accent":"#f43f5e","upcoming":true,"notableFeatures":["Up to 1,006 km CLTC range (150 kWh Blade Battery 2.0)","Quad-motor, ~1,287 bhp, 0–100 in 2.9s","DiSus-Z magnetic active suspension","Pure-electric flagship (a PHEV variant also exists)","Not launched in India — China price ¥658k–888k; India figures are speculative"]}
];

// ── Vehicle photos (legally reusable) ────────────────────────────
// Verified Creative Commons / public-domain photos from Wikimedia Commons,
// attached by id-prefix so every variant of a model shares the photo. We
// hotlink via Special:FilePath (a stable URL that always resolves to the
// current file, and simply 404s — falling back to the placeholder — if the
// file ever moves). `imageCredit` + `imageSource` carry the attribution the
// CC licences require; the caption links back to the Commons file page.
const COMMONS_PHOTOS: { prefix: string; file: string; credit: string; source: string }[] = [
  { prefix: "tata-nexon-ev", file: "2020 Tata Nexon EV (India) front view.png", credit: "Hindustan Times / DriveSpark · CC BY 3.0 · Wikimedia Commons", source: "https://commons.wikimedia.org/wiki/File:2020_Tata_Nexon_EV_(India)_front_view.png" },
  { prefix: "tata-tiago-ev", file: "2022 Tata Tiago EV IB XZ+ Tech LR front view.png", credit: "DriveSpark · CC BY 3.0 · Wikimedia Commons", source: "https://commons.wikimedia.org/wiki/File:2022_Tata_Tiago_EV_IB_XZ%2B_Tech_LR_front_view.png" },
  { prefix: "tata-punch-ev", file: "Tata punch.ev.jpg", credit: "CC0 (public domain) · Wikimedia Commons", source: "https://commons.wikimedia.org/wiki/File:Tata_punch.ev.jpg" },
  { prefix: "mg-comet-ev", file: "2023 MG Comet EV Plush (India).png", credit: "DriveSpark · CC BY 3.0 · Wikimedia Commons", source: "https://commons.wikimedia.org/wiki/File:2023_MG_Comet_EV_Plush_(India).png" },
  { prefix: "hyundai-creta-electric", file: "Hyundai Creta Electric SU2 EV PE (3).jpg", credit: "CC BY 4.0 · Wikimedia Commons", source: "https://commons.wikimedia.org/wiki/File:Hyundai_Creta_Electric_SU2_EV_PE_(3).jpg" },
  { prefix: "hyundai-ioniq-5", file: "Hyundai IONIQ 5 NE Atlas White Matte (1).jpg", credit: "Damian B Oh · CC BY-SA 4.0 · Wikimedia Commons", source: "https://commons.wikimedia.org/wiki/File:Hyundai_IONIQ_5_NE_Atlas_White_Matte_(1).jpg" },
  { prefix: "kia-ev6", file: "Kia EV6 GT-Line CV Moonscape Gray Matte (1).jpg", credit: "Damian B Oh · CC BY-SA 4.0 · Wikimedia Commons", source: "https://commons.wikimedia.org/wiki/File:Kia_EV6_GT-Line_CV_Moonscape_Gray_Matte_(1).jpg" },
  { prefix: "byd-atto-3", file: "BYD Atto 3 front-left.jpg", credit: "CC BY 4.0 · Wikimedia Commons", source: "https://commons.wikimedia.org/wiki/File:BYD_Atto_3_front-left.jpg" },
  { prefix: "byd-seal-", file: "2022 BYD Seal.jpg", credit: "CC BY-SA 4.0 · Wikimedia Commons", source: "https://commons.wikimedia.org/wiki/File:2022_BYD_Seal.jpg" },
];

for (const ev of EVS) {
  if (ev.image != null) continue;
  const p = COMMONS_PHOTOS.find((c) => ev.id.startsWith(c.prefix));
  if (!p) continue;
  ev.image = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(p.file)}?width=900`;
  ev.imageCredit = p.credit;
  ev.imageSource = p.source;
}

// ── Variant / trim lineups ───────────────────────────────────────
// Full purchasable variant tables, attached by id-prefix so every config of a
// model shares the lineup. Prices are indicative ex-showroom (₹ lakh) and
// change with offers — refresh periodically. Researched from public Indian
// sources; see VARIANT_SOURCES for citations.
const VEHICLE_VARIANTS: { id: string; variants: Variant[] }[] = [
  { id: "tata-tiago-ev-long-range-24-kwh", variants: [
    { name: "Pure+ 24", batteryKwh: 24, rangeKm: 285, powerBhp: 75 },
    { name: "Creative+ 24", batteryKwh: 24, rangeKm: 285, powerBhp: 75, priceLakh: 9.99 },
  ] },
  { id: "mg-comet-ev", variants: [
    { name: "Executive", batteryKwh: 17.3, rangeKm: 230, powerBhp: 42, priceLakh: 7.36 },
    { name: "Excite", batteryKwh: 17.3, rangeKm: 230, powerBhp: 42 },
    { name: "Excite FC", batteryKwh: 17.4, rangeKm: 230, powerBhp: 42 },
    { name: "Exclusive", batteryKwh: 17.3, rangeKm: 230, powerBhp: 42 },
    { name: "Exclusive FC", batteryKwh: 17.4, rangeKm: 230, powerBhp: 42, priceLakh: 9.86 },
  ] },
  { id: "tata-punch-ev-long-range-40-kwh", variants: [
    { name: "Smart+ 40", batteryKwh: 40, rangeKm: 468, powerBhp: 129, priceLakh: 10.89 },
    { name: "Adventure 40", batteryKwh: 40, rangeKm: 468, powerBhp: 129, priceLakh: 11.59 },
    { name: "Empowered 40", batteryKwh: 40, rangeKm: 468, powerBhp: 129, priceLakh: 12.29 },
    { name: "Empowered+S 40", batteryKwh: 40, rangeKm: 468, powerBhp: 129, priceLakh: 12.59 },
  ] },
  { id: "tata-nexon-ev-long-range-45-kwh", variants: [
    { name: "Creative 45", batteryKwh: 45, rangeKm: 489, powerBhp: 143, priceLakh: 13.99 },
    { name: "Fearless 45", batteryKwh: 45, rangeKm: 489, powerBhp: 143, priceLakh: 14.99 },
    { name: "Empowered Plus 45", batteryKwh: 45, rangeKm: 489, powerBhp: 143, priceLakh: 16.99 },
    { name: "Empowered Plus A 45", batteryKwh: 45, rangeKm: 489, powerBhp: 143, priceLakh: 17.49 },
  ] },
  { id: "citroen-ec3", variants: [
    { name: "Feel", batteryKwh: 29.2, rangeKm: 320, powerBhp: 56, priceLakh: 12.9 },
    { name: "Shine", batteryKwh: 29.2, rangeKm: 320, powerBhp: 56 },
    { name: "Shine DT", batteryKwh: 29.2, rangeKm: 320, powerBhp: 56, priceLakh: 13.41 },
  ] },
  { id: "citroen-ec3x", variants: [
    { name: "Live", batteryKwh: 29.2, rangeKm: 325, powerBhp: 57, priceLakh: 11.99 },
    { name: "Live (O)", batteryKwh: 29.2, rangeKm: 325, powerBhp: 57, priceLakh: 12.35 },
    { name: "Shine", batteryKwh: 29.2, rangeKm: 325, powerBhp: 57, priceLakh: 13.26 },
  ] },
  { id: "mg-windsor-ev-38-kwh", variants: [
    { name: "Excite", batteryKwh: 38, rangeKm: 332, powerBhp: 134, priceLakh: 14 },
    { name: "Exclusive", batteryKwh: 38, rangeKm: 332, powerBhp: 134, priceLakh: 15.53 },
    { name: "Essence", batteryKwh: 38, rangeKm: 332, powerBhp: 134, priceLakh: 16.53 },
  ] },
  { id: "mg-zs-ev", variants: [
    { name: "Executive", batteryKwh: 50.3, rangeKm: 461, powerBhp: 176, priceLakh: 18.98 },
    { name: "Excite Pro", batteryKwh: 50.3, rangeKm: 461, powerBhp: 176 },
    { name: "Exclusive Plus", batteryKwh: 50.3, rangeKm: 461, powerBhp: 176 },
    { name: "Essence", batteryKwh: 50.3, rangeKm: 461, powerBhp: 176, priceLakh: 25.75 },
  ] },
  { id: "mg-windsor-ev-pro-52-9-kwh", variants: [
    { name: "Exclusive Pro", batteryKwh: 52.9, rangeKm: 449, powerBhp: 134, priceLakh: 17.49 },
    { name: "Essence Pro", batteryKwh: 52.9, rangeKm: 449, powerBhp: 134, priceLakh: 18.1 },
  ] },
  { id: "tata-curvv-ev-55-kwh", variants: [
    { name: "Accomplished X 55", batteryKwh: 55, rangeKm: 502, powerBhp: 165, priceLakh: 17.49 },
    { name: "Empowered X 55", batteryKwh: 55, rangeKm: 502, powerBhp: 165, priceLakh: 19.19 },
    { name: "Empowered X 55 Dark", batteryKwh: 55, rangeKm: 502, powerBhp: 165, priceLakh: 19.49 },
  ] },
  { id: "hyundai-creta-electric-long-range-51-4-kwh", variants: [
    { name: "Excellence LR", batteryKwh: 51.4, rangeKm: 510, powerBhp: 169, priceLakh: 23.82 },
  ] },
  { id: "mahindra-be-6-79-kwh", variants: [
    { name: "Pack Two 79", batteryKwh: 79, rangeKm: 683, powerBhp: 282, priceLakh: 23.5 },
    { name: "Pack Three Select 79", batteryKwh: 79, rangeKm: 683, powerBhp: 282 },
    { name: "Pack Three 79", batteryKwh: 79, rangeKm: 683, powerBhp: 282, priceLakh: 26.9 },
  ] },
  { id: "maruti-suzuki-e-vitara-61-kwh", variants: [
    { name: "Zeta 61", batteryKwh: 61.1, rangeKm: 543, powerBhp: 172, priceLakh: 17.49 },
    { name: "Alpha 61", batteryKwh: 61.1, rangeKm: 543, powerBhp: 172, priceLakh: 19.79 },
  ] },
  { id: "mahindra-xev-9e-79-kwh", variants: [
    { name: "Pack One 79", batteryKwh: 79, rangeKm: 656, powerBhp: 282, priceLakh: 21.9 },
    { name: "Pack Two 79", batteryKwh: 79, rangeKm: 656, powerBhp: 282, priceLakh: 24.9 },
    { name: "Pack Three Select 79", batteryKwh: 79, rangeKm: 656, powerBhp: 282, priceLakh: 27.9 },
    { name: "Pack Three 79", batteryKwh: 79, rangeKm: 656, powerBhp: 282, priceLakh: 30.5 },
  ] },
  { id: "tata-harrier-ev-qwd-75-kwh", variants: [
    { name: "Fearless+ QWD 75", batteryKwh: 75, rangeKm: 622, powerBhp: 390, priceLakh: 26.49 },
    { name: "Empowered QWD 75", batteryKwh: 75, rangeKm: 622, powerBhp: 390, priceLakh: 28.99 },
    { name: "Empowered QWD 75 Stealth", batteryKwh: 75, rangeKm: 622, powerBhp: 390, priceLakh: 29.74 },
    { name: "Empowered QWD 75 Stealth ACFC", batteryKwh: 75, rangeKm: 622, powerBhp: 390, priceLakh: 30.23 },
  ] },
  { id: "mahindra-xuv-3xo-ev-39-4-kwh", variants: [
    { name: "AX5", batteryKwh: 39.4, powerBhp: 147, priceLakh: 13.89 },
    { name: "AX7L", batteryKwh: 39.4, powerBhp: 147, priceLakh: 14.96 },
  ] },
  { id: "tata-sierra-ev", variants: [
    { name: "Single-motor (launch)", rangeKm: 500 },
    { name: "Dual-motor AWD (launch)", rangeKm: 500 },
  ] },
  { id: "mahindra-xev-9s", variants: [
    { name: "Pack One Above 59", batteryKwh: 59, rangeKm: 521, powerBhp: 231, priceLakh: 19.95 },
    { name: "Pack Two Above 79", batteryKwh: 79, rangeKm: 679, powerBhp: 286, priceLakh: 25.45 },
    { name: "Pack Three 79", batteryKwh: 79, rangeKm: 679, powerBhp: 286, priceLakh: 27.35 },
    { name: "Pack Three Above 79", batteryKwh: 79, rangeKm: 679, powerBhp: 286, priceLakh: 29.45 },
  ] },
  { id: "citroen-basalt-ev", variants: [
    { name: "Basalt EV (launch)", batteryKwh: 35, rangeKm: 450 },
  ] },
  { id: "kia-syros-ev", variants: [
    { name: "Syros EV (launch)", batteryKwh: 42, rangeKm: 390, powerBhp: 133, priceLakh: 14 },
  ] },
  { id: "kia-carens-clavis-ev-42-kwh", variants: [
    { name: "HTK Plus", batteryKwh: 42, rangeKm: 404, powerBhp: 133, priceLakh: 17.99 },
    { name: "HTX", batteryKwh: 42, rangeKm: 404, powerBhp: 133 },
    { name: "HTX 6Str", batteryKwh: 42, rangeKm: 404, powerBhp: 133, priceLakh: 20.49 },
  ] },
  { id: "kia-carens-clavis-ev-51-4-kwh-long-range", variants: [
    { name: "HTX ER", batteryKwh: 51.4, rangeKm: 490, powerBhp: 171, priceLakh: 21.99 },
    { name: "GTX Plus ER", batteryKwh: 51.4, rangeKm: 490, powerBhp: 171 },
    { name: "X-Line ER", batteryKwh: 51.4, rangeKm: 490, powerBhp: 171, priceLakh: 24.49 },
  ] },
  { id: "toyota-urban-cruiser-ev", variants: [
    { name: "E1 (49 kWh)", batteryKwh: 49, rangeKm: 440, powerBhp: 142 },
    { name: "E2 (61 kWh)", batteryKwh: 61, rangeKm: 543, powerBhp: 174 },
    { name: "E3 (61 kWh)", batteryKwh: 61, rangeKm: 543, powerBhp: 174, priceLakh: 23.6 },
  ] },
  { id: "byd-atto-3-superior-60-48-kwh", variants: [
    { name: "Dynamic", batteryKwh: 49.92, rangeKm: 468, powerBhp: 201, priceLakh: 24.99 },
    { name: "Premium", batteryKwh: 60.48, rangeKm: 521, powerBhp: 201, priceLakh: 29.85 },
    { name: "Superior", batteryKwh: 60.48, rangeKm: 521, powerBhp: 201, priceLakh: 33.99 },
  ] },
  { id: "byd-emax-7-superior-71-8-kwh", variants: [
    { name: "Premium", batteryKwh: 55.4, rangeKm: 420, powerBhp: 161, priceLakh: 26.9 },
    { name: "Superior", batteryKwh: 71.8, rangeKm: 530, powerBhp: 201, priceLakh: 29.9 },
  ] },
  { id: "byd-seal-premium-82-56-kwh", variants: [
    { name: "Dynamic", batteryKwh: 61.44, rangeKm: 510, powerBhp: 204, priceLakh: 41 },
    { name: "Premium", batteryKwh: 82.56, rangeKm: 650, powerBhp: 313, priceLakh: 45.7 },
    { name: "Performance", batteryKwh: 82.56, rangeKm: 580, powerBhp: 522, priceLakh: 53.15 },
  ] },
  { id: "byd-sealion-7-premium-rwd", variants: [
    { name: "Premium (RWD)", batteryKwh: 82.56, rangeKm: 567, powerBhp: 313, priceLakh: 49.4 },
  ] },
  { id: "byd-sealion-7-performance-awd", variants: [
    { name: "Performance (AWD)", batteryKwh: 82.56, rangeKm: 542, powerBhp: 530, priceLakh: 54.9 },
  ] },
  { id: "hyundai-ioniq-5-84-kwh", variants: [
    { name: "84 kWh RWD", batteryKwh: 84, rangeKm: 690, powerBhp: 225, priceLakh: 55.7 },
  ] },
  { id: "hyundai-ioniq-6", variants: [
    { name: "77.4 kWh RWD", batteryKwh: 77.4, rangeKm: 614, powerBhp: 228 },
  ] },
  { id: "kia-ev6-gt-line-awd-84-kwh", variants: [
    { name: "GT-Line AWD", batteryKwh: 84, rangeKm: 663, powerBhp: 325, priceLakh: 65.97 },
  ] },
  { id: "kia-ev9-gt-line", variants: [
    { name: "GT-Line AWD", batteryKwh: 99.8, rangeKm: 561, powerBhp: 379, priceLakh: 130 },
  ] },
  { id: "tesla-model-y-premium-rwd", variants: [
    { name: "Premium RWD", batteryKwh: 60, rangeKm: 500, powerBhp: 235, priceLakh: 50.89 },
  ] },
  { id: "tesla-model-y-long-range-rwd", variants: [
    { name: "Long Range RWD", batteryKwh: 84.2, rangeKm: 622, powerBhp: 340, priceLakh: 67.89 },
  ] },
  { id: "tesla-model-y-l-long-wheelbase-awd", variants: [
    { name: "Model Y L (6-seat LWB AWD)", batteryKwh: 88.2, rangeKm: 681, priceLakh: 61.99 },
  ] },
  { id: "tesla-model-3", variants: [
    { name: "Dual-motor AWD", powerBhp: 460 },
  ] },
  { id: "vinfast-vf6-59-6-kwh", variants: [
    { name: "Earth", batteryKwh: 59.6, rangeKm: 468, powerBhp: 177, priceLakh: 17.29 },
    { name: "Wind", batteryKwh: 59.6, rangeKm: 463, powerBhp: 204, priceLakh: 18.69 },
    { name: "Wind Infinity", batteryKwh: 59.6, rangeKm: 463, powerBhp: 204, priceLakh: 19.19 },
  ] },
  { id: "vinfast-vf6", variants: [
    { name: "Earth", batteryKwh: 59.6, rangeKm: 468, powerBhp: 177, priceLakh: 17.29 },
    { name: "Wind", batteryKwh: 59.6, rangeKm: 463, powerBhp: 204, priceLakh: 18.69 },
    { name: "Wind Infinity", batteryKwh: 59.6, rangeKm: 463, powerBhp: 204, priceLakh: 19.19 },
  ] },
  { id: "vinfast-vf7-70-8-kwh", variants: [
    { name: "Earth", batteryKwh: 59.6, rangeKm: 438, powerBhp: 175, priceLakh: 21.89 },
    { name: "Wind", batteryKwh: 70.8, rangeKm: 532, powerBhp: 204, priceLakh: 23.89 },
    { name: "Wind Infinity", batteryKwh: 70.8, rangeKm: 532, powerBhp: 204, priceLakh: 24.89 },
    { name: "Sky AWD", batteryKwh: 70.8, rangeKm: 510, powerBhp: 353, priceLakh: 25.79 },
    { name: "Sky Infinity AWD", batteryKwh: 70.8, rangeKm: 510, powerBhp: 353, priceLakh: 26.79 },
  ] },
  { id: "vinfast-vf7", variants: [
    { name: "Earth", batteryKwh: 59.6, rangeKm: 438, powerBhp: 175, priceLakh: 21.89 },
    { name: "Wind", batteryKwh: 70.8, rangeKm: 532, powerBhp: 204, priceLakh: 23.89 },
    { name: "Wind Infinity", batteryKwh: 70.8, rangeKm: 532, powerBhp: 204, priceLakh: 24.89 },
    { name: "Sky AWD", batteryKwh: 70.8, rangeKm: 510, powerBhp: 353, priceLakh: 25.79 },
    { name: "Sky Infinity AWD", batteryKwh: 70.8, rangeKm: 510, powerBhp: 353, priceLakh: 26.79 },
  ] },
  { id: "vinfast-vf-mpv-7-60-13-kwh", variants: [
    { name: "VF MPV 7", batteryKwh: 60.13, rangeKm: 517, powerBhp: 201, priceLakh: 24.49 },
  ] },
  { id: "volvo-ex30", variants: [
    { name: "Single Motor ER (RWD) Ultra", batteryKwh: 69, rangeKm: 480, powerBhp: 272, priceLakh: 41 },
  ] },
  { id: "volvo-ex40-single-motor-ultra", variants: [
    { name: "Plus (Single Motor)", batteryKwh: 69, rangeKm: 475, powerBhp: 238, priceLakh: 50.1 },
    { name: "Ultra (Single Motor)", batteryKwh: 69, rangeKm: 475, powerBhp: 238, priceLakh: 56.1 },
  ] },
  { id: "volvo-ec40", variants: [
    { name: "Twin Motor (AWD)", batteryKwh: 78, rangeKm: 530, powerBhp: 408, priceLakh: 59 },
  ] },
  { id: "volvo-ex90", variants: [
    { name: "Twin Motor", batteryKwh: 111, rangeKm: 600, powerBhp: 408 },
    { name: "Twin Motor Performance", batteryKwh: 111, rangeKm: 600, powerBhp: 517 },
  ] },
  { id: "mg-cyberster", variants: [
    { name: "GT (Dual-Motor AWD)", batteryKwh: 77, rangeKm: 580, powerBhp: 510, priceLakh: 74.99 },
  ] },
  { id: "mg-m9", variants: [
    { name: "Presidential Limo", batteryKwh: 90, rangeKm: 548, powerBhp: 241, priceLakh: 69.9 },
  ] },
  { id: "mercedes-benz-eqa", variants: [
    { name: "EQA 250+", batteryKwh: 70.5, rangeKm: 560, powerBhp: 188, priceLakh: 67.2 },
  ] },
  { id: "mercedes-benz-eqb", variants: [
    { name: "EQB 250+", batteryKwh: 70.5, rangeKm: 535, powerBhp: 188, priceLakh: 70.9 },
    { name: "EQB 350 4MATIC AMG Line", batteryKwh: 70.5, rangeKm: 520, powerBhp: 288, priceLakh: 77.5 },
  ] },
  { id: "mercedes-benz-eqe-suv-500-4matic", variants: [
    { name: "EQE SUV 500 4MATIC", batteryKwh: 90.56, rangeKm: 550, powerBhp: 402, priceLakh: 141 },
  ] },
  { id: "mercedes-benz-eqs-580-4matic", variants: [
    { name: "EQS 580 4MATIC", batteryKwh: 107.8, rangeKm: 857, powerBhp: 516, priceLakh: 148 },
  ] },
  { id: "mercedes-benz-eqs-suv-580-4matic", variants: [
    { name: "EQS SUV 580 4MATIC", batteryKwh: 122, rangeKm: 809, powerBhp: 544, priceLakh: 148 },
  ] },
  { id: "mercedes-maybach-eqs-680-suv-680-4matic", variants: [
    { name: "Maybach EQS 680 4MATIC", batteryKwh: 107.8, rangeKm: 611, powerBhp: 649, priceLakh: 225 },
  ] },
  { id: "bmw-ix1-lwb-edrive20l", variants: [
    { name: "iX1 LWB eDrive20L M Sport", batteryKwh: 66.4, rangeKm: 531, powerBhp: 204, priceLakh: 49 },
  ] },
  { id: "bmw-i4-edrive35", variants: [
    { name: "i4 eDrive35 M Sport", batteryKwh: 70.2, rangeKm: 483, powerBhp: 286, priceLakh: 72.5 },
    { name: "i4 eDrive40 M Sport", batteryKwh: 83.9, rangeKm: 590, powerBhp: 340, priceLakh: 77.5 },
  ] },
  { id: "bmw-i5-m60-xdrive", variants: [
    { name: "i5 M60 xDrive", batteryKwh: 81.2, rangeKm: 516, powerBhp: 593, priceLakh: 120 },
  ] },
  { id: "bmw-ix-xdrive50", variants: [
    { name: "iX xDrive50", batteryKwh: 105.2, rangeKm: 635, powerBhp: 516, priceLakh: 139.5 },
  ] },
  { id: "bmw-i7-xdrive60", variants: [
    { name: "i7 eDrive50 M Sport", batteryKwh: 101.7, rangeKm: 603, powerBhp: 449, priceLakh: 205 },
    { name: "i7 M70 xDrive", batteryKwh: 101.7, rangeKm: 560, powerBhp: 650, priceLakh: 250 },
  ] },
  { id: "audi-q8-e-tron-55-quattro", variants: [
    { name: "Q8 e-tron 50 quattro", batteryKwh: 95, rangeKm: 491, powerBhp: 340, priceLakh: 115 },
    { name: "Q8 e-tron 55 quattro", batteryKwh: 114, rangeKm: 582, powerBhp: 408, priceLakh: 127 },
  ] },
  { id: "audi-e-tron-gt", variants: [
    { name: "e-tron GT quattro", batteryKwh: 93.4, rangeKm: 500, powerBhp: 476, priceLakh: 171.57 },
    { name: "RS e-tron GT", batteryKwh: 93.4, rangeKm: 481, powerBhp: 598, priceLakh: 195.29 },
  ] },
  { id: "audi-q6-e-tron", variants: [
    { name: "Q6 e-tron quattro", batteryKwh: 94.9, rangeKm: 625, powerBhp: 387 },
  ] },
  { id: "porsche-taycan", variants: [
    { name: "Taycan (RWD)", batteryKwh: 89, rangeKm: 668, powerBhp: 408, priceLakh: 170 },
    { name: "Taycan 4S", batteryKwh: 105, rangeKm: 705, powerBhp: 598, priceLakh: 196 },
    { name: "Taycan Turbo", batteryKwh: 105, rangeKm: 683, powerBhp: 884, priceLakh: 270 },
  ] },
  { id: "porsche-macan-ev", variants: [
    { name: "Macan EV", batteryKwh: 100, rangeKm: 641, powerBhp: 335, priceLakh: 121 },
    { name: "Macan EV 4S", batteryKwh: 100, rangeKm: 606, powerBhp: 516, priceLakh: 158 },
    { name: "Macan EV Turbo", batteryKwh: 100, rangeKm: 591, powerBhp: 639, priceLakh: 183 },
  ] },
  { id: "mini-countryman-electric-e", variants: [
    { name: "Countryman E", batteryKwh: 66.45, rangeKm: 462, powerBhp: 204, priceLakh: 54.9 },
    { name: "Countryman SE All4", batteryKwh: 66.45, rangeKm: 440, powerBhp: 313, priceLakh: 66.9 },
  ] },
  { id: "lotus-eletre", variants: [
    { name: "Eletre", batteryKwh: 112, rangeKm: 600, powerBhp: 603, priceLakh: 255 },
    { name: "Eletre R", batteryKwh: 112, rangeKm: 490, powerBhp: 905, priceLakh: 299 },
  ] },
  { id: "rolls-royce-spectre", variants: [
    { name: "Spectre", batteryKwh: 102, rangeKm: 530, powerBhp: 584, priceLakh: 750 },
  ] },
  { id: "ola-s1-pro-gen-3-4-kwh", variants: [
    { name: "S1 Pro 3 kWh", batteryKwh: 3, rangeKm: 176, powerBhp: 14.75, priceLakh: 1.1 },
    { name: "S1 Pro 4 kWh", batteryKwh: 4, rangeKm: 242, powerBhp: 14.75, priceLakh: 1.25 },
  ] },
  { id: "ola-s1-x-gen-3-4-kwh", variants: [
    { name: "S1 X 2 kWh", batteryKwh: 2, rangeKm: 108, priceLakh: 0.8 },
    { name: "S1 X 3 kWh", batteryKwh: 3, rangeKm: 176, priceLakh: 0.9 },
    { name: "S1 X 4 kWh", batteryKwh: 4, rangeKm: 242, priceLakh: 1 },
  ] },
  { id: "ola-s1-x-5-2-kwh-4680-bharat-cell", variants: [
    { name: "S1 X+ 5.2 kWh", batteryKwh: 5.2, rangeKm: 320, powerBhp: 14.75, priceLakh: 1.3 },
  ] },
  { id: "ola-s1-air-3-kwh", variants: [
    { name: "S1 Air 2 kWh", batteryKwh: 2, rangeKm: 84, powerBhp: 6.03, priceLakh: 0.85 },
    { name: "S1 Air 3 kWh", batteryKwh: 3, rangeKm: 125, powerBhp: 6.03, priceLakh: 1 },
    { name: "S1 Air 4 kWh", batteryKwh: 4, rangeKm: 165, powerBhp: 6.03, priceLakh: 1.1 },
  ] },
  { id: "ather-450x-3-7-kwh", variants: [
    { name: "450X 2.9 kWh", batteryKwh: 2.9, rangeKm: 126, powerBhp: 7.2, priceLakh: 1.46 },
    { name: "450X 3.7 kWh", batteryKwh: 3.7, rangeKm: 161, powerBhp: 7.2, priceLakh: 1.57 },
  ] },
  { id: "ather-rizta-z-3-7-kwh", variants: [
    { name: "Rizta Z 2.9 kWh", batteryKwh: 2.9, rangeKm: 123, powerBhp: 4.9, priceLakh: 1.3 },
    { name: "Rizta Z 3.7 kWh", batteryKwh: 3.7, rangeKm: 159, powerBhp: 4.9, priceLakh: 1.5 },
  ] },
  { id: "tvs-iqube-3-5-kwh", variants: [
    { name: "iQube 3.1 kWh", batteryKwh: 3.1, rangeKm: 116, powerBhp: 5.5, priceLakh: 1.25 },
  ] },
  { id: "tvs-iqube-st-5-3-kwh", variants: [
    { name: "iQube ST 5.3 kWh", batteryKwh: 5.3, rangeKm: 212, powerBhp: 5.5, priceLakh: 1.62 },
  ] },
  { id: "bajaj-chetak-c3501-35-series", variants: [
    { name: "Chetak 3501 (35 Series)", batteryKwh: 3.5, rangeKm: 153, powerBhp: 5.49, priceLakh: 1.3 },
  ] },
  { id: "bajaj-chetak-3001-30-series", variants: [
    { name: "Chetak 3001 (30 Series)", batteryKwh: 3, rangeKm: 127, powerBhp: 5.36, priceLakh: 1.07 },
  ] },
  { id: "hero-vida-v2-pro-3-94-kwh", variants: [
    { name: "Vida V2 Pro 3.94 kWh", batteryKwh: 3.94, rangeKm: 165, powerBhp: 8, priceLakh: 1.35 },
  ] },
  { id: "hero-vida-vx2-plus-dual-3-4-kwh", variants: [
    { name: "Vida VX2 Plus 3.4 kWh", batteryKwh: 3.4, rangeKm: 142, powerBhp: 6, priceLakh: 1.1 },
  ] },
  { id: "ampere-nexus-ex-st", variants: [
    { name: "Nexus EX 3 kWh", batteryKwh: 3, rangeKm: 136, powerBhp: 4, priceLakh: 1.15 },
    { name: "Nexus ST 3 kWh", batteryKwh: 3, rangeKm: 136, powerBhp: 4, priceLakh: 1.2 },
  ] },
  { id: "simple-one-gen-2-5-kwh", variants: [
    { name: "Simple One Gen 2 5 kWh", batteryKwh: 5, rangeKm: 265, powerBhp: 11.8, priceLakh: 1.78 },
  ] },
  { id: "river-indie", variants: [
    { name: "River Indie 4 kWh", batteryKwh: 4, rangeKm: 161, powerBhp: 9, priceLakh: 1.43 },
  ] },
  { id: "bgauss-ruv-350-ex-max", variants: [
    { name: "RUV 350 i EX 2.3 kWh", batteryKwh: 2.3, rangeKm: 105, powerBhp: 4.7, priceLakh: 1.1 },
    { name: "RUV 350 Max 3 kWh", batteryKwh: 3, rangeKm: 145, powerBhp: 4.7, priceLakh: 1.35 },
  ] },
  { id: "ather-450-apex", variants: [
    { name: "450 Apex 3.7 kWh", batteryKwh: 3.7, rangeKm: 157, powerBhp: 8.6, priceLakh: 1.9 },
  ] },
  { id: "ather-450s-2-9-kwh", variants: [
    { name: "450S 2.9 kWh", batteryKwh: 2.9, rangeKm: 122, powerBhp: 7.2, priceLakh: 1.3 },
    { name: "450S 3.7 kWh", batteryKwh: 3.7, rangeKm: 161, powerBhp: 7.2, priceLakh: 1.46 },
  ] },
  { id: "ola-s1-pro-gen-3-5-3-kwh", variants: [
    { name: "S1 Pro+ 5.3 kWh", batteryKwh: 5.3, rangeKm: 320, powerBhp: 14.75, priceLakh: 1.88 },
  ] },
  { id: "ola-gig", variants: [
    { name: "Gig 1.5 kWh", batteryKwh: 1.5, rangeKm: 112, priceLakh: 0.4 },
  ] },
  { id: "tvs-x", variants: [
    { name: "TVS X 4.44 kWh", batteryKwh: 4.44, rangeKm: 140, powerBhp: 14.75, priceLakh: 2.5 },
  ] },
  { id: "tvs-orbiter-v2-3-1-kwh", variants: [
    { name: "Orbiter V2 3.1 kWh", batteryKwh: 3.1, rangeKm: 158, priceLakh: 0.999 },
  ] },
  { id: "tvs-orbiter-v1-1-8-kwh", variants: [
    { name: "Orbiter V1 1.8 kWh", batteryKwh: 1.8, rangeKm: 86, priceLakh: 0.845 },
  ] },
  { id: "suzuki-e-access", variants: [
    { name: "e-Access 3.07 kWh", batteryKwh: 3.07, rangeKm: 95, powerBhp: 4.5, priceLakh: 1.88 },
  ] },
  { id: "honda-activa-e", variants: [
    { name: "Activa e: Standard", batteryKwh: 3, rangeKm: 102, powerBhp: 8, priceLakh: 1.17 },
    { name: "Activa e: RoadSync Duo", batteryKwh: 3, rangeKm: 102, powerBhp: 8, priceLakh: 1.52 },
  ] },
  { id: "honda-qc1", variants: [
    { name: "QC1 1.5 kWh", batteryKwh: 1.5, rangeKm: 80, powerBhp: 2, priceLakh: 0.9 },
  ] },
  { id: "hero-vida-z", variants: [
    { name: "Vida Z (upcoming)" },
  ] },
  { id: "ampere-primus", variants: [
    { name: "Primus", batteryKwh: 3, rangeKm: 107, powerBhp: 5.36, priceLakh: 1.2 },
  ] },
  { id: "okinawa-okhi-90", variants: [
    { name: "Okhi-90", batteryKwh: 3.6, rangeKm: 161, powerBhp: 5.1, priceLakh: 1.5 },
  ] },
  { id: "okinawa-praisepro", variants: [
    { name: "PraisePro", batteryKwh: 2.08, rangeKm: 81, priceLakh: 0.84 },
  ] },
  { id: "okaya-faast-f4", variants: [
    { name: "Faast F4", batteryKwh: 4.32, rangeKm: 160, priceLakh: 1.1 },
  ] },
  { id: "pure-ev-epluto-7g", variants: [
    { name: "ePluto 7G Standard", batteryKwh: 2.5, rangeKm: 90, priceLakh: 0.97 },
    { name: "ePluto 7G Pro", batteryKwh: 3, rangeKm: 120, priceLakh: 1.05 },
    { name: "ePluto 7G Max", batteryKwh: 3.5, rangeKm: 151, priceLakh: 1.18 },
  ] },
  { id: "pure-ev-etrance-neo", variants: [
    { name: "eTrance Neo+ SX", batteryKwh: 1.8, rangeKm: 85, priceLakh: 0.8 },
    { name: "eTrance Neo+ Plus", batteryKwh: 2.5, rangeKm: 101, priceLakh: 1.06 },
  ] },
  { id: "bounce-infinity-e1", variants: [
    { name: "Infinity E1 (1.9 kWh)", batteryKwh: 1.9, rangeKm: 70, priceLakh: 1.16 },
    { name: "Infinity E1+ (2.5 kWh)", batteryKwh: 2.5, rangeKm: 100, priceLakh: 1.26 },
  ] },
  { id: "kinetic-green-zulu", variants: [
    { name: "Zulu STD", batteryKwh: 2.27, rangeKm: 104, priceLakh: 0.8 },
  ] },
  { id: "bgauss-c12-max-2-7-kwh", variants: [
    { name: "C12 Max (2.0 kWh)", batteryKwh: 2, rangeKm: 85, priceLakh: 1.08 },
    { name: "C12 Max (2.7 kWh)", batteryKwh: 2.7, rangeKm: 123, powerBhp: 3.35, priceLakh: 1.27 },
  ] },
  { id: "bgauss-d15", variants: [
    { name: "D15 i", batteryKwh: 3.2, rangeKm: 115, powerBhp: 2.01, priceLakh: 1.46 },
    { name: "D15 Pro", batteryKwh: 3.2, rangeKm: 115, powerBhp: 2.01, priceLakh: 1.59 },
  ] },
  { id: "ivoomi-jeet-x", variants: [
    { name: "Jeet X Standard", batteryKwh: 2, rangeKm: 100, priceLakh: 0.85 },
    { name: "Jeet X 180", batteryKwh: 4, rangeKm: 200, priceLakh: 1.05 },
  ] },
  { id: "ivoomi-jeet-x-ze", variants: [
    { name: "Jeet X ZE 2.1", batteryKwh: 2.1, rangeKm: 120, priceLakh: 0.9 },
    { name: "Jeet X ZE 2.5", batteryKwh: 2.5, rangeKm: 140, priceLakh: 0.95 },
    { name: "Jeet X ZE 3.0", batteryKwh: 3, rangeKm: 170, priceLakh: 1 },
  ] },
  { id: "lectrix-nduro-3-0", variants: [
    { name: "NDuro 2.0", batteryKwh: 2.3, rangeKm: 90, priceLakh: 1 },
    { name: "NDuro 3.0", batteryKwh: 3, rangeKm: 117, priceLakh: 1.09 },
  ] },
  { id: "joy-e-bike-gen-next-nanu", variants: [
    { name: "Gen Next Nanu+", batteryKwh: 2.18, rangeKm: 100, priceLakh: 0.88 },
  ] },
  { id: "komaki-se", variants: [
    { name: "SE", batteryKwh: 1.8, rangeKm: 80, priceLakh: 0.61 },
  ] },
  { id: "battre-iot", variants: [
    { name: "IOT", batteryKwh: 1.44, rangeKm: 85, priceLakh: 0.8 },
  ] },
  { id: "ultraviolette-tesseract", variants: [
    { name: "Tesseract 3.5", batteryKwh: 3.5, rangeKm: 162, priceLakh: 1.45 },
    { name: "Tesseract 5", batteryKwh: 5, rangeKm: 220, priceLakh: 1.7 },
    { name: "Tesseract 6", batteryKwh: 6, rangeKm: 261, priceLakh: 2 },
  ] },
  { id: "ather-el", variants: [
    { name: "Ather EL (upcoming)" },
  ] },
  { id: "yamaha-aerox-e", variants: [
    { name: "Aerox E", batteryKwh: 6, rangeKm: 106, powerBhp: 12.6, priceLakh: 2.5 },
  ] },
  { id: "yamaha-ec-06", variants: [
    { name: "EC-06", batteryKwh: 4, rangeKm: 169, powerBhp: 8.87, priceLakh: 1.68 },
  ] },
  { id: "tvs-iqube-s-4-7-kwh", variants: [
    { name: "iQube S (4.7 kWh)", batteryKwh: 4.7, rangeKm: 175, powerBhp: 5.9, priceLakh: 1.37 },
  ] },
  { id: "bajaj-chetak-c25", variants: [
    { name: "Chetak C25 (C2501)", batteryKwh: 2.5, rangeKm: 113, powerBhp: 2.95, priceLakh: 0.91 },
  ] },
  { id: "simple-ultra-6-5-kwh", variants: [
    { name: "Ultra", batteryKwh: 6.5, rangeKm: 400, powerBhp: 11.8, priceLakh: 2.35 },
  ] },
  { id: "revolt-rv400-brz-standard", variants: [
    { name: "RV400 BRZ", batteryKwh: 3.24, rangeKm: 150, priceLakh: 1.43 },
  ] },
  { id: "revolt-rv1-base-2-2-kwh", variants: [
    { name: "RV1", batteryKwh: 2.2, rangeKm: 100, priceLakh: 0.85 },
  ] },
  { id: "revolt-rv1-3-24-kwh", variants: [
    { name: "RV1+", batteryKwh: 3.24, rangeKm: 160, priceLakh: 1 },
  ] },
  { id: "revolt-rv-blazex", variants: [
    { name: "RV BlazeX", batteryKwh: 3.24, rangeKm: 150, priceLakh: 1.15 },
  ] },
  { id: "tork-kratos-r", variants: [
    { name: "Kratos R", batteryKwh: 4, rangeKm: 180, powerBhp: 12.07, priceLakh: 1.5 },
  ] },
  { id: "tork-kratos", variants: [
    { name: "Kratos", batteryKwh: 4, rangeKm: 180, powerBhp: 10.05, priceLakh: 1.37 },
  ] },
  { id: "tork-kratos-x", variants: [
    { name: "Kratos X", batteryKwh: 4, rangeKm: 180, powerBhp: 16.09, priceLakh: 1.82 },
  ] },
  { id: "ultraviolette-f77-mach-2-standard-7-1-kwh", variants: [
    { name: "F77 Mach 2 (Standard)", batteryKwh: 7.1, rangeKm: 211, powerBhp: 36.2, priceLakh: 3.09 },
  ] },
  { id: "ultraviolette-f77-mach-2-recon-recon-10-3-kwh", variants: [
    { name: "F77 Mach 2 Recon", batteryKwh: 10.3, rangeKm: 323, powerBhp: 40.2, priceLakh: 4.24 },
  ] },
  { id: "ultraviolette-shockwave", variants: [
    { name: "Shockwave", batteryKwh: 4, rangeKm: 165, powerBhp: 14.5, priceLakh: 1.75 },
  ] },
  { id: "ultraviolette-f99", variants: [
    { name: "F99", batteryKwh: 10.3, rangeKm: 307, powerBhp: 120, priceLakh: 8 },
  ] },
  { id: "oben-rorr-original-4-4-kwh", variants: [
    { name: "Rorr", batteryKwh: 4.4, rangeKm: 200, priceLakh: 1.5 },
  ] },
  { id: "oben-rorr-ez-up-to-4-4-kwh", variants: [
    { name: "Rorr EZ 2.6 kWh", batteryKwh: 2.6, rangeKm: 87 },
    { name: "Rorr EZ 3.4 kWh", batteryKwh: 3.4, rangeKm: 130 },
    { name: "Rorr EZ 4.4 kWh", batteryKwh: 4.4, rangeKm: 175 },
  ] },
  { id: "oben-rorr-evo-3-4-kwh", variants: [
    { name: "Rorr Evo", batteryKwh: 3.4, rangeKm: 180, powerBhp: 12.07, priceLakh: 1.25 },
  ] },
  { id: "matter-aera-5000-geared", variants: [
    { name: "Aera 5000+", batteryKwh: 5, rangeKm: 172, powerBhp: 15.4, priceLakh: 1.94 },
  ] },
  { id: "matter-aera-5000", variants: [
    { name: "Aera 5000", batteryKwh: 5, rangeKm: 172, powerBhp: 15.4, priceLakh: 1.81 },
  ] },
  { id: "orxa-mantis", variants: [
    { name: "Mantis", batteryKwh: 8.9, rangeKm: 221, powerBhp: 27.12, priceLakh: 3.6 },
  ] },
  { id: "kabira-km4000-mark-2", variants: [
    { name: "KM4000 Mark 2", batteryKwh: 5.15, rangeKm: 120, priceLakh: 1.51 },
  ] },
  { id: "kabira-km3000-mark-2", variants: [
    { name: "KM3000 Mark 2", batteryKwh: 5.15, rangeKm: 120, priceLakh: 1.5 },
  ] },
  { id: "royal-enfield-flying-flea-c6", variants: [
    { name: "Flying Flea C6", batteryKwh: 3.91, rangeKm: 154, powerBhp: 20, priceLakh: 2.79 },
  ] },
  { id: "ola-roadster-x-2-5-kwh", variants: [
    { name: "Roadster X 2.5 kWh", batteryKwh: 2.5, rangeKm: 140, powerBhp: 14.75, priceLakh: 1.04 },
  ] },
  { id: "ola-roadster-x-4-5-kwh", variants: [
    { name: "Roadster X 4.5 kWh", batteryKwh: 4.5, rangeKm: 252, powerBhp: 14.75, priceLakh: 1.29 },
  ] },
  { id: "ola-roadster-x-9-1-kwh", variants: [
    { name: "Roadster X+ 9.1 kWh", batteryKwh: 9.1, rangeKm: 501, powerBhp: 14.75, priceLakh: 1.29 },
  ] },
  { id: "ola-roadster-3-5-kwh", variants: [
    { name: "Roadster 3.5 kWh", batteryKwh: 3.5, rangeKm: 151, powerBhp: 17.4, priceLakh: 1.05 },
    { name: "Roadster 4.5 kWh", batteryKwh: 4.5, rangeKm: 190, powerBhp: 17.4, priceLakh: 1.2 },
    { name: "Roadster 6 kWh", batteryKwh: 6, rangeKm: 248, powerBhp: 17.4, priceLakh: 1.4 },
  ] },
  { id: "ola-roadster-pro-8-kwh", variants: [
    { name: "Roadster Pro 8 kWh", batteryKwh: 8, rangeKm: 316, powerBhp: 70.7, priceLakh: 2 },
  ] },
  { id: "ola-roadster-pro-16-kwh", variants: [
    { name: "Roadster Pro 16 kWh", batteryKwh: 16, rangeKm: 579, powerBhp: 70.7, priceLakh: 2.5 },
  ] },
  { id: "hero-vida-vxz", variants: [
    { name: "Vida VXZ (upcoming)" },
  ] },
  { id: "hop-electric-oxo-standard", variants: [
    { name: "Oxo Prime", batteryKwh: 3.75, rangeKm: 140, powerBhp: 8.31, priceLakh: 1.33 },
  ] },
  { id: "hop-electric-oxo-x", variants: [
    { name: "Oxo X", batteryKwh: 3.75, rangeKm: 150, powerBhp: 8.31, priceLakh: 1.61 },
  ] },
  { id: "komaki-ranger", variants: [
    { name: "Ranger", batteryKwh: 4, rangeKm: 160, priceLakh: 1.3 },
  ] },
  { id: "komaki-mx3", variants: [
    { name: "MX3", batteryKwh: 2.17, rangeKm: 85, priceLakh: 1.15 },
  ] },
  { id: "srivaru-motors-prana-2-0-grand", variants: [
    { name: "Prana 2.0 Grand", batteryKwh: 5, rangeKm: 150, powerBhp: 13.41, priceLakh: 2.55 },
  ] },
  { id: "srivaru-motors-prana-2-0-elite", variants: [
    { name: "Prana 2.0 Elite", batteryKwh: 8.44, rangeKm: 250, powerBhp: 13.41, priceLakh: 3.2 },
  ] },
  { id: "pure-ev-etryst-350", variants: [
    { name: "eTryst 350", batteryKwh: 3.5, rangeKm: 171, powerBhp: 5.36, priceLakh: 1.55 },
  ] },
  { id: "odysse-evoqis", variants: [
    { name: "Evoqis", batteryKwh: 4.32, rangeKm: 140, powerBhp: 5.77, priceLakh: 1.71 },
  ] },
  { id: "joy-e-bike-beast", variants: [
    { name: "Beast", batteryKwh: 5.18, rangeKm: 110, powerBhp: 6.7, priceLakh: 2.42 },
  ] },
  { id: "joy-e-bike-hurricane", variants: [
    { name: "Hurricane", batteryKwh: 4.75, rangeKm: 80, powerBhp: 6.7, priceLakh: 2.33 },
  ] },
  { id: "joy-e-bike-thunderbolt", variants: [
    { name: "Thunderbolt", batteryKwh: 5.18, rangeKm: 110, powerBhp: 6.7, priceLakh: 2.33 },
  ] },
  { id: "joy-e-bike-skyline", variants: [
    { name: "Skyline", batteryKwh: 5.18, rangeKm: 110, powerBhp: 6.7, priceLakh: 2.29 },
  ] },
  { id: "bajaj-electric-motorcycle", variants: [
    { name: "Bajaj Electric Motorcycle (upcoming)" },
  ] },
  { id: "honda-shine-e", variants: [
    { name: "Honda Shine e: (upcoming)" },
  ] },
];

for (const { id, variants } of VEHICLE_VARIANTS) {
  for (const ev of EVS) {
    if (ev.id === id && !ev.variants) ev.variants = variants;
  }
}

export const CATEGORY_LABELS: Record<EVCategory, string> = {
  car: "Electric Cars",
  scooter: "Electric Scooters",
  motorcycle: "Electric Bikes",
};

export const getById = (id: string): EV | undefined => EVS.find((e) => e.id === id);
export const byCategory = (c: EVCategory): EV[] => EVS.filter((e) => e.category === c);

const trimNum = (n: number) => Number(n.toFixed(2)).toLocaleString("en-IN");

/** Format a value given in ₹ lakh as thousands / Lakh / Cr (Indian convention). */
export function priceFromLakh(v: number): string {
  if (v >= 100) return `₹${trimNum(v / 100)} Cr`;
  if (v >= 1) return `₹${trimNum(v)} Lakh`;
  return `₹${Math.round(v * 100000).toLocaleString("en-IN")}`; // under 1 lakh → thousands
}

const priceUnit = (v: number) => (v >= 100 ? "cr" : v >= 1 ? "l" : "k");

export function priceLabel(e: EV): string {
  const min = e.priceMinLakh;
  if (min == null) return "—";
  const max = e.priceMaxLakh ?? min;
  if (max === min) return priceFromLakh(min);

  // Same unit → merge into "₹a–b Unit"; mixed units → show both fully.
  if (priceUnit(min) === priceUnit(max)) {
    const u = priceUnit(min);
    if (u === "k") {
      return `₹${Math.round(min * 100000).toLocaleString("en-IN")}–${Math.round(
        max * 100000
      ).toLocaleString("en-IN")}`;
    }
    const a = u === "cr" ? trimNum(min / 100) : trimNum(min);
    const b = u === "cr" ? trimNum(max / 100) : trimNum(max);
    return `₹${a}–${b} ${u === "cr" ? "Cr" : "Lakh"}`;
  }
  return `${priceFromLakh(min)} – ${priceFromLakh(max)}`;
}

// ── Brand helpers ────────────────────────────────────────────────
export const brandSlug = (name: string): string =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export interface Brand {
  name: string;
  slug: string;
  count: number;
  categories: EVCategory[];
  /** representative accent (from its first vehicle's category) */
  accent: string;
  /** uppercase initials for the monogram tile */
  monogram: string;
  /** primary domain, used to fetch a brand logo (null = monogram only) */
  domain: string | null;
}

/** Brand → official domain (used for logo fetching; falls back to monogram). */
export const BRAND_DOMAINS: Record<string, string> = {
  Ampere: "amperevehicles.com",
  Ather: "atherenergy.com",
  Audi: "audi.in",
  BGauss: "bgauss.com",
  BMW: "bmw.in",
  BYD: "byd.com",
  Bajaj: "bajajauto.com",
  BattRE: "battre.in",
  Bounce: "bounceinfinity.com",
  Citroen: "citroen.in",
  Hero: "heromotocorp.com",
  Honda: "honda2wheelersindia.com",
  "Hop Electric": "hopelectric.in",
  Hyundai: "hyundai.com",
  "Joy e-bike": "joyebike.com",
  Kabira: "kabiramobility.com",
  Kia: "kia.com",
  "Kinetic Green": "kineticgreen.com",
  Komaki: "komaki.in",
  Lectrix: "lectrixev.com",
  Lotus: "lotuscars.com",
  MG: "mgmotor.co.in",
  Mahindra: "mahindra.com",
  "Maruti Suzuki": "marutisuzuki.com",
  Matter: "matter.in",
  "Mercedes-Benz": "mercedes-benz.com",
  "Mercedes-Maybach": "mercedes-benz.com",
  Mini: "mini.com",
  Oben: "obenev.com",
  Odysse: "odysseelectric.com",
  Okaya: "okayaev.com",
  Okinawa: "okinawascooters.com",
  Ola: "olaelectric.com",
  Orxa: "orxaenergies.com",
  Porsche: "porsche.com",
  "Pure EV": "pureev.in",
  Revolt: "revoltmotors.com",
  River: "rivermobility.com",
  "Rolls-Royce": "rolls-roycemotorcars.com",
  "Royal Enfield": "royalenfield.com",
  Simple: "simpleenergy.in",
  "Srivaru Motors": "srivarumotors.com",
  Suzuki: "suzukimotorcycle.co.in",
  TVS: "tvsmotor.com",
  Tata: "tatamotors.com",
  Tesla: "tesla.com",
  Tork: "torkmotors.com",
  Toyota: "toyotabharat.com",
  Ultraviolette: "ultraviolette.com",
  VinFast: "vinfastauto.com",
  Volvo: "volvocars.com",
  Yamaha: "yamaha-motor-india.com",
  Zelio: "zelioebikes.com",
  iVOOMi: "ivoomi.in",
};

function buildBrands(): Brand[] {
  const map = new Map<string, EV[]>();
  for (const e of EVS) {
    const arr = map.get(e.brand) ?? [];
    arr.push(e);
    map.set(e.brand, arr);
  }
  const brands: Brand[] = [];
  map.forEach((list, name) => {
    const categories = Array.from(new Set(list.map((e) => e.category)));
    const monogram = name
      .split(/\s+/)
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
    brands.push({
      name,
      slug: brandSlug(name),
      count: list.length,
      categories,
      accent: list[0].accent,
      monogram,
      domain: BRAND_DOMAINS[name] ?? null,
    });
  });
  return brands.sort((a, b) => a.name.localeCompare(b.name));
}

export const BRANDS: Brand[] = buildBrands();

export const getBrandBySlug = (slug: string): Brand | undefined =>
  BRANDS.find((b) => b.slug === slug);

export const byBrandSlug = (slug: string): EV[] =>
  EVS.filter((e) => brandSlug(e.brand) === slug);

// ── Vehicle URL helpers ──────────────────────────────────────────
// Vehicle pages live at /<brandSlug>/<vehicleSlug>, where vehicleSlug is the
// internal id with the leading brand prefix stripped (e.g. id
// "tata-tiago-ev-long-range-24-kwh" -> /tata/tiago-ev-long-range-24-kwh).
// The internal id stays unchanged; the slug is just a derived URL view.
export const vehicleSlug = (ev: EV): string => {
  const b = brandSlug(ev.brand);
  return ev.id.startsWith(b + "-") ? ev.id.slice(b.length + 1) : ev.id;
};

/** Root-relative path to a vehicle's detail page (no locale prefix). */
export const vehiclePath = (ev: EV): string => `/${brandSlug(ev.brand)}/${vehicleSlug(ev)}`;

/** Resolve a vehicle from its brand slug + vehicle slug (the URL parts). */
export const getByBrandAndSlug = (brand: string, slug: string): EV | undefined =>
  EVS.find((e) => brandSlug(e.brand) === brand && vehicleSlug(e) === slug);

/** Vehicle path from an id alone (for components that only carry the id). */
export const vehiclePathById = (id: string): string => {
  const ev = getById(id);
  return ev ? vehiclePath(ev) : `/catalog/${id}`;
};
