import { projects, type Project } from "@/content/projects";
import { sideProjects } from "@/content/side-projects";
import Section from "./Section";
import Reveal from "./Reveal";
import Tags from "./Tags";

function Meta({ p }: { p: Project }) {
  return (
    <div className="text-muted mt-1.5 flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono text-[12px]">
      <span className="text-ink">{p.role}</span>
      <span aria-hidden="true">·</span>
      <span>{p.org}</span>
      <span aria-hidden="true">·</span>
      <span>{p.dates}</span>
    </div>
  );
}

function Links({ p }: { p: Project }) {
  if (!p.links?.length) return null;
  return (
    <ul className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
      {p.links.map((l) => (
        <li key={l.href}>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className={
              l.primary
                ? "bg-signal text-paper inline-flex items-center gap-1.5 rounded-md px-3.5 py-2 font-mono text-[13px] transition-opacity hover:opacity-88"
                : "text-muted decoration-line hover:text-ink hover:decoration-signal font-mono text-[12px] underline underline-offset-4 transition-colors"
            }
          >
            {l.label}
            <span aria-hidden="true">↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function Flagship({ p }: { p: Project }) {
  return (
    <article className="border-ink/15 bg-panel relative rounded-xl border p-5 shadow-[0_1px_0_rgba(25,24,23,0.04)] sm:p-7">
      <span className="u-label bg-paper text-signal absolute -top-2.5 left-5 px-2 sm:left-7">
        flagship
      </span>
      <h3 className="u-display mt-1 text-[clamp(1.75rem,5vw,2.5rem)]">{p.title}</h3>
      {p.note && <p className="text-ink mt-1 text-[15px]">{p.note}</p>}
      <Meta p={p} />
      <div className="text-ink mt-4 max-w-2xl space-y-3 text-[15px] leading-relaxed sm:text-[16px]">
        {p.body.map((b) => (
          <p key={b.slice(0, 24)}>{b}</p>
        ))}
      </div>
      <Links p={p} />
      <div className="mt-5">
        <Tags items={p.tags} />
      </div>
    </article>
  );
}

function Card({ p }: { p: Project }) {
  const compact = p.weight === "compact";
  return (
    <article
      className={`border-line border-t ${compact ? "pt-5" : "pt-6"} first:border-t-0 first:pt-0`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3
          className={`u-display ${compact ? "text-xl" : "text-2xl sm:text-[1.75rem]"}`}
        >
          {p.title}
        </h3>
      </div>
      {p.note && <p className="text-muted mt-1 text-[14px]">{p.note}</p>}
      <Meta p={p} />
      <div
        className={`text-ink mt-3 max-w-2xl space-y-3 leading-relaxed ${
          compact ? "text-[14px]" : "text-[15px] sm:text-[16px]"
        }`}
      >
        {p.body.map((b) => (
          <p key={b.slice(0, 24)}>{b}</p>
        ))}
      </div>
      <Links p={p} />
      <div className="mt-4">
        <Tags items={p.tags} />
      </div>
    </article>
  );
}

export default function Work() {
  const [flagship, ...rest] = projects;

  return (
    <Section id="work" index="02" label="work & research">
      <Reveal>
        <Flagship p={flagship} />
      </Reveal>

      <div className="mt-12 space-y-10">
        {rest.map((p, i) => (
          <Reveal key={p.slug} as="article" delay={Math.min(i, 3) * 50}>
            <Card p={p} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <h3 className="u-label">Selected side projects</h3>
        <ul className="divide-line border-line mt-4 divide-y border-y">
          {sideProjects.map((s) => (
            <li key={s.title} className="py-4">
              <h4 className="text-ink text-[15px] font-medium">{s.title}</h4>
              <p className="text-muted mt-1 max-w-2xl text-[14px] leading-relaxed">
                {s.blurb}
              </p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
