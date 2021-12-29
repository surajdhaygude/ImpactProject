import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnurseappointmentComponent } from './addnurseappointment.component';

describe('AddnurseappointmentComponent', () => {
  let component: AddnurseappointmentComponent;
  let fixture: ComponentFixture<AddnurseappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnurseappointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnurseappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
