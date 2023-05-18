import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from './user.model';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth/login';
  

  constructor(private http: HttpClient,private userService: UsersService ) {}

  login(username: string, password: string): Observable<User> {
    const url = `${this.apiUrl}`;
    const user = { username, password };
    

    return this.http.post<User>(url, user).pipe(
      map((response) => response.user) // Extract the "user" object from the response
    );

    
  }


}
