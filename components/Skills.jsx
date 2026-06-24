"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const TABS = ["AI & ML", "Backend", "Frontend", "Database & Cloud", "Tools"]

const SKILLS = {
  "AI & ML": [
    { name: "Python",             level: 85 },
    { name: "LLM Integration",    level: 85 },
    { name: "RAG Pipelines",      level: 82 },
    { name: "OpenAI API",         level: 85 },
    { name: "LangChain",          level: 78 },
    { name: "Prompt Engineering", level: 88 },
    { name: "Data Processing",    level: 80 },
    { name: "FastAPI",            level: 75 },
  ],
  "Backend": [
    { name: "Python",         level: 80 },
    { name: "Node.js",        level: 75 },
    { name: "Express.js",     level: 60 },
    { name: "FastAPI",        level: 75 },
    { name: "REST APIs",      level: 88 },
    { name: "Authentication", level: 82 },
    { name: "WebSockets",     level: 65 },
  ],
  "Frontend": [
    { name: "React.js",        level: 80 },
    { name: "Next.js",         level: 82 },
    { name: "TypeScript",      level: 70 },
    { name: "JavaScript ES6+", level: 85 },
    { name: "Tailwind CSS",    level: 90 },
    { name: "HTML & CSS",      level: 92 },
    { name: "Framer Motion",   level: 70 },
  ],
  "Database & Cloud": [
    { name: "MongoDB",    level: 78 },
    { name: "PostgreSQL", level: 60 },
    { name: "MySQL",      level: 82 },
    { name: "Vector DBs", level: 70 },
    { name: "Redis",      level: 60 },
    { name: "Firebase",   level: 70 },
  ],
  "Tools": [
    { name: "Git & GitHub",     level: 88 },
    { name: "Docker",           level: 65 },
    { name: "Postman",          level: 80 },
    { name: "VS Code",          level: 94 },
    { name: "Figma",            level: 70 },
    { name: "Jupyter Notebook", level: 75 },
  ],
}

const SUMMARY_PILLS = [
  "AI & LLM Expert",
  "Prompt Engineer",
  "Frontend Proficient",
  "Backend Capable",
  "Database Proficient",
]

function SkillBar({ skill, delay, isDarkMode }) {
  const [animated, setAnimated] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      className="space-y-2"
      onViewportEnter={() => setAnimated(true)}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center">
        <span className={`text-sm font-semibold ${isDarkMode ? "text-zinc-200" : "text-zinc-800"}`}>
          {skill.name}
        </span>
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${isDarkMode ? "bg-zinc-800 text-zinc-400" : "bg-zinc-100 text-zinc-600"}`}>
          {skill.level}%
        </span>
      </div>
      <div className={`h-1.5 w-full rounded-full overflow-hidden ${isDarkMode ? "bg-zinc-800" : "bg-zinc-200"}`}>
        <motion.div
          className="h-full rounded-full relative overflow-hidden bg-emerald-500"
          initial={{ width: 0 }}
          animate={{ width: animated ? `${skill.level}%` : 0 }}
          transition={{ duration: 1.1, delay: delay + 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills({ isDarkMode }) {
  const [activeTab, setActiveTab] = useState("AI & ML")
  const tabRefs = useRef([])
  const [indicator, setIndicator] = useState({ width: 0, left: 0 })

  useEffect(() => {
    const idx = TABS.indexOf(activeTab)
    const el = tabRefs.current[idx]
    if (el) setIndicator({ width: el.offsetWidth, left: el.offsetLeft })
  }, [activeTab])

  const card = isDarkMode
    ? "bg-zinc-900 border border-zinc-800"
    : "bg-white border border-zinc-200 shadow-sm"

  return (
    <section
      id="skills"
      className={`relative py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-16 overflow-hidden transition-colors duration-300 ${isDarkMode ? "bg-[#111111]" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }} viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${isDarkMode ? "bg-emerald-900/20 text-emerald-400 border border-emerald-800/40" : "bg-emerald-50 text-emerald-700 border border-emerald-200"}`}>
            Expertise
          </span>
          <h2 className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-zinc-900"}`}>
            My <span className="shiny-text">Skills</span>
          </h2>
          <p className={`mt-4 text-base max-w-xl mx-auto ${isDarkMode ? "text-zinc-400" : "text-zinc-500"}`}>
            A comprehensive toolkit built through real-world projects and continuous learning.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <div className={`relative flex p-1.5 rounded-2xl gap-0 overflow-hidden ${isDarkMode ? "bg-zinc-900 border border-zinc-800" : "bg-zinc-100 border border-zinc-200"}`}>
            <motion.div
              className={`absolute top-1.5 bottom-1.5 rounded-xl shadow-sm ${isDarkMode ? "bg-emerald-600" : "bg-emerald-600"}`}
              animate={{ left: indicator.left, width: indicator.width }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
            />
            {TABS.map((tab, i) => (
              <button
                key={tab}
                ref={(el) => (tabRefs.current[i] = el)}
                onClick={() => setActiveTab(tab)}
                className={`relative z-10 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-colors duration-200 whitespace-nowrap ${activeTab === tab ? "text-white" : isDarkMode ? "text-zinc-500 hover:text-zinc-300" : "text-zinc-500 hover:text-zinc-700"}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className={`rounded-3xl p-6 sm:p-8 ${card}`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SKILLS[activeTab].map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} delay={i * 0.05} isDarkMode={isDarkMode} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom summary pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {SUMMARY_PILLS.map((label) => (
            <span
              key={label}
              className={`px-4 py-2 rounded-full text-xs font-semibold border ${isDarkMode ? "text-emerald-400 bg-emerald-900/20 border-emerald-800/40" : "text-emerald-700 bg-emerald-50 border-emerald-200"}`}
            >
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
