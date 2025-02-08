import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, tap, of, map, catchError } from 'rxjs';

//import { environments } from '../../../environments/environments';
import { User } from '../interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor() {}

  // Método para iniciar sesión
  login(username: string, password: string): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.username === username && user.password === password) {
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  }

  // Método para registrar un usuario (simulado)
  register(username: string, password: string) {
    localStorage.setItem('user', JSON.stringify({ username, password }));
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return localStorage.getItem('isAuthenticated') === 'true';
  }

  // Método para cerrar sesión
  logout() {
    localStorage.removeItem('isAuthenticated');
  }
 
}