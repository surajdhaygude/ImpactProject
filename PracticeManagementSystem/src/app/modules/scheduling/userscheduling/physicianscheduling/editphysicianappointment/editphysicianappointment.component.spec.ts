import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditphysicianappointmentComponent } from './editphysicianappointment.component';

describe('EditphysicianappointmentComponent', () => {
  let component: EditphysicianappointmentComponent;
  let fixture: ComponentFixture<EditphysicianappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditphysicianappointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditphysicianappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
