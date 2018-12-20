import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../../store';
import { Program } from '../../../models/program.models';

@Component({
  selector: 'app-programs-list',
  templateUrl: './programs-list.component.html',
  styleUrls: ['./programs-list.component.scss']
})
export class ProgramsListComponent implements OnInit {
  programs$: Observable<Program[]>;

  constructor (private store: Store<fromStore.ProgramsState>) {
  }

  ngOnInit () {
    this.programs$ = this.store.select(fromStore.getAllPrograms);
    this.store.dispatch(new fromStore.LoadPrograms());
  }
}
