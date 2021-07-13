import {createFeatureSelector, createSelector} from "@ngrx/store";
import * as fromAuth from "../reducers/auth.reducers";

export const selectAuthState = createFeatureSelector<fromAuth.State>(
  fromAuth.authFeatureKey
);

export interface AuthLinksViewModal {
  isAdmin: boolean;
  isLoggedIn: boolean;
}

export const selectIsLoggedIn = createSelector(
  selectAuthState,
  (state: fromAuth.State): boolean => state.user.id != null
);

export const selectIsAdmin = createSelector(
  selectAuthState,
  (state: fromAuth.State): boolean => state.user.role === "admin"
);

export const selectAuthLinksViewModel = createSelector(
  selectIsAdmin,
  selectIsLoggedIn,
  (isAdmin: boolean, isLoggedIn: boolean): AuthLinksViewModal => {
    return {
      isAdmin,
      isLoggedIn
    };
  }
);
