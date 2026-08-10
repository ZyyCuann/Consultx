export default function HowItWorksPage() {
  const steps = [
    "Submit Your Business Challenge",
    "Initial Business Health Check",
    "Multi-Perspective Diagnosis",
    "Strategic Review",
    "Recommended Next Actions"
  ];
  const perspectives = ["Finance", "Marketing", "Operations", "Technology", "Risk"];

  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-electric">
          How It Works
        </p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-normal text-ink sm:text-6xl">
          A professional intelligence workflow from issue to action.
        </h1>
        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          {steps.map((step, index) => (
            <article key={step} className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <p className="text-sm font-black text-electric">0{index + 1}</p>
              <h2 className="mt-4 text-xl font-black text-ink">{step}</h2>
              {index === 2 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {perspectives.map((item) => (
                    <span key={item} className="rounded-md bg-cloud px-3 py-2 text-xs font-black text-ink">
                      {item}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
