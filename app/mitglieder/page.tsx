import { DownloadsList } from "@/components/downloads-list";
import { SectionHeading } from "@/components/section-heading";

export default function MitgliederPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <SectionHeading
        eyebrow="Mitglieder"
        title="Downloads & Dokumente"
        description="Hier finden Sie zentrale Unterlagen wie Satzung, Mitgliedsantrag und SEPA-Mandat."
      />
      <div className="mt-6">
        <DownloadsList />
      </div>
    </main>
  );
}
