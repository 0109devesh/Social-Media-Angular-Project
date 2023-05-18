import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

   

  private baseUrl = 'http://localhost:8080/users';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  registerUser(user: any): Observable<any> {
    return this.http.post<any>(
      this.baseUrl,
      JSON.stringify(user),
      this.httpOptions
    );
  }

  updateUser(user: any): Observable<any> {
    return this.http.put<any>(
      `${this.baseUrl}/${user.id}`,
      JSON.stringify(user),
      this.httpOptions
    );
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`, this.httpOptions);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }




}
