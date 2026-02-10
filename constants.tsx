
import React from 'react';
import { ProjectCategory, Project, Skill, Experience, Certification } from './types';
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Cpu, 
  Globe, 
  BrainCircuit, 
  Workflow, 
  Atom, 
  Zap, 
  Target 
} from 'lucide-react';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Smart Helmet (IoT)',
    description: 'An intelligent safety system for motorcyclists featuring accident detection using accelerometers, alcohol level monitoring with MQ-3 sensors.',
    category: ProjectCategory.IOT,
    tags: ['Arduino', 'NodeMCU', 'MQ-3 Sensor', '+2'],
    imageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    id: '2',
    title: 'Smart Hospital DBMS',
    description: 'A comprehensive management system for healthcare facilities, optimizing patient registrations, doctor schedules, and medical inventory tracking with high security.',
    category: ProjectCategory.WEB,
    tags: ['MySQL', 'PHP', 'Bootstrap', '+1'],
    imageUrl: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    id: '3',
    title: 'AgriFlow',
    description: 'A precision agriculture platform that monitors soil health and uses machine learning to recommend the best crops for optimal yield and resource management.',
    category: ProjectCategory.AI,
    tags: ['Python', 'React', 'Flask', '+1'],
    imageUrl: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800&h=600'
  }
];

export const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    count: 4,
    skills: [
      { name: 'React', percentage: 90, icon: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'Next.js', percentage: 85, icon: 'https://cdn.simpleicons.org/nextdotjs/white' }
    ]
  },
  {
    title: 'Backend',
    count: 4,
    skills: [
      { name: 'Node.js', percentage: 85, icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
      { name: 'Python', percentage: 80, icon: 'https://cdn.simpleicons.org/python/3776AB' }
    ]
  },
  {
    title: 'Database',
    count: 3,
    skills: [
      { name: 'MongoDB', percentage: 80, icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
      { name: 'PostgreSQL', percentage: 75, icon: 'https://cdn.simpleicons.org/postgresql/4169E1' }
    ]
  },
  {
    title: 'Tools & Cloud',
    count: 4,
    skills: [
      { name: 'Docker', percentage: 70, icon: 'https://cdn.simpleicons.org/docker/2496ED' },
      { name: 'AWS', percentage: 65, icon: 'https://cdn.simpleicons.org/amazonaws/232F3E' }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Full Stack Intern',
    company: 'Future Interns',
    duration: '25/01/2026 - 25/02/2026',
    points: [
      'Developed and maintained full-stack web applications using modern JavaScript frameworks.',
      'Collaborated on backend API design and frontend UI/UX implementation.',
      'Utilized version control systems for efficient team collaboration and code management.'
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Career Edge - Young Professional',
    provider: 'TCS iON',
    date: 'June 2025',
    link: '#'
  },
  {
    title: 'Google Data Analytics Professional',
    provider: 'Coursera',
    date: 'August 2025',
    link: '#'
  },
  {
    title: 'Cloud Computing Fundamentals',
    provider: 'Infosys Springboard',
    date: 'January 2026',
    link: '#'
  },
  {
    title: 'Strategic Planning for Small Business',
    provider: 'HP LIFE',
    date: 'March 2026',
    link: '#'
  }
];
