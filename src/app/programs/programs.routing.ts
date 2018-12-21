import { Routes } from '@angular/router';

import * as fromComponents from './components';

export const ROUTES: Routes = [
  {
    path: '',
    component: fromComponents.ProgramsListComponent,
  },
  {
    path: ':programId/activities/add',
    component: fromComponents.AddActivityComponent
  }
];
