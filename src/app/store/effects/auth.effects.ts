import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {of} from "rxjs";
import {map, catchError, concatMap} from "rxjs/operators";
import * as AuthActions from "../actions/auth.actions";
import {AuthService} from "../../services/auth.service";

@Injectable()
export class AuthEffects {

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginPage),
      concatMap((action) =>
        this.authService.logIn(action.username, action.password).pipe(
          map((user) => AuthActions.loginSuccess({user})),
          catchError((error) => of(AuthActions.loginFailure({error})))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {
  }
}
