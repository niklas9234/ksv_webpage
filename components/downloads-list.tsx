import { Download, FileText } from "lucide-react";
import { downloads } from "@/lib/data";

export function DownloadsList() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {downloads.map((item) => (
        <article key={item.title} className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-semibold">{item.title}</h3>
            <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-neutral-900 dark:bg-amber-400/15 dark:text-amber-200">
              {item.fileType}
            </span>
          </div>
          <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{item.description}</p>
          <p className="mt-2 inline-flex items-center gap-2 text-xs text-neutral-500">
            <FileText className="h-3.5 w-3.5" /> {item.fileSize}
          </p>
          <a href={item.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:underline dark:text-white">
            <Download className="h-4 w-4" /> Dokument öffnen
          </a>
        </article>
      ))}
    </div>
  );
}
