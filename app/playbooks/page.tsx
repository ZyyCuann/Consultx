import { playbooks } from "@/data/playbooks";

export default function PlaybooksPage() {
  return (
    <section className="bg-cloud px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-electric">
          Industry Playbooks
        </p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-normal text-ink sm:text-6xl">
          Practical diagnosis guides by industry.
        </h1>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {playbooks.map((playbook) => (
            <article key={playbook.industry} className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black text-ink">{playbook.industry}</h2>
              {[
                ["Common Problems", playbook.commonProblems],
                ["Common Mistakes", playbook.commonMistakes],
                ["Growth Opportunities", playbook.growthOpportunities],
                ["Recommended Metrics", playbook.recommendedMetrics]
              ].map(([label, items]) => (
                <div key={label as string} className="mt-5">
                  <p className="text-xs font-black uppercase text-electric">{label as string}</p>
                  <ul className="mt-2 grid gap-1 text-sm leading-6 text-steel">
                    {(items as string[]).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
