import {
  programsInitialState,
  reducer
} from './programs.reducer';

import {
  LoadPrograms,
  LoadProgramsSuccess,
  LoadProgramsFail
} from '../actions';

import { ProgramsActions } from '../actions';
import { Program } from '../../../models/program.model';

const program: Program = {
  id: 1,
  name: 'Test activity',
  url: 'https://dev-api.toladata.io/api/workflowlevel1/1',
};

describe('ProgramsReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as ProgramsActions;
      const state = reducer(undefined, action);

      expect(state).toBe(programsInitialState);
    });
  });

  describe('[Programs] Load programs', () => {
    it('should toggle loading to true and loaded to false', () => {
      const action = new LoadPrograms();
      const state = reducer(programsInitialState, action);

      expect(state.loading).toEqual(true);
      expect(state.loaded).toEqual(false);
      expect(state.entities).toEqual({});
    });

    describe('[Program] Load Programs fail', () => {
      it('should return the previous state', () => {
        const previousState = {...programsInitialState, loading: true};
        const action = new LoadProgramsFail({});
        const state = reducer(previousState, action);

        expect(state).toEqual(programsInitialState);
      });
    });

    describe('[Program] Load programs success', () => {
      it('should add programs to state', () => {
        const action = new LoadProgramsSuccess([program]);
        const result = reducer(programsInitialState, action);

        expect(result).toEqual({
          ...programsInitialState,
          entities: {
            [program.id]: program,
          },
          loading: false,
          loaded: true
        });
      });
    });
  });
});
