import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { PersonalInfo, Education } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  personalInfo: PersonalInfo | null = null;
  education: Education[] = [];

  constructor(private portfolioService: PortfolioDataService) {}

  ngOnInit(): void {
    this.portfolioService.getPersonalInfo().subscribe(info => {
      this.personalInfo = info;
    });
    this.portfolioService.getEducation().subscribe(edu => {
      this.education = edu;
    });
  }
}
