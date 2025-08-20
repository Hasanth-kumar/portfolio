import Image from "next/image";

import { SectionHeader } from "@/components/SectionHeader";
import Card from "@/components/Card";

import hrmsImage from "@/assets/images/hrms.png";
import mentalHealthChatbotImage from "@/assets/images/mentalHealthChatBot.png";
import pdfInsightImage from "@/assets/images/pdfinsight.png";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2024",
    title: "HRMS Leave Management Portal",
    description: "Full-stack HRMS portal with leave workflows, balance tracking, role-based access, and email notifications.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
    results: [
      { title: "Implemented role-based access control for secure management" },
      { title: "Built automated email notification system" },
      { title: "Created intuitive leave workflow management" },
    ],
    image: hrmsImage,
  },
  {
    company: "AI Project",
    year: "2024",
    title: "Mental Health Chatbot (Generative AI)",
    description: "AI-powered chatbot using LangChain, ChromaDB, Groq LLM. Supports CLI and Gradio web interface with vector embeddings and similarity search.",
    techStack: ["LangChain", "ChromaDB", "Groq LLM", "Gradio", "Python"],
    results: [
      { title: "Integrated advanced vector embeddings for better understanding" },
      { title: "Developed both CLI and web interfaces for accessibility" },
      { title: "Implemented semantic search for contextual responses" },
    ],
    image: mentalHealthChatbotImage,
  },
  {
    company: "AI Research",
    year: "2024",
    title: "PDF Insight (RAG Q&A System)",
    description: "PDF-based question answering system using Google Gemini Pro, FAISS, Streamlit. Implements chunking, embeddings, semantic search, and secure APIs.",
    techStack: ["Google Gemini Pro", "FAISS", "Streamlit", "Python"],
    results: [
      { title: "Built intelligent document processing with chunking strategy" },
      { title: "Implemented FAISS for efficient similarity search" },
      { title: "Created secure API endpoints for document interaction" },
    ],
    image: pdfInsightImage,
  },
  {
    company: "Backend Project",
    year: "2024",
    title: "User Management System (Microservices IAM)",
    description: "Spring Boot microservices system with JWT auth and REST APIs for user registration, profile management, and email notifications.",
    techStack: ["Spring Boot", "MongoDB Atlas", "Spring Security", "WebFlux", "JWT"],
    results: [
      { title: "Architected scalable microservices infrastructure" },
      { title: "Implemented secure JWT authentication system" },
      { title: "Built reactive programming with WebFlux" },
    ],
    image: darkSaasLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="My Work" title="Featured Projects" description="Explore my journey in AI, full-stack development, and innovative problem-solving." />

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">{project.title}</h3>
                  <p className="text-white/70 mt-2 text-sm md:text-base">{project.description}</p>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <div className="mt-4">
                    <h4 className="text-white/80 font-semibold text-sm mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
