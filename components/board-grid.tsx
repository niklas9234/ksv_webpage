import { Mail } from "lucide-react";
import { boardMembers } from "@/lib/data";

export function BoardGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {boardMembers.map((member) => (
        <article key={member.email} className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <h3 className="text-lg font-semibold">{member.name}</h3>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{member.role}</p>
          <a href={`mailto:${member.email}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:underline dark:text-white">
            <Mail className="h-4 w-4" />
            {member.email}
          </a>
        </article>
      ))}
    </div>
  );
}
