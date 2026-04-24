"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiDownload,
  FiArrowRight,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const ROLES = [
  "Gen AI Backend Developer",
  "Prompt Engineer",
  "Python & LLM Engineer",
  "RAG Pipeline Builder",
  "Frontend Developer",
];

const STATS = [
  { value: "1+", label: "Years Experience" },
  { value: "15+", label: "Projects Built" },
  { value: "10+", label: "Technologies" },
  { value: "100%", label: "Dedication" },
];

function TypedText({ texts, isDarkMode }) {
  const [display, setDisplay] = useState("");
  const stateRef = useRef({
    index: 0,
    charIndex: 0,
    deleting: false,
    paused: false,
  });

  useEffect(() => {
    let timer;
    const tick = () => {
      const s = stateRef.current;
      const full = texts[s.index];

      if (!s.deleting) {
        const next = full.slice(0, s.charIndex + 1);
        setDisplay(next);
        s.charIndex++;
        if (s.charIndex === full.length) {
          timer = setTimeout(() => {
            s.deleting = true;
            timer = setTimeout(tick, 50);
          }, 2200);
          return;
        }
        timer = setTimeout(tick, 75);
      } else {
        const next = full.slice(0, s.charIndex - 1);
        setDisplay(next);
        s.charIndex--;
        if (s.charIndex === 0) {
          s.deleting = false;
          s.index = (s.index + 1) % texts.length;
        }
        timer = setTimeout(tick, 45);
      }
    };
    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, [texts]);

  return (
    <span>
      {display}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.9, ease: "easeInOut" }}
        className={`inline-block w-[2px] h-[0.85em] ml-[2px] align-middle rounded-sm ${isDarkMode ? "bg-amber-400" : "bg-amber-600"}`}
      />
    </span>
  );
}

