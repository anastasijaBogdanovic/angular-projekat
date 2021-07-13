import {Component, OnInit} from "@angular/core";
import {PostsService} from "../../../services/posts.service";
import {Post} from "../../../models/post";
import {Observable} from "rxjs";
import * as fromAuthSelectors from "../../../store/selectors/auth.selectors";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../store/app.state";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  vm$: Observable<fromAuthSelectors.AuthLinksViewModal>;

  constructor(
    private postsService: PostsService,
    private store: Store<AppState>,
    private dialogBox: MatDialog
  ) {
  }

  listOfPosts: Post[];

  ngOnInit(): void {
    this.getAllPosts();
    this.vm$ = this.store.pipe(
      select(fromAuthSelectors.selectAuthLinksViewModel)
    );
  }

  getAllPosts(): void {
    this.postsService.getAllPosts().toPromise().then(data => {
      this.listOfPosts = data;
      console.log(data);
    });
  }
}
