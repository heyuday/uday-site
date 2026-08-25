/**
 * Writing. Nothing published yet — these are the pieces actually in progress,
 * named rather than hidden behind a "coming soon" placeholder.
 *
 * To publish one: set `status: "published"` and add `href`. The card becomes a
 * link automatically. To add a new piece, append an object.
 */

export type Post = {
  title: string;
  venue: string;
  blurb: string;
  status: "drafting" | "in review" | "published";
  /** Required once status is "published". */
  href?: string;
};

export const writingIntro =
  "I'm slow to publish because I'd rather post a result I've tried to break first. These are the ones in the pipeline.";

export const posts: Post[] = [
  {
    title: "Steering vectors written in English",
    venue: "LessWrong",
    blurb:
      "The writeup of the NLA steering results: what it means that a sentence of English produces a vector as usable as one derived from activations, and where the analogy stops.",
    status: "drafting",
  },
  {
    title: "What a constitution is worth after ten rewrites",
    venue: "LessWrong / Alignment Forum",
    blurb:
      "Early findings from Constitutional Drift — which stated values survive repeated self-revision, which quietly collapse, and whether the drift shows up in behavior or only in the text.",
    status: "drafting",
  },
  {
    title: "Notes on evaluating an eval",
    venue: "this site",
    blurb:
      "Shorter piece on the thing that keeps biting me: how to tell whether a benchmark is measuring the property you named, or a proxy that happens to correlate on the cases you sampled.",
    status: "drafting",
  },
];
