import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // only need to import from rxjs
import { catchError, tap } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })};

@Injectable({
  providedIn: 'root'
})
export class RestfullService {
  private tipdocUrl: string = 'http://localhost:3000/cursos';
  private indexCursosUrl: string = 'http://localhost:3000/cursos';

  constructor (public http: HttpClient) {  }

  getTipDoc(): Observable<any> 
  {
     return this.http.get(this.tipdocUrl,httpOptions);
    //return this.http.get(this.tipodocsUrl + "tipdocmodel", httpOptions);
  }

  getCursos(): Observable<any> 
  {
     return this.http.get(this.indexCursosUrl,httpOptions);
  }

  getCurso(id): Observable<any> 
  {
     return this.http.get(this.indexCursosUrl+'/'+id,httpOptions);
  }
}
