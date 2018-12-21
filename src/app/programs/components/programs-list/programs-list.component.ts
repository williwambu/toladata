import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ToastrService } from 'ngx-toastr';

import * as fromStore from '../../store';

import { Program } from '../../../models/program.models';
import { Activity } from '../../../models/activity.model';

import { AppLoaderService } from '../../../shared/app-loader/app-loader.service';

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
  programsLoading$: Observable<boolean>;
  programsLoaded$: Observable<boolean>;
  activitiesLoading$: Observable<boolean>;

  public programs: Program[];
  public activitiesTableMessages = {
    emptyMessage: 'No activities for this program, click + to create.'
  };

  constructor (private store: Store<fromStore.IProgramsState>,
               private appLoaderService: AppLoaderService,
               private toastrService: ToastrService) {
  }

  ngOnInit () {
    this.programs$ = this.store.select(fromStore.getAllPrograms);
    this.activities$ = this.store.select(fromStore.getAllActivities);

    this.programsLoading$ = this.store.select(fromStore.getProgramsLoading);
    this.programsLoaded$ = this.store.select(fromStore.getProgramsLoaded);

    this.activitiesLoading$ = this.store.select(fromStore.getActivitiesLoading);

    this.store.dispatch(new fromStore.LoadPrograms());
    this.store.dispatch(new fromStore.LoadActivities());

    this.programsLoading$.subscribe(loading => {
      if (loading) {
        setTimeout(() => this.appLoaderService.open());
      } else {
        this.appLoaderService.close();
      }
    });

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
  onActivitiesToggle () {
  }

  /**
   * @param programUrl URL of Program(Workglowlevel1)
   * @param activities Array of Activity model
   * @returns Activity[] Array of activities
   */
  filterActivities (programUrl, activities: Activity[]): Activity[] {
    return activities.filter(activity => activity.workflowlevel1 === programUrl);
  }

  /**
   * Delete an activity
   */
  deleteActivity (activityId: number): void {
    this.store.dispatch(new fromStore.DeleteActivity(activityId));
    this.activitiesLoading$.subscribe(loading => {
      if (loading) {
        this.appLoaderService.open('Deleting activity');
      } else {
        this.appLoaderService.close();
        this.toastrService.success('Success', 'Activity deleted successfully');
      }
    });
  }
}
