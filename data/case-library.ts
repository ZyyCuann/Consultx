export const caseLibrary = [
  ["Retail", "Inventory Leakage", "Stock movement was not controlled against actual demand.", "Introduce stock review cadence and margin-based SKU priorities.", "Lower waste and better cash visibility."],
  ["F&B", "Low Customer Retention", "First-time buyers were not converted into repeat customers.", "Map customer journey and introduce return incentives.", "Higher repeat order rate."],
  ["Startup", "Burn Rate Problem", "Spend increased before retention and unit economics were stable.", "Review cost base and pause weak growth channels.", "Longer runway and clearer growth focus."],
  ["Services", "Low Conversion Rate", "Offer clarity and qualification criteria were weak.", "Repackage services and tighten lead qualification.", "Better conversion quality."],
  ["Education", "Enrollment Drop", "Acquisition channels were measured by volume, not quality.", "Segment channels by conversion and completion quality.", "More efficient enrollment spend."],
  ["Retail", "Pricing Inconsistency", "Discount decisions were made without margin rules.", "Create pricing bands and discount approval rules.", "More consistent gross margin."],
  ["F&B", "Menu Margin Pressure", "Ingredient costs changed faster than menu decisions.", "Track menu contribution margin monthly.", "Improved menu profitability."],
  ["Services", "Founder Bottleneck", "Delivery depended on founder review for every decision.", "Document delivery workflow and define checkpoints.", "Reduced delivery delays."],
  ["Startup", "Weak Activation", "Users signed up but did not reach the first value moment.", "Map onboarding and remove activation friction.", "Higher activation rate."],
  ["Consumer Goods", "Slow-Moving SKUs", "Assortment expanded without velocity discipline.", "Rank SKUs by margin, velocity, and channel fit.", "Cleaner assortment decisions."],
  ["Retail", "Low Repeat Purchase", "Customer data was not used after first transaction.", "Create repeat purchase segments and offers.", "Improved customer lifetime value."],
  ["F&B", "Operational Waste", "Prep and purchasing decisions were not tied to demand.", "Forecast demand and review waste drivers weekly.", "Lower operating waste."],
  ["Education", "Program Completion Issue", "Students dropped before clear outcome milestones.", "Map completion journey and intervention triggers.", "Better completion rates."],
  ["Services", "Scope Creep", "Custom work was added without price or timeline adjustment.", "Define scope boundaries and change request rules.", "Improved project margin."],
  ["Startup", "Tool Fragmentation", "Tools were added before workflows were defined.", "Map core workflows before automation decisions.", "Simpler operating system."]
].map(([industry, challenge, rootCause, recommendation, expectedOutcome]) => ({
  industry,
  challenge,
  rootCause,
  recommendation,
  expectedOutcome,
  label: "Illustrative Example"
}));
