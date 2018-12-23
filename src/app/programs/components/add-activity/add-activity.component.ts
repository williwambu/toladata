import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { ToastrService } from 'ngx-toastr';

import * as fromStore from '../../store';
import { Program } from '../../../models/program.model';

import { AppLoaderService } from '../../../shared/app-loader/app-loader.service';
import { ActivityService } from '../../../services';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss']
})
export class AddActivityComponent implements OnInit {
  activityForm: FormGroup;
  program$: Observable<Program>;
  activitiesLoading$: Observable<boolean>;
  program: Program;

  constructor(private activityService: ActivityService,
              private store: Store<fromStore.IProgramsState>,
              private formBuilder: FormBuilder,
              private appLoaderService: AppLoaderService,
              private toastrService: ToastrService) {
  }

  ngOnInit() {
    this.program$ = this.store.select(fromStore.getSelectedProgram);
    this.program$.subscribe(program  => this.program = program);
    this.activitiesLoading$ = this.store.select(fromStore.getActivitiesLoading);

    this.activityForm = this.formBuilder.group({
      name: ['', Validators.required],
      start_date: [''],
      end_date: ['']
    });
  }

  /**
   * Create an activity
   */
  createActivity(): void {
    if (this.activityForm.valid) {
      const activity = this.activityForm.value;
      activity.workflowlevel1 = this.program.url;
      this.store.dispatch(new fromStore.CreateActivity(activity));
      this.activitiesLoading$.subscribe(loading => {
        if (loading) {
          this.appLoaderService.open('Creating activity');
        } else {
          this.appLoaderService.close();
          this.activityForm.reset();
          this.toastrService.success('Success', 'Activity created successfully');
        }
      });
    }
  }

}
