"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { GalleryImage } from "@/lib/data";

type GalleryGridProps = {
  images: GalleryImage[];
};

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <motion.button
            key={image.src}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.04 }}
            onClick={() => setSelected(image)}
            className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white text-left shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-neutral-100 to-neutral-200 transition group-hover:scale-105 dark:from-neutral-800 dark:to-neutral-900" />
            <div className="px-4 py-3">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{image.alt}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-neutral-900"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-3 top-3 z-10 rounded-full bg-white/80 p-2 backdrop-blur transition hover:bg-white dark:bg-neutral-800/80 dark:hover:bg-neutral-800"
                aria-label="Schließen"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="aspect-[4/3] bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900" />
              <div className="p-4">
                <p className="text-sm font-medium">{selected.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
