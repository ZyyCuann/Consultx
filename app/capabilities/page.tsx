import { capabilityCategories } from "@/data/capabilities";

export default function CapabilitiesPage() {
  return (
    <section className="bg-cloud px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-electric">
          Capabilities
        </p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-normal text-ink sm:text-6xl">
          What ConsultX can diagnose.
        </h1>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilityCategories.map((capability) => (
            <article key={capability.title} className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black text-ink">{capability.title}</h2>
              <p className="mt-4 text-sm leading-6 text-steel">{capability.evaluate}</p>
              <div className="mt-5">
                <p className="text-xs font-black uppercase text-electric">Common warning signs</p>
                <ul className="mt-2 grid gap-1 text-sm text-steel">
                  {capability.warningSigns.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div className="mt-5">
                <p className="text-xs font-black uppercase text-electric">Typical recommendations</p>
                <ul className="mt-2 grid gap-1 text-sm text-steel">
                  {capability.recommendations.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
