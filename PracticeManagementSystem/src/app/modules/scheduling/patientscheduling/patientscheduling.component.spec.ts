import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientschedulingComponent } from './patientscheduling.component';

describe('PatientschedulingComponent', () => {
  let component: PatientschedulingComponent;
  let fixture: ComponentFixture<PatientschedulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientschedulingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientschedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
