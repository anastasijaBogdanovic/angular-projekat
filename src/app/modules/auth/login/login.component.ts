import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import * as sha512 from "js-sha512";
import {AuthService} from "../../../services/auth.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/app.state";
import * as fromAuthActions from "src/app/store/actions/auth.actions";

@Component({
  selector: "app-login-component",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})

export class LoginComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });


  constructor(
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.store.dispatch(
        fromAuthActions.loginPage({
          username: this.form.value.username,
          password: sha512.sha512(this.form.value.password)
        })
      );
    }
  }
}
