/**
 * Site-level identity and prose. Everything a human would want to edit lives
 * in `src/content/` — nothing here is hardcoded into JSX.
 */

// Production domain. Drives canonical URLs, sitemap.xml, robots.txt, and the
// Open Graph tags — keep it in sync with the domain attached in Vercel.
export const SITE_URL = "https://udaytyagi.dev";

export const identity = {
  name: "Uday Tyagi",
  email: "ut25@cornell.edu",
  github: "https://github.com/heyuday",
  linkedin: "https://www.linkedin.com/in/heyuday/",
} as const;

/**
 * Two resumes, because there are two audiences and pretending otherwise serves
 * neither. Both live in /public — replace the files in place to update.
 */
export const resumes = [
  {
    id: "research",
    label: "AI safety research",
    href: "/uday-tyagi-resume-research.pdf",
    blurb:
      "Research first: interpretability, steering, evals, AI control. For labs and research teams.",
  },
  {
    id: "swe",
    label: "SWE / AI engineering",
    href: "/uday-tyagi-resume-swe.pdf",
    blurb:
      "Shipping first: LLM agents, MCP tooling, inference and infra. For product and platform teams.",
  },
] as const;

export const hero = {
  positioning:
    "I build AI systems, and most of my work goes into checking what they are actually doing.",
  facts: [
    "M.S. Computer Science, Cornell — December 2026",
    "Software Engineer, KLA",
    "B.S. Computer Science, UW–Madison — finished in two and a half years",
  ],
  thesis:
    "My work sits on interpretability, steering, evaluations, and oversight. Capability is arriving faster than our ability to verify what these systems are doing, and that gap is the problem I want to spend my time on.",
} as const;

export const about = {
  paragraphs: [
    "I'm from Chicago. I grew up in Delhi until I was twelve, then spent my teens back in Chicago — which is a long way of saying I've had to learn two places well enough to be from both.",
    "I'm finishing a master's in computer science at Cornell in December 2026, after a B.S. at UW–Madison I got through in two and a half years. I'm a software engineer at KLA, where I work on LLM agents and the tooling that makes their actions auditable.",
    "At Cornell I lead operations for Cornell AI Alignment and run the weekly technical paper reading group. Before that I led a 10-student cohort through the AI Safety Fundamentals curriculum at the Wisconsin AI Safety Initiative.",
  ],
} as const;

export const now = {
  heading: "What I'm thinking about now",
  body: [
    "I keep getting pulled toward steering and evals, because right now they're the parts of this field where the work is actually tractable.",
    "Steering is the most direct handle we have on behavior at inference time — you can move a model without retraining it, and you can check whether the thing you moved was the thing you meant to move. Evals are the other half: without them every claim about a model's behavior is unfalsifiable, including my own.",
    "So most of what I'm doing right now is building the vector, then building the measurement that would tell me if the vector is lying to me.",
  ],
} as const;

export const beyond = {
  heading: "Beyond the terminal",
  film: {
    url: "https://www.youtube.com/watch?v=a-SbMCZYFdg",
    id: "a-SbMCZYFdg",
    title: "A short film by Uday Tyagi",
  },
  filmCopy:
    "I make films. It's the same instinct as good research communication — deciding what someone needs to see, and in what order, before they'll believe the thing you're telling them.",
  outdoorsCopy:
    "The rest of my time outside work is spent outside. Mountain biking, off-roading, anything at altitude. It's the one part of my life with no logs and no evals, and I'd like to keep it that way.",
  photos: [
    {
      src: "/images/uday-mtb.webp",
      alt: "Uday in a full-face helmet and goggles, sitting on a mountain bike at the base of a mountain resort village.",
      width: 900,
      height: 1200,
      caption: "Trail day",
    },
    {
      src: "/images/uday-rzr.webp",
      alt: "Uday standing beside a Polaris RZR off-road vehicle on a rocky ridge, with bare mountain slopes behind him.",
      width: 1300,
      height: 975,
      caption: "Above the treeline",
    },
  ],
} as const;

export const portrait = {
  src: "/images/uday-chicago.webp",
  alt: "Uday Tyagi in a winter jacket in front of the Chicago skyline at night, city lights reflecting off the lake.",
  width: 1500,
  height: 1125,
} as const;
