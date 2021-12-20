import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysiciandetailsComponent } from './physiciandetails.component';

describe('PhysiciandetailsComponent', () => {
  let component: PhysiciandetailsComponent;
  let fixture: ComponentFixture<PhysiciandetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysiciandetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysiciandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
