import { identity } from "@/content/site";

const SECTIONS = [
  { href: "#work", label: "work", always: true },
  { href: "#skills", label: "skills", always: false },
  { href: "#beyond", label: "beyond", always: false },
  { href: "#contact", label: "contact", always: true },
];

export default function Nav() {
  return (
    <header className="border-line/70 bg-paper/85 sticky top-0 z-50 border-b backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <a
          href="#top"
          className="text-ink font-mono text-[13px] font-medium tracking-tight"
        >
          uday tyagi
        </a>

        <div className="flex items-center gap-5 sm:gap-7">
          <ul className="flex items-center gap-4 sm:gap-6">
            {SECTIONS.map((s) => (
              <li key={s.href} className={s.always ? "" : "hidden sm:block"}>
                <a
                  href={s.href}
                  className="text-muted hover:text-ink font-mono text-[12px] transition-colors sm:text-[13px]"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="border-line hidden items-center gap-5 border-l pl-5 sm:flex lg:gap-6 lg:pl-6">
            <a
              href={`mailto:${identity.email}`}
              className="text-muted hover:text-ink font-mono text-[13px] transition-colors"
            >
              {identity.email}
            </a>
            <a
              href={identity.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-ink font-mono text-[13px] transition-colors"
            >
              github
            </a>
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-ink font-mono text-[13px] transition-colors"
            >
              linkedin
            </a>
          </div>

          <a
            href={identity.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-signal text-paper inline-flex shrink-0 items-center gap-1.5 rounded-md px-3.5 py-2 font-mono text-[12px] font-medium transition-opacity hover:opacity-88 sm:text-[13px]"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
