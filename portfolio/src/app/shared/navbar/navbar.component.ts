import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeService } from '../../core/services/theme.service';

/**
 * Navigation Bar Component
 * Sticky top navigation with smooth scroll anchor links and theme toggle
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMobileMenuOpen = false;
  
  // Computed value from theme service signal
  isDarkMode = computed(() => this.themeService.isDarkMode());

  navLinks = [
    { section: 'home', label: 'Home', icon: 'bi-house-fill' },
    { section: 'about', label: 'About', icon: 'bi-person-fill' },
    { section: 'skills', label: 'Skills', icon: 'bi-code-slash' },
    { section: 'experience', label: 'Experience', icon: 'bi-briefcase-fill' },
    { section: 'projects', label: 'Projects', icon: 'bi-folder-fill' },
    // { section: 'contact', label: 'Contact', icon: 'bi-envelope-fill' }
  ];

  constructor(public themeService: ThemeService) {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
