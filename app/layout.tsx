import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteMeta } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://ksvurnshausen.de"),
  title: {
    default: siteMeta.name,
    template: `%s | ${siteMeta.shortName}`,
  },
  description:
    "Offizielle Webseite des Kultur & Sportverein Urnshausen e.V. mit Kontakt, Downloads, Anfahrt und aktuellen Vereinsinformationen.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
