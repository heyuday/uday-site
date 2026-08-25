import Image from "next/image";
import { beyond } from "@/content/site";
import Section from "./Section";
import Reveal from "./Reveal";
import LiteYouTube from "./LiteYouTube";

/**
 * The one section that gets to breathe. Wider measure, warmer panel, photos at
 * full width — the contrast with the research sections is the point.
 */
export default function Beyond() {
  return (
    <Section id="beyond" index="05" label="beyond the terminal" className="bg-panel">
      <Reveal>
        <h3 className="u-display text-[clamp(1.6rem,4.6vw,2.25rem)]">
          {beyond.heading}
        </h3>
        <p className="text-ink mt-5 max-w-2xl text-[16px] leading-relaxed sm:text-[17px]">
          {beyond.filmCopy}
        </p>
        <div className="mt-7 max-w-3xl">
          <LiteYouTube
            id={beyond.film.id}
            title={beyond.film.title}
            href={beyond.film.url}
          />
        </div>
      </Reveal>

      <Reveal className="mt-14" delay={60}>
        <p className="text-ink max-w-2xl text-[16px] leading-relaxed sm:text-[17px]">
          {beyond.outdoorsCopy}
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          {beyond.photos.map((photo) => (
            <figure key={photo.src} className="m-0">
              <div className="border-line bg-panel-2 relative aspect-[4/5] w-full overflow-hidden rounded-lg border sm:aspect-auto sm:h-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 640px) 100vw, 45vw"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="text-muted mt-2 font-mono text-[11px]">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
