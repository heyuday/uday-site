# TODO

## Now — before the site goes live
- [ ] **Pick and buy the domain.** `uday.net` is taken by a squatter-ish parking
      page; realistic options: `udaytyagi.com`, `uday.dev`, `uday.engineer`,
      `udaytyagi.ai`. Whatever you pick, set it in `SITE_URL` in
      `src/content/site.ts` — it drives canonical URLs, `sitemap.xml`,
      `robots.txt`, and Open Graph. Currently a placeholder.
- [ ] Deploy: push to GitHub → import on Vercel → attach the domain. Zero config.
- [ ] Confirm the OG image. It's currently the Chicago photo cropped to 1200×630
      and your face sits right of center — check the preview on LinkedIn.
- [ ] Verify the NLA repo URL. I linked
      `github.com/heyuday/natural_language_autoencoders-project` from your brief;
      if the repo is private or named differently, that link 404s.

## Facts I had to pick between (your two resumes disagree)
- **Cornell degree + start.** Research resume: "Master's in CS, Dec 2025 –
  Present". SWE resume: "Master of Engineering in CS, Jan 2026 – Dec 2026".
  I used "M.S. Computer Science, Cornell — December 2026". Tell me which is
  right and I'll fix it in one line (`hero.facts` in `src/content/site.ts`).
- **KLA title.** Research resume says "Machine Learning & Software Engineer";
  SWE resume says "Software Engineer". I used Software Engineer.
- **Go.** Listed under Languages on the research resume only. I left it off the
  site — add it to `src/content/skills.ts` if you still write Go.
- **Phone number.** On both resumes, deliberately not on the site.

## Left as TODO in code
- [ ] Prof. Lionel Levine's Cornell page — I didn't link it because I couldn't
      verify the URL and wasn't going to guess. See the comment in
      `src/content/projects.ts` on the `constitutional-drift` entry.

## Attribution I was careful about
- **SMARAG** reads "I did the engineering and implementation work on…" and the
  paper link is labeled "Engineering work on the system described in Liu et al.,
  SSRN". Nothing implies authorship. Don't loosen this wording.
- **The steering demo** in the hero is labeled "response is illustrative, not a
  logged generation" so nobody mistakes it for a benchmark. Keep that label.
- **Project Orion's 80% vs 59%** is the only hard number on the site and it sits
  in body copy, not a stat block — it reads as a result rather than a brag.

## Later
- [ ] Publish the first blog post: set `status: "published"` and add `href` in
      `src/content/writing.ts`. The section already exists and is honest about
      being empty ("incoming", each post marked "drafting").
- [ ] Consider a LessWrong crosspost link on the NLA card once the writeup lands.
- [ ] Run Lighthouse against the deployed URL. Local structure is clean —
      static export, no layout shift, lazy images, click-to-load YouTube — but
      the real numbers need a real host.
- [ ] If you ever want dark mode, it's a deliberate skip, not an oversight. The
      tokens in `globals.css` are structured so adding it is a contained change.
