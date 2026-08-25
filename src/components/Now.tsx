import { now } from "@/content/site";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Now() {
  return (
    <Section id="now" index="03" label="now">
      <Reveal>
        <h3 className="u-display text-[clamp(1.6rem,4.6vw,2.25rem)]">{now.heading}</h3>
        <div className="text-ink mt-5 max-w-2xl space-y-4 text-[16px] leading-relaxed sm:text-[17px]">
          {now.body.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
