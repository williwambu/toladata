import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPrograms from '../reducers/programs.reducer';
import * as fromRoot from '../../../store';
import { Program } from '../../../models/program.models';

// PROGRAMS
export interface ProgramsState {
  programs: fromPrograms.IProgramsState;
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
  fromPrograms.getProgramsEntitiesValue);

export const getAllPrograms = createSelector(
  getProgramsEntities,
  (entities) => {
    return Object.keys(entities)
      .map(id => entities[parseInt(id, 10)]);
  });

export const getSelectedProgram = createSelector(
  getProgramsEntities,
  fromRoot.getRouterState,
  (entities, router): Program => {
      return router.state && entities[router.state.params.programId];
  });

export const getProgramsLoaded = createSelector(
  getProgramsDataState,
  fromPrograms.getProgramsLoadedValue);

export const getProgramsLoading = createSelector(
  getProgramsDataState,
  fromPrograms.getProgramsLoadingValue);
