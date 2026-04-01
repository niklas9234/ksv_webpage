import { GalleryGrid } from "@/components/gallery-grid";
import { SectionHeading } from "@/components/section-heading";

export default function GaleriePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <SectionHeading
        eyebrow="Einblicke"
        title="Galerie"
        description="Beispielhafte Impressionen aus Vereinsheim, Gelände und Veranstaltungen."
      />
      <div className="mt-6">
        <GalleryGrid />
      </div>
    </main>
  );
}
