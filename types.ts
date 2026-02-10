
export enum ProjectCategory {
  ALL = 'All',
  WEB = 'Web',
  IOT = 'IoT & Tools',
  AI = 'AI & Data'
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  imageUrl: string;
}

export interface Skill {
  name: string;
  percentage: number;
  icon: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  points: string[];
}

export interface Certification {
  title: string;
  provider: string;
  date: string;
  link: string;
}
