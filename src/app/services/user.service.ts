import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: "root"
})

export class UserService {
  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/users`, {responseType: "json"});
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/${userId}`, {responseType: "json"});
  }

  saveUser(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/users`, user, {responseType: "json"});
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${environment.apiUrl}/users`, user, {responseType: "json"});
  }

  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${environment}/users/${userId}`, {responseType: "json"});
  }
}
