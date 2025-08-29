"use client"

import Footer from '@/components/Footer';
import About from '@/components/About';
import Contact from '@/components/Contact';
import { useState } from 'react';

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <main>

      <About isDarkMode={isDarkMode} />
      {/* Divider */}
      <div className={`w-full h-[3px] ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />

       <Contact isDarkMode={isDarkMode} />
      {/* Divider */}
      <div className={`w-full h-[3px] ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />

      {/* Divider */}
      <Footer isDarkMode={isDarkMode} />
      <div className={`w-full h-[3px] ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />

      </main>
      
    </div>
  )
}
