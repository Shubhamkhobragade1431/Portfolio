import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { Project } from '../../core/models/portfolio.models';

/**
 * Projects Component
 * Showcase of portfolio projects with tech stack
 */
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private portfolioService: PortfolioDataService) {}

  ngOnInit(): void {
    this.portfolioService.getProjects().subscribe(projects => {
      this.projects = projects;
    });
  }
}
