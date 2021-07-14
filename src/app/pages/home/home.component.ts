import { Component, OnInit } from "@angular/core";
import {Observable} from "rxjs";
import * as fromAuthSelectors from "src/app/store/selectors/auth.selectors";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  vm$: Observable<fromAuthSelectors.AuthLinksViewModal>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.vm$ = this.store.pipe(
      select(fromAuthSelectors.selectAuthLinksViewModel)
    );
  }

}
