import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'main', loadComponent: () => import('./main/product-app/product-app.component').then(m => m.ProductAppComponent) },
    //{ path: '**', loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent) },
    { path: 'auth', loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent) },
    { path: '**', loadComponent: () => import('./main/product-app/product-app.component').then(m => m.ProductAppComponent) },
];
