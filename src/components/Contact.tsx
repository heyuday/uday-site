import { identity } from "@/content/site";
import Section from "./Section";
import Reveal from "./Reveal";

const LINKS = [
  { label: "email", value: identity.email, href: `mailto:${identity.email}` },
  { label: "github", value: "github.com/heyuday", href: identity.github },
  { label: "linkedin", value: "linkedin.com/in/heyuday", href: identity.linkedin },
  { label: "resume", value: "two versions", href: "/resume/" },
];

export default function Contact() {
  return (
    <Section id="contact" index="07" label="contact">
      <Reveal>
        <p className="text-ink max-w-2xl text-[clamp(1.25rem,3.5vw,1.75rem)] leading-snug">
          If you&rsquo;re working on steering, evals, interpretability, or oversight —
          or you want an engineer who takes those seriously on your team — email me.
        </p>
        <ul className="divide-line border-line mt-8 max-w-lg divide-y border-y">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                {...(l.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex items-baseline justify-between gap-4 py-3.5 font-mono text-[13px]"
              >
                <span className="u-label">{l.label}</span>
                <span className="text-ink group-hover:text-signal transition-colors">
                  {l.value} <span aria-hidden="true">→</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
