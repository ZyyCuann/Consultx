"use client";

import { useMemo } from "react";
import { ReportSection } from "@/components/reports/report-section";
import { getLeadSubmissions } from "@/lib/lead-service";

function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(value);
}

export default function ReportPreviewPage() {
  const latest = useMemo(() => getLeadSubmissions()[0], []);

  return (
    <section className="bg-cloud px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-electric">
          Dynamic Report Preview
        </p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-normal text-ink sm:text-6xl">
          Consulting-style report generated from health check data.
        </h1>
        <div className="mt-10 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg bg-ink p-6 text-white shadow-soft">
            <p className="text-sm font-black uppercase text-electric">Business Snapshot</p>
            <h2 className="mt-3 text-3xl font-black">{latest.businessName}</h2>
            <p className="mt-2 text-white/70">{latest.industry} · {latest.businessStage}</p>
            <p className="mt-8 text-sm font-black uppercase text-white/60">Opportunity Estimate</p>
            <p className="mt-2 text-4xl font-black">{formatRupiah(latest.opportunityEstimate)}</p>
          </div>
          <div className="grid gap-5">
            <ReportSection title="Executive Summary">
              {latest.businessName} shows a {latest.recommendedTier} opportunity profile based on submitted
              revenue, profit, cost, and pain point signals.
            </ReportSection>
            <ReportSection title="Detected Challenges">
              <ul className="grid gap-2">
                {latest.painPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </ReportSection>
          </div>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <ReportSection title="Opportunity Breakdown">
            Revenue, cost saving, and retention opportunities are estimated from submitted business signals.
          </ReportSection>
          <ReportSection title="Recommended Priorities">
            Prioritize the highest-impact pain points before committing to larger strategic initiatives.
          </ReportSection>
          <ReportSection title="Next Steps">
            Convert this preview into a paid diagnosis to receive a deeper recommendation package.
          </ReportSection>
        </div>
      </div>
    </section>
  );
}
