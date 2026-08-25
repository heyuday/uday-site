const SECTIONS = [
  { href: "#work", label: "work", always: true },
  { href: "#beyond", label: "beyond", always: false },
  { href: "#contact", label: "contact", always: true },
];

export default function Nav() {
  return (
    <header className="border-line/70 bg-paper/85 sticky top-0 z-50 border-b backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <a
          href="#top"
          className="text-ink font-mono text-[13px] font-medium tracking-tight"
        >
          uday tyagi
        </a>
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
      </nav>
    </header>
  );
}
