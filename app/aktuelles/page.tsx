import { NewsList } from "@/components/news-list";
import { SectionHeading } from "@/components/section-heading";

export default function AktuellesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <SectionHeading
        eyebrow="Aktuelles"
        title="Beiträge & Veranstaltungen"
        description="Vorbereitete News-Struktur, die später per JSON, CMS oder Google Sheets gespeist werden kann."
      />
      <div className="mt-6">
        <NewsList />
      </div>
    </main>
  );
}
