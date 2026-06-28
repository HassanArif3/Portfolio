import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Hassan Arif",
    firstName: "Hassan",
    lastName: "Arif",
    role: "Web Developer | AI Automation Specialist",
    tagline: "I build modern, responsive websites, business web apps, and AI-powered automation systems that help businesses improve their online presence, automate repetitive work, and grow faster.",
    bio: "I am a web developer focused on creating modern, responsive, and user-friendly digital experiences. I work with frontend technologies, backend integrations, and automation tools to help businesses build practical solutions that look professional and work smoothly.",
    email: "hassanarif4625@gmail.com",
    githubUrl: "https://github.com/HassanArif3", 
    linkedinUrl: "https://www.linkedin.com/in/hassanarif-dev",
    whatsappUrl: "https://wa.me/923276284969", 
    resumeUrl: "#", // Ready for future resume upload
  },
  stats: [
    { label: "Portfolio Projects", value: "4", suffix: "+" },
    { label: "Web Development", value: "100", suffix: "%" },
    { label: "AI Automation", value: "100", suffix: "%" },
    { label: "Remote Friendly", value: "Yes", suffix: "" }
  ],
  skills: [
    // Frontend
    { name: "HTML5", iconName: "Layout", category: "Frontend" },
    { name: "CSS3", iconName: "Palette", category: "Frontend" },
    { name: "JavaScript", iconName: "FileCode2", category: "Frontend" },
    { name: "React", iconName: "ReactIcon", category: "Frontend" },
    { name: "Tailwind CSS", iconName: "Wind", category: "Frontend" },
    { name: "Responsive Design", iconName: "Smartphone", category: "Frontend" },
    
    // Backend
    { name: "Node.js", iconName: "NodeIcon", category: "Backend" },
    { name: "Express.js", iconName: "Server", category: "Backend" },
    { name: "REST APIs", iconName: "Link", category: "Backend" },
    { name: "Authentication", iconName: "ShieldCheck", category: "Backend" },
    { name: "Server-side Logic", iconName: "Settings", category: "Backend" },
    
    // Database
    { name: "MongoDB", iconName: "Database", category: "Database" },
    { name: "PostgreSQL", iconName: "Layers", category: "Database" },
    { name: "Firebase", iconName: "Flame", category: "Database" },
    { name: "Data Modeling", iconName: "Network", category: "Database" },
    
    // Tools & Deployment
    { name: "Git", iconName: "GitBranch", category: "Tools & DevOps" },
    { name: "GitHub", iconName: "Github", category: "Tools & DevOps" },
    { name: "Vercel", iconName: "Triangle", category: "Tools & DevOps" },
    { name: "Render", iconName: "Cloud", category: "Tools & DevOps" },
    { name: "VS Code", iconName: "Code", category: "Tools & DevOps" },
    { name: "npm", iconName: "Box", category: "Tools & DevOps" },

    // AI & Automation
    { name: "n8n", iconName: "Workflow", category: "AI & Automation" },
    { name: "AI Workflow Automation", iconName: "Bot", category: "AI & Automation" },
    { name: "Chatbot Integration", iconName: "MessageSquare", category: "AI & Automation" },
    { name: "API Integration", iconName: "Plug", category: "AI & Automation" },
    { name: "Business Automation", iconName: "Briefcase", category: "AI & Automation" },
  ],
  projects: [
    {
      id: "1",
      title: "MediBook App",
      category: "Full-Stack Web App",
      description: "A full-stack MERN clinic appointment booking platform with patient, doctor, and admin dashboards.",
      features: [
        "Role-Based Access Control (RBAC)",
        "Real-time Slot Booking",
        "Advanced Doctor Discovery",
        "Interactive Dashboards"
      ],
      tech: ["React 18", "Tailwind CSS", "Redux Toolkit", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://medibook-app-alpha.vercel.app", 
      githubUrl: "https://github.com/HassanArif3/medibook-app",
      image: "/medibook.png",
      featured: true
    },
    {
      id: "2",
      title: "EstateHub",
      category: "Real Estate Platform",
      description: "A full-stack MERN real estate platform for property listing, search, and management across Pakistan.",
      features: [
        "In-Memory Database Fallback",
        "Granular Search & Filters",
        "Property Comparison Tool",
        "Dynamic Layouts"
      ],
      tech: ["React", "Redux Toolkit", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      liveUrl: "https://estate-hub-five.vercel.app", 
      githubUrl: "https://github.com/HassanArif3/EstateHub", 
      image: "/estatehub.png", 
      featured: true
    },
    {
      id: "3",
      title: "Vibe & Dine",
      category: "Restaurant Portal",
      description: "A professional, responsive restaurant platform with live menu filtering, online reservations, and a custom ordering cart.",
      features: [
        "Dynamic Restaurant Menu",
        "Online Table Reservations",
        "Interactive Shopping Cart",
        "JWT Authentication"
      ],
      tech: ["React 19", "Framer Motion", "Node.js", "Express.js", "MongoDB", "JWT"],
      liveUrl: "https://vibe-and-dine-restaurant.vercel.app", 
      githubUrl: "https://github.com/HassanArif3/vibe-and-dine-restaurant", 
      image: "/vibe-and-dine.png", 
      featured: false
    },
    {
      id: "4",
      title: "ExamDesk",
      category: "Assessment Portal",
      description: "A clean, performance-optimized portal highlighting assessment tools and custom ed-tech software services.",
      features: [
        "Professional Landing Showcase",
        "Blogging Framework",
        "Inquiry/Contact Channel",
        "Responsive Core"
      ],
      tech: ["React", "Vite", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://exam-desk-eight.vercel.app", 
      githubUrl: "https://github.com/HassanArif3/ExamDesk", 
      image: "/examdesk.png", 
      featured: false
    },
    {
      id: "5",
      title: "Premium E-commerce",
      category: "E-commerce Storefront",
      description: "A high-fidelity, premium e-commerce storefront with persistent cart mechanics, full admin capabilities, and automated build pipelines.",
      features: [
        "Catalog Seeding script",
        "Admin Catalog Panel",
        "Persistent Shopping Cart",
        "Automated Staging Workflows"
      ],
      tech: ["React", "React Router", "Tailwind CSS", "Node.js", "MongoDB", "Express.js"],
      liveUrl: "https://hassanarif3.github.io/ecommerce-fullstack-design/", 
      githubUrl: "https://github.com/HassanArif3/ecommerce-fullstack-design", 
      image: "/ecommerce.png", 
      featured: true
    }
  ]
};
