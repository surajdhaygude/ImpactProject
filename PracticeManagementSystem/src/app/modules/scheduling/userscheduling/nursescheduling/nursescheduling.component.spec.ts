import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseschedulingComponent } from './nursescheduling.component';

describe('NurseschedulingComponent', () => {
  let component: NurseschedulingComponent;
  let fixture: ComponentFixture<NurseschedulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseschedulingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseschedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
