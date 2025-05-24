import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceCall } from '../../service/auth.service';
import { map, Observable, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthServiceCall);
  const router = inject(Router);

  // Get credentials from storage (temporary approach)
  const username = localStorage.getItem('username');
  const password = localStorage.getItem('password');

  if (!username || !password) {
    return of(router.parseUrl('/login'));
  }

  return authService.isAuthenticated$(username, password).pipe(
    map(authenticated => {
      if (authenticated) return true;
      return router.parseUrl('/login');
    })
  );
};