import Link from "next/link";
import { newsPosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";

type NewsListProps = {
  limit?: number;
};

export function NewsList({ limit }: NewsListProps) {
  const posts = typeof limit === "number" ? newsPosts.slice(0, limit) : newsPosts;

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {posts.map((post) => (
        <article key={post.slug} className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">{post.category}</p>
          <h3 className="mt-2 text-xl font-semibold">{post.title}</h3>
          <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{post.excerpt}</p>
          <p className="mt-4 text-sm text-neutral-500">{formatDate(post.date)}</p>
          <Link href="/aktuelles" className="mt-4 inline-block text-sm font-semibold hover:underline">Mehr lesen</Link>
        </article>
      ))}
    </div>
  );
}
