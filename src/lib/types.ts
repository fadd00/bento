export interface ProjectData {
  title: string;
  description: string;
  emoji: string;
  tags: string[];
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
  initials: string;
  accentColor: string;
  current: boolean;
  order: number;
}
