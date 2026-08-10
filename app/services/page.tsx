import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PricingCard } from "@/components/cards";
import { Section } from "@/components/section";
import { outcomeServices, pricingPlans } from "@/lib/data";

export default function ServicesPage() {
  return (
    <>
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-electric">
              Services
            </p>
            <h1 className="mt-5 text-5xl font-black tracking-normal text-ink sm:text-6xl">
              Business diagnosis priced by the size of the opportunity.
            </h1>
            <p className="mt-6 text-lg leading-8 text-steel">
              ConsultX begins with a free health check, estimates the potential opportunity
              or loss, then recommends a diagnosis tier only when the impact is worth deeper
              analysis.
            </p>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Outcomes"
        title="What do you want to solve?"
        description="Start with the business outcome, then ConsultX brings the right perspectives into the diagnosis."
        className="bg-cloud"
      >
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {outcomeServices.map((service) => (
            <article key={service.title} className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-electric/10 text-electric">
                <service.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-xl font-black text-ink">{service.title}</h2>
              <div className="mt-5 grid gap-4">
                <div>
                  <p className="text-xs font-black uppercase text-steel">Problem statement</p>
                  <p className="mt-2 text-sm leading-6 text-ink">{service.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-steel">ConsultX approach</p>
                  <p className="mt-2 text-sm leading-6 text-steel">{service.approach}</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.perspectives.map((perspective) => (
                  <span
                    key={perspective}
                    className="rounded-md border border-line bg-cloud px-3 py-2 text-xs font-black text-ink"
                  >
                    {perspective}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Pricing"
        title="Choose depth based on estimated opportunity."
        description="Plans are designed to keep small cases accessible while creating room for deeper analysis when the business impact is larger."
      >
        <div id="free-check" className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} {...plan} featured={index === 1} />
          ))}
        </div>
      </Section>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-electric">
              How it works
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-normal text-ink sm:text-4xl">
              The free check is not a teaser. It is the routing layer.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Submit the business issue and context.",
              "ConsultX estimates the potential opportunity or loss.",
              "The user receives either free basic insight or a paid diagnosis recommendation."
            ].map((item, index) => (
              <div key={item} className="rounded-lg border border-line bg-white p-6 shadow-sm">
                <p className="text-sm font-black text-electric">0{index + 1}</p>
                <p className="mt-4 text-base font-bold leading-7 text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ink px-5 py-16 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-black">Ready to estimate the hidden cost?</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Start with the free health check before selecting any paid package.
            </p>
          </div>
          <Link
            href="/check"
            className="inline-flex w-fit items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-black text-ink transition hover:bg-electric hover:text-white"
          >
            Start Free Check
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
