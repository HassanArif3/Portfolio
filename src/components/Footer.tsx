import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../portfolioData';
import { motion } from 'motion/react';

export function Footer() {
  const { name, githubUrl, linkedinUrl, email } = portfolioData.personalInfo;
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-white/5 bg-[#080a0f]/90 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        
        {/* Left Side: Copyright Credits */}
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-400 font-sans">
            © {currentYear} <span className="text-white font-semibold">{name}</span>. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 font-mono">
            Designed & developed with React, Vite, and Tailwind CSS.
          </p>
        </div>

        {/* Middle/Right: Social & Action buttons */}
        <div className="flex items-center gap-6">
          {/* Social connections repeated */}
          <div className="flex items-center gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${email}`}
              className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
              aria-label="Email Me"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Vertical Separator */}
          <span className="h-4 w-[1px] bg-white/10 hidden sm:block" />

          {/* Back to top Button */}
          <motion.button
            onClick={handleScrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-brand-cyan hover:border-brand-cyan/20 transition-all flex items-center justify-center cursor-pointer"
            title="Scroll back to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>

      </div>
    </footer>
  );
}
