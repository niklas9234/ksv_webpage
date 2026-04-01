import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">{eyebrow}</p>
      ) : null}
      <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{title}</h2>
      {description ? <p className="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">{description}</p> : null}
    </div>
  );
}
