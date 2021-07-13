import {Component, OnInit, ViewChild} from "@angular/core";
import {Post} from "../../../models/post";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {PostsService} from "../../../services/posts.service";
import {MatDialog} from "@angular/material/dialog";
import {AdminDialogComponent} from "./dialog/admin-dialog/admin-dialog.component";
import {DeleteDialogComponent} from "./dialog/delete-dialog/delete-dialog.component";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})

export class AdminComponent implements OnInit {

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  displayedColumns: string[] = ["categoryId", "title", "excerpt", "body", "slug", "created", "options"];
  dataSourceAssignmentStatisticsTable = new MatTableDataSource<Post>(null);
  posts: Post[];

  constructor(private service: PostsService, private dialogBox: MatDialog) {
  }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(): void {
    this.service.getAllPosts().toPromise().then(data => {
      this.dataSourceAssignmentStatisticsTable = new MatTableDataSource(data);
      this.dataSourceAssignmentStatisticsTable.sort = this.sort;
      this.dataSourceAssignmentStatisticsTable.paginator = this.paginator;
      this.posts = data;
    }).catch(err => {
      if (err !== 0) {
        this.dataSourceAssignmentStatisticsTable = new MatTableDataSource([]);
      }
    });
  }

  openDialog(element: Post = undefined): void {
    const dialogRef = this.dialogBox.open(AdminDialogComponent, {
      width: "50%",
      data: element
    });
    dialogRef.afterClosed().toPromise().then(() => {
      this.getAllPosts();
    });
  }

  delete(elementId: number): void {
    const dialogRef = this.dialogBox.open(DeleteDialogComponent, {
      width: "50%",
      backdropClass: "background"
    });
    dialogRef.afterClosed().toPromise().then(result => {
        if (result) {
          this.service.deletePost(elementId).toPromise().then(data => {
            this.getAllPosts();
          }, err => {
            console.log(err);
          });
        }
    });
  }

}
