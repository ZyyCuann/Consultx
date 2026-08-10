export {
  calculateBenchmarks,
  calculateBusinessComplexity,
  diagnoseFocusAreas,
  estimateOpportunity,
  getRecommendedTier
} from "@/lib/business-complexity";

export type { BusinessComplexityInput, FocusAreaDiagnosis } from "@/lib/business-complexity";

import type { BusinessComplexityInput } from "@/lib/business-complexity";

export function calculateOpportunityBreakdown(input: BusinessComplexityInput) {
  const revenueOpportunity = input.revenue * 0.05 * 12;
  const costSavingOpportunity = input.operationalCost * 0.1 * 12;
  const retentionOpportunity = input.marketingSpend * 0.2 * 12;
  return {
    revenueOpportunity,
    costSavingOpportunity,
    retentionOpportunity,
    totalOpportunity: revenueOpportunity + costSavingOpportunity + retentionOpportunity
  };
}

export function explainScores(input: BusinessComplexityInput) {
  const profitRatio = input.revenue > 0 ? input.profit / input.revenue : 0;
  const costRatio = input.revenue > 0 ? input.operationalCost / input.revenue : 0;
  const painPointReason =
    input.selectedPainPoints.length > 1
      ? "Multiple business pain points selected"
      : "A focused business pain point was selected";

  return {
    complexityScore: [
      painPointReason,
      profitRatio < 0.12 ? "Low profitability relative to revenue" : "Profitability signal is not severely weak",
      costRatio > 0.45 ? "High operational burden" : "Operational burden appears manageable"
    ],
    opportunityScore: [
      "Revenue, cost, marketing spend, and profit gap are used to estimate potential upside",
      input.marketingSpend > 0 ? "Marketing spend creates a measurable optimization opportunity" : "Marketing spend is limited or not provided",
      input.operationalCost > 0 ? "Operational cost creates possible savings opportunity" : "Operational cost is limited or not provided"
    ],
    riskScore: [
      costRatio > 0.45 ? "Operational cost is high compared to revenue" : "Operational cost ratio is not the dominant risk",
      profitRatio < 0.12 ? "Profit margin may not provide enough buffer" : "Profit margin provides some buffer",
      input.selectedPainPoints.includes("Digitalization problem")
        ? "Digital workflow issues may increase execution risk"
        : "No explicit digitalization risk was selected"
    ],
    maturityScore: [
      `Business stage is ${input.businessStage}`,
      input.businessStage === "Idea" || input.businessStage === "Early Sales"
        ? "Early-stage businesses usually have lower operating maturity"
        : "Later-stage businesses usually have more operating signals to evaluate",
      "Maturity reflects stage and readiness, not business quality"
    ]
  };
}
