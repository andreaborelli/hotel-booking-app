import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => { // authGuard function
  const auth = inject(AuthService); // inject AuthService
  const router = inject(Router); // inject Router

  const isAuth = auth.isLogged(); // check if user is logged in
  // if (!isAuth) { // if user is not logged in redirect to login page
  //   router.navigateByUrl('login'); // redirect to login page
  // }
  // return isAuth; // return isAuth
  return true;
};
