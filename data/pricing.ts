export const pricingThresholds = [
  {
    min: 0,
    max: 5000000,
    name: "Free Health Check",
    price: "Free",
    cta: "Get Free Basic Insight",
    message:
      "Your estimated opportunity is still below the paid diagnosis threshold. ConsultX can provide a basic free insight."
  },
  {
    min: 5000000,
    max: 10000000,
    name: "Growth Diagnostic",
    price: "$10",
    cta: "Unlock Full Diagnosis",
    message:
      "Your estimated opportunity is large enough for a focused paid diagnosis."
  },
  {
    min: 10000000,
    max: 50000000,
    name: "Strategic Review",
    price: "$29",
    cta: "Unlock Full Diagnosis",
    message:
      "Your estimated opportunity suggests a broader strategic review across multiple business areas."
  },
  {
    min: 50000000,
    max: 250000000,
    name: "Executive Analysis",
    price: "$99",
    cta: "Unlock Full Diagnosis",
    message:
      "Your estimated opportunity is high enough to justify deeper executive-level analysis."
  },
  {
    min: 250000000,
    max: Number.POSITIVE_INFINITY,
    name: "Enterprise Intelligence",
    price: "Custom",
    cta: "Unlock Full Diagnosis",
    message:
      "Your estimated opportunity fits a custom enterprise intelligence conversation."
  }
];

export const pricingPlans = [
  {
    name: "Free Health Check",
    range: "< Rp5M opportunity",
    price: "Free",
    description:
      "Basic insight when the estimated opportunity is still below the paid diagnosis threshold.",
    features: ["Business issue intake", "Opportunity estimate", "Basic directional insight"]
  },
  {
    name: "Growth Diagnostic",
    range: "Rp5M-Rp10M opportunity",
    price: "$10",
    description: "Focused diagnosis for early growth issues with a compact action direction.",
    features: ["Root cause scan", "Priority issue mapping", "Recommended next actions"]
  },
  {
    name: "Strategic Review",
    range: "Rp10M-Rp50M opportunity",
    price: "$29",
    description:
      "A broader review for businesses with visible opportunity across multiple functions.",
    features: ["Cross-function diagnosis", "Impact ranking", "Strategy recommendations"]
  },
  {
    name: "Executive Analysis",
    range: "Rp50M-Rp250M opportunity",
    price: "$99",
    description:
      "Deeper executive-level analysis for higher-impact operational and strategic decisions.",
    features: ["Executive summary", "Risk and opportunity view", "Decision roadmap"]
  },
  {
    name: "Enterprise",
    range: "> Rp250M opportunity",
    price: "Custom",
    description: "Program-level intelligence for institutions, communities, and portfolio operators.",
    features: ["Custom scope", "Program analytics", "Enterprise reporting path"]
  }
];

export const benchmarkRules = {
  revenueEfficiency: {
    aboveAverageProfitRatio: 0.25,
    belowAverageProfitRatio: 0.12
  },
  profitability: {
    aboveAverageProfitRatio: 0.2,
    belowAverageProfitRatio: 0.1
  },
  operationalComplexity: {
    highCostRatio: 0.55,
    mediumCostRatio: 0.35
  }
};
