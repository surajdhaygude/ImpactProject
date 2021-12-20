import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianschedulingComponent } from './physicianscheduling.component';

describe('PhysicianschedulingComponent', () => {
  let component: PhysicianschedulingComponent;
  let fixture: ComponentFixture<PhysicianschedulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicianschedulingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicianschedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
