import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {UserService} from "./services/user.service";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./services/auth.service";
import {MatIconModule} from "@angular/material/icon";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./store/effects/auth.effects";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {StoreModule} from "@ngrx/store";
import {metaReducers, reducers} from "./store/app.state";
import {RouteEffects} from "./store/effects/route.effects";
import {MatToolbarModule} from "@angular/material/toolbar";
import { HomeComponent } from "./pages/home/home.component";
import {LoginComponent} from "./modules/auth/login/login.component";
import {RegisterComponent} from "./modules/auth/register/register.component";
import { HeaderComponent } from "./common/header/header.component";
import { AdminComponent } from "./modules/users/admin/admin.component";
import { UserComponent } from "./modules/users/user/user.component";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";
import {AdminDialogComponent} from "./modules/users/admin/dialog/admin-dialog/admin-dialog.component";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { DeleteDialogComponent } from "./modules/users/admin/dialog/delete-dialog/delete-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    AdminComponent,
    UserComponent,
    AdminDialogComponent,
    DeleteDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
    EffectsModule.forRoot([
      AuthEffects,
      RouteEffects
    ]),
    StoreRouterConnectingModule.forRoot(),
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule
  ],
  providers: [
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
