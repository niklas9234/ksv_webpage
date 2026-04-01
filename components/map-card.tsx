import { MapPin } from "lucide-react";
import { siteMeta } from "@/lib/data";

export function MapCard() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr,1.4fr]">
      <article className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h3 className="text-lg font-semibold">Adresse</h3>
        <p className="mt-3 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
          {siteMeta.name}
          <br />
          {siteMeta.address.street}
          <br />
          {siteMeta.address.zip} {siteMeta.address.city}
        </p>

        <div className="mt-4 rounded-2xl bg-amber-100/70 p-3 text-sm text-neutral-800 dark:bg-amber-400/10 dark:text-amber-100">
          <p className="font-semibold">Hinweis zur Anfahrt</p>
          <p>Parkmöglichkeiten sind am Vereinsheim vorhanden. Bitte auf Beschilderung im Ort achten.</p>
        </div>
      </article>

      <article className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex items-center gap-2 text-sm font-semibold text-neutral-700 dark:text-neutral-200">
          <MapPin className="h-4 w-4" /> Google Maps (Platzhalter)
        </div>
        <div className="mt-4 flex min-h-56 items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-6 text-center text-sm text-neutral-600 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-300">
          Datenschutzfreundlicher Karten-Platzhalter.
          <br />
          Später optional per Klick Google Maps laden.
        </div>
      </article>
    </div>
  );
}
