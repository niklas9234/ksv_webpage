"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

export function MapCard() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-neutral-200 bg-white p-10 text-center shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <div className="mb-4 inline-flex rounded-2xl bg-amber-100 p-4 text-neutral-900 dark:bg-amber-400/15 dark:text-amber-200">
          <MapPin className="h-8 w-8" />
        </div>
        <h3 className="text-lg font-semibold">Standort auf der Karte</h3>
        <p className="mt-2 max-w-md text-sm text-neutral-600 dark:text-neutral-400">
          Zum Anzeigen der Karte wird eine Verbindung zu Google Maps hergestellt. Dabei können Daten an Google übertragen werden.
        </p>
        <button
          onClick={() => setLoaded(true)}
          className="mt-4 inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-neutral-900"
        >
          Karte laden
        </button>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-neutral-200 shadow-sm dark:border-neutral-800">
      <iframe
        title="Standort KSV Urnshausen"
        src="https://www.google.com/maps?q=Urnshausen&output=embed"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      />
    </div>
  );
}
