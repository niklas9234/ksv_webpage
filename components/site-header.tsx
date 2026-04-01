import Link from "next/link";
import { siteMeta } from "@/lib/data";
import { MobileNav } from "@/components/mobile-nav";

const navItems = [
  { href: "/", label: "Start" },
  { href: "/kontakt", label: "Vorstand & Kontakt" },
  { href: "/anfahrt", label: "Lage & Anfahrt" },
  { href: "/galerie", label: "Galerie" },
  { href: "/mitglieder", label: "Mitglieder" },
  { href: "/aktuelles", label: "Aktuelles" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-white/90 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="text-sm font-semibold tracking-wide sm:text-base">
          {siteMeta.shortName}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-neutral-700 transition hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <MobileNav items={navItems} />
        </div>
      </div>
    </header>
  );
}
