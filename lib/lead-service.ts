export type LeadSubmission = {
  id: string;
  name: string;
  email: string;
  businessName: string;
  industry: string;
  businessStage: string;
  revenue: number;
  profit: number;
  marketingSpend: number;
  operationalCost: number;
  painPoints: string[];
  complexityScore: number;
  opportunityEstimate: number;
  recommendedTier: string;
  submissionDate: string;
};

const STORAGE_KEY = "consultx.leads";

export function saveLeadSubmission(submission: Omit<LeadSubmission, "id" | "submissionDate">) {
  if (typeof window === "undefined") return null;

  const lead: LeadSubmission = {
    ...submission,
    id: crypto.randomUUID(),
    submissionDate: new Date().toISOString()
  };

  const existing = getLeadSubmissions();
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify([lead, ...existing]));
  return lead;
}

export function getLeadSubmissions(): LeadSubmission[] {
  if (typeof window === "undefined") return mockLeadSubmissions;

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return mockLeadSubmissions;

  try {
    return JSON.parse(raw) as LeadSubmission[];
  } catch {
    return mockLeadSubmissions;
  }
}

export const mockLeadSubmissions: LeadSubmission[] = [
  {
    id: "mock-1",
    name: "Ayu Pratama",
    email: "ayu@example.com",
    businessName: "Ayu Retail",
    industry: "Retail",
    businessStage: "Growing",
    revenue: 28000000,
    profit: 6500000,
    marketingSpend: 2500000,
    operationalCost: 14000000,
    painPoints: ["Inventory problem", "Low profit"],
    complexityScore: 58,
    opportunityEstimate: 8400000,
    recommendedTier: "Growth Diagnostic",
    submissionDate: "2026-05-25T09:00:00.000Z"
  },
  {
    id: "mock-2",
    name: "Bima Santoso",
    email: "bima@example.com",
    businessName: "Kopi Rute",
    industry: "F&B",
    businessStage: "Established",
    revenue: 52000000,
    profit: 9000000,
    marketingSpend: 5500000,
    operationalCost: 30000000,
    painPoints: ["Customer retention", "High cost"],
    complexityScore: 71,
    opportunityEstimate: 36000000,
    recommendedTier: "Strategic Review",
    submissionDate: "2026-05-27T11:30:00.000Z"
  },
  {
    id: "mock-3",
    name: "Citra Dewi",
    email: "citra@example.com",
    businessName: "Citra Studio",
    industry: "Services",
    businessStage: "Early Sales",
    revenue: 17000000,
    profit: 4200000,
    marketingSpend: 1200000,
    operationalCost: 7800000,
    painPoints: ["Operations bottleneck"],
    complexityScore: 43,
    opportunityEstimate: 9360000,
    recommendedTier: "Growth Diagnostic",
    submissionDate: "2026-05-29T15:45:00.000Z"
  }
];
