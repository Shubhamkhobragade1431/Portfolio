import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  personalInfo = this.dataService.personalInfo;

  constructor(
    private dataService: DataService,
    private animationService: AnimationService
  ) {}

  ngOnInit() {
    // Animate the section after it's loaded
    setTimeout(() => {
      const section = document.querySelector('.contact-section');
      if (section) {
        this.animationService.createSectionReveal(section as HTMLElement);
      }
    }, 100);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    // In a real app, you would handle form submission here
    alert('Thank you for your message! I will get back to you soon.');
  }
}