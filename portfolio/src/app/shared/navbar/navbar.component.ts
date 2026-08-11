import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
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
    MatIconModule,
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
    { section: 'home', label: 'Home', icon: 'home' },
    { section: 'about', label: 'About', icon: 'person' },
    { section: 'skills', label: 'Skills', icon: 'code' },
    { section: 'experience', label: 'Experience', icon: 'work' },
    { section: 'projects', label: 'Projects', icon: 'folder' },
    // { section: 'contact', label: 'Contact', icon: 'email' }
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
