export interface Skill {
  name: string;
  iconName: string; // Used to look up the Lucide icon dynamically
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools & DevOps' | 'AI & Automation';
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  features?: string[];
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  image: string; // High quality placeholder or generated image URL
  featured?: boolean;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    firstName: string;
    lastName: string;
    role: string;
    tagline: string;
    bio: string;
    email: string;
    githubUrl: string;
    linkedinUrl: string;
    whatsappUrl?: string;
    resumeUrl?: string;
  };
  stats: Stat[];
  skills: Skill[];
  projects: Project[];
}
