"use client";

import { motion } from "framer-motion";
import { FiCpu, FiServer, FiDatabase } from "react-icons/fi";

const TECH_STACK = [
  "Python", "LangChain", "OpenAI API", "FastAPI", "RAG Pipelines",
  "Prompt Engineering", "LLMs", "Node.js", "REST APIs", "MongoDB",
  "PostgreSQL", "Docker", "Git & GitHub", "React.js", "Next.js", "Tailwind CSS",
];

const HIGHLIGHTS = [
  { icon: FiCpu,      label: "AI & LLMs",  desc: "Prompt Engineering, LangChain, OpenAI, RAG" },
  { icon: FiServer,   label: "Backend",    desc: "Python, FastAPI, Node.js, REST APIs" },
  { icon: FiDatabase, label: "Databases",  desc: "MongoDB, PostgreSQL, Vector DBs, Redis" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
  viewport: { once: true },
});

export default function About({ isDarkMode }) {
  const card = isDarkMode
    ? "bg-zinc-900 border border-zinc-800"
    : "bg-white border border-zinc-200 shadow-sm";

  return (
    <section
      id="about"
      className={`flex items-center relative py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-16 overflow-hidden transition-colors duration-300 ${isDarkMode ? "bg-[#09090b]" : "bg-[#fafafa]"}`}
    >
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Section header */}
        <motion.div {...fadeUp()} className="text-center mb-10 sm:mb-16">
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${isDarkMode ? "bg-emerald-900/20 text-emerald-400 border border-emerald-800/40" : "bg-emerald-50 text-emerald-700 border border-emerald-200"}`}
          >
            Who I Am
          </span>
          <h2 className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
            About <span className="shiny-text">Me</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <motion.div {...fadeUp(0.15)} className="text-center">
              <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
                Gen AI Backend Developer from Pakistan 🇵🇰
              </h3>
              <div className={`space-y-4 text-base leading-relaxed ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
                <p>
                  I'm{" "}
                  <strong className={isDarkMode ? "text-white" : "text-zinc-900"}>Asfand Yar</strong>
                  , a Gen AI Backend Developer with hands-on industry experience
                  building LLM-powered systems, RAG pipelines, and scalable AI
                  APIs for enterprise applications.
                </p>
                <p>
                  I specialize in{" "}
                  <strong className={isDarkMode ? "text-white" : "text-zinc-900"}>Prompt Engineering</strong>{" "}
                  and{" "}
                  <strong className={isDarkMode ? "text-white" : "text-zinc-900"}>Retrieval-Augmented Generation (RAG)</strong>{" "}
                  — optimizing language model outputs for accuracy,
                  context-awareness, and low-latency production use cases.
                </p>
                <p>
                  With a strong backend foundation in{" "}
                  <strong className={isDarkMode ? "text-white" : "text-zinc-900"}>Python, FastAPI, and Node.js</strong>
                  , I bridge the gap between cutting-edge AI research and
                  real-world software products.
                </p>
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div {...fadeUp(0.2)} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {HIGHLIGHTS.map(({ icon: Icon, label, desc }) => (
                <div
                  key={label}
                  className={`p-4 rounded-2xl ${card} transition-all duration-200 hover:-translate-y-1`}
                >
                  <div className={`p-2 rounded-lg w-fit mb-3 ${isDarkMode ? "bg-emerald-900/30" : "bg-emerald-50"}`}>
                    <Icon className={isDarkMode ? "text-emerald-400" : "text-emerald-600"} size={18} />
                  </div>
                  <p className={`text-sm font-bold mb-1 ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
                    {label}
                  </p>
                  <p className={`text-xs leading-relaxed ${isDarkMode ? "text-zinc-500" : "text-zinc-500"}`}>
                    {desc}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Tech stack pills */}
            <motion.div {...fadeUp(0.25)}>
              <p className={`text-sm font-semibold uppercase tracking-wider mb-3 ${isDarkMode ? "text-zinc-500" : "text-zinc-500"}`}>
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
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 hover:-translate-y-0.5 cursor-default ${isDarkMode ? "bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-emerald-700/60 hover:text-emerald-300" : "bg-white border-zinc-200 text-zinc-600 hover:border-emerald-300 shadow-sm"}`}
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
