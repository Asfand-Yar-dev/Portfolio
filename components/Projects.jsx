"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiStar } from "react-icons/fi";

const PROJECTS = [
  {
    title: "AI Powered Voice Agent",
    description:
      "Conversational voice agent built with RAG and a local LLM served via LM Studio. Processes user speech, retrieves context from a vector store, and generates accurate responses — fully offline, zero cloud dependency.",
    tech: ["Python", "LM Studio", "RAG", "LangChain", "Vector DB", "Speech API"],
    category: "AI & ML",
    featured: true,
    live: null,
  },
  {
    title: "LLM Prompt Optimization Engine",
    description:
      "Prompt engineering framework to benchmark and optimize LLM outputs. Includes automated evaluation pipelines, few-shot template generation, and performance tracking across model versions.",
    tech: ["Python", "OpenAI API", "Prompt Engineering", "FastAPI", "PostgreSQL"],
    category: "AI & ML",
    featured: false,
    live: null,
  },
  {
    title: "AI Dataset Pipeline",
    description:
      "Automated ETL pipeline to extract, clean, and format raw datasets for machine learning model training and benchmarking. Cut data preparation time by over 60%.",
    tech: ["Python", "Pandas", "NumPy", "REST API", "Data Processing"],
    category: "AI & ML",
    featured: false,
    live: null,
  },
  {
    title: "Healing Hands of Virginia",
    description:
      "Client website for a healthcare practice in Virginia. Clean, accessible design with appointment booking, service listings, and mobile-first layout.",
    tech: ["Web Development", "Responsive Design", "SEO", "UI/UX"],
    category: ["Client", "Frontend"],
    featured: false,
    live: "https://healinghandsofvirginia.com",
  },
  {
    title: "my1ai.app",
    description:
      "AI-powered web application for clients. Features intelligent automation, a clean user interface, and seamless API integrations for real-world AI use cases.",
    tech: ["AI Integration", "Web App", "API", "UI/UX"],
    category: ["Client", "Frontend"],
    featured: false,
    live: "https://my1ai.app",
  },
  {
    title: "Python AI Chatbot",
    description:
      "Intelligent chatbot with natural language processing using NLTK and intent classification, backed by a Flask REST API.",
    tech: ["Python", "NLTK", "TensorFlow", "Flask", "REST API"],
    category: "Backend",
    featured: false,
    live: null,
  },
  {
    title: "Developer Portfolio",
    description:
      "This portfolio built with Next.js, Framer Motion animations, dark/light theme, lazy-loaded sections, and a fully responsive mobile-first design.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    category: "Frontend",
    featured: false,
    live: null,
  },
  {
    title: "Snake Game Arcade",
    description:
      "Classic Snake game built in Python with Pygame. Features smooth controls, score tracking, increasing speed levels, collision detection, and a retro arcade-style UI.",
    tech: ["Python", "Pygame", "Game Dev", "OOP"],
    category: "Backend",
    featured: false,
    live: null,
  },
  {
    title: "URL Changer React App",
    description:
      "Dynamic React application for URL manipulation and redirection with real-time preview, input validation, copy-to-clipboard, and a clean responsive UI.",
    tech: ["React", "JavaScript", "React Router", "Tailwind CSS"],
    category: "Frontend",
    featured: false,
    live: null,
  },
];

const FILTERS = ["All", "AI & ML", "Frontend", "Client", "Backend"];


function ProjectCard({ project, isDarkMode }) {
  const categories = Array.isArray(project.category) ? project.category : [project.category];

  return (
    <motion.div
      className={`rounded-2xl overflow-hidden border h-full flex flex-col ${isDarkMode ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-300 shadow-sm"}`}
      whileHover={{
        y: -5,
        boxShadow: isDarkMode
          ? "0 20px 40px rgba(0,0,0,0.5)"
          : "0 20px 40px rgba(0,0,0,0.08)",
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* Header */}
      <div className={`relative px-5 pt-4 pb-3 border-b ${isDarkMode ? "border-zinc-800 bg-zinc-900" : "border-zinc-200 bg-zinc-50"}`}>
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${isDarkMode ? "bg-emerald-900/20 border-emerald-800/50 text-emerald-400" : "bg-emerald-50 border-emerald-200 text-emerald-700"}`}
              >
                {cat}
              </span>
            ))}
            {project.featured && (
              <span className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${isDarkMode ? "bg-emerald-900/30 border-emerald-800/50 text-emerald-400" : "bg-emerald-50 border-emerald-300 text-emerald-700"}`}>
                <FiStar size={10} />
                Featured
              </span>
            )}
          </div>
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors duration-200 ${isDarkMode ? "border-zinc-700 text-zinc-400 hover:border-emerald-700 hover:text-emerald-300" : "border-zinc-300 text-zinc-600 hover:border-emerald-500 hover:text-emerald-700"}`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiExternalLink size={12} />
              Live
            </motion.a>
          )}
        </div>
        <h3 className={`mt-3 text-base font-bold leading-snug ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
          {project.title}
        </h3>
      </div>

      {/* Body */}
      <div className="px-5 pt-3 pb-5 flex flex-col flex-1 gap-3">
        <p className={`text-sm leading-relaxed flex-1 ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`px-2.5 py-1 rounded-full text-xs font-medium border ${isDarkMode ? "bg-emerald-900/20 border-emerald-800/50 text-emerald-400" : "bg-emerald-50 border-emerald-200 text-emerald-700"}`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects({ isDarkMode }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) =>
          Array.isArray(p.category)
            ? p.category.includes(activeFilter)
            : p.category === activeFilter
        );

  return (
    <section
      id="projects"
      className={`relative py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-16 overflow-hidden transition-colors duration-300 ${isDarkMode ? "bg-[#09090b]" : "bg-[#fafafa]"}`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${isDarkMode ? "bg-emerald-900/20 text-emerald-400 border border-emerald-800/40" : "bg-emerald-50 text-emerald-700 border border-emerald-200"}`}>
            Portfolio
          </span>
          <h2 className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
            My <span className="shiny-text">Projects</span>
          </h2>
          <p className={`mt-4 text-base max-w-xl mx-auto ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
            Real-world AI systems, RAG pipelines, and client applications built in production environments.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors duration-200 ${
                activeFilter === f
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-sm shadow-emerald-900/30"
                  : isDarkMode
                    ? "bg-transparent text-zinc-500 border-zinc-800 hover:border-zinc-600 hover:text-zinc-300"
                    : "bg-white text-zinc-600 border-zinc-300 hover:border-zinc-400 hover:text-zinc-900"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.06, ease: "easeOut" }}
              >
                <ProjectCard project={project} isDarkMode={isDarkMode} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
