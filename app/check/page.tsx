import { HealthCheckForm } from "@/components/health-check-form";

export default function CheckPage() {
  return (
    <>
      <section className="premium-grid px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-electric">
              Free Business Health Check
            </p>
            <h1 className="mt-5 text-5xl font-black tracking-normal text-ink sm:text-6xl">
              Estimate what your business might be losing.
            </h1>
            <p className="mt-6 text-lg leading-8 text-steel">
              Answer a few questions about your business profile, financial snapshot, and
              current challenge. ConsultX will estimate the opportunity and recommend the
              right diagnosis depth.
            </p>
          </div>
        </div>
      </section>
      <section className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <HealthCheckForm />
        </div>
      </section>
    </>
  );
}
