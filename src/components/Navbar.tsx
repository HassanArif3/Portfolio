import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData } from '../portfolioData';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Detect scroll to style navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer to highlight active link
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'services', 'projects', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section is in the middle 50% of the screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of sticky header
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
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#080a0f]/85 backdrop-blur-md border-b border-white/5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.3)]' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-cyan to-brand-purple p-[1.5px] flex items-center justify-center transition-transform group-hover:scale-105 shadow-md">
                <div className="w-full h-full rounded-full bg-[#0b0f17] flex items-center justify-center font-display font-bold text-xs text-brand-cyan overflow-hidden">
                  <img 
                    src="/profile.jpg" 
                    alt="Logo" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const span = document.createElement('span');
                      span.innerText = "HA";
                      e.currentTarget.parentElement?.appendChild(span);
                    }}
                  />
                </div>
              </div>
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-brand-cyan to-brand-purple blur-sm opacity-0 group-hover:opacity-50 transition-opacity" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-brand-cyan transition-colors">
              {portfolioData.personalInfo.name}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`relative text-sm font-medium tracking-wide transition-colors py-2 group ${
                        isActive ? 'text-brand-cyan' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="activeUnderline"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-cyan to-brand-purple"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      {!isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/20 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

          </div>

          {/* Mobile Hamburger Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-lg bg-white/5 border border-white/5 text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-30 w-full max-w-sm bg-[#080a0f]/98 border-l border-white/5 backdrop-blur-xl p-8 pt-24 shadow-[-10px_0_40px_rgba(0,0,0,0.5)] md:hidden flex flex-col justify-between"
          >
            <div className="flex flex-col gap-8">
              <span className="font-mono text-xs text-brand-cyan tracking-widest uppercase">
                Navigation
              </span>
              <ul className="flex flex-col gap-6">
                {navLinks.map((link, idx) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <motion.li
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      key={link.name}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className={`text-2xl font-display font-medium tracking-tight flex items-center justify-between ${
                          isActive ? 'text-brand-cyan font-semibold' : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        {link.name}
                        {isActive && <span className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-cyan to-brand-purple shadow-[0_0_8px_#06b6d4]" />}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <p className="text-center font-mono text-[10px] text-gray-500 tracking-wider">
                Available for freelance projects.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
