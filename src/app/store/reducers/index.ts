import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPrograms from './programs.reducer';

export interface ProgramsState {
  programs: fromPrograms.ProgramsState;
}

export const reducers: ActionReducerMap<ProgramsState> = {
  programs: fromPrograms.reducer,
};

export const getProgramsState = createFeatureSelector<ProgramsState>('programs');
export const getProgramsDataState = createSelector(getProgramsState, (state: ProgramsState) => state.programs);
export const getAllPrograms = createSelector(getProgramsDataState, fromPrograms.getPrograms);
export const getProgramsLoaded = createSelector(getProgramsDataState, fromPrograms.getProgramsLoaded);
export const getProgramsLoading = createSelector(getProgramsDataState, fromPrograms.getProgramsLoading);
