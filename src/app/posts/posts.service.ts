import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {}


  private baseUrl = 'http://localhost:8080/posts';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  createPost(post: any): Observable<any> {
    return this.http.post<any>(
      this.baseUrl,
      JSON.stringify(post),
      this.httpOptions
    );
  }

  updatePost(post: any): Observable<any> {
    return this.http.put<any>(
      `${this.baseUrl}/${post.id}`,
      JSON.stringify(post),
      this.httpOptions
    );
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`, this.httpOptions);
  }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }



}
