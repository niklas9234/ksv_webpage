import { Download } from "lucide-react";
import { FadeUp } from "@/components/fade-up";
import type { DownloadItem } from "@/lib/data";

type DownloadsListProps = {
  downloads: DownloadItem[];
};

export function DownloadsList({ downloads }: DownloadsListProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {downloads.map((item, index) => (
        <FadeUp key={item.title} delay={index * 0.06}>
          <article className="flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <div>
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-neutral-900 dark:bg-amber-400/15 dark:text-amber-200">
                  {item.fileType}
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{item.description}</p>
            </div>
            <a href={item.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 transition hover:text-amber-700 dark:text-white dark:hover:text-amber-300">
              <Download className="h-4 w-4" />
              Herunterladen
            </a>
          </article>
        </FadeUp>
      ))}
    </div>
  );
}
