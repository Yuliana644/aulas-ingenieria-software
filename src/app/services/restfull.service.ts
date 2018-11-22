import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // only need to import from rxjs
import { catchError, tap } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })};

@Injectable({
  providedIn: 'root'
})
export class RestfullService {
  private tipdocUrl: string = 'http://localhost:3000/tipodoc';
  private indexCursosUrl: string = 'http://localhost:3000/cursos';
  private personUrl: string = 'http://localhost:3000/personas'
  private loginUrl: string = 'http://localhost:3000/login'

  constructor (public http: HttpClient) {  }

  getTipDocs(): Observable<any>
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

  savePerson(person): Observable<any>
  {
    return this.http.post(this.personUrl,person,httpOptions)
  }

  editPerson(person): Observable<any>
  {
    return this.http.put(this.personUrl,person,httpOptions)
  }

  loginStudent(login): Observable<any>
  {
    return this.http.post(this.loginUrl,login,httpOptions)
  }
}
