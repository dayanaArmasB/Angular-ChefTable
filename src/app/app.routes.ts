import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'catalogo', loadComponent: () => import('./main/product-app/product-app.component').then(m => m.ProductAppComponent) },
    { path: 'login', loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent) },
    { path: 'register', loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent) },
    { path: 'recover', loadComponent: () => import('./auth/recover/recover.component').then(m => m.RecoverComponent) },
    { path: 'reset-password', loadComponent: () => import('./auth/reset-password/reset-password.component').then(m => m.ResetPasswordComponent) },
    { path: '**', loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent) },
];
