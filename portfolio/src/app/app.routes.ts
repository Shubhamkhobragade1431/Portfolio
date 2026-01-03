import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

/**
 * Application Routes Configuration
 * Single-page scrolling portfolio - all content on home page
 */
export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
        title: 'Shubham Khobragade - Portfolio | .NET Developer'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
