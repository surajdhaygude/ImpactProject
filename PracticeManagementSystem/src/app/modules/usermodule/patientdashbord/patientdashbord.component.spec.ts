import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientdashbordComponent } from './patientdashbord.component';

describe('PatientdashbordComponent', () => {
  let component: PatientdashbordComponent;
  let fixture: ComponentFixture<PatientdashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientdashbordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientdashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
