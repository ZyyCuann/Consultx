"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import {
  calculateBenchmarks,
  calculateBusinessComplexity,
  calculateOpportunityBreakdown,
  diagnoseFocusAreas,
  estimateOpportunity,
  explainScores,
  getRecommendedTier
} from "@/lib/scoring-engine";
import { businessStages, industries, painPoints } from "@/lib/data";
import { saveLeadSubmission } from "@/lib/lead-service";
import { generateRecommendations, getDefaultRecommendations } from "@/lib/recommendation-engine";

type FormState = {
  businessName: string;
  industry: string;
  stage: string;
  monthlyRevenue: string;
  monthlyProfit: string;
  monthlyMarketingSpend: string;
  monthlyOperationalCost: string;
  mainChallenge: string;
  selectedPainPoints: string[];
};

type LeadState = {
  name: string;
  email: string;
  businessName: string;
};

const initialState: FormState = {
  businessName: "",
  industry: "Retail",
  stage: "Early Sales",
  monthlyRevenue: "",
  monthlyProfit: "",
  monthlyMarketingSpend: "",
  monthlyOperationalCost: "",
  mainChallenge: "",
  selectedPainPoints: []
};

const steps = ["Business Profile", "Financial Snapshot", "Business Challenge", "Result Preview"];

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

function ScoreBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border border-line bg-white p-5">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-black text-ink">{label}</p>
        <p className="text-sm font-black text-electric">{value}/100</p>
      </div>
      <div className="mt-4 h-2 rounded-full bg-cloud">
        <div className="h-2 rounded-full bg-electric" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function ScoreExplanation({ title, reasons }: { title: string; reasons: string[] }) {
  return (
    <details className="mt-3 rounded-md border border-line bg-white p-3">
      <summary className="cursor-pointer text-xs font-black uppercase text-electric">
        Why this score?
      </summary>
      <ul className="mt-3 grid gap-2 text-xs leading-5 text-steel">
        {reasons.map((reason) => (
          <li key={`${title}-${reason}`}>{reason}</li>
        ))}
      </ul>
    </details>
  );
}

function RadialScore({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border border-line bg-white p-5 text-center">
      <div
        className="mx-auto flex h-28 w-28 items-center justify-center rounded-full"
        style={{
          background: `conic-gradient(#1677ff ${value * 3.6}deg, #e8eef6 0deg)`
        }}
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
          <span className="text-2xl font-black text-ink">{value}</span>
        </div>
      </div>
      <p className="mt-4 text-sm font-black text-ink">{label}</p>
    </div>
  );
}

function inputClasses() {
  return "mt-2 w-full rounded-md border border-line bg-white px-4 py-3 text-sm font-semibold text-ink outline-none transition placeholder:text-steel/60 focus:border-electric focus:ring-4 focus:ring-electric/10";
}

