// All content below is extracted directly from Syeda Neha Zafar's resume.
// Edit this file to update the site — every section reads from here.

export const personal = {
  name: "Syeda Neha Zafar",
  avatarUrl: "/Avatar.jfif",
  title: "AI Engineer",
  location: "Karachi, Pakistan",
  phone: "0313-2374197",
  email: "zafarneha8@gmail.com",
  linkedin: "https://linkedin.com/in/syeda-neha-zafar",
  linkedinLabel: "linkedin.com/in/syeda-neha-zafar",
  github: "https://github.com/notneha",
  githubLabel: "github.com/notneha",
  summary:
    "AI Engineer specializing in Generative AI, RAG, and applied NLP/CV systems, with hands-on production exposure spanning conversational AI, PII detection and deployment, OCR pipelines, semantic search, and voice-biometrics architecture. Comfortable owning a problem end-to-end: research and literature review, model selection and fine-tuning, evaluation, and deployment to real users (Hugging Face Spaces, containerized services, cloud) across AWS, Azure, and Google Cloud.",
};

export const heroRoles = [
  "AI Engineer",
  "RAG Pipeline Builder",
  "Conversational AI Developer",
  "LLM Security Auditor",
];

export const skillGroups = [
  {
    label: "AI Engineering",
    items: [
      "LLMs",
      "RAG Pipelines",
      "Parent Document Retrieval",
      "Autonomous Agents & Agent Security Auditing",
      "LangChain",
      "Prompt Engineering",
      "Vector Databases",
      "Embeddings",
      "Semantic Search",
      "GLiNER",
      "DPO",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "PyCaret",
      "Neural Networks (CNN, ResNet-50)",
      "Sentence-Transformers",
      "Model Evaluation",
      "Feature Engineering",
      "Vertex AI",
      "PaddleOCR",
      "OpenCV",
      "Roboflow Annotation",
      "Object Detection",
    ],
  },
  {
    label: "Cloud & Deployment",
    items: [
      "Docker",
      "Kubernetes (GKE)",
      "AWS",
      "Microsoft Azure",
      "Google Cloud Platform",
      "Compute Engine",
      "Hugging Face Spaces",
      "FastAPI",
      "Streamlit",
    ],
  },
  {
    label: "Programming & Data",
    items: [
      "Python",
      "SQL (MySQL, PostgreSQL)",
      "Node.js",
      "Express",
      "Django",
      "MongoDB",
      "Java",
      "C#",
      "Git/GitHub",
      "REST APIs",
      "Linux",
    ],
  },
] as const;

export const experience = [
  {
    role: "AI Engineer",
    company: "Proxima AI",
    duration: "June 2026 – Present",
    achievements: [
      "Designed and deployed a conversational AI chatbot featuring context-aware dynamic state management, robust intent recognition, and automated fallback logic for real-time user interaction.",
      "Fine-tuned and deployed a zero-shot Urdu PII redaction model using GLiNER architecture for regional sensitive data formats; published a live demo on Hugging Face Spaces.",
      "Built a candidate-to-job matching engine utilizing NLP entity extraction and high-dimensional vector embeddings to automate resume screening via contextual fit scoring.",
      "Engineered an automated document-processing pipeline integrating OpenCV image pre-processing (deskewing, adaptive thresholding) and PaddleOCR to extract tabular receipt data into structured JSON.",
      "Conducted security audits on autonomous LLM agents, identifying and mitigating context injection, prompt exploitation, and data leakage risks across vector databases and third-party APIs.",
    ],
    tech: ["LangChain", "GLiNER", "Hugging Face Spaces", "PaddleOCR", "OpenCV", "Vector Databases"],
  },
  {
    role: "Data Analyst Intern",
    company: "Elevvo",
    duration: "Aug 2025 – Sep 2025",
    achievements: [
      "Executed Exploratory Data Analysis (EDA) pipelines in Python (Pandas, Seaborn) for data cleaning, anomaly detection, and statistical visualization.",
      "Built RFM (Recency, Frequency, Monetary) analytics models on retail datasets to identify behavioral segments and inform retention strategy.",
      "Wrote SQL queries with JOINs, aggregations, and GROUP BY logic to analyze revenue across business units.",
      "Designed interactive Power BI dashboards with slicers and metric targets for operational reporting.",
    ],
    tech: ["Python", "Pandas", "Seaborn", "SQL", "Power BI"],
  },
  {
    role: "Software Developer Intern",
    company: "JS Bank",
    duration: "Apr 2025 – Jun 2025",
    achievements: [
      "Built a real-time NLP lip-synchronization module using DeepSeek multi-modal APIs (TTS/STT) linked to automated avatar movement.",
      "Developed RESTful APIs (Node.js, Express, MongoDB) with CRUD operations, request logging, and input validation.",
      "Configured containerized deployments and Python automation scripts delivered via secure SFTP/SSH and jump-server paths.",
    ],
    tech: ["Node.js", "Express", "MongoDB", "Docker", "SFTP/SSH"],
  },
] as const;

export const projects = [
  {
    title: "Makkhi Meter 2.0",
    subtitle: "Final Year Project",
    duration: "Mar 2024 – Jan 2025",
    description:
      "A distributed ML-based vision system using custom CNN, SVM, and KNN models for automated phenotypic classification.",
    tech: ["CNN", "SVM", "KNN", "Computer Vision", "Python"],
  },
  {
    title: "Pneumonia Diagnostic Platform",
    subtitle: "Personal Project",
    duration: "6 Weeks",
    description:
      "An AI radiography analysis pipeline using a ResNet-50 architecture for multi-class classification across 2,500 images.",
    tech: ["ResNet-50", "TensorFlow", "PyTorch", "Medical Imaging"],
  },
] as const;

export const education = [
  {
    degree: "Bachelor of Software Engineering",
    institution: "Usman Institute of Technology (NED Affiliated)",
    duration: "2021 – 2025",
    detail: "",
  },
] as const;

export const certifications = [
  {
    issuer: "Kaggle",
    items: [
      "Feature Engineering",
      "Intro to Deep Learning",
      "Computer Vision",
      "Intro to AI Ethics",
      "Geospatial Analysis",
    ],
  },
  {
    issuer: "Microsoft",
    items: ["Azure for AI and Machine Learning"],
  },
  {
    issuer: "Meta",
    items: ["Front-End Developer", "Advanced React"],
  },
  {
    issuer: "Google",
    items: [
      "Introduction to AI Agents",
      "Prompt Design in Agent Platform",
      "Build a Website on Google Cloud",
      "Foundations of Project Management",
      "Agile Project Management",
    ],
  },
] as const;
