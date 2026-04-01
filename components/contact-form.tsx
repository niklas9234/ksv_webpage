"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      <h3 className="text-xl font-semibold">Kontaktformular</h3>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
        Platzhalter-Formular für spätere Anbindung (z. B. Resend oder SMTP) an info@ksvurnshausen.de.
      </p>

      <div className="mt-5 grid gap-4">
        <label className="grid gap-2 text-sm font-medium">
          Name
          <input required className="rounded-xl border border-neutral-300 bg-transparent px-3 py-2 dark:border-neutral-700" name="name" />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          E-Mail
          <input required type="email" className="rounded-xl border border-neutral-300 bg-transparent px-3 py-2 dark:border-neutral-700" name="email" />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Betreff
          <input required className="rounded-xl border border-neutral-300 bg-transparent px-3 py-2 dark:border-neutral-700" name="subject" />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Nachricht
          <textarea required rows={5} className="rounded-xl border border-neutral-300 bg-transparent px-3 py-2 dark:border-neutral-700" name="message" />
        </label>
      </div>

      <button type="submit" className="mt-5 inline-flex items-center rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-neutral-900">
        Nachricht senden <Send className="ml-2 h-4 w-4" />
      </button>

      {sent ? <p className="mt-4 text-sm text-emerald-600">Vielen Dank! Die Demo-Nachricht wurde lokal erfasst.</p> : null}
    </form>
  );
}
