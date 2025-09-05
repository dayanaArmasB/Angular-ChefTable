import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./pages/welcome/welcome.component').then(m => m.WelcomeComponent),
    data: { animation: 'WelcomePage' }
  },
  { 
    path: 'catalogo', 
    loadComponent: () => import('./main/product-app/product-app.component').then(m => m.ProductAppComponent),
    data: { animation: 'CatalogPage' }
  },
  { 
    path: 'login', 
    loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent),
    data: { animation: 'LoginPage' }
  },
  { 
    path: 'register', 
    loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent),
    data: { animation: 'RegisterPage' }
  },
  { 
    path: 'recover', 
    loadComponent: () => import('./auth/recover/recover.component').then(m => m.RecoverComponent),
    data: { animation: 'RecoverPage' }
  },
  { 
    path: 'reset-password', 
    loadComponent: () => import('./auth/reset-password/reset-password.component').then(m => m.ResetPasswordComponent),
    data: { animation: 'ResetPasswordPage' }
  },
  { path: '**', redirectTo: '' },
];


