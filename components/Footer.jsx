"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { FiArrowUp, FiHeart } from "react-icons/fi"

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
    <footer className={`relative overflow-hidden transition-colors duration-300 ${isDarkMode ? "bg-[#060810] border-t border-[#1e2d4a]/60" : "bg-white border-t border-gray-200"}`}>
      {/* Top gradient accent */}
      <div className={`h-px w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="text-2xl font-extrabold shiny-text mb-3">Asfand Yar</div>
            <p className={`text-sm leading-relaxed mb-5 max-w-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
              Full Stack Developer building modern, performant web applications with React, Next.js, Node.js, and beyond.
            </p>
            <div className="flex gap-2.5">
              {SOCIAL.map(({ Icon, url, label }) => (
                <motion.a
                  key={label}
                  href={url} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  className={`p-2.5 rounded-xl border transition-all duration-200 ${isDarkMode ? "border-[#1e2d4a] text-gray-400 hover:bg-[#0f1629] hover:text-white hover:border-blue-800/50" : "border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-800"}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.94 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className={`text-sm font-bold uppercase tracking-wider mb-5 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`text-sm transition-colors duration-200 hover:text-blue-500 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className={`text-sm font-bold uppercase tracking-wider mb-5 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:asfandyar273263@gmail.com"
                  className={`text-sm transition-colors duration-200 hover:text-blue-500 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                >
                  asfandyar273263@gmail.com
                </a>
              </li>
              <li className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>📍 Quetta, Pakistan</li>
              <li>
                <a
                  href="/Latest_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className={`h-px w-full mb-8 ${isDarkMode ? "bg-[#1e2d4a]/60" : "bg-gray-200"}`} />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          

          <motion.button
            onClick={scrollTop}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${isDarkMode ? "bg-[#0f1629] border border-[#1e2d4a] text-gray-300 hover:border-blue-800/50 hover:text-white" : "bg-gray-100 border border-gray-200 text-gray-600 hover:bg-gray-200"}`}
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
