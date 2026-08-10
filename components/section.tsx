import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, description, children, className = "" }: SectionProps) {
  return (
    <section className={`px-5 py-20 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.14em] text-electric">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-black tracking-normal text-ink sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 text-lg leading-8 text-steel">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
