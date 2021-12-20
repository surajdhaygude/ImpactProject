import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserschedulingComponent } from './userscheduling.component';

describe('UserschedulingComponent', () => {
  let component: UserschedulingComponent;
  let fixture: ComponentFixture<UserschedulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserschedulingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserschedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
