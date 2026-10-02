const researchData = [
  {
    id: 1,
    title: "Sentiment & Intent Detection in Romanized Tamil-English Code-Mixed Text",
    institution: "Department of Computer Engineering, University of Jaffna",
    period: "Dec 2025 - Present",
    status: "Active Research",
    model: "Fine-tuned MuRIL Transformer",
    summary:
      "A joint multi-task contextual deep learning framework designed to simultaneously detect intent and sentiment in informal Romanized Tamil-English code-mixed social communications.",
    problem:
      "Analyzing Romanized Tamil-English (Tanglish) text poses severe computational challenges due to non-standard phonetic spellings, informal slang, class imbalance, and a lack of large benchmark corpora.",
    methodology:
      "Leveraging fine-tuned Multilingual Representations for Indian Languages (MuRIL) with a shared contextual encoder and task-specific classification heads for multi-task intent and sentiment learning.",
    result:
      "Engineered an end-to-end evaluation pipeline with targeted preprocessing and phonetic normalization, achieving [add accuracy / F1-score here] on test partitions.",
    technologies: [
      "Python",
      "PyTorch",
      "MuRIL",
      "Hugging Face",
      "Transformers",
      "NLP",
      "Multi-Task Learning",
    ],
    github: "https://github.com/JeyakumarRenujan",
  },
];

export default researchData;
