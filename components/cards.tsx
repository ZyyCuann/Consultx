import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <article className="rounded-lg border border-line bg-white p-6 shadow-sm">
      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-electric/10 text-electric">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-lg font-black text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-steel">{description}</p>
    </article>
  );
}

type PricingCardProps = {
  name: string;
  range: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export function PricingCard({
  name,
  range,
  price,
  description,
  features,
  featured = false
}: PricingCardProps) {
  return (
    <article
      className={`flex h-full flex-col rounded-lg border p-6 ${
        featured
          ? "border-electric bg-ink text-white shadow-soft"
          : "border-line bg-white text-ink shadow-sm"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-black">{name}</h3>
          <p className={`mt-2 text-sm ${featured ? "text-white/70" : "text-steel"}`}>{range}</p>
        </div>
        <p className={`text-2xl font-black ${featured ? "text-white" : "text-ink"}`}>{price}</p>
      </div>
      <p className={`mt-5 text-sm leading-6 ${featured ? "text-white/75" : "text-steel"}`}>
        {description}
      </p>
      <ul className="mt-6 grid gap-3 text-sm">
        {features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <Check
              className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? "text-electric" : "text-electric"}`}
              aria-hidden="true"
            />
            <span className={featured ? "text-white/85" : "text-steel"}>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
