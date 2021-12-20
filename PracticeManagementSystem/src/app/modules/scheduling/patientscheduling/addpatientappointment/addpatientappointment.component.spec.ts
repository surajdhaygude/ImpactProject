import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpatientappointmentComponent } from './addpatientappointment.component';

describe('AddpatientappointmentComponent', () => {
  let component: AddpatientappointmentComponent;
  let fixture: ComponentFixture<AddpatientappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpatientappointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpatientappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
