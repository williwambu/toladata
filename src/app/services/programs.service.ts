import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Program } from '../models/program.models';
import { environment } from '../../environments/environment';

@Injectable()
export class ProgramsService {
  private apiUrl: string;

  constructor (private http: HttpClient) {
    this.apiUrl = environment.apiURL;
  }

  getPrograms (): Observable<Program[]> {
    return this.http
      .get<Program[]>(`${this.apiUrl}/workflowlevel1`,)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  // createPizza(payload: Pizza): Observable<Pizza> {
  //   return this.http
  //     .post<Pizza>(`/api/pizzas`, payload)
  //     .pipe(catchError((error: any) => Observable.throw(error.json())));
  // }
  //
  // updatePizza(payload: Pizza): Observable<Pizza> {
  //   return this.http
  //     .put<Pizza>(`/api/pizzas/${payload.id}`, payload)
  //     .pipe(catchError((error: any) => Observable.throw(error.json())));
  // }
  //
  // removePizza(payload: Pizza): Observable<Pizza> {
  //   return this.http
  //     .delete<any>(`/api/pizzas/${payload.id}`)
  //     .pipe(catchError((error: any) => Observable.throw(error.json())));
  // }
}
