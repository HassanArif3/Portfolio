import { motion } from 'motion/react';

export function FloatingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20">
      {/* Absolute Dark Canvas Base */}
      <div className="absolute inset-0 bg-[#080a0f]" />

      {/* Top Ambient Cyan Glow Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(34,211,238,0.15),transparent_50%)]" />

      {/* Modern Masked Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      {/* Core Glowing Orb 1 (Top Left) */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[-5%] left-[-5%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-tr from-cyan-500/10 to-transparent blur-[100px]"
      />

      {/* Core Glowing Orb 2 (Right Side / Middle) */}
      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 60, -30, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-br from-purple-500/10 to-transparent blur-[120px]"
      />

      {/* Subtle vignettes to keep borders focused and dark */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080a0f]/80 via-transparent to-[#080a0f]" />
    </div>
  );
}
