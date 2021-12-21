import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysiciandashboardComponent } from './physiciandashboard.component';

describe('PhysiciandashboardComponent', () => {
  let component: PhysiciandashboardComponent;
  let fixture: ComponentFixture<PhysiciandashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysiciandashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysiciandashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
