# Shubham Khobragade - Portfolio

A modern, animated portfolio website built with Angular 17, Three.js, and GSAP.

## Features

- **Angular 17** with standalone components
- **Three.js** for 3D WebGL hero section
- **GSAP** for smooth animations and scroll effects
- Responsive design (mobile, tablet, desktop)
- Dark theme with glassmorphism effects
- Performance optimized with lazy loading
- SEO-friendly

## Tech Stack

- Angular 17
- TypeScript (strict mode)
- Three.js
- GSAP (ScrollTrigger, Timeline)
- SCSS
- Angular Signals
- Angular Router (lazy loaded routes)

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── hero/          # Three.js powered hero section
│   │   ├── about/         # About section
│   │   ├── skills/        # Skills section with progress bars
│   │   ├── experience/    # Experience timeline
│   │   ├── projects/      # Project cards with hover effects
│   │   └── contact/       # Contact form
│   ├── services/
│   │   ├── data.service.ts     # Data management
│   │   └── animation.service.ts # GSAP animations
│   ├── interfaces/
│   │   ├── skill.interface.ts
│   │   ├── experience.interface.ts
│   │   └── project.interface.ts
│   └── app.routes.ts
```

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm start
```

4. Open your browser to `http://localhost:4200`

## Deployment

### Netlify

1. Connect your GitHub repository to Netlify
2. Set the build command to: `npm run build`
3. Set the publish directory to: `dist/portfolio/browser`
4. Add the following redirect rule:
```
/* /index.html 200
```

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Copy the contents of `dist/portfolio/browser` to the `docs/` folder
3. Enable GitHub Pages in repository settings, selecting the `docs/` folder as source

## Animations

The portfolio uses GSAP for various animations:

- Scroll-triggered section reveals
- Timeline animations for experience section
- Project card hover effects
- Staggered text animations
- Smooth page transitions

## Performance

- Three.js is only loaded on the home route
- Lazy loading for all routes
- Optimized rendering with Angular Signals
- Mobile fallback for heavy WebGL content

## Author

Shubham Khobragade
- Email: shubhamkhobragadeofficial@gmail.com
- Location: Pune, Maharashtra, India