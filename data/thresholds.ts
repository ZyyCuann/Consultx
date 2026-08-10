export const opportunityThresholds = [
  { label: "Free", min: 0, max: 5000000 },
  { label: "Growth Diagnostic", min: 5000000, max: 10000000 },
  { label: "Strategic Review", min: 10000000, max: 50000000 },
  { label: "Executive Analysis", min: 50000000, max: 250000000 },
  { label: "Enterprise", min: 250000000, max: Number.POSITIVE_INFINITY }
];

export const healthRatingThresholds = [
  { label: "Needs Attention", min: 0, max: 40 },
  { label: "Developing", min: 40, max: 70 },
  { label: "Healthy", min: 70, max: 101 }
];
