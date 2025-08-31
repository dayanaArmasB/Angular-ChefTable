import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'main', loadComponent: () => import('./main/product-app/product-app.component').then(m => m.ProductAppComponent) },
    { path: 'login', loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent) },
    { path: 'register', loadComponent: () => import('./auth/register/register.component').then(m => m.RegisterComponent) },
    { path: '**', loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent) },
];
