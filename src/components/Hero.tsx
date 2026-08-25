import { hero, identity } from "@/content/site";
import SteeringStrip from "./SteeringStrip";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden="true" className="u-grid-bg absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5 pt-14 pb-14 sm:px-8 sm:pt-20 sm:pb-20">
        <p className="u-label">Ithaca, NY · open to 2027 roles</p>

        <h1 className="u-display mt-5 text-[clamp(2.75rem,11vw,7rem)]">
          {identity.name}
        </h1>

        <div className="border-line bg-panel mt-5 inline-flex items-center gap-2.5 rounded-full border py-1.5 pr-4 pl-2.5">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="text-signal h-5 w-5 shrink-0"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <circle
              cx="12"
              cy="12"
              r="6.4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.5"
            />
            <text
              x="12"
              y="15.6"
              textAnchor="middle"
              fontSize="10.5"
              fontFamily="var(--font-display)"
              fontWeight="700"
              fill="currentColor"
            >
              C
            </text>
          </svg>
          <span className="text-ink font-mono text-[12px] font-medium sm:text-[13px]">
            Cornell University
          </span>
          <span aria-hidden="true" className="text-muted">
            ·
          </span>
          <span className="text-muted font-mono text-[12px] sm:text-[13px]">
            graduating December 2026
          </span>
        </div>

        <p className="text-ink mt-6 max-w-2xl text-[clamp(1.125rem,3.2vw,1.5rem)] leading-snug">
          {hero.positioning}
        </p>

        <ul className="text-muted mt-7 flex flex-col gap-1.5 font-mono text-[13px] sm:flex-row sm:flex-wrap sm:gap-x-5">
          {hero.facts.map((f) => (
            <li key={f} className="flex gap-2">
              <span aria-hidden="true" className="text-signal">
                ·
              </span>
              {f}
            </li>
          ))}
        </ul>

        <p className="border-signal text-muted mt-8 max-w-2xl border-l-2 pl-4 text-[15px] leading-relaxed sm:text-base">
          {hero.thesis}
        </p>

        <div className="mt-10 max-w-3xl">
          <SteeringStrip />
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[13px]">
          <a
            href={`mailto:${identity.email}`}
            className="border-ink text-ink hover:border-signal hover:text-signal border-b pb-0.5 transition-colors"
          >
            {identity.email}
          </a>
          <a
            href={identity.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-ink transition-colors"
          >
            github ↗
          </a>
          <a
            href={identity.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-ink transition-colors"
          >
            linkedin ↗
          </a>
          <a
            href={identity.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-ink transition-colors"
          >
            resume ↗
          </a>
        </div>
      </div>
    </section>
  );
}
