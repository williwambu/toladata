import { Action } from '@ngrx/store';
import { Program } from '../../../models/program.model';

// load programs
export const LOAD_PROGRAMS = '[Programs] Load programs';

export const LOAD_PROGRAMS_FAIL = '[Programs] Load programs fail';

export const LOAD_PROGRAMS_SUCCESS = '[Programs] Load programs success';


// action creators
export class LoadPrograms implements Action {
  readonly type = LOAD_PROGRAMS;

  constructor () {
  }

}


export class LoadProgramsFail implements Action {
  readonly type = LOAD_PROGRAMS_FAIL;

  constructor (public payload) {
  }
}

export class LoadProgramsSuccess implements Action {
  readonly type = LOAD_PROGRAMS_SUCCESS;

  constructor (public payload: Program[]) {
  }
}

// action types
export type ProgramsActions = LoadPrograms | LoadProgramsFail | LoadProgramsSuccess;
