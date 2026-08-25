/**
 * Smaller work: a compact list, not full cards.
 *
 * `href` is only set where the exact repo URL is verified, per the same rule
 * as everything else on this site: don't fabricate a link. Unlinked entries
 * are still real projects, just not confirmed against a specific repo slug.
 */

export type SideProject = {
  title: string;
  blurb: string;
  href?: string;
};

export const sideProjects: SideProject[] = [
  {
    title: "Emergent misalignment: reproduction, probing & activation oracles",
    blurb:
      "Fine-tuned Qwen2.5 on a small set of harmful financial advice examples and reproduced emergent misalignment. Implemented a LoRA layer from scratch and verified numerical equivalence against HuggingFace PEFT, then trained linear probes on intermediate LoRA activations to detect misalignment before generation. Also ran activation oracles decoding residual-stream activations back into natural language.",
  },
  {
    title: "Variable-input PatchTST for time series forecasting",
    blurb:
      "Extended PatchTST to handle variable-length input windows for multivariate time series forecasting, without retraining separate models per input length.",
    href: "https://github.com/heyuday/variable_patchtst_project",
  },
  {
    title: "LLM jailbreak defense evaluation",
    blurb:
      "GCG and AutoDAN attacks run against layered defenses: self-reminders, hierarchical prompting, perplexity filters, with guard-model architectures compared by attack success rate.",
  },
  {
    title: "Domain-adaptive LLM embedding benchmark & fine-tuning",
    blurb:
      "Generated adversarial hard-negative passages via LLM prompting as contrastive training data, benchmarked 5+ embedding models, and introduced a robustness metric for near-miss retrieval failures.",
  },
  {
    title: "Wisconsin school analytics on GCP",
    blurb:
      "Cloud-native analytics pipeline integrating geospatial and public-school datasets across 400+ schools, with automated Parquet ingestion via PyArrow and parameterized SQL on remote VMs.",
  },
  {
    title: "Real-time weather stream processor",
    blurb:
      "Fault-tolerant Kafka to HDFS pipeline with exactly-once semantics, checkpointing, atomic Parquet writes, and stateful recovery across broker and node failures. Containerized with Docker Compose.",
  },
];
