import type { Metadata } from "next";
import { FadeUp } from "@/components/fade-up";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum des Kultur & Sportverein Urnshausen e.V.",
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <FadeUp>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Impressum</h1>
      </FadeUp>

      <FadeUp delay={0.08}>
        <div className="prose prose-neutral mt-8 max-w-none text-sm leading-7 dark:prose-invert">
          <h2 className="text-lg font-semibold">Angaben gemäß § 5 TMG</h2>
          <p>Kultur & Sportverein Urnshausen e.V.<br />Vereinsheim Urnshausen<br />36404 Urnshausen<br />Thüringen</p>

          <h2 className="mt-8 text-lg font-semibold">Vertreten durch</h2>
          <p>1. Vorsitzender: Max Mustermann<br />2. Vorsitzende: Erika Beispiel</p>

          <h2 className="mt-8 text-lg font-semibold">Kontakt</h2>
          <p>E-Mail: <a href="mailto:info@ksvurnshausen.de" className="text-neutral-900 underline underline-offset-2 dark:text-white">info@ksvurnshausen.de</a></p>

          <h2 className="mt-8 text-lg font-semibold">Registereintrag</h2>
          <p>Eingetragen im Vereinsregister.<br />Registergericht: [Amtsgericht]<br />Registernummer: [VR-Nummer]</p>
        </div>
      </FadeUp>
    </div>
  );
}
