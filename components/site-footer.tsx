import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div>
            <p className="text-sm font-semibold">Kultur & Sportverein Urnshausen e.V.</p>
            <p className="mt-2 max-w-xs text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              Gemeinschaft, Tradition und sportliches Miteinander – mitten in Urnshausen.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <p className="font-semibold">Links</p>
            <Link href="/impressum" className="text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100">Impressum</Link>
            <Link href="/datenschutz" className="text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100">Datenschutzerklärung</Link>
            <Link href="/kontakt" className="text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100">Kontakt</Link>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <p className="font-semibold">Kontakt</p>
            <p className="text-neutral-600 dark:text-neutral-400">info@ksvurnshausen.de</p>
            <p className="text-neutral-600 dark:text-neutral-400">Urnshausen, Thüringen</p>
          </div>
        </div>

        <div className="mt-8 border-t border-neutral-200 pt-6 dark:border-neutral-800">
          <p className="text-center text-xs text-neutral-500">© {new Date().getFullYear()} Kultur & Sportverein Urnshausen e.V. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
