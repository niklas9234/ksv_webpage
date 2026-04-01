import type { Metadata } from "next";
import { FadeUp } from "@/components/fade-up";
import { NewsList } from "@/components/news-list";
import { newsPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Aktuelles",
  description: "Neuigkeiten, Veranstaltungen und aktuelle Informationen vom KSV Urnshausen.",
};

export default function AktuellesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <FadeUp>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">Neuigkeiten</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Aktuelles aus dem Verein</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-300">Bleiben Sie auf dem Laufenden über Veranstaltungen, Neuigkeiten und alles rund um den KSV Urnshausen.</p>
      </FadeUp>

      <div className="mt-10">
        <NewsList posts={newsPosts} />
      </div>
    </div>
  );
}
