import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { AnimationService } from '../../services/animation.service';
import * as THREE from 'three';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  personalInfo = this.dataService.personalInfo;
  isLoaded = signal(false);

  private scene?: THREE.Scene;
  private camera?: THREE.PerspectiveCamera;
  private renderer?: THREE.WebGLRenderer;
  private particles?: THREE.Points;
  private animationId?: number;

  constructor(
    private dataService: DataService,
    private animationService: AnimationService
  ) {}

  ngOnInit() {
    this.initializeThreeScene();
    this.setupAnimations();
    this.isLoaded.set(true);
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
  }

  private initializeThreeScene() {
    const container = document.getElementById('hero-canvas');
    if (!container) return;

    // Scene setup
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(this.renderer.domElement);

    // Position camera
    this.camera.position.z = 5;

    // Create particles
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x4cc9f0,
      size: 0.05,
      transparent: true,
      opacity: 0.8
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);

    // Handle window resize
    window.addEventListener('resize', this.onWindowResize.bind(this));

    // Start animation loop
    this.animate();
  }

  private animate = () => {
    this.animationId = requestAnimationFrame(this.animate);

    if (this.particles) {
      this.particles.rotation.x += 0.001;
      this.particles.rotation.y += 0.001;
    }

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  };

  private onWindowResize() {
    if (this.camera && this.renderer) {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
  }

  private setupAnimations() {
    // Animate text elements after a delay to let Three.js initialize
    setTimeout(() => {
      const titleElement = document.querySelector('.hero-title');
      const roleElement = document.querySelector('.hero-role');
      const ctaElements = document.querySelectorAll('.hero-cta .btn');
      
      if (titleElement) {
        this.animationService.fadeIn(titleElement as HTMLElement, 1, 0.5);
      }
      
      if (roleElement) {
        this.animationService.fadeIn(roleElement as HTMLElement, 1, 0.7);
      }
      
      ctaElements.forEach((element, index) => {
        this.animationService.fadeIn(element as HTMLElement, 0.8, 0.9 + index * 0.2);
      });
    }, 500);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToNextSection() {
    // Find the next section after the hero section
    const nextSection = document.querySelector('.about-section') || document.querySelector('app-about');
    
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback to scrolling by window height if section not found
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  }
}