import { siteMeta } from "@/lib/data";

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-bold">Impressum</h1>
      <div className="mt-6 space-y-4 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
        <p><strong>{siteMeta.name}</strong><br />{siteMeta.address.street}<br />{siteMeta.address.zip} {siteMeta.address.city}</p>
        <p>
          Vertreten durch den Vorstand (Platzhalter):<br />
          Max Mustermann, Erika Beispiel
        </p>
        <p>E-Mail: {siteMeta.email}<br />Telefon: {siteMeta.phone}</p>
        <p>Hinweis: Bitte diese Angaben mit den finalen Vereinsdaten ersetzen.</p>
      </div>
    </main>
  );
}
