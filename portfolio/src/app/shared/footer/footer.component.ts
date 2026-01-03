import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

/**
 * Footer Component
 * Application footer with social links and copyright
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  socialLinks = [
    { name: 'LinkedIn', icon: 'link', url: '#' },
    { name: 'GitHub', icon: 'code', url: '#' },
    { name: 'Email', icon: 'email', url: 'mailto:shubhamkhobragadeofficial@gmail.com' }
  ];
}
