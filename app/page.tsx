import Link from "next/link";
import { FileText, Mail, MapPin, Users } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { NewsList } from "@/components/news-list";
import { FadeUp } from "@/components/fade-up";
import { SectionHeading } from "@/components/section-heading";
import { downloads, newsPosts } from "@/lib/data";

const quickLinks = [
  { icon: Users, title: "Vorstand & Kontakt", href: "/kontakt", text: "Schnell die richtigen Ansprechpartner finden." },
  { icon: MapPin, title: "Lage & Anfahrt", href: "/anfahrt", text: "So finden Sie unser Vereinsheim unkompliziert." },
  { icon: FileText, title: "Mitgliederbereich", href: "/mitglieder", text: "Formulare, Satzung und wichtige Downloads." },
  { icon: Mail, title: "Allgemeine Anfrage", href: "mailto:info@ksvurnshausen.de", text: "Direkter Kontakt per E-Mail an den Verein." },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-2 xl:grid-cols-4">
        {quickLinks.map((item, index) => {
          const Icon = item.icon;
          return (
            <FadeUp delay={index * 0.06} key={item.title}>
              <Link href={item.href} className="block rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
                <div className="mb-4 inline-flex rounded-2xl bg-amber-100 p-3 text-neutral-900 dark:bg-amber-400/15 dark:text-amber-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{item.text}</p>
              </Link>
            </FadeUp>
          );
        })}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <SectionHeading eyebrow="Aktuelles" title="Neuigkeiten aus dem Verein" />
        <div className="mt-6">
          <NewsList posts={newsPosts} limit={3} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <FadeUp>
          <div className="rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">Mitgliederbereich</p>
                <h2 className="mt-2 text-2xl font-bold">Wichtige Dokumente auf einen Blick</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600 dark:text-neutral-300">Hier finden Mitglieder und Interessierte zentrale Unterlagen wie Satzung, Mitgliedsantrag und SEPA-Mandat.</p>
              </div>
              <Link href="/mitglieder" className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-semibold transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800">
                Zum Downloadbereich
              </Link>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {downloads.map((item) => (
                <div key={item.title} className="rounded-2xl bg-neutral-50 p-4 dark:bg-neutral-950">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-semibold">{item.title}</h3>
                    <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-neutral-900 dark:bg-amber-400/15 dark:text-amber-200">{item.fileType}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{item.description}</p>
                  <a href={item.href} className="mt-4 inline-block text-sm font-semibold text-neutral-900 dark:text-white">Dokument öffnen</a>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
