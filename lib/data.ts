import {
  BarChart3,
  Building2,
  CircleDollarSign,
  ClipboardCheck,
  GraduationCap,
  LineChart,
  Megaphone,
  Network,
  Rocket,
  ShieldCheck,
  Store,
  Workflow
} from "lucide-react";
export { pricingPlans, pricingThresholds } from "@/data/pricing";

export const capabilities = [
  {
    title: "Finance",
    icon: CircleDollarSign,
    description: "Find pricing gaps, leakage, cash-flow pressure, and margin opportunities."
  },
  {
    title: "Marketing",
    icon: Megaphone,
    description: "Identify weak conversion, low retention, channel waste, and growth bottlenecks."
  },
  {
    title: "Operations",
    icon: Workflow,
    description: "Trace process friction, inventory waste, fulfillment delays, and capacity constraints."
  },
  {
    title: "Technology",
    icon: Network,
    description: "Map where tools, automation, and data workflows can reduce repeated manual work."
  },
  {
    title: "Risk",
    icon: ShieldCheck,
    description: "Expose operating risks, dependency risks, and decisions that need more evidence."
  }
];

export const audiences = [
  {
    title: "UMKM",
    icon: Store,
    description: "Affordable diagnosis before spending on fixes, ads, tools, or new hires."
  },
  {
    title: "Students",
    icon: GraduationCap,
    description: "Structured business analysis for projects, competitions, and early ventures."
  },
  {
    title: "Startup Founders",
    icon: Rocket,
    description: "Fast clarity on growth, unit economics, operations, and strategic tradeoffs."
  },
  {
    title: "Growing Businesses",
    icon: LineChart,
    description: "Prioritize the issues with the highest measurable impact before scaling."
  },
  {
    title: "Enterprise Programs",
    icon: Building2,
    description: "Support many participants with consistent diagnosis and program intelligence."
  }
];

export const updatePath = [
  {
    phase: "Phase 1",
    title: "Free Health Check",
    description: "A public entry point for estimating opportunity and routing users to the right depth."
  },
  {
    phase: "Phase 2",
    title: "Multi-Division Diagnosis",
    description: "More structured diagnosis across finance, marketing, operations, technology, and risk."
  },
  {
    phase: "Phase 3",
    title: "Admin Pricing Control",
    description: "Program owners can adapt thresholds, packages, and pricing logic for their audience."
  },
  {
    phase: "Phase 4",
    title: "Client Dashboard",
    description: "Clients can track findings, recommendations, package history, and action status."
  },
  {
    phase: "Phase 5",
    title: "Enterprise Intelligence Dashboard",
    description: "Portfolio-level insight for institutions, incubators, communities, and development programs."
  }
];

export const enterpriseTargets = [
  "Universities",
  "Incubators",
  "UMKM development programs",
  "Startup communities",
  "Government and business programs"
];

export const statHighlights = [
  { label: "Entry point", value: "Free" },
  { label: "Paid threshold", value: "Rp5M+" },
  { label: "Diagnosis areas", value: "5" }
];

export const diagnosisFlow = [
  "Business Problem",
  "Opportunity Estimate",
  "Finance",
  "Marketing",
  "Operations",
  "Technology",
  "Risk",
  "Strategic Recommendation"
];

export const overviewCards = [
  {
    title: "Estimate before action",
    description: "ConsultX starts by estimating whether an issue is large enough to justify deeper work.",
    icon: BarChart3
  },
  {
    title: "Route by impact",
    description: "Pricing is connected to the estimated opportunity, keeping small cases accessible.",
    icon: Workflow
  },
  {
    title: "Turn issues into strategy",
    description: "Outputs are structured into root causes, priorities, and practical next actions.",
    icon: LineChart
  }
];

export const industries = ["Retail", "F&B", "Services", "Startup", "Education", "Other"];

export const businessStages = ["Idea", "Early Sales", "Growing", "Established"];

