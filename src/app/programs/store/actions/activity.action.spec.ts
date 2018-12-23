import {
  LoadActivities,
  LOAD_ACTIVITIES,
  LoadActivitiesSuccess,
  LOAD_ACTIVITIES_SUCCESS,
  LoadActivitiesFail,
  LOAD_ACTIVITIES_FAIL
} from './activity.action';

import { Activity } from '../../../models/activity.model';

const activity: Activity = {
  id: 1,
  name: 'Test activity',
  url: 'https://dev-api.toladata.io/api/workflowlevel2/1',
  workflowlevel1: 'https://dev-api.toladata.io/api/workflowlevel1/223/',
};

describe('Activities Actions', () => {
  describe('[Activity] Load activities', () => {
    it('should create an action', () => {
      const action = new LoadActivities();

      expect({ ...action }).toEqual({ type: LOAD_ACTIVITIES});
    });
  });

  describe('[Activity] Load activities success', () => {
    it('should create an action', () => {
      const payload: Activity[] = [activity];
      const action = new LoadActivitiesSuccess(payload);

      expect({ ...action }).toEqual({
        type: LOAD_ACTIVITIES_SUCCESS,
        payload
    });
    });
  });

  describe('[Activity] Load activities fail', () => {
    it('should create an action', () => {
      const payload = { message: 'Error loading activities' };
      const action = new LoadActivitiesFail(payload);

      expect({ ...action }).toEqual({
        type: LOAD_ACTIVITIES_FAIL,
        payload
      });
    });
  });
});
