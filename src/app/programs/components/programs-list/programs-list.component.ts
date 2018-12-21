import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../../store';
import { Program } from '../../../models/program.models';
import { Activity } from '../../../models/activity.model';

@Component({
  selector: 'app-programs-list',
  templateUrl: './programs-list.component.html',
  styleUrls: ['./programs-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgramsListComponent implements OnInit {
  @ViewChild('programsTable') programsTable: any;

  programs$: Observable<Program[]>;
  activities$: Observable<Activity[]>;
  public programs: Program[];
  public activitiesTableMessages = {
    emptyMessage: 'No activities for this program, click + to create.'
  };

  constructor (private store: Store<fromStore.ProgramsState>) {
  }

  ngOnInit () {
    this.programs$ = this.store.select(fromStore.getAllPrograms);
    this.activities$ = this.store.select(fromStore.getAllActivities);
    this.store.dispatch(new fromStore.LoadPrograms());
    this.store.dispatch(new fromStore.LoadActivities());

    this.programs$
      .subscribe(programs => {
        this.activities$.subscribe(activities => {
          this.programs = programs.map(program => {
            program.activities = this.filterActivities(program.url, activities);
            return program;
          });
        });
      });
  }

  /**
   * Go to add activity interface
   * @param event DOM event object
   */
  goToAddActivity (event): void {
    event.preventDefault();
  }

  /**
   * Toggle activities view for a table row
   * @param row DataTable row object
   */
  toggleExpandRow (row): void {
    this.programsTable.rowDetail.toggleExpandRow(row);
  }

  /**
   *  Expand row details for all programs
   */
  expandAllRows (): void {
    this.programsTable.rowDetail.expandAllRows();
  }

  /**
   * Event listener for data table row expansion event
   */
  onActivitiesToggle() {
  }

  filterActivities (programUrl, activities: Activity[]): Activity[] {
    return activities.filter(activity => activity.workflowlevel1 === programUrl);
  }
}
