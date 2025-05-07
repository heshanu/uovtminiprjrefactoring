import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceCall } from '../../service/auth.service';
import { async, map, Observable } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthServiceCall);
  const router = inject(Router);

  if (authService.isAuthenticated$) {
    return true;
  } else {
    // Redirect to the login page or handle unauthorized access
   // router.navigate(['/login']);
    return false;
  }
};