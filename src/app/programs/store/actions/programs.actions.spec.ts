import {
  LoadPrograms,
  LOAD_PROGRAMS,
  LoadProgramsSuccess,
  LOAD_PROGRAMS_SUCCESS,
  LoadProgramsFail,
  LOAD_PROGRAMS_FAIL
} from './programs.actions';

import { Program } from '../../../models/program.model';

const program: Program = {
  id: 1,
  name: 'Test activity',
  url: 'https://dev-api.toladata.io/api/workflowlevel1/1',
};

describe('Programs Actions', () => {
  describe('[Program] Load programs', () => {
    it('should create an action', () => {
      const action = new LoadPrograms();

      expect({ ...action }).toEqual({ type: LOAD_PROGRAMS });
    });
  });

  describe('[Program] Load programs success', () => {
    it('should create an action', () => {
      const payload: Program [] = [program];
      const action = new LoadProgramsSuccess(payload);

      expect({ ...action }).toEqual({
        type: LOAD_PROGRAMS_SUCCESS,
        payload
      });
    });
  });

  describe('[Program] Load programs fail', () => {
    it('should create an action', () => {
      const payload = { message: 'Error loading programs' };
      const action = new LoadProgramsFail(payload);

      expect({ ...action }).toEqual({
        type: LOAD_PROGRAMS_FAIL,
        payload
      });
    });
  });
});
