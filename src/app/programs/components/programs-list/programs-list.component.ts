import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../../store';
import { Program } from '../../../models/program.models';

@Component({
  selector: 'app-programs-list',
  templateUrl: './programs-list.component.html',
  styleUrls: ['./programs-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgramsListComponent implements OnInit {
  @ViewChild('programsTable') programsTable: any;

  programs$: Observable<Program[]>;
  public columns: string [] = ['Name', 'Progress', 'Owner', 'Start date', 'Budget', 'Actions'];
  public programs: Program[];

  constructor (private store: Store<fromStore.ProgramsState>) {
  }

  ngOnInit () {
    this.programs$ = this.store.select(fromStore.getAllPrograms);
    this.programs$.subscribe(programs => this.programs = programs);
    this.store.dispatch(new fromStore.LoadPrograms());
  }

  /**
   * Go to add activity interface
   * @param event DOM event object
   */
  goToAddActivity(event) {
    event.preventDefault();
    console.log('Going to add activity');
  }

  /**
   * Toggle activities view for a table row
   * @param row DataTable row object
   */
  toggleExpandRow(row) {
    this.programsTable.rowDetail.toggleExpandRow(row);
  }

  /**
   * Event listener for data table row expansion event
   */
  onActivitiesToggle() {
  }
}
