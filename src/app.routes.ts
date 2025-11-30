
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./components/dashboard/dashboard.component').then(c => c.DashboardComponent)
  },
  {
    path: 'courses',
    loadComponent: () => import('./components/courses/courses.component').then(c => c.CoursesComponent)
  },
  {
    path: 'course/:id',
    loadComponent: () => import('./components/course-detail/course-detail.component').then(c => c.CourseDetailComponent)
  },
  {
    path: 'schedule',
    loadComponent: () => import('./components/schedule/schedule.component').then(c => c.ScheduleComponent)
  },
  {
    path: 'profile',
    loadComponent: () => import('./components/profile/profile.component').then(c => c.ProfileComponent)
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];
