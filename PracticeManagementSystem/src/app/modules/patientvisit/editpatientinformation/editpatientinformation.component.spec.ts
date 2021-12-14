import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpatientinformationComponent } from './editpatientinformation.component';

describe('EditpatientinformationComponent', () => {
  let component: EditpatientinformationComponent;
  let fixture: ComponentFixture<EditpatientinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpatientinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpatientinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
