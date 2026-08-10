import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReportSection } from "@/components/reports/report-section";

export default function SampleReportPage() {
  return (
    <>
      <section className="premium-grid px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-electric">
            Sample Diagnosis Report
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-normal text-ink sm:text-6xl">
            A consulting-style preview of a paid ConsultX diagnosis.
          </h1>
          <Link
            href="/check"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-black text-white transition hover:bg-electric"
          >
            Start Free Health Check
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="bg-cloud px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg bg-ink p-6 text-white shadow-soft">
            <p className="text-sm font-black uppercase text-electric">Business</p>
            <h2 className="mt-3 text-3xl font-black">Retail Business</h2>
            <p className="mt-8 text-sm font-black uppercase text-white/60">Opportunity Identified</p>
            <p className="mt-2 text-4xl font-black">Rp8.500.000/year</p>
          </div>
          <div className="grid gap-5">
            <ReportSection title="Executive Summary">
              Retail Business shows a measurable opportunity from pricing consistency,
              inventory leakage, and weak customer retention. The first priority is to
              stabilize margin and stock visibility before scaling campaigns.
            </ReportSection>
            <ReportSection title="Key Issues">
              <ul className="grid gap-2">
                <li>Pricing inconsistency</li>
                <li>Inventory leakage</li>
                <li>Weak customer retention</li>
              </ul>
            </ReportSection>
          </div>
        </div>
        <div className="mx-auto mt-5 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          <ReportSection title="Priority Matrix">
            High impact: inventory leakage. Medium impact: retention. Quick review: pricing rules.
          </ReportSection>
          <ReportSection title="Quick Wins">
            Review top 20 SKUs, standardize discount rules, and create a repeat-purchase offer.
          </ReportSection>
          <ReportSection title="30-Day Roadmap">
            Week 1: map leakage. Week 2: pricing rules. Week 3: retention test. Week 4: review impact.
          </ReportSection>
          <ReportSection title="Potential Impact">
            Illustrative opportunity of Rp8.5M/year if leakage and retention issues are addressed.
          </ReportSection>
        </div>
      </section>
    </>
  );
}
