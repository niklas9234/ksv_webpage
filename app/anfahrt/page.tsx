import { MapCard } from "@/components/map-card";
import { SectionHeading } from "@/components/section-heading";

export default function AnfahrtPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <SectionHeading
        eyebrow="Besuch"
        title="Lage & Anfahrt"
        description="So finden Sie unser Vereinsheim. Der Kartenbereich ist datenschutzfreundlich als Platzhalter vorbereitet."
      />
      <div className="mt-6">
        <MapCard />
      </div>
    </main>
  );
}
