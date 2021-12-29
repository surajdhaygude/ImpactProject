import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursedetailsComponent } from './nursedetails.component';

describe('NursedetailsComponent', () => {
  let component: NursedetailsComponent;
  let fixture: ComponentFixture<NursedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NursedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NursedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
