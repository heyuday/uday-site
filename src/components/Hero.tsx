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
          <a href="/resume/" className="text-muted hover:text-ink transition-colors">
            resume ×2
          </a>
        </div>
      </div>
    </section>
  );
}
