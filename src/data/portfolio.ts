export interface PortfolioData {
  hero: {
    name: string;
    tagline: string;
    location: string;
    email: string;
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
    title: string;
    description: string;
    techStack: string[];
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
    location: string;
    linkedin: string;
    github: string;
  };
}

export const portfolioData: PortfolioData = {
  hero: {
    name: "Hasanth Kumar Majji",
    tagline: "Aspiring AI & ML Engineer | Full-Stack Developer | Problem Solver",
    location: "Hyderabad, Telangana",
    email: "hasanthkumarmajji@gmail.com",
    links: {
      linkedin: "https://www.linkedin.com/in/hasanth-kumar-majji",
      github: "https://github.com/Hasanth-kumar"
    }
  },
  education: [
    {
      institution: "Sreenidhi Institute of Science and Technology, Hyderabad",
      degree: "Bachelor of Technology in Information Technology",
      period: "Nov 2022 – Jun 2026",
      gpa: "8.7/10",
      coursework: [
        "Programming in Java",
        "C",
        "Python",
        "Data Structures",
        "Database Management",
        "AI Basics"
      ]
    }
  ],
  experience: [
    {
      role: "Volunteer",
      company: "Bachpan Prayas (Student NGO)",
      location: "Hyderabad, India",
      period: "Oct 2022 – Dec 2022",
      achievements: [
        "Coordinated logistics and communications for student-led events, ensuring smooth execution and high engagement.",
        "Collaborated with cross-functional teams to support over 100 participants, increasing event satisfaction by 25%."
      ]
    }
  ],
  projects: [
    {
      title: "HRMS Leave Management Portal",
      description: "Full-stack HRMS portal with leave workflows, balance tracking, role-based access, and email notifications.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"]
    },
    {
      title: "Mental Health Chatbot (Generative AI)",
      description: "AI-powered chatbot using LangChain, ChromaDB, Groq LLM. Supports CLI and Gradio web interface with vector embeddings and similarity search.",
      techStack: ["LangChain", "ChromaDB", "Groq LLM", "Gradio", "Python"]
    },
    {
      title: "PDF Insight (RAG Q&A System)",
      description: "PDF-based question answering system using Google Gemini Pro, FAISS, Streamlit. Implements chunking, embeddings, semantic search, and secure APIs.",
      techStack: ["Google Gemini Pro", "FAISS", "Streamlit", "Python"]
    },
    {
      title: "User Management System (Microservices IAM)",
      description: "Spring Boot microservices system with JWT auth and REST APIs for user registration, profile management, and email notifications.",
      techStack: ["Spring Boot", "MongoDB Atlas", "Spring Security", "WebFlux", "JWT"]
    }
  ],
  certifications: [
    "AI & ML Virtual Internship — AICTE (Apr 2024 – Jun 2024)",
    "Generative AI Internship — AICTE (Oct 2024 – Dec 2024)",
    "Data Analytics Essentials — Cisco Networking Academy (Apr 2025 – May 2025)",
    "EFSET: C2 Proficient"
  ],
  skills: {
    programming: ["Python", "Java", "C", "SQL", "JavaScript"],
    webDevelopment: ["HTML", "CSS", "MERN", "Spring Boot"],
    ai_ml_data: ["Pandas", "NumPy", "GCP"],
    languages: ["English", "Telugu", "Hindi"]
  },
  contact: {
    email: "hasanthkumarmajji@gmail.com",
    location: "Hyderabad, Telangana",
    linkedin: "https://www.linkedin.com/in/hasanth-kumar-majji",
    github: "https://github.com/Hasanth-kumar"
  }
};
