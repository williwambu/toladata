import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as activitiesActions from '../actions/activity.action';
import * as fromServices from '../../services';


@Injectable()
export class ActivitiesEffects {
  @Effect()
  loadPrograms$ = this.actions$.ofType(activitiesActions.LOAD_ACTIVITIES)
    .pipe(
      switchMap(() => {
        return this.activityService.getActivities().pipe(
          map(activities => new activitiesActions.LoadActivitiesSuccess(activities)),
          catchError(error => of(new activitiesActions.LoadActivitiesFail(error)))
        );
      })
    );

  constructor (private actions$: Actions,
               private activityService: fromServices.ActivityService) {
  }

}
