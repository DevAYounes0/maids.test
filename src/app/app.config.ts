import {
  ApplicationConfig,
  inject,
  Injectable,
  provideZoneChangeDetection,
  signal,
} from '@angular/core';
import {
  provideRouter,
  ViewTransitionInfo,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withViewTransitions({ onViewTransitionCreated })),
    provideAnimationsAsync(),
    provideAnimationsAsync(),
    provideStore(reducers, { metaReducers }),
    provideHttpClient(),
  ],
};

function onViewTransitionCreated({ transition }: ViewTransitionInfo) {
  const x = innerWidth / 2;
  const y = innerHeight / 2;
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y)
  );

  transition.ready.then(() => {
    document.documentElement.animate(
      [
        { clipPath: `circle(0 at ${x}px ${y}px)` },
        { clipPath: `circle(${endRadius}px at ${x}px ${y}px)` },
      ],
      {
        duration: 1000,
        easing: 'ease-in',
        pseudoElement: '::view-transition-new(root)',
      }
    );
  });
}
