import { notFound, permanentRedirect } from "next/navigation";
import { EVS, getById, vehiclePath } from "@/lib/ev-data";

// Vehicle pages moved to /hi/<brand>/<model>. 308-redirect the old /hi/catalog/<id>.
export function generateStaticParams() {
  return EVS.map((e) => ({ id: e.id }));
}

export default function LegacyHiEvRedirect({ params }: { params: { id: string } }) {
  const ev = getById(params.id);
  if (!ev) return notFound();
  permanentRedirect(`/hi${vehiclePath(ev)}`);
}
