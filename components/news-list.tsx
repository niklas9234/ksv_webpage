import Link from "next/link";
import type { NewsPost } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { FadeUp } from "@/components/fade-up";

type NewsListProps = {
  posts: NewsPost[];
  limit?: number;
};

export function NewsList({ posts, limit }: NewsListProps) {
  const visiblePosts = typeof limit === "number" ? posts.slice(0, limit) : posts;

  if (visiblePosts.length === 0) {
    return <p className="text-sm text-neutral-500">Derzeit gibt es keine neuen Beiträge.</p>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {visiblePosts.map((post, index) => (
        <FadeUp key={post.slug} delay={0.08 + index * 0.06}>
          <article className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-neutral-900 dark:bg-amber-400/15 dark:text-amber-200">{post.category}</span>
              <time className="text-sm text-neutral-500">{formatDate(post.date)}</time>
            </div>
            <h3 className="mt-3 text-xl font-semibold">{post.title}</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{post.excerpt}</p>
            <Link href="/aktuelles" className="mt-4 inline-block text-sm font-semibold hover:underline">
              Mehr lesen
            </Link>
          </article>
        </FadeUp>
      ))}
    </div>
  );
}
