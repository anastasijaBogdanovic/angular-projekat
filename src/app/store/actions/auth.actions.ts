import {createAction, props} from "@ngrx/store";
import {User} from "../../models/user";

export const loginPage = createAction(
  "[Login Component] Login User",
  props<{username: string, password: string}>()
);

export const loginSuccess = createAction(
  "[Auth Effect] Login User Success",
  props<{user: User}>()
);

export const loginFailure = createAction(
  "[Auth Effect] Login User Failure",
  props<{error: any}>()
);

export const logout = createAction("[Auth Links Component] Logout User");
