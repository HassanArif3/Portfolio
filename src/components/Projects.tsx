import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Layers, Compass, Globe } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState<'all' | 'featured' | 'fullstack' | 'frontend'>('all');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'featured') return project.featured;
    if (filter === 'fullstack') return project.tech.includes('Node.js') || project.tech.includes('MongoDB');
    if (filter === 'frontend') return !project.tech.includes('Node.js') && !project.tech.includes('Express.js');
    return true; // 'all'
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-[1px] bg-brand-cyan" />
              <span className="font-mono text-xs tracking-widest text-brand-cyan uppercase">03 / Projects</span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
              Selected <span className="text-gradient">Creations</span>
            </h2>
          </div>

          {/* Project Filtering Controls */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl glass-panel border border-white/5 bg-[#0a0a13]/30 w-fit">
            {(['all', 'featured', 'fullstack', 'frontend'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 text-xs font-mono tracking-wider uppercase rounded-lg transition-all duration-300 cursor-pointer ${
                  filter === type
                    ? 'bg-gradient-to-r from-brand-cyan to-brand-purple text-white shadow-[0_4px_15px_rgba(6,182,212,0.2)]'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: 'easeOut' }}
                key={project.id}
                className="relative group rounded-2xl glass-panel overflow-hidden border border-white/5 hover:border-brand-cyan/40 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(34,211,238,0.2)] hover:-translate-y-2 flex flex-col h-full"
              >
                {/* Project Image Box with Hover Zoom */}
                <div className="relative overflow-hidden aspect-[16/10] bg-[#0c0c16] border-b border-white/5 flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-tr from-[#080a0f] via-brand-cyan/10 to-brand-purple/10 flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-110">
                      <span className="font-display font-bold text-2xl text-white/50 tracking-tight group-hover:text-brand-cyan transition-colors">{project.title}</span>
                    </div>
                  )}
                  
                  {/* Glowing Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f] via-[#080a0f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="flex items-center gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-brand-cyan text-[#0a0a0f] font-medium text-xs rounded-lg flex items-center gap-1.5 hover:bg-white transition-colors duration-300 cursor-pointer shadow-[0_4px_15px_rgba(6,182,212,0.4)]"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white/10 backdrop-blur-md text-white font-medium text-xs rounded-lg flex items-center gap-1.5 hover:bg-white/20 transition-colors duration-300 cursor-pointer"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Codebase
                      </a>
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-brand-purple/20 backdrop-blur-md border border-brand-purple/40 text-[10px] font-mono tracking-widest uppercase text-purple-300 rounded-full flex items-center gap-1.5">
                      <Layers className="w-3 h-3 text-brand-purple animate-pulse" />
                      Featured Project
                    </div>
                  )}
                </div>

                {/* Card Info Details */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                  <div className="flex flex-col gap-4">
                    
                    {/* Project Title */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase">
                          {project.category}
                        </span>
                        <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-brand-cyan transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 pt-1 opacity-60 group-hover:opacity-100 transition-opacity">
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white"
                          title="View Source on GitHub"
                          aria-label="GitHub Repository"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-brand-cyan"
                          title="View Live Demo"
                          aria-label="Live Demo Link"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-2">
                      {project.description}
                    </p>

                    {/* Features List */}
                    {project.features && project.features.length > 0 && (
                      <ul className="space-y-1.5 mb-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                            <span className="w-1 h-1 rounded-full bg-brand-cyan/50 mt-1.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Tech stack badge pills */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[10px] font-mono text-gray-400 uppercase tracking-wider group-hover:border-brand-cyan/10 group-hover:text-cyan-300/80 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Vercel Deployment info badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center border-t border-white/5 pt-12 flex flex-col items-center justify-center gap-3"
        >
          <Compass className="w-8 h-8 text-brand-cyan animate-pulse-slow" />
          <p className="font-mono text-xs text-gray-500 tracking-wider">
            All applications are fully deployable on static-hosting platforms such as <span className="text-gray-300">Vercel</span> or Cloud platforms.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
