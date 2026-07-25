import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { AnimationService } from '../../services/animation.service';
import { Experience } from '../../interfaces/experience.interface';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(
    private dataService: DataService,
    private animationService: AnimationService
  ) {}

  ngOnInit() {
    this.experiences = this.dataService.getExperiences();

    // Animate the timeline after it's loaded
    setTimeout(() => {
      const timelineItems = document.querySelectorAll('.timeline-item');
      if (timelineItems.length > 0) {
        this.animationService.animateTimeline(timelineItems as NodeListOf<HTMLElement>);
      }
    }, 100);
  }
}