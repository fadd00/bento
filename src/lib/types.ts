export interface ProjectData {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  category: 'backend-web' | 'game';
  role?: string;
  status: 'live' | 'private' | 'jam';
  highlights: string[];
  github?: string;
  live?: string;
  size: 'large' | 'medium' | 'small';
  featured: boolean;
  order: number;
}

export interface WorkData {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
  logo?: string;
  initials: string;
  accentColor: string;
  current: boolean;
  order: number;
}
