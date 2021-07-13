import {User} from "../../models/user";
import {createReducer, on} from "@ngrx/store";
import * as AuthActions from "../actions/auth.actions";

export const authFeatureKey = "auth";

export interface State {
  user: User | null;
  errorMessage: string | null;
}

export const initialState: State = {
  user: {
    id: null,
    username: null,
    password: null,
    email: null,
    role: null
  },
  errorMessage: null
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
      errorMessage: null
    };
  }),
  on(AuthActions.loginFailure, (state, action) => {
    return {
      ...state,
      user: {
        id: null,
        username: null,
        password: null,
        email: null,
        role: null
      },
      errorMessage: action.error
    };
  }),
  on(AuthActions.logout, (state, action) => {
    return {
      ...state,
      user: {
        id: null,
        username: null,
        password: null,
        email: null,
        role: null
      },
      errorMessage: null
    };
  })
);
