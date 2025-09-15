"use client"

import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect, useRef, useCallback, useMemo, lazy, Suspense } from "react"
import { FaReact, FaNodeJs } from "react-icons/fa"
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiGraphql } from "react-icons/si"

export default function Hero({ isDarkMode, toggleTheme, scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const canvasRef = useRef(null)
  const sidebarRef = useRef(null)
  const animationFrameRef = useRef(null)
  const particles = useRef([])
  const floatingIcons = useRef([])
  const shouldReduceMotion = useReducedMotion()
  // Add state to control animation rendering
  const [isInViewport, setIsInViewport] = useState(true)

  const techIcons = useMemo(
    () => [
      { icon: <FaReact className="w-full h-full text-[#61DAFB]" />, name: "React" },
      { icon: <SiTypescript className="w-full h-full text-[#3178C6]" />, name: "TypeScript" },
      { icon: <SiNextdotjs className="w-full h-full" />, name: "Next.js" },
      { icon: <SiTailwindcss className="w-full h-full text-[#06B6D4]" />, name: "Tailwind" },
      { icon: <FaNodeJs className="w-full h-full text-[#339933]" />, name: "Node.js" },
      { icon: <SiGraphql className="w-full h-full text-[#E10098]" />, name: "GraphQL" },
    ],
    []
  )

  const navItems = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "about", label: "About" },
      { id: "contact", label: "Contact" },
    ],
    []
  )

  const handleClickOutside = useCallback((event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsMenuOpen(false)
    }
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen, handleClickOutside])

  // Add intersection observer to only animate when in viewport
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    const heroElement = document.getElementById('home');
    if (heroElement) {
      observer.observe(heroElement);
    }
    
    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []);

  useEffect(() => {
    // Don't run animations if not in viewport or reduced motion is preferred
    const canvas = canvasRef.current
    if (!canvas || shouldReduceMotion || !isInViewport) return

    const ctx = canvas.getContext("2d", { alpha: true })
    let lastTime = 0
    // Reduce target FPS for better performance
    const targetFPS = 30
    const frameInterval = 1000 / targetFPS

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    // Use passive event listener for better performance
    window.addEventListener("resize", resizeCanvas, { passive: true })

    // Reduce number of particles for better performance
    particles.current = Array.from({ length: 20 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 1,
      speedY: (Math.random() - 0.5) * 1,
      color: isDarkMode
        ? `hsla(${Math.random() * 60 + 200}, 70%, 65%, ${Math.random() * 0.3 + 0.1})`
        : `hsla(${Math.random() * 60 + 200}, 70%, 45%, ${Math.random() * 0.2 + 0.05})`,
    }))

    // Reduce number of floating icons and simplify their animation
    floatingIcons.current = techIcons.slice(0, 4).map((tech, i) => ({
      ...tech,
      x: Math.random() * (canvas.width - 120) + 60,
      y: Math.random() * (canvas.height - 120) + 60,
      size: Math.random() * 15 + 35,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: (Math.random() - 0.5) * 0.2,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.4 + 0.2,
      phase: Math.random() * Math.PI * 2,
    }))

    const animate = (currentTime) => {
      if (!isInViewport) {
        // Skip animation frames when not in viewport
        animationFrameRef.current = requestAnimationFrame(animate)
        return
      }
      
      if (currentTime - lastTime < frameInterval) {
        animationFrameRef.current = requestAnimationFrame(animate)
        return
      }

      lastTime = currentTime
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Optimize particle rendering
      ctx.save()
      particles.current.forEach((p) => {
        p.x += p.speedX
        p.y += p.speedY

        if (p.x <= 0 || p.x >= canvas.width) {
          p.speedX *= -0.8
          p.x = Math.max(0, Math.min(canvas.width, p.x))
        }
        if (p.y <= 0 || p.y >= canvas.height) {
          p.speedY *= -0.8
          p.y = Math.max(0, Math.min(canvas.height, p.y))
        }

        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })
      ctx.restore()

      // Optimize floating icons animation
      floatingIcons.current.forEach((icon) => {
        icon.phase += 0.01
        icon.x += icon.speedX + Math.sin(icon.phase) * 0.1
        icon.y += icon.speedY + Math.cos(icon.phase * 0.8) * 0.1
        icon.rotation += icon.rotationSpeed

        if (icon.x < -60) icon.x = canvas.width + 60
        if (icon.x > canvas.width + 60) icon.x = -60
        if (icon.y < -60) icon.y = canvas.height + 60
        if (icon.y > canvas.height + 60) icon.y = -60
      })

      // Reduce max connections for better performance
      const maxConnections = 8
      let connectionCount = 0

      // Use a more efficient algorithm for connections
      for (let i = 0; i < particles.current.length && connectionCount < maxConnections; i++) {
        for (let j = i + 1; j < particles.current.length && connectionCount < maxConnections; j++) {
          const p1 = particles.current[i]
          const p2 = particles.current[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distanceSquared = dx * dx + dy * dy
          
          // Use squared distance for performance (avoid square root)
          if (distanceSquared < 10000) { // 100^2
            const distance = Math.sqrt(distanceSquared)
            const opacity = ((100 - distance) / 100) * 0.2
            ctx.strokeStyle = isDarkMode ? `hsla(200, 70%, 65%, ${opacity})` : `hsla(200, 70%, 45%, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
            connectionCount++
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [isDarkMode, techIcons, shouldReduceMotion, isInViewport])

  // Use memo for floating icons to prevent unnecessary re-renders
  const floatingIconsJSX = useMemo(
    () =>
      floatingIcons.current.map((icon, index) => (
        <motion.div
          key={`${icon.name}-${index}`}
          className="absolute flex items-center justify-center will-change-transform"
          initial={{
            x: icon.x,
            y: icon.y,
            rotate: icon.rotation,
            opacity: icon.opacity,
          }}
          animate={{
            x: [icon.x, icon.x + (Math.random() * 40 - 20), icon.x],
            y: [icon.y, icon.y + (Math.random() * 40 - 20), icon.y],
            rotate: icon.rotation + 360,
            transition: {
              duration: Math.random() * 30 + 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              type: "tween",
            },
          }}
          style={{
            width: `${icon.size}px`,
            height: `${icon.size}px`,
            filter: isDarkMode
              ? "drop-shadow(0 0 4px rgba(96, 165, 250, 0.2))"
              : "drop-shadow(0 0 4px rgba(59, 130, 246, 0.1))",
          }}
        >
          <div
            className={`relative w-3/4 h-3/4 flex items-center justify-center rounded-full 
          ${isDarkMode ? "bg-[#1e1e24]/90" : "bg-white/90"} 
          shadow-lg ${isDarkMode ? "shadow-blue-500/15" : "shadow-blue-500/8"} backdrop-blur-sm`}
          >
            <div className="relative z-10 w-1/2 h-1/2">{icon.icon}</div>
          </div>
        </motion.div>
      )),
    [isDarkMode, isInViewport]
  )

  const handleThemeToggle = useCallback(() => {
    setIsTransitioning(true)
    toggleTheme()
    setTimeout(() => setIsTransitioning(false), 400)
  }, [toggleTheme])

  return (
    <div
      id="home"
      className={`min-h-screen flex flex-col snap-start px-4 sm:px-6 md:px-5 py-2 relative overflow-hidden transition-all duration-500 ease-out ${
        isDarkMode ? "bg-[#0f0f14]" : "bg-[#F7F7F7]"
      }`}
      style={{
        "--bg-primary": isDarkMode ? "#0f0f14" : "#F7F7F7",
        "--text-primary": isDarkMode ? "#f3f4f6" : "#111827",
        "--text-secondary": isDarkMode ? "#d1d5db" : "#6b7280",
        "--border-color": isDarkMode ? "#374151" : "#d1d5db",
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 w-full h-full pointer-events-none will-change-transform"
        style={{ imageRendering: "optimizeSpeed" }}
      />

      {!shouldReduceMotion && (
        <div className="absolute inset-0 z-0 w-full h-full pointer-events-none overflow-hidden">{floatingIconsJSX}</div>
      )}

      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-black/15 backdrop-blur-sm will-change-transform"
          />
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav
        className={`flex justify-between items-center py-4 z-50 sticky top-0 backdrop-blur-md transition-all duration-500 ease-out ${
          isDarkMode ? "bg-[#0f0f14]/90" : "bg-[#F7F7F7]/90"
        }`}
      >
        <div
          className={`w-30 md:w-48 cursor-pointer font-bold text-xl flex items-center transition-all duration-300 ${isMenuOpen ? "filter blur-sm" : ""}`}
        >
          <span className="shiny-text">Asfand Yar</span>
        </div>

        
        <div className="max-lg:hidden md:flex md:gap-6 md:mr-0 lg:gap-12 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-2 py-1 overflow-hidden ${
                isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-black"
              } lg:text-lg md:text-md cursor-pointer font-medium transition-all duration-300 ${isMenuOpen ? "filter blur-sm" : ""}`}
            >
              {item.label}
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
                initial={{ scaleX: 0, originX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            </button>
          ))}
          
          {/* Resume Button */}
          <motion.a
            href="/Asfand_Yar_Resume.pdf"
            download={true}
            target="_blank"
            rel="noopener noreferrer"
             className={`px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:opacity-90 transition ${isMenuOpen ? "filter blur-sm" : ""}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Resume
          </motion.a>
        </div>

        <div
          className={`flex items-center gap-4 w-26 md:w-48 justify-end transition-all duration-300 ${isMenuOpen ? "filter blur-sm" : ""}`}
        >
          <motion.button
            onClick={handleThemeToggle}
            aria-label="Toggle dark mode"
            disabled={isTransitioning}
            className="relative cursor-pointer w-16 sm:w-20 h-9 sm:h-10 flex items-center rounded-full focus:outline-none overflow-hidden will-change-transform focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-transparent"
            style={{
              background: `linear-gradient(135deg, ${isDarkMode ? "#18181b" : "#f8fafc"} 0%, ${isDarkMode ? "#27272a" : "#f1f5f9"} 100%)`,
              border: `2px solid ${isDarkMode ? "#3f3f46" : "#cbd5e1"}`,
              boxShadow: isDarkMode
                ? "0 4px 12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)"
                : "0 4px 12px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)",
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                background: isDarkMode
                  ? "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.05) 100%)"
                  : "linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />

            <motion.span
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10"
              animate={{
                opacity: isDarkMode ? 0 : 1,
                scale: isDarkMode ? 0.7 : 1,
                rotate: isDarkMode ? -90 : 0,
              }}
              transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
                opacity: { duration: 0.2 },
                scale: { duration: 0.3 },
                rotate: { duration: 0.4 },
              }}
            >
              <FiSun
                className="text-amber-500"
                size={16}
                style={{
                  filter: "drop-shadow(0 0 4px rgba(245, 158, 11, 0.4))",
                }}
              />
            </motion.span>

            <motion.span
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10"
              animate={{
                opacity: isDarkMode ? 1 : 0,
                scale: isDarkMode ? 1 : 0.7,
                rotate: isDarkMode ? 0 : 90,
              }}
              transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
                opacity: { duration: 0.2 },
                scale: { duration: 0.3 },
                rotate: { duration: 0.4 },
              }}
            >
              <FiMoon
                className="text-blue-400"
                size={16}
                style={{
                  filter: "drop-shadow(0 0 4px rgba(96, 165, 250, 0.4))",
                }}
              />
            </motion.span>

            <motion.span
              className="absolute top-1/2 -translate-y-1/2 z-20 will-change-transform"
              animate={{
                left: isDarkMode ? "2px" : "calc(100% - 2px - 28px)",
              }}
              transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
                type: "tween",
              }}
            >
              <motion.span
                className="block rounded-full"
                style={{
                  width: 28,
                  height: 28,
                  background: isDarkMode
                    ? "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)"
                    : "linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)",
                  border: `2px solid ${isDarkMode ? "#e2e8f0" : "#cbd5e1"}`,
                  boxShadow: isDarkMode
                    ? "0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.9)"
                    : "0 2px 8px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,1)",
                }}
                animate={{
                  rotate: isDarkMode ? 180 : 0,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              />
            </motion.span>

            <motion.div
              className="absolute inset-0 rounded-full pointer-events-none"
              initial={{ scale: 0, opacity: 0 }}
              animate={
                isTransitioning
                  ? {
                      scale: [0, 1.2, 0],
                      opacity: [0, 0.3, 0],
                    }
                  : {}
              }
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{
                background: isDarkMode
                  ? "radial-gradient(circle, rgba(96, 165, 250, 0.3) 0%, transparent 70%)"
                  : "radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, transparent 70%)",
              }}
            />
          </motion.button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden flex items-center justify-center transition-all duration-300 ease-out ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            <motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }} transition={{ duration: 0.3, ease: "easeOut" }}>
              {isMenuOpen ? <FiX className="text-[26px]" /> : <FiMenu className="text-[26px]" />}
            </motion.div>
          </button>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            ref={sidebarRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              ease: [0.25, 0.46, 0.45, 0.94],
              duration: 0.35,
            }}
            className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs ${isDarkMode ? "bg-[#18181b]" : "bg-white"} shadow-2xl will-change-transform`}
          >
            <div className="flex justify-end p-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(false)}
                className={`p-2 rounded-full transition-colors duration-200 ${isDarkMode ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100 text-gray-600"}`}
              >
                <FiX className="text-2xl" />
              </motion.button>
            </div>

            <nav className="px-6 py-4">
              <ul className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.05 * index,
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  >
                    <motion.button
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        scrollToSection(item.id)
                        setIsMenuOpen(false)
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
                        isDarkMode ? "hover:bg-gray-800 text-gray-200" : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      {item.label}
                    </motion.button>
                  </motion.li>
                ))}
                
                {/* Resume Button for Mobile */}
                <motion.li
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.05 * navItems.length,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  <motion.a
                    href="/Asfand_Yar_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full flex justify-center items-center px-4 py-3 rounded-lg text-lg font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-all duration-200`}
                  >
                    Resume
                  </motion.a>
                </motion.li>
              </ul>
            </nav>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleThemeToggle}
                disabled={isTransitioning}
                className={`w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-800 text-gray-200 hover:bg-gray-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                } ${isTransitioning ? "opacity-75 cursor-not-allowed" : ""}`}
              >
                <motion.div
                  animate={{ rotate: isDarkMode ? 0 : 180 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                >
                  {isDarkMode ? (
                    <FiSun className="text-xl text-amber-500" />
                  ) : (
                    <FiMoon className="text-xl text-blue-500" />
                  )}
                </motion.div>
                <motion.span
                  key={isDarkMode ? "light" : "dark"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </motion.span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`flex-grow flex flex-col mb-8 justify-center w-full py-6 mt-6 sm:py-13 relative z-10 px-4 sm:px-8 transition-all duration-300 ${isMenuOpen ? "filter blur-sm" : ""}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className={`relative inline-flex items-center justify-center px-5 py-2 mb-8 rounded-full text-xs font-semibold tracking-widest uppercase ${
              isDarkMode ? "text-blue-100/90 bg-gray-900/20" : "text-blue-800/90 bg-white/80"
            } backdrop-blur-lg border ${
              isDarkMode
                ? "border-blue-400/20 shadow-[0_0_20px_-5px_rgba(96,165,250,0.3)]"
                : "border-blue-200/60 shadow-[0_0_20px_-8px_rgba(59,130,246,0.4)]"
            } overflow-hidden group will-change-transform`}
          >
            <div
              className={`absolute inset-0 rounded-full ${
                isDarkMode ? "bg-blue-900/10" : "bg-blue-100/20"
              } backdrop-blur-md`}
            />

            <motion.div
              className="absolute inset-0 rounded-full p-[1px] pointer-events-none"
              animate={{
                background: isDarkMode
                  ? "linear-gradient(135deg, rgba(96,165,250,0.3) 0%, rgba(129,140,248,0.2) 50%, rgba(96,165,250,0.3) 100%)"
                  : "linear-gradient(135deg, rgba(59,130,246,0.4) 0%, rgba(99,102,241,0.3) 50%, rgba(59,130,246,0.4) 100%)",
              }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <div
                className={`absolute inset-0 rounded-full ${
                  isDarkMode ? "bg-gray-900/70" : "bg-white/70"
                } backdrop-blur-[1px]`}
              />
            </motion.div>

            <div className="relative z-10 flex items-center gap-2">
              <motion.span
                className={`w-2 h-2 rounded-full ${isDarkMode ? "bg-blue-400" : "bg-blue-500"}`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <span className="relative overflow-hidden">
                <span className="block">FRONTEND DEVELOPER</span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: -100 }}
                  whileHover={{
                    x: 150,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  }}
                />
              </span>
            </div>

            {[...Array(3)].map((_, i) => (
              <motion.span
                key={i}
                className={`absolute rounded-full ${isDarkMode ? "bg-blue-400/20" : "bg-blue-500/20"}`}
                initial={{
                  scale: 0,
                  opacity: 0,
                  x: Math.random() * 40 - 20,
                  y: Math.random() * 40 - 20,
                }}
                animate={{
                  scale: [0, Math.random() * 0.6 + 0.3, 0],
                  opacity: [0, 0.3, 0],
                  x: [Math.random() * 40 - 20, Math.random() * 50 - 25, Math.random() * 40 - 20],
                  y: [Math.random() * 40 - 20, Math.random() * 50 - 25, Math.random() * 40 - 20],
                }}
                transition={{
                  duration: Math.random() * 4 + 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
                style={{
                  width: `${Math.random() * 4 + 3}px`,
                  height: `${Math.random() * 4 + 3}px`,
                }}
              />
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className={`text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6 ${
              isDarkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Crafting <span className="shiny-text">Digital Experiences</span>
            <br />
            That Drive Results
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className={`text-lg sm:text-xl max-w-2xl mx-auto mb-10 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            I build performant, accessible web applications with modern React ecosystems, delivering pixel-perfect UIs
            and seamless user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="bg-blue-600 hover:bg-blue-700 text-white text-md sm:text-lg px-8 py-3.5 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25 will-change-transform"
              onClick={() => scrollToSection(("projects"))}
            >
              View My Projects
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={`border-2 text-md sm:text-lg px-8 py-3.5 rounded-xl font-medium transition-all duration-300 will-change-transform ${
                isDarkMode
                  ? "border-gray-600 text-gray-200 hover:bg-gray-800 hover:border-gray-500"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
              }`}
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
