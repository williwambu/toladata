import * as fromActivity from '../actions/activity.action';
import { Activity } from '../../../models/activity.model';
import { getActivitiesState } from '../selectors';

export interface ActivitiesState {
  entities: { [id: number]: Activity };
  loaded: boolean;
  loading: boolean;
}

export const activitiesInitialState = {
  entities: {},
  loaded: false,
  loading: false
};

export function activitiesReducer (
  state = activitiesInitialState,
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

    case fromActivity.CREATE_ACTIVITY: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case fromActivity.CREATE_ACTIVITY_SUCCESS: {
      const { entities } = state;
      entities[action.payload.id] = action.payload;

      return {
        ...state,
        entities,
        loading: false,
        loaded: true
      };
    }

    case fromActivity.DELETE_ACTIVITY: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case fromActivity.DELETE_ACTIVITY_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    case fromActivity.DELETE_ACTIVITY_SUCCESS: {
      let entities = state.entities ;
      delete entities[action.payload];

      return {
        ...state,
        entities,
        loading: false,
        loaded: true
      };
    }
  }

  return state;
}

export const getActivitiesLoadingValue = (state: ActivitiesState) => state.loading;
export const getActivitiesLoadedValue = (state: ActivitiesState) => state.loaded;
export const getActivitiesEntitiesValue = (state: ActivitiesState) => state.entities;