export const painPoints = [
  {
    label: "Low sales",
    focusArea: "Marketing",
    insight: "Demand generation, conversion, and offer clarity need review."
  },
  {
    label: "Low profit",
    focusArea: "Finance",
    insight: "Margin, pricing, and cost structure should be examined."
  },
  {
    label: "High cost",
    focusArea: "Operations",
    insight: "Operating costs may be reducing the value captured from revenue."
  },
  {
    label: "Inventory problem",
    focusArea: "Operations",
    insight: "Stock planning, waste, and turnover patterns need diagnosis."
  },
  {
    label: "Marketing not working",
    focusArea: "Marketing",
    insight: "Channel spend, targeting, and repeat purchase quality need review."
  },
  {
    label: "Operations bottleneck",
    focusArea: "Operations",
    insight: "Process flow, capacity, and handoff delays may be limiting growth."
  },
  {
    label: "Customer retention",
    focusArea: "Marketing",
    insight: "Retention, repeat purchase, and customer experience need attention."
  },
  {
    label: "Digitalization problem",
    focusArea: "Technology",
    insight: "Tools, automation, and data workflows may need a clearer roadmap."
  }
];

export const insightPosts = [
  {
    title: "Why Most UMKM Scale Too Early",
    category: "Growth",
    excerpt:
      "Scaling before diagnosing margins, operations, and repeat demand can amplify hidden losses.",
    readTime: "4 min read"
  },
  {
    title: "The Hidden Cost of Poor Inventory Planning",
    category: "Operations",
    excerpt:
      "Inventory issues rarely stay in the warehouse. They affect cash flow, pricing, and customer trust.",
    readTime: "5 min read"
  },
  {
    title: "When Marketing Is Not the Real Problem",
    category: "Strategy",
    excerpt:
      "Low sales can come from pricing, fulfillment, positioning, or retention, not only campaign quality.",
    readTime: "3 min read"
  },
  {
    title: "How Founders Can Avoid Decision Bias",
    category: "Leadership",
    excerpt:
      "Structured diagnosis helps founders separate urgent symptoms from the decisions that matter most.",
    readTime: "4 min read"
  },
  {
    title: "Why Business Diagnosis Should Come Before Strategy",
    category: "Intelligence",
    excerpt:
      "A strategy built on unclear causes is expensive guesswork. Diagnosis gives action a sharper target.",
    readTime: "5 min read"
  }
];

export const outcomeServices = [
  {
    title: "Improve Profitability",
    problem: "Revenue exists, but too little becomes profit.",
    approach: "Map margin leakage, pricing inconsistency, cost drivers, and repeat-purchase quality.",
    perspectives: ["Finance", "Marketing", "Operations", "Risk"],
    icon: CircleDollarSign
  },
  {
    title: "Reduce Operational Costs",
    problem: "Costs keep rising without a clear view of where waste begins.",
    approach: "Trace workflow friction, inventory waste, manual repetition, and capacity bottlenecks.",
    perspectives: ["Operations", "Finance", "Technology", "Risk"],
    icon: Workflow
  },
  {
    title: "Prepare for Expansion",
    problem: "The business wants to grow, but the model may not be ready to scale.",
    approach: "Review growth readiness across margin, process, demand, technology, and risk exposure.",
    perspectives: ["Finance", "Marketing", "Operations", "Technology", "Risk"],
    icon: Rocket
  },
  {
    title: "Improve Customer Retention",
    problem: "New customers arrive, but repeat purchase and loyalty remain weak.",
    approach: "Diagnose offer fit, customer experience, retention loops, and post-purchase signals.",
    perspectives: ["Marketing", "Operations", "Technology"],
    icon: Megaphone
  },
  {
    title: "Digital Transformation",
    problem: "Tools are being used, but the business still feels manual and fragmented.",
    approach: "Identify which workflows should be automated, tracked, or simplified first.",
    perspectives: ["Technology", "Operations", "Finance", "Risk"],
    icon: Network
  },
  {
    title: "Business Health Check",
    problem: "The team knows something is wrong but needs a structured first diagnosis.",
    approach: "Estimate potential opportunity and route the business to free insight or paid diagnosis.",
    perspectives: ["Finance", "Marketing", "Operations", "Technology", "Risk"],
    icon: ClipboardCheck
  }
];
