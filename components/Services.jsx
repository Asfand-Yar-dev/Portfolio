"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Server, Bot, Database, Mic, Code, Zap, Globe } from "lucide-react";

const SERVICES = [
  {
    icon: BrainCircuit,
    title: "Prompt Engineering",
    description:
      "Designing, optimizing, and evaluating prompts for LLMs to maximize accuracy, consistency, and performance across enterprise use cases.",
  },
  {
    icon: Bot,
    title: "RAG Pipeline Development",
    description:
      "End-to-end Retrieval-Augmented Generation systems with vector search, semantic chunking, and context-aware LLM responses for accurate document Q&A.",
  },
  {
    icon: Mic,
    title: "AI Voice Agents",
    description:
      "Conversational voice agents powered by local or cloud LLMs with RAG integration — fully offline capable, low-latency, and production-ready.",
  },
  {
    icon: Server,
    title: "AI Backend APIs",
    description:
      "Scalable Python backends with FastAPI and Node.js, integrating LLM capabilities, vector databases, and third-party AI APIs for real-world applications.",
  },
  {
    icon: Database,
    title: "Data Pipeline & Processing",
    description:
      "Automated ETL pipelines to extract, clean, and format raw data into high-quality datasets for ML training, benchmarking, and AI evaluation.",
  },
  {
    icon: Code,
    title: "LLM Integration",
    description:
      "Seamlessly integrating OpenAI, local LLMs via LM Studio, and open-source models into existing products — with evaluation pipelines and performance tracking.",
  },
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Responsive, pixel-perfect UIs built with React and Next.js, Tailwind CSS, and Framer Motion — from landing pages to full web applications.",
  },
  {
    icon: Globe,
    title: "Client Web Projects",
    description:
      "End-to-end websites for clients with clean design, mobile-first layout, SEO optimisation, and fast deployment — from healthcare to SaaS.",
  },
  {
    icon: Zap,
    title: "AI Performance Tuning",
    description:
      "Benchmarking open-source and proprietary LLMs, reducing latency, and optimising inference pipelines for production AI systems.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
  viewport: { once: true },
});

export default function ServicesSection({ isDarkMode }) {
  const card = isDarkMode
    ? "bg-zinc-900 border border-zinc-800 hover:border-emerald-800/60"
    : "bg-white border border-zinc-200 hover:border-emerald-300";

  return (
    <section
      id="services"
      className={`relative py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-16 overflow-hidden transition-colors duration-300 ${isDarkMode ? "bg-[#111111]" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${isDarkMode ? "bg-emerald-900/20 text-emerald-400 border border-emerald-800/40" : "bg-emerald-50 text-emerald-700 border border-emerald-200"}`}>
            What I Do
          </span>
          <h2 className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
            Services I <span className="shiny-text">Offer</span>
          </h2>
          <p className={`mt-4 text-base max-w-xl mx-auto ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
            From prompt design to production AI systems — end-to-end Gen AI backend services.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                {...fadeUp(i * 0.06)}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className={`group p-5 rounded-2xl border cursor-default ${card}`}
              >
                <motion.div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${isDarkMode ? "bg-emerald-900/30" : "bg-emerald-50"}`}
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                >
                  <Icon className={isDarkMode ? "text-emerald-400" : "text-emerald-600"} size={19} />
                </motion.div>
                <h3 className={`text-base font-bold mb-2 leading-snug ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isDarkMode ? "text-zinc-500" : "text-zinc-500"}`}>
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div {...fadeUp(0.3)} className="mt-14 text-center">
          <p className={`text-base mb-5 ${isDarkMode ? "text-zinc-500" : "text-zinc-500"}`}>
            Have a project in mind? Let's build something great together.
          </p>
          <motion.a
            href="mailto:asfandyar273263@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-semibold shadow-sm transition-all duration-200 bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/20"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Start a Project →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
