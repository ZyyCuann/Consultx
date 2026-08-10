import { portalPreview } from "@/data/portal-preview";

export default function PortalPreviewPage() {
  return (
    <section className="bg-cloud px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <span className="rounded-md bg-electric/10 px-3 py-2 text-xs font-black uppercase text-electric">
          Preview Experience
        </span>
        <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-normal text-ink sm:text-6xl">
          A realistic preview of the future ConsultX client portal.
        </h1>
        <div className="mt-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg bg-ink p-6 text-white shadow-soft">
            <p className="text-sm font-black uppercase text-electric">Business Overview</p>
            <h2 className="mt-3 text-3xl font-black">{portalPreview.business}</h2>
            <p className="mt-2 text-white/70">{portalPreview.industry}</p>
            <div className="mt-8 grid gap-4">
              <div>
                <p className="text-xs font-black uppercase text-white/50">Complexity Score</p>
                <p className="mt-2 text-4xl font-black">{portalPreview.complexityScore}/100</p>
              </div>
              <div>
                <p className="text-xs font-black uppercase text-white/50">Opportunity Estimate</p>
                <p className="mt-2 text-3xl font-black">{portalPreview.opportunityEstimate}</p>
              </div>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              ["Latest Diagnosis", [portalPreview.latestDiagnosis]],
              ["Detected Focus Areas", portalPreview.focusAreas],
              ["Recent Reports", portalPreview.reports],
              ["Recommended Actions", portalPreview.actions]
            ].map(([title, items]) => (
              <article key={title as string} className="rounded-lg border border-line bg-white p-6 shadow-sm">
                <h2 className="text-xl font-black text-ink">{title as string}</h2>
                <ul className="mt-4 grid gap-2 text-sm leading-6 text-steel">
                  {(items as string[]).map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-5 rounded-lg border border-line bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black text-ink">Status Timeline</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {portalPreview.timeline.map((item, index) => (
              <div key={item} className="rounded-md border border-line bg-cloud p-4">
                <p className="text-xs font-black text-electric">0{index + 1}</p>
                <p className="mt-2 text-sm font-bold text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
