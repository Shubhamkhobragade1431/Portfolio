import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  PersonalInfo,
  Skill,
  Experience,
  Project,
  Education
} from '../models/portfolio.models';

/**
 * Portfolio Data Service
 * Centralized service for managing portfolio data
 * In production, this could fetch data from an API
 */
@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  constructor() { }

  /**
   * Get personal information
   */
  getPersonalInfo(): Observable<PersonalInfo> {
    const info: PersonalInfo = {
      name: 'Shubham Khobragade',
      role: 'Software Developer | Full Stack .NET Developer',
      location: 'Pune, Maharashtra, India',
      experience: '4+ Years',
      email: 'shubhamkhobragadeofficial@gmail.com',
      phone: '+91 xxxxxxxxxx',
      profileSummary: [
        'Full Stack .NET Developer skilled in ASP.NET Core, C#, Angular, JavaScript, SQL Server, and Web API for building dynamic, high-performing web applications. Developed scalable RESTful APIs and responsive user interfaces using Angular, Bootstrap, and CSS3, resulting in a measurable improvement in user engagement metrics.',
        'Implemented efficient data access layers utilizing ADO.NET and Entity Framework, leading to optimized data retrieval speeds and enhanced application performance. Created and maintained custom middleware for authentication, logging, and error handling, bolstering application security and streamlining debugging processes.',
        'Built and managed RESTful Web APIs for efficient data exchange between client and server systems. Strong experience in Systems Analysis, Design, Development, and Implementation of Web and Windows applications using N-tier Architecture across all stages of the SDLC. '
      ]
    };
    return of(info);
  }

  /**
   * Get technical skills
   */
  getSkills(): Observable<Skill[]> {
    const skills: Skill[] = [
      {
        category: 'Languages',
        items: [
          { name: 'C#', level: 90 },
          { name: 'SQL', level: 85 },
          { name: 'TypeScript', level: 80 },
          { name: 'JavaScript', level: 80 },
          { name: 'HTML5', level: 90 },
          { name: 'CSS3', level: 85 }
        ]
      },
      {
        category: 'Frameworks & Libraries',
        items: [
          { name: 'ASP.NET Core', level: 90 },
          { name: 'ASP.NET core Web Api', level: 85 },
          { name: 'ASP.NET MVC', level: 85 },
          { name: 'Entity Framework Core', level: 85 },
          { name: 'Angular', level: 80 },
          { name: 'Bootstrap', level: 85 },
        ]
      },
      {
        category: 'Tools & Technologies',
        items: [
          { name: 'Visual Studio', level: 90 },
          { name: 'VS Code', level: 85 },
          { name: 'Git & GitHub', level: 80 },
          { name: 'MS SQL Server', level: 85 },
          { name: 'Postman', level: 80 },
          { name: 'Jira', level: 75 }
        ]
      }
    ];
    return of(skills);
  }

  /**
   * Get work experience
   */
  getExperience(): Observable<Experience[]> {
    const experience: Experience[] = [
      {
        title: 'Dot Net Developer',
        company: 'CaptoSoft Digital Solutions Pvt. Ltd',
        period: 'Oct 2024 - Present',
        location: 'Pune, Maharashtra',
        current: true,
        description: 'Working on enterprise-level applications using ASP.NET Core, Web API, and modern web technologies.'
      },
      {
        title: 'Dot Net Developer',
        company: 'Techsplay IT Solutions',
        period: 'Sep 2022 - Sep 2024',
        location: 'Pune, Maharashtra',
        current: false,
        description: 'Developed and maintained web applications using ASP.NET Core, MVC, and Angular. Implemented RESTful APIs and worked with SQL Server databases.'
      }
    ];
    return of(experience);
  }

  /**
   * Get project portfolio
   */
  getProjects(): Observable<Project[]> {
    const projects: Project[] = [
      {
        name: 'Abnormalities Management System',
        description: 'Web-based system for reporting, tracking, and resolving abnormalities across safety, quality, and engineering departments.',
        technologies: ['ASP.NET Core', 'Razor Pages', 'Entity Framework Core', 'MS SQL Server', 'Bootstrap', 'JavaScript'],
        features: [
          'Role-based access control',
          'Real-time notifications',
          'Comprehensive reporting',
          'Dashboard analytics',
          'Document management'
        ]
      },
      {
        name: 'E-Traceability System',
        description: 'Manufacturing traceability system using barcodes for tracking products through production lifecycle with real-time dashboards.',
        technologies: ['ASP.NET Core Web API', 'Angular', 'Entity Framework Core', 'MS SQL Server', 'SignalR'],
        features: [
          'automatic storage-slot allocation for raw materials',
          'Real-time production tracking',
          'Interactive dashboards',
          'Quality control checkpoints',
          'Historical data analysis'
        ]
      }
    ];
    return of(projects);
  }

  /**
   * Get education details
   */
  getEducation(): Observable<Education[]> {
    const education: Education[] = [
      {
        degree: 'Bachelor of Engineering (ENTC)',
        institution: 'Sant Gadge Baba Amravati University',
        year: ''
      }
    ];
    return of(education);
  }
}
