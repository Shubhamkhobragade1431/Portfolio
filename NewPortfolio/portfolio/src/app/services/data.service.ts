import { Injectable, signal } from '@angular/core';
import { Skill } from '../interfaces/skill.interface';
import { Experience } from '../interfaces/experience.interface';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Personal info signal
  personalInfo = signal({
    name: 'Shubham Khobragade',
    role: 'Software Developer | .NET & Angular Developer',
    location: 'Pune, Maharashtra, India',
    experience: '3+ Years',
    email: 'shubhamkhobragadeofficial@gmail.com',
    summary: '.NET Developer with 3+ years of experience building scalable enterprise applications using ASP.NET Core, Web API, SQL Server, and Angular. Strong in N-Tier Architecture, REST APIs, SOLID principles, and performance optimization.'
  });

  // Skills data
  skills: Skill[] = [
    // Backend
    { id: 1, name: 'C#', category: 'backend', level: 90 },
    { id: 2, name: 'ASP.NET Core', category: 'backend', level: 85 },
    { id: 3, name: 'Web API', category: 'backend', level: 85 },
    { id: 4, name: 'Entity Framework Core', category: 'backend', level: 80 },
    { id: 5, name: 'SQL Server', category: 'backend', level: 85 },
    
    // Frontend
    { id: 6, name: 'Angular', category: 'frontend', level: 85 },
    { id: 7, name: 'TypeScript', category: 'frontend', level: 80 },
    { id: 8, name: 'HTML5', category: 'frontend', level: 90 },
    { id: 9, name: 'SCSS', category: 'frontend', level: 75 },
    { id: 10, name: 'JavaScript', category: 'frontend', level: 80 },
    { id: 11, name: 'GSAP', category: 'frontend', level: 70 },
    
    // Tools
    { id: 12, name: 'Git', category: 'tools', level: 75 },
    { id: 13, name: 'GitHub', category: 'tools', level: 80 },
    { id: 14, name: 'Visual Studio', category: 'tools', level: 85 },
    { id: 15, name: 'VS Code', category: 'tools', level: 80 },
    { id: 16, name: 'Postman', category: 'tools', level: 75 },
    { id: 17, name: 'Jira', category: 'tools', level: 70 }
  ];

  // Experience data
  experiences: Experience[] = [
    {
      id: 1,
      position: 'Dot Net Developer',
      company: 'CaptoSoft Digital Solutions Pvt. Ltd',
      period: 'Oct 2024 – Present',
      description: 'Developing enterprise applications using .NET technologies.',
      location: 'Pune, India'
    },
    {
      id: 2,
      position: 'Dot Net Developer',
      company: 'Techsplay IT Solutions',
      period: 'Sep 2022 – Sep 2024',
      description: 'Building scalable web applications with .NET Core and Angular.',
      location: 'Pune, India'
    }
  ];

  // Projects data
  projects: Project[] = [
    {
      id: 1,
      title: 'Abnormalities Management System',
      description: 'Web-based system for reporting, tracking, and resolving safety, quality, and engineering abnormalities.',
      technologies: ['ASP.NET Core', 'Razor Pages', 'EF Core', 'SQL Server'],
      githubUrl: '',
      demoUrl: ''
    },
    {
      id: 2,
      title: 'E-Traceability System',
      description: 'Manufacturing traceability platform with barcode scanning and dashboards.',
      technologies: ['ASP.NET Core Web API', 'Angular', 'EF Core', 'SQL Server'],
      githubUrl: '',
      demoUrl: ''
    }
  ];

  // Getters
  getSkills(): Skill[] {
    return this.skills;
  }

  getBackendSkills(): Skill[] {
    return this.skills.filter(skill => skill.category === 'backend');
  }

  getFrontendSkills(): Skill[] {
    return this.skills.filter(skill => skill.category === 'frontend');
  }

  getToolSkills(): Skill[] {
    return this.skills.filter(skill => skill.category === 'tools');
  }

  getExperiences(): Experience[] {
    return this.experiences;
  }

  getProjects(): Project[] {
    return this.projects;
  }
}