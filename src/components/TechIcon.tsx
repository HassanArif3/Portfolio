import { 
  Wind, 
  Code2, 
  Server, 
  ShieldCheck, 
  Database, 
  Layers, 
  GitBranch, 
  Triangle, 
  Cloud,
  FileCode,
  Laptop
} from 'lucide-react';

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = "w-6 h-6" }: TechIconProps) {
  // We provide beautifully styled, custom inline SVGs for distinct technologies,
  // or fallback to Lucide React icons.
  switch (name.toLowerCase()) {
    case 'react':
    case 'reacticon':
      return (
        <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="2.05" fill="#06b6d4" />
          <g stroke="#06b6d4" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
      
    case 'tailwind':
    case 'tailwindcss':
    case 'wind':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6.0001C15.5 2.5001 19 3.5001 22 5.5001C22 9.0001 21 12.5001 19 14.0001C15.5 17.5001 12 16.5001 9 14.5001C9 11.0001 10 7.5001 12 6.0001Z" fill="#06b6d4" fillOpacity="0.2" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 13.0001C9.5 9.5001 13 10.5001 16 12.5001C16 16.0001 15 19.5001 13 21.0001C9.5 24.5001 6 23.5001 3 21.5001C3 18.0001 4 14.5001 6 13.0001Z" fill="#a855f7" fillOpacity="0.2" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
      
    case 'typescript':
    case 'code2':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#3178c6" />
          <path d="M11.5 16.2H10.1V10.2H7.2V9H14.4V10.2H11.5V16.2ZM15.4 15.3C15.8 15.7 16.5 16 17.3 16C18.2 16 18.8 15.6 18.8 15C18.8 14.4 18.4 14.1 17.4 13.8L16.6 13.5C15.4 13.1 14.7 12.4 14.7 11.3C14.7 10.1 15.8 9.2 17.3 9.2C18.3 9.2 19 9.5 19.5 9.9L18.8 11C18.4 10.7 17.9 10.5 17.3 10.5C16.5 10.5 16 10.8 16 11.3C16 11.8 16.4 12 17.3 12.3L18.1 12.6C19.4 13.1 20.1 13.7 20.1 14.8C20.1 16.1 18.9 17.1 17.3 17.1C16.1 17.1 15 16.7 14.4 16.1L15.4 15.3Z" fill="white" />
        </svg>
      );
      
    case 'node':
    case 'node.js':
    case 'nodeicon':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4 6.5V15.5L12 20L20 15.5V6.5L12 2Z" stroke="#4db33d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#4db33d" fillOpacity="0.1"/>
          <path d="M12 2V20" stroke="#4db33d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6.5L4 11" stroke="#4db33d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6.5L20 11" stroke="#4db33d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
      
    case 'express':
    case 'express.js':
    case 'server':
      return <Server className={`${className} text-indigo-400`} />;
      
    case 'jwt auth':
    case 'shieldcheck':
      return <ShieldCheck className={`${className} text-emerald-400`} />;
      
    case 'mongodb':
    case 'database':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C12 2 7 7.5 7 12C7 16 9.5 19.5 12 22C14.5 19.5 17 16 17 12C17 7.5 12 2 12 2Z" fill="#13aa52" fillOpacity="0.15" stroke="#13aa52" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 2V22" stroke="#13aa52" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 7C9.5 10 9.5 13.5 12 16" stroke="#13aa52" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
      
    case 'postgresql':
    case 'layers':
      return <Layers className={`${className} text-blue-400`} />;
      
    case 'git':
    case 'gitbranch':
      return <GitBranch className={`${className} text-orange-500`} />;
      
    case 'vercel':
    case 'triangle':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 22.525H0L12 1.475L24 22.525Z" />
        </svg>
      );
      
    case 'render':
    case 'cloud':
      return <Cloud className={`${className} text-cyan-400`} />;
      
    default:
      return <Laptop className={className} />;
  }
}
