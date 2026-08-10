export function BarChart({
  title,
  items
}: {
  title: string;
  items: { label: string; value: number }[];
}) {
  const max = Math.max(...items.map((item) => item.value), 1);

  return (
    <article className="rounded-lg border border-line bg-white p-5 shadow-sm">
      <h2 className="text-lg font-black text-ink">{title}</h2>
      <div className="mt-5 grid gap-4">
        {items.map((item) => (
          <div key={item.label}>
            <div className="flex items-center justify-between gap-3 text-sm">
              <span className="font-bold text-ink">{item.label}</span>
              <span className="font-black text-electric">{item.value}</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-cloud">
              <div
                className="h-2 rounded-full bg-electric"
                style={{ width: `${(item.value / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
