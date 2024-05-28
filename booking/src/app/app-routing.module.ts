import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/services/auth.guard';

const routes: Routes = [
  // { path: 'search', component: SearchComponent, canActivate: [authGuard]}, // authGuard open the page only if the user is logged in
  // { path: 'login', component: LoginComponent },
  // { path: 'cart', component: CartComponent, canActivate: [authGuard]},
  // { path: 'no-results', component: NoResultsComponent, canActivate: [authGuard] },
  // { path: '**', redirectTo: 'search' }

  // Lazy loading
  { path: 'search', loadChildren: () => import('./features/search/search.module').then(m => m.SearchModule), canActivate: [authGuard]},
  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)},
  { path: 'cart', loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule), canActivate: [authGuard]},
  { path: '**', redirectTo: 'search' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
