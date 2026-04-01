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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