export function HealthCheckForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [lead, setLead] = useState<LeadState>({ name: "", email: "", businessName: "" });
  const [isUnlocked, setIsUnlocked] = useState(false);

  const result = useMemo(() => {
    const monthlyRevenue = toNumber(form.monthlyRevenue);
    const monthlyProfit = toNumber(form.monthlyProfit);
    const monthlyMarketingSpend = toNumber(form.monthlyMarketingSpend);
    const monthlyOperationalCost = toNumber(form.monthlyOperationalCost);

    const engineInput = {
      revenue: monthlyRevenue,
      profit: monthlyProfit,
      marketingSpend: monthlyMarketingSpend,
      operationalCost: monthlyOperationalCost,
      businessStage: form.stage,
      selectedPainPoints: form.selectedPainPoints
    };
    const potentialOpportunity = estimateOpportunity(engineInput);
    const scores = calculateBusinessComplexity(engineInput);
    const focusAreas = diagnoseFocusAreas(engineInput);
    const benchmarks = calculateBenchmarks(engineInput);
    const explanations = explainScores(engineInput);
    const opportunityBreakdown = calculateOpportunityBreakdown(engineInput);
    const recommendations =
      generateRecommendations(form.selectedPainPoints).length > 0
        ? generateRecommendations(form.selectedPainPoints)
        : getDefaultRecommendations();

    return {
      potentialOpportunity,
      tier: getRecommendedTier(potentialOpportunity),
      scores,
      focusAreas,
      benchmarks,
      explanations,
      opportunityBreakdown,
      recommendations
    };
  }, [form]);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const togglePainPoint = (label: string) => {
    setForm((current) => {
      const selected = current.selectedPainPoints.includes(label)
        ? current.selectedPainPoints.filter((item) => item !== label)
        : [...current.selectedPainPoints, label];
      return { ...current, selectedPainPoints: selected };
    });
  };

  const unlockResult = () => {
    const name = lead.name.trim();
    const email = lead.email.trim();
    const businessName = lead.businessName.trim() || form.businessName.trim();
    if (!name || !email || !businessName) return;

    saveLeadSubmission({
      name,
      email,
      businessName,
      industry: form.industry,
      businessStage: form.stage,
      revenue: toNumber(form.monthlyRevenue),
      profit: toNumber(form.monthlyProfit),
      marketingSpend: toNumber(form.monthlyMarketingSpend),
      operationalCost: toNumber(form.monthlyOperationalCost),
      painPoints: form.selectedPainPoints,
      complexityScore: result.scores.complexityScore,
      opportunityEstimate: result.potentialOpportunity,
      recommendedTier: result.tier.name
    });
    setIsUnlocked(true);
  };

  return (
    <div className="rounded-lg border border-line bg-white p-4 shadow-soft md:p-6">
      <div className="grid gap-3 md:grid-cols-4">
        {steps.map((label, index) => (
          <div
            key={label}
            className={`rounded-md border px-4 py-3 ${
              index <= step ? "border-electric bg-electric/10" : "border-line bg-cloud"
            }`}
          >
            <p className={`text-xs font-black ${index <= step ? "text-electric" : "text-steel"}`}>
              Step {index + 1}
            </p>
            <p className="mt-1 text-sm font-bold text-ink">{label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        {step === 0 ? (
          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm font-bold text-ink">
              Business name
              <input
                value={form.businessName}
                onChange={(event) => updateField("businessName", event.target.value)}
                className={inputClasses()}
                placeholder="Example: Sari Retail"
              />
            </label>
            <label className="text-sm font-bold text-ink">
              Industry
              <select
                value={form.industry}
                onChange={(event) => updateField("industry", event.target.value)}
                className={inputClasses()}
              >
                {industries.map((industry) => (
                  <option key={industry}>{industry}</option>
                ))}
              </select>
            </label>
            <label className="text-sm font-bold text-ink md:col-span-2">
              Business stage
              <div className="mt-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {businessStages.map((stage) => (
                  <button
                    key={stage}
                    type="button"
                    onClick={() => updateField("stage", stage)}
                    className={`rounded-md border px-4 py-3 text-left text-sm font-bold transition ${
                      form.stage === stage
                        ? "border-electric bg-electric/10 text-electric"
                        : "border-line bg-white text-steel hover:border-ink hover:text-ink"
                    }`}
                  >
                    {stage}
                  </button>
                ))}
              </div>
            </label>
          </div>
        ) : null}

        {step === 1 ? (
          <div className="grid gap-5 md:grid-cols-2">
            {[
              ["monthlyRevenue", "Monthly revenue"],
              ["monthlyProfit", "Monthly profit"],
              ["monthlyMarketingSpend", "Monthly marketing spend"],
              ["monthlyOperationalCost", "Estimated monthly operational cost"]
            ].map(([field, label]) => (
              <label key={field} className="text-sm font-bold text-ink">
                {label}
                <input
                  inputMode="numeric"
                  value={form[field as keyof FormState] as string}
                  onChange={(event) => updateField(field as keyof FormState, event.target.value)}
                  className={inputClasses()}
                  placeholder="Example: 25000000"
                />
              </label>
            ))}
          </div>
        ) : null}

        {step === 2 ? (
          <div className="grid gap-6">
            <label className="text-sm font-bold text-ink">
              Main challenge
              <textarea
                value={form.mainChallenge}
                onChange={(event) => updateField("mainChallenge", event.target.value)}
                className={`${inputClasses()} min-h-32 resize-y`}
                placeholder="Describe the business issue you want to understand."
              />
            </label>
            <div>
              <p className="text-sm font-bold text-ink">Select pain points</p>
              <div className="mt-3 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                {painPoints.map((point) => {
                  const selected = form.selectedPainPoints.includes(point.label);
                  return (
                    <button
                      key={point.label}
                      type="button"
                      onClick={() => togglePainPoint(point.label)}
                      className={`rounded-md border p-4 text-left transition ${
                        selected
                          ? "border-electric bg-electric/10"
                          : "border-line bg-white hover:border-ink"
                      }`}
                    >
                      <span className="flex items-start gap-3">
                        <CheckCircle2
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            selected ? "text-electric" : "text-line"
                          }`}
                          aria-hidden="true"
                        />
                        <span>
                          <span className="block text-sm font-black text-ink">{point.label}</span>
                          <span className="mt-2 block text-xs leading-5 text-steel">
                            {point.insight}
                          </span>
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ) : null}

        {step === 3 && !isUnlocked ? (
          <div className="mx-auto max-w-2xl rounded-lg border border-line bg-cloud p-6 shadow-sm">
            <p className="text-sm font-black uppercase text-electric">Your diagnosis is ready.</p>
            <h2 className="mt-3 text-3xl font-black text-ink">
              Unlock your detailed result.
            </h2>
            <p className="mt-4 text-sm leading-6 text-steel">
              Enter your lead details to view the full intelligence snapshot, focus areas,
              benchmark preview, and upgrade recommendation.
            </p>
            <div className="mt-6 grid gap-4">
              {[
                ["name", "Full Name", "Your name"],
                ["email", "Email", "you@example.com"],
                ["businessName", "Business Name", form.businessName || "Your business"]
              ].map(([field, label, placeholder]) => (
                <label key={field} className="text-sm font-bold text-ink">
                  {label}
                  <input
                    value={lead[field as keyof LeadState]}
                    onChange={(event) =>
                      setLead((current) => ({
                        ...current,
                        [field]: event.target.value
                      }))
                    }
                    className={inputClasses()}
                    placeholder={placeholder}
                  />
                </label>
              ))}
            </div>
            <button
              type="button"
              onClick={unlockResult}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-black text-white transition hover:bg-electric"
            >
              Unlock My Result
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <p className="mt-4 text-xs leading-5 text-steel">
              This stores the submission in a local mock lead service for MVP validation.
            </p>
          </div>
        ) : null}

        {step === 3 && isUnlocked ? (
          <div className="grid gap-6">
            <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-lg bg-ink p-6 text-white">
              <p className="text-sm font-black uppercase text-electric">Estimated Opportunity</p>
              <p className="mt-3 text-4xl font-black">
                {formatRupiah(result.potentialOpportunity)}
              </p>
              <div className="mt-8 border-t border-white/15 pt-6">
                <p className="text-sm font-black uppercase text-white/60">
                  Business Complexity Score
                </p>
                <p className="mt-3 text-5xl font-black">{result.scores.complexityScore}/100</p>
              </div>
            </div>
            <div className="rounded-lg border border-line bg-cloud p-6">
              <p className="text-sm font-black uppercase text-electric">Recommended tier</p>
              <h2 className="mt-3 text-3xl font-black text-ink">{result.tier.name}</h2>
              <p className="mt-1 text-2xl font-black text-electric">{result.tier.price}</p>
              <p className="mt-5 text-sm leading-6 text-steel">{result.tier.message}</p>
              <div className="mt-6">
                <p className="text-sm font-black text-ink">Detected focus areas</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {result.focusAreas
                    .filter((focus) => focus.status !== "Low")
                    .map((focus) => (
                    <span
                      key={focus.area}
                      className="rounded-md border border-line bg-white px-3 py-2 text-xs font-black text-ink"
                    >
                      {focus.area}
                    </span>
                  ))}
                </div>
              </div>
              <button className="mt-8 inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-black text-white transition hover:bg-electric">
                {result.tier.cta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <p className="mt-5 text-xs leading-5 text-steel">
                This is an initial estimate based on the information submitted. It is not a
                financial guarantee.
              </p>
            </div>
            </div>

            <div className="rounded-lg border border-line bg-cloud p-5">
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-black uppercase text-electric">Diagnosis dashboard</p>
                  <h2 className="mt-2 text-2xl font-black text-ink">ConsultX Intelligence Snapshot</h2>
                </div>
                <p className="text-sm font-semibold text-steel">
                  Scores are directional and based on submitted inputs.
                </p>
              </div>
              <div className="mt-6 grid gap-4 lg:grid-cols-4">
                <div>
                  <RadialScore label="Business Complexity" value={result.scores.complexityScore} />
                  <ScoreExplanation title="complexity" reasons={result.explanations.complexityScore} />
                </div>
                <div>
                  <ScoreBar label="Opportunity Score" value={result.scores.opportunityScore} />
                  <ScoreExplanation title="opportunity" reasons={result.explanations.opportunityScore} />
                </div>
                <div>
                  <ScoreBar label="Risk Score" value={result.scores.riskScore} />
                  <ScoreExplanation title="risk" reasons={result.explanations.riskScore} />
                </div>
                <div>
                  <ScoreBar label="Business Maturity" value={result.scores.maturityScore} />
                  <ScoreExplanation title="maturity" reasons={result.explanations.maturityScore} />
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase text-electric">Opportunity breakdown</p>
              <div className="mt-5 grid gap-4 md:grid-cols-4">
                {[
                  ["Revenue Opportunity", result.opportunityBreakdown.revenueOpportunity],
                  ["Cost Saving Opportunity", result.opportunityBreakdown.costSavingOpportunity],
                  ["Retention Opportunity", result.opportunityBreakdown.retentionOpportunity],
                  ["Total Estimated Opportunity", result.opportunityBreakdown.totalOpportunity]
                ].map(([label, value]) => (
                  <div key={label as string} className="rounded-md border border-line bg-cloud p-4">
                    <p className="text-xs font-black uppercase text-steel">{label as string}</p>
                    <p className="mt-2 text-xl font-black text-ink">{formatRupiah(value as number)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase text-electric">Recommended focus areas</p>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {result.recommendations.map((recommendation) => (
                  <div key={recommendation} className="rounded-md border border-line bg-cloud px-4 py-3">
                    <p className="text-sm font-bold text-ink">{recommendation}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-5">
              {result.focusAreas.map((focus) => (
                <article key={focus.area} className="rounded-lg border border-line bg-white p-5 shadow-sm">
                  <p className="text-lg font-black text-ink">{focus.area}</p>
                  <p
                    className={`mt-3 text-sm font-black ${
                      focus.status === "High"
                        ? "text-electric"
                        : focus.status === "Medium"
                          ? "text-ink"
                          : "text-steel"
                    }`}
                  >
                    {focus.status} Priority
                  </p>
                  <p className="mt-3 text-sm leading-6 text-steel">{focus.reason}</p>
                </article>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
              <div className="rounded-lg border border-line bg-white p-6 shadow-sm">
                <p className="text-sm font-black uppercase text-electric">PDF report preview</p>
                <h2 className="mt-3 text-2xl font-black text-ink">What paid users receive</h2>
                <div className="mt-6 grid gap-3">
                  {[
                    "Executive Summary",
                    "Key Issues",
                    "Priority Matrix",
                    "Recommended Actions",
                    "Expected Impact"
                  ].map((item) => (
                    <div key={item} className="rounded-md border border-line bg-cloud px-4 py-3">
                      <p className="text-sm font-bold text-ink">{item}</p>
                      <p className="mt-1 text-xs leading-5 text-steel">
                        Mock preview of structured diagnosis content included in the paid report.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-line bg-white p-6 shadow-sm">
                <p className="text-sm font-black uppercase text-electric">How your business compares</p>
                <p className="mt-1 text-xs font-bold text-steel">Compared to Similar Businesses</p>
                <div className="mt-6 grid gap-4">
                  {result.benchmarks.map((benchmark) => (
                    <div key={benchmark.label} className="flex items-center justify-between border-b border-line pb-3">
                      <p className="text-sm font-bold text-ink">{benchmark.label}</p>
                      <p className="text-sm font-black text-electric">{benchmark.value}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-xs leading-5 text-steel">
                  Benchmarks are illustrative and not based on national statistics.
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-line pt-5">
        <button
          type="button"
          onClick={() => setStep((current) => Math.max(0, current - 1))}
          disabled={step === 0}
          className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-4 py-2 text-sm font-black text-ink transition hover:border-ink disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back
        </button>
        <button
          type="button"
          onClick={() => {
            setStep((current) => Math.min(steps.length - 1, current + 1));
            if (step < steps.length - 1) setIsUnlocked(false);
          }}
          disabled={step === steps.length - 1}
          className="inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-black text-white transition hover:bg-electric disabled:cursor-not-allowed disabled:opacity-40"
        >
          Continue
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
