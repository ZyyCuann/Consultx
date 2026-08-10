import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCta() {
  return (
    <section className="bg-ink px-5 py-20 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-electric">
            Start with evidence
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-normal sm:text-5xl">
            Know what your business is losing before you decide what to fix.
          </h2>
        </div>
        <Link
          href="/check"
          className="inline-flex w-fit items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-black text-ink transition hover:bg-electric hover:text-white"
        >
          Start Free Check
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
