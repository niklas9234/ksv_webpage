import { BoardGrid } from "@/components/board-grid";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";

export default function KontaktPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <SectionHeading
        eyebrow="Vorstand"
        title="Vorstand & Kontakt"
        description="Ihre Ansprechpartner im Verein und ein Kontaktformular für allgemeine Anfragen."
      />
      <div className="mt-6">
        <BoardGrid />
      </div>

      <div className="mt-8">
        <ContactForm />
      </div>
    </main>
  );
}
