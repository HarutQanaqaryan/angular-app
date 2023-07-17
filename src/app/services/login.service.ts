import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  postLogin(login: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('https://fakestoreapi.com/auth/login', {
      username: login,
      password: password,
    });
  }
}
