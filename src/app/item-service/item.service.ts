import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Item} from "../model/item";
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itemUrl: string;
  private adminToken: string;

  constructor(private http: HttpClient) {
    this.itemUrl = `${environment.backendUrl}/items`;
    this.adminToken = '2';
  }

  createItem(item: Item): Observable<Item> {
    const headers = new HttpHeaders().append('authToken', this.adminToken);
    return this.http.post<Item>(this.itemUrl, item,{headers})
      .pipe(catchError(this.handleError<Item>('createItem', null)));
  }

  getAllItems(): Observable<Item[]> {
    const headers = new HttpHeaders().append('authToken', this.adminToken);
    return this.http.get<Item[]>(this.itemUrl, {headers})
      .pipe(catchError(this.handleError<Item[]>('getAllItems', [])));
  }

  updateItem(item: Item): Observable<Item> {
    const headers = new HttpHeaders().append('authToken', this.adminToken);
    return this.http.put<Item>(`${this.itemUrl}/${item.id}`, item, {headers})
      .pipe(catchError(this.handleError<Item>('updateItem', null)));
  }

  deleteItem(item: Item): Observable<Item> {
    const headers = new HttpHeaders().append('authToken', this.adminToken);
    return this.http.delete<Item>(`${this.itemUrl}/${item.id}`, {headers})
      .pipe(catchError(this.handleError<Item>('deleteItem', null)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

}
