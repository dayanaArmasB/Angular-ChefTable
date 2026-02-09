import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { RegisterUserResponse } from '../../auth/dto/registerUserResponse';
import { RegisterUserRequest } from '../../auth/dto/registerUserRequest';
import { LoginRequest } from '../../auth/dto/LoginRequest';
import { LoginResponse } from '../../auth/dto/LoginResponse';
const baseUrl = environment.base_url;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `${baseUrl}/auth/login`,
      data
    );
  }

  setToken(token: any): void {
    localStorage.setItem(`TOKEN_NOTIF`, token);
  }

registerUser(data: RegisterUserRequest): Observable<RegisterUserResponse> {
  return this.http.post<RegisterUserResponse>(`${baseUrl}/auth/register`, data);
}

}
