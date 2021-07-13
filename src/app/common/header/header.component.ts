import { Component, OnInit } from "@angular/core";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {Observable} from "rxjs";
import * as fromAuthSelectors from "src/app/store/selectors/auth.selectors";
import { logout } from "../../store/actions/auth.actions";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})

export class HeaderComponent implements OnInit {
  vm$: Observable<fromAuthSelectors.AuthLinksViewModal>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.vm$ = this.store.pipe(
      select(fromAuthSelectors.selectAuthLinksViewModel)
    );
  }

  logout(): void {
    this.store.dispatch(logout());
  }
}
