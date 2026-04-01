import type { Metadata } from "next";
import { FadeUp } from "@/components/fade-up";
import { DownloadsList } from "@/components/downloads-list";
import { downloads } from "@/lib/data";

export const metadata: Metadata = {
  title: "Mitglieder & Downloads",
  description: "Wichtige Dokumente für Mitglieder des KSV Urnshausen – Satzung, Mitgliedsantrag, SEPA-Mandat und mehr.",
};

export default function MitgliederPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <FadeUp>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">Mitglieder</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Downloads & Dokumente</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-300">Hier finden Sie alle wichtigen Unterlagen rund um Ihre Mitgliedschaft im KSV Urnshausen.</p>
      </FadeUp>

      <div className="mt-10">
        <DownloadsList downloads={downloads} />
      </div>

      <FadeUp>
        <div className="mt-12 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h2 className="text-xl font-semibold">Mitglied werden</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600 dark:text-neutral-300">
            Sie möchten Teil des KSV Urnshausen werden? Laden Sie den Mitgliedsantrag herunter und senden Sie ihn per E-Mail an{" "}
            <a href="mailto:info@ksvurnshausen.de" className="font-semibold text-neutral-900 underline underline-offset-2 dark:text-white">info@ksvurnshausen.de</a>.
          </p>
        </div>
      </FadeUp>
    </div>
  );
}
