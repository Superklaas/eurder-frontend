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
  private managerToken: string;

  constructor(private http: HttpClient) {
    this.itemUrl = `${environment.backendUrl}/items`;
    this.managerToken = '2';
  }

  getAllItems(): Observable<Item[]> {
    const headers = new HttpHeaders().append('authToken', this.managerToken);
    return this.http.get<Item[]>(this.itemUrl, {headers})
      .pipe(catchError(this.handleError<Item[]>('getAllItems', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

}
