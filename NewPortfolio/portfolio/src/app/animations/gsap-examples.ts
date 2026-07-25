import { Injectable } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

@Injectable({
  providedIn: 'root'
})
export class GsapExamplesService {

  // Example 1: Basic fade in animation
  basicFadeIn(element: HTMLElement) {
    gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power3.out'
      }
    );
  }

  // Example 2: Staggered text animation
  staggerTextAnimation(elements: NodeListOf<HTMLElement>) {
    gsap.fromTo(
      elements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      }
    );
  }

  // Example 3: Scroll-triggered animation
  scrollTriggerAnimation(element: HTMLElement) {
    gsap.fromTo(
      element,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }

  // Example 4: Timeline animation
  timelineAnimation(element1: HTMLElement, element2: HTMLElement, element3: HTMLElement) {
    const tl = gsap.timeline();

    tl.fromTo(element1,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo(element2,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.4' // Start 0.4 seconds before previous animation ends
    )
    .fromTo(element3,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.4' // Start 0.4 seconds before previous animation ends
    );

    return tl;
  }

  // Example 5: Parallax effect
  parallaxEffect(element: HTMLElement, speed: number = 0.5) {
    ScrollTrigger.create({
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        gsap.set(element, { 
          y: self.getVelocity() * speed 
        });
      }
    });
  }

  // Example 6: Hover effect
  hoverEffect(element: HTMLElement) {
    const hoverTl = gsap.timeline({ paused: true });
    
    hoverTl.to(element, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out'
    });

    element.addEventListener('mouseenter', () => hoverTl.play());
    element.addEventListener('mouseleave', () => hoverTl.reverse());

    return hoverTl;
  }

  // Example 7: Animated counter
  animatedCounter(element: HTMLElement, start: number, end: number, duration: number = 2) {
    gsap.fromTo(
      { count: start },
      { count: end },
      {
        count: end,
        duration: duration,
        ease: 'power2.out',
        roundProps: 'count',
        onUpdate: function() {
          const target = this['targets'] && this['targets']()[0];
          if (target) {
            element.textContent = Math.floor(target.count).toString();
          }
        }
      }
    );
  }

  // Example 8: Animated progress bar
  animatedProgressBar(bar: HTMLElement, targetWidth: number) {
    gsap.to(bar, {
      width: `${targetWidth}%`,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: bar,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  // Example 9: Page transition
  pageTransition() {
    const tl = gsap.timeline();
    
    tl.to('main', {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        // Route change happens here
      }
    })
    .fromTo('main', 
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
      '>-0.2' // Start 0.2 seconds before previous animation completes
    );

    return tl;
  }

  // Example 10: Animated reveal with mask
  maskedReveal(element: HTMLElement) {
    const mask = document.createElement('div');
    mask.style.position = 'absolute';
    mask.style.top = '0';
    mask.style.left = '0';
    mask.style.width = '100%';
    mask.style.height = '100%';
    mask.style.background = 'black';
    mask.style.mask = 'url(#reveal-mask)'; // Requires SVG mask
    element.appendChild(mask);

    gsap.to(mask, {
      x: '100%',
      duration: 1.5,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  }

  // Example 11: Scroll-based opacity
  scrollOpacity(element: HTMLElement) {
    ScrollTrigger.create({
      trigger: element,
      start: 'top 70%',
      end: 'top 30%',
      scrub: true,
      onEnter: () => gsap.set(element, { opacity: 1 }),
      onLeave: () => gsap.set(element, { opacity: 0 }),
      onEnterBack: () => gsap.set(element, { opacity: 1 }),
      onLeaveBack: () => gsap.set(element, { opacity: 0 })
    });
  }

  // Example 12: Animated SVG path
  animateSvgPath(path: SVGPathElement) {
    const length = path.getTotalLength();
    
    // Set up the path for animation
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: path,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  }
}