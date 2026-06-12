import { notFound, permanentRedirect } from "next/navigation";
import { EVS, getById, vehiclePath } from "@/lib/ev-data";

// Vehicle pages moved to /<brand>/<model>. 308-redirect the old /catalog/<id>.
export function generateStaticParams() {
  return EVS.map((e) => ({ id: e.id }));
}

export default function LegacyEvRedirect({ params }: { params: { id: string } }) {
  const ev = getById(params.id);
  if (!ev) return notFound();
  permanentRedirect(vehiclePath(ev));
}
