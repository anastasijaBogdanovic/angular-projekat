import {Component, Inject, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {Post} from "../../../../../models/post";
import {Category} from "../../../../../models/category";
import {CategoryService} from "../../../../../services/category.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PostsService} from "../../../../../services/posts.service";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../../../store/app.state";
import {User} from "../../../../../models/user";

@Component({
  selector: "app-admin-dialog",
  templateUrl: "./admin-dialog.component.html",
  styleUrls: ["./admin-dialog.component.scss"]
})
export class AdminDialogComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    categoryId: new FormControl(),
    excerpt: new FormControl(),
    body: new FormControl(),
    slug: new FormControl(),
    created: new FormControl()
  });

  post: Post;
  user: User = new User();
  categoryList: Category[];
  test: Post = new Post();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private categoryService: CategoryService,
    private postService: PostsService,
    private dialogRef: MatDialogRef<AdminDialogComponent>,
    private store: Store<AppState>
  ) {
    if (data) {
      this.post = data;
    }
    console.log("data", data);
  }

  ngOnInit(): void {
    this.getAllCategories();
    if (this.post) {
      this.form.setValue(this.post);
    }
  }

  save(): void {
    const form = this.form.value;
    form.created = new Date();
    console.log(form);
    if (this.post) {
      this.postService.updatePost(form).toPromise().then(data => {
        this.close();
      });
    } else {
      this.postService.savePost(form).toPromise().then(data => {
        this.close();
        console.log(data);
      }, err => {
        console.log(err);
      });
    }
  }

  getAllCategories(): void {
    this.categoryService.getAllCategories().toPromise().then(data => {
      this.categoryList = data;
    });
  }

  close(): void {
    this.dialogRef.close(true);
  }

  compareCategory(category1, category2): boolean {
    return category1 && category2 ? category1.id === category2.id : category1 === category2;
  }
}
