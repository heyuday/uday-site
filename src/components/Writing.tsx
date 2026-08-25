import { posts, writingIntro } from "@/content/writing";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Writing() {
  return (
    <Section id="writing" index="04" label="writing">
      <Reveal>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="u-display text-[clamp(1.6rem,4.6vw,2.25rem)]">Writing</h3>
          <span className="border-line bg-panel text-muted rounded border px-2 py-1 font-mono text-[11px] leading-none">
            incoming
          </span>
        </div>
        <p className="text-ink mt-4 max-w-2xl text-[16px] leading-relaxed sm:text-[17px]">
          {writingIntro}
        </p>

        <ul className="divide-line border-line mt-7 divide-y border-y">
          {posts.map((post) => {
            const inner = (
              <>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h4 className="text-ink text-[15px] font-medium sm:text-[16px]">
                    {post.title}
                  </h4>
                  <span className="text-muted font-mono text-[11px]">{post.venue}</span>
                </div>
                <p className="text-muted mt-1.5 max-w-2xl text-[14px] leading-relaxed">
                  {post.blurb}
                </p>
              </>
            );

            return (
              <li key={post.title} className="py-4">
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                      post.status === "published" ? "bg-signal" : "bg-panel-2"
                    }`}
                  />
                  <div className="min-w-0 flex-1">
                    {post.status === "published" && post.href ? (
                      <a
                        href={post.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                      >
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </div>
                  <span className="text-muted shrink-0 font-mono text-[11px]">
                    {post.status}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </Section>
  );
}
