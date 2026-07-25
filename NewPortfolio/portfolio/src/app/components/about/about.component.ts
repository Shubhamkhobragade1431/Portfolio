import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  personalInfo = this.dataService.personalInfo;
  isLoaded = signal(false);

  constructor(
    private dataService: DataService,
    private animationService: AnimationService
  ) {}

  ngOnInit() {
    this.isLoaded.set(true);
    // Animate the section after it's loaded
    setTimeout(() => {
      const section = document.querySelector('.about-section');
      if (section) {
        this.animationService.createSectionReveal(section as HTMLElement);
      }
    }, 100);
  }
}