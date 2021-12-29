import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientdetailsdashboardComponent } from './patientdetailsdashboard.component';

describe('PatientdetailsdashboardComponent', () => {
  let component: PatientdetailsdashboardComponent;
  let fixture: ComponentFixture<PatientdetailsdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientdetailsdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientdetailsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
