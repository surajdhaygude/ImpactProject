import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnurseappointmentComponent } from './editnurseappointment.component';

describe('EditnurseappointmentComponent', () => {
  let component: EditnurseappointmentComponent;
  let fixture: ComponentFixture<EditnurseappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditnurseappointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditnurseappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
