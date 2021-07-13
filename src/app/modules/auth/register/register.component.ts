import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";

import * as uuid from "uuid";
import * as sha512 from "js-sha512";
import {User} from "../../../models/user";

@Component({
  selector: "app-register-component",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})

export class RegisterComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    confPassword: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.email]),
    confEmail: new FormControl(null, [Validators.email]),
  }, {
    validators: [this.confirmedValidator("password", "confPassword"),
      this.confirmedValidator("email", "confEmail")]
  });

  user: User = new User();
  error: string;

  constructor(private service: UserService) {
  }

  ngOnInit(): void {
  }

  register(): void {
    if (this.form.valid) {
      this.user.id = uuid.v4();
      this.user.username = this.form.value.username;
      this.user.password = sha512.sha512(this.form.value.password);
      this.user.email = this.form.value.email;
      this.user.role = "user";
      this.service.saveUser(this.user).toPromise().then(data => {});
      this.form.reset();
    } else {
      this.error = "Morate popuniti sva polja!";
    }
  }

  confirmedValidator(controlName: string, matchingControlName: string): any {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({confirmedValidator: true});
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
