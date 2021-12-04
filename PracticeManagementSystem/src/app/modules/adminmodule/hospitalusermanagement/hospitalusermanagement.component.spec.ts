import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalusermanagementComponent } from './hospitalusermanagement.component';

describe('HospitalusermanagementComponent', () => {
  let component: HospitalusermanagementComponent;
  let fixture: ComponentFixture<HospitalusermanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalusermanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalusermanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
