import { industryProfiles } from "@/data/industries";

export default function IndustriesPage() {
  return (
    <>
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-electric">
              Industries
            </p>
            <h1 className="mt-5 text-5xl font-black tracking-normal text-ink sm:text-6xl">
              Diagnosis patterns for different business models.
            </h1>
            <p className="mt-6 text-lg leading-8 text-steel">
              ConsultX adapts its business intelligence workflow to the challenges, risks,
              and growth opportunities that appear across common business categories.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cloud px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {industryProfiles.map((industry) => (
            <article key={industry.name} className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black text-ink">{industry.name}</h2>
              {[
                ["Common Challenges", industry.commonChallenges],
                ["Typical Risks", industry.typicalRisks],
                ["Growth Opportunities", industry.growthOpportunities]
              ].map(([title, items]) => (
                <div key={title as string} className="mt-6">
                  <p className="text-xs font-black uppercase text-electric">{title as string}</p>
                  <ul className="mt-3 grid gap-2 text-sm leading-6 text-steel">
                    {(items as string[]).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
