import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ProgramsListComponent } from './programs-list.component';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule,
  MatDividerModule, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatMenuModule, MatNativeDateModule,
  MatTooltipModule
} from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';
import { ActivityService } from '../../../services';
import { AppLoaderService } from '../../../shared/app-loader/app-loader.service';
import { ToastrConfig, ToastrModule, ToastrService } from 'ngx-toastr';

describe('ProgramsListComponent', () => {
  let component: ProgramsListComponent;
  let fixture: ComponentFixture<ProgramsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramsListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [MatCardModule,
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
        RouterModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        StoreModule.forRoot({})],
      providers: [Store, ActivityService, AppLoaderService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
