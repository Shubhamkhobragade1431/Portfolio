/**
 * Portfolio Data Models
 * Defines TypeScript interfaces for type safety
 */

export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  experience: string;
  email: string;
  phone: string;
  profileSummary: string[];
}

export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  level: number; // 0-100
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location?: string;
  description?: string;
  current?: boolean;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  features?: string[];
  image?: string;
  link?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface HeroSection {
  greeting: string;
  name: {
    firstName: string;
    lastName: string;
  };
  title: string;
  description: string;
  profileImage: string;
  techBadges: string[];
  ctaButtons: {
    primary: {
      text: string;
      action: string;
    };
    secondary: {
      text: string;
      link: string;
    };
  };
}
