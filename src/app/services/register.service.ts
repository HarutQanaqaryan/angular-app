import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  registerLogin(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ): Observable<{ id: string | number }> {
    return this.http.post<{ id: string | number }>(
      'https://fakestoreapi.com/users',
      {
        email: email,
        password: password,
        name: {
          firstname: firstName,
          lastname: lastName,
        },
      }
    );
  }
}
