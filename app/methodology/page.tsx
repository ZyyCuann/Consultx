import { methodologySteps } from "@/data/methodology";

export default function MethodologyPage() {
  return (
    <>
      <section className="premium-grid px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-electric">
              Methodology
            </p>
            <h1 className="mt-5 text-5xl font-black tracking-normal text-ink sm:text-6xl">
              A business intelligence workflow for clearer decisions.
            </h1>
            <p className="mt-6 text-lg leading-8 text-steel">
              ConsultX combines structured consulting frameworks, business logic, and
              AI-assisted analysis to move from problem signals to practical strategic direction.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {methodologySteps.map((step, index) => (
            <article key={step.title} className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <p className="text-sm font-black text-electric">0{index + 1}</p>
              <h2 className="mt-4 text-2xl font-black text-ink">{step.title}</h2>
              <p className="mt-4 text-sm leading-6 text-steel">{step.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
