/**
 * Site-level identity and prose. Everything a human would want to edit lives
 * in `src/content/`, nothing here is hardcoded into JSX.
 */

// Production domain. Drives canonical URLs, sitemap.xml, robots.txt, and the
// Open Graph tags, keep it in sync with the domain attached in Vercel.
export const SITE_URL = "https://udaytyagi.com";

export const identity = {
  name: "Uday Tyagi",
  email: "ut25@cornell.edu",
  github: "https://github.com/heyuday",
  linkedin: "https://www.linkedin.com/in/heyuday/",
  // Single resume, no picker page: this is the SWE / AI engineering version.
  resume: "/UdayTyagiResume-site.pdf",
} as const;

export const hero = {
  positioning:
    "I build AI systems, and most of my work goes into checking what they are actually doing.",
  facts: [
    "M.Eng. Computer Science, Cornell, December 2026",
    "Software Engineer, KLA",
    "B.S. Computer Science, UW–Madison, finished in two and a half years",
  ],
  thesis:
    "My work sits on building safe and reliable AI systems: making models more interpretable, evaluating them for safety, and building the software around them that makes that possible.",
} as const;

export const about = {
  paragraphs: [
    "I'm from Chicago. I grew up in Delhi until I was twelve, then spent my teens in Chicago, which is a long way of saying I've had to learn two places well enough to be from both.",
    "I'm finishing a master's in computer science at Cornell in December 2026, after a B.S. at UW–Madison I got through in two and a half years. I'm a software engineer at KLA, where I work on LLM agents and the tooling that makes their actions auditable.",
    "At Cornell I lead operations for Cornell AI Alignment and run the weekly technical paper reading group. Before that I led a 10-student cohort through the AI Safety Fundamentals curriculum at the Wisconsin AI Safety Initiative, and was part of their technical scholars group.",
  ],
} as const;

export const beyond = {
  heading: "Outside of Work",
  film: {
    url: "https://www.youtube.com/watch?v=a-SbMCZYFdg",
    id: "a-SbMCZYFdg",
    title: "A short film by Uday Tyagi",
  },
  filmCopy:
    "I make films and have a passion for visual storytelling. It's the same instinct as good research communication: deciding what someone needs to see, and in what order, before they'll believe the thing you're telling them.",
  outdoorsCopy:
    "The rest of my time outside work is spent outside. Mountain biking, off-roading, anything outdoors.",
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
