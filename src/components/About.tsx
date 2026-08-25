import Image from "next/image";
import { about, portrait } from "@/content/site";
import Section from "./Section";
import Reveal from "./Reveal";

export default function About() {
  return (
    <Section id="about" index="01" label="about">
      <Reveal className="grid gap-8 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:items-start md:gap-10">
        <div className="text-ink space-y-4 text-[16px] leading-relaxed sm:text-[17px]">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <figure className="m-0">
          <div className="border-line bg-panel relative aspect-[4/3] w-full overflow-hidden rounded-lg border">
            <Image
              src={portrait.src}
              alt={portrait.alt}
              width={portrait.width}
              height={portrait.height}
              sizes="(max-width: 768px) 100vw, 380px"
              className="h-full w-full object-cover"
              priority={false}
            />
          </div>
          <figcaption className="text-muted mt-2 font-mono text-[11px]">
            chicago, where the two halves of that story meet
          </figcaption>
        </figure>
      </Reveal>
    </Section>
  );
}
