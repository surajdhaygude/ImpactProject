import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergyinformationComponent } from './allergyinformation.component';

describe('AllergyinformationComponent', () => {
  let component: AllergyinformationComponent;
  let fixture: ComponentFixture<AllergyinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllergyinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergyinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
