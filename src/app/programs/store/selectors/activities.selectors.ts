import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActivities from '../reducers/activity.reducer';

// ACTIVITIES
export interface IActivitiesState {
  activities: fromActivities.ActivitiesState;

}

export const activityReducers: ActionReducerMap<IActivitiesState> = {
  activities: fromActivities.activitiesReducer,
};

export const getActivitiesState = createFeatureSelector<IActivitiesState>('activities');
export const getActivitiesDataState = createSelector(
  getActivitiesState,
  (state: IActivitiesState) => state.activities);

export const getActivitiesEntities = createSelector(
  getActivitiesDataState,
  fromActivities.getActivitiesEntitiesValue);

export const getAllActivities = createSelector(
  getActivitiesEntities,
  (entities) => {
    return Object.keys(entities)
      .map(id => entities[parseInt(id, 10)]);
  });

export const getActivityById = (activityId) => createSelector(
  getActivitiesEntities,
  entities => entities[activityId]);

export const getActivitiesLoaded = createSelector(
  getActivitiesDataState,
  fromActivities.getActivitiesLoadedValue);

export const getActivitiesLoading = createSelector(
  getActivitiesDataState,
  fromActivities.getActivitiesLoadingValue);
