const recommendationMap: Record<string, string[]> = {
  "Low profit": ["Pricing Review", "Cost Structure Analysis", "Margin Leakage Assessment"],
  "High cost": ["Cost Structure Analysis", "Operational Waste Review", "Supplier and Expense Audit"],
  "Inventory problem": ["Inventory Assessment", "Stock Turnover Review", "Leakage Control Plan"],
  "Customer retention": ["Retention Audit", "Customer Journey Mapping", "Loyalty Strategy"],
  "Marketing not working": ["Channel Efficiency Review", "Offer Clarity Audit", "Campaign Waste Analysis"],
  "Low sales": ["Sales Funnel Review", "Market Segment Check", "Conversion Improvement Plan"],
  "Operations bottleneck": ["Process Bottleneck Mapping", "Capacity Review", "Workflow Redesign"],
  "Digitalization problem": ["Digital Workflow Mapping", "Automation Priority Plan", "Data Visibility Review"]
};

export function generateRecommendations(painPoints: string[]) {
  const recommendations = painPoints.flatMap((point) => recommendationMap[point] ?? []);
  return Array.from(new Set(recommendations)).slice(0, 6);
}

export function getDefaultRecommendations() {
  return ["Business Health Check", "Priority Assessment", "Strategic Recommendation"];
}
