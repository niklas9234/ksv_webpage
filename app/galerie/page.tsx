import type { Metadata } from "next";
import { FadeUp } from "@/components/fade-up";
import { GalleryGrid } from "@/components/gallery-grid";
import { galleryImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Bilder vom Vereinsheim, Veranstaltungen und dem Dorfleben in Urnshausen.",
};

export default function GaleriePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <FadeUp>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">Eindrücke</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Galerie</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-300">Eindrücke aus dem Vereinsleben, von Veranstaltungen und aus Urnshausen.</p>
      </FadeUp>

      <div className="mt-10">
        <GalleryGrid images={galleryImages} />
      </div>
    </div>
  );
}
