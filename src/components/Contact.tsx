import { identity } from "@/content/site";
import Section from "./Section";
import Reveal from "./Reveal";

const LINKS = [
  { label: "email", value: identity.email, href: `mailto:${identity.email}` },
  { label: "github", value: "github.com/heyuday", href: identity.github },
  { label: "linkedin", value: "linkedin.com/in/heyuday", href: identity.linkedin },
  { label: "resume", value: "PDF", href: identity.resume },
];

export default function Contact() {
  return (
    <Section id="contact" index="05" label="contact">
      <Reveal>
        <ul className="divide-line border-line max-w-lg divide-y border-y">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                {...(l.href.startsWith("http") || l.href.endsWith(".pdf")
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
