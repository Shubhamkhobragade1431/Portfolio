import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { Skill } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatProgressBarModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];

  constructor(private portfolioService: PortfolioDataService) {}

  ngOnInit(): void {
    this.portfolioService.getSkills().subscribe(skills => {
      this.skills = skills;
    });
  }
}
