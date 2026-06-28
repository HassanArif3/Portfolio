import { useEffect, useState, MouseEvent } from 'react';
import { Github, Linkedin, Mail, ArrowRight, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioData } from '../portfolioData';

export function Hero() {
  const { name, role, tagline, githubUrl, linkedinUrl, email } = portfolioData.personalInfo;
  
  // Clean one-time typing animation for the main role
  const [currentText, setCurrentText] = useState('');
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (currentText.length < role.length) {
      timeout = setTimeout(() => {
        setCurrentText(role.substring(0, currentText.length + 1));
      }, 70); // Smooth typing speed
    }
    return () => clearTimeout(timeout);
  }, [currentText, role]);

  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 w-full relative z-10 flex flex-col items-center text-center">
        
        {/* Pulsing "Available for opportunities" Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-cyan/20 bg-brand-cyan/5 text-xs font-mono tracking-wider text-brand-cyan mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
          </span>
          Available for Freelance & Full-Time
        </motion.div>

        {/* Hello Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono text-sm tracking-widest text-brand-purple uppercase mb-4"
        >
          Hello, my name is
        </motion.p>

        {/* Hero Main Heading: Full Name with soft glow behind */}
        <div className="relative">
          <div className="absolute -inset-4 bg-brand-cyan/10 blur-2xl rounded-full opacity-50"></div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white mb-6"
          >
            {name}
          </motion.h1>
        </div>

        {/* Typed Role Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-10 sm:h-12 md:h-16 flex items-center justify-center mb-8"
        >
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight">
            <span className="text-gray-400">I'm a </span>
            <span className="text-gradient font-bold">{currentText}</span>
            <span className="inline-block w-[2px] h-5 sm:h-6 md:h-8 ml-1 bg-brand-cyan animate-[pulse_1s_infinite] align-middle"></span>
          </h2>
        </motion.div>

        {/* Intro Tagline Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-10"
        >
          {tagline}
        </motion.p>

        {/* Hero CTA Button Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-12"
        >
          <a
            href="#projects"
            onClick={(e) => handleScrollTo(e, 'projects')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple bg-[length:200%_auto] hover:bg-right text-white font-medium text-sm tracking-wide transition-all duration-500 hover:shadow-[0_10px_40px_rgba(34,211,238,0.4)] hover:-translate-y-1 active:scale-[0.97] text-center flex items-center justify-center gap-2 group glow-btn"
          >
            View My Work
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-white font-medium text-sm tracking-wide transition-all duration-300 hover:bg-white/5 hover:border-brand-purple/40 text-center flex items-center justify-center gap-2 hover:shadow-[0_4px_25px_rgba(168,85,247,0.1)] hover:scale-[1.03] active:scale-[0.97]"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Navigation Anchors */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-6"
        >
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-brand-cyan transition-colors duration-300 transform hover:scale-110 p-2 hover:bg-white/5 rounded-xl border border-transparent hover:border-white/5"
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-brand-purple transition-colors duration-300 transform hover:scale-110 p-2 hover:bg-white/5 rounded-xl border border-transparent hover:border-white/5"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${email}`}
            className="text-gray-400 hover:text-brand-cyan transition-colors duration-300 transform hover:scale-110 p-2 hover:bg-white/5 rounded-xl border border-transparent hover:border-white/5"
            aria-label="Email Me"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>

      {/* Hero Scroll-Down Anchor */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-gray-500 hover:text-brand-cyan"
        onClick={(e) => handleScrollTo(e as any, 'about')}
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll Down</span>
        <ArrowDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
