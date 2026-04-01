export type BoardMember = {
  name: string;
  role: string;
  email: string;
};

export type DownloadItem = {
  title: string;
  description: string;
  href: string;
  fileType: "PDF" | "DOCX";
  fileSize: string;
};

export type NewsPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: "Aktuelles" | "Veranstaltung";
};

export type GalleryImage = {
  src: string;
  alt: string;
  category: "Vereinsheim" | "Veranstaltung";
};

export const boardMembers: BoardMember[] = [
  {
    name: "Max Mustermann",
    role: "1. Vorsitzender",
    email: "vorstand1@ksvurnshausen.de",
  },
  {
    name: "Erika Beispiel",
    role: "2. Vorsitzende",
    email: "vorstand2@ksvurnshausen.de",
  },
  {
    name: "Hans Beispiel",
    role: "Schatzmeister",
    email: "finanzen@ksvurnshausen.de",
  },
];

export const downloads: DownloadItem[] = [
  {
    title: "Satzung",
    description: "Aktuelle Vereinssatzung als PDF herunterladen.",
    href: "/docs/satzung.pdf",
    fileType: "PDF",
    fileSize: "420 KB",
  },
  {
    title: "Mitgliedsantrag",
    description: "Antragsformular für neue Mitgliedschaften.",
    href: "/docs/mitgliedsantrag.pdf",
    fileType: "PDF",
    fileSize: "580 KB",
  },
  {
    title: "SEPA-Mandat",
    description: "Einzugsermächtigung für Vereinsbeiträge.",
    href: "/docs/sepa-mandat.pdf",
    fileType: "PDF",
    fileSize: "260 KB",
  },
];

export const galleryImages: GalleryImage[] = [
  { src: "/images/galerie-1.jpg", alt: "Vereinsheim Außenansicht", category: "Vereinsheim" },
  { src: "/images/galerie-2.jpg", alt: "Vereinsgelände", category: "Vereinsheim" },
  { src: "/images/galerie-3.jpg", alt: "Veranstaltung im Vereinsheim", category: "Veranstaltung" },
  { src: "/images/galerie-4.jpg", alt: "Innenbereich des Vereinsheims", category: "Vereinsheim" },
  { src: "/images/galerie-5.jpg", alt: "Heimatblick Urnshausen", category: "Vereinsheim" },
  { src: "/images/galerie-6.jpg", alt: "Gemeinschaftsveranstaltung", category: "Veranstaltung" },
  { src: "/images/galerie-7.jpg", alt: "Vorbereitung Festabend", category: "Veranstaltung" },
  { src: "/images/galerie-8.jpg", alt: "Gäste im Vereinsheim", category: "Veranstaltung" },
  { src: "/images/galerie-9.jpg", alt: "Blick auf Urnshausen", category: "Vereinsheim" },
  { src: "/images/galerie-10.jpg", alt: "Arbeitseinsatz am Gelände", category: "Veranstaltung" },
];

export const newsPosts: NewsPost[] = [
  {
    slug: "saisoneroeffnung",
    title: "Saisoneröffnung im Vereinsheim",
    excerpt: "Zum Start in die neue Saison laden wir herzlich ins Vereinsheim ein.",
    date: "2026-03-10",
    category: "Veranstaltung",
  },
  {
    slug: "fruehjahrsputz",
    title: "Gemeinsamer Frühjahrsputz",
    excerpt: "Wir freuen uns über viele helfende Hände rund um das Vereinsgelände.",
    date: "2026-03-22",
    category: "Aktuelles",
  },
  {
    slug: "familientag",
    title: "Familientag im Mai angekündigt",
    excerpt: "Ein gemütlicher Tag für Mitglieder, Familien und Freunde mit kleinem Rahmenprogramm.",
    date: "2026-03-30",
    category: "Veranstaltung",
  },
];

export const siteMeta = {
  name: "Kultur & Sportverein Urnshausen e.V.",
  shortName: "KSV Urnshausen",
  email: "info@ksvurnshausen.de",
  phone: "+49 0000 000000",
  address: {
    street: "Musterstraße 12",
    zip: "36457",
    city: "Urnshausen",
  },
};
