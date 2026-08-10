import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { insightPosts } from "@/data/insights";

export function generateStaticParams() {
  return insightPosts.map((post) => ({ slug: post.slug }));
}

export default function InsightDetailPage({ params }: { params: { slug: string } }) {
  const post = insightPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  return (
    <article className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-sm font-black text-steel transition hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Insights
        </Link>
        <p className="mt-10 text-sm font-extrabold uppercase tracking-[0.14em] text-electric">
          {post.category} · {post.readTime}
        </p>
        <h1 className="mt-5 text-5xl font-black tracking-normal text-ink sm:text-6xl">
          {post.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-steel">{post.excerpt}</p>
        <div className="mt-10 rounded-lg border border-line bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black text-ink">ConsultX perspective</h2>
          <p className="mt-4 text-sm leading-7 text-steel">
            This insight is a practical placeholder for the ConsultX intelligence system.
            The final version can connect this article to diagnosis patterns, business
            cases, and recommended actions from the future knowledge base.
          </p>
        </div>
      </div>
    </article>
  );
}
