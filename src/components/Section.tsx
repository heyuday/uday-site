/** Shared section chrome: a mono index label in the left rail, content right. */
export default function Section({
  id,
  index,
  label,
  children,
  className = "",
}: {
  id: string;
  index: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-label`}
      className={`border-line border-t py-14 sm:py-20 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 md:grid-cols-[7rem_minmax(0,1fr)] md:gap-10 lg:grid-cols-[10rem_minmax(0,1fr)]">
          <div className="md:sticky md:top-20 md:self-start">
            <h2 id={`${id}-label`} className="u-label flex items-baseline gap-2">
              <span className="text-signal">{index}</span>
              <span>{label}</span>
            </h2>
          </div>
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </section>
  );
}
