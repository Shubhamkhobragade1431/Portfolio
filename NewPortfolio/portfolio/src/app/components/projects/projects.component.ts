import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { AnimationService } from '../../services/animation.service';
import { Project } from '../../interfaces/project.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(
    private dataService: DataService,
    private animationService: AnimationService
  ) {}

  ngOnInit() {
    this.projects = this.dataService.getProjects();

    // Animate the projects after they're loaded
    setTimeout(() => {
      const projectCards = document.querySelectorAll('.project-card');
      projectCards.forEach((card, index) => {
        setTimeout(() => {
          this.animationService.animateOnScroll(card as HTMLElement, 'scaleIn');
        }, index * 200);
      });
    }, 100);
  }

  onProjectCardHover(card: HTMLElement) {
    this.animationService.addProjectHoverEffect(card);
  }
}