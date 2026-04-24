"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiStar } from "react-icons/fi";

const PROJECTS = [
  {
    title: "AI Powered Voice Agent",
    description:
      "Conversational voice agent built with RAG and a local LLM served via LM Studio. Processes user speech, retrieves context from a vector store, and generates accurate responses  fully offline, zero cloud dependency.",
    tech: [
      "Python",
      "LM Studio",
      "RAG",
      "LangChain",
      "Vector DB",
      "Speech API",
    ],
    category: "AI & ML",
    featured: true,
    gradient: "from-violet-600 via-purple-600 to-indigo-700",
    live: null,
  },
  {
    title: "LLM Prompt Optimization Engine",
    description:
      "Prompt engineering framework to benchmark and optimize LLM outputs. Includes automated evaluation pipelines, few-shot template generation, and performance tracking across model versions.",
    tech: [
      "Python",
      "OpenAI API",
      "Prompt Engineering",
      "FastAPI",
      "PostgreSQL",
    ],
    category: "AI & ML",
    featured: false,
    gradient: "from-cyan-500 via-teal-600 to-emerald-700",
    live: null,
  },
  {
    title: "AI Dataset Pipeline",
    description:
      "Automated ETL pipeline to extract, clean, and format raw datasets for machine learning model training and benchmarking. Cut data preparation time by over 60%.",
    tech: ["Python", "Pandas", "NumPy", "REST API", "Data Processing"],
    category: "AI & ML",
    featured: false,
    gradient: "from-green-500 via-emerald-600 to-teal-700",
    live: null,
  },
  {
    title: "Healing Hands of Virginia",
    description:
      "Client website for a healthcare practice in Virginia. Clean, accessible design with appointment booking, service listings, and mobile-first layout.",
    tech: ["Web Development", "Responsive Design", "SEO", "UI/UX"],
    category: "Client",
    featured: false,
    gradient: "from-rose-500 via-pink-600 to-fuchsia-700",
    live: "https://healinghandsofvirginia.com",
  },
  {
    title: "my1ai.app",
    description:
      "AI-powered web application for clients. Features intelligent automation, a clean user interface, and seamless API integrations for real-world AI use cases.",
    tech: ["AI Integration", "Web App", "API", "UI/UX"],
    category: "Client",
    featured: false,
    gradient: "from-blue-500 via-indigo-600 to-violet-700",
    live: "https://my1ai.app",
  },
  {
    title: "Python AI Chatbot",
    description:
      "Intelligent chatbot with natural language processing using NLTK and intent classification, backed by a Flask REST API.",
    tech: ["Python", "NLTK", "TensorFlow", "Flask", "REST API"],
    category: "Backend",
    featured: false,
    gradient: "from-orange-500 via-amber-600 to-yellow-600",
    live: null,
  },
  {
    title: "Developer Portfolio",
    description:
      "This portfolio built with Next.js, Framer Motion animations, dark/light theme, lazy-loaded sections, and a fully responsive mobile-first design.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    category: "Frontend",
    featured: false,
    gradient: "from-pink-500 via-rose-500 to-orange-500",
    live: null,
  },
  {
    title: "Snake Game Arcade",
    description:
      "Classic Snake game built in Python with Pygame. Features smooth controls, score tracking, increasing speed levels, collision detection, and a retro arcade-style UI.",
    tech: ["Python", "Pygame", "Game Dev", "OOP"],
    category: "Backend",
    featured: false,
    gradient: "from-lime-500 via-green-500 to-emerald-600",
    live: null,
  },
  {
    title: "URL Changer React App",
    description:
      "Dynamic React application for URL manipulation and redirection with real-time preview, input validation, copy-to-clipboard, and a clean responsive UI.",
    tech: ["React", "JavaScript", "React Router", "Tailwind CSS"],
    category: "Frontend",
    featured: false,
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
    live: null,
  },
];

const FILTERS = ["All", "AI & ML", "Frontend", "Client", "Backend"];

const CATEGORY_COLORS = {
  "AI & ML": {
    dark: "bg-violet-900/30 text-violet-300 border-violet-800/50",
    light: "bg-violet-50 text-violet-700 border-violet-200",
  },
  Client: {
    dark: "bg-rose-900/30 text-rose-300 border-rose-800/50",
    light: "bg-rose-50 text-rose-700 border-rose-200",
  },
  Backend: {
    dark: "bg-green-900/30 text-green-300 border-green-800/50",
    light: "bg-green-50 text-green-700 border-green-200",
  },
  Frontend: {
    dark: "bg-blue-900/30 text-blue-300 border-blue-800/50",
    light: "bg-blue-50 text-blue-700 border-blue-200",
  },
  "Full Stack": {
    dark: "bg-indigo-900/30 text-indigo-300 border-indigo-800/50",
    light: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
};

function ProjectCard({ project, isDarkMode }) {
  return (
    <motion.div
      className={`rounded-2xl overflow-hidden border h-full ${isDarkMode ? "bg-[#1c1c1e] border-[#2d2d33]" : "bg-white border-gray-200"}`}
      whileHover={{
        y: -6,
        boxShadow: isDarkMode
          ? "0 24px 48px rgba(0,0,0,0.4)"
          : "0 24px 48px rgba(0,0,0,0.10)",
      }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      {/* Banner */}
      <div
        className={`relative h-44 bg-gradient-to-br ${project.gradient} overflow-hidden`}
      >
        <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/10" />
        <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-black/10" />

        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-black/30 text-white text-xs font-semibold backdrop-blur-sm border border-white/20">
            {project.category}
          </span>
          {project.featured && (
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-300 text-xs font-semibold backdrop-blur-sm border border-yellow-400/30">
              <FiStar size={10} className="fill-yellow-300" />
              Featured
            </span>
          )}
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-extrabold text-white drop-shadow-md leading-tight">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 space-y-4">
        <p
          className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`px-2.5 py-1 rounded-full text-xs font-medium border ${isDarkMode ? "bg-gray-800/70 border-gray-700 text-gray-300" : "bg-gray-50 border-gray-200 text-gray-600"}`}
            >
              {t}
            </span>
          ))}
        </div>

        {project.live && (
          <div className="pt-1">
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-amber-500 to-teal-600 text-white hover:from-amber-600 hover:to-teal-700 transition-colors duration-200"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiExternalLink size={13} />
              View Live
            </motion.a>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects({ isDarkMode }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className={`relative py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-16 overflow-hidden transition-colors duration-300 ${isDarkMode ? "bg-[#0c0c0e]" : "bg-[#faf9f7]"}`}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full blur-[130px] ${isDarkMode ? "bg-amber-900/15" : "bg-amber-100/60"}`}
        />
        <div
          className={`absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] ${isDarkMode ? "bg-teal-900/15" : "bg-teal-100/50"}`}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${isDarkMode ? "bg-amber-900/30 text-amber-400 border border-amber-800/40" : "bg-amber-50 text-amber-600 border border-amber-200"}`}
          >
            Portfolio
          </span>
          <h2
            className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            My <span className="shiny-text">Projects</span>
          </h2>
          <p
            className={`mt-4 text-base max-w-xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Real-world AI systems, RAG pipelines, and client applications built
            in production environments.
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
                  ? "bg-gradient-to-r from-amber-500 to-teal-600 text-white border-transparent shadow-lg shadow-amber-500/20"
                  : isDarkMode
                    ? "bg-transparent text-gray-400 border-gray-700 hover:border-gray-500 hover:text-gray-200"
                    : "bg-white text-gray-600 border-gray-300 hover:border-gray-400"
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
