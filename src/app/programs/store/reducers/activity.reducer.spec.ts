import {
  activitiesInitialState,
  activitiesReducer
} from './activity.reducer';

import {
  LoadActivities,
  LoadActivitiesSuccess,
  LoadActivitiesFail,
  CreateActivity,
  CreateActivityFail,
  CreateActivitySuccess, DeleteActivity, DeleteActivityFail, DeleteActivitySuccess,
} from '../actions';

import { ActivityAction } from '../actions';
import { Activity } from '../../../models/activity.model';

const activity: Activity = {
  id: 1,
  name: 'Test activity',
  url: 'https://dev-api.toladata.io/api/workflowlevel2/1',
  workflowlevel1: 'https://dev-api.toladata.io/api/workflowlevel1/223/',
};

describe('ActivitiesReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as ActivityAction;
      const state = activitiesReducer(undefined, action);

      expect(state).toBe(activitiesInitialState);
    });
  });

  describe('[Activity] Load activities', () => {
    it('should toggle loading to true and loaded to false', () => {
      const action = new LoadActivities();
      const state = activitiesReducer(activitiesInitialState, action);

      expect(state.loading).toEqual(true);
      expect(state.loaded).toEqual(false);
      expect(state.entities).toEqual({});
    });

    describe('[Activity] Load activities fail', () => {
      it('should return the previous state', () => {
        const previousState = {...activitiesInitialState, loading: true};
        const action = new LoadActivitiesFail({});
        const state = activitiesReducer(previousState, action);

        expect(state).toEqual(activitiesInitialState);
      });
    });

    describe('[Activity] Load activities success', () => {
      it('should add activities to state', () => {
        const action = new LoadActivitiesSuccess([activity]);
        const result = activitiesReducer(activitiesInitialState, action);

        expect(result).toEqual({
          ...activitiesInitialState,
          entities: {
            [activity.id]: activity,
          },
          loading: false,
          loaded: true
        });
      });
    });
  });

  describe('[Activity] Create Activity', function () {
    it('it should toggle loading state', () => {
      const action = new CreateActivity(activity);
      const result = activitiesReducer(activitiesInitialState, action);

      expect(result).toEqual({
        ...activitiesInitialState,
        loading: true,
        loaded: false
      });
    });
  });

  describe('[Activity] Create Activity success', () => {
    it('should add an activity to state', () => {
      const action = new CreateActivitySuccess(activity);
      const result = activitiesReducer(activitiesInitialState, action);
      expect(result).toEqual({
        entities: {
          [activity.id]: activity
        },
        loading: false,
        loaded: true
      });
    });
  });

  describe('[Activity] Create Activity fail', () => {
    it('should should toggle loaded to false', () => {
      const action = new CreateActivityFail({});
      const result = activitiesReducer(activitiesInitialState, action);
      expect(result).toEqual({
        ...activitiesInitialState,
        loaded: false
      });
    });
  });

  describe('[Activity] Delete Activity', () => {
    it('should should toggle loading to true', () => {
      const action = new DeleteActivity(activity.id);
      const result = activitiesReducer(activitiesInitialState, action);
      expect(result).toEqual({
        ...activitiesInitialState,
        loading: true,
      });
    });
  });

  describe('[Activity] Delete Activity fail', () => {
    it('should should toggle loaded to true, loading to false', () => {
      const action = new DeleteActivityFail({});
      const result = activitiesReducer(activitiesInitialState, action);
      expect(result).toEqual({
        ...activitiesInitialState,
        loaded: false
      });
    });
  });

  describe('[Activity] Delete Activity success', () => {
    it('should remove program with specified id from state', () => {
      const state = {
        entities: {
          [activity.id]: activity,
        },
        loading: false,
        loaded: false
      };
      const action = new DeleteActivitySuccess(activity.id);
      const result = activitiesReducer(state, action);
      console.log(result);
      expect(result).toEqual({
        entities: {},
        loaded: true,
        loading: false
      });
    });
  });
});
