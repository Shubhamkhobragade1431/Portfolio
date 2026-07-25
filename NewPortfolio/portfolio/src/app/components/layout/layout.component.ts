import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="layout">
      <!-- Navigation -->
      <nav class="navbar">
        <div class="nav-container">
          <a href="#" class="nav-logo">SK</a>
          <div class="nav-menu">
            <a href="#" class="nav-link">Home</a>
            <a href="#about" class="nav-link" (click)="scrollToSection('about')">About</a>
            <a href="#skills" class="nav-link" (click)="scrollToSection('skills')">Skills</a>
            <a href="#experience" class="nav-link" (click)="scrollToSection('experience')">Experience</a>
            <a href="#projects" class="nav-link" (click)="scrollToSection('projects')">Projects</a>
            <a href="#contact" class="nav-link" (click)="scrollToSection('contact')">Contact</a>
          </div>
        </div>
      </nav>

      <!-- Main Content -->
      <main class="main-content">
        <ng-content />
      </main>

      <!-- Footer -->
      <footer class="footer">
        <div class="footer-content">
          <p>&copy; {{ currentYear }} Shubham Khobragade. All rights reserved.</p>
          <div class="footer-links">
            <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </footer>
    </div>
  `,
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  currentYear = new Date().getFullYear();
  
  scrollToSection(sectionId: string) {
    // Prevent default anchor behavior
    event?.preventDefault();
    
    // Find the section by ID
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}