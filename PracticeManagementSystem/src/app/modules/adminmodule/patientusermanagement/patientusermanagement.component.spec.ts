import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientusermanagementComponent } from './patientusermanagement.component';

describe('PatientusermanagementComponent', () => {
  let component: PatientusermanagementComponent;
  let fixture: ComponentFixture<PatientusermanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientusermanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientusermanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
