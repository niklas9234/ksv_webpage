import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:py-20">
        <div className="flex-1">
          <Reveal>
            <span className="inline-flex rounded-full border border-amber-400/40 bg-amber-100 px-3 py-1 text-xs font-semibold tracking-wide text-neutral-800 dark:bg-amber-400/10 dark:text-amber-200">
              Kultur & Sportverein Urnshausen e.V.
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">Vereinsleben mit Heimatgefühl.</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-300">
              Der KSV Urnshausen verbindet Gemeinschaft, Tradition und sportliches Miteinander –
              ruhig, verlässlich und nah am Ort.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/kontakt" className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-neutral-900">
                Kontakt aufnehmen <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/mitglieder" className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-semibold transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900">
                Downloads ansehen
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="w-full max-w-md">
          <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <div className="aspect-[4/5] bg-[linear-gradient(180deg,rgba(245,245,245,1),rgba(229,229,229,1))] dark:bg-[linear-gradient(180deg,rgba(23,23,23,1),rgba(15,15,15,1))]" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="rounded-2xl bg-white/90 p-4 backdrop-blur dark:bg-neutral-900/90">
                <p className="text-sm font-medium">Platzhalter für Heimat- oder Vereinsbild</p>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">Dezente Bildsprache statt überladener Sportoptik.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
