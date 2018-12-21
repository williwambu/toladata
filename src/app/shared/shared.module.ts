import {NgModule} from '@angular/core';

import {
  MatCardModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatDialogModule
} from '@angular/material';


import { AppLoaderComponent } from './app-loader/app-loader.component';
import { AppLoaderService } from './app-loader/app-loader.service';

const classesToInclude = [
  AppLoaderComponent
];

@NgModule({
  imports: [
    MatCardModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatDialogModule,
  ],
  entryComponents: [AppLoaderComponent],
  providers: [
    AppLoaderService,
  ],
  declarations: classesToInclude,
  exports: classesToInclude
})
export class SharedModule {
}
