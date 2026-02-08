import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { RegisterUserResponse } from '../../auth/dto/registerUserResponse';
import { RegisterUserRequest } from '../../auth/dto/registerUserRequest';
const baseUrl = environment.base_url;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  login(data: any): Observable<any[]> {
    return this.http.post<any[]>(baseUrl + '/auth/login', data);
  }

  setToken(token: any): void {
    localStorage.setItem(`TOKEN_NOTIF`, token);
  }

  registerUser(data: RegisterUserRequest): Observable<any> {
    return this.http.post<RegisterUserResponse>(`${baseUrl}/auth/register`, data);
  }
}
