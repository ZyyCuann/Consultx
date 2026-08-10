import { benchmarkRules, pricingThresholds } from "@/data/pricing";

export type BusinessComplexityInput = {
  revenue: number;
  profit: number;
  marketingSpend: number;
  operationalCost: number;
  businessStage: string;
  selectedPainPoints: string[];
};

export type FocusAreaDiagnosis = {
  area: "Finance" | "Marketing" | "Operations" | "Technology" | "Risk";
  status: "Low" | "Medium" | "High";
  reason: string;
};

const stageMaturity: Record<string, number> = {
  Idea: 22,
  "Early Sales": 42,
  Growing: 68,
  Established: 82
};

const painPointWeights: Record<string, Partial<Record<FocusAreaDiagnosis["area"], number>>> = {
  "Low sales": { Marketing: 28, Finance: 12 },
  "Low profit": { Finance: 34, Risk: 10 },
  "High cost": { Operations: 28, Finance: 18 },
  "Inventory problem": { Operations: 34, Risk: 12 },
  "Marketing not working": { Marketing: 34, Technology: 8 },
  "Operations bottleneck": { Operations: 32, Technology: 12 },
  "Customer retention": { Marketing: 26, Operations: 10 },
  "Digitalization problem": { Technology: 34, Operations: 10, Risk: 8 }
};

function clampScore(value: number) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

export function estimateOpportunity(input: BusinessComplexityInput) {
  return (
    Math.max(
      input.revenue * 0.05,
      input.marketingSpend * 0.2,
      input.operationalCost * 0.1,
      Math.max(input.revenue - input.profit, 0) * 0.03
    ) * 12
  );
}

export function getRecommendedTier(opportunity: number) {
  return (
    pricingThresholds.find((tier) => opportunity >= tier.min && opportunity < tier.max) ??
    pricingThresholds[pricingThresholds.length - 1]
  );
}

export function calculateBusinessComplexity(input: BusinessComplexityInput) {
  const revenue = Math.max(input.revenue, 0);
  const profit = Math.max(input.profit, 0);
  const opportunity = estimateOpportunity(input);
  const costRatio = revenue > 0 ? input.operationalCost / revenue : 0;
  const marketingRatio = revenue > 0 ? input.marketingSpend / revenue : 0;
  const profitRatio = revenue > 0 ? profit / revenue : 0;
  const painPointLoad = Math.min(input.selectedPainPoints.length * 8, 40);

  const opportunityScore = clampScore((opportunity / 50000000) * 55 + painPointLoad + 10);
  const riskScore = clampScore(costRatio * 34 + marketingRatio * 24 + (profitRatio < 0.12 ? 22 : 8) + painPointLoad);
  const maturityScore = clampScore(stageMaturity[input.businessStage] ?? 45);
  const complexityScore = clampScore(
    opportunityScore * 0.32 + riskScore * 0.34 + (100 - maturityScore) * 0.16 + painPointLoad * 0.45
  );

  return {
    complexityScore,
    opportunityScore,
    riskScore,
    maturityScore,
    recommendedTier: getRecommendedTier(opportunity).name
  };
}

export function diagnoseFocusAreas(input: BusinessComplexityInput): FocusAreaDiagnosis[] {
  const baseScores: Record<FocusAreaDiagnosis["area"], number> = {
    Finance: 18,
    Marketing: 18,
    Operations: 18,
    Technology: 14,
    Risk: 14
  };

  input.selectedPainPoints.forEach((point) => {
    const weights = painPointWeights[point] ?? {};
    Object.entries(weights).forEach(([area, value]) => {
      baseScores[area as FocusAreaDiagnosis["area"]] += value ?? 0;
    });
  });

  if (input.revenue > 0 && input.profit / input.revenue < 0.12) {
    baseScores.Finance += 22;
    baseScores.Risk += 8;
  }

  if (input.revenue > 0 && input.operationalCost / input.revenue > 0.45) {
    baseScores.Operations += 20;
    baseScores.Risk += 10;
  }

  const reasons: Record<FocusAreaDiagnosis["area"], string> = {
    Finance: "Profitability, pricing, and cost structure show signals that should be reviewed.",
    Marketing: "Growth, conversion, retention, or channel quality may be limiting performance.",
    Operations: "Costs, process flow, inventory, or capacity may be creating hidden losses.",
    Technology: "Tools, automation, and data workflows may need clearer structure.",
    Risk: "Business exposure, dependency, and decision uncertainty should be monitored."
  };

  return (Object.keys(baseScores) as FocusAreaDiagnosis["area"][]).map((area) => ({
    area,
    status: baseScores[area] >= 60 ? "High" : baseScores[area] >= 34 ? "Medium" : "Low",
    reason: reasons[area]
  }));
}

export function calculateBenchmarks(input: BusinessComplexityInput) {
  const revenue = Math.max(input.revenue, 0);
  const profitRatio = revenue > 0 ? input.profit / revenue : 0;
  const costRatio = revenue > 0 ? input.operationalCost / revenue : 0;

  return [
    {
      label: "Revenue Efficiency",
      value:
        profitRatio >= benchmarkRules.revenueEfficiency.aboveAverageProfitRatio
          ? "Above Average"
          : profitRatio <= benchmarkRules.revenueEfficiency.belowAverageProfitRatio
            ? "Below Average"
            : "Average"
    },
    {
      label: "Profitability",
      value:
        profitRatio >= benchmarkRules.profitability.aboveAverageProfitRatio
          ? "Above Average"
          : profitRatio <= benchmarkRules.profitability.belowAverageProfitRatio
            ? "Below Average"
            : "Average"
    },
    {
      label: "Operational Complexity",
      value:
        costRatio >= benchmarkRules.operationalComplexity.highCostRatio
          ? "High"
          : costRatio >= benchmarkRules.operationalComplexity.mediumCostRatio
            ? "Medium"
            : "Low"
    }
  ];
}
