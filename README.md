# udaytyagi.com: personal site

Static Next.js site. One page of anchored sections.

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
src/content/          all editable copy and data, start here
  site.ts             identity, links, hero, about, "beyond"
  projects.ts         work & research entries
  side-projects.ts    the compact list
  skills.ts           grouped skill tags
src/components/       one file per section
src/app/              layout (fonts + metadata), page, sitemap, robots
public/images/        pre-sized WebP photos + og.jpg
public/*.pdf          the resume
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
  dates: "Jan 2027 – present",
  note: "optional one-line subtitle",
  body: ["First paragraph.", "Second paragraph."],
  tags: ["PyTorch", "evals"],
  links: [{ label: "Live demo", href: "https://…", primary: true }],
  weight: "standard", // "flagship" | "standard" | "compact"
}
```

Array order is display order. `weight: "flagship"` gives one entry the full
bordered treatment (currently NLA Steering) wherever it sits in the list, it
isn't tied to being first; `"compact"` halves the vertical space for
lower-relevance entries. `primary: true` on exactly one link per entry makes
it the filled button, use it sparingly.

## Swap the resume

Overwrite `public/uday-tyagi-resume-swe.pdf`. It's linked directly from the
hero and the contact section via `identity.resume` in
[`src/content/site.ts`](src/content/site.ts), no picker page.

## Add a photo

Convert and size it first, the build does no image optimization (static export):

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

- **Color**: `paper #FAF9F5`, `panel #F1EFE8`, `panel-2 #E9E6DC`, `ink #191817`,
  `muted #6E6A61`, `line #DFDBD1`, `signal #2743D4`. One accent, spent
  deliberately. Tokens live in `@theme` in `src/app/globals.css`.
- **Type**: Archivo (display, `-0.035em`), Instrument Sans (body),
  JetBrains Mono (labels, metadata, the parts that are code-adjacent).
- **Layout**: a fixed mono index rail on the left, content right; the rail
  labels stay put while sections scroll past them.

```
┌──────────────────────────────────────────────┐
│ uday tyagi                  work beyond contact│ sticky
├──────────────────────────────────────────────┤
│  ITHACA, NY · OPEN TO 2027 ROLES             │
│  UDAY TYAGI                                  │  display
│  (◎) Cornell University · graduating Dec 2026│  badge
│  I build AI systems, and most of my work…    │
│  · M.Eng Cornell · KLA · UW-Madison          │  mono
│ ▌ safety thesis                              │  signal rule
│  ┌────────────────────────────────────────┐  │
│  │ STEERING DEMO      h ← h + λ·v         │  │  ← signature
│  │  · ·:·  →  ·:·· │ response morphs      │  │
│  │  λ ──────●──────  0.0  unsteered       │  │
│  └────────────────────────────────────────┘  │
├──────────┬───────────────────────────────────┤
│ 01 ABOUT │ prose                    [photo]  │
│ 02 WORK  │ KLA card, then flagship, then rest│
└──────────┴───────────────────────────────────┘
```

- **Signature**: the steering strip in the hero. Drag λ and the activation
  cloud moves along the vector while the response changes. It demonstrates the
  flagship project instead of describing it. Everything else on the page is
  deliberately quiet so this is the thing you remember.
- **No dark mode.** One well-calibrated light theme beats two mediocre ones,
  and the paper ground is the point.
- **Motion**: one `IntersectionObserver` reveal per section
  (`src/components/Reveal.tsx`) and the steering transition. Both are no-ops
  under `prefers-reduced-motion`.

## Deploy

Vercel, no configuration: import the repo and it detects Next.js. `output:
"export"` means the build emits `./out`, so any static host works too.

The domain is `udaytyagi.com`, set in `SITE_URL`
([`src/content/site.ts`](src/content/site.ts)). It's the base for canonical
URLs, `sitemap.xml`, `robots.txt`, and Open Graph tags: if the domain ever
changes, change it there too or link previews break.
