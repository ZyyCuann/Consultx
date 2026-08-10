import { caseLibrary } from "@/data/case-library";

export default function CaseLibraryPage() {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-electric">
          Case Library
        </p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-normal text-ink sm:text-6xl">
          Fictional examples that demonstrate diagnosis patterns.
        </h1>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {caseLibrary.map((item) => (
            <article key={`${item.industry}-${item.challenge}`} className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <p className="text-xs font-black uppercase text-electric">{item.label}</p>
              <h2 className="mt-3 text-2xl font-black text-ink">{item.industry}: {item.challenge}</h2>
              <div className="mt-5 grid gap-4 text-sm leading-6 text-steel">
                <p><span className="font-black text-ink">Root Cause:</span> {item.rootCause}</p>
                <p><span className="font-black text-ink">Recommendation:</span> {item.recommendation}</p>
                <p><span className="font-black text-ink">Expected Outcome:</span> {item.expectedOutcome}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
