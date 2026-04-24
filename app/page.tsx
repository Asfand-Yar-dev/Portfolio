"use client";

import { lazy, Suspense, useState } from "react";
import Hero from "@/components/Hero";

const About = lazy(() => import("@/components/About"));
const Experience = lazy(() => import("@/components/Experience"));
const Skills = lazy(() => import("@/components/Skills"));
const Projects = lazy(() => import("@/components/Projects"));
const ServicesSection = lazy(() => import("@/components/Services"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionLoader = () => (
  <div className="flex justify-center items-center py-32">
    <div className="flex gap-2">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  </div>
);

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`transition-colors duration-500 ${isDarkMode ? "bg-[#0c0c0e]" : "bg-[#faf9f7]"}`}>
      <Hero
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        scrollToSection={scrollToSection}
      />

      <Suspense fallback={<SectionLoader />}>
        <About isDarkMode={isDarkMode} />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Experience isDarkMode={isDarkMode} />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Skills isDarkMode={isDarkMode} />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Projects isDarkMode={isDarkMode} />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ServicesSection isDarkMode={isDarkMode} />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Contact isDarkMode={isDarkMode} />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Footer isDarkMode={isDarkMode} scrollToSection={scrollToSection} />
      </Suspense>
    </div>
  );
}
