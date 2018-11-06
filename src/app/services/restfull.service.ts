import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // only need to import from rxjs
import { catchError, tap } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable({
  providedIn: 'root'
})
export class RestfullService {
  private tipdocUrl: string = 'https://swapi.co/api/people/1/';

  constructor (public http: HttpClient) {  }

  getTipDoc(): Observable<any> 
  {
     return this.http.get(this.tipdocUrl,httpOptions);
    //return this.http.get(this.tipodocsUrl + "tipdocmodel", httpOptions);
  }
}
