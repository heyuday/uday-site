import type { Metadata } from "next";
import Link from "next/link";
import { identity, resumes } from "@/content/site";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Two resumes for Uday Tyagi — one weighted toward AI safety research, one toward software and AI engineering.",
};

export default function Resume() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-center px-5 py-20 sm:px-8">
      <p className="u-label">
        <Link href="/" className="hover:text-ink transition-colors">
          ← uday tyagi
        </Link>
      </p>

      <h1 className="u-display mt-6 text-[clamp(2.25rem,8vw,4rem)]">Resume</h1>
      <p className="text-muted mt-5 max-w-xl text-[16px] leading-relaxed sm:text-[17px]">
        Two versions, same work, different emphasis. Take whichever one matches the role
        you&rsquo;re reading for.
      </p>

      <ul className="mt-9 grid gap-4 sm:grid-cols-2">
        {resumes.map((r) => (
          <li key={r.id}>
            <a
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-line bg-panel hover:border-signal flex h-full flex-col justify-between gap-6 rounded-lg border p-5 transition-colors"
            >
              <div>
                <h2 className="u-display text-xl">{r.label}</h2>
                <p className="text-muted mt-2 text-[14px] leading-relaxed">{r.blurb}</p>
              </div>
              <span className="text-signal font-mono text-[12px]">
                open PDF <span aria-hidden="true">↗</span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <p className="text-muted mt-8 font-mono text-[13px]">
        Questions about any line on either one —{" "}
        <a
          href={`mailto:${identity.email}`}
          className="text-ink decoration-line hover:text-signal underline underline-offset-4 transition-colors"
        >
          {identity.email}
        </a>
      </p>
    </main>
  );
}
