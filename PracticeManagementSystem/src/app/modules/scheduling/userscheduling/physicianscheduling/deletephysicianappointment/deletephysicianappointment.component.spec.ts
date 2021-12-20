import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletephysicianappointmentComponent } from './deletephysicianappointment.component';

describe('DeletephysicianappointmentComponent', () => {
  let component: DeletephysicianappointmentComponent;
  let fixture: ComponentFixture<DeletephysicianappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletephysicianappointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletephysicianappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
