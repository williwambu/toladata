import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPrograms from './programs.reducer';
import * as fromActivities from './activity.reducer';

// PROGRAMS
export interface ProgramsState {
  programs: fromPrograms.ProgramsState;
}

export const programReducers: ActionReducerMap<ProgramsState> = {
  programs: fromPrograms.reducer,
};
export const getProgramsState = createFeatureSelector<ProgramsState>('programs');

export const getProgramsDataState = createSelector(
  getProgramsState,
  (state: ProgramsState) => state.programs);

export const getProgramsEntities = createSelector(
  getProgramsDataState,
  fromPrograms.getProgramsEntities);

export const getAllPrograms = createSelector(
  getProgramsEntities,
  (entities) => {
    return Object.keys(entities)
      .map(id => entities[parseInt(id, 10)]);
  });

export const getProgramsLoaded = createSelector(
  getProgramsDataState,
  fromPrograms.getProgramsLoaded);

export const getProgramsLoading = createSelector(
  getProgramsDataState,
  fromPrograms.getProgramsLoading);


// ACTIVITIES
export interface ActivitiesState {
  activities: fromActivities.ActivitiesState;

}

export const activityReducers: ActionReducerMap<ActivitiesState> = {
  activities: fromActivities.reducer,
};

export const getActivitiesState = createFeatureSelector<ActivitiesState>('activities');
export const getActivitiesDataState = createSelector(
  getActivitiesState,
  (state: ActivitiesState) => state.activities);

export const getActivitiesEntities = createSelector(
  getActivitiesDataState,
  fromActivities.getActivitiesEntities);

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
  fromActivities.getActivitiesLoaded);

export const getActivitiesLoading = createSelector(
  getActivitiesDataState,
  fromActivities.getActivitiesLoading);
