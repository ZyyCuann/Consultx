"use client";

import { useMemo } from "react";
import { BarChart } from "@/components/dashboard/bar-chart";
import { MetricCard } from "@/components/dashboard/metric-card";
import { getLeadSubmissions } from "@/lib/lead-service";

function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(value);
}

function countBy(items: string[]) {
  return Object.entries(
    items.reduce<Record<string, number>>((acc, item) => {
      acc[item] = (acc[item] ?? 0) + 1;
      return acc;
    }, {})
  ).map(([label, value]) => ({ label, value }));
}

export default function AdminPage() {
  const leads = useMemo(() => getLeadSubmissions(), []);
  const averageOpportunity =
    leads.reduce((sum, lead) => sum + lead.opportunityEstimate, 0) / Math.max(leads.length, 1);
  const industryCounts = countBy(leads.map((lead) => lead.industry));
  const painPointCounts = countBy(leads.flatMap((lead) => lead.painPoints));
  const tierCounts = countBy(leads.map((lead) => lead.recommendedTier));
  const mostCommonIndustry = industryCounts.sort((a, b) => b.value - a.value)[0]?.label ?? "N/A";
  const mostCommonPainPoint = painPointCounts.sort((a, b) => b.value - a.value)[0]?.label ?? "N/A";
  const healthChecksStarted = leads.length + 8;
  const completionRate = Math.round((leads.length / Math.max(healthChecksStarted, 1)) * 100);

  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-electric">
          Founder Dashboard
        </p>
        <h1 className="mt-5 text-5xl font-black tracking-normal text-ink sm:text-6xl">
          ConsultX demand and intelligence dashboard.
        </h1>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          <MetricCard label="Total Health Checks" value={String(leads.length)} />
          <MetricCard label="Total Leads" value={String(leads.length)} />
          <MetricCard label="Average Opportunity" value={formatRupiah(averageOpportunity)} />
          <MetricCard label="Most Common Industry" value={mostCommonIndustry} />
          <MetricCard label="Most Common Pain Point" value={mostCommonPainPoint} />
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <MetricCard label="Most Common Problems" value={mostCommonPainPoint} detail="Based on selected pain points." />
          <MetricCard label="Health Check Completion Rate" value={`${completionRate}%`} detail="Mock funnel calculation for MVP validation." />
          <MetricCard label="Top Recommended Package" value={tierCounts.sort((a, b) => b.value - a.value)[0]?.label ?? "N/A"} />
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <BarChart title="Leads by Industry" items={industryCounts} />
          <BarChart
            title="Opportunity Distribution"
            items={leads.map((lead) => ({
              label: lead.businessName,
              value: Math.round(lead.opportunityEstimate / 1000000)
            }))}
          />
          <BarChart
            title="Health Checks Over Time"
            items={leads.map((lead) => ({
              label: new Date(lead.submissionDate).toLocaleDateString("id-ID"),
              value: 1
            }))}
          />
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <BarChart title="Recommended Tier Distribution" items={tierCounts} />
          <BarChart
            title="Lead Conversion Funnel"
            items={[
              { label: "Visitors", value: healthChecksStarted + 20 },
              { label: "Started Check", value: healthChecksStarted },
              { label: "Completed Check", value: leads.length },
              { label: "Captured Leads", value: leads.length }
            ]}
          />
        </div>
      </div>
    </section>
  );
}
