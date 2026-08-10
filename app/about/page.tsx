import { FeatureCard } from "@/components/cards";
import { Section } from "@/components/section";
import { overviewCards } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-electric">
              About ConsultX
            </p>
            <h1 className="mt-5 text-5xl font-black tracking-normal text-ink sm:text-6xl">
              Structured business diagnosis for people who cannot wait for expensive consulting.
            </h1>
          </div>
          <p className="text-lg leading-8 text-steel">
            ConsultX is an AI-assisted business intelligence and consulting platform for
            UMKM, founders, students, startups, and growing businesses. It exists because
            many teams know something is wrong, but cannot afford a traditional consulting
            process just to find out where the real issue starts.
          </p>
        </div>
      </section>

      <Section
        eyebrow="Why it exists"
        title="Consulting insight should be easier to access before decisions get expensive."
        description="For many small and growing businesses, strategic advice arrives too late or costs too much. ConsultX makes the first layer of structured diagnosis more accessible, then routes users to deeper analysis only when the estimated opportunity justifies it."
        className="bg-cloud"
      >
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {overviewCards.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
      </Section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div className="rounded-lg border border-line bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-ink">Not just a chatbot</h2>
            <p className="mt-4 text-sm leading-6 text-steel">
              ConsultX is designed around structured intake, opportunity estimation, root-cause
              diagnosis, and strategic recommendation logic. The goal is not casual answers,
              but clearer decision support.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-ink">Built for accessible advisory</h2>
            <p className="mt-4 text-sm leading-6 text-steel">
              The platform lowers the starting cost of diagnosis for UMKM and early ventures,
              while still supporting deeper paid analysis when the business case is stronger.
            </p>
          </div>
          <div className="rounded-lg border border-line bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-ink">Client responsibility remains</h2>
            <p className="mt-4 text-sm leading-6 text-steel">
              ConsultX provides advisory insight and decision support. Final decisions,
              implementation, risk acceptance, and business outcomes remain the responsibility
              of the client.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
