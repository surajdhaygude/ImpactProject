import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientvisitdashboardComponent } from './patientvisitdashboard.component';

describe('PatientvisitdashboardComponent', () => {
  let component: PatientvisitdashboardComponent;
  let fixture: ComponentFixture<PatientvisitdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientvisitdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientvisitdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
