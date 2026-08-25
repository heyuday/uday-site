# uday.dev — personal site

Static Next.js site. One page of anchored sections, plus `/resume`.

```
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → ./out
npm run lint
npm run typecheck
npm run format
```

## What's where

```
src/content/          all editable copy and data — start here
  site.ts             identity, links, hero, about, "now", "beyond", resumes
  projects.ts         work & research entries
  side-projects.ts    the compact list
  writing.ts          blog posts (in progress + published)
  skills.ts           grouped skill tags
src/components/       one file per section
src/app/              layout (fonts + metadata), page, /resume, sitemap, robots
public/images/        pre-sized WebP photos + og.jpg
public/*.pdf          the two resumes
```

Nothing is hardcoded in JSX. Editing a sentence means editing `src/content/`.

## Add a project

Append one object to `projects` in [`src/content/projects.ts`](src/content/projects.ts):

```ts
{
  slug: "my-project",
  title: "My Project",
  role: "Researcher",
  org: "Somewhere",
  dates: "Jan 2027 — present",
  note: "optional one-line subtitle",
  body: ["First paragraph.", "Second paragraph."],
  tags: ["PyTorch", "evals"],
  links: [{ label: "Live demo", href: "https://…", primary: true }],
  weight: "standard", // "flagship" | "standard" | "compact"
}
```

Order in the array is order on the page. `weight: "flagship"` gives the full
bordered treatment (currently NLA Steering); `"compact"` halves the vertical
space for lower-relevance entries. `primary: true` on exactly one link per entry
makes it the filled button — use it sparingly.

## Publish a blog post

In [`src/content/writing.ts`](src/content/writing.ts), set `status: "published"`
and add `href`. The entry becomes a link and its bullet turns blue. No other
change needed.

## Swap a resume

Overwrite `public/uday-tyagi-resume-research.pdf` or
`public/uday-tyagi-resume-swe.pdf`. Labels and blurbs live in `resumes` in
`src/content/site.ts`.

## Add a photo

Convert and size it first — the build does no image optimization (static export):

```bash
python3 -c "
from PIL import Image, ImageOps
im = ImageOps.exif_transpose(Image.open('IMG_XXXX.HEIC')).convert('RGB')
im.thumbnail((1400, 1400), Image.LANCZOS)
im.save('public/images/name.webp', 'WEBP', quality=78, method=6)
print(im.size)"
```

Then add it with its real `width`/`height` (no layout shift) and real alt text.

## Design

- **Color** — `paper #FAF9F5`, `panel #F1EFE8`, `panel-2 #E9E6DC`, `ink #191817`,
  `muted #6E6A61`, `line #DFDBD1`, `signal #2743D4`. One accent, spent
  deliberately. Tokens live in `@theme` in `src/app/globals.css`.
- **Type** — Archivo (display, `-0.035em`), Instrument Sans (body),
  JetBrains Mono (labels, metadata, the parts that are code-adjacent).
- **Layout** — a fixed mono index rail on the left, content right; the rail
  labels stay put while sections scroll past them.

```
┌──────────────────────────────────────────────┐
│ uday tyagi          work now writing beyond  │  sticky
├──────────────────────────────────────────────┤
│  ITHACA, NY · OPEN TO 2027 ROLES             │
│  UDAY TYAGI                                  │  display
│  I build AI systems, and most of my work…    │
│  · cornell · KLA · UW–Madison                │  mono
│ ▌ safety thesis                              │  signal rule
│  ┌────────────────────────────────────────┐  │
│  │ STEERING DEMO      h ← h + λ·v         │  │  ← signature
│  │  · ·:·  →  ·:·· │ response morphs      │  │
│  │  λ ──────●──────  0.0  unsteered       │  │
│  └────────────────────────────────────────┘  │
├──────────┬───────────────────────────────────┤
│ 01 ABOUT │ prose                    [photo]  │
│ 02 WORK  │ flagship card, then entries       │
│ 03 NOW   │ …                                 │
└──────────┴───────────────────────────────────┘
```

- **Signature** — the steering strip in the hero. Drag λ and the activation
  cloud moves along the vector while the response changes. It demonstrates the
  flagship project instead of describing it. Everything else on the page is
  deliberately quiet so this is the thing you remember.
- **No dark mode.** One well-calibrated light theme beats two mediocre ones, and
  the paper ground is the point.
- **Motion** — one `IntersectionObserver` reveal per section
  (`src/components/Reveal.tsx`) and the steering transition. Both are no-ops
  under `prefers-reduced-motion`.

## Deploy

Vercel, no configuration: import the repo and it detects Next.js. `output:
"export"` means the build emits `./out`, so any static host works too.

**Before the first deploy:** set the real domain in `SITE_URL`
([`src/content/site.ts`](src/content/site.ts)). It's the base for canonical
URLs, `sitemap.xml`, `robots.txt`, and Open Graph tags — a wrong value there
means broken link previews.
