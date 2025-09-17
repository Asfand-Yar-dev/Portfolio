"use client";

import { lazy, Suspense, useState } from "react";
import Hero from "@/components/Hero";

// Lazy load non-critical components
const Projects = lazy(() => import("@/components/Projects"));
const Footer = lazy(() => import("@/components/Footer"));
const About = lazy(() => import("@/components/About"));
const Contact = lazy(() => import("@/components/Contact"));
const Skills = lazy(() => import("@/components/Skills"));
const ServicesSection = lazy(() => import("@/components/Services"));

// Simple loading component
const SectionLoader = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-40 w-full max-w-4xl rounded"></div>
  </div>
);

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (id: any) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-x-hidden scroll-smooth">
      <Hero
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        scrollToSection={scrollToSection}
      />

      {/* Divider */}
      <div className={`w-full h-[3px] ${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`} />

      <Suspense fallback={<SectionLoader />}>
        <Skills isDarkMode={isDarkMode} />
      </Suspense>

      <div className={`w-full h-[3px] ${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`} />

      <Suspense fallback={<SectionLoader />}>
        <ServicesSection isDarkMode={isDarkMode} />
      </Suspense>

      <div className={`w-full h-[3px] ${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`} />

      <Suspense fallback={<SectionLoader />}>
        <Projects isDarkMode={isDarkMode} />
      </Suspense>

      <div className={`w-full h-[3px] ${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`} />

      <Suspense fallback={<SectionLoader />}>
        <About isDarkMode={isDarkMode} />
      </Suspense>

      <div className={`w-full h-[3px] ${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`} />

      <Suspense fallback={<SectionLoader />}>
        <Contact isDarkMode={isDarkMode} />
      </Suspense>

      <div className={`w-full h-[3px] ${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`} />

      <Suspense fallback={<SectionLoader />}>
        <Footer isDarkMode={isDarkMode} />
      </Suspense>

      <div className={`w-full h-[3px] ${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`} />
    </div>
  );
}
