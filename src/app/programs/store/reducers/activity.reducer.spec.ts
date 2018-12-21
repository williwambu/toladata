import * as fromActivity from './activity.reducer';
import * as fromActions from '../actions/activity.action';
import { Activity} from '../../../models/activity.model';
import { ActivityAction } from '../actions/activity.action';

describe('ActivitiesReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { activitiesInitialState } = fromActivity;
      const action = {} as ActivityAction;
      const state = fromActivity.activitiesReducer(undefined, action);

      expect(state).toBe(activitiesInitialState);
    });
  });
});
