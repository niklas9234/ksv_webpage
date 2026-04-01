import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">Diese Seite wurde nicht gefunden.</p>
      <Link href="/" className="mt-6 inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-neutral-900">
        Zurück zur Startseite
      </Link>
    </div>
  );
}
