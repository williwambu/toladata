import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'programs'
  },
  {
    path: 'programs',
    loadChildren: './programs/programs.module#ProgramsModule'
  }
];
