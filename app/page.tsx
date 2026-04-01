import Link from "next/link";
import { FileText, Mail, MapPin, Users } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { NewsList } from "@/components/news-list";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const quickLinks = [
  { icon: Users, title: "Vorstand & Kontakt", href: "/kontakt", text: "Schnell die richtigen Ansprechpartner finden." },
  { icon: MapPin, title: "Lage & Anfahrt", href: "/anfahrt", text: "So finden Sie unser Vereinsheim unkompliziert." },
  { icon: FileText, title: "Mitgliederbereich", href: "/mitglieder", text: "Formulare, Satzung und wichtige Downloads." },
  { icon: Mail, title: "Allgemeine Anfrage", href: "mailto:info@ksvurnshausen.de", text: "Direkter Kontakt per E-Mail an den Verein." },
];

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-2 xl:grid-cols-4">
        {quickLinks.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal delay={index * 0.06} key={item.title}>
              <Link href={item.href} className="block rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
                <div className="mb-4 inline-flex rounded-2xl bg-amber-100 p-3 text-neutral-900 dark:bg-amber-400/15 dark:text-amber-200">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{item.text}</p>
              </Link>
            </Reveal>
          );
        })}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <SectionHeading eyebrow="Aktuelles" title="Neuigkeiten aus dem Verein" />
        <div className="mt-6">
          <NewsList limit={2} />
        </div>
      </section>
    </main>
  );
}
