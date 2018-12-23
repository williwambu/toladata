import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Program } from '../models/program.model';
import { environment } from '../../environments/environment';

@Injectable()
export class ProgramsService {
  public apiUrl: string;

  constructor (private http: HttpClient) {
    this.apiUrl = `${environment.apiURL}/workflowlevel1/`;
  }

  getPrograms (): Observable<Program[]> {
    return this.http
      .get<Program[]>(this.apiUrl)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
