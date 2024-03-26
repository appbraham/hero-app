import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

const checkAuthStatus = (): boolean | Observable<boolean> => {

  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.checkAuthentication()
    .pipe(
      tap( isAuthenticated => console.log('Authenticated:', isAuthenticated)),
      tap( isAuthenticated => {
      if( !isAuthenticated )  router.navigate(['./auth/login']);
    })
    );
}

const canMatchFn: CanMatchFn = (route, segments): boolean | Observable<boolean> => {
  return checkAuthStatus();
};

const canActivateFn: CanActivateFn = (route, state): boolean | Observable<boolean> => {
  return checkAuthStatus();
};

export const authGuard = { canMatchFn, canActivateFn }
