/** Grouped tags. Not progress bars, not star ratings. */

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "Java", "C/C++", "JavaScript", "TypeScript", "SQL", "CUDA"],
  },
  {
    label: "AI / ML",
    items: [
      "PyTorch",
      "HuggingFace",
      "mechanistic interpretability",
      "probes",
      "steering vectors",
      "SAEs",
      "activation patching",
      "fine-tuning (LoRA/PEFT)",
      "evals",
      "RAG",
      "diffusion models",
      "LangChain",
      "MCP",
      "inference optimization",
    ],
  },
  {
    label: "Tools & infra",
    items: [
      "Docker",
      "Kubernetes",
      "AWS (S3, Lambda)",
      "GCP",
      "ROS 2",
      "PostgreSQL",
      "Kafka",
      "Spark",
      "React",
      "Node.js",
    ],
  },
];
