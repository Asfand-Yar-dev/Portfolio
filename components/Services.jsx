"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Server,
  Bot,
  Database,
  Mic,
  Code,
  Zap,
  Globe,
} from "lucide-react";

const SERVICES = [
  {
    icon: BrainCircuit,
    title: "Prompt Engineering",
    description:
      "Designing, optimizing, and evaluating prompts for LLMs to maximize accuracy, consistency, and performance across enterprise use cases.",
    gradient: "from-violet-500 to-indigo-700",
    glow: "group-hover:shadow-violet-500/20",
  },
  {
    icon: Bot,
    title: "RAG Pipeline Development",
    description:
      "End-to-end Retrieval-Augmented Generation systems with vector search, semantic chunking, and context-aware LLM responses for accurate document Q&A.",
    gradient: "from-cyan-500 to-teal-700",
    glow: "group-hover:shadow-cyan-500/20",
  },
  {
    icon: Mic,
    title: "AI Voice Agents",
    description:
      "Conversational voice agents powered by local or cloud LLMs with RAG integration  fully offline capable, low-latency, and production-ready.",
    gradient: "from-purple-500 to-violet-700",
    glow: "group-hover:shadow-purple-500/20",
  },
  {
    icon: Server,
    title: "AI Backend APIs",
    description:
      "Scalable Python backends with FastAPI and Node.js, integrating LLM capabilities, vector databases, and third-party AI APIs for real-world applications.",
    gradient: "from-green-500 to-emerald-700",
    glow: "group-hover:shadow-green-500/20",
  },
  {
    icon: Database,
    title: "Data Pipeline & Processing",
    description:
      "Automated ETL pipelines to extract, clean, and format raw data into high-quality datasets for ML training, benchmarking, and AI evaluation.",
    gradient: "from-teal-500 to-cyan-700",
    glow: "group-hover:shadow-teal-500/20",
  },
  {
    icon: Code,
    title: "LLM Integration",
    description:
      "Seamlessly integrating OpenAI, local LLMs via LM Studio, and open-source models into existing products  with evaluation pipelines and performance tracking.",
    gradient: "from-blue-500 to-indigo-700",
    glow: "group-hover:shadow-blue-500/20",
  },
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Responsive, pixel-perfect UIs built with React and Next.js, Tailwind CSS, and Framer Motion  from landing pages to full web applications.",
    gradient: "from-blue-500 to-indigo-700",
    glow: "group-hover:shadow-blue-500/20",
  },
  {
    icon: Globe,
    title: "Client Web Projects",
    description:
      "End-to-end websites for clients with clean design, mobile-first layout, SEO optimisation, and fast deployment  from healthcare to SaaS.",
    gradient: "from-rose-500 to-pink-700",
    glow: "group-hover:shadow-rose-500/20",
  },
  {
    icon: Zap,
    title: "AI Performance Tuning",
    description:
      "Benchmarking open-source and proprietary LLMs, reducing latency, and optimising inference pipelines for production AI systems.",
    gradient: "from-yellow-400 to-orange-600",
    glow: "group-hover:shadow-yellow-500/20",
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
    ? "bg-[#0f1629] border border-[#1e2d4a] hover:border-blue-800/60"
    : "bg-white border border-gray-200 hover:border-blue-300";

  return (
    <section
      id="services"
      className={`relative py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-16 overflow-hidden transition-colors duration-300 ${isDarkMode ? "bg-[#0a0d18]" : "bg-white"}`}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[140px] ${isDarkMode ? "bg-blue-900/10" : "bg-blue-50/70"}`}
        />
        <div
          className={`absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] ${isDarkMode ? "bg-purple-900/10" : "bg-purple-50/60"}`}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${isDarkMode ? "bg-blue-900/30 text-blue-400 border border-blue-800/40" : "bg-blue-50 text-blue-600 border border-blue-200"}`}
          >
            What I Do
          </span>
          <h2
            className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Services I <span className="shiny-text">Offer</span>
          </h2>
          <p
            className={`mt-4 text-base max-w-xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            From prompt design to production AI systems end-to-end Gen AI
            backend services.
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
                className={`group p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${service.glow} ${card}`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${service.gradient} shadow-md`}
                >
                  <Icon className="text-white" size={20} />
                </div>
                <h3
                  className={`text-base font-bold mb-2 leading-snug ${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                >
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div {...fadeUp(0.3)} className="mt-14 text-center">
          <p
            className={`text-base mb-5 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
          >
            Have a project in mind? Let's build something great together.
          </p>
          <motion.a
            href="mailto:asfandyar273263@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 transition-all duration-200"
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
