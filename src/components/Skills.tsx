import { motion } from 'motion/react';
import { portfolioData } from '../portfolioData';
import { TechIcon } from './TechIcon';
import { Layout, Server, Database, Wrench, Bot } from 'lucide-react';

export function Skills() {
  const { skills } = portfolioData;

  // Group skills by category
  const categories = [
    { name: 'Frontend', icon: <Layout className="w-4 h-4 text-brand-cyan" /> },
    { name: 'Backend', icon: <Server className="w-4 h-4 text-brand-purple" /> },
    { name: 'Database', icon: <Database className="w-4 h-4 text-brand-cyan" /> },
    { name: 'Tools & DevOps', icon: <Wrench className="w-4 h-4 text-brand-purple" /> },
    { name: 'AI & Automation', icon: <Bot className="w-4 h-4 text-brand-cyan" /> }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0b0f17]/30">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-brand-purple" />
            <span className="font-mono text-xs tracking-widest text-brand-purple uppercase">02 / Skills</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-md mt-4 font-sans">
            A practical set of technologies and tools I use to build responsive websites, business applications, and automation workflows.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, catIdx) => {
            const filteredSkills = skills.filter(skill => skill.category === cat.name);
            
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.6, delay: catIdx * 0.1, ease: 'easeOut' }}
                className={`rounded-2xl glass-panel p-6 border border-white/5 relative flex flex-col h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(34,211,238,0.05)] ${cat.name === 'AI & Automation' ? 'border-brand-cyan/20 bg-brand-cyan/[0.02]' : ''}`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-white/5">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                    {cat.icon}
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white">
                    {cat.name}
                  </h3>
                </div>

                {/* Skills inside this Category */}
                <div className="flex flex-col gap-3 flex-grow">
                  {filteredSkills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (catIdx * 0.1) + (skillIdx * 0.05) }}
                      className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-cyan/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] hover:bg-brand-cyan/[0.05] transition-all duration-300 group cursor-default"
                    >
                      {/* Interactive Skill Logo */}
                      <div className="p-1 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors flex items-center justify-center">
                        <TechIcon name={skill.iconName} className="w-5 h-5" />
                      </div>
                      
                      {/* Name */}
                      <span className="font-sans font-medium text-sm text-gray-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
