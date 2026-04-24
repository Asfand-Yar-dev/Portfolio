"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const TABS = ["AI & ML", "Backend", "Frontend", "Database & Cloud", "Tools"]

const SKILLS = {
  "AI & ML": [
    { name: "Python",              level: 85, color: "from-blue-400 to-yellow-500"    },
    { name: "LLM Integration",     level: 85, color: "from-indigo-400 to-blue-600"    },
    { name: "RAG Pipelines",       level: 82, color: "from-cyan-400 to-teal-600"      },
    { name: "OpenAI API",          level: 85, color: "from-green-400 to-emerald-600"  },
    { name: "LangChain",           level: 78, color: "from-yellow-400 to-orange-500"  },
    { name: "Prompt Engineering",  level: 88, color: "from-violet-400 to-purple-600"  },
    { name: "Data Processing",     level: 80, color: "from-pink-400 to-rose-600"      },
    { name: "FastAPI",             level: 75, color: "from-teal-400 to-cyan-600"      },
  ],
  "Backend": [
    { name: "Python",           level: 85, color: "from-blue-400 to-yellow-500"      },
    { name: "Node.js",          level: 80, color: "from-green-400 to-green-600"      },
    { name: "Express.js",       level: 80, color: "from-gray-400 to-gray-600"        },
    { name: "FastAPI",          level: 75, color: "from-teal-400 to-cyan-600"        },
    { name: "REST APIs",        level: 88, color: "from-blue-400 to-indigo-600"      },
    { name: "Authentication",   level: 82, color: "from-purple-400 to-violet-600"    },
    { name: "WebSockets",       level: 65, color: "from-yellow-400 to-orange-500"    },
  ],
  "Frontend": [
    { name: "React.js",         level: 86, color: "from-cyan-400 to-blue-500"        },
    { name: "Next.js",          level: 82, color: "from-gray-400 to-gray-600"        },
    { name: "TypeScript",       level: 74, color: "from-blue-400 to-blue-600"        },
    { name: "JavaScript ES6+",  level: 88, color: "from-yellow-400 to-yellow-500"   },
    { name: "Tailwind CSS",     level: 90, color: "from-teal-400 to-cyan-600"        },
    { name: "HTML & CSS",       level: 92, color: "from-orange-400 to-orange-600"   },
    { name: "Framer Motion",    level: 78, color: "from-pink-400 to-purple-500"      },
  ],
  "Database & Cloud": [
    { name: "MongoDB",          level: 78, color: "from-green-400 to-green-600"      },
    { name: "PostgreSQL",       level: 72, color: "from-indigo-400 to-blue-600"      },
    { name: "MySQL",            level: 82, color: "from-blue-400 to-blue-600"        },
    { name: "Vector DBs",       level: 70, color: "from-violet-400 to-purple-600"    },
    { name: "Redis",            level: 60, color: "from-red-400 to-orange-500"       },
    { name: "Firebase",         level: 72, color: "from-yellow-400 to-orange-500"    },
  ],
  "Tools": [
    { name: "Git & GitHub",     level: 88, color: "from-gray-400 to-gray-700"        },
    { name: "Docker",           level: 65, color: "from-blue-400 to-cyan-500"        },
    { name: "Postman",          level: 80, color: "from-orange-400 to-orange-600"    },
    { name: "VS Code",          level: 94, color: "from-blue-400 to-blue-600"        },
    { name: "Figma",            level: 72, color: "from-purple-400 to-pink-500"      },
    { name: "Jupyter Notebook", level: 80, color: "from-orange-400 to-amber-600"     },
  ],
}

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
        <span className={`text-sm font-semibold ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
          {skill.name}
        </span>
        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isDarkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-600"}`}>
          {skill.level}%
        </span>
      </div>
      <div className={`h-2 w-full rounded-full overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`}>
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative overflow-hidden`}
          initial={{ width: 0 }}
          animate={{ width: animated ? `${skill.level}%` : 0 }}
          transition={{ duration: 1.1, delay: delay + 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer" />
        </motion.div>
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
    ? "bg-[#1c1c1e] border border-[#2d2d33]"
    : "bg-white border border-gray-200 shadow-sm"

  return (
    <section
      id="skills"
      className={`relative py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-16 overflow-hidden transition-colors duration-300 ${isDarkMode ? "bg-[#121214]" : "bg-white"}`}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[150px] ${isDarkMode ? "bg-amber-900/10" : "bg-amber-50/80"}`} />
        <div className={`absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] ${isDarkMode ? "bg-teal-900/10" : "bg-teal-50/80"}`} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }} viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${isDarkMode ? "bg-amber-900/30 text-amber-400 border border-amber-800/40" : "bg-amber-50 text-amber-600 border border-amber-200"}`}>
            Expertise
          </span>
          <h2 className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            My <span className="shiny-text">Skills</span>
          </h2>
          <p className={`mt-4 text-base max-w-xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
            A comprehensive toolkit built through real-world projects and continuous learning.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <div className={`relative flex p-1.5 rounded-2xl gap-0 overflow-hidden ${isDarkMode ? "bg-[#1c1c1e] border border-[#2d2d33]" : "bg-gray-100 border border-gray-200"}`}>
            <motion.div
              className="absolute top-1.5 bottom-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-teal-600 shadow-lg"
              animate={{ left: indicator.left, width: indicator.width }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
            />
            {TABS.map((tab, i) => (
              <button
                key={tab}
                ref={(el) => (tabRefs.current[i] = el)}
                onClick={() => setActiveTab(tab)}
                className={`relative z-10 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-colors duration-200 whitespace-nowrap ${activeTab === tab ? "text-white" : isDarkMode ? "text-gray-400 hover:text-gray-200" : "text-gray-500 hover:text-gray-800"}`}
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
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {[
            { label: "AI & LLM Expert",      color: isDarkMode ? "text-violet-400 bg-violet-900/20 border-violet-800/40" : "text-violet-700 bg-violet-50 border-violet-200" },
            { label: "Prompt Engineer",      color: isDarkMode ? "text-cyan-400 bg-cyan-900/20 border-cyan-800/40"     : "text-cyan-700 bg-cyan-50 border-cyan-200"     },
            { label: "Frontend Proficient",  color: isDarkMode ? "text-blue-400 bg-blue-900/20 border-blue-800/40"     : "text-blue-700 bg-blue-50 border-blue-200"     },
            { label: "Backend Capable",      color: isDarkMode ? "text-green-400 bg-green-900/20 border-green-800/40"  : "text-green-700 bg-green-50 border-green-200"  },
            { label: "Database Proficient",  color: isDarkMode ? "text-orange-400 bg-orange-900/20 border-orange-800/40": "text-orange-700 bg-orange-50 border-orange-200" },
          ].map(({ label, color }) => (
            <span key={label} className={`px-4 py-2 rounded-full text-xs font-semibold border ${color}`}>{label}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
