import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule, MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule,
  MatTooltipModule
} from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { effects, reducers } from '../store';

// services
import * as fromService from '../services';

// routes
import { ROUTES } from './programs.routing';

// components
import * as fromComponents from './components';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

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
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('programs', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [...fromService.services]
})
export class ProgramsModule {
}
