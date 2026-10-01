import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs,
  SiVite, SiDocker, SiGithub, SiFigma, SiTailwindcss, SiLaravel,
  SiPostgresql, SiMysql, SiLivewire, SiPython,
} from 'react-icons/si';
import { LuWaypoints } from 'react-icons/lu';

// Each palette defines the top surface, lower bevel, and legend color.
export const techStack = [
  { name: 'JavaScript', category: 'The language of the web', icon: SiJavascript, color: '#e8b541', depth: '#886020', ink: '#29200d' },
  { name: 'TypeScript', category: 'JavaScript, with confidence', icon: SiTypescript, color: '#3984cd', depth: '#184579', ink: '#f2f8ff' },
  { name: 'React', category: 'Interfaces, one component at a time', icon: SiReact, color: '#49bdcd', depth: '#226878', ink: '#103e48' },
  { name: 'Next.js', category: 'From rendering to production', icon: SiNextdotjs, color: '#dedbd3', depth: '#827f78', ink: '#28292b' },
  { name: 'Node.js', category: 'JavaScript beyond the browser', icon: SiNodedotjs, color: '#74a95b', depth: '#3a6030', ink: '#172f18' },
  { name: 'Vite', category: 'A faster development workflow', icon: SiVite, color: '#a38bd6', depth: '#584581', ink: '#211c39' },
  { name: 'Docker', category: 'Consistent environments, anywhere', icon: SiDocker, color: '#388cc8', depth: '#194975', ink: '#f2f9ff' },
  { name: 'GitHub', category: 'Code, collaboration, and version control', icon: SiGithub, color: '#454953', depth: '#202229', ink: '#f4f3ef' },
  { name: 'Figma', category: 'Where ideas take shape', icon: SiFigma, color: '#d88a75', depth: '#844c3e', ink: '#3c241e' },
  { name: 'Tailwind CSS', category: 'Utility-first, detail-focused styling', icon: SiTailwindcss, color: '#62c6bf', depth: '#306f6d', ink: '#183f3d' },
  { name: 'Laravel', category: 'Elegant foundations for the web', icon: SiLaravel, color: '#d76b59', depth: '#813c31', ink: '#fff4ed' },
  { name: 'PostgreSQL', category: 'A reliable home for relational data', icon: SiPostgresql, color: '#6088b0', depth: '#304c6a', ink: '#f3f8ff' },
  { name: 'MySQL', category: 'Structured data, connected experiences', icon: SiMysql, color: '#d5a55f', depth: '#826030', ink: '#3b2b16' },
  { name: 'Livewire', category: 'Dynamic interfaces, Laravel-native', icon: SiLivewire, color: '#d591ad', depth: '#835369', ink: '#422535' },
  { name: 'REST API', category: 'Connecting interfaces and services', icon: LuWaypoints, color: '#828bbb', depth: '#474d75', ink: '#1f253f' },
  { name: 'Python', category: 'Scripting, automation, and backend development', icon: SiPython, color: '#b6c596', depth: '#66744c', ink: '#2e3922' },
];
