import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as programActions from '../actions/programs.actions';
import * as fromServices from '../../../services/index';


@Injectable()
export class ProgramsEffects {
  @Effect()
  loadPrograms$ = this.actions$.ofType(programActions.LOAD_PROGRAMS)
    .pipe(
      switchMap(() => {
        return this.programService.getPrograms().pipe(
          map(programs => new programActions.LoadProgramsSuccess(programs)),
          catchError(error => of(new programActions.LoadProgramsFail(error)))
        );
      })
    );

  constructor (private actions$: Actions,
               private programService: fromServices.ProgramsService) {
  }

}
