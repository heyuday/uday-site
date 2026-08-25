export default function Footer() {
  return (
    <footer className="border-line border-t">
      <div className="text-muted mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-8 font-mono text-[11px] sm:px-8">
        <p>© {new Date().getFullYear()} Uday Tyagi</p>
        <p>Built with Next.js. No trackers, no cookies.</p>
      </div>
    </footer>
  );
}
