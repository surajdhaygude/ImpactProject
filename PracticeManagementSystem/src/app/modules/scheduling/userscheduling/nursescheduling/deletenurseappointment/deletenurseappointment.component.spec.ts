import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletenurseappointmentComponent } from './deletenurseappointment.component';

describe('DeletenurseappointmentComponent', () => {
  let component: DeletenurseappointmentComponent;
  let fixture: ComponentFixture<DeletenurseappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletenurseappointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletenurseappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
