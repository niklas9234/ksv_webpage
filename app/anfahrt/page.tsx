import type { Metadata } from "next";
import { Car, Clock, MapPin } from "lucide-react";
import { FadeUp } from "@/components/fade-up";
import { MapCard } from "@/components/map-card";

export const metadata: Metadata = {
  title: "Lage & Anfahrt",
  description: "So finden Sie das Vereinsheim des KSV Urnshausen – Adresse, Karte und Anfahrtsbeschreibung.",
};

export default function AnfahrtPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <FadeUp>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">Verein</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Lage & Anfahrt</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-300">Unser Vereinsheim liegt zentral in Urnshausen und ist gut erreichbar.</p>
      </FadeUp>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="flex flex-col gap-4 lg:col-span-1">
          <FadeUp delay={0.06}>
            <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
              <div className="mb-3 inline-flex rounded-2xl bg-amber-100 p-3 text-neutral-900 dark:bg-amber-400/15 dark:text-amber-200"><MapPin className="h-5 w-5" /></div>
              <h3 className="font-semibold">Adresse</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">Kultur & Sportverein Urnshausen e.V.<br />Vereinsheim Urnshausen<br />36404 Urnshausen<br />Thüringen</p>
            </div>
          </FadeUp>

          <FadeUp delay={0.12}>
            <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
              <div className="mb-3 inline-flex rounded-2xl bg-amber-100 p-3 text-neutral-900 dark:bg-amber-400/15 dark:text-amber-200"><Car className="h-5 w-5" /></div>
              <h3 className="font-semibold">Anfahrt mit dem Auto</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">Über die B285 Richtung Dermbach/Urnshausen. Parkplätze stehen in der Nähe des Vereinsheims zur Verfügung.</p>
            </div>
          </FadeUp>

          <FadeUp delay={0.18}>
            <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
              <div className="mb-3 inline-flex rounded-2xl bg-amber-100 p-3 text-neutral-900 dark:bg-amber-400/15 dark:text-amber-200"><Clock className="h-5 w-5" /></div>
              <h3 className="font-semibold">Öffnungszeiten</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">Das Vereinsheim ist zu Veranstaltungen und nach Absprache geöffnet. Bitte kontaktieren Sie uns vorab.</p>
            </div>
          </FadeUp>
        </div>

        <div className="lg:col-span-2">
          <FadeUp delay={0.1}>
            <MapCard />
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
