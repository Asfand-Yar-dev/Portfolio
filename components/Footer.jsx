"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { FiArrowUp } from "react-icons/fi"

const NAV_LINKS = [
  { id: "about",      label: "About"      },
  { id: "experience", label: "Experience" },
  { id: "skills",     label: "Skills"     },
  { id: "projects",   label: "Projects"   },
  { id: "contact",    label: "Contact"    },
]

const SOCIAL = [
  { Icon: FaGithub,     url: "https://github.com/Asfand-Yar-dev",         label: "GitHub"   },
  { Icon: FaLinkedinIn, url: "https://www.linkedin.com/in/asfandyar100/",  label: "LinkedIn" },
]

export default function Footer({ isDarkMode, scrollToSection }) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className={`relative overflow-hidden transition-colors duration-300 ${isDarkMode ? "bg-[#09090b] border-t border-zinc-800" : "bg-white border-t border-zinc-200"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="text-2xl font-extrabold shiny-text mb-3">
              Asfand Yar
            </div>
            <p className={`text-sm leading-relaxed mb-5 max-w-xs ${isDarkMode ? "text-zinc-500" : "text-zinc-500"}`}>
              Gen AI Backend Developer building LLM-powered systems, RAG pipelines, and scalable AI APIs.
            </p>
           
          </div>

          {/* Quick links */}
          <div>
            <h3 className={`text-sm font-bold uppercase tracking-wider mb-5 ${isDarkMode ? "text-zinc-400" : "text-zinc-700"}`}>
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`text-sm transition-colors duration-200 ${isDarkMode ? "text-zinc-500 hover:text-emerald-400" : "text-zinc-500 hover:text-emerald-600"}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className={`text-sm font-bold uppercase tracking-wider mb-5 ${isDarkMode ? "text-zinc-400" : "text-zinc-700"}`}>
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:asfandyar273263@gmail.com"
                  className={`text-sm transition-colors duration-200 ${isDarkMode ? "text-zinc-500 hover:text-emerald-400" : "text-zinc-500 hover:text-emerald-600"}`}
                >
                  asfandyar273263@gmail.com
                </a>
              </li>
              <li className={`text-sm ${isDarkMode ? "text-zinc-500" : "text-zinc-500"}`}>📍 Quetta, Pakistan</li>
              <li>
                <a
                  href="/Latest_Resume.pdf"
                  download
                  className={`inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${isDarkMode ? "bg-zinc-800 border border-zinc-700 text-zinc-300 hover:bg-zinc-700 hover:text-white" : "bg-zinc-100 border border-zinc-200 text-zinc-700 hover:bg-zinc-200"}`}
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className={`h-px w-full mb-8 ${isDarkMode ? "bg-zinc-800" : "bg-zinc-200"}`} />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className={`text-xs ${isDarkMode ? "text-zinc-600" : "text-zinc-400"}`}>
            © {new Date().getFullYear()} Asfand Yar. All rights reserved.
          </p>
          <motion.button
            onClick={scrollTop}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${isDarkMode ? "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white" : "bg-zinc-100 border border-zinc-200 text-zinc-600 hover:bg-zinc-200"}`}
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            <FiArrowUp size={13} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
