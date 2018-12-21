import * as fromPrograms from '../actions/programs.actions';
import { Program } from '../../models/program.models';


export interface ProgramsState {
  entities: { [id: number]: Program };
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
  action: fromPrograms.ProgramsActions
): ProgramsState {
  switch (action.type) {
    case fromPrograms.LOAD_PROGRAMS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromPrograms.LOAD_PROGRAMS_SUCCESS: {
      const programs = action.payload;
      const newEntities = programs.reduce((entities: { [id: number]: Program }, program) => {
        return {
          ...entities,
          [program.id]: program
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

    case fromPrograms.LOAD_PROGRAMS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }
  return state;
}

export const getProgramsLoading = (state: ProgramsState) => state.loading;
export const getProgramsLoaded = (state: ProgramsState) => state.loaded;
export const getProgramsEntities = (state: ProgramsState) => state.entities;
