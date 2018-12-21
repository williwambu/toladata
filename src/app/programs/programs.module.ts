import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatTooltipModule,
  MatFormFieldModule, MatDatepickerModule, MatNativeDateModule
} from '@angular/material';


import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { effects, programReducers, activityReducers } from './store';

// services
import * as fromService from '../services';

// routes
import { ROUTES } from './programs.routing';

// components
import * as fromComponents from './components';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    NgxDatatableModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SharedModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('programs', programReducers),
    StoreModule.forFeature('activities', activityReducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [...fromService.services]
})
export class ProgramsModule {
}
