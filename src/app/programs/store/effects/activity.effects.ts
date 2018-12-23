import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as activitiesActions from '../actions/activity.action';
import * as fromServices from '../../../services/index';


@Injectable()
export class ActivitiesEffects {
  @Effect()
  loadActivities$ = this.actions$.ofType(activitiesActions.LOAD_ACTIVITIES)
    .pipe(
      switchMap(() => {
        return this.activityService.getActivities().pipe(
          map(activities => new activitiesActions.LoadActivitiesSuccess(activities)),
          catchError(error => of(new activitiesActions.LoadActivitiesFail(error)))
        );
      })
    );

  @Effect()
  createActivity$ = this.actions$.ofType(activitiesActions.CREATE_ACTIVITY)
    .pipe(
      switchMap((action: activitiesActions.CreateActivity) => {
        return this.activityService.createActivity(action.payload).pipe(
          map(activity => new activitiesActions.CreateActivitySuccess(activity)),
          catchError(error => of(new activitiesActions.CreateActivityFail(error)))
        );
      })
    );

  @Effect()
  deleteActivity$ = this.actions$.ofType(activitiesActions.DELETE_ACTIVITY)
    .pipe(
      switchMap((action: activitiesActions.DeleteActivity) => {
        return this.activityService.removeActivity(action.payload).pipe(
          map(response => {
            console.log(response);
            if (response.status === '204') {
              return new activitiesActions.DeleteActivitySuccess(action.payload);
            }
          }),
          catchError(error => of(new activitiesActions.DeleteActivityFail(error)))
        );
      })
    );

  constructor (private actions$: Actions,
               private activityService: fromServices.ActivityService) {
  }

}
