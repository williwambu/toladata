import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Activity } from '../models/activity.model';

@Injectable()
export class ActivityService {
  public apiUrl: string;

  constructor (private http: HttpClient) {
    this.apiUrl = `${environment.apiURL}/workflowlevel2/`;
  }

  getActivities (): Observable<Activity[]> {
    return this.http
      .get<Activity[]>(this.apiUrl)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  createActivity (payload: Activity): Observable<Activity> {
    return this.http
      .post<Activity>(this.apiUrl, payload)
      .pipe(catchError((error: any) => throwError(error.json)));
  }

  updateActivity (payload: number): Observable<Activity> {
    return this.http
      .put<Activity>(`${this.apiUrl}${payload}/`, payload)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

  removeActivity (payload: number): Observable<Activity> {
    return this.http
      .delete<any>(`${this.apiUrl}${payload}/`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
