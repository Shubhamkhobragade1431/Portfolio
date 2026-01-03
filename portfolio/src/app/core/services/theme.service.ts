import { Injectable, signal } from '@angular/core';

/**
 * Theme Service
 * Manages dark/light theme toggle functionality
 */
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Using Angular signals for reactive state management
  private darkModeSignal = signal<boolean>(false);
  
  // Public readonly signal
  public isDarkMode = this.darkModeSignal.asReadonly();

  constructor() {
    // Load theme preference from localStorage
    this.loadThemePreference();
  }

  /**
   * Toggle between dark and light theme
   */
  toggleTheme(): void {
    const newTheme = !this.darkModeSignal();
    this.darkModeSignal.set(newTheme);
    this.applyTheme(newTheme);
    this.saveThemePreference(newTheme);
  }

  /**
   * Apply theme to document body
   */
  private applyTheme(isDark: boolean): void {
    const body = document.body;
    if (isDark) {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
    }
  }

  /**
   * Save theme preference to localStorage
   */
  private saveThemePreference(isDark: boolean): void {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  /**
   * Load theme preference from localStorage
   */
  private loadThemePreference(): void {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let isDark = false;
    if (savedTheme) {
      isDark = savedTheme === 'dark';
    } else {
      isDark = prefersDark;
    }
    
    this.darkModeSignal.set(isDark);
    this.applyTheme(isDark);
  }
}
