export interface PortfolioData {
  hero: {
    name: string;
    tagline: string;
    location: string;
    email: string;
    phone: string;
    availability: string;
    links: {
      linkedin: string;
      github: string;
    };
  };
  education: Array<{
    institution: string;
    degree: string;
    period: string;
    gpa: string;
    coursework: string[];
  }>;
  experience: Array<{
    role: string;
    company: string;
    location: string;
    period: string;
    achievements: string[];
  }>;
  projects: Array<{
    category: string;
    year: string;
    title: string;
    description: string;
    techStack: string[];
    results: Array<{ title: string }>;
    githubUrl: string;
    imageKey: "rts" | "dsa" | "eyed" | "hrms" | "ums" | "pdf" | "mentalHealth";
  }>;
  certifications: string[];
  skills: {
    programming: string[];
    webDevelopment: string[];
    ai_ml_data: string[];
    languages: string[];
  };
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
  };
}

export const portfolioData: PortfolioData = {
  hero: {
    name: "Hasanth Kumar Majji",
    tagline: "Software Engineer (SDE) · Full-Stack & Applied Machine Learning",
    location: "Hyderabad, India",
    email: "hasanthkumarmajji@gmail.com",
    phone: "+91 80742 48715",
    availability: "Open to SDE-1 opportunities",
    links: {
      linkedin: "https://www.linkedin.com/in/hasanth-kumar-majji",
      github: "https://github.com/Hasanth-kumar",
    },
  },
  education: [
    {
      institution: "Sreenidhi Institute of Science and Technology, Hyderabad",
      degree: "Bachelor of Technology in Information Technology",
      period: "2022 – 2026",
      gpa: "8.4/10",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Machine Learning",
        "Data Science",
      ],
    },
  ],
  experience: [
    {
      role: "System Engineer (Intern)",
      company: "Infosys",
      location: "Hyderabad, India",
      period: "Jan 2026 – Jun 2026",
      achievements: [
        "Built production-style full-stack features using React, TypeScript, Advanced Java, Spring Boot, and the Spring Framework under senior-engineer mentorship.",
        "Designed and implemented RESTful APIs and managed relational data across MySQL and HSQL databases.",
        "Applied layered application architecture and end-to-end delivery workflows.",
      ],
    },
    {
      role: "AI Engineer (Intern)",
      company: "Kodryx AI",
      location: "Hyderabad, India",
      period: "Sep 2025 – Jan 2026",
      achievements: [
        "Developed AI-driven applications leveraging LLMs, Generative AI, RAG, and Agentic AI frameworks for production-ready solutions.",
        "Built scalable backend systems, RESTful APIs, and end-to-end data pipelines using Python, Java, and cloud technologies.",
        "Integrated AI models and automation workflows into application stacks to solve real-world business problems.",
      ],
    },
    {
      role: "Organiser / Volunteer",
      company: "Bachpan Prayas (Student NGO)",
      location: "Hyderabad, India",
      period: "Dec 2023 – Aug 2024",
      achievements: [
        "Coordinated logistics and communications for student-led events supporting 100+ participants, raising event satisfaction by 25%.",
        "Organised a community outreach program at a local orphanage on hygiene, sustainability, and environmental responsibility.",
      ],
    },
  ],
  projects: [
    {
      category: "Full-Stack",
      year: "2026",
      title: "RTS — Recruitment Tracking System",
      description:
        "Full-stack recruitment platform managing 500+ candidates and 550+ interviews across a 10-stage hiring pipeline with role-based access for Admin, HR Manager, Recruiter, and Interviewer personas.",
      techStack: [
        "Java 17",
        "Spring Boot 3",
        "Spring Security",
        "JWT",
        "MySQL",
        "React 18",
        "TypeScript",
        "Redux Toolkit",
        "Ant Design",
        "Recharts",
      ],
      results: [
        { title: "Modular-monolith Spring Boot backend with JWT auth and event-driven notifications" },
        { title: "React SPA with Recharts dashboards for funnel distribution and time-to-hire analytics" },
        { title: "215 passing tests with ~30 ms p95 read APIs sustaining 700+ req/s in load tests" },
      ],
      githubUrl: "https://github.com/Hasanth-kumar/recruitement-tracking-dashboard",
      imageKey: "rts",
    },
    {
      category: "AI / Learning",
      year: "2026",
      title: "DSA Mastery OS",
      description:
        "Local-first learning-intelligence system with autonomous planning, spaced repetition, and AI coaching layered over a Notion DSA workspace — built as a TypeScript pnpm monorepo.",
      techStack: [
        "TypeScript",
        "Fastify",
        "Drizzle ORM",
        "SQLite",
        "Redis",
        "BullMQ",
        "React 19",
        "D3.js",
        "Ollama",
        "OpenRouter",
      ],
      results: [
        { title: "5 pure intelligence engines: SM-2 revision, topic priority, weakness detection, adaptive difficulty, and roadmap DAG" },
        { title: "Fastify REST API with Drizzle ORM, Redis/BullMQ jobs, and Server-Sent Events" },
        { title: "React 19 dashboard with D3.js knowledge graph and LLM coaching chat" },
      ],
      githubUrl: "https://github.com/Hasanth-kumar/AI-DSA-Tutor",
      imageKey: "dsa",
    },
    {
      category: "AI / Computer Vision",
      year: "2025",
      title: "EyeD — AI-Powered Attendance System",
      description:
        "AI attendance system combining face recognition (OpenCV, DeepFace) and liveness detection (MediaPipe) to eliminate proxy attendance, with real-time analytics and gamification.",
      techStack: ["Python", "OpenCV", "DeepFace", "MediaPipe", "FastAPI", "Next.js", "Streamlit", "Plotly"],
      results: [
        { title: "Face recognition with confidence scoring and anti-spoofing liveness detection" },
        { title: "Real-time analytics dashboard with interactive Plotly charts and leaderboards" },
        { title: "Delivered 90% of planned scope with analytics and gamification fully operational" },
      ],
      githubUrl: "https://github.com/Hasanth-kumar/EyeD",
      imageKey: "eyed",
    },
    {
      category: "Full-Stack",
      year: "2025",
      title: "HRMS Leave Management Portal",
      description:
        "Full-stack leave-management module with role-based access for Admin, Manager, and Employee — featuring real-time balance tracking, WFH/Comp-Off workflows, and automated notifications.",
      techStack: ["React 18", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
      results: [
        { title: "Configurable leave quotas with audit trails and automated email notifications" },
        { title: "RESTful services with JWT-secured React frontend" },
        { title: "WFH and Comp-Off workflow support for three user roles" },
      ],
      githubUrl: "https://github.com/Hasanth-kumar/hrms-leave-portal-updated-version",
      imageKey: "hrms",
    },
  ],
  certifications: [
    "Data Analytics Essentials — Cisco Networking Academy",
    "Google AI-ML Virtual Internship — AICTE",
    "Google GenAI Virtual Internship — AICTE",
    "EF SET English Certificate — efset.org",
  ],
  skills: {
    programming: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C"],
    webDevelopment: ["React", "Redux Toolkit", "Spring Boot", "Node.js", "Fastify", "Tailwind CSS", "Ant Design"],
    ai_ml_data: ["TensorFlow", "PyTorch", "OpenCV", "LLMs", "RAG", "NLP"],
    languages: ["English", "Telugu", "Hindi"],
  },
  contact: {
    email: "hasanthkumarmajji@gmail.com",
    phone: "+91 80742 48715",
    location: "Hyderabad, India",
    linkedin: "https://www.linkedin.com/in/hasanth-kumar-majji",
    github: "https://github.com/Hasanth-kumar",
  },
};
