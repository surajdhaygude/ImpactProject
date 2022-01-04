import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitdashboardComponent } from './visitdashboard.component';

describe('VisitdashboardComponent', () => {
  let component: VisitdashboardComponent;
  let fixture: ComponentFixture<VisitdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
