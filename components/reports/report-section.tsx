import type { ReactNode } from "react";

export function ReportSection({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-lg border border-line bg-white p-6 shadow-sm">
      <h2 className="text-xl font-black text-ink">{title}</h2>
      <div className="mt-4 text-sm leading-6 text-steel">{children}</div>
    </section>
  );
}
