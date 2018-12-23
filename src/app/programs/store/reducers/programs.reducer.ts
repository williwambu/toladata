import * as fromPrograms from '../actions/programs.actions';
import { Program } from '../../../models/program.model';


export interface IProgramsState {
  entities: { [id: number]: Program };
  loaded: boolean;
  loading: boolean;
}

export const programsInitialState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer (
  state = programsInitialState,
  action: fromPrograms.ProgramsActions
): IProgramsState {
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

export const getProgramsLoadingValue = (state: IProgramsState) => state.loading;
export const getProgramsLoadedValue = (state: IProgramsState) => state.loaded;
export const getProgramsEntitiesValue = (state: IProgramsState) => state.entities;
