import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../model/Comment'; // Define the Comment model interface

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseUrl = 'http://localhost:8080'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${this.baseUrl}/comments/add`, comment);
  }

  getCommentsByFilmId(filmId: number|undefined): Observable<Comment[]> {
    return this.http.post<Comment[]>(`${this.baseUrl}/comments/get`, {filmid:filmId});
  }
}
