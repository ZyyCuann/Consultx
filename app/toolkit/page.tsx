import { Download } from "lucide-react";
import { toolkitResources } from "@/data/checklists";

export default function ToolkitPage() {
  return (
    <section className="bg-cloud px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-electric">
          Founder Toolkit
        </p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-normal text-ink sm:text-6xl">
          Free checklists for sharper business decisions.
        </h1>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {toolkitResources.map((resource) => (
            <article key={resource.title} className="rounded-lg border border-line bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black text-ink">{resource.title}</h2>
              <p className="mt-4 text-sm leading-6 text-steel">{resource.description}</p>
              <button className="mt-6 inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2 text-sm font-black text-white transition hover:bg-electric">
                Download
                <Download className="h-4 w-4" aria-hidden="true" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
