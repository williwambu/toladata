import { Action } from '@ngrx/store';
import { Activity } from '../../../models/activity.model';

// load activities
export const LOAD_ACTIVITIES = '[Activity] Load activities';

export const LOAD_ACTIVITIES_FAIL = '[Activity] Load activities fail';

export const LOAD_ACTIVITIES_SUCCESS = '[Activity] Load Activities success';

export const CREATE_ACTIVITY = '[Activity] Create Activity';

export const CREATE_ACTIVITY_SUCCESS = '[Activity] Create Activity success';

export const CREATE_ACTIVITY_FAIL = '[Activity] Create Activity fail';

export const DELETE_ACTIVITY = '[Delete] Delete Activity';

export const DELETE_ACTIVITY_FAIL = '[Delete] Delete Activity fail';

export const DELETE_ACTIVITY_SUCCESS = '[Delete] Delete Activity success';

export class LoadActivities implements Action {
  readonly type = LOAD_ACTIVITIES;

  constructor () {
  }

}


export class LoadActivitiesFail implements Action {
  readonly type = LOAD_ACTIVITIES_FAIL;

  constructor (public payload) {
  }
}

export class LoadActivitiesSuccess implements Action {
  readonly type = LOAD_ACTIVITIES_SUCCESS;

  constructor (public payload: Activity[]) {
  }
}

export class CreateActivity implements Action {
  readonly type = CREATE_ACTIVITY;

  constructor (public payload: Activity) {
  }
}

export class CreateActivityFail implements Action {
  readonly type = CREATE_ACTIVITY_FAIL;

  constructor (public payload) {
  }
}

export class CreateActivitySuccess implements Action {
  readonly type = CREATE_ACTIVITY_SUCCESS;

  constructor (public payload) {
  }
}

export class DeleteActivity implements Action {
  readonly type = DELETE_ACTIVITY;

  constructor (public payload: number) {
  }
}

export class DeleteActivityFail implements Action {
  readonly type = DELETE_ACTIVITY_FAIL;

  constructor (public payload) {
  }
}

export class DeleteActivitySuccess implements Action {
  readonly type = DELETE_ACTIVITY_SUCCESS;

  constructor () {
  }
}

// action types
export type ActivityAction =
  LoadActivities
  | LoadActivitiesFail
  | LoadActivitiesSuccess
  | CreateActivity
  | CreateActivityFail
  | CreateActivitySuccess
  | DeleteActivity
  | DeleteActivityFail
  | DeleteActivitySuccess;
