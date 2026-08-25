# TODO

## Now, before the site goes live
- [x] ~~Domain: **udaytyagi.com**, bought through Vercel and set in `SITE_URL`.~~
- [x] ~~Deployed on Vercel.~~
- [ ] Confirm `udaytyagi.com` resolves with a valid cert (give DNS a few minutes),
      and that the bare domain and `www` both land on the site.
- [ ] Confirm the OG image. It's currently the Chicago photo cropped to 1200×630
      and your face sits right of center, check the preview on LinkedIn.
- [ ] Verify the NLA repo URL. I linked
      `github.com/heyuday/natural_language_autoencoders-project` from your brief;
      if the repo is private or named differently, that link 404s.
- [ ] Verify the PatchTST repo URL:
      `github.com/heyuday/variable_patchtst_project`.

## Resolved
- Cornell degree: **M.Eng. Computer Science, Cornell, December 2026** (your
  SWE resume's version).
- Resume: single PDF (the SWE version), linked directly from the hero and
  contact section. No more `/resume` picker page.
- Work order: KLA first (it's the main job), then NLA Steering (still gets the
  flagship visual treatment regardless of its position in the list), then the
  rest of the research entries, Foresee Health last.
- "What I'm thinking about now" and "Writing" sections removed.
- All em dashes removed from copy and code comments.

## Still open
- **KLA title.** Research resume says "Machine Learning & Software Engineer",
  SWE resume says "Software Engineer". Site uses Software Engineer.
- **Go.** Listed under Languages on the research resume only, left off the
  site. Add it to `src/content/skills.ts` if you still write Go.
- **Phone number.** On both resumes, deliberately not on the site.
- **Prof. Lionel Levine's Cornell page** is unlinked. I didn't verify the URL
  and wasn't going to guess. See the comment in `src/content/projects.ts` on
  the `constitutional-drift` entry.
- **Side project GitHub links.** Only PatchTST has a verified repo URL
  attached. The others (emergent misalignment, jailbreak eval, embedding
  benchmark, weather stream processor, Wisconsin GCP analytics) link nowhere
  individually since I don't have their exact repo slugs; there's a
  "more on github" link to your repositories tab at the bottom of that list
  instead. Send me the slugs and I'll wire up direct links.

## Attribution, kept careful
- **SMARAG** reads "I did the engineering and implementation work on..." and
  the paper link is labeled "Engineering work on the system described in Liu
  et al., SSRN". Nothing implies authorship. Don't loosen this wording.
- **The steering demo** in the hero is labeled "response is illustrative, not
  a logged generation" so nobody mistakes it for a benchmark. Keep that label.
- **Project Orion's 80% vs 59%** is the only hard number on the site and it
  sits in body copy, not a stat block, it reads as a result rather than a brag.

## Later
- [ ] If you want a blog section back, it's a clean re-add: bring back
      `src/content/writing.ts` and `src/components/Writing.tsx` from git
      history (`git log --diff-filter=D -- src/content/writing.ts`), or start
      fresh once you actually have something to publish.
- [ ] Run Lighthouse against the deployed URL.
- [ ] Dark mode is a deliberate skip, not an oversight, tokens in
      `globals.css` are structured so adding it later is a contained change.
