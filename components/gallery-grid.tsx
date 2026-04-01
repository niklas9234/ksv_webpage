import { galleryImages } from "@/lib/data";

export function GalleryGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {galleryImages.map((image) => (
        <figure key={image.src} className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <div className="aspect-[4/3] bg-neutral-100 transition group-hover:scale-[1.02] dark:bg-neutral-800" />
          <figcaption className="p-3 text-xs text-neutral-600 dark:text-neutral-300">
            {image.alt}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
