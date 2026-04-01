import { Mail, User } from "lucide-react";
import type { BoardMember } from "@/lib/data";
import { FadeUp } from "@/components/fade-up";

type BoardGridProps = {
  members: BoardMember[];
};

export function BoardGrid({ members }: BoardGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((member, index) => (
        <FadeUp key={member.name} delay={index * 0.06}>
          <article className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <div className="mb-4 inline-flex rounded-2xl bg-neutral-100 p-3 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
              <User className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{member.role}</p>
            <a href={`mailto:${member.email}`} className="mt-3 inline-flex items-center gap-2 text-sm text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100">
              <Mail className="h-4 w-4" />
              {member.email}
            </a>
          </article>
        </FadeUp>
      ))}
    </div>
  );
}
