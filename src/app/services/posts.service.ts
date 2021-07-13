import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Post} from "../models/post";

@Injectable({
  providedIn: "root"
})

export class PostsService {
  constructor(private http: HttpClient) {
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}/posts`, {responseType: "json"});
  }

  getPostById(postId: number): Observable<Post> {
    return this.http.get<Post>(`${environment.apiUrl}/posts/${postId}`, {responseType: "json"});
  }

  savePost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${environment.apiUrl}/posts`, post, {responseType: "json"});
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${environment.apiUrl}/posts/` + post.id, post, {responseType: "json"});
  }

  deletePost(postId: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/posts/` + postId);
  }
}
