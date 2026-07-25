import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { AnimationService } from '../../services/animation.service';
import { Skill } from '../../interfaces/skill.interface';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills = signal<Skill[]>([]);
  frontendSkills = signal<Skill[]>([]);
  backendSkills = signal<Skill[]>([]);
  toolSkills = signal<Skill[]>([]);

  constructor(
    private dataService: DataService,
    private animationService: AnimationService
  ) {}

  ngOnInit() {
    this.skills.set(this.dataService.getSkills());
    this.frontendSkills.set(this.dataService.getFrontendSkills());
    this.backendSkills.set(this.dataService.getBackendSkills());
    this.toolSkills.set(this.dataService.getToolSkills());

    // Animate the section after it's loaded
    setTimeout(() => {
      const section = document.querySelector('.skills-section');
      if (section) {
        this.animationService.createSectionReveal(section as HTMLElement);
      }
    }, 100);
  }
}