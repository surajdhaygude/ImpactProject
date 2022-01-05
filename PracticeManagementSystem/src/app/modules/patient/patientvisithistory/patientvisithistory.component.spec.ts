import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientvisithistoryComponent } from './patientvisithistory.component';

describe('PatientvisithistoryComponent', () => {
  let component: PatientvisithistoryComponent;
  let fixture: ComponentFixture<PatientvisithistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientvisithistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientvisithistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
