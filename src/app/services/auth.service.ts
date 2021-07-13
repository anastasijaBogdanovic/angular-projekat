import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {environment} from "../../environments/environment";
import {Observable, of, throwError} from "rxjs";
import {switchMap} from "rxjs/operators";


@Injectable()
export class AuthService {
  private URL = environment.apiUrl + "/users";

  constructor(private http: HttpClient) {}

  logIn(username: string, password: string): Observable<any> {
    return this.http.get(this.URL + "?username=" + username + "&password=" + password).pipe(
      switchMap((users) => {
        const user = users[0];
        if (user) {
          return of(user);
        } else {
          return throwError("Unable to login");
        }
      })
    );
  }
}
