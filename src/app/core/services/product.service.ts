import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/Producto';
import { environment } from '../../../environments/environment';
const baseUrl = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private readonly http: HttpClient) { }

  getAllProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(baseUrl + '/productos');
  }

  login(data:any): Observable<Producto[]> {
    return this.http.post<any[]>(baseUrl + '/auth/login',data);
  }

    recoverPassword(data:any): Observable<Producto[]> {
    return this.http.post<any[]>(baseUrl + '/auth/recover',data);
  }
}
