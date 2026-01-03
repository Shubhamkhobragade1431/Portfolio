# Portfolio - Shubham Khobragade

A modern, fully responsive personal portfolio website built with **Angular 17** (compatible with Angular 16+ features), featuring standalone components, dark/light themes, and clean architecture.

## 🚀 Live Preview

The application is now running on `http://localhost:4200/`

## 🛠️ Tech Stack

- **Framework:** Angular 17 (Standalone Components)
- **Language:** TypeScript
- **Styling:** SCSS + Angular Material
- **Router:** Angular Router with Lazy Loading
- **State Management:** Angular Signals
- **UI Components:** Angular Material
- **Theming:** Custom Dark/Light Theme Toggle

## ✨ Features

### Pages
- **Home** - Hero section with profile summary and highlights
- **About** - Personal information, education, and contact details
- **Skills** - Technical skills with proficiency levels (progress bars)
- **Experience** - Work experience timeline
- **Projects** - Project showcase with tech stack chips
- **Contact** - Contact form with validation and floating action button

### Key Features
- ✅ Fully responsive design (Mobile, Tablet, Desktop)
- ✅ Dark & Light theme toggle
- ✅ Lazy loading routes for optimal performance
- ✅ Standalone components (No NgModules)
- ✅ Type-safe with TypeScript interfaces
- ✅ Clean architecture (core, shared, features, layouts)
- ✅ Angular Material UI components
- ✅ Smooth animations and transitions
- ✅ SEO-friendly with route titles
- ✅ Production-ready build

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── models/          # TypeScript interfaces
│   │   │   │   └── portfolio.models.ts
│   │   │   └── services/        # Business logic services
│   │   │       ├── portfolio-data.service.ts
│   │   │       └── theme.service.ts
│   │   ├── shared/              # Reusable components
│   │   │   ├── navbar/
│   │   │   └── footer/
│   │   ├── features/            # Feature modules
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   ├── skills/
│   │   │   ├── experience/
│   │   │   ├── projects/
│   │   │   └── contact/
│   │   ├── layouts/
│   │   │   └── main-layout/     # Application shell
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts        # Routing configuration
│   ├── styles.scss              # Global styles & themes
│   └── index.html
├── angular.json
├── package.json
└── tsconfig.json
```

## 🎨 Design Features

### Theme Toggle
- Light and dark themes with smooth transitions
- Theme preference saved to localStorage
- System preference detection
- Accessible theme toggle button in navbar

### Navigation
- Sticky navigation bar with Material toolbar
- Responsive mobile menu
- Active route highlighting
- Smooth scroll behavior

### Components
- **Material Cards** for content sections
- **Progress Bars** for skill levels
- **Timeline UI** for work experience
- **Tech Stack Chips** for projects
- **Floating Action Button** (FAB) for quick contact
- **Responsive Forms** with validation

## 🏃 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. **Navigate to project directory:**
   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   ng serve
   ```

4. **Open browser:**
   Navigate to `http://localhost:4200/`

### Build for Production

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## 📝 Configuration

### Personal Data
Update your personal information in:
- `src/app/core/services/portfolio-data.service.ts`

### Theming
Customize colors in:
- `src/styles.scss` (Material theme configuration)

### Routes
Modify routes in:
- `src/app/app.routes.ts`

## 🎯 Angular Best Practices Implemented

1. **Standalone Components**
   - No NgModules required
   - Simplified dependency management
   - Better tree-shaking

2. **Lazy Loading**
   - Routes loaded on demand
   - Improved initial load time
   - Code splitting

3. **Strong Typing**
   - TypeScript interfaces for all data models
   - Type-safe services and components
   - IntelliSense support

4. **Clean Architecture**
   - Separation of concerns
   - Reusable components
   - Service-based data management

5. **Reactive Programming**
   - RxJS Observables for data streams
   - Angular Signals for state management
   - Reactive forms with validation

6. **Modern Angular Features**
   - Signal-based state management
   - Computed values
   - Standalone APIs

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🎭 Available Scripts

```bash
# Development server
ng serve

# Build for production
ng build

# Run tests
ng test

# Run linter
ng lint

# Generate component
ng generate component component-name

# Generate service
ng generate service service-name
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 👨‍💻 Developer

**Shubham Khobragade**  
Software Developer | .NET Developer  
- Email: shubhamkhobragadeofficial@gmail.com
- Phone: +91 8793208069
- Location: Pune, Maharashtra, India

## 📄 License

This project is open source and available for personal use.

## 🙏 Acknowledgments

- Angular Team for the amazing framework
- Angular Material for UI components
- Community for best practices and patterns

---

**Note:** This is a modern Angular 17 application using standalone components. All routes are lazy-loaded for optimal performance. The application follows Angular style guide and industry best practices.

For any questions or support, please contact the developer.
