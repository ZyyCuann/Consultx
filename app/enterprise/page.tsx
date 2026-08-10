import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { enterpriseTargets, updatePath } from "@/lib/data";

export default function EnterprisePage() {
  return (
    <>
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-electric">
              Enterprise
            </p>
            <h1 className="mt-5 text-5xl font-black tracking-normal text-ink sm:text-6xl">
              Program-level business intelligence for communities and portfolios.
            </h1>
            <p className="mt-6 text-lg leading-8 text-steel">
              ConsultX Enterprise is built for institutions that support many businesses
              at once and need consistent diagnosis, pricing control, and intelligence over
              time.
            </p>
            <Link
              href="/check"
              className="mt-9 inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-black text-white transition hover:bg-electric"
            >
              Start Free Check
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="rounded-lg border border-line bg-white p-6 shadow-soft">
            <h2 className="text-xl font-black text-ink">Designed for</h2>
            <div className="mt-5 grid gap-3">
              {enterpriseTargets.map((target) => (
                <div key={target} className="rounded-md border border-line bg-cloud px-4 py-3">
                  <p className="text-sm font-bold text-ink">{target}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cloud px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-electric">
              Update path
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-normal text-ink sm:text-4xl">
              A staged path from free diagnosis to enterprise intelligence.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-5">
            {updatePath.map((item) => (
              <article key={item.phase} className="rounded-lg border border-line bg-white p-6 shadow-sm">
                <p className="text-sm font-black text-electric">{item.phase}</p>
                <h3 className="mt-4 text-lg font-black text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-steel">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-electric">
              Enterprise value
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-normal text-ink sm:text-4xl">
              Better visibility across every business you support.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Standardize diagnosis across many participants.",
              "Understand recurring issues by segment, region, or program.",
              "Route businesses to the right level of support.",
              "Turn individual health checks into portfolio intelligence."
            ].map((item) => (
              <div key={item} className="rounded-lg border border-line bg-white p-6 shadow-sm">
                <p className="text-base font-bold leading-7 text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
