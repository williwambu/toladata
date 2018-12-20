import * as fromPrograms from '../actions/programs.actions';
import { Program } from '../../models/program.models';


export interface ProgramsState {
  data: Program[];
  loaded: boolean;
  loading: boolean;
}

export const initialState = {
  data: [],
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
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data
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
export const getPrograms = (state: ProgramsState) => state.data;
