import type { Metadata } from "next";
import { FadeUp } from "@/components/fade-up";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung des Kultur & Sportverein Urnshausen e.V.",
};

export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <FadeUp>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Datenschutzerklärung</h1>
      </FadeUp>

      <FadeUp delay={0.08}>
        <div className="prose prose-neutral mt-8 max-w-none text-sm leading-7 dark:prose-invert">
          <h2 className="text-lg font-semibold">1. Datenschutz auf einen Blick</h2>
          <p>Diese Seite enthält einen strukturierten Platzhaltertext für die Datenschutzerklärung. Die finale Fassung muss mit den real eingesetzten Diensten und dem Hosting abgeglichen werden.</p>
          <h2 className="mt-8 text-lg font-semibold">2. Datenerfassung</h2>
          <p>Beim Besuch der Website können technisch notwendige Daten (z. B. IP-Adresse, Browserinformationen) im Rahmen von Server-Logs verarbeitet werden.</p>
          <h2 className="mt-8 text-lg font-semibold">3. Kontaktformular</h2>
          <p>Wenn Sie uns per Formular kontaktieren, werden die eingegebenen Daten zur Bearbeitung der Anfrage genutzt. Eine Weitergabe erfolgt nur bei rechtlicher Notwendigkeit.</p>
          <h2 className="mt-8 text-lg font-semibold">4. Karteninhalte</h2>
          <p>Google Maps wird erst nach explizitem Klick auf „Karte laden“ eingebunden. Vorher erfolgt keine automatische Verbindung zu Google Maps.</p>
        </div>
      </FadeUp>
    </div>
  );
}
