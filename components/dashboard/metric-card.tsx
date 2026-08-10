export function MetricCard({
  label,
  value,
  detail
}: {
  label: string;
  value: string;
  detail?: string;
}) {
  return (
    <article className="rounded-lg border border-line bg-white p-5 shadow-sm">
      <p className="text-xs font-black uppercase text-steel">{label}</p>
      <p className="mt-3 text-3xl font-black text-ink">{value}</p>
      {detail ? <p className="mt-2 text-sm leading-6 text-steel">{detail}</p> : null}
    </article>
  );
}
