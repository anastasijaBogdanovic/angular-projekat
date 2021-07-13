import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Category} from "../models/category";

@Injectable({
  providedIn: "root"
})

export class CategoryService {
  constructor(private http: HttpClient) {
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiUrl}/categories`, {responseType: "json"});
  }

  getCategoryById(categoryId: number): Observable<Category> {
    return this.http.get<Category>(`${environment.apiUrl}/categories/${categoryId}`, {responseType: "json"});
  }

  saveCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${environment.apiUrl}/categories`, category, {responseType: "json"});
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(`${environment.apiUrl}/categories`, category, {responseType: "json"});
  }

  deleteCategory(categoryId: number): Observable<void> {
    return this.http.delete<void>(`${environment}/categories/${categoryId}`, {responseType: "json"});
  }
}
