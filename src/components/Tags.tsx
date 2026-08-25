export default function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <li
          key={t}
          className="border-line bg-paper text-muted rounded border px-2 py-1 font-mono text-[11px] leading-none"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}
