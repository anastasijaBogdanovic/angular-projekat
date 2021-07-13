import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Comment} from "../models/comment";

@Injectable({
  providedIn: "root"
})

export class CommentService {
  constructor(private http: HttpClient) {
  }

  getAllComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${environment.apiUrl}/comments`, {responseType: "json"});
  }

  getCommentById(commentId: number): Observable<Comment> {
    return this.http.get<Comment>(`${environment.apiUrl}/comments/${commentId}`, {responseType: "json"});
  }

  saveComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${environment.apiUrl}/comments`, comment, {responseType: "json"});
  }

  updateComment(comment: Comment): Observable<Comment> {
    return this.http.put<Comment>(`${environment.apiUrl}/comments`, comment, {responseType: "json"});
  }

  deleteComment(commentId: number): Observable<void> {
    return this.http.delete<void>(`${environment}/comments/${commentId}`, {responseType: "json"});
  }
}
