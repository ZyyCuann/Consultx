import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { insightPosts } from "@/data/insights";

export default function InsightsPage() {
  return (
    <>
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-electric">
              Insights
            </p>
            <h1 className="mt-5 text-5xl font-black tracking-normal text-ink sm:text-6xl">
              Business intelligence for better decisions.
            </h1>
            <p className="mt-6 text-lg leading-8 text-steel">
              Practical thinking on diagnosis, growth, operations, and decision quality for
              UMKM, founders, students, startups, and growing businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cloud px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {insightPosts.map((post) => (
            <article
              key={post.title}
              className="flex min-h-72 flex-col rounded-lg border border-line bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="rounded-md bg-electric/10 px-3 py-2 text-xs font-black uppercase text-electric">
                  {post.category}
                </p>
                <p className="text-xs font-bold text-steel">{post.readTime}</p>
              </div>
              <h2 className="mt-6 text-2xl font-black tracking-normal text-ink">{post.title}</h2>
              <p className="mt-4 flex-1 text-sm leading-6 text-steel">{post.excerpt}</p>
              <Link
                href={`/insights/${post.slug}`}
                className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-black text-ink transition hover:text-electric"
              >
                Read Insight
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
