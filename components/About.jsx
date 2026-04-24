"use client";

import { motion } from "framer-motion";
import { FiCpu, FiServer, FiDatabase } from "react-icons/fi";

const TECH_STACK = [
  "Python",
  "LangChain",
  "OpenAI API",
  "FastAPI",
  "RAG Pipelines",
  "Prompt Engineering",
  "LLMs",
  "Node.js",
  "REST APIs",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Git & GitHub",
  "React.js",
  "Next.js",
  "Tailwind CSS",
];

const HIGHLIGHTS = [
  {
    icon: FiCpu,
    label: "AI & LLMs",
    desc: "Prompt Engineering, LangChain, OpenAI, RAG",
  },
  {
    icon: FiServer,
    label: "Backend",
    desc: "Python, FastAPI, Node.js, REST APIs",
  },
  {
    icon: FiDatabase,
    label: "Databases",
    desc: "MongoDB, PostgreSQL, Vector DBs, Redis",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
  viewport: { once: true },
});

export default function About({ isDarkMode }) {
  const card = isDarkMode
    ? "bg-[#1c1c1e] border border-[#2d2d33]"
    : "bg-white border border-gray-200 shadow-sm";

  return (
    <section
      id="about"
      className={`flex items-center relative py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-16 overflow-hidden transition-colors duration-300 ${isDarkMode ? "bg-[#0c0c0e]" : "bg-[#faf9f7]"}`}
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] ${isDarkMode ? "bg-teal-900/15" : "bg-teal-100/50"}`}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div {...fadeUp()} className="text-center mb-10 sm:mb-16">
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${isDarkMode ? "bg-amber-900/30 text-amber-400 border border-amber-800/40" : "bg-amber-50 text-amber-600 border border-amber-200"}`}
          >
            Who I Am
          </span>
          <h2
            className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            About <span className="shiny-text">Me</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Bio + highlights + tech stack */}
          <div className="space-y-8">
            <motion.div {...fadeUp(0.15)} className="text-center">
              <h3
                className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
              >
                Gen AI Backend Developer from Pakistan 🇵🇰
              </h3>
              <div
                className={`space-y-4 text-base leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                <p>
                  I'm{" "}
                  <strong
                    className={isDarkMode ? "text-white" : "text-gray-900"}
                  >
                    Asfand Yar
                  </strong>
                  , a Gen AI Backend Developer with hands-on industry experience
                  building LLM-powered systems, RAG pipelines, and scalable AI
                  APIs for enterprise applications.
                </p>
                <p>
                  I specialize in{" "}
                  <strong
                    className={isDarkMode ? "text-white" : "text-gray-900"}
                  >
                    Prompt Engineering
                  </strong>{" "}
                  and{" "}
                  <strong
                    className={isDarkMode ? "text-white" : "text-gray-900"}
                  >
                    Retrieval-Augmented Generation (RAG)
                  </strong>{" "}
                  optimizing language model outputs for accuracy,
                  context-awareness, and low-latency production use cases.
                </p>
                <p>
                  With a strong backend foundation in{" "}
                  <strong
                    className={isDarkMode ? "text-white" : "text-gray-900"}
                  >
                    Python, FastAPI, and Node.js
                  </strong>
                  , I bridge the gap between cutting-edge AI research and
                  real-world software products.
                </p>
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div
              {...fadeUp(0.2)}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {HIGHLIGHTS.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className={`p-4 rounded-2xl ${card} transition-all duration-200 hover:-translate-y-1`}
                >
                  <div
                    className={`p-2 rounded-lg w-fit mb-3 ${isDarkMode ? "bg-amber-900/40" : "bg-amber-50"}`}
                  >
                    <Icon className="text-amber-500" size={18} />
                  </div>
                  <p
                    className={`text-sm font-bold mb-1 ${isDarkMode ? "text-white" : "text-gray-900"}`}
                  >
                    {label}
                  </p>
                  <p
                    className={`text-xs leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Tech stack pills */}
            <motion.div {...fadeUp(0.25)}>
              <p
                className={`text-sm font-semibold uppercase tracking-wider mb-3 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
              >
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.03, duration: 0.3 }}
                    viewport={{ once: true }}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 hover:-translate-y-0.5 cursor-default ${isDarkMode ? "bg-[#1c1c1e] border-[#2d2d33] text-gray-300 hover:border-amber-700/60" : "bg-white border-gray-200 text-gray-600 hover:border-amber-300 shadow-sm"}`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
