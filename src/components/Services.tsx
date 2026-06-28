import { motion } from 'motion/react';
import { Monitor, LayoutDashboard, ShoppingCart, UtensilsCrossed, Workflow, Plug } from 'lucide-react';

const services = [
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Responsive Website Development",
    description: "Modern, mobile-friendly websites built with clean UI, fast performance, and professional design."
  },
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "Business Web Applications",
    description: "Custom web apps for business workflows, dashboards, management systems, and internal tools."
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "Ecommerce Website Development",
    description: "Clean and conversion-focused ecommerce interfaces with product sections, cart flow, and responsive layouts."
  },
  {
    icon: <UtensilsCrossed className="w-6 h-6" />,
    title: "Restaurant & POS Websites",
    description: "Restaurant websites, menu pages, ordering interfaces, and POS-style business management layouts."
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "AI & n8n Automation",
    description: "Automation workflows that connect tools, reduce repetitive tasks, and improve business productivity."
  },
  {
    icon: <Plug className="w-6 h-6" />,
    title: "API Integration",
    description: "Integration of third-party APIs, forms, contact systems, and backend services."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-brand-cyan" />
            <span className="font-mono text-xs tracking-widest text-brand-cyan uppercase">03 / Services</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white mb-6">
            Services I Offer
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
            I help businesses and individuals build modern digital solutions, from responsive websites to automation workflows.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              className="relative rounded-2xl glass-panel p-8 flex flex-col transition-all duration-500 group hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(34,211,238,0.1)] border border-white/5 hover:border-brand-cyan/30 overflow-hidden"
            >
              {/* Premium Background Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/5 via-transparent to-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#080a0f] border border-white/5 flex items-center justify-center text-brand-cyan mb-6 group-hover:scale-110 group-hover:bg-brand-cyan/10 group-hover:border-brand-cyan/20 transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="font-display font-semibold text-xl text-white mb-3 group-hover:text-brand-cyan transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
