import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnimationService } from './services/animation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'portfolio';

  constructor(private animationService: AnimationService) {}

  ngOnInit() {
    // Initialize global animations if needed
  }

  ngOnDestroy() {
    // Clean up scroll triggers when component is destroyed
    this.animationService.killAllScrollTriggers();
  }
}
