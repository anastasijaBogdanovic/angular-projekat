import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {LoginComponent} from "./modules/auth/login/login.component";
import {RegisterComponent} from "./modules/auth/register/register.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {
    path: "log-in",
    component: LoginComponent
  },
  {
    path: "sign-up",
    component: RegisterComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "**",
    redirectTo: "/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
