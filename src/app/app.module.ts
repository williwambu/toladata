import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CustomSerializer, reducers } from './store';

import { MAT_DATE_LOCALE, MatCardModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// ngrx/store devtools
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// HTTP intercepter
import { TokenInterceptor } from './interceptors/token.interceptor';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ActivityService, ProgramsService } from './services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule,
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
  ],
  providers: [
    Store,
    ActivityService,
    ProgramsService,
    ToastrService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'en-GB'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
