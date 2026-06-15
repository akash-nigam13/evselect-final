// Shared, framework-agnostic comparison spec config.
// Used by BOTH the client tool (components/compare/CompareClient.tsx) and the
// server-rendered versus pages (app/compare/[pair]/page.tsx) so spec logic and
// "winner" highlighting stay in one place.
import { priceLabel, type EV } from "@/lib/ev-data";

export type Better = "higher" | "lower" | "none";

export interface SpecRow {
  key: string;
  /** English label (used by server pages). */
  label: string;
  /** i18n key (used by the client tool via t()). */
  labelKey: string;
  unit?: string;
  better: Better;
  /** numeric value for comparison (null = no data) */
  num: (e: EV) => number | null;
  /** display string */
  text: (e: EV) => string;
}

export const DASH = "—";

export const SPEC_ROWS: SpecRow[] = [
  { key: "price", label: "Starting price", labelKey: "row.price", better: "lower",
    num: (e) => e.priceMinLakh, text: (e) => priceLabel(e) },
  { key: "body", label: "Body type", labelKey: "row.body", better: "none",
    num: () => null, text: (e) => e.bodyType },
  { key: "battery", label: "Battery", labelKey: "row.battery", unit: "kWh", better: "higher",
    num: (e) => e.batteryKwh, text: (e) => (e.batteryKwh != null ? `${e.batteryKwh} kWh` : DASH) },
  { key: "rangeArai", label: "Range (claimed)", labelKey: "row.rangeArai", unit: "km", better: "higher",
    num: (e) => e.rangeKmARAI, text: (e) => (e.rangeKmARAI != null ? `${e.rangeKmARAI} km` : DASH) },
  { key: "rangeReal", label: "Real-world range", labelKey: "row.rangeReal", unit: "km", better: "higher",
    num: (e) => e.realRangeKm, text: (e) => (e.realRangeKm != null ? `~${e.realRangeKm} km` : DASH) },
  { key: "power", label: "Power", labelKey: "row.power", unit: "bhp", better: "higher",
    num: (e) => e.powerBhp, text: (e) => (e.powerBhp != null ? `${e.powerBhp} bhp` : DASH) },
  { key: "torque", label: "Torque", labelKey: "row.torque", unit: "Nm", better: "higher",
    num: (e) => e.torqueNm, text: (e) => (e.torqueNm != null ? `${e.torqueNm} Nm` : DASH) },
  { key: "accel", label: "Acceleration", labelKey: "row.accel", better: "lower",
    num: (e) => e.accelSec, text: (e) => (e.accelSec != null ? `${e.accelSec}s ${e.accelNote ?? ""}`.trim() : DASH) },
  { key: "top", label: "Top speed", labelKey: "row.top", unit: "km/h", better: "higher",
    num: (e) => e.topSpeedKmph, text: (e) => (e.topSpeedKmph != null ? `${e.topSpeedKmph} km/h` : DASH) },
  { key: "fastkw", label: "Fast charge", labelKey: "row.fastkw", unit: "kW", better: "higher",
    num: (e) => e.fastChargeKw, text: (e) => (e.fastChargeKw != null ? `${e.fastChargeKw} kW` : DASH) },
  { key: "fasttime", label: "Fast charge time", labelKey: "row.fasttime", better: "none",
    num: () => null, text: (e) => e.fastChargeTime ?? DASH },
  { key: "actime", label: "Full charge", labelKey: "row.actime", better: "none",
    num: () => null, text: (e) => e.chargeTimeFull ?? (e.acChargeKw != null ? `${e.acChargeKw} kW AC` : DASH) },
  { key: "drive", label: "Drivetrain", labelKey: "row.drive", better: "none",
    num: () => null, text: (e) => e.driveType ?? DASH },
  { key: "seat", label: "Seating", labelKey: "row.seat", better: "none",
    num: () => null, text: (e) => (e.seating != null ? `${e.seating}` : DASH) },
  { key: "boot", label: "Boot / storage", labelKey: "row.boot", unit: "L", better: "higher",
    num: (e) => e.bootLitres, text: (e) => (e.bootLitres != null ? `${e.bootLitres} L` : DASH) },
  { key: "weight", label: "Kerb weight", labelKey: "row.weight", unit: "kg", better: "lower",
    num: (e) => e.kerbWeightKg, text: (e) => (e.kerbWeightKg != null ? `${e.kerbWeightKg} kg` : DASH) },
  { key: "year", label: "Model year", labelKey: "row.year", better: "none",
    num: () => null, text: (e) => (e.year != null ? `${e.year}` : DASH) },
];

/** Indices of the winning vehicle(s) for a given row (empty = no highlight). */
export function winnersForRow(row: SpecRow, evs: (EV | null)[]): Set<number> {
  if (row.better === "none") return new Set();
  const vals = evs.map((e) => (e ? row.num(e) : null));
  const present = vals.filter((v): v is number => v != null);
  if (present.length < 2) return new Set();
  const best = row.better === "higher" ? Math.max(...present) : Math.min(...present);
  const set = new Set<number>();
  vals.forEach((v, i) => {
    if (v != null && v === best) set.add(i);
  });
  // if all equal, no winner highlight
  return set.size === vals.filter((v) => v != null).length ? new Set() : set;
}

/** Count of row wins per vehicle index across all spec rows. */
export function scoreEvs(evs: (EV | null)[]): number[] {
  const sc = evs.map(() => 0);
  SPEC_ROWS.forEach((row) => {
    winnersForRow(row, evs).forEach((i) => (sc[i] += 1));
  });
  return sc;
}
