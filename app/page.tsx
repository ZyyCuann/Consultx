import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FeatureCard, PricingCard } from "@/components/cards";
import { FinalCta } from "@/components/cta";
import { Section } from "@/components/section";
import { caseExamples } from "@/data/case-examples";
import {
  audiences,
  capabilities,
  diagnosisFlow,
  overviewCards,
  pricingPlans,
  statHighlights
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="premium-grid px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-electric">
              Autonomous Business Intelligence
            </p>
            <h1 className="mt-5 text-5xl font-black tracking-normal text-ink sm:text-6xl lg:text-7xl">
              Find the hidden cost inside your business.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
              ConsultX helps businesses identify potential losses, diagnose root causes,
              and turn business problems into structured strategic actions.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/check"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-black text-white transition hover:bg-electric"
              >
                Start Free Health Check
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-line bg-white px-5 py-3 text-sm font-black text-ink transition hover:border-ink"
              >
                Explore Services
              </Link>
            </div>
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-3">
              {statHighlights.map((item) => (
                <div key={item.label} className="border-l border-line pl-4">
                  <p className="text-2xl font-black text-ink">{item.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase text-steel">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-line bg-white p-4 shadow-soft">
            <div className="rounded-md border border-line bg-cloud p-4">
              <div className="grid gap-3">
                {diagnosisFlow.map((step, index) => (
                  <div
                    key={step}
                    className={`flex items-center justify-between rounded-md border px-4 py-3 ${
                      index === 0 || index === diagnosisFlow.length - 1
                        ? "border-ink bg-ink text-white"
                        : "border-line bg-white text-ink"
                    }`}
                  >
                    <span className="text-sm font-bold">{step}</span>
                    {index < diagnosisFlow.length - 1 ? (
                      <ArrowRight className="h-4 w-4 text-electric" aria-hidden="true" />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Free Health Check"
        title="Start free. Pay only when the opportunity is worth solving."
        description="If the estimated opportunity is below Rp5 million, ConsultX provides basic insight for free. If the opportunity is higher, users can unlock deeper diagnosis based on potential impact."
      >
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} {...plan} featured={index === 1} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Capabilities"
        title="Diagnosis across the functions that shape business performance."
      >
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {capabilities.map((capability) => (
            <FeatureCard key={capability.title} {...capability} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="How ConsultX works"
        title="From business challenge to strategic recommendation."
      >
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {["Business Challenge", "Diagnosis", "Priority Assessment", "Strategic Recommendation"].map(
            (step, index) => (
              <article key={step} className="rounded-lg border border-line bg-white p-6 shadow-sm">
                <p className="text-sm font-black text-electric">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-black text-ink">{step}</h3>
              </article>
            )
          )}
        </div>
      </Section>

      <Section
        eyebrow="Why ConsultX"
        title="Structured diagnosis should be accessible before decisions become expensive."
        description="Traditional consulting is often inaccessible for small businesses. ConsultX helps make structured diagnosis available to more founders and UMKM through a clearer business intelligence workflow."
        className="bg-cloud"
      >
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Accessible",
              description:
                "Start with a free health check and only move deeper when the estimated opportunity is worth solving."
            },
            {
              title: "Structured",
              description:
                "Every diagnosis is organized around business profile, financial signals, pain points, and cross-functional focus areas."
            },
            {
              title: "Action-Oriented",
              description:
                "Outputs are designed to help users prioritize what to fix, what to investigate, and what to avoid overreacting to."
            }
          ].map((item) => (
            <article key={item.title} className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <h3 className="text-xl font-black text-ink">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-steel">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Differentiators"
        title="Built between traditional consulting and generic chat tools."
      >
        <div className="mt-10 overflow-hidden rounded-lg border border-line bg-white shadow-sm">
          <div className="grid grid-cols-4 bg-ink px-4 py-3 text-sm font-black text-white">
            <span>Dimension</span>
            <span>Traditional Consulting</span>
            <span>ConsultX</span>
            <span>ChatGPT</span>
          </div>
          {[
            ["Accessibility", "Low for UMKM", "High", "High"],
            ["Speed", "Slow to start", "Fast initial diagnosis", "Fast"],
            ["Business Structure", "Strong", "Structured and repeatable", "Depends on prompt"],
            ["Actionability", "High but costly", "High and guided", "Variable"],
            ["Cost", "High", "Impact-based entry", "Low"],
            ["Consistency", "Depends on consultant", "Standardized workflow", "Variable"]
          ].map((row) => (
            <div key={row[0]} className="grid grid-cols-4 border-t border-line px-4 py-4 text-sm text-steel">
              {row.map((cell, index) => (
                <span key={cell} className={index === 0 || index === 2 ? "font-black text-ink" : ""}>
                  {cell}
                </span>
              ))}
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Designed For" title="A practical intelligence layer for business builders." className="bg-cloud">
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {["UMKM", "Founders", "Students", "Growing Businesses", "Incubators", "Universities"].map((item) => (
            <article key={item} className="rounded-lg border border-line bg-white p-5 shadow-sm">
              <h3 className="text-lg font-black text-ink">{item}</h3>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Who it helps" title="Built for practical decisions, not boardroom theater." className="bg-cloud">
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {audiences.map((audience) => (
            <FeatureCard key={audience.title} {...audience} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Example diagnoses"
        title="A clearer view of what is leaking value."
      >
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {caseExamples.map((example) => (
            <article key={example.business} className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase text-electric">{example.business}</p>
              <div className="mt-6 grid gap-5 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-black uppercase text-steel">Detected</p>
                  <p className="mt-2 text-base font-black text-ink">{example.detected}</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-steel">Potential Opportunity</p>
                  <p className="mt-2 text-base font-black text-ink">{example.potentialOpportunity}</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-steel">Recommended Package</p>
                  <p className="mt-2 text-base font-black text-ink">{example.recommendedPackage}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Example output"
        title="A diagnosis that connects problems to commercial impact."
      >
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg border border-line bg-ink p-6 text-white shadow-soft">
            <p className="text-sm font-bold uppercase text-electric">Business</p>
            <h3 className="mt-2 text-3xl font-black">Retail UMKM</h3>
            <div className="mt-8 border-t border-white/15 pt-6">
              <p className="text-sm font-bold uppercase text-white/60">Potential Opportunity</p>
              <p className="mt-2 text-4xl font-black">Rp8.5M/year</p>
            </div>
          </div>
          <div className="rounded-lg border border-line bg-white p-6 shadow-sm">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-black uppercase text-ink">Detected Issues</h3>
                <ul className="mt-4 grid gap-3 text-sm text-steel">
                  <li>Inventory waste</li>
                  <li>Low repeat purchase</li>
                  <li>Pricing inconsistency</li>
                </ul>
              </div>
              <div className="rounded-md bg-cloud p-5">
                <h3 className="text-sm font-black uppercase text-ink">Recommended Package</h3>
                <p className="mt-4 text-2xl font-black text-ink">Growth Diagnostic</p>
                <p className="mt-1 text-lg font-black text-electric">$10</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {overviewCards.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
