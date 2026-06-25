"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi"

const EXPERIENCES = [
  {
    company: "Emumba",
    role: "Gen AI Backend Developer",
    type: "On-site",
    period: "Jan 2026 – Mar 2026",
    location: "On-site Islamabad, Pakistan",
    bullets: [
      "Developed backend systems using Python and applied advanced prompt engineering to optimize Large Language Model outputs for enterprise applications.",
      "Engineered Retrieval-Augmented Generation (RAG) pipelines to enhance model accuracy and contextual query answering.",
      "Collaborated with cross-functional teams to deploy scalable AI features, ensuring low-latency data processing and API integration.",
    ],
    tags: ["Python", "LLMs", "RAG", "Prompt Engineering", "FastAPI"],
  },
  {
    company: "Developers Hub Corporation",
    role: "AI Intern",
    type: "Remote",
    period: "Mar 2025 – May 2025",
    location: "Remote",
    bullets: [
      "Developed Python scripts to extract, clean, and format raw data, creating high-quality datasets for testing internal machine learning models.",
      "Conducted foundational prompt engineering and benchmarked various open-source language models to document performance and response accuracy.",
      "Built internal UI dashboards and automated scripts to visualize AI outputs and test API endpoints, streamlining day-to-day development tasks.",
    ],
    tags: ["Python", "Prompt Engineering", "Data Processing", "Open-source LLMs", "API Testing"],
  },
  {
    company: "CodeAlpha",
    role: "Frontend Development Intern",
    type: "Remote",
    period: "Jul 2025 – Aug 2025",
    location: "Remote",
    bullets: [
      "Developed interactive frontend features and landing pages, focusing on mobile-first design principles.",
      "Translated design mockups into clean, semantic HTML/CSS and JavaScript code.",
      "Assisted in debugging UI issues and improving website performance metrics.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Mobile-first", "UI Debugging"],
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
  viewport: { once: true },
})

export default function Experience({ isDarkMode }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const card = isDarkMode
    ? "bg-zinc-900 border border-zinc-800"
    : "bg-white border border-zinc-200 shadow-sm"

  return (
    <section
      id="experience"
      className={`relative py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-16 overflow-hidden transition-colors duration-300 ${isDarkMode ? "bg-[#111111]" : "bg-white"}`}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div {...fadeUp()} className="text-center mb-12 sm:mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${isDarkMode ? "bg-emerald-900/20 text-emerald-400 border border-emerald-800/40" : "bg-emerald-50 text-emerald-700 border border-emerald-200"}`}>
            Work History
          </span>
          <h2 className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
            My <span className="shiny-text">Experience</span>
          </h2>
          <p className={`mt-4 text-base max-w-lg mx-auto ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
            Industry experience building production AI systems and backend services.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className={`absolute left-6 sm:left-8 top-0 bottom-0 w-px ${isDarkMode ? "bg-gradient-to-b from-emerald-700/60 via-emerald-800/30 to-transparent" : "bg-gradient-to-b from-emerald-300 via-emerald-200 to-transparent"}`} />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.15, ease: "easeOut" }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative pl-16 sm:pl-20"
              >
                {/* Timeline dot */}
                <div className={`absolute left-3.5 sm:left-5 top-6 w-5 h-5 rounded-full border-2 flex items-center justify-center ${isDarkMode ? "bg-zinc-900 border-emerald-600 ring-4 ring-[#111111]" : "bg-white border-emerald-500 ring-4 ring-white"}`}>
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>

                <motion.div
                  animate={{ y: hoveredIndex === i ? -4 : 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className={`p-6 rounded-2xl ${card}`}
                >
                  {/* Top row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`p-1.5 rounded-lg ${isDarkMode ? "bg-emerald-900/30" : "bg-emerald-50"}`}>
                          <FiBriefcase size={13} className={isDarkMode ? "text-emerald-400" : "text-emerald-600"} />
                        </div>
                        <h3 className={`text-lg font-extrabold ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
                          {exp.role}
                        </h3>
                      </div>
                      <p className={`text-base font-semibold ${isDarkMode ? "text-emerald-400" : "text-emerald-600"}`}>
                        {exp.company}
                      </p>
                    </div>
                    <div className={`flex flex-col sm:items-end gap-1 text-xs font-medium ${isDarkMode ? "text-zinc-500" : "text-zinc-500"}`}>
                      <span className="flex items-center gap-1.5">
                        <FiCalendar size={12} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FiMapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className={`flex gap-2.5 text-sm leading-relaxed ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
                        <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-emerald-500/70" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${isDarkMode ? "bg-zinc-800 border-zinc-700 text-zinc-400" : "bg-zinc-50 border-zinc-200 text-zinc-600"}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
