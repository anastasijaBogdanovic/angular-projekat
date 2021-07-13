import {Data} from "@angular/router";
import {Category} from "./category";

export class Post {
  id?: string;
  categoryId?: Category;
  title?: string;
  excerpt: string;
  body?: string;
  slug?: string;
  created?: Data;
}
