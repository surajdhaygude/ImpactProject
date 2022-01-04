import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugmasterComponent } from './drugmaster.component';

describe('DrugmasterComponent', () => {
  let component: DrugmasterComponent;
  let fixture: ComponentFixture<DrugmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugmasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
