import Link from "next/link";
import { siteMeta } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-neutral-600 sm:px-6 dark:text-neutral-300 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteMeta.name}</p>
        <div className="flex gap-4">
          <Link href="/impressum" className="hover:text-neutral-900 dark:hover:text-white">Impressum</Link>
          <Link href="/datenschutz" className="hover:text-neutral-900 dark:hover:text-white">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}
