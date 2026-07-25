import { Injectable } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  // Basic fade in animation
  fadeIn(element: HTMLElement, duration: number = 1, delay: number = 0) {
    gsap.fromTo(element, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: duration, 
        delay: delay,
        ease: 'power3.out'
      }
    );
  }

  // Staggered text animation
  staggerTextAnimation(elements: NodeListOf<HTMLElement>, duration: number = 0.8, stagger: number = 0.1) {
    gsap.fromTo(elements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        stagger: stagger,
        ease: 'power3.out'
      }
    );
  }

  // Scroll-triggered animations
  animateOnScroll(element: HTMLElement, animationType: 'slideIn' | 'fadeIn' | 'scaleIn' = 'slideIn') {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    switch(animationType) {
      case 'slideIn':
        tl.fromTo(element, 
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
        );
        break;
      case 'fadeIn':
        tl.fromTo(element,
          { opacity: 0 },
          { opacity: 1, duration: 0.8, ease: 'power3.out' }
        );
        break;
      case 'scaleIn':
        tl.fromTo(element,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, ease: 'power3.out' }
        );
        break;
    }

    return tl;
  }

  // Experience timeline animation
  animateTimeline(items: NodeListOf<HTMLElement>) {
    items.forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          delay: index * 0.2
        }
      );
    });
  }

  // Project card hover effect
  addProjectHoverEffect(card: HTMLElement) {
    gsap.fromTo(card,
      { scale: 1, filter: 'brightness(1)' },
      {
        scale: 1.03,
        filter: 'brightness(1.1)',
        duration: 0.3,
        ease: 'power2.out',
        paused: true
      }
    ).play();
  }

  // Create scroll-triggered section reveal
  createSectionReveal(section: HTMLElement) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    });

    // Get all child elements to animate
    const children = Array.from(section.children) as HTMLElement[];
    
    tl.fromTo(children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      }
    );

    return tl;
  }

  // Cleanup scroll triggers
  killAllScrollTriggers() {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }
}