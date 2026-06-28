import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400); // Small buffer before finishing
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        id="loading-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080a0f]"
      >
        <div className="relative flex flex-col items-center max-w-xs w-full px-6">
          {/* Logo / Initials */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-8 relative"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-brand-cyan to-brand-purple p-[2px] shadow-[0_0_30px_rgba(34,211,238,0.15)] flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#0b0f17] flex items-center justify-center font-display font-bold text-xl text-brand-cyan tracking-wider overflow-hidden">
                <img 
                  src="/profile.jpg" 
                  alt="Hassan Arif" 
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
            {/* Soft decorative glow behind the logo */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-brand-cyan to-brand-purple blur-md opacity-30 -z-10 animate-pulse-slow"></div>
          </motion.div>

          {/* Loading Indicator Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-3 text-sm font-mono text-gray-400 tracking-widest uppercase flex justify-between w-full"
          >
            <span>Initializing</span>
            <span className="text-brand-cyan font-semibold">{Math.min(progress, 100)}%</span>
          </motion.div>

          {/* Progress Bar Container */}
          <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-brand-cyan to-brand-purple relative"
            >
              {/* Glowing leading edge of the progress bar */}
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-white blur-xs opacity-50"></div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
