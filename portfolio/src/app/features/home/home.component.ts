import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { PersonalInfo, Skill, Experience, Project, Education } from '../../core/models/portfolio.models';

/**
 * Home Component - Single Page Scrolling Portfolio
 * Contains all sections: Hero, About, Skills, Experience, Projects, Contact
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  personalInfo: PersonalInfo | null = null;
  skills: Skill[] = [];
  experiences: Experience[] = [];
  projects: Project[] = [];
  education: Education[] = [];
  contactForm: FormGroup;
  submitted = false;

  constructor(
    private portfolioService: PortfolioDataService,
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Load all data
    this.portfolioService.getPersonalInfo().subscribe(info => {
      this.personalInfo = info;
    });

    this.portfolioService.getSkills().subscribe(skills => {
      this.skills = skills;
    });

    this.portfolioService.getExperience().subscribe(exp => {
      this.experiences = exp;
    });

    this.portfolioService.getProjects().subscribe(projects => {
      this.projects = projects;
    });

    this.portfolioService.getEducation().subscribe(edu => {
      this.education = edu;
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      this.submitted = true;
      setTimeout(() => {
        this.submitted = false;
        this.contactForm.reset();
      }, 3000);
    }
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  downloadResume(): void {
  const link = document.createElement('a');

  link.href = 'assets/resume/Shubham-Khobragade-Resume.pdf';
  link.download = 'Shubham-Khobragade-Resume.pdf';

  link.click();
}
}
