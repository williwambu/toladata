import { Action } from '@ngrx/store';
import { Program } from '../../models/program.models';
import { Activity } from '../../models/activity.model';

// load activities
export const LOAD_ACTIVITIES = '[Activity] Load activities';

export const LOAD_ACTIVITIES_FAIL = '[Activity] Load activities fail';

export const LOAD_ACTIVITIES_SUCCESS = '[Activity] Load Activities success';


// action creators
export class LoadActivities implements Action {
  readonly type = LOAD_ACTIVITIES;

  constructor () {
  }

}


export class LoadActivitiesFail implements Action {
  readonly type = LOAD_ACTIVITIES_FAIL;

  constructor (public payload: Activity[]) {
  }
}

export class LoadActivitiesSuccess implements Action {
  readonly type = LOAD_ACTIVITIES_SUCCESS;

  constructor (public payload: Activity[]) {
  }
}

// action types
export type ActivityAction = LoadActivities | LoadActivitiesFail | LoadActivitiesSuccess;
