import { knowledgeFrameworks } from "@/data/knowledge";

export default function KnowledgePage() {
  const categories = Array.from(new Set(knowledgeFrameworks.map((item) => item.category)));

  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-electric">
          Knowledge Base
        </p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-normal text-ink sm:text-6xl">
          Business frameworks for better diagnosis.
        </h1>
        <div className="mt-12 grid gap-8">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="text-2xl font-black text-ink">{category}</h2>
              <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {knowledgeFrameworks
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <article key={item.title} className="rounded-lg border border-line bg-white p-6 shadow-sm">
                      <h3 className="text-xl font-black text-ink">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-steel">{item.description}</p>
                    </article>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
