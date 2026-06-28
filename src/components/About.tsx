import { motion } from 'motion/react';
import { portfolioData } from '../portfolioData';
import { Terminal, Cpu, Award, Zap } from 'lucide-react';

export function About() {
  const { name, bio, email, role } = portfolioData.personalInfo;
  const { stats } = portfolioData;

  // Icons corresponding to the stats
  const statIcons = [
    <Award className="w-5 h-5 text-brand-cyan" />,
    <Cpu className="w-5 h-5 text-brand-purple" />,
    <Zap className="w-5 h-5 text-brand-cyan" />,
    <Terminal className="w-5 h-5 text-brand-purple" />
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-brand-cyan" />
            <span className="font-mono text-xs tracking-widest text-brand-cyan uppercase">01 / Profile</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
            About <span className="text-gradient">Hassan</span>
          </h2>
        </div>

        {/* Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Code Terminal Widget Mockup & Photo */}
          <div className="lg:col-span-5 w-full flex flex-col gap-8">
            
            {/* Profile Photo Placeholder Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 0.8 }}
              className="relative group w-full sm:w-3/4 lg:w-full mx-auto"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-brand-cyan via-brand-blue to-brand-purple rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
              <div className="relative aspect-square w-full rounded-3xl glass-panel overflow-hidden border border-white/10 flex items-center justify-center bg-[#0b0f17]">
                {/* Profile Picture */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0b0f17] to-[#111827] overflow-hidden">
                  <img 
                    src="/profile.jpg" 
                    alt="Hassan Arif" 
                    className="w-full h-full object-cover rounded-3xl"
                    onError={(e) => {
                      // Fallback to initials if image not found
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center');
                      const span = document.createElement('span');
                      span.className = "font-display font-bold text-7xl sm:text-8xl md:text-9xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-tr from-brand-cyan to-brand-purple opacity-90 drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]";
                      span.innerText = "HA";
                      e.currentTarget.parentElement?.appendChild(span);
                    }}
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl glass-panel overflow-hidden border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            >
              {/* Terminal Window Header */}
              <div className="bg-[#0b0f17] px-4 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-mono text-xs text-gray-500 tracking-wider">developer.ts</span>
                <span className="w-4 h-4" /> {/* empty space to balance */}
              </div>

              {/* Terminal Contents */}
              <div className="p-6 font-mono text-xs sm:text-sm text-gray-400 overflow-x-auto leading-relaxed bg-[#080a0f]/50">
                <span className="text-cyan-400">const</span> developer = <span className="text-purple-400">{'{'}</span>
                <div className="pl-6 mt-1.5">
                  <span className="text-gray-500">name:</span> <span className="text-amber-300">"{name}"</span>,
                  <br />
                  <span className="text-gray-500">role:</span> <span className="text-amber-300">"{role}"</span>,
                  <br />
                  <span className="text-gray-500">location:</span> <span className="text-amber-300">"Gujrat, Pakistan / Remote"</span>,
                  <br />
                  <span className="text-gray-500">focus:</span> <span className="text-cyan-400">[</span>
                  <div className="pl-6">
                    <span className="text-amber-300">"Web Development"</span>, <span className="text-amber-300">"AI Automation"</span>, <span className="text-amber-300">"Business Websites"</span>
                  </div>
                  <span className="text-cyan-400">]</span>,
                  <br />
                  <span className="text-gray-500">currentlyBuilding:</span> <span className="text-cyan-400">[</span>
                  <div className="pl-6">
                    <span className="text-amber-300">"POS Website"</span>, <span className="text-amber-300">"Ecommerce Website"</span>, <span className="text-amber-300">"Restaurant Website"</span>
                  </div>
                  <span className="text-cyan-400">]</span>,
                  <br />
                  <span className="text-gray-500">goal:</span> <span className="text-amber-300">"Helping businesses grow through modern websites and automation"</span>
                </div>
                <span className="text-purple-400">{'}'}</span>;
              </div>
            </motion.div>
          </div>

          {/* Right: Narrative Bio & Metrics Grid */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-20%' }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <h3 className="font-display font-semibold text-2xl tracking-tight text-white">
                Designing clean websites, scalable interfaces, and <span className="text-gradient-cyan">smart automation solutions</span>.
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                {bio}
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                I am currently building portfolio projects including POS systems, ecommerce websites, restaurant websites, and business web applications. Along with web development, I am also exploring AI automation and n8n workflows to help clients save time and automate repetitive tasks.
              </p>
              
              <div className="mt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan hover:text-brand-purple transition-colors group"
                >
                  Let’s build something useful together
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </motion.div>

            {/* Metrics Row Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-2xl glass-panel p-5 sm:p-6 flex flex-col justify-between hover:border-brand-cyan/20 transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">
                      {stat.label}
                    </span>
                    <div className="p-2 rounded-xl bg-white/5 border border-white/5 group-hover:bg-brand-cyan/5 group-hover:border-brand-cyan/10 transition-colors">
                      {statIcons[idx % statIcons.length]}
                    </div>
                  </div>
                  <div className="flex items-baseline gap-0.5">
                    <span className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                      {stat.value}
                    </span>
                    {stat.suffix && (
                      <span className="font-display font-semibold text-xl text-brand-cyan">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
