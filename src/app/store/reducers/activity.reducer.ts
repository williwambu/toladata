import * as fromActivity from '../actions/activity.action';
import { Activity } from '../../models/activity.model';
import { ProgramsState } from './programs.reducer';

export interface ActivitiesState {
  entities: { [id: number]: Activity };
  loaded: boolean;
  loading: boolean;
}

export const initialState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer (
  state = initialState,
  action: fromActivity.ActivityAction
): ActivitiesState {
  switch (action.type) {
    case fromActivity.LOAD_ACTIVITIES: {
      return {
        ...state,
        loading: true
      };
    }

    case fromActivity.LOAD_ACTIVITIES_SUCCESS: {
      const activities = action.payload;

      const newEntities = activities.reduce((entities: { [id: number]: Activity }, activity) => {
        return {
          ...entities,
          [activity.id]: activity
        };
      }, {
        ...state.entities,
      });

      return {
        ...state,
        loading: false,
        loaded: true,
        entities: newEntities
      };
    }

    case fromActivity.LOAD_ACTIVITIES_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }
  return state;
}

export const getActivitiesLoading = (state: ActivitiesState) => state.loading;
export const getActivitiesLoaded = (state: ActivitiesState) => state.loaded;
export const getActivitiesEntities = (state: ActivitiesState) => state.entities;