export default function Hero({ isDarkMode, toggleTheme, scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [imageError, setImageError] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handler = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target))
        setIsMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isMenuOpen]);

  const handleTheme = useCallback(() => {
    setIsTransitioning(true);
    toggleTheme();
    setTimeout(() => setIsTransitioning(false), 400);
  }, [toggleTheme]);

  const navBg = scrolled
    ? isDarkMode
      ? "bg-[#0c0c0e]/95 border-b border-[#2d2d33] shadow-lg shadow-black/30"
      : "bg-white/95 border-b border-gray-200 shadow-lg shadow-gray-200/50"
    : "bg-transparent";

  return (
    <section
      id="home"
      className={`min-h-screen flex flex-col relative overflow-hidden ${isDarkMode ? "bg-[#0c0c0e]" : "bg-[#faf9f7]"}`}
    >
      {/* ── Background decoration ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute inset-0 ${isDarkMode ? "dot-grid-dark" : "dot-grid"} opacity-70`}
        />
        <div
          className={`absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full blur-[140px] ${isDarkMode ? "bg-amber-900/20" : "bg-amber-100/30"}`}
        />
        <div
          className={`absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full blur-[120px] ${isDarkMode ? "bg-teal-900/20" : "bg-teal-100/25"}`}
        />
      </div>

      {/* ── Fixed Navbar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-16 py-4 transition-all duration-300 backdrop-blur-md ${navBg}`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.button
            onClick={() => scrollToSection("home")}
            className="text-xl font-extrabold shiny-text cursor-pointer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
          >
            Asfand Yar
          </motion.button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-medium transition-colors duration-200 group ${isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-700 hover:text-gray-900"}`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-amber-500 to-teal-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <motion.button
              onClick={handleTheme}
              disabled={isTransitioning}
              aria-label="Toggle theme"
              className={`p-2 rounded-lg transition-colors duration-200 ${isDarkMode ? "bg-gray-800/80 text-yellow-400 hover:bg-gray-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
            >
              {isDarkMode ? <FiSun size={17} /> : <FiMoon size={17} />}
            </motion.button>

            {/* Resume  desktop */}
            <motion.a
              href="/Latest_Resume.pdf"
              download
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-teal-600 hover:from-amber-600 hover:to-teal-700 text-white text-sm font-semibold transition-all duration-200 shadow-md shadow-amber-500/20"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiDownload size={14} />
              Resume
            </motion.a>

            {/* Hamburger */}
            <button
              onClick={() => setIsMenuOpen((p) => !p)}
              className={`md:hidden p-2 rounded-lg transition-colors ${isDarkMode ? "text-gray-300 hover:bg-gray-800" : "text-gray-700 hover:bg-gray-100"}`}
            >
              {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile sidebar ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              ref={sidebarRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                ease: [0.25, 0.46, 0.45, 0.94],
                duration: 0.3,
              }}
              className={`fixed inset-y-0 right-0 z-50 w-72 flex flex-col ${isDarkMode ? "bg-[#1c1c1e]" : "bg-white"} shadow-2xl`}
            >
              <div className="flex justify-between items-center p-6 border-b border-white/10">
                <span className="font-extrabold shiny-text text-xl">
                  Asfand Yar
                </span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className={`p-2 rounded-lg ${isDarkMode ? "text-gray-300 hover:bg-gray-800" : "text-gray-700 hover:bg-gray-100"}`}
                >
                  <FiX size={22} />
                </button>
              </div>
              <nav className="flex-1 p-6 space-y-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-colors duration-200 ${isDarkMode ? "text-gray-200 hover:bg-white/5" : "text-gray-700 hover:bg-gray-100"}`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>
              <div className="p-6 border-t border-white/10 space-y-3">
                <a
                  href="/Latest_Resume.pdf"
                  download
                  className="flex items-center gap-2 justify-center w-full px-4 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-teal-600 text-white font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FiDownload size={16} />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Hero content ── */}
      <div className="flex-1 flex items-center pt-20">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12
         w-full py-8 sm:py-12 lg:py-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* LEFT  text */}
            <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
              {/* Available badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border ${isDarkMode ? "bg-green-900/20 border-green-800/40 text-green-400" : "bg-green-100 border-green-700 text-green-950"}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for hire
              </motion.div>

              {/* Name & role */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <p
                  className={`text-base font-medium mb-1 ${isDarkMode ? "text-gray-400" : "text-gray-900"}`}
                >
                  Hi there, I'm
                </p>
                <h1
                  className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-3 ${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  Asfand Yar
                </h1>
                <div
                  className={`text-xl sm:text-2xl font-semibold h-9 ${isDarkMode ? "text-amber-400" : "text-amber-600"}`}
                >
                  <TypedText texts={ROLES} isDarkMode={isDarkMode} />
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}
              >
                I build AI-powered backend systems with Python, LLMs, and RAG
                pipelines turning complex language models into scalable,
                production-ready applications.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-3 pt-1 justify-center lg:justify-start"
              >
                <motion.button
                  onClick={() => scrollToSection("projects")}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-teal-600 hover:from-amber-600 hover:to-teal-700 text-white font-semibold text-sm shadow-lg shadow-amber-500/30 transition-all duration-200"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View My Work <FiArrowRight size={15} />
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection("contact")}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl border-2 font-semibold text-sm transition-all duration-200 ${isDarkMode ? "border-gray-700 text-gray-200 hover:border-gray-500 hover:bg-white/5" : "border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"}`}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Contact Me
                </motion.button>
              </motion.div>
            </div>

            {/* RIGHT  profile image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                  type: "spring",
                  stiffness: 100,
                }}
                className="relative"
              >
                {/* Outer glow */}
                <div
                  className={`absolute inset-0 z-0 rounded-full scale-110 blur-2xl ${
                    isDarkMode
                      ? "bg-gradient-to-br from-amber-500/25 via-teal-500/15 to-transparent"
                      : "bg-gradient-to-br from-amber-300/50 via-teal-300/30 to-transparent"
                  }`}
                />

                {/* Gradient ring */}
                <div className="relative z-10 p-[3px] rounded-full bg-gradient-to-br from-amber-500 via-teal-500 to-emerald-500 shadow-2xl">
                  <div
                    className={`w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden ${
                      isDarkMode ? "bg-[#1c1c1e]" : "bg-blue-50"
                    } flex items-center justify-center`}
                  >
                    {!imageError ? (
                      <img
                        src="Gemini_Generated_Image_xjz4kjxjz4kjxjz4.png"
                        alt="Asfand Yar"
                        className="w-full h-full object-cover"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <span className="text-6xl sm:text-7xl font-extrabold shiny-text select-none">
                        AY
                      </span>
                    )}
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [-6, 6, -6] }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute z-20 -top-3 -right-2 sm:-right-6 px-3 py-2 rounded-2xl text-xs font-bold shadow-xl border ${
                    isDarkMode
                      ? "bg-[#1c1c1e] border-amber-900/60 text-amber-300"
                      : "bg-white border-amber-100 text-amber-700"
                  }`}
                >
                  💻 Python & LLMs
                </motion.div>

                <motion.div
                  animate={{ y: [6, -6, 6] }}
                  transition={{
                    duration: 3.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4,
                  }}
                  className={`absolute z-20 -bottom-3 -left-2 sm:-left-6 px-3 py-2 rounded-2xl text-xs font-bold shadow-xl border ${
                    isDarkMode
                      ? "bg-[#1c1c1e] border-teal-900/60 text-teal-300"
                      : "bg-white border-teal-100 text-teal-700"
                  }`}
                >
                  🔗 LangChain & RAG
                </motion.div>

                <motion.div
                  animate={{ y: [4, -4, 4] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                  }}
                  className={`absolute z-20 top-1/2 -translate-y-1/2 -left-4 sm:-left-10 px-3 py-2 rounded-2xl text-xs font-bold shadow-xl border ${
                    isDarkMode
                      ? "bg-[#1c1c1e] border-green-900/60 text-green-300"
                      : "bg-white border-green-100 text-green-700"
                  }`}
                >
                  ⚡ Prompt Engineer
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* ── Stats bar ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className={`mt-12 sm:mt-20 pt-8 sm:pt-10 border-t ${isDarkMode ? "border-gray-800/70" : "border-gray-200"} grid grid-cols-2 md:grid-cols-4 gap-8`}
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-extrabold mb-1 shiny-text">
                  {stat.value}
                </div>
                <div
                  className={`text-sm font-medium ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Floating WhatsApp button ── */}
      <motion.a
        href="https://wa.me/923310329489"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/40 hover:bg-[#1ebe5d] transition-colors duration-200"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.12, y: -3 }}
        whileTap={{ scale: 0.93 }}
      >
        <FaWhatsapp size={28} />
      </motion.a>
    </section>
  );
}
