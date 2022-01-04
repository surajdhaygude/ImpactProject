import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianvisitdashboardComponent } from './physicianvisitdashboard.component';

describe('PhysicianvisitdashboardComponent', () => {
  let component: PhysicianvisitdashboardComponent;
  let fixture: ComponentFixture<PhysicianvisitdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicianvisitdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicianvisitdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
