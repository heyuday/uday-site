/**
 * Work & research entries.
 *
 * To add a project: append one object to `projects`. Ordering here is the
 * ordering on the page — safety and research first, industry after.
 * `weight: "flagship"` gives an entry the full-bleed treatment; everything
 * else renders as a standard card, and "compact" halves the vertical space.
 */

export type ProjectLink = {
  label: string;
  href: string;
  /** Renders as the single emphasized link on the card. */
  primary?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  role: string;
  org: string;
  dates: string;
  /** Optional line under the meta row: collaborators, advisors, attribution. */
  note?: string;
  body: string[];
  tags: string[];
  links?: ProjectLink[];
  weight?: "flagship" | "standard" | "compact";
};

export const projects: Project[] = [
  {
    slug: "nla-steering",
    title: "NLA Steering",
    role: "Independent research",
    org: "out of the CAMBRIA program",
    dates: "May 2026 — present",
    note: "Text-driven behavioral steering of LLMs",
    body: [
      "I used Natural Language Autoencoders (Fraser-Taliente et al., 2026) to generate steering vectors for Qwen2.5-7B from hand-written text descriptions alone — no training data, no activation extraction, no labeled examples. Write down what the behavior is, get a vector that produces it.",
      "The vectors reliably shift behavior at inference time across sycophancy, misalignment, and persona, and they're geometrically concept-specific rather than a generic nudge. I'm now ablating which parts of the text format actually carry the steering signal, and benchmarking the vectors as zero-shot behavioral probes against ground-truth activation-derived ones.",
    ],
    tags: [
      "PyTorch",
      "HuggingFace",
      "Qwen2.5-7B",
      "steering vectors",
      "mechanistic interpretability",
    ],
    links: [
      { label: "Live demo", href: "https://nla-steering.vercel.app/", primary: true },
      {
        label: "Code",
        href: "https://github.com/heyuday/natural_language_autoencoders-project",
      },
    ],
    weight: "flagship",
  },
  {
    slug: "constitutional-drift",
    title: "Constitutional Drift",
    role: "Researcher",
    org: "LAISR · Cornell University",
    dates: "Jan 2026 — present",
    note: "Advised by Prof. Lionel Levine · with Rauno Arike and Katie Lu",
    body: [
      "We're measuring whether a model's stated values survive contact with itself: hand an LLM its own constitution, let it rewrite it, repeat, and track semantic drift, value collapse, and self-reinforcing edits across rounds.",
      "I built the experimental harness with two collaborators — multi-round self-editing pipelines across model families, embedding- and judge-based drift metrics, and behavioral evals that check whether an edited constitution actually changes what the model does downstream, or only what it says.",
    ],
    tags: ["LLM evals", "value alignment", "self-modification", "behavioral evals"],
    // TODO: verify and link Prof. Lionel Levine's Cornell faculty page.
    // Left unlinked deliberately rather than guessing at a URL.
  },
  {
    slug: "project-orion",
    title: "Project Orion",
    role: "Research Engineer",
    org: "Cornell University · NASA University Student Research Challenge",
    dates: "Jan 2026 — present",
    note: "Advised by Mehrnaz Sabet",
    body: [
      "I trained a diffusion-based motion planner to replace ORCA for real-time multi-drone collision avoidance — a DiT generating velocity command sequences from ego and neighbor states, with DPM-Solver++ inference optimization and low-temperature reranking. It reaches ~80% mean scenario completion against ORCA's 59%.",
      "Around it I built the deconfliction stack: a ROS 2 planner plugin, scenario-based evaluation pipelines with behavioral analytics, and a ~200k-trajectory training dataset spanning six collision scenarios.",
    ],
    tags: ["diffusion models", "DiT", "ROS 2", "multi-agent planning", "robotics"],
    links: [
      { label: "Project site", href: "https://www.projectorion.info/", primary: true },
      {
        label: "Cornell Chronicle",
        href: "https://news.cornell.edu/stories/2026/06/smart-drones-safe-skies-students-system-tests-coordinates-drone-fleets",
      },
    ],
  },
  {
    slug: "smarag",
    title: "SMARAG",
    role: "Researcher",
    org: "Cornell University · Prof. Oliver Gao Lab, with Dr. Xinlai Liu",
    dates: "Jan 2026 — present",
    note: "Multi-agent RAG for automated carbon reporting",
    body: [
      "I did the engineering and implementation work on the multi-agent RAG system for automated ESG carbon reporting — LangChain orchestration, RL for factual grounding.",
      "I also designed the agent observability layer: audit-trail logging and behavioral guardrails that catch hallucinated citations before they land in a regulatory filing.",
    ],
    tags: ["multi-agent systems", "RAG", "LangChain", "RL", "agent observability"],
    links: [
      {
        label: "Engineering work on the system described in Liu et al., SSRN",
        href: "https://ssrn.com/abstract=5586584",
      },
    ],
  },
  {
    slug: "cambria",
    title: "CAMBRIA",
    role: "AI Safety Fellow",
    org: "Cambridge Boston Alignment Initiative",
    dates: "May — June 2026",
    body: [
      "Worked through the ARENA mechanistic interpretability curriculum at CBAI's intensive: linear probes, steering vectors, activation patching, sparse autoencoders, OthelloGPT, emergent misalignment, alignment faking, and LLM evals. The NLA steering work came out of this program.",
    ],
    tags: ["ARENA", "mechanistic interpretability", "SAEs", "activation patching"],
    weight: "compact",
  },
  {
    slug: "ai-safety-camp",
    title: "AI Safety Camp",
    role: "Research Fellow",
    org: "Remote",
    dates: "Dec 2025 — April 2026",
    body: [
      "Evaluated hierarchical and parallel AI control protocols on the ControlArena benchmark, measuring how the safety–usefulness tradeoff moves as the capability gap between trusted and untrusted models widens.",
      "Extended ControlArena with red-team/blue-team protocols and Elo-based scoring to find the point where oversight mechanisms fail under adversarial prompting.",
    ],
    tags: ["AI control", "ControlArena", "adversarial evals", "oversight"],
  },
  {
    slug: "kla",
    title: "KLA",
    role: "Software Engineer",
    org: "Remote",
    dates: "May 2025 — present",
    body: [
      "Fine-tuned an LLM-powered agent for the DART web application so engineers can drive defect-inspection workflows in natural language — image classification through event routing and triage.",
      "I extended that agent with a custom MCP server exposing internal inspection and triage tools, giving the model structured, auditable tool-calling instead of ad hoc API integrations — the same instinct as the safety work, which is knowing what the system did and why. Also built visual regression and UI-performance monitoring for HPC automation workflows with Grafana Faro and custom metrics tooling.",
    ],
    tags: ["LLM agents", "MCP", "fine-tuning", "observability", "Grafana Faro"],
  },
  {
    slug: "foresee-health",
    title: "Foresee Health",
    role: "Software Engineering Intern",
    org: "San Francisco, CA",
    dates: "Sept 2024 — Jan 2025",
    body: [
      "Built the authentication system for the invoice application on AWS Amplify and Lambda, and designed the PostgreSQL schemas and synchronization patterns behind a microservices architecture handling large customer datasets.",
    ],
    tags: ["AWS", "Lambda", "PostgreSQL", "microservices"],
    weight: "compact",
  },
];
