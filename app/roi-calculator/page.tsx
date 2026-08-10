"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";

function toNumber(value: string) {
  return Number(value.replace(/[^\d.-]/g, "")) || 0;
}

function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(value);
}

export default function RoiCalculatorPage() {
  const [values, setValues] = useState({
    revenue: "",
    profit: "",
    marketing: "",
    operational: ""
  });

  const result = useMemo(() => {
    const revenue = toNumber(values.revenue);
    const profit = toNumber(values.profit);
    const marketing = toNumber(values.marketing);
    const operational = toNumber(values.operational);
    const costSavings = operational * 0.1 * 12;
    const revenueImprovement = revenue * 0.05 * 12;
    const marketingImprovement = marketing * 0.2 * 12;
    const annualOpportunity = costSavings + revenueImprovement + marketingImprovement;
    const margin = revenue > 0 ? profit / revenue : 0;
    const healthRating = margin > 0.22 ? "Healthy" : margin > 0.1 ? "Developing" : "Needs Attention";

    return { costSavings, revenueImprovement, annualOpportunity, healthRating };
  }, [values]);

  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-electric">
            ROI Calculator
          </p>
          <h1 className="mt-5 text-5xl font-black tracking-normal text-ink sm:text-6xl">
            Estimate the opportunity before deeper diagnosis.
          </h1>
          <p className="mt-6 text-lg leading-8 text-steel">
            Use a simple directional calculator to preview annual opportunity, cost savings,
            and health rating.
          </p>
        </div>
        <div className="rounded-lg border border-line bg-white p-6 shadow-soft">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["revenue", "Monthly Revenue"],
              ["profit", "Monthly Profit"],
              ["marketing", "Monthly Marketing Spend"],
              ["operational", "Monthly Operational Cost"]
            ].map(([key, label]) => (
              <label key={key} className="text-sm font-bold text-ink">
                {label}
                <input
                  value={values[key as keyof typeof values]}
                  onChange={(event) => setValues((current) => ({ ...current, [key]: event.target.value }))}
                  className="mt-2 w-full rounded-md border border-line bg-white px-4 py-3 text-sm font-semibold text-ink outline-none focus:border-electric focus:ring-4 focus:ring-electric/10"
                  placeholder="25000000"
                  inputMode="numeric"
                />
              </label>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              ["Potential Annual Opportunity", result.annualOpportunity],
              ["Potential Cost Savings", result.costSavings],
              ["Potential Revenue Improvement", result.revenueImprovement]
            ].map(([label, value]) => (
              <div key={label as string} className="rounded-md border border-line bg-cloud p-4">
                <p className="text-xs font-black uppercase text-steel">{label as string}</p>
                <p className="mt-2 text-xl font-black text-ink">{formatRupiah(value as number)}</p>
              </div>
            ))}
            <div className="rounded-md border border-line bg-ink p-4 text-white">
              <p className="text-xs font-black uppercase text-white/60">Business Health Rating</p>
              <p className="mt-2 text-xl font-black">{result.healthRating}</p>
            </div>
          </div>
          <Link
            href="/check"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-black text-white transition hover:bg-electric"
          >
            Run Free Health Check
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
