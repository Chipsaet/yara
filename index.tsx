
import '@angular/compiler';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideZonelessChangeDetection, LOCALE_ID } from '@angular/core';
import { AppComponent } from './src/app.component';
import { APP_ROUTES } from './src/app.routes';
import { registerLocaleData } from '@angular/common';
import localeFa from '@angular/common/locales/fa';

registerLocaleData(localeFa);

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(APP_ROUTES, withHashLocation()),
    provideHttpClient(),
    { provide: LOCALE_ID, useValue: 'fa-IR' },
  ],
}).catch(err => console.error(err));

// AI Studio always uses an `index.tsx` file for all project types.