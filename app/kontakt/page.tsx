import type { Metadata } from "next";
import { BoardGrid } from "@/components/board-grid";
import { ContactForm } from "@/components/contact-form";
import { FadeUp } from "@/components/fade-up";
import { boardMembers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Vorstand & Kontakt",
  description: "Ansprechpartner und Kontaktmöglichkeiten des KSV Urnshausen e.V.",
};

export default function KontaktPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <FadeUp>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">Verein</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Vorstand & Kontakt</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-300">Bei Fragen oder Anliegen wenden Sie sich gerne an unsere Vorstandsmitglieder oder nutzen Sie das Kontaktformular.</p>
      </FadeUp>

      <div className="mt-10">
        <BoardGrid members={boardMembers} />
      </div>

      <div className="mt-12 max-w-2xl">
        <FadeUp>
          <ContactForm />
        </FadeUp>
      </div>
    </div>
  );
}
