import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingBackground } from './components/FloatingBackground';
import { LoadingScreen } from './components/LoadingScreen';
import { motion } from 'motion/react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen text-[#f1f5f9] bg-[#080a0f] antialiased">
      {/* Absolute ambient backgrounds */}
      <FloatingBackground />

      {/* Main Page Content Wrapper with staggered entrances */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="flex flex-col w-full relative z-10"
      >
        {/* Sticky Global Navigation */}
        <Navbar />

        {/* Individual Portfolio Modules */}
        <main className="flex-grow w-full">
          <Hero />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <span className="block h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          </div>
          
          <About />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <span className="block h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          </div>
          
          <Skills />

          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <span className="block h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          </div>
          
          <Services />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <span className="block h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          </div>
          
          <Projects />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <span className="block h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          </div>
          
          <Contact />
        </main>

        {/* Global Footer Details */}
        <Footer />
      </motion.div>
    </div>
  );
}
